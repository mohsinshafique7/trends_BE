"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TOKEN_CONFIG = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TOKEN_CONFIG = {
  KEY: "P2y=uf.Keq!/+/RNW7Lu8v?#OOTB",
  expires: "4h",
  alg: "HS256"
};
exports.TOKEN_CONFIG = TOKEN_CONFIG;

var TokenUtil = /*#__PURE__*/function () {
  function TokenUtil() {
    _classCallCheck(this, TokenUtil);
  }

  _createClass(TokenUtil, null, [{
    key: "generateToken",
    value: function generateToken(data) {
      return _jsonwebtoken["default"].sign(data, TOKEN_CONFIG.KEY, {
        expiresIn: "4h",
        algorithm: TOKEN_CONFIG.alg
      });
    }
  }, {
    key: "generateRefreshToken",
    value: function generateRefreshToken(data) {
      return _jsonwebtoken["default"].sign(data, TOKEN_CONFIG.KEY, {
        algorithm: TOKEN_CONFIG.alg
      });
    }
  }, {
    key: "decode",
    value: function decode(payload) {
      try {
        return _jsonwebtoken["default"].verify(payload, TOKEN_CONFIG.KEY);
      } catch (e) {
        return e;
      }
    }
  }]);

  return TokenUtil;
}();

exports["default"] = TokenUtil;