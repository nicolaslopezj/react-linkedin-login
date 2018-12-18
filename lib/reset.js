'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var code = (0, _getQueryParameter2.default)('code');
  var state = (0, _getQueryParameter2.default)('state');
  var newURL = window.location.href.replace('code=' + code + '&state=' + state, '');
  if (newURL.endsWith('?')) {
    newURL = newURL.slice(0, -1);
  }
  window.history.replaceState(null, null, newURL);
  localStorage.linkedInReactLogin = '';
  localStorage.linkedInReactLoginRedirectUri = '';
};

var _getQueryParameter = require('./getQueryParameter');

var _getQueryParameter2 = _interopRequireDefault(_getQueryParameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }