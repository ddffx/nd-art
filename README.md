# Neel Das — Art Portfolio

A simple, fast portfolio website. The whole gallery is built from one file,
so adding a new piece takes about a minute — no coding, no setup, no command line.

**Live site:** https://ddffx.github.io/nd-art/ *(works once GitHub Pages is on)*

---

## How to add a new piece (from your browser)

You can do everything on github.com — no software to install.

1. **Upload the image**
   - Open the **`images`** folder in this repo.
   - Click **Add file → Upload files**, drag your image in, and click **Commit changes**.
   - Tip: name it simply, e.g. `still-life.jpg`. JPG or PNG both work. Aim for
     the long side around 1600 pixels so it looks sharp but loads fast.

2. **Add a few lines to `artworks.js`**
   - Open **`artworks.js`** and click the pencil (✏️) to edit.
   - Copy this block and paste it at the **top** of the list (newest shows first):

     ```js
     {
       image:  "images/still-life.jpg",
       title:  "Still Life with Lemons",
       medium: "Oil on canvas",
       size:   "24 × 36 in",
       year:   "2026",
       alt:    "A short description of the picture."
     },
     ```

   - Change the values to match your piece. Make sure `image:` matches the file
     name you uploaded exactly.
   - Click **Commit changes**.

3. **Done.** The site updates itself in about 30 seconds. Refresh the page.

That's it. The catalogue numbers (01, 02, …) are added automatically, and the
first piece in the list is shown large at the top.

---

## Editing other things

- **Your name, tagline, or the intro line:** edit `index.html` — look near the
  top for the text inside `<header class="masthead">`.
- **Colors and fonts:** also in `index.html`, inside the `<style>` block at the
  top (the `:root` section).

## How it's built

Plain HTML, CSS, and a little JavaScript — no frameworks, no build step.
Hosted free on **GitHub Pages**. Any commit to the `main` branch publishes
automatically.

## Coming next

- About / artist statement page
- Contact
- Resume / CV
