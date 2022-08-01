"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _boom = _interopRequireDefault(require("boom"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _users = _interopRequireDefault(require("../../services/users/users.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UsersController = /*#__PURE__*/function () {
  function UsersController() {
    _classCallCheck(this, UsersController);
  }

  _createClass(UsersController, null, [{
    key: "CreateUser",
    value: function () {
      var _CreateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        var _ctx$request$body, name, userName, companyName, password, status, isAdmin, salt, hashedPassword, data, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(ctx.request.body);
                _ctx$request$body = ctx.request.body, name = _ctx$request$body.name, userName = _ctx$request$body.userName, companyName = _ctx$request$body.companyName, password = _ctx$request$body.password, status = _ctx$request$body.status, isAdmin = _ctx$request$body.isAdmin;

                if (name) {
                  _context.next = 4;
                  break;
                }

                throw _boom["default"].notFound(" Name required");

              case 4:
                if (userName) {
                  _context.next = 6;
                  break;
                }

                throw _boom["default"].notFound("User Name required");

              case 6:
                if (companyName) {
                  _context.next = 8;
                  break;
                }

                throw _boom["default"].notFound("Company Name required");

              case 8:
                if (password) {
                  _context.next = 10;
                  break;
                }

                throw _boom["default"].notFound("Password required");

              case 10:
                if (status) {
                  _context.next = 12;
                  break;
                }

                throw _boom["default"].notFound("Status required");

              case 12:
                if (isAdmin) {
                  _context.next = 14;
                  break;
                }

                throw _boom["default"].notFound("isAdmin required");

              case 14:
                _context.next = 16;
                return _bcrypt["default"].genSalt();

              case 16:
                salt = _context.sent;
                _context.next = 19;
                return _bcrypt["default"].hash(password, salt);

              case 19:
                hashedPassword = _context.sent;
                data = {
                  name: name,
                  userName: userName,
                  companyName: companyName,
                  password: hashedPassword,
                  status: status,
                  isAdmin: isAdmin
                };
                _context.next = 23;
                return _users["default"].createUser(data);

              case 23:
                user = _context.sent;
                ctx.body = {
                  name: user.name,
                  userName: user.userName,
                  companyName: user.companyName,
                  status: user.status,
                  isAdmin: user.isAdmin
                };
                _context.next = 27;
                return next();

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function CreateUser(_x, _x2) {
        return _CreateUser.apply(this, arguments);
      }

      return CreateUser;
    }()
  }, {
    key: "GetAllUsers",
    value: function () {
      var _GetAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        var users;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _users["default"].getAllUsers();

              case 2:
                users = _context2.sent;
                ctx.body = {
                  users: users
                };
                _context2.next = 6;
                return next();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function GetAllUsers(_x3, _x4) {
        return _GetAllUsers.apply(this, arguments);
      }

      return GetAllUsers;
    }()
  }, {
    key: "GetUserById",
    value: function () {
      var _GetUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, next) {
        var id, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = ctx.params.id;
                _context3.next = 3;
                return _users["default"].GetUserById(id);

              case 3:
                user = _context3.sent;
                ctx.body = {
                  user: user
                };
                _context3.next = 7;
                return next();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function GetUserById(_x5, _x6) {
        return _GetUserById.apply(this, arguments);
      }

      return GetUserById;
    }()
  }, {
    key: "DeleteUser",
    value: function () {
      var _DeleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx, next) {
        var id, user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = ctx.params.id;
                _context4.next = 3;
                return _users["default"].DeleteUser(id);

              case 3:
                user = _context4.sent;
                ctx.body = {
                  user: user
                };
                _context4.next = 7;
                return next();

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function DeleteUser(_x7, _x8) {
        return _DeleteUser.apply(this, arguments);
      }

      return DeleteUser;
    }()
  }]);

  return UsersController;
}();

exports["default"] = UsersController;