"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _auth = _interopRequireDefault(require("./auth.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _koaRouter["default"]({
  prefix: "/auth"
});
router.post("/login", _auth["default"].Login);
router.post("/refresh-token", _auth["default"].GenrateRefreshToken);

var _default = router.routes();

exports["default"] = _default;