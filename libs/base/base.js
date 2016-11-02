const _ = require('underscore');
const Promise = require('bluebird');

const cmdExists = require('./../utils').cmdExists;

class Base {

  constructor() {
    this._commands = [];
  }

  get commands() {
    return this._commands;
  }

  _checkRequirements() {

    if (this._checkRequirements.then) {
      return Promise.resolve(this._checkRequirements.then);
    } else if (this._checkRequirements.catch) {
      return Promise.reject(this._checkRequirements.catch);
    }

    return Promise.try(() => {

      const cmdExistsCalls = _.map(this.commands, (command) => {
        return cmdExists(command);
      });

      return Promise.all(cmdExistsCalls);
    })
    .then((commandResults) => {

      //get good idea
    })
    .then((match) => {

      if (match === true) {
        return true;
      }


      this._checkRequirements.then = true;

    })
    .catch((err) => {
      this._checkRequirements.catch = err;
      throw err;
    });
  }

  pasteText() {
    return this._checkRequirements();
  }

  copyText(text) {
    return this._checkRequirements();
  }
}

module.exports = Base;
