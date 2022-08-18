(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin_kotlin.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react'.");
    }
    root.kotlin_org_jetbrains_kotlin_wrappers_kotlin_react = factory(typeof kotlin_org_jetbrains_kotlin_wrappers_kotlin_react === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, react, kotlin_kotlin);
  }
}(this, function (_, $module$react, kotlin_kotlin) {
  //region block: imports
  var createElement = $module$react.createElement;
  var Fragment = $module$react.Fragment;
  var isValidElement = $module$react.isValidElement;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var first = kotlin_kotlin.$crossModule$.first;
  //endregion
  'use strict';
  //region block: pre-declaration
  function child(element) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0[_get_CHILDREN__4174148012()];
      break $l$block_0;
    }
    if (!(tmp$ret$1 == null)) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = this;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2[_get_CHILDREN__4174148012()];
          break $l$block_2;
        }
        var tmp0_asDynamic_0 = tmp$ret$3;
        tmp$ret$4 = tmp0_asDynamic_0;
        break $l$block_3;
      }
      tmp$ret$4.push(element);
    } else {
      {
        {
          var tmp$ret$7;
          $l$block_6: {
            var tmp$ret$6;
            $l$block_5: {
              var tmp$ret$5;
              $l$block_4: {
                tmp$ret$5 = [element];
                break $l$block_4;
              }
              tmp$ret$6 = tmp$ret$5;
              break $l$block_5;
            }
            tmp$ret$7 = tmp$ret$6;
            break $l$block_6;
          }
          var tmp1__set_children__0_2351145230 = tmp$ret$7;
          var tmp$ret$8;
          $l$block_7: {
            tmp$ret$8 = this;
            break $l$block_7;
          }
          tmp$ret$8[_get_CHILDREN__4174148012()] = tmp1__set_children__0_2351145230;
        }
      }
    }
  }
  function unaryPlus(_this__1828080292) {
    this.child_k19wyq_k$(_this__1828080292);
  }
  function unaryPlus_0(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this__1828080292;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    this.unaryPlus_c8p9bt_k$(tmp$ret$2);
  }
  function invoke(_this__1828080292, block) {
    this.unaryPlus_c8p9bt_k$(create(_this__1828080292, block));
  }
  //endregion
  function _get_CHILDREN__4174148012() {
    init_properties_ChildrenBuilder_kt_3813310744();
    return CHILDREN;
  }
  var CHILDREN;
  function ChildrenBuilder() {
  }
  ChildrenBuilder.$metadata$ = {
    simpleName: 'ChildrenBuilder',
    kind: 'interface',
    interfaces: []
  };
  function createChildrenBuilder() {
    init_properties_ChildrenBuilder_kt_3813310744();
    return new ChildrenBuilderImpl();
  }
  function ChildrenBuilderImpl() {
  }
  ChildrenBuilderImpl.$metadata$ = {
    simpleName: 'ChildrenBuilderImpl',
    kind: 'class',
    interfaces: [ChildrenBuilder]
  };
  var properties_initialized_ChildrenBuilder_kt_3307442548;
  function init_properties_ChildrenBuilder_kt_3813310744() {
    if (!properties_initialized_ChildrenBuilder_kt_3307442548) {
      properties_initialized_ChildrenBuilder_kt_3307442548 = true;
      CHILDREN = Symbol('@@children');
    }
  }
  function FC(block) {
    var component = FC$lambda(block);
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = component;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function FC$lambda$lambda($block, $props) {
    return function ($this$createElementOrNull) {
      $block($this$createElementOrNull, $props);
      return Unit_getInstance();
    };
  }
  function FC$lambda($block) {
    return function (props) {
      return createElementOrNull(FC$lambda$lambda($block, props));
    };
  }
  function create(_this__1828080292, block) {
    var builder = createChildrenBuilder();
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = builder;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp0_apply_0 = tmp$ret$1;
      {
      }
      block(tmp0_apply_0);
      tmp$ret$2 = tmp0_apply_0;
      break $l$block_1;
    }
    var props = tmp$ret$2;
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = builder;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3[_get_CHILDREN__4174148012()];
      break $l$block_3;
    }
    var tmp0_elvis_lhs = tmp$ret$4;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = [];
        break $l$block_4;
      }
      tmp = tmp$ret$5;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var children = tmp;
    return createElement.apply(null, [_this__1828080292, props].concat([].slice.call(children.slice())));
  }
  function createElementOrNull(block) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0 = createChildrenBuilder();
        {
        }
        block(tmp0_apply_0);
        tmp$ret$0 = tmp0_apply_0;
        break $l$block;
      }
      var tmp1__get_children__0_1440392706 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp1__get_children__0_1440392706;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1[_get_CHILDREN__4174148012()];
      break $l$block_1;
    }
    var children = tmp$ret$2;
    var tmp;
    if (children == null) {
      tmp = null;
    } else if (children.length === 0) {
      tmp = null;
    } else if (children.length === 1 ? isValidElement(first(children)) : false) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp2_unsafeCast_0 = first(children);
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = tmp2_unsafeCast_0;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      tmp = createElement.apply(null, [Fragment, void 1].concat([].slice.call(children.slice())));
    }
    return tmp;
  }
  //region block: post-declaration
  ChildrenBuilderImpl.prototype.unaryPlus_c8p9bt_k$ = unaryPlus;
  ChildrenBuilderImpl.prototype.unaryPlus_g7ydph_k$ = unaryPlus_0;
  ChildrenBuilderImpl.prototype.child_k19wyq_k$ = child;
  ChildrenBuilderImpl.prototype.invoke_bsyc51_k$ = invoke;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.FC = FC;
  _.$crossModule$.create = create;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.js.map