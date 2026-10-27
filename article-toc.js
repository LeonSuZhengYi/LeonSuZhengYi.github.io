(() => {
  const toc = document.querySelector("[data-article-toc]");
  const body = document.querySelector(".post-body");
  if (!toc || !body) return;

  const nested = toc.dataset.articleToc === "nested";
  const sections = [...body.querySelectorAll(":scope > h2")];
  if (sections.length < 2) {
    toc.closest(".article-toc")?.setAttribute("hidden", "");
    return;
  }

  const usedIds = new Set();
  const entries = [];
  const groups = [];
  let activeEntry;
  let activeGroup = -1;
  let scheduled = false;
  let outlineNeedsReveal = false;
  let navigationTarget;
  let navigationTimer;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const identify = (heading) => {
    if (heading.id && document.getElementById(heading.id) === heading &&
        !usedIds.has(heading.id)) {
      usedIds.add(heading.id);
      return heading.id;
    }
    const base = heading.textContent.normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").toLowerCase()
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "article-section";
    let id = base;
    let suffix = 2;
    while (usedIds.has(id) || document.getElementById(id)) {
      id = base + "-" + suffix++;
    }
    usedIds.add(id);
    heading.id = id;
    return id;
  };

  const makeLink = (heading, groupIndex, label) => {
    const link = document.createElement("a");
    link.href = "#" + identify(heading);
    if (label) link.textContent = label;
    else link.innerHTML = heading.innerHTML;
    entries.push({ heading, link, groupIndex });
    return link;
  };

  let list;
  if (nested) {
    toc.closest(".article-toc")?.classList.add("nested-toc");
    toc.setAttribute("aria-label", "Article outline");
    list = document.createElement("ol");
    list.className = "toc-sections";
    toc.append(list);
  }

  const makeGroup = (heading, label) => {
    const index = groups.length;
    const item = document.createElement("li");
    item.className = "toc-section";
    const row = document.createElement("div");
    row.className = "toc-section-row";
    const link = makeLink(heading, index, label);
    row.append(link);
    const children = document.createElement("ol");
    children.className = "toc-subsections";
    children.hidden = true;
    children.id = "toc-subsections-" + heading.id;
    item.append(row, children);
    list.append(item);
    const group = { item, row, link, children, toggle: null };
    groups.push(group);
    return group;
  };

  if (nested) {
    let group;
    for (const heading of body.querySelectorAll(":scope > h2, :scope > h3")) {
      if (heading.tagName === "H2") {
        group = makeGroup(heading);
      } else {
        // Include introductory subsections that precede the first numbered section.
        if (!group) {
          const overview = document.querySelector(".post-header h1");
          if (!overview) continue;
          group = makeGroup(overview, "Overview");
        }
        const child = document.createElement("li");
        child.append(makeLink(heading, groups.length - 1));
        group.children.append(child);
      }
    }
  } else {
    sections.forEach((heading) => toc.append(makeLink(heading, -1)));
  }

  const expand = (index) => {
    groups.forEach((group, i) => {
      const open = i === index && group.children.childElementCount > 0;
      group.children.hidden = !open;
      group.item.classList.toggle("is-expanded", open);
      if (group.toggle) {
        group.toggle.setAttribute("aria-expanded", String(open));
        group.toggle.setAttribute("aria-label",
          (open ? "Collapse" : "Expand") + " subsections: " + group.link.textContent);
      }
    });
  };

  groups.forEach((group, index) => {
    if (!group.children.childElementCount) return;
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "toc-toggle";
    toggle.setAttribute("aria-controls", group.children.id);
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="m6 4 4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    toggle.addEventListener("click", () => {
      const top = group.row.getBoundingClientRect().top;
      expand(group.children.hidden ? index : -1);
      // Keep the selected row in place when another group's children disappear.
      toc.scrollTop += group.row.getBoundingClientRect().top - top;
    });
    group.toggle = toggle;
    group.row.append(toggle);
  });

  // Scroll only the outline, never the reading pane, to keep its active item visible.
  const reveal = (link) => {
    const viewport = toc.getBoundingClientRect();
    const item = link.getBoundingClientRect();
    if (item.top < viewport.top + 8) toc.scrollTop -= viewport.top + 8 - item.top;
    else if (item.bottom > viewport.bottom - 8) toc.scrollTop += item.bottom - viewport.bottom + 8;
  };

  const update = () => {
    scheduled = false;
    let current = navigationTarget || entries[0];
    if (!navigationTarget) {
      const threshold = nested ? 80 : 150;
      for (const entry of entries) {
        if (entry.heading.getBoundingClientRect().top <= threshold) current = entry;
        else break;
      }
    }
    const groupChanged = current.groupIndex !== activeGroup;
    if (nested && groupChanged) {
      activeGroup = current.groupIndex;
      expand(activeGroup);
    }
    const entryChanged = current !== activeEntry;
    if (entryChanged || groupChanged) {
      entries.forEach(({ link }) => {
        if (link === current.link) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      groups.forEach((group, index) =>
        group.item.classList.toggle("is-current-section", index === activeGroup));
      activeEntry = current;
    }
    if (nested && (entryChanged || groupChanged || outlineNeedsReveal)) {
      reveal(current.link.getClientRects().length ? current.link : groups[activeGroup].link);
    }
    outlineNeedsReveal = false;
  };

  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };
  const finishNavigation = () => {
    if (!navigationTarget) return;
    navigationTarget = undefined;
    clearTimeout(navigationTimer);
    outlineNeedsReveal = true;
    schedule();
  };
  const armNavigationEnd = () => {
    clearTimeout(navigationTimer);
    // Some long articles take several seconds to complete a native smooth
    // scroll. Keep the chosen group pinned until scrolling has genuinely
    // stopped; this timeout is only a fallback for browsers without
    // `scrollend` support.
    navigationTimer = setTimeout(finishNavigation, 1200);
  };
  window.addEventListener("scroll", () => {
    if (navigationTarget) armNavigationEnd();
    schedule();
  }, { passive: true });
  window.addEventListener("scrollend", finishNavigation, { passive: true });
  window.addEventListener("wheel", finishNavigation, { passive: true });
  window.addEventListener("touchstart", finishNavigation, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) finishNavigation();
  });
  window.addEventListener("resize", () => {
    outlineNeedsReveal = true;
    schedule();
  }, { passive: true });
  // Keep the chosen section open while the page moves past other sections.
  const goTo = (entry) => {
    navigationTarget = entry;
    outlineNeedsReveal = true;
    update();
    entry.heading.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
    if (reducedMotion.matches) finishNavigation();
    else armNavigationEnd();
  };
  if (nested) {
    entries.forEach((entry) => entry.link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (location.hash !== entry.link.hash) history.pushState(history.state, "", entry.link.hash);
      goTo(entry);
    }));
  }
  const followFragment = () => {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { id = ""; }
    const entry = entries.find((item) => item.heading.id === id);
    if (entry && nested) goTo(entry);
    else schedule();
  };
  window.addEventListener("hashchange", followFragment);
  window.addEventListener("load", schedule);
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(schedule).observe(body);

  // A subsection fragment may not exist until the outline has assigned heading ids.
  if (location.hash) {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { id = ""; }
    const target = entries.find((entry) => entry.heading.id === id)?.heading;
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
  }
  update();
})();
