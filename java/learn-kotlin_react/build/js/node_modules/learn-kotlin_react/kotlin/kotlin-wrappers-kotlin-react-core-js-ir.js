(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-core-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-react-core-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-react-core-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.j;
  var Annotation = kotlin_kotlin.$_$.i;
  var classMeta = kotlin_kotlin.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function ReactDsl() {
  }
  ReactDsl.prototype.equals = function (other) {
    if (!(other instanceof ReactDsl))
      return false;
    var tmp0_other_with_cast = other instanceof ReactDsl ? other : THROW_CCE();
    return true;
  };
  ReactDsl.prototype.hashCode = function () {
    return 0;
  };
  ReactDsl.prototype.toString = function () {
    return '@react.ReactDsl()';
  };
  ReactDsl.$metadata$ = classMeta('ReactDsl', [Annotation]);
  function ReactNode(source) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = source;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function StateInstance() {
  }
  StateInstance.prototype.component1_7eebsc_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = this;
    }
    return tmp$ret$0[0];
  };
  StateInstance.prototype.component2_7eebsb_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = this;
    }
    return tmp$ret$0[1];
  };
  StateInstance.prototype.getValue_elrtsm_k$ = function (thisRef, property) {
    var tmp$ret$0;
    {
      tmp$ret$0 = this;
    }
    return tmp$ret$0[0];
  };
  StateInstance.prototype.setValue_r8gule_k$ = function (thisRef, property, value) {
    var tmp$ret$0;
    {
      tmp$ret$0 = this;
    }
    tmp$ret$0[1](value);
  };
  StateInstance.$metadata$ = classMeta('StateInstance');
  function StateSetter() {
  }
  StateSetter.prototype.invoke_n4yk90_k$ = function (value) {
    var tmp$ret$0;
    {
      tmp$ret$0 = this;
    }
    tmp$ret$0(value);
  };
  StateSetter.prototype.invoke_bmpgyi_k$ = function (transform) {
    var tmp$ret$0;
    {
      tmp$ret$0 = this;
    }
    tmp$ret$0(transform);
  };
  StateSetter.$metadata$ = classMeta('StateSetter');
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-core-js-ir.js.map