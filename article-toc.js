(() => {
  const toc = document.querySelector("[data-article-toc]");
  const headings = [...document.querySelectorAll(".post-body > h2")];

  if (!toc || headings.length < 2) {
    toc?.closest(".article-toc")?.setAttribute("hidden", "");
    return;
  }

  const usedIds = new Set();
  const links = headings.map((heading, index) => {
    const baseId = heading.textContent
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `section-${index + 1}`;

    let id = baseId;
    let suffix = 2;
    while (usedIds.has(id) || document.getElementById(id)) {
      id = `${baseId}-${suffix++}`;
    }
    usedIds.add(id);
    heading.id = id;

    const link = document.createElement("a");
    link.href = `#${id}`;
    link.innerHTML = heading.innerHTML;
    toc.append(link);
    return link;
  });

  let scheduled = false;
  const updateCurrentSection = () => {
    let current = headings[0];
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= 150) current = heading;
      else break;
    }

    links.forEach((link, index) => {
      if (headings[index] === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scheduled = false;
  };

  window.addEventListener("scroll", () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateCurrentSection);
    }
  }, { passive: true });

  updateCurrentSection();
})();
