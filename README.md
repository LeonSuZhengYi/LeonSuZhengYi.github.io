# Zhengyi Su — academic website

A dependency-free static website: HTML, CSS, and the original portrait. No build step, JavaScript, external fonts, or framework is required.

Live site: https://leonsuzhengyi.github.io/

## GitHub Pages

1. Create a repository named `<your-username>.github.io` in your GitHub account.
2. Upload the contents of this folder to the repository root, including `index.html`, `papers.html`, `styles.css`, `assets/`, and `.nojekyll`.
3. In **Settings → Pages**, choose **Deploy from a branch**, then **main / (root)** and save.
4. GitHub will show the live address `https://<your-username>.github.io/` after deployment completes.

Relative links also support deployment beneath a project path. No account name or domain is hard-coded.

## Editing

- `index.html`: profile, biography, news, and recent papers.
- `papers.html`: the complete papers list. Update both pages when changing a paper.
- `styles.css`: typography, spacing, colors, and mobile layout.
- `assets/portrait.jpg`: unmodified user-provided IMG_0361.jpg. Cropping is controlled only by CSS.

## Content provenance

Profile and publication status follow the user's supplied information. The September 2026 preprint links to arXiv:2609.06947. The ICML manuscript in the project identifies the official CFG-MP repository, whose README provides arXiv:2601.21892. The ICML news item uses only the year because an acceptance month was not established. No unverified email, CV, Scholar link, or JMLR acceptance claim is included.

Visual structure follows the supplied Yuepeng Yang homepage reference, with original markup, a white background, and a taller portrait.
