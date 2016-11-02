const ntClipboard = require('./../').ntClipboard;

ntClipboard.copyText('HALLOW')
  .then((success) => {
    console.log(`Copy state success: ${success}`);
  })
  .catch((err) => {
    console.log(`eww: ${err.stack || err}`);
  });
