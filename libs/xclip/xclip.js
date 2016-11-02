const exec = require('child_process').exec;

const Promise = require('bluebird');

const pExec = Promise.promisify(exec);

const Base = require('./../base');


class Xclip extends Base {

  constructor() {
    super();

    this._commands = {
      xclip: 'xclip',
      echo: 'echo',
    };
  }

  pasteText(cb) {

    const cmd = 'xclip -sel clip -o';

    return super.pasteText()
      .then(() => {
        return pExec(cmd);
      })
      .asCallback(cb);

  }

  copyText(text, cb) {

    const cmd = `echo ${text} | xclip -sel clip`;
    return new Promise((resolve, reject) => {

      exec(cmd, (err, stdout, stderr) => {

        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      });
    })
    .asCallback(cb);
  }
}

const xclip = new Xclip();

module.exports = xclip;
