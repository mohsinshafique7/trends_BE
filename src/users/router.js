"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _users = _interopRequireDefault(require("./users.controller"));

var _auth = _interopRequireDefault(require("../../middlewares/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _koaRouter["default"]({
  prefix: "/users"
});
router.post("/create", _users["default"].CreateUser);
router.get("/", _auth["default"], _users["default"].GetAllUsers);
router.get("/:id", _users["default"].GetUserById);

var _default = router.routes();

exports["default"] = _default;