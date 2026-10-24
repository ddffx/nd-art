/* =========================================================================
   NEEL'S ARTWORK LIST  —  this is the only file you normally need to edit.

   To add a new piece:
     1. Put the image file in the  images/  folder
        (e.g. images/my-painting.jpg).  JPG or PNG both work.
     2. Copy one { ... } block below, paste it at the TOP of the list,
        and fill in your details.
     3. Save / commit.  The new piece shows up first on the site.

   - Order top-to-bottom = order shown on the site (newest first is nice).
   - The catalogue numbers (01, 02, ...) are added automatically.
   - Anything you leave as ""  is simply skipped.
   ========================================================================= */

window.ARTWORKS = [

  {
    image:  "images/left-to-the-woods.jpg",
    title:  "Left to the Woods",          // <-- replace with the real title
    medium: "Acrylic on canvas",          // <-- oil? acrylic? mixed media?
    size:   "16 × 20 in",                 // <-- real dimensions
    year:   "2025",                       // <-- year made
    alt:    "Painting of an abandoned red sports car settling into dense green undergrowth beneath leaning trees."
  },

  /* ---- Copy this block for each new piece and move it up the list ----
  {
    image:  "images/your-file.jpg",
    title:  "Your title",
    medium: "Oil on canvas",
    size:   "24 × 36 in",
    year:   "2026",
    alt:    "A short description of the picture, for screen readers."
  },
  -------------------------------------------------------------------- */

];
