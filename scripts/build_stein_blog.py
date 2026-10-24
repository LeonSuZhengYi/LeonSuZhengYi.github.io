"""Rebuild the Stein article from Markdown (requires: pip install mistune)."""
from datetime import date
from html import escape
from pathlib import Path
import re

import mistune

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'blog/singular-integrals-elliptic-estimates.md'
raw = SOURCE.read_text(encoding='utf-8')
front = re.match(r'\A---\n(.*?)\n---\n\n', raw, re.S)
assert front, 'Missing front matter'
meta = dict(re.findall(r'^(\w+):\s*"?(.*?)"?\s*$', front[1], re.M))
title, description = meta['title'], meta['description']
published = date.fromisoformat(meta['date'])
body = raw[front.end():]
assert body.startswith('# ' + title + '\n')
body = body.split('\n', 1)[1].lstrip('\n')

# Preserve TeX before Markdown interprets backslashes, underscores, or stars.
math = []
def protect(match, display=False):
    tex = escape(match[1], quote=False)
    token = f'ZMATHTOKEN{len(math)}Z'
    math.append(('<div class="math-display">\\[' + tex + '\\]</div>')
                if display else ('<span class="math-inline">\\(' + tex + '\\)</span>'))
    return '\n\n' + token + '\n\n' if display else token

body = re.sub(r'\\\[(.*?)\\\]', lambda m: protect(m, True), body, flags=re.S)
body = re.sub(r'(?<!\$)\$(?!\$)([^\n$]+?)(?<!\$)\$(?!\$)', protect, body)
rendered = mistune.create_markdown(escape=True, plugins=['table'])(body)
for i, value in enumerate(math):
    token = f'ZMATHTOKEN{i}Z'
    rendered = rendered.replace('<p>' + token + '</p>', value).replace(token, value)
assert not re.search(r'ZMATHTOKEN\d+Z', rendered)
rendered = rendered.replace('<table>', '<div class="table-scroll" role="region" aria-label="Scrollable mathematical table" tabindex="0"><table>')
rendered = rendered.replace('</table>', '</table></div>')

page = r'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>__TITLE__ | Zhengyi Su</title>
  <meta name="description" content="__DESCRIPTION__">
  <link rel="stylesheet" href="../styles.css?v=20261024-c1">
  <style>
    .nested-toc [data-article-toc]{display:block;max-height:calc(100vh - 100px);max-height:calc(100dvh - 100px);overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:#d8e0e3 transparent;padding-right:5px}
    .nested-toc [data-article-toc]{overflow-anchor:none;scroll-behavior:auto}
    .nested-toc .toc-sections,.nested-toc .toc-subsections{list-style:none;margin:0;padding:0}
    .nested-toc .toc-section{margin:0;padding:0}
    .nested-toc .toc-section-row{display:flex;align-items:baseline;gap:3px}
    .nested-toc .toc-section-row>a{flex:1;min-width:0;padding:6px 0;font-size:12.5px;line-height:1.4}
    .nested-toc .is-current-section>.toc-section-row>a{color:var(--ink);font-weight:600}
    .nested-toc .toc-section-row>a[aria-current=location]{color:var(--accent);font-weight:650}
    .nested-toc .toc-toggle{flex:none;display:grid;place-items:center;width:19px;height:23px;padding:0;border:0;border-radius:3px;background:transparent;color:var(--muted);cursor:pointer}
    .nested-toc .toc-toggle:hover{background:#f1f5f5;color:var(--ink)}
    .nested-toc .toc-toggle:focus-visible{outline:2px solid var(--link);outline-offset:2px}
    .nested-toc .toc-toggle svg{transition:transform .15s ease}
    .nested-toc .toc-toggle[aria-expanded=true] svg{transform:rotate(90deg)}
    .nested-toc .toc-subsections{margin:1px 0 8px 3px;padding:1px 0 1px 11px;border-left:1px solid var(--line)}
    .nested-toc .toc-subsections[hidden]{display:none}
    .nested-toc .toc-subsections a{position:relative;padding:4px 2px;color:#74848e;font-size:11.5px;line-height:1.45}
    .nested-toc a:hover{transform:none}
    .nested-toc .toc-subsections a[aria-current=location]{color:var(--accent);font-weight:600}
    .nested-toc .toc-subsections a[aria-current=location]::before{content:"";position:absolute;left:-12px;top:5px;bottom:5px;width:2px;background:var(--accent)}
    @media(prefers-reduced-motion:reduce){.nested-toc .toc-toggle svg{transition:none}}
    .post-body .math-display{max-width:100%;overflow-x:auto;overflow-y:hidden}
    .post-body .math-display mjx-container[display="true"]{margin:.75em 0}
    .post-body p{margin-bottom:.9em}
    .post-body .table-scroll{max-width:100%;overflow-x:auto;margin:1.4em 0}
    .post-body table{width:100%;border-collapse:collapse;font-size:.88em;line-height:1.55}
    .post-body th,.post-body td{padding:.6em .7em;text-align:left;vertical-align:top;border-bottom:1px solid var(--line)}
    .post-body th{color:var(--ink)}
  </style>
  <script>window.MathJax={tex:{inlineMath:[["\\(","\\)"]],displayMath:[["\\[","\\]"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre","code"]}};</script>
  <script defer src="../article-toc.js?v=20261024-subsections-3"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="topbar"><div class="topbar-inner"><nav aria-label="Main navigation"><a href="../">Home</a><a href="../papers.html">Papers</a><a href="../blog.html" aria-current="page">Blog</a></nav></div></header>
  <main class="article-layout" id="main">
    <article>
      <header class="post-header">
        <a class="back-link" href="../blog.html">← Blog</a>
        <h1>__HEADING__</h1>
        <p class="post-subtitle">Three PDE estimates through singular integrals, spherical harmonics, and Littlewood–Paley theory.</p>
        <time datetime="__DATE__">__PRETTY_DATE__</time>
      </header>
      <div class="post-body">
__BODY__
      </div>
    </article>
    <aside class="article-toc" aria-label="Table of contents">
      <p class="toc-title">On this page</p>
      <nav data-article-toc="nested"></nav>
    </aside>
  </main>
</body>
</html>
'''
for key, value in {'TITLE': escape(title),
                   'HEADING': escape(title).replace('Chapters I–IV', '<span style="white-space:nowrap">Chapters I–IV</span>'),
                   'DESCRIPTION': escape(description),
                   'DATE': published.isoformat(),
                   'PRETTY_DATE': f'{published:%B} {published.day}, {published.year}',
                   'BODY': rendered}.items():
    page = page.replace('__' + key + '__', value)
assert len(re.findall(r'(?<!\\)\\\[', rendered)) == len(re.findall(r'(?<!\\)\\\]', rendered))
assert len(re.findall(r'(?<!\\)\\\(', rendered)) == len(re.findall(r'(?<!\\)\\\)', rendered))
output = SOURCE.with_suffix('.html')
output.write_text(page, encoding='utf-8')
print(f'Built {output.relative_to(ROOT)} ({len(math)} TeX expressions)')
