/**
 * @author senir
 * @email 15251895266@163.com
 * @create date 2017-08-15 11:10:42
 * @modify date 2017-08-15 11:10:42
 * @desc dom pool.
*/

'use strict';
let __instance = (function () {
  let instance;
  return (newInstance) => {
    if (newInstance) instance = newInstance;
    return instance;
  }
}());

class domPoll {
  constructor(options) {
    if (__instance()) return __instance();
    //按自己需求实例化
    this.options = options;
    this.container = null;
    this.pool = [];
    this.init();
    this.create();
    __instance(this);
  }

  init() {
    const { number, el } = this.options;
    let container;
    if (el) {
      container = document.getElementById(el);
    } else {
      container = document.body;
    }
    this.container = container;
  }

  getDom() {
    let pool = this.pool;
    if (this.pool) {
      return pool.shift();
    } else {
      const dm = document.createElement('div'); //创建节点
      this.container.appendChild(dm);
      return dm;
    }
  }

  recover(dm) {
    return this.pool.push(dm);
  }
}
