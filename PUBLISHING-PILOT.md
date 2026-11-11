# MarioGravina.com — visual publishing pilot

This package overlays new publishing infrastructure onto the existing website. **It must be applied on a NEW LOCAL DEVELOPMENT BRANCH, not `main`.** No existing image is replaced; existing homepage and other sections stay untouched. Only the Research and Journal landing pages are extended with automatic article lists.

## One-time setup on your MacBook

1. Open the existing repository folder in VS Code: `~/Documents/mariogravina.github.io`.
2. Check that `git status --short` is empty. If not, stop and inspect your work first.
3. Create a separate branch: `git switch -c pilot/visual-publishing`.
4. Extract **the contents** of `MarioGravina-Publishing-Pilot.zip` into the repository root. Allow the two index files in `research/` and `journal/` to be replaced **on the pilot branch only**.
5. If `.nojekyll` exists in the repository, remove it on this branch (`git rm .nojekyll` if tracked; otherwise `rm .nojekyll`). Jekyll cannot run when this marker is present.
6. Run `git status --short` and verify the changes are the planned new files and two modified index pages.
7. Run `git add .pages.yml _config.yml _layouts _research _journal assets/css/editorial.css research/index.html journal/index.html PUBLISHING-PILOT.md`.
8. Run `git commit -m "Pilot Pages CMS and Jekyll publishing"` and `git push -u origin pilot/visual-publishing`.

This does **not** deploy a new live website if GitHub Pages continues to deploy from `main`. Confirm the publishing branch remains `main` in GitHub Pages settings.

## Try Pages CMS

1. Visit https://app.pagescms.org/ and log in with GitHub.
2. Authorize the Pages CMS GitHub App for the `MarioGravina/mariogravina.github.io` repository if you want to proceed with this third-party editor.
3. Select the repository and explicitly switch the branch selector to `pilot/visual-publishing`.
4. Confirm `Research & Articles` and `The Journal` appear as separate collections.
5. Open either formatting sample; test headings, emphasis, links, and image insertion. Save only **on the pilot branch**.

**Important:** The GitHub repository is public, and ALL BRANCHES are publicly readable. Never put private unpublished manuscripts or confidential findings on this branch. A sample saved in Pages CMS becomes a Git commit, not a private draft.

## Previewing pages

- The pilot branch has two example entries for a future Jekyll build. Their paths will be `/research/publishing-pilot/` and `/journal/2026-10-20-journal-formatting-pilot/` when the site generator is run.
- Pages CMS edits files; it does not render or host the published website. The browser editor is NOT a guaranteed pixel-accurate preview of your final site.
- For a local preview, install the Jekyll environment on your Mac (requires Ruby and compatible gems) and run `bundle exec jekyll serve` if using a Gemfile. Do not assume a local Jekyll installation already exists.
- For an automated preview, a dedicated Actions build-and-preview workflow can be added later; it is not part of this initial minimal package.

## Editorial conventions

- All long-term original research manuscripts remain outside the public GitHub repository until publication.
- `Research & Articles`: formal writing with abstract, revision field, image caption, evidence and references in the rich-text body.
- `The Journal`: lighter writing with title, date, optional topic, summary, and rich-text body.
- Insert optimized, genuine images (preferably WebP) and retain untouched photographic originals separately.
- The sample entries are test material; **delete both before merging the publishing system into `main`**.

## Before merging to the live website

- Verify Pages CMS saves YAML-frontmatter Markdown correctly and that images resolve.
- Verify a Jekyll build succeeds and the generated Research/Journal indexes contain the new entries.
- Check mobile article typography, figure captions, site navigation and URLs.
- Delete the two pilot sample entries or replace them with genuine finished publications.
- Merge only after approval. Routine entries created on `main` will then go live after GitHub Pages deploys.
