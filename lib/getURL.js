'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var clientId = _ref.clientId,
      state = _ref.state,
      scope = _ref.scope;

  var current = encodeURIComponent(window.location.href);
  var base = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&';
  var fullScope = scope && scope.length ? '&scope=' + encodeURIComponent(scope.join(' ')) : '';
  return base + 'client_id=' + clientId + '&redirect_uri=' + current + '&state=' + state + fullScope;
};