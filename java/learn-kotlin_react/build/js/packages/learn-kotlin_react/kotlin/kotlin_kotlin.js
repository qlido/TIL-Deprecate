(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_kotlin = factory(typeof kotlin_kotlin === 'undefined' ? {} : kotlin_kotlin);
}(this, function (_) {
  //region block: imports
  var imul = Math.imul;
  //endregion
  'use strict';
  //region block: pre-declaration
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  //endregion
  function first(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292.length === 0;
      break $l$block;
    }
    if (tmp$ret$0)
      throw NoSuchElementException_init_$Create$('Array is empty.');
    else {
    }
    return _this__1828080292[0];
  }
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function isNaN_0(_this__1828080292) {
    return !(_this__1828080292 === _this__1828080292);
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
  function KMutableProperty0() {
  }
  KMutableProperty0.$metadata$ = {
    simpleName: 'KMutableProperty0',
    kind: 'interface',
    interfaces: [KProperty0, KMutableProperty]
  };
  function KProperty0() {
  }
  KProperty0.$metadata$ = {
    simpleName: 'KProperty0',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KMutableProperty() {
  }
  KMutableProperty.$metadata$ = {
    simpleName: 'KMutableProperty',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty() {
  }
  KProperty.$metadata$ = {
    simpleName: 'KProperty',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function Enum() {
  }
  Enum.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  Enum.prototype._get_ordinal__3363892928_fec5kw_k$ = function () {
    return this.ordinal_1;
  };
  Enum.prototype.compareTo_6thzay_k$ = function (other) {
    return compareTo(this.ordinal_1, other.ordinal_1);
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this.name_1;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_ygsx0s_k$());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 1;
          break $l$block;
        }
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 1;
          break $l$block_0;
        }
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_6thzaj_k$(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function Companion() {
    Companion_instance = this;
    this.MIN_VALUE_1 = new Long(0, -2147483648);
    this.MAX_VALUE_1 = new Long(-1, 2147483647);
    this.SIZE_BYTES_1 = 8;
    this.SIZE_BITS_1 = 64;
  }
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Long(low, high) {
    Companion_getInstance();
    Number_0.call(this);
    this.low_1 = low;
    this.high_1 = high;
  }
  Long.prototype._get_low__857179069_e6cblp_k$ = function () {
    return this.low_1;
  };
  Long.prototype._get_high__798860521_d7mcq1_k$ = function () {
    return this.high_1;
  };
  Long.prototype.compareTo_n4fqi2_k$ = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_n4fqi2_k$(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.plus_u6jwas_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.div_9s1fi3_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.unaryMinus_6uz0qp_k$ = function () {
    return this.inv_28kx_k$().plus_u6jwas_k$(new Long(1, 0));
  };
  Long.prototype.inv_28kx_k$ = function () {
    return new Long(~this.low_1, ~this.high_1);
  };
  Long.prototype.toInt_1tsl84_k$ = function () {
    return this.low_1;
  };
  Long.prototype.toDouble_ygsx0s_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_ygsx0s_k$();
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  function _get_ZERO__784837795() {
    init_properties_longjs_kt_2491794837();
    return ZERO;
  }
  var ZERO;
  function _get_ONE__856281867() {
    init_properties_longjs_kt_2491794837();
    return ONE;
  }
  var ONE;
  function _get_NEG_ONE__3857310458() {
    init_properties_longjs_kt_2491794837();
    return NEG_ONE;
  }
  var NEG_ONE;
  function _get_MAX_VALUE__3201573499() {
    init_properties_longjs_kt_2491794837();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function _get_MIN_VALUE__1378605517() {
    init_properties_longjs_kt_2491794837();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function _get_TWO_PWR_24___3968246811() {
    init_properties_longjs_kt_2491794837();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (equalsLong(_this__1828080292, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__1828080292);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__1828080292, other)) ? -1 : 1;
  }
  function add(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    var a48 = _this__1828080292._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var a32 = _this__1828080292._get_high__798860521_d7mcq1_k$() & 65535;
    var a16 = _this__1828080292._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var a00 = _this__1828080292._get_low__857179069_e6cblp_k$() & 65535;
    var b48 = other._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var b32 = other._get_high__798860521_d7mcq1_k$() & 65535;
    var b16 = other._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var b00 = other._get_low__857179069_e6cblp_k$() & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return add(_this__1828080292, other.unaryMinus_6uz0qp_k$());
  }
  function multiply(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (isZero(_this__1828080292)) {
      return _get_ZERO__784837795();
    } else if (isZero(other)) {
      return _get_ZERO__784837795();
    }
    if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
      return isOdd(other) ? _get_MIN_VALUE__1378605517() : _get_ZERO__784837795();
    } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
      return isOdd(_this__1828080292) ? _get_MIN_VALUE__1378605517() : _get_ZERO__784837795();
    }
    if (isNegative(_this__1828080292)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__1828080292), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__1828080292), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__1828080292, negate(other)));
    }
    if (lessThan(_this__1828080292, _get_TWO_PWR_24___3968246811()) ? lessThan(other, _get_TWO_PWR_24___3968246811()) : false) {
      return fromNumber(toNumber(_this__1828080292) * toNumber(other));
    }
    var a48 = _this__1828080292._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var a32 = _this__1828080292._get_high__798860521_d7mcq1_k$() & 65535;
    var a16 = _this__1828080292._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var a00 = _this__1828080292._get_low__857179069_e6cblp_k$() & 65535;
    var b48 = other._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var b32 = other._get_high__798860521_d7mcq1_k$() & 65535;
    var b16 = other._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var b00 = other._get_low__857179069_e6cblp_k$() & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__1828080292)) {
      return _get_ZERO__784837795();
    }
    if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
      if (equalsLong(other, _get_ONE__856281867()) ? true : equalsLong(other, _get_NEG_ONE__3857310458())) {
        return _get_MIN_VALUE__1378605517();
      } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
        return _get_ONE__856281867();
      } else {
        var halfThis = shiftRight(_this__1828080292, 1);
        var approx = shiftLeft(halfThis.div_9s1fi3_k$(other), 1);
        if (equalsLong(approx, _get_ZERO__784837795())) {
          return isNegative(other) ? _get_ONE__856281867() : _get_NEG_ONE__3857310458();
        } else {
          var rem = subtract(_this__1828080292, multiply(other, approx));
          return add(approx, rem.div_9s1fi3_k$(other));
        }
      }
    } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
      return _get_ZERO__784837795();
    }
    if (isNegative(_this__1828080292)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__1828080292).div_9s1fi3_k$(negate(other));
      } else {
        tmp = negate(negate(_this__1828080292).div_9s1fi3_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__1828080292.div_9s1fi3_k$(negate(other)));
    }
    var res = _get_ZERO__784837795();
    var rem_0 = _this__1828080292;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = _get_ONE__856281867();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__1828080292, numBits) {
    init_properties_longjs_kt_2491794837();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__1828080292;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__1828080292._get_low__857179069_e6cblp_k$() << numBits_0, _this__1828080292._get_high__798860521_d7mcq1_k$() << numBits_0 | (_this__1828080292._get_low__857179069_e6cblp_k$() >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__1828080292._get_low__857179069_e6cblp_k$() << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__1828080292, numBits) {
    init_properties_longjs_kt_2491794837();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__1828080292;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__1828080292._get_low__857179069_e6cblp_k$() >>> numBits_0 | 0 | _this__1828080292._get_high__798860521_d7mcq1_k$() << (32 - numBits_0 | 0), _this__1828080292._get_high__798860521_d7mcq1_k$() >> numBits_0);
      } else {
        return new Long(_this__1828080292._get_high__798860521_d7mcq1_k$() >> (numBits_0 - 32 | 0), _this__1828080292._get_high__798860521_d7mcq1_k$() >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() * 4.294967296E9 + getLowBitsUnsigned(_this__1828080292);
  }
  function equalsLong(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() === other._get_high__798860521_d7mcq1_k$() ? _this__1828080292._get_low__857179069_e6cblp_k$() === other._get_low__857179069_e6cblp_k$() : false;
  }
  function toStringImpl(_this__1828080292, radix) {
    init_properties_longjs_kt_2491794837();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__1828080292)) {
      return '0';
    }
    if (isNegative(_this__1828080292)) {
      if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
        var radixLong = fromInt(radix);
        var div = _this__1828080292.div_9s1fi3_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__1828080292).toInt_1tsl84_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__1828080292), radix);
      }
    }
    var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this__1828080292;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_9s1fi3_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_1tsl84_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = tmp1_unsafeCast_0;
        break $l$block_2;
      }
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    init_properties_longjs_kt_2491794837();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() < 0;
  }
  function isZero(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() === 0 ? _this__1828080292._get_low__857179069_e6cblp_k$() === 0 : false;
  }
  function isOdd(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return (_this__1828080292._get_low__857179069_e6cblp_k$() & 1) === 1;
  }
  function negate(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292.unaryMinus_6uz0qp_k$();
  }
  function lessThan(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) < 0;
  }
  function fromNumber(value) {
    init_properties_longjs_kt_2491794837();
    if (isNaN_0(value)) {
      return _get_ZERO__784837795();
    } else if (value <= -9.223372036854776E18) {
      return _get_MIN_VALUE__1378605517();
    } else if (value + 1 >= 9.223372036854776E18) {
      return _get_MAX_VALUE__3201573499();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) > 0;
  }
  function greaterThanOrEqual(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) >= 0;
  }
  function getLowBitsUnsigned(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_low__857179069_e6cblp_k$() >= 0 ? _this__1828080292._get_low__857179069_e6cblp_k$() : 4.294967296E9 + _this__1828080292._get_low__857179069_e6cblp_k$();
  }
  var properties_initialized_longjs_kt_320052665;
  function init_properties_longjs_kt_2491794837() {
    if (!properties_initialized_longjs_kt_320052665) {
      properties_initialized_longjs_kt_320052665 = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function _get_propertyRefClassMetadataCache__1118137304() {
    init_properties_reflectRuntime_kt_2213475647();
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    init_properties_reflectRuntime_kt_2213475647();
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter, type));
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getPropertyRefClass(obj, metadata) {
    init_properties_reflectRuntime_kt_2213475647();
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    return obj;
  }
  function getKPropMetadata(paramCount, setter, type) {
    init_properties_reflectRuntime_kt_2213475647();
    var mdata = _get_propertyRefClassMetadataCache__1118137304()[paramCount][setter == null ? 0 : 1];
    if (mdata.interfaces.length == 0) {
      mdata.interfaces.push(type);
    }
    return mdata;
  }
  function getLocalDelegateReference(name, type, mutable, lambda) {
    init_properties_reflectRuntime_kt_2213475647();
    return getPropertyCallableRef(name, 0, type, lambda, mutable ? lambda : null);
  }
  var properties_initialized_reflectRuntime_kt_3166988643;
  function init_properties_reflectRuntime_kt_2213475647() {
    if (!properties_initialized_reflectRuntime_kt_3166988643) {
      properties_initialized_reflectRuntime_kt_3166988643 = true;
      var tmp$ret$17;
      $l$block_16: {
        var tmp$ret$4;
        $l$block_3: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = {kind: 'class', interfaces: []};
            break $l$block;
          }
          var tmp = tmp$ret$0;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = {kind: 'class', interfaces: []};
            break $l$block_0;
          }
          var tmp0_arrayOf_0 = [tmp, tmp$ret$1];
          var tmp$ret$3;
          $l$block_2: {
            var tmp$ret$2;
            $l$block_1: {
              tmp$ret$2 = tmp0_arrayOf_0;
              break $l$block_1;
            }
            tmp$ret$3 = tmp$ret$2;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        var tmp_0 = tmp$ret$4;
        var tmp$ret$9;
        $l$block_8: {
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = {kind: 'class', interfaces: []};
            break $l$block_4;
          }
          var tmp_1 = tmp$ret$5;
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = {kind: 'class', interfaces: []};
            break $l$block_5;
          }
          var tmp1_arrayOf_0 = [tmp_1, tmp$ret$6];
          var tmp$ret$8;
          $l$block_7: {
            var tmp$ret$7;
            $l$block_6: {
              tmp$ret$7 = tmp1_arrayOf_0;
              break $l$block_6;
            }
            tmp$ret$8 = tmp$ret$7;
            break $l$block_7;
          }
          tmp$ret$9 = tmp$ret$8;
          break $l$block_8;
        }
        var tmp_2 = tmp$ret$9;
        var tmp$ret$14;
        $l$block_13: {
          var tmp$ret$10;
          $l$block_9: {
            tmp$ret$10 = {kind: 'class', interfaces: []};
            break $l$block_9;
          }
          var tmp_3 = tmp$ret$10;
          var tmp$ret$11;
          $l$block_10: {
            tmp$ret$11 = {kind: 'class', interfaces: []};
            break $l$block_10;
          }
          var tmp2_arrayOf_0 = [tmp_3, tmp$ret$11];
          var tmp$ret$13;
          $l$block_12: {
            var tmp$ret$12;
            $l$block_11: {
              tmp$ret$12 = tmp2_arrayOf_0;
              break $l$block_11;
            }
            tmp$ret$13 = tmp$ret$12;
            break $l$block_12;
          }
          tmp$ret$14 = tmp$ret$13;
          break $l$block_13;
        }
        var tmp3_arrayOf_0 = [tmp_0, tmp_2, tmp$ret$14];
        var tmp$ret$16;
        $l$block_15: {
          var tmp$ret$15;
          $l$block_14: {
            tmp$ret$15 = tmp3_arrayOf_0;
            break $l$block_14;
          }
          tmp$ret$16 = tmp$ret$15;
          break $l$block_15;
        }
        tmp$ret$17 = tmp$ret$16;
        break $l$block_16;
      }
      propertyRefClassMetadataCache = tmp$ret$17;
    }
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$(message) {
    var tmp = NoSuchElementException_init_$Init$(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function Function0() {
  }
  Function0.$metadata$ = {
    simpleName: 'Function0',
    kind: 'interface',
    interfaces: []
  };
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Unit_getInstance = Unit_getInstance;
  _.$crossModule$.first = first;
  _.$crossModule$.getLocalDelegateReference = getLocalDelegateReference;
  _.$crossModule$.KMutableProperty0 = KMutableProperty0;
  _.$crossModule$.THROW_ISE = THROW_ISE;
  _.$crossModule$.ensureNotNull = ensureNotNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_kotlin.js.map