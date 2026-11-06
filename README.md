# Vlada Casapciuc — Portfolio

Static site (HTML + CSS, no build step). Open `index.html` in a browser to preview.

## Images to add

Put PNG files with exactly these names into the `images` folder.
Until an image is added, the page shows a placeholder with the path.

Recommended sizes: covers 2496 × 1280 (2x of 1248 × 640), gallery images 2496 px wide.

| Folder | Files |
|---|---|
| `images/ecowatt/` | cover.png, dashboard.png, appliances.png, boiler.png, recommendations.png, bills.png, add-device.png, flow.png |
| `images/travelflow/` | cover.png, catalog.png, trip-route.png, budget.png, ai.png, profile.png, chat.png |
| `images/transportdomus/` | cover.png, before.png, hero.png, sections.png, loyalty.png, green-version.png |
| `images/b2b/` | cover.png, flow.png, wireframes.png, my-requests.png, request-details.png |

Don't need an image? Delete its `<div><figure>…</figure>…</div>` block in the case page.

## Things to edit

- `index.html` and `projects/*.html`, footer: real LinkedIn and Telegram links.
- Put your CV as `cv.pdf` in the root folder.
- Case texts in `projects/*.html`: check every fact, especially roles and numbers.

## Deploy

1. Create a GitHub repository and upload all files (keep the folder structure).
2. On vercel.com: Add New → Project → import the repository → Framework: Other → Deploy.
3. Every push to GitHub updates the site automatically.
