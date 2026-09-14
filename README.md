# CORRECT project page

Static project page for **CORRECT: Compute More Only for Correctable Risk in End-to-End Autonomous Driving**.

## Local preview

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

The page has no package or CDN dependency and can also be published directly with GitHub Pages.

## Assets and release placeholders

Current manuscript figures are mirrored in `assets/images/`:

- `correct-framework.png`: current full CORRECT framework figure.
- `correct-budget-curve.png`: current English budget--benefit curve.
- `case01-*.png` and `case02-*.png`: decision and collision keyframes used as video posters.

Collision-rescue videos are stored in `assets/videos/`:

- `LAW_vs_CORRECT_collision_footprint_v6_case01.mp4`
- `LAW_vs_CORRECT_collision_footprint_v6_case02.mp4`

Before public release:

1. Replace `Anonymous Authors` in `index.html` and in the BibTeX block.
2. Replace the disabled paper and code controls with real `<a>` links.
3. Update Open Graph image metadata to an absolute public URL after the site domain is known.

## Attribution

The page structure is informed by the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which is released under CC BY-SA 4.0 and adapted from the Nerfies project page. The CORRECT-specific layout, copy, risk visualization, and styles are original to this page.
