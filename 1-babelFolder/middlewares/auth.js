"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Auth;

var _token = _interopRequireDefault(require("../utils/token.util"));

var _users = _interopRequireDefault(require("../services/users/users.service"));

var _custom = require("../utils/custom.errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Auth(_x, _x2) {
  return _Auth.apply(this, arguments);
}

function _Auth() {
  _Auth = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = ctx.headers.authorization;

            if (token) {
              _context.next = 5;
              break;
            }

            ctx.status = 401;
            ctx.body = _custom.TOKEN_NOT_PROVIDED;
            return _context.abrupt("return", ctx);

          case 5:
            decoded = _token["default"].decode(token);

            if (!decoded) {
              console.log("Not Decoded");
            }

            if (decoded.userId) {
              _context.next = 11;
              break;
            }

            ctx.status = 401;
            ctx.body = _custom.TOKEN_NOT_VALID;
            return _context.abrupt("return", ctx);

          case 11:
            _context.next = 13;
            return _users["default"].GetUserById(decoded.userId);

          case 13:
            user = _context.sent;

            if (user) {
              _context.next = 18;
              break;
            }

            ctx.status = 401;
            ctx.body = _custom.TOKEN_NOT_VALID;
            return _context.abrupt("return", ctx);

          case 18:
            if (!(user.status === "inactive")) {
              _context.next = 22;
              break;
            }

            ctx.status = 403;
            ctx.body = _custom.PERMISSION_DENIED;
            return _context.abrupt("return", ctx);

          case 22:
            ctx.state.user = user;
            _context.next = 25;
            return next();

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Auth.apply(this, arguments);
}