"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UsersService = /*#__PURE__*/function () {
  function UsersService() {
    _classCallCheck(this, UsersService);
  }

  _createClass(UsersService, null, [{
    key: "getUserByUserName",
    value: function () {
      var _getUserByUserName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userName) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _models["default"].Users.findOne({
                  where: {
                    userName: userName
                  }
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getUserByUserName(_x) {
        return _getUserByUserName.apply(this, arguments);
      }

      return getUserByUserName;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _models["default"].Users.create(data));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createUser(_x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _models["default"].Users.findAll({
                  attributes: {
                    exclude: ["password", "createdAt", "updatedAt"]
                  }
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAllUsers() {
        return _getAllUsers.apply(this, arguments);
      }

      return getAllUsers;
    }()
  }, {
    key: "GetUserById",
    value: function () {
      var _GetUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _models["default"].Users.findOne({
                  where: {
                    id: id
                  },
                  attributes: {
                    exclude: ["password", "createdAt", "updatedAt"]
                  }
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function GetUserById(_x3) {
        return _GetUserById.apply(this, arguments);
      }

      return GetUserById;
    }()
  }, {
    key: "DeleteUser",
    value: function () {
      var _DeleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", _models["default"].Users.destroy({
                  where: {
                    id: id
                  }
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function DeleteUser(_x4) {
        return _DeleteUser.apply(this, arguments);
      }

      return DeleteUser;
    }()
  }]);

  return UsersService;
}();

exports["default"] = UsersService;