(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom = factory(typeof kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  ReactHTML.$metadata$ = {
    simpleName: 'ReactHTML',
    kind: 'object',
    interfaces: []
  };
  var ReactHTML_instance;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance == null)
      new ReactHTML();
    return ReactHTML_instance;
  }
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.ReactHTML_getInstance = ReactHTML_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.js.map