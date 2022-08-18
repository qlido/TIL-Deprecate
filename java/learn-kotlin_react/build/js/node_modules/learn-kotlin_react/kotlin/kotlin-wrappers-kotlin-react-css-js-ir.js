(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@emotion/css', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-wrappers-kotlin-csstype-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@emotion/css'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-wrappers-kotlin-csstype-js-ir.js'));
  else {
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-css-js-ir'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'kotlin-wrappers-kotlin-react-css-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-css-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-css-js-ir'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-csstype-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-css-js-ir'. Its dependency 'kotlin-wrappers-kotlin-csstype-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-csstype-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-css-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-react-css-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-react-css-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-css-js-ir'], this['@emotion/css'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-wrappers-kotlin-csstype-js-ir']);
  }
}(this, function (_, $module$_emotion_css_2enn37, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype) {
  'use strict';
  //region block: imports
  var css = $module$_emotion_css_2enn37.css;
  var Unit_getInstance = kotlin_kotlin.$_$.a;
  var left = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.a2;
  var right = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.s2;
  var invoke = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.s;
  var cue = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.b;
  var cue_0 = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.c1;
  var cueRegion = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.a;
  var cueRegion_0 = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.b1;
  var part = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.o;
  var slotted = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.p;
  var dir = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.c;
  var has = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.d;
  var host = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.f;
  var hostContext = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.e;
  var is = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.g;
  var lang = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.h;
  var matches = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.i;
  var not = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.j;
  var nthChild = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.k;
  var nthLastChild = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.l;
  var nthLastOfType = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.m;
  var nthOfType = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.n;
  var where = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.q;
  var after = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.v;
  var backdrop = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.x;
  var before = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.y;
  var firstLetter = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.k1;
  var firstLine = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.l1;
  var grammarError = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.t1;
  var marker = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.d2;
  var placeholder = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.o2;
  var selection = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.v2;
  var spellingError = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.w2;
  var targetText = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.x2;
  var active = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.u;
  var anyLink = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.w;
  var blank = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.z;
  var checked = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.a1;
  var current = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.d1;
  var default_0 = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.e1;
  var defined = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.f1;
  var disabled = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.g1;
  var empty = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.h1;
  var enabled = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.i1;
  var first = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.n1;
  var firstChild = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.j1;
  var firstOfType = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.m1;
  var focus = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.q1;
  var focusVisible = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.o1;
  var focusWithin = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.p1;
  var fullscreen = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.r1;
  var future = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.s1;
  var hover = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.u1;
  var inRange = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.v1;
  var indeterminate = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.w1;
  var invalid = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.x1;
  var lastChild = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.y1;
  var lastOfType = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.z1;
  var link = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.b2;
  var localLink = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.c2;
  var nthCol = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.e2;
  var nthLastCol = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.f2;
  var onlyChild = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.g2;
  var onlyOfType = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.h2;
  var optional = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.i2;
  var outOfRange = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.j2;
  var past = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.k2;
  var paused = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.l2;
  var pictureInPicture = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.m2;
  var placeholderShown = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.n2;
  var readOnly = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.p2;
  var readWrite = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.q2;
  var required = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.r2;
  var root = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.t2;
  var scope = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.u2;
  var target = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.z2;
  var targetWithin = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.y2;
  var userInvalid = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.a3;
  var userValid = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.b3;
  var valid = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.c3;
  var visited = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.d3;
  var RuleBuilder = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.t;
  var PseudosRuleBuilder = kotlin_org_jetbrains_kotlin_wrappers_kotlin_csstype.$_$.r;
  var classMeta = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  //endregion
  function PropertiesBuilder() {
  }
  PropertiesBuilder.prototype.invoke_qycmw4_k$ = function (_this__u8e3s4, block) {
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = _this__u8e3s4;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      var tmp0_invoke = tmp$ret$1;
      var tmp$ret$2;
      {
        tmp$ret$2 = this;
      }
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_unsafeCast = {};
          tmp$ret$3 = tmp0_unsafeCast;
        }
        var tmp1_apply = tmp$ret$3;
        {
        }
        block(tmp1_apply);
        tmp$ret$4 = tmp1_apply;
      }
      tmp$ret$2[tmp0_invoke] = tmp$ret$4;
    }
  };
  PropertiesBuilder.$metadata$ = classMeta('PropertiesBuilder', [RuleBuilder, PseudosRuleBuilder]);
  function css_0(_this__u8e3s4, block) {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = {};
          }
          var tmp0_apply = tmp$ret$0;
          {
          }
          block(tmp0_apply);
          tmp$ret$1 = tmp0_apply;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      tmp$ret$3 = css(tmp$ret$2);
    }
    _this__u8e3s4.className = tmp$ret$3;
  }
  function className(block) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = {};
        }
        var tmp0_apply = tmp$ret$0;
        {
        }
        block(tmp0_apply);
        tmp$ret$1 = tmp0_apply;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return css(tmp$ret$2);
  }
  //region block: post-declaration
  PropertiesBuilder.prototype.left_uihxws_k$ = left;
  PropertiesBuilder.prototype.right_e59s75_k$ = right;
  PropertiesBuilder.prototype.invoke_dnsoq2_k$ = invoke;
  PropertiesBuilder.prototype.cue_w35pcn_k$ = cue;
  PropertiesBuilder.prototype.cue_hxf0mg_k$ = cue_0;
  PropertiesBuilder.prototype.cueRegion_wivn1n_k$ = cueRegion;
  PropertiesBuilder.prototype.cueRegion_uj366s_k$ = cueRegion_0;
  PropertiesBuilder.prototype.part_6fwztj_k$ = part;
  PropertiesBuilder.prototype.slotted_v0o69z_k$ = slotted;
  PropertiesBuilder.prototype.dir_e6romp_k$ = dir;
  PropertiesBuilder.prototype.has_tlcjwe_k$ = has;
  PropertiesBuilder.prototype.host_y8s88k_k$ = host;
  PropertiesBuilder.prototype.hostContext_yfbi5x_k$ = hostContext;
  PropertiesBuilder.prototype.is_fkc90y_k$ = is;
  PropertiesBuilder.prototype.lang_6agh76_k$ = lang;
  PropertiesBuilder.prototype.matches_3s3s7r_k$ = matches;
  PropertiesBuilder.prototype.not_77smd3_k$ = not;
  PropertiesBuilder.prototype.nthChild_9e03cy_k$ = nthChild;
  PropertiesBuilder.prototype.nthLastChild_l1s688_k$ = nthLastChild;
  PropertiesBuilder.prototype.nthLastOfType_33qifh_k$ = nthLastOfType;
  PropertiesBuilder.prototype.nthOfType_h35149_k$ = nthOfType;
  PropertiesBuilder.prototype.where_9d2nqt_k$ = where;
  PropertiesBuilder.prototype.after_865zcv_k$ = after;
  PropertiesBuilder.prototype.backdrop_crgsaj_k$ = backdrop;
  PropertiesBuilder.prototype.before_4euk4k_k$ = before;
  PropertiesBuilder.prototype.firstLetter_d4j2g5_k$ = firstLetter;
  PropertiesBuilder.prototype.firstLine_4z1aon_k$ = firstLine;
  PropertiesBuilder.prototype.grammarError_v7pmka_k$ = grammarError;
  PropertiesBuilder.prototype.marker_fy5pep_k$ = marker;
  PropertiesBuilder.prototype.placeholder_b14f54_k$ = placeholder;
  PropertiesBuilder.prototype.selection_9mq1dd_k$ = selection;
  PropertiesBuilder.prototype.spellingError_vvnir1_k$ = spellingError;
  PropertiesBuilder.prototype.targetText_mk8vy5_k$ = targetText;
  PropertiesBuilder.prototype.active_vgztat_k$ = active;
  PropertiesBuilder.prototype.anyLink_3begid_k$ = anyLink;
  PropertiesBuilder.prototype.blank_hb2nt_k$ = blank;
  PropertiesBuilder.prototype.checked_emg2us_k$ = checked;
  PropertiesBuilder.prototype.current_9sx6ea_k$ = current;
  PropertiesBuilder.prototype.default_4ayi3q_k$ = default_0;
  PropertiesBuilder.prototype.defined_4s7566_k$ = defined;
  PropertiesBuilder.prototype.disabled_gruzxd_k$ = disabled;
  PropertiesBuilder.prototype.empty_v1xgz6_k$ = empty;
  PropertiesBuilder.prototype.enabled_rx2key_k$ = enabled;
  PropertiesBuilder.prototype.first_9klqwb_k$ = first;
  PropertiesBuilder.prototype.firstChild_5hltjj_k$ = firstChild;
  PropertiesBuilder.prototype.firstOfType_nj5k0q_k$ = firstOfType;
  PropertiesBuilder.prototype.focus_93hpab_k$ = focus;
  PropertiesBuilder.prototype.focusVisible_m9az6p_k$ = focusVisible;
  PropertiesBuilder.prototype.focusWithin_klnyrc_k$ = focusWithin;
  PropertiesBuilder.prototype.fullscreen_d9rc80_k$ = fullscreen;
  PropertiesBuilder.prototype.future_rhy754_k$ = future;
  PropertiesBuilder.prototype.hover_833p3z_k$ = hover;
  PropertiesBuilder.prototype.inRange_f304cd_k$ = inRange;
  PropertiesBuilder.prototype.indeterminate_8bi1sw_k$ = indeterminate;
  PropertiesBuilder.prototype.invalid_uvwpuk_k$ = invalid;
  PropertiesBuilder.prototype.lastChild_9eelfv_k$ = lastChild;
  PropertiesBuilder.prototype.lastOfType_buj0lo_k$ = lastOfType;
  PropertiesBuilder.prototype.link_3rymlb_k$ = link;
  PropertiesBuilder.prototype.localLink_b6wb1m_k$ = localLink;
  PropertiesBuilder.prototype.nthCol_x2iug3_k$ = nthCol;
  PropertiesBuilder.prototype.nthLastCol_5rhvzh_k$ = nthLastCol;
  PropertiesBuilder.prototype.onlyChild_zzool_k$ = onlyChild;
  PropertiesBuilder.prototype.onlyOfType_zgz0ym_k$ = onlyOfType;
  PropertiesBuilder.prototype.optional_2a56j_k$ = optional;
  PropertiesBuilder.prototype.outOfRange_1y0w2l_k$ = outOfRange;
  PropertiesBuilder.prototype.past_pqy67r_k$ = past;
  PropertiesBuilder.prototype.paused_hf9qel_k$ = paused;
  PropertiesBuilder.prototype.pictureInPicture_kh7dy8_k$ = pictureInPicture;
  PropertiesBuilder.prototype.placeholderShown_37lcg3_k$ = placeholderShown;
  PropertiesBuilder.prototype.readOnly_c5hyyv_k$ = readOnly;
  PropertiesBuilder.prototype.readWrite_9b9xde_k$ = readWrite;
  PropertiesBuilder.prototype.required_mxoi9w_k$ = required;
  PropertiesBuilder.prototype.root_pogsop_k$ = root;
  PropertiesBuilder.prototype.scope_q06gc9_k$ = scope;
  PropertiesBuilder.prototype.target_ukhchi_k$ = target;
  PropertiesBuilder.prototype.targetWithin_us6r7l_k$ = targetWithin;
  PropertiesBuilder.prototype.userInvalid_tz53zj_k$ = userInvalid;
  PropertiesBuilder.prototype.userValid_imrb2u_k$ = userValid;
  PropertiesBuilder.prototype.valid_iucyxt_k$ = valid;
  PropertiesBuilder.prototype.visited_9o045r_k$ = visited;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-css-js-ir.js.map