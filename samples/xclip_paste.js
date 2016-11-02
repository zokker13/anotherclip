const xclip = require('./../').xclip;

xclip.pasteText()
  .then((text) => {
    console.log(`Pasteshit: ${text}`);
  })
  .catch((err) => {
    console.log(`eww: ${err.stack || err}`);
  });