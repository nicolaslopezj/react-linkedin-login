'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _getURL = require('./getURL');

var _getURL2 = _interopRequireDefault(_getURL);

var _getQueryParameter = require('./getQueryParameter');

var _getQueryParameter2 = _interopRequireDefault(_getQueryParameter);

var _reset = require('./reset');

var _reset2 = _interopRequireDefault(_reset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global localStorage */

var LinkedIn = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(LinkedIn, _React$Component);

  function LinkedIn() {
    (0, _classCallCheck3.default)(this, LinkedIn);
    return (0, _possibleConstructorReturn3.default)(this, (LinkedIn.__proto__ || Object.getPrototypeOf(LinkedIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinkedIn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.restart();
    }
  }, {
    key: 'start',
    value: function start() {
      var state = Math.random().toString(36).substring(7);
      var clientId = this.props.clientId;
      var scope = this.props.scope;
      localStorage.linkedInReactLogin = state;
      localStorage.linkedInReactLoginRedirectUri = window.location.href;
      window.location.href = (0, _getURL2.default)({ clientId: clientId, state: state, scope: scope });
    }
  }, {
    key: 'restart',
    value: function restart() {
      var state = localStorage.linkedInReactLogin;
      var redirectUri = localStorage.linkedInReactLoginRedirectUri;
      if (!redirectUri) return;
      if (!state) return;
      if (state !== (0, _getQueryParameter2.default)('state')) return;
      if (!(0, _getQueryParameter2.default)('code')) return;
      var code = (0, _getQueryParameter2.default)('code');
      (0, _reset2.default)();
      this.props.callback({ code: code, redirectUri: redirectUri });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { className: this.props.className, onClick: this.start },
        this.props.text
      );
    }
  }]);
  return LinkedIn;
}(_react2.default.Component), _class2.propTypes = {
  clientId: _propTypes2.default.string,
  callback: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  text: _propTypes2.default.node,
  scope: _propTypes2.default.arrayOf(_propTypes2.default.string)
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'start', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'start'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'restart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'restart'), _class.prototype)), _class);
exports.default = LinkedIn;