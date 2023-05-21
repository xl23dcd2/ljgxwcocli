module.exports = {
  resource: [
    {
      "@type": "text/css",
      "@src": "home.css",
    },
    {
      "@type": "application/font-ttf",
      "@src": "iconfont.ttf",
    },
  ],
  ui: {
    text: [
      "Enter a message and save it.",
      {
        "#text": "Message has been saved!",
        "@ref": "feedback",
        "@class": "feedback",
      },
    ],
    textedit: {
      "@ref": "input-message",
      "@placeholder": "eg: hello, world!",
    },
    button: {
      "#text": "Save",
      "@ref": "btn-save-message",
    },
  },
};
