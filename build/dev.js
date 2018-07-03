require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname, logger) {

var _nuxt = __webpack_require__(9);

var _router = __webpack_require__(10);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var express = __webpack_require__(0);
var fs = __webpack_require__(19);
var path = __webpack_require__(3);

var bodyParser = __webpack_require__(20);
var mongoose = __webpack_require__(1);
var cors = __webpack_require__(21);
var requestIp = __webpack_require__(2);
var session = __webpack_require__(22);
var expressValidator = __webpack_require__(23);
var MongoStore = __webpack_require__(24)(session);
var nuxtConfig = __webpack_require__(25);
var config = __webpack_require__(27);

__webpack_require__(4).config();
var app = express();
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 3005;

var resolve = function resolve(file) {
  return path.resolve(__dirname, file);
};

app.set('port', port);
app.use('/dist', express.static(resolve('./dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(requestIp.mw());
app.use(cors());
app.use(expressValidator());

/**
 * Router register
 */
var basePath = '/' + nuxtConfig.env.basePath || '';

app.use('' + basePath, _router2.default);

nuxtConfig.dev = !("development" === 'production');

var nuxt = new _nuxt.Nuxt(nuxtConfig);
if (nuxtConfig.dev) {
  new _nuxt.Builder(nuxt).build().catch(function (error) {
    console.error(error);
    process.exit(1);
  });
}

app.use(nuxt.render);

app.get('*', function (req, res) {
  var html = fs.readFileSync(resolve('./' + 'index.html'), 'utf-8');
  res.send(html);
});

mongoose.connect(config.db, {
  server: {
    socketOptions: {
      keepAlive: 1
    }
  }
});

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));

app.listen(port, host);
logger.success('Server listening on http://localhost:' + port + basePath); // eslint-disable-line no-console
/* WEBPACK VAR INJECTION */}.call(exports, "server", __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("consola");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _event = __webpack_require__(11);

var _event2 = _interopRequireDefault(_event);

var _visitor = __webpack_require__(12);

var _visitor2 = _interopRequireDefault(_visitor);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = (0, _express.Router)();

router.use(_event2.default);
router.use(_visitor2.default);

module.exports = router;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var router = (0, _express.Router)();

module.exports = router;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _visitor = __webpack_require__(13);

var _visitor2 = _interopRequireDefault(_visitor);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = (0, _express.Router)();

router.post('/count', _visitor2.default.create);

router.post('/scan', _visitor2.default.scan);

module.exports = router;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var mongoose = __webpack_require__(1);
var Visitor = __webpack_require__(14);
mongoose.Promise = __webpack_require__(15);
var IP2Region = __webpack_require__(16);

var _require = __webpack_require__(17),
    async = _require.wrap;

var requestIp = __webpack_require__(2);

var _require2 = __webpack_require__(18),
    only = _require2.only;

exports.create = async( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
  var clientIp, query, d, visitorData, visitor;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          clientIp = requestIp.getClientIp(req);
          query = new IP2Region();
          d = Object.assign(req.body, only(query.search(clientIp), 'region country city'));
          visitorData = Object.assign(d, { ipAddress: clientIp });

          console.log(visitorData);
          visitor = new Visitor(visitorData);
          _context.prev = 6;
          _context.next = 9;
          return visitor.save();

        case 9:
          res.status(200).json({
            result: 'success'
          });
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](6);

          console.log(_context.t0);
          res.status(422);

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this, [[6, 12]]);
}));

/**
 * Load the visitor data with some limitations
 */
