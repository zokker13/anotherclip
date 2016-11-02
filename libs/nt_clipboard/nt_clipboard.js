const Promise = require('bluebird');

const SetText = require('bindings')('ntclipboard.node').SetText;

const Base = require('./../base');

class NtClipboard extends Base {

  copyText(text) {

    return Promise.try(() => {

      return SetText(text);
    });
  }
}

const ntClipboard = new NtClipboard();

module.exports = ntClipboard;
