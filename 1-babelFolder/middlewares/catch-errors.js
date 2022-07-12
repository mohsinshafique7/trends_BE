"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import _debugger from "debug"
// import ErrorService from '../services/error.service';
// const error = _debugger('brand-nudge:error');
// module.exports = CatchErrors async (ctx, next) => {
// }
module.exports = CatchErrors = /*#__PURE__*/function () {
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
            _context.next = 12;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            // await ErrorService.add({
            //   message: e.message,
            //   stack: JSON.stringify(e.stack)
            // });
            // error('Catched error: ', e);
            payload = _context.t0;

            if (_context.t0.isBoom) {
              payload = _context.t0.output.payload;
              payload.data = _context.t0.data;
            }

            ctx.status = payload.statusCode || payload.status || 500;
            console.log(_context.t0);
            ctx.body = payload;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function CatchErrors(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();