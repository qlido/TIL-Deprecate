(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom', '@emotion/css', 'react', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom'), require('@emotion/css'), require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'));
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
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'learn-kotlin_react'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'learn-kotlin_react'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'learn-kotlin_react'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'learn-kotlin_react'.");
    }
    root['learn-kotlin_react'] = factory(typeof this['learn-kotlin_react'] === 'undefined' ? {} : this['learn-kotlin_react'], this['react-dom'], this['@emotion/css'], react, this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir']);
  }
}(this, function (_, $module$react_dom_nty7mo, $module$_emotion_css_2enn37, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom) {
  'use strict';
  //region block: imports
  var render = $module$react_dom_nty7mo.render;
  var css = $module$_emotion_css_2enn37.css;
  var useState = $module$react.useState;
  var ensureNotNull = kotlin_kotlin.$_$.l;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.h;
  var THROW_ISE = kotlin_kotlin.$_$.k;
  var getLocalDelegateReference = kotlin_kotlin.$_$.d;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    var tmp = get_Welcome();
    var welcome = create(tmp, main$lambda());
    render(welcome, container);
  }
  function main$lambda() {
    return function ($this$create) {
      $this$create.name = 'Kotlin/JS';
      $this$create.pass = '';
      return Unit_getInstance();
    };
  }
  function get_Welcome() {
    init_properties_Welcome_kt_w2afe6();
    return Welcome;
  }
  var Welcome;
  function invoke$lambda($name$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    {
      var tmp0_getValue = getLocalDelegateReference('name', KMutableProperty0, true, function () {
        return THROW_ISE();
      });
      var tmp$ret$0;
      {
        tmp$ret$0 = $name$delegate;
      }
      tmp$ret$1 = tmp$ret$0[0];
    }
    return tmp$ret$1;
  }
  function invoke$lambda_0($name$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('name', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    {
      tmp$ret$0 = $name$delegate;
    }
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_1($pass$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    {
      var tmp0_getValue = getLocalDelegateReference('pass', KMutableProperty0, true, function () {
        return THROW_ISE();
      });
      var tmp$ret$0;
      {
        tmp$ret$0 = $pass$delegate;
      }
      tmp$ret$1 = tmp$ret$0[0];
    }
    return tmp$ret$1;
  }
  function invoke$lambda_2($pass$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('pass', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    {
      tmp$ret$0 = $pass$delegate;
    }
    return tmp$ret$0[1](value);
  }
  function Welcome$lambda$lambda($name$delegate, $pass$delegate) {
    return function ($this$invoke) {
      var tmp0_css = $this$invoke;
      var tmp$ret$14;
      {
        var tmp$ret$13;
        {
          var tmp$ret$12;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = {};
            }
            var tmp0_apply = tmp$ret$0;
            {
            }
            {
              var tmp$ret$3;
              {
                var tmp$ret$2;
                {
                  var tmp0_unsafeCast = '5px';
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = tmp0_unsafeCast;
                  }
                  tmp$ret$2 = tmp$ret$1;
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp0_apply.padding = tmp$ret$3;
              var tmp$ret$7;
              {
                var tmp$ret$6;
                {
                  var tmp0_Color = 'rgb(8,97,22)';
                  var tmp$ret$5;
                  {
                    var tmp$ret$4;
                    {
                      tmp$ret$4 = tmp0_Color;
                    }
                    tmp$ret$5 = tmp$ret$4;
                  }
                  tmp$ret$6 = tmp$ret$5;
                }
                tmp$ret$7 = tmp$ret$6;
              }
              tmp0_apply.backgroundColor = tmp$ret$7;
              var tmp$ret$11;
              {
                var tmp$ret$10;
                {
                  var tmp0_Color_0 = 'rgb(56,246,137)';
                  var tmp$ret$9;
                  {
                    var tmp$ret$8;
                    {
                      tmp$ret$8 = tmp0_Color_0;
                    }
                    tmp$ret$9 = tmp$ret$8;
                  }
                  tmp$ret$10 = tmp$ret$9;
                }
                tmp$ret$11 = tmp$ret$10;
              }
              tmp0_apply.color = tmp$ret$11;
            }
            tmp$ret$12 = tmp0_apply;
          }
          tmp$ret$13 = tmp$ret$12;
        }
        tmp$ret$14 = css(tmp$ret$13);
      }
      tmp0_css.className = tmp$ret$14;
      $this$invoke.unaryPlus_g7ydph_k$('id: ' + invoke$lambda($name$delegate) + '\n password: ' + invoke$lambda_1($pass$delegate));
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
      var tmp0_css = $this$invoke;
      var tmp$ret$15;
      {
        var tmp$ret$14;
        {
          var tmp$ret$13;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = {};
            }
            var tmp0_apply = tmp$ret$0;
            {
            }
            {
              var tmp$ret$3;
              {
                var tmp$ret$2;
                {
                  var tmp0_unsafeCast = '5px';
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = tmp0_unsafeCast;
                  }
                  tmp$ret$2 = tmp$ret$1;
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp0_apply.marginTop = tmp$ret$3;
              var tmp$ret$6;
              {
                var tmp$ret$5;
                {
                  var tmp0_unsafeCast_0 = '5px';
                  var tmp$ret$4;
                  {
                    tmp$ret$4 = tmp0_unsafeCast_0;
                  }
                  tmp$ret$5 = tmp$ret$4;
                }
                tmp$ret$6 = tmp$ret$5;
              }
              tmp0_apply.marginBottom = tmp$ret$6;
              var tmp$ret$9;
              {
                var tmp$ret$8;
                {
                  var tmp0_unsafeCast_1 = '14px';
                  var tmp$ret$7;
                  {
                    tmp$ret$7 = tmp0_unsafeCast_1;
                  }
                  tmp$ret$8 = tmp$ret$7;
                }
                tmp$ret$9 = tmp$ret$8;
              }
              tmp0_apply.fontSize = tmp$ret$9;
              var tmp$ret$12;
              {
                var tmp$ret$11;
                {
                  var tmp0_unsafeCast_2 = '14px';
                  var tmp$ret$10;
                  {
                    tmp$ret$10 = tmp0_unsafeCast_2;
                  }
                  tmp$ret$11 = tmp$ret$10;
                }
                tmp$ret$12 = tmp$ret$11;
              }
              tmp0_apply.fontSize = tmp$ret$12;
            }
            tmp$ret$13 = tmp0_apply;
          }
          tmp$ret$14 = tmp$ret$13;
        }
        tmp$ret$15 = css(tmp$ret$14);
      }
      tmp0_css.className = tmp$ret$15;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.value = invoke$lambda($name$delegate);
      $this$invoke.onChange = Welcome$lambda$lambda$lambda($name$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda_0($pass$delegate) {
    return function (event) {
      invoke$lambda_2($pass$delegate, event.target.value);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda_1($pass$delegate) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).password;
      $this$invoke.value = invoke$lambda_1($pass$delegate);
      $this$invoke.onChange = Welcome$lambda$lambda$lambda_0($pass$delegate);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda() {
    return function ($this$FC, props) {
      var name$delegate = useState(props.name);
      var pass$delegate = useState(props.pass);
      var tmp$ret$2;
      {
        var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'div';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$FC.invoke_bsyc51_k$(tmp, Welcome$lambda$lambda(name$delegate, pass$delegate));
      var tmp$ret$5;
      {
        var tmp1__get_input__umcb5q = ReactHTML_getInstance();
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            tmp$ret$3 = 'input';
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp_0 = tmp$ret$5;
      $this$FC.invoke_bsyc51_k$(tmp_0, Welcome$lambda$lambda_0(name$delegate));
      var tmp$ret$8;
      {
        var tmp2__get_input__zh0yd9 = ReactHTML_getInstance();
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            tmp$ret$6 = 'input';
          }
          tmp$ret$7 = tmp$ret$6;
        }
        tmp$ret$8 = tmp$ret$7;
      }
      var tmp_1 = tmp$ret$8;
      $this$FC.invoke_bsyc51_k$(tmp_1, Welcome$lambda$lambda_1(pass$delegate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Welcome_kt_8zgob6;
  function init_properties_Welcome_kt_w2afe6() {
    if (properties_initialized_Welcome_kt_8zgob6) {
    } else {
      properties_initialized_Welcome_kt_8zgob6 = true;
      Welcome = FC(Welcome$lambda());
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=learn-kotlin_react.js.map