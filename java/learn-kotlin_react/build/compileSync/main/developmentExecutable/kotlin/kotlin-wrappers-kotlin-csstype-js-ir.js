(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-csstype-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-csstype-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-csstype-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-csstype-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-csstype-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.a;
  var interfaceMeta = kotlin_kotlin.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.j;
  var Annotation = kotlin_kotlin.$_$.i;
  var classMeta = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  function invoke(_this__u8e3s4, block) {
    var tmp$ret$0;
    {
      tmp$ret$0 = this;
    }
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_unsafeCast = {};
        tmp$ret$1 = tmp0_unsafeCast;
      }
      var tmp1_apply = tmp$ret$1;
      {
      }
      block(tmp1_apply);
      tmp$ret$2 = tmp1_apply;
    }
    tmp$ret$0[_this__u8e3s4] = tmp$ret$2;
  }
  function cue(selector, block) {
    {
      var tmp2_invoke = '::cue(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function cueRegion(selector, block) {
    {
      var tmp2_invoke = '::cue-region(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function part(selector, block) {
    {
      var tmp2_invoke = '::part(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function slotted(selector, block) {
    {
      var tmp2_invoke = '::slotted(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function dir(selector, block) {
    {
      var tmp2_invoke = ':dir(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function has(selector, block) {
    {
      var tmp2_invoke = ':has(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function host(selector, block) {
    {
      var tmp2_invoke = ':host(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function hostContext(selector, block) {
    {
      var tmp2_invoke = ':host-context(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function is(selector, block) {
    {
      var tmp2_invoke = ':is(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function lang(selector, block) {
    {
      var tmp2_invoke = ':lang(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function matches(selector, block) {
    {
      var tmp2_invoke = ':matches()(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function not(selector, block) {
    {
      var tmp2_invoke = ':not(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function nthChild(selector, block) {
    {
      var tmp2_invoke = ':nth-child(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function nthLastChild(selector, block) {
    {
      var tmp2_invoke = ':nth-last-child(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function nthLastOfType(selector, block) {
    {
      var tmp2_invoke = ':nth-last-of-type(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function nthOfType(selector, block) {
    {
      var tmp2_invoke = ':nth-of-type(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function where(selector, block) {
    {
      var tmp2_invoke = ':where(' + selector + ')';
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[tmp2_invoke] = tmp$ret$2;
    }
  }
  function after(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::after'] = tmp$ret$2;
    }
  }
  function backdrop(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::backdrop'] = tmp$ret$2;
    }
  }
  function before(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::before'] = tmp$ret$2;
    }
  }
  function cue_0(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::cue'] = tmp$ret$2;
    }
  }
  function cueRegion_0(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::cue-region'] = tmp$ret$2;
    }
  }
  function firstLetter(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::first-letter'] = tmp$ret$2;
    }
  }
  function firstLine(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::first-line'] = tmp$ret$2;
    }
  }
  function grammarError(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::grammar-error'] = tmp$ret$2;
    }
  }
  function marker(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::marker'] = tmp$ret$2;
    }
  }
  function placeholder(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::placeholder'] = tmp$ret$2;
    }
  }
  function selection(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::selection'] = tmp$ret$2;
    }
  }
  function spellingError(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::spelling-error'] = tmp$ret$2;
    }
  }
  function targetText(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0['::target-text'] = tmp$ret$2;
    }
  }
  function active(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':active'] = tmp$ret$2;
    }
  }
  function anyLink(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':any-link'] = tmp$ret$2;
    }
  }
  function blank(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':blank'] = tmp$ret$2;
    }
  }
  function checked(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':checked'] = tmp$ret$2;
    }
  }
  function current(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':current'] = tmp$ret$2;
    }
  }
  function default_0(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':default'] = tmp$ret$2;
    }
  }
  function defined(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':defined'] = tmp$ret$2;
    }
  }
  function disabled(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':disabled'] = tmp$ret$2;
    }
  }
  function empty(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':empty'] = tmp$ret$2;
    }
  }
  function enabled(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':enabled'] = tmp$ret$2;
    }
  }
  function first(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':first'] = tmp$ret$2;
    }
  }
  function firstChild(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':first-child'] = tmp$ret$2;
    }
  }
  function firstOfType(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':first-of-type'] = tmp$ret$2;
    }
  }
  function focus(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':focus'] = tmp$ret$2;
    }
  }
  function focusVisible(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':focus-visible'] = tmp$ret$2;
    }
  }
  function focusWithin(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':focus-within'] = tmp$ret$2;
    }
  }
  function fullscreen(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':fullscreen'] = tmp$ret$2;
    }
  }
  function future(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':future'] = tmp$ret$2;
    }
  }
  function hover(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':hover'] = tmp$ret$2;
    }
  }
  function inRange(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':in-range'] = tmp$ret$2;
    }
  }
  function indeterminate(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':indeterminate'] = tmp$ret$2;
    }
  }
  function invalid(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':invalid'] = tmp$ret$2;
    }
  }
  function lastChild(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':last-child'] = tmp$ret$2;
    }
  }
  function lastOfType(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':last-of-type'] = tmp$ret$2;
    }
  }
  function left(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':left'] = tmp$ret$2;
    }
  }
  function link(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':link'] = tmp$ret$2;
    }
  }
  function localLink(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':local-link'] = tmp$ret$2;
    }
  }
  function nthCol(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':nth-col'] = tmp$ret$2;
    }
  }
  function nthLastCol(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':nth-last-col'] = tmp$ret$2;
    }
  }
  function onlyChild(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':only-child'] = tmp$ret$2;
    }
  }
  function onlyOfType(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':only-of-type'] = tmp$ret$2;
    }
  }
  function optional(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':optional'] = tmp$ret$2;
    }
  }
  function outOfRange(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':out-of-range'] = tmp$ret$2;
    }
  }
  function past(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':past'] = tmp$ret$2;
    }
  }
  function paused(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':paused'] = tmp$ret$2;
    }
  }
  function pictureInPicture(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':picture-in-picture'] = tmp$ret$2;
    }
  }
  function placeholderShown(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':placeholder-shown'] = tmp$ret$2;
    }
  }
  function readOnly(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':read-only'] = tmp$ret$2;
    }
  }
  function readWrite(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':read-write'] = tmp$ret$2;
    }
  }
  function required(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':required'] = tmp$ret$2;
    }
  }
  function right(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':right'] = tmp$ret$2;
    }
  }
  function root(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':root'] = tmp$ret$2;
    }
  }
  function scope(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':scope'] = tmp$ret$2;
    }
  }
  function target(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':target'] = tmp$ret$2;
    }
  }
  function targetWithin(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':target-within'] = tmp$ret$2;
    }
  }
  function userInvalid(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':user-invalid'] = tmp$ret$2;
    }
  }
  function userValid(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':user-valid'] = tmp$ret$2;
    }
  }
  function valid(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':valid'] = tmp$ret$2;
    }
  }
  function visited(block) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = this;
      }
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$1 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        block(tmp1_apply);
        tmp$ret$2 = tmp1_apply;
      }
      tmp$ret$0[':visited'] = tmp$ret$2;
    }
  }
  //endregion
  function AdvancedPseudosRuleBuilder() {
  }
  AdvancedPseudosRuleBuilder.$metadata$ = interfaceMeta('AdvancedPseudosRuleBuilder', [RuleBuilder]);
  function CssDsl() {
  }
  CssDsl.prototype.equals = function (other) {
    if (!(other instanceof CssDsl))
      return false;
    var tmp0_other_with_cast = other instanceof CssDsl ? other : THROW_CCE();
    return true;
  };
  CssDsl.prototype.hashCode = function () {
    return 0;
  };
  CssDsl.prototype.toString = function () {
    return '@csstype.CssDsl()';
  };
  CssDsl.$metadata$ = classMeta('CssDsl', [Annotation]);
  function get_px(_this__u8e3s4) {
    var tmp$ret$1;
    {
      var tmp0_unsafeCast = toString(_this__u8e3s4) + 'px';
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_unsafeCast;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function PseudosRuleBuilder() {
  }
  PseudosRuleBuilder.$metadata$ = interfaceMeta('PseudosRuleBuilder', [AdvancedPseudosRuleBuilder, SimplePseudosRuleBuilder]);
  function RuleBuilder() {
  }
  RuleBuilder.$metadata$ = interfaceMeta('RuleBuilder');
  function SimplePseudosRuleBuilder() {
  }
  SimplePseudosRuleBuilder.$metadata$ = interfaceMeta('SimplePseudosRuleBuilder', [RuleBuilder]);
  function rgb(red, green, blue) {
    var tmp$ret$2;
    {
      var tmp0_Color = 'rgb(' + red + ',' + green + ',' + blue + ')';
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_Color;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  }
  function Color(value) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = value;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = cueRegion;
  _.$_$.b = cue;
  _.$_$.c = dir;
  _.$_$.d = has;
  _.$_$.e = hostContext;
  _.$_$.f = host;
  _.$_$.g = is;
  _.$_$.h = lang;
  _.$_$.i = matches;
  _.$_$.j = not;
  _.$_$.k = nthChild;
  _.$_$.l = nthLastChild;
  _.$_$.m = nthLastOfType;
  _.$_$.n = nthOfType;
  _.$_$.o = part;
  _.$_$.p = slotted;
  _.$_$.q = where;
  _.$_$.r = PseudosRuleBuilder;
  _.$_$.s = invoke;
  _.$_$.t = RuleBuilder;
  _.$_$.u = active;
  _.$_$.v = after;
  _.$_$.w = anyLink;
  _.$_$.x = backdrop;
  _.$_$.y = before;
  _.$_$.z = blank;
  _.$_$.a1 = checked;
  _.$_$.b1 = cueRegion_0;
  _.$_$.c1 = cue_0;
  _.$_$.d1 = current;
  _.$_$.e1 = default_0;
  _.$_$.f1 = defined;
  _.$_$.g1 = disabled;
  _.$_$.h1 = empty;
  _.$_$.i1 = enabled;
  _.$_$.j1 = firstChild;
  _.$_$.k1 = firstLetter;
  _.$_$.l1 = firstLine;
  _.$_$.m1 = firstOfType;
  _.$_$.n1 = first;
  _.$_$.o1 = focusVisible;
  _.$_$.p1 = focusWithin;
  _.$_$.q1 = focus;
  _.$_$.r1 = fullscreen;
  _.$_$.s1 = future;
  _.$_$.t1 = grammarError;
  _.$_$.u1 = hover;
  _.$_$.v1 = inRange;
  _.$_$.w1 = indeterminate;
  _.$_$.x1 = invalid;
  _.$_$.y1 = lastChild;
  _.$_$.z1 = lastOfType;
  _.$_$.a2 = left;
  _.$_$.b2 = link;
  _.$_$.c2 = localLink;
  _.$_$.d2 = marker;
  _.$_$.e2 = nthCol;
  _.$_$.f2 = nthLastCol;
  _.$_$.g2 = onlyChild;
  _.$_$.h2 = onlyOfType;
  _.$_$.i2 = optional;
  _.$_$.j2 = outOfRange;
  _.$_$.k2 = past;
  _.$_$.l2 = paused;
  _.$_$.m2 = pictureInPicture;
  _.$_$.n2 = placeholderShown;
  _.$_$.o2 = placeholder;
  _.$_$.p2 = readOnly;
  _.$_$.q2 = readWrite;
  _.$_$.r2 = required;
  _.$_$.s2 = right;
  _.$_$.t2 = root;
  _.$_$.u2 = scope;
  _.$_$.v2 = selection;
  _.$_$.w2 = spellingError;
  _.$_$.x2 = targetText;
  _.$_$.y2 = targetWithin;
  _.$_$.z2 = target;
  _.$_$.a3 = userInvalid;
  _.$_$.b3 = userValid;
  _.$_$.c3 = valid;
  _.$_$.d3 = visited;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-csstype-js-ir.js.map