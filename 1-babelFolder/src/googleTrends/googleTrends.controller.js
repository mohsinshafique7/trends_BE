"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _boom = _interopRequireDefault(require("boom"));

var _googleTrends = _interopRequireDefault(require("../../services/googleTrends/googleTrends.service"));

var _httpsProxyAgent = _interopRequireDefault(require("https-proxy-agent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GoogleTrendsController = /*#__PURE__*/function () {
  function GoogleTrendsController() {
    _classCallCheck(this, GoogleTrendsController);
  }

  _createClass(GoogleTrendsController, null, [{
    key: "GetIntrestByRegion",
    value: function () {
      var _GetIntrestByRegion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        var _ctx$request$body, searchValues, startDate, endDate, region, category, proxyAgent, params, grossData, result, i, chunk, groupedData, initialData, _loop, z, grossData1, result1, _i, _chunk, groupedData1, initialData1, _loop2, _z, sortedData;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ctx$request$body = ctx.request.body, searchValues = _ctx$request$body.searchValues, startDate = _ctx$request$body.startDate, endDate = _ctx$request$body.endDate, region = _ctx$request$body.region, category = _ctx$request$body.category;
                proxyAgent = new _httpsProxyAgent["default"]("https://lum-customer-hl_6f3a1d08-zone-static-country-gb:rmpegpso2r78@zproxy.lum-superproxy.io:22225");

                if (searchValues) {
                  _context.next = 4;
                  break;
                }

                throw _boom["default"].notFound("Search values required");

              case 4:
                if (startDate) {
                  _context.next = 6;
                  break;
                }

                throw _boom["default"].notFound("Start date required");

              case 6:
                if (endDate) {
                  _context.next = 8;
                  break;
                }

                throw _boom["default"].notFound("End date required");

              case 8:
                if (region) {
                  _context.next = 10;
                  break;
                }

                throw _boom["default"].notFound("Region required");

              case 10:
                if (!(category == undefined)) {
                  _context.next = 12;
                  break;
                }

                throw _boom["default"].notFound("Category required");

              case 12:
                params = searchValues;
                grossData = [];
                result = [];
                i = 0;

              case 16:
                if (!(i < params.length)) {
                  _context.next = 25;
                  break;
                }

                chunk = params.slice(i, i + 5);
                _context.next = 20;
                return _googleTrends["default"].getIntrestByRegion(chunk, startDate, endDate, region, category, proxyAgent);

              case 20:
                result = _context.sent;
                grossData.push(result);

              case 22:
                i += 5;
                _context.next = 16;
                break;

              case 25:
                groupedData = [];
                initialData = [].concat.apply([], grossData);

                _loop = function _loop(z) {
                  var index = groupedData.findIndex(function (x) {
                    return x.name == initialData[z].name;
                  });

                  if (index === -1) {
                    groupedData.push(initialData[z]);
                  } else {
                    var _groupedData$find$dat;

                    (_groupedData$find$dat = groupedData.find(function (x) {
                      return x.name === initialData[z].name;
                    }).data).push.apply(_groupedData$find$dat, _toConsumableArray(initialData[z].data));
                  }
                };

                for (z = 0; z < initialData.length; z++) {
                  _loop(z);
                }

                grossData1 = [];
                result1 = [];
                _i = 0;

              case 32:
                if (!(_i < params.length)) {
                  _context.next = 41;
                  break;
                }

                _chunk = params.slice(_i, _i + 5);
                _context.next = 36;
                return _googleTrends["default"].getIntrestOverTime(_chunk, startDate, endDate, region, category, proxyAgent);

              case 36:
                result1 = _context.sent;
                grossData1.push(result1);

              case 38:
                _i += 5;
                _context.next = 32;
                break;

              case 41:
                groupedData1 = [];
                initialData1 = [].concat.apply([], grossData1);

                _loop2 = function _loop2(_z) {
                  var index = groupedData1.findIndex(function (x) {
                    return x.date == initialData1[_z].date;
                  });

                  if (index === -1) {
                    groupedData1.push(initialData1[_z]);
                  } else {
                    var _groupedData1$find$va;

                    (_groupedData1$find$va = groupedData1.find(function (x) {
                      return x.date === initialData1[_z].date;
                    }).value).push.apply(_groupedData1$find$va, _toConsumableArray(initialData1[_z].value));
                  }
                };

                for (_z = 0; _z < initialData1.length; _z++) {
                  _loop2(_z);
                }

                sortedData = groupedData1.reduce(function (acc, item, index) {
                  acc.push({
                    name: params[index],
                    data: groupedData1.map(function (data) {
                      return [data.date, data.value[index]];
                    })
                  });
                  return acc;
                }, []);
                sortedData = sortedData.filter(function (data) {
                  return data.name;
                });
                ctx.body = {
                  groupedData: groupedData,
                  sortedData: sortedData
                };
                _context.next = 50;
                return next();

              case 50:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function GetIntrestByRegion(_x, _x2) {
        return _GetIntrestByRegion.apply(this, arguments);
      }

      return GetIntrestByRegion;
    }()
  }, {
    key: "GetIntrestOverTime",
    value: function () {
      var _GetIntrestOverTime = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        var _ctx$request$body2, searchValues, startDate, endDate, region, category, proxyAgent, params;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ctx$request$body2 = ctx.request.body, searchValues = _ctx$request$body2.searchValues, startDate = _ctx$request$body2.startDate, endDate = _ctx$request$body2.endDate, region = _ctx$request$body2.region, category = _ctx$request$body2.category;

                if (searchValues) {
                  _context2.next = 3;
                  break;
                }

                throw _boom["default"].notFound("Search values required");

              case 3:
                if (startDate) {
                  _context2.next = 5;
                  break;
                }

                throw _boom["default"].notFound("Start date required");

              case 5:
                if (endDate) {
                  _context2.next = 7;
                  break;
                }

                throw _boom["default"].notFound("End date required");

              case 7:
                if (region) {
                  _context2.next = 9;
                  break;
                }

                throw _boom["default"].notFound("Region required");

              case 9:
                if (!(category == undefined)) {
                  _context2.next = 11;
                  break;
                }

                throw _boom["default"].notFound("Category required");

              case 11:
                proxyAgent = new _httpsProxyAgent["default"]("https://lum-customer-hl_6f3a1d08-zone-static-country-gb:rmpegpso2r78@zproxy.lum-superproxy.io:22225");
                params = searchValues;
                return _context2.abrupt("return", sortedData);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function GetIntrestOverTime(_x3, _x4) {
        return _GetIntrestOverTime.apply(this, arguments);
      }

      return GetIntrestOverTime;
    }()
  }]);

  return GoogleTrendsController;
}();

exports["default"] = GoogleTrendsController;