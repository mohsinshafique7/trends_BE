"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _googleTrendsApi = _interopRequireDefault(require("google-trends-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GoogleTrendService = /*#__PURE__*/function () {
  function GoogleTrendService() {
    _classCallCheck(this, GoogleTrendService);
  }

  _createClass(GoogleTrendService, null, [{
    key: "getIntrestByRegion",
    value: function () {
      var _getIntrestByRegion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchValues, startDate, endDate, region, category, proxyAgent) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _googleTrendsApi["default"].interestByRegion({
                  keyword: searchValues,
                  startTime: new Date(startDate),
                  endTime: new Date(endDate),
                  geo: region,
                  resolution: "REGIONS",
                  category: category,
                  agent: proxyAgent
                });

              case 2:
                result = _context.sent;
                result = JSON.parse(result)["default"].geoMapData.reduce(function (ids, things) {
                  ids.push({
                    name: things.geoName,
                    data: searchValues.map(function (item, index) {
                      return {
                        name: item,
                        y: things.value[index],
                        drilldown: things.geoCode,
                        type: "column"
                      };
                    })
                  });
                  return ids;
                }, []);
                return _context.abrupt("return", result);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getIntrestByRegion(_x, _x2, _x3, _x4, _x5, _x6) {
        return _getIntrestByRegion.apply(this, arguments);
      }

      return getIntrestByRegion;
    }()
  }, {
    key: "getIntrestOverTime",
    value: function () {
      var _getIntrestOverTime = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(searchValues, startDate, endDate, region, category, proxyAgent) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _googleTrendsApi["default"].interestOverTime({
                  keyword: searchValues,
                  startTime: new Date(startDate),
                  endTime: new Date(endDate),
                  geo: region,
                  category: category,
                  agent: proxyAgent // resolution: "REGION",

                });

              case 3:
                result = _context2.sent;
                result = JSON.parse(result)["default"].timelineData.map(function (item, index) {
                  return {
                    date: item.formattedTime,
                    value: item.value
                  };
                });
                return _context2.abrupt("return", result);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function getIntrestOverTime(_x7, _x8, _x9, _x10, _x11, _x12) {
        return _getIntrestOverTime.apply(this, arguments);
      }

      return getIntrestOverTime;
    }()
  }]);

  return GoogleTrendService;
}();

exports["default"] = GoogleTrendService;