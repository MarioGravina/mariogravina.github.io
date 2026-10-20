# MarioGravina.com — new website (October 2026)

A new, original professional editorial website for independent technology research, a general-interest Journal, publications, CV, and Contact. It is a standalone static HTML/CSS/JS site that runs on GitHub Pages with **no build step**.

## Sections

- `/` — Home
- `/research/` — Formal research and article index
- `/research/article-layout/` — clearly labeled article-layout specimen (unpublished)
- `/journal/` — AI / technology / photography Journal
- `/publications/` — books and larger works in development
- `/cv/` — initial public professional profile (requires your review)
- `/contact/` — GitHub contact; direct email intentionally not invented

## Deployment to existing GitHub Pages repo

1. Save or extract this folder on your Mac. Upload **the contents inside `MarioGravina.com/`** to the root of `MarioGravina/mariogravina.github.io` on branch `main`, not the containing folder itself.
2. Replace the old site files once you are ready to go live. The current under-construction page will remain live until the new `index.html` is committed.
3. Keep `CNAME` unchanged. Its exact value, verified from the existing GitHub repository, is `www.mariogravina.com`.
4. Verify GitHub repository Settings → Pages shows the expected branch, custom domain and HTTPS setting.
5. After deployment, verify links and layout at https://www.mariogravina.com/ on mobile and desktop.

## Review before public launch

- CV text is a *draft public profile*. Review it for accuracy, specificity, and suitability for public release.
- Contact page has a functional GitHub profile link but no email address or working form yet; choose a professional address or form provider.
- Formal articles and Journal posts have *not* been fabricated. Editorial topic cards say they are in progress; the example article is conspicuously identified as a layout specimen.
- Images are **AI-generated conceptual illustrations** cropped from original design studies; they are **not documentary photographs of verified Apple hardware**. Replace technical illustrations with accurately identified specimen photographs as your photographic archive develops.
- Asset illustrations are included locally under `assets/images/`; the site uses no external image CDNs or analytics.
- The site is a clean initial publishing platform. Once real articles are ready, we can adopt Jekyll/Astro/another Markdown-based content system to avoid manually adding HTML.

## Local preview

From the site folder on your Mac, in Terminal run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser. Root-relative links do not work reliably by opening `index.html` as a `file://` document; use the local server.

## Asset locations

- `assets/css/site.css` — all style rules
- `assets/js/site.js` — mobile navigation and copyright year
- `assets/images/*.webp` — illustrative images
- `assets/images/favicon.svg` — MG favicon

## Design reference

The two initial generated multi-page mockup boards are retained separately in the parent deliverables archive as optional design studies; no mockup screenshot is used directly as a website page.
