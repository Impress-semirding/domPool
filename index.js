/**
 * @author senir
 * @email 15251895266@163.com
 * @create date 2017-08-15 11:10:42
 * @modify date 2017-08-15 11:10:42
 * @desc dom pool.
*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __instance = function () {
  var instance = void 0;
  return function (newInstance) {
    if (newInstance) instance = newInstance;
    return instance;
  };
}();

var domPoll = function () {
  function domPoll(options) {
    _classCallCheck(this, domPoll);

    if (__instance()) return __instance();
    //按自己需求实例化
    this.options = options;
    this.container = null;
    this.pool = [];
    this.init();
    this.create();
    __instance(this);
  }

  _createClass(domPoll, [{
    key: 'init',
    value: function init() {
      var _options = this.options,
          number = _options.number,
          el = _options.el;

      var container = void 0;
      if (el) {
        container = document.getElementById(el);
      } else {
        container = document.body;
      }
      this.container = container;
    }
  }, {
    key: 'getDom',
    value: function getDom() {
      var pool = this.pool;
      if (this.pool) {
        return pool.shift();
      } else {
        var dm = document.createElement('div'); //创建节点
        this.container.appendChild(dm);
        return dm;
      }
    }
  }, {
    key: 'recover',
    value: function recover(dm) {
      return this.pool.push(dm);
    }
  }]);

  return domPoll;
}();
