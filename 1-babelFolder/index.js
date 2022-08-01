"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _debug = _interopRequireDefault(require("debug"));

var _koa = _interopRequireDefault(require("koa"));

var _koaCors = _interopRequireDefault(require("koa-cors"));

var _koaBody = _interopRequireDefault(require("koa-body"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _koaConvert = _interopRequireDefault(require("koa-convert"));

var _cron = _interopRequireDefault(require("cron"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _app = require("./config/app.config");

var _router = _interopRequireDefault(require("./src/router"));

var _models = _interopRequireDefault(require("./models"));

var _koaJson = _interopRequireDefault(require("koa-json"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _router2 = _interopRequireDefault(require("./src/auth/router"));

var _router3 = _interopRequireDefault(require("./src/googleTrends/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var error = (0, _debug["default"])("koa2-starter:error");
var debug = (0, _debug["default"])("koa2-starter:debug");
var app = new _koa["default"](); // const static_pages = new Koa()
// console.log("Dir", __dirname + "/buildFrontEnd/build")
// static_pages.use(serve(__dirname + "/buildFrontEnd/build")) //serve the build directory
// app.use(mount("/", static_pages))

_models["default"].sequelize.authenticate().then(function () {
  app.use(_router["default"].routes()).use((0, _koaJson["default"])()).use((0, _koaStatic["default"])("".concat(__dirname, "/../public"))).use((0, _koaConvert["default"])((0, _koaCors["default"])({
    origin: true
  }))).use((0, _koaLogger["default"])()).use( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
      var payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return next();

            case 3:
              _context.next = 11;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              payload = _context.t0;

              if (_context.t0.isBoom) {
                payload = _context.t0.output.payload;
                payload.data = _context.t0.data;
              }

              ctx.status = payload.statusCode || payload.status || 500;
              ctx.body = payload;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()).use((0, _koaConvert["default"])((0, _koaBody["default"])({
    jsonLimit: "30mb",
    multipart: true
  }))) // .use(mount("/", static_pages))
  .listen(_app.SERVER.port); // app.use(AuthRouter)
  // app.use(trendsRouter)

  _fs["default"].readdirSync("".concat(__dirname, "/src")).forEach(function (mod) {
    try {
      app.use(require("".concat(__dirname, "/src/").concat(mod, "/router.js"))["default"]); // eslint-disable-line

      debug("loaded: '".concat(mod, "' module."));
    } catch (e) {
      error("Error, while loading ".concat(mod), e);
    }
  });
}); // db.sequelize.sync().then(() => {
//   console.log("Drop and re-sync db.")
// })