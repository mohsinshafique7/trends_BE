"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaSwaggerDecorator = require("koa-swagger-decorator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _koaRouter["default"]();
(0, _koaSwaggerDecorator.wrapper)(router);
router.swagger({
  title: "SERVER",
  description: "API DOC",
  version: "1.0.0"
});
var _default = router;
exports["default"] = _default;