"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _googleTrends = _interopRequireDefault(require("./googleTrends.controller"));

var _auth = _interopRequireDefault(require("../../middlewares/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const Router = require("koa-router")
var router = new _koaRouter["default"]({
  prefix: "/gtrends"
});
router.post("/byregion", _auth["default"], _googleTrends["default"].GetIntrestByRegion);

var _default = router.routes();

exports["default"] = _default;