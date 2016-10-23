
const _pttbot = require('./pttbot');

module.exports.pttbot = (event, context, callback) => {
  _pttbot((err, res) => callback(null, {
    statusCode: 200,
    body: JSON.stringify(res),
  }));
};
