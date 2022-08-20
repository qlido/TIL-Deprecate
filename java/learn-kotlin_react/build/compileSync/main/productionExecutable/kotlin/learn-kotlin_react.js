(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom', '@emotion/css', 'react', './kotlin_kotlin.js', './kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.js', './kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom'), require('@emotion/css'), require('react'), require('./kotlin_kotlin.js'), require('./kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.js'), require('./kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.js'));
  else {
    if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'learn-kotlin_react'.");
    }
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'learn-kotlin_react'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'learn-kotlin_react'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'learn-kotlin_react'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_wrappers_kotlin_react === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react' is loaded prior to 'learn-kotlin_react'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom' is loaded prior to 'learn-kotlin_react'.");
    }
    root['learn-kotlin_react'] = factory(typeof this['learn-kotlin_react'] === 'undefined' ? {} : this['learn-kotlin_react'], this['react-dom'], this['@emotion/css'], react, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom);
  }
}(this, function (_, $module$react_dom_2853940192, $module$_emotion_css_145549987, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom) {
  //region block: imports
  var render = $module$react_dom_2853940192.render;
  var css = $module$_emotion_css_145549987.css;
  var useState = $module$react.useState;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$crossModule$.create;
  var KMutableProperty0 = kotlin_kotlin.$crossModule$.KMutableProperty0;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var getLocalDelegateReference = kotlin_kotlin.$crossModule$.getLocalDelegateReference;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$crossModule$.ReactHTML_getInstance;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$crossModule$.FC;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    Unit_getInstance();
    var tmp = _get_Welcome__1762037775();
    var welcome = create(tmp, main$lambda());
    render(welcome, container);
  }
  function main$lambda() {
    return function ($this$create) {
      $this$create.name = 'Kotlin/JS';
      return Unit_getInstance();
    };
  }
  function _get_Welcome__1762037775() {
    init_properties_Welcome_kt_2356203922();
    return Welcome;
  }
  var Welcome;
  function invoke$lambda($name$delegate) {
    init_properties_Welcome_kt_2356203922();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_getValue_0 = getLocalDelegateReference('name', KMutableProperty0, true, function () {
        return THROW_ISE();
      });
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $name$delegate;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0[0];
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function invoke$lambda_0($name$delegate, value) {
    init_properties_Welcome_kt_2356203922();
    var tmp0_setValue_0 = getLocalDelegateReference('name', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = $name$delegate;
      break $l$block;
    }
    return tmp$ret$0[1](value);
  }
  function Welcome$lambda$lambda($name$delegate) {
    return function ($this$invoke) {
      var tmp0_css_0 = $this$invoke;
      var tmp$ret$14;
      $l$block_13: {
        var tmp$ret$13;
        $l$block_12: {
          var tmp$ret$12;
          $l$block_11: {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = {};
              break $l$block;
            }
            var tmp0_apply_0_1_1 = tmp$ret$0;
            {
            }
            {
              var tmp$ret$3;
              $l$block_2: {
                var tmp$ret$2;
                $l$block_1: {
                  var tmp0_unsafeCast_0_1_3 = '5px';
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = tmp0_unsafeCast_0_1_3;
                    break $l$block_0;
                  }
                  tmp$ret$2 = tmp$ret$1;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
              }
              tmp0_apply_0_1_1.padding = tmp$ret$3;
              var tmp$ret$7;
              $l$block_6: {
                var tmp$ret$6;
                $l$block_5: {
                  var tmp0_Color_0_1_4 = 'rgb(8,97,22)';
                  var tmp$ret$5;
                  $l$block_4: {
                    var tmp$ret$4;
                    $l$block_3: {
                      tmp$ret$4 = tmp0_Color_0_1_4;
                      break $l$block_3;
                    }
                    tmp$ret$5 = tmp$ret$4;
                    break $l$block_4;
                  }
                  tmp$ret$6 = tmp$ret$5;
                  break $l$block_5;
                }
                tmp$ret$7 = tmp$ret$6;
                break $l$block_6;
              }
              tmp0_apply_0_1_1.backgroundColor = tmp$ret$7;
              var tmp$ret$11;
              $l$block_10: {
                var tmp$ret$10;
                $l$block_9: {
                  var tmp0_Color_0_1_5 = 'rgb(56,246,137)';
                  var tmp$ret$9;
                  $l$block_8: {
                    var tmp$ret$8;
                    $l$block_7: {
                      tmp$ret$8 = tmp0_Color_0_1_5;
                      break $l$block_7;
                    }
                    tmp$ret$9 = tmp$ret$8;
                    break $l$block_8;
                  }
                  tmp$ret$10 = tmp$ret$9;
                  break $l$block_9;
                }
                tmp$ret$11 = tmp$ret$10;
                break $l$block_10;
              }
              tmp0_apply_0_1_1.color = tmp$ret$11;
            }
            tmp$ret$12 = tmp0_apply_0_1_1;
            break $l$block_11;
          }
          tmp$ret$13 = tmp$ret$12;
          break $l$block_12;
        }
        tmp$ret$14 = css(tmp$ret$13);
        break $l$block_13;
      }
      tmp0_css_0.className = tmp$ret$14;
      $this$invoke.unaryPlus_g7ydph_k$('Hello, ' + invoke$lambda($name$delegate));
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda($name$delegate) {
    return function (event) {
      invoke$lambda_0($name$delegate, event.target.value);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda_0($name$delegate) {
    return function ($this$invoke) {
      var tmp0_css_0 = $this$invoke;
      var tmp$ret$12;
      $l$block_11: {
        var tmp$ret$11;
        $l$block_10: {
          var tmp$ret$10;
          $l$block_9: {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = {};
              break $l$block;
            }
            var tmp0_apply_0_1_1 = tmp$ret$0;
            {
            }
            {
              var tmp$ret$3;
              $l$block_2: {
                var tmp$ret$2;
                $l$block_1: {
                  var tmp0_unsafeCast_0_1_3 = '5px';
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = tmp0_unsafeCast_0_1_3;
                    break $l$block_0;
                  }
                  tmp$ret$2 = tmp$ret$1;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
              }
              tmp0_apply_0_1_1.marginTop = tmp$ret$3;
              var tmp$ret$6;
              $l$block_5: {
                var tmp$ret$5;
                $l$block_4: {
                  var tmp0_unsafeCast_0_1_4 = '5px';
                  var tmp$ret$4;
                  $l$block_3: {
                    tmp$ret$4 = tmp0_unsafeCast_0_1_4;
                    break $l$block_3;
                  }
                  tmp$ret$5 = tmp$ret$4;
                  break $l$block_4;
                }
                tmp$ret$6 = tmp$ret$5;
                break $l$block_5;
              }
              tmp0_apply_0_1_1.marginBottom = tmp$ret$6;
              var tmp$ret$9;
              $l$block_8: {
                var tmp$ret$8;
                $l$block_7: {
                  var tmp0_unsafeCast_0_1_5 = '14px';
                  var tmp$ret$7;
                  $l$block_6: {
                    tmp$ret$7 = tmp0_unsafeCast_0_1_5;
                    break $l$block_6;
                  }
                  tmp$ret$8 = tmp$ret$7;
                  break $l$block_7;
                }
                tmp$ret$9 = tmp$ret$8;
                break $l$block_8;
              }
              tmp0_apply_0_1_1.fontSize = tmp$ret$9;
            }
            tmp$ret$10 = tmp0_apply_0_1_1;
            break $l$block_9;
          }
          tmp$ret$11 = tmp$ret$10;
          break $l$block_10;
        }
        tmp$ret$12 = css(tmp$ret$11);
        break $l$block_11;
      }
      tmp0_css_0.className = tmp$ret$12;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.value = invoke$lambda($name$delegate);
      $this$invoke.onChange = Welcome$lambda$lambda$lambda($name$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda() {
    return function ($this$FC, props) {
      var name$delegate = useState(props.name);
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0__get_div__0_2589221003 = ReactHTML_getInstance();
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'div';
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      var tmp = tmp$ret$2;
      $this$FC.invoke_bsyc51_k$(tmp, Welcome$lambda$lambda(name$delegate));
      var tmp$ret$5;
      $l$block_4: {
        var tmp1__get_input__0_3109200307 = ReactHTML_getInstance();
        var tmp$ret$4;
        $l$block_3: {
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = 'input';
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp$ret$5 = tmp$ret$4;
        break $l$block_4;
      }
      var tmp_0 = tmp$ret$5;
      $this$FC.invoke_bsyc51_k$(tmp_0, Welcome$lambda$lambda_0(name$delegate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Welcome_kt_3751673326;
  function init_properties_Welcome_kt_2356203922() {
    if (!properties_initialized_Welcome_kt_3751673326) {
      properties_initialized_Welcome_kt_3751673326 = true;
      Welcome = FC(Welcome$lambda());
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=learn-kotlin_react.js.map