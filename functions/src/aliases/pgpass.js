/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs'),
  helper = require('pgpass/lib/helper.js');
module.exports.warnTo = helper.warnTo;

module.exports = function (connInfo, cb) {
  const file = helper.getFileName();

  fs.stat(file, (err, stat) => {
    if (err || !helper.usePgPass(stat, file)) {
      return cb(undefined);
    }

    const st = fs.createReadStream(file);

    helper.getPassword(connInfo, st, cb);
  });
};
