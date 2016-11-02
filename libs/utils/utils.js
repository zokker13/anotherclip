const exec = require('child_process');

const Promise = require('bluebird');

function cmdExists(command) {

  return new Promise((resolve, reject) => {

    const emitter = exec(command);
    emitter.on('exit', (code, signal) => {

      if (code === 0) {
        resolve(true);
      } else if (code === 1) {
        resolve(false);
      } else {
        console.log(`Something odd happened. Output ${code}, signal: ${signal}, command: ${command}`);
      }
    });

    emitter.on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = {
  cmdExists: cmdExists,
};
