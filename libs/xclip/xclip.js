const exec = require('child_process').exec;

const Promise = require('bluebird');

const Base = require('./../base');


class Xclip extends Base {

  constructor() {
    super();
  }

  pasteText() {

    const cmd = 'xclip -sel clip -o';
    return new Promise((resolve, reject) => {

      exec(cmd, (err, stdout, stderr) => {

        if (!err) {
          resolve(stdout);
        } else {
          reject(err);
        }
      });
    });
  }

  copyText(text) {

    const cmd = `echo ${text} | xclip -sel clip`;
    return new Promise((resolve, reject) => {

      exec(cmd, (err, stdout, stderr) => {

        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      });
    });
  }
}

const xclip = new Xclip();

module.exports = xclip;
