(function () { var designJSON = {
  "name": "vanilla",
  "label": "Vanilla",
  "version": "0.1.0",
  "assets": {
    "css": [
      "./stylesheets/steez.css"
    ]
  },
  "wrapper": "<div class=\"wrapper doc-section\"></div>",
  "componentProperties": {
    "quote-style": {
      "label": "Style",
      "type": "select",
      "options": [
        {
          "caption": "Loud"
        },
        {
          "caption": "Quite",
          "value": "quote--quite"
        }
      ]
    },
    "image-style": {
      "label": "Style",
      "type": "select",
      "options": [
        {
          "caption": "Normal"
        },
        {
          "caption": "Full width",
          "value": "image--full-width"
        },
        {
          "caption": "Left aligned",
          "value": "image--left-aligned"
        }
      ]
    },
    "add-picture": {
      "label": "With image",
      "type": "option",
      "value": "head--with-picture"
    }
  },
  "defaultComponents": {
    "paragraph": "paragraph",
    "image": "image"
  },
  "imageRatios": {
    "16:9": {
      "label": "16:9",
      "ratio": "16x9"
    },
    "4:3": {
      "label": "4:3",
      "ratio": "4x3"
    },
    "3:4": {
      "label": "4:3",
      "ratio": "3x4"
    },
    "2:3": {
      "label": "2:3",
      "ratio": "2x3"
    },
    "3:2": {
      "label": "2:3",
      "ratio": "3x2"
    },
    "square": {
      "label": "Square",
      "ratio": "1x1"
    }
  },
  "groups": [
    {
      "label": "Headers",
      "components": [
        "head",
        "subhead"
      ]
    },
    {
      "label": "Images",
      "components": [
        "image"
      ]
    },
    {
      "label": "Text",
      "components": [
        "paragraph",
        "quote"
      ]
    },
    {
      "label": "Embeds",
      "components": [
        "iframe",
        "tweet"
      ]
    }
  ],
  "defaultContent": [
    {
      "identifier": "vanilla.head"
    },
    {
      "identifier": "vanilla.paragraph"
    }
  ],
  "metadata": [
    {
      "identifier": "title",
      "type": "text",
      "matches": [
        "head.title",
        "subhead.title"
      ]
    },
    {
      "identifier": "description",
      "type": "text",
      "matches": [
        "paragraph.text",
        "quote.text"
      ]
    }
  ],
  "components": [
    {
      "name": "head",
      "html": "<header class=\"head\">\n  <span class=\"head__dateline\" doc-editable=\"text-dateline\">Dateline</span>\n  <h1 doc-editable=\"title\" class=\"head__title\">Title</h1>\n  <div class=\"head__subline\">\n    <span class=\"head__meta head__meta--topic\" doc-editable=\"text-topic\">Topic</span>\n    <span class=\"head__meta head__meta--date\" doc-editable=\"text-date\">Date</span>\n    <span class=\"head__meta head__meta--author\">by <b class=\"head__authors-name\" doc-editable=\"text-author\">Author name</b></span>\n  </div>\n  <figure class=\"head__image\">\n    <img doc-image=\"image\" class=\"head__image-item\">\n    <figcaption doc-editable=\"text-image-caption\" class=\"head__image-caption\">Caption</figcaption>\n  </figure>\n</header>",
      "label": "Title",
      "properties": [
        "add-picture"
      ]
    },
    {
      "name": "paragraph",
      "html": "<p doc-editable=\"text\" class=\"paragraph\">Paragraph</p>",
      "label": "Paragraph"
    },
    {
      "name": "iframe",
      "html": "<div class=\"embed\">\n  <div doc-html=\"iframe\">\n    <div class=\"embed__iframe\">\n      <div class=\"embed__placeholder\"></div>\n    </div>\n  </div>\n</div>",
      "label": "Iframe"
    },
    {
      "name": "image",
      "html": "<figure class=\"image\">\n  <img doc-image=\"image\" class=\"image__item\">\n  <figcaption doc-editable=\"caption\" class=\"image__caption\">Caption (optional)</figcaption>\n</figure>",
      "label": "Picture",
      "directives": {
        "image": {
          "imageRatios": [
            "4:3",
            "3:4",
            "3:2",
            "2:3"
          ],
          "allowOriginalRatio": true
        }
      },
      "properties": [
        "image-style"
      ]
    },
    {
      "name": "tweet",
      "html": "<div class=\"embed\">\n  <div doc-html=\"tweet\">\n    <div class=\"embed__tweet\">\n      <div class=\"embed__placeholder\"></div>\n    </div>\n  </div>\n</div>",
      "label": "Tweet"
    },
    {
      "name": "subhead",
      "html": "<h2 doc-editable=\"title\" class=\"subhead alpha\">Subhead</h2>",
      "label": "Subhead"
    },
    {
      "name": "quote",
      "html": "<blockquote class=\"quote\">\n  <p doc-editable=\"text\" class=\"quote__text\">Quoted text</p>\n  <footer doc-editable=\"source\" class=\"quote__source\">Source (optional)</footer>\n</blockquote>",
      "label": "Quote",
      "properties": [
        "quote-style"
      ]
    }
  ]
}; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.vanilla = designJSON;} }).call(this);