exports.scan = async( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
  var filters;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          filters = req.body;

          console.log(filters);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var Schema = mongoose.Schema;

var VisitorSchema = new Schema({
  ipAddress: {
    type: String,
    default: 'not found',
    trim: true
  },
  tag: {
    type: String,
    default: '',
    trim: true
  },
  platform: {
    type: String,
    default: '',
    trim: true
  },
  family: {
    type: String,
    default: '',
    trim: true
  },
  architecture: {
    type: String,
    default: '',
    trim: true
  },
  version: {
    type: String,
    default: '',
    trim: true
  },
  page: {
    type: String,
    default: '',
    trim: true
  },
  region: {
    type: String,
    default: '',
    trim: true
  },
  country: {
    type: String,
    default: '',
    trim: true
  },
  city: {
    type: String,
    default: '',
    trim: true
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  userName: {
    type: String,
    default: '',
    trim: true
  }
});

/**
 * basic validation
 */
VisitorSchema.path('ipAddress').required(true, 'ip address can not be blank');
VisitorSchema.path('tag').required(true, 'tag can not be blank');
VisitorSchema.path('page').required(true, 'page can not be blank');

/**
 * Methods 
 * bind on the instance
 */
VisitorSchema.methods = {};

/**
 * Statics
 */
VisitorSchema.statics = {
  loadTimePeriod: function loadTimePeriod(opt) {
    var startTime = new Date(opt['startTime']) || new Date('2000-01-01');
    var endTime = new Date(opt['endTime']) || new Date();
    var reqOption = {
      createTime: {
        '$gte': startTime.toISOString(),
        '$lte': endTime.toISOString()
      }
    };
    return undefined.find(reqOption);
  }
};

mongoose.model('Visitor', VisitorSchema);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("ip2region");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("co");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Utils
 */

var grabAttribute = function grabAttribute(chain, target) {
  return chain.split('.').reduce(function (d, i) {
    return typeof d == 'undefined' ? d : d[i];
  }, target);
};

var response = function response(res, tpl, obj, status) {
  res.format({
    html: function html() {
      return res.render(tpl, obj);
    },
    json: function json() {
      if (status) return res.status(status).json(obj);
      res.json(obj);
    }
  });
};

var respondOrRedirect = function respondOrRedirect(_ref) {
  var req = _ref.req,
      res = _ref.res;
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var flash = arguments[3];

  res.format({
    html: function html() {
      if (req && flash) req.flash(flash.type, flash.text);
      res.redirect(url);
    },
    json: function json() {
      return res.json(obj);
    }
  });
};

var only = function only(obj, keys) {
  obj = obj || {};
  if ('string' === typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function (ret, key) {
    if (null === obj[key]) return ret;
    if (key.indexOf('.') !== -1) {
      var t = key.slice(key.lastIndexOf('.') + 1);
      ret[t] = grabAttribute(key, obj);
    } else {
      ret[key] = obj[key];
    }
    return ret;
  }, {});
};

module.exports = {
  response: response,
  respondOrRedirect: respondOrRedirect,
  only: only
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WebpackBar = __webpack_require__(26);
__webpack_require__(4).config();
var path = "" || '';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Gobal CSS import
   */
  css: [],
  env: {
    basePath: '' + path,
    baseURL: ("" || 'http://localhost:3005') + ('/' + path)
  },
  /**
   * plugins
   */
  plugins: ['~/plugins/element-ui'],
  srcDir: 'src-nuxt/',
  /*
  ** Build configuration
  */
  build: {
    vendor: ['babel-polyfill', 'axios', '~/plugins/element-ui.js'],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend: function extend(config, _ref) {
      var isDev = _ref.isDev,
          isClient = _ref.isClient;

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      var urlLoader = config.module.rules.find(function (rule) {
        return rule.loader === 'url-loader';
      });
      config.module.rules.splice(config.module.rules.indexOf(urlLoader), 1);
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        exclude: /(assets\/svg)/,
        query: {
          limit: 500 * 1000, // 500KO
          name: 'img/[name].[hash:7].[ext]'
        }
      });

      config.plugins.push(new WebpackBar());
    }
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("webpackbar");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var path = __webpack_require__(3);

var development = __webpack_require__(28);
var production = __webpack_require__(29);

var defaults = {
  root: path.join(__dirname, '..')
};

module.exports = {
  development: Object.assign({}, development, defaults),
  production: Object.assign({}, production, defaults)
}["development" || 'development'];
/* WEBPACK VAR INJECTION */}.call(exports, "server/config"))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose
 */

module.exports = {
  db: 'mongodb://localhost/logger'
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose
 */

module.exports = {
  db: process.env.MONGODB
};

/***/ })
/******/ ]);
//# sourceMappingURL=dev.map