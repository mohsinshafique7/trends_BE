"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _boom = _interopRequireDefault(require("boom"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _users = _interopRequireDefault(require("../../services/users/users.service"));

var _token = _interopRequireDefault(require("../../utils/token.util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var AuthController = /*#__PURE__*/function () {
  function AuthController() {
    _classCallCheck(this, AuthController);
  }

  _createClass(AuthController, null, [{
    key: "Login",
    value: function () {
      var _Login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        var _ctx$request$body, password, userName, data, user, result, token, refreshToken;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ctx$request$body = ctx.request.body, password = _ctx$request$body.password, userName = _ctx$request$body.userName;
                data = {
                  password: password,
                  userName: userName
                };

                if (userName) {
                  _context.next = 4;
                  break;
                }

                throw _boom["default"].notFound("User Name required");

              case 4:
                if (password) {
                  _context.next = 6;
                  break;
                }

                throw _boom["default"].notFound("Password not found");

              case 6:
                _context.next = 8;
                return _users["default"].getUserByUserName(data.userName);

              case 8:
                user = _context.sent;

                if (user) {
                  _context.next = 11;
                  break;
                }

                throw _boom["default"].notFound("User was not found");

              case 11:
                if (!(user.status === false)) {
                  _context.next = 13;
                  break;
                }

                throw _boom["default"].notFound("User is inactive");

              case 13:
                _context.next = 15;
                return _bcrypt["default"].compare(password, user.password);

              case 15:
                result = _context.sent;

                if (result) {
                  _context.next = 18;
                  break;
                }

                throw _boom["default"].notFound("Incorrect Password");

              case 18:
                token = _token["default"].generateToken({
                  userId: user.id,
                  companyName: user.companyName
                });
                refreshToken = _token["default"].generateRefreshToken({
                  userId: user.id,
                  companyName: user.companyName
                });
                ctx.body = {
                  token: token,
                  refreshToken: refreshToken,
                  user: user
                };
                _context.next = 23;
                return next();

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function Login(_x, _x2) {
        return _Login.apply(this, arguments);
      }

      return Login;
    }()
  }, {
    key: "GenrateRefreshToken",
    value: function () {
      var _GenrateRefreshToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        var refreshToken, decode, user, newToken, refToken;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                refreshToken = ctx.request.body.refreshToken;

                if (refreshToken) {
                  _context2.next = 3;
                  break;
                }

                throw _boom["default"].notFound("Refresh Token not found");

              case 3:
                decode = _token["default"].decode(refreshToken);

                if (!decode) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 7;
                return _users["default"].GetUserById(decode.userId);

              case 7:
                user = _context2.sent;
                newToken = _token["default"].generateToken({
                  userId: user.id,
                  companyName: user.companyName
                });
                refToken = _token["default"].generateRefreshToken({
                  userId: user.id,
                  companyName: user.companyName
                });
                ctx.body = {
                  token: newToken,
                  refreshToken: refToken,
                  user: user
                };
                _context2.next = 14;
                break;

              case 13:
                throw _boom["default"].badRequest("Cannot Refresh Token");

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function GenrateRefreshToken(_x3, _x4) {
        return _GenrateRefreshToken.apply(this, arguments);
      }

      return GenrateRefreshToken;
    }()
  }]);

  return AuthController;
}();

exports["default"] = AuthController;