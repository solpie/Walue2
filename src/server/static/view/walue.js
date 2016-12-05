/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Setting_1 = __webpack_require__(66);
	var Navbar_1 = __webpack_require__(49);
	var Monitor_1 = __webpack_require__(51);
	var version = '16.11.25.4';
	document.title = "舞里由衣 ver " + version;
	var routes = [
	    {
	        path: '/', name: 'home',
	        components: { default: Monitor_1.monitorView, Navbar: Navbar_1.Navbar }
	    },
	    {
	        path: '/setting', name: 'setting',
	        components: { default: Setting_1.settingView, Navbar: Navbar_1.Navbar }
	    },
	];
	var router = new VueRouter({
	    routes: routes
	});
	router.afterEach(function (to, from) {
	    var toPath = to.path;
	    router.app.active = toPath.split("/")[1];
	});
	var app = new Vue({
	    router: router
	}).$mount('#app');


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(22)
	var ieee754 = __webpack_require__(23)
	var isArray = __webpack_require__(24)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21).Buffer, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	exports.Navbar = {
	    props: {
	        active: {},
	    },
	    template: __webpack_require__(50),
	    methods: {}
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"nav\">\r\n    <div class=\"nav-left\">\r\n        <a class=\"nav-item is-brand\" href=\"#\">\r\n            <span class=\"icon\">\r\n                <i class=\"fa fa-home\"></i>\r\n            </span>\r\n        </a>\r\n    </div>\r\n\r\n    <!--<div class=\"nav-center\">\r\n        <a class=\"nav-item\" href=\"#\">\r\n            <span class=\"icon\">\r\n        <i class=\"fa fa-github\"></i>\r\n      </span>\r\n        </a>\r\n        <a class=\"nav-item\" href=\"#\">\r\n            <span class=\"icon\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n      </span>\r\n        </a>\r\n    </div>-->\r\n\r\n    <span class=\"nav-toggle\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    </span>\r\n\r\n    <div class=\"nav-right nav-menu\">\r\n        <router-link :to=\"{ name: 'setting'}\">\r\n            <!--<a class=\"nav-item\">-->\r\n            Setting\r\n            <!--</a>-->\r\n        </router-link>\r\n    </div>\r\n</nav>";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Command_1 = __webpack_require__(56);
	var Player_1 = __webpack_require__(52);
	var MonitorModel_1 = __webpack_require__(55);
	var JsFunc_1 = __webpack_require__(62);
	var VueBase_1 = __webpack_require__(53);
	exports.monitorModel = new MonitorModel_1.MonitorModel();
	var MonitorView = (function (_super) {
	    __extends(MonitorView, _super);
	    function MonitorView() {
	        _super.call(this);
	        this.template = __webpack_require__(63);
	        this.topicArr = VueBase_1.VueBase.PROP;
	        this.roomArr = VueBase_1.VueBase.PROP;
	        this.playerArr = VueBase_1.VueBase.PROP;
	        this.components = {
	            'Player': Player_1.playerView,
	        };
	        this.methods = {
	            onSelectTopic: function (topicId) {
	                var _this = this;
	                console.log("onSelectTopic:", topicId);
	                exports.monitorModel.getLiveList(topicId, function (roomArr) {
	                    _this.roomArr = roomArr;
	                    for (var i = 0; i < _this.roomArr.length; i++) {
	                        var roomInfo = _this.roomArr[i];
	                        var urlLen = roomInfo.rtmp.length;
	                        roomInfo.shortUrl = roomInfo.rtmp.substr(0, 30)
	                            + "..." + roomInfo.rtmp.substr(urlLen - 11, 11);
	                    }
	                    console.log('roomArr', _this.roomArr);
	                    $('#roomList').show();
	                });
	            },
	            onOpenRoom: function (roomInfo) {
	                console.log(roomInfo);
	                this.playerArr.push(roomInfo);
	                $('#roomList').hide();
	            },
	        };
	        VueBase_1.VueBase.initProps(this);
	        this.initEvent();
	    }
	    MonitorView.prototype.created = function () {
	        console.log("created");
	    };
	    MonitorView.prototype.mounted = function () {
	        this.playerArr = [];
	        console.log("mounted");
	        this.getTopicInfo();
	    };
	    MonitorView.prototype.initEvent = function () {
	        var _this = this;
	        exports.monitorModel.on(Command_1.CommandId.onClosePlayer, function (roomInfo) {
	            var a = [];
	            for (var _i = 0, _a = _this.playerArr; _i < _a.length; _i++) {
	                var r = _a[_i];
	                if (r != roomInfo) {
	                    a.push(r);
	                }
	            }
	            _this.playerArr = a;
	        });
	    };
	    MonitorView.prototype.getTopicInfo = function () {
	        var _this = this;
	        exports.monitorModel.getTopic(function (topicInfoArr) {
	            var a = topicInfoArr.sort(JsFunc_1.descendingProp('liveCount'));
	            var actTopic = [];
	            var disActTopic = [];
	            for (var i = 0; i < a.length; i++) {
	                var topicObj = a[i];
	                if (topicObj.hasActiveLive) {
	                    actTopic.push(topicObj);
	                }
	                else
	                    disActTopic.push(topicObj);
	            }
	            if (exports.monitorModel.settingModel.isShowRecVideo)
	                _this.topicArr = actTopic.concat(disActTopic);
	            else
	                _this.topicArr = actTopic.concat();
	            console.log('topicInfo', _this.topicArr);
	        });
	    };
	    return MonitorView;
	}(VueBase_1.VueBase));
	exports.monitorView = new MonitorView();


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var DmkInfo_1 = __webpack_require__(61);
	var MonitorModel_1 = __webpack_require__(55);
	var VueBase_1 = __webpack_require__(53);
	var PlayerView = (function (_super) {
	    __extends(PlayerView, _super);
	    function PlayerView() {
	        _super.call(this);
	        this.template = __webpack_require__(54);
	        this.roomInfo = VueBase_1.VueBase.PROP;
	        this.idx = VueBase_1.VueBase.PROP;
	        this.dmkArr = VueBase_1.VueBase.PROP;
	        this.dmkContent = VueBase_1.VueBase.PROP;
	        this.isShowAclist = VueBase_1.VueBase.PROP;
	        this.userArr = VueBase_1.VueBase.PROP;
	        this.methods = {
	            onClose: function () {
	                console.log("onClose", this.player);
	                this.player.dispose();
	                $(this.$el).empty();
	                $(this.$el).hide();
	            },
	            onClkAc: function () {
	                this.userArr = MonitorModel_1.monitorModel.accountInfo.userArr || store.get('userArr');
	                this.isShowAclist = true;
	            },
	            onInputEnter: function (e) {
	                console.log('onEnter', e);
	                if (e.keyIdentifier && e.keyIdentifier == "Enter") {
	                    this.onSendDmk();
	                }
	            },
	            onSendDmk: function () {
	                console.log('onSendDmk', this.roomInfo, this.dmkContent, MonitorModel_1.monitorModel.nameTokenMap, MonitorModel_1.monitorModel.wsMap);
	                var ac = this.roomInfo.selAc;
	                if (ac) {
	                    var token = MonitorModel_1.monitorModel.nameTokenMap[ac];
	                    var wsIdx = MonitorModel_1.MonitorModel.getWsIdx(this.roomInfo.id, token);
	                    var ws = MonitorModel_1.monitorModel.wsMap[wsIdx];
	                    console.log('getWsIdx', ws, wsIdx);
	                    if (ws) {
	                        var roomInfo = MonitorModel_1.monitorModel.liveMap[this.roomInfo.id];
	                        var dmk = this.dmkContent;
	                        this.dmkContent = '';
	                        if (dmk.length > 0 && dmk[0] != " ") {
	                            var packMsg = DmkInfo_1.packDmk(dmk, null);
	                            ws.send(packMsg);
	                        }
	                    }
	                    else {
	                        alert('发送失败：请登录');
	                    }
	                }
	            },
	            onSelAc: function (ac) {
	                var _this = this;
	                this.isShowAclist = false;
	                console.log('onSelAc', ac);
	                this.roomInfo.selAc = ac;
	                var token = MonitorModel_1.monitorModel.nameTokenMap[ac];
	                if (!token) {
	                    MonitorModel_1.monitorModel.accountInfo.login(ac, null, function (loginToken) {
	                        MonitorModel_1.monitorModel.nameTokenMap[ac] = loginToken;
	                        MonitorModel_1.monitorModel.openChatWs(_this.roomInfo, loginToken, _this.onDmkArrUpdate);
	                        _this.roomInfo.displayName = MonitorModel_1.monitorModel.accountInfo.getDisplayName(ac);
	                    });
	                }
	                else {
	                    this.roomInfo.displayName = MonitorModel_1.monitorModel.accountInfo.getDisplayName(ac);
	                    this.makeWs(token);
	                }
	            },
	        };
	        VueBase_1.VueBase.initProps(this);
	    }
	    PlayerView.prototype.created = function () {
	        console.log("created player:", this.idx, this.roomInfo);
	    };
	    PlayerView.prototype.makeWs = function (token) {
	        console.log("makeWs", token);
	        var wsIdx = MonitorModel_1.MonitorModel.getWsIdx(this.roomInfo.id, token);
	        var ws = MonitorModel_1.monitorModel.wsMap[wsIdx];
	        if (!ws) {
	            MonitorModel_1.monitorModel.openChatWs(this.roomInfo, token, this.onDmkArrUpdate);
	        }
	    };
	    PlayerView.prototype.onDmkArrUpdate = function (v) {
	        console.log("onDmkArrUpdate", v);
	        this.dmkArr = v;
	        var $textarea = $(this.$el).find("textarea")[0];
	        $textarea.scrollTop = $textarea.scrollHeight;
	    };
	    PlayerView.prototype.mounted = function () {
	        var _this = this;
	        var playerId = 'player' + this.roomInfo.id;
	        console.log("mounted player", playerId);
	        var $player = $(this.$el).find('video').attr('id', playerId);
	        var player = videojs(playerId, {
	            autoplay: true
	        }, function () {
	            console.log('Good to go!');
	            var url1 = _this.roomInfo.rtmp;
	            player.src({ src: url1, type: "video/flv" });
	            player.play();
	            player.on('ended', function () {
	                console.log('awww...over so soon?');
	            });
	        });
	        this.player = player;
	    };
	    return PlayerView;
	}(VueBase_1.VueBase));
	exports.PlayerView = PlayerView;
	exports.playerView = new PlayerView();


/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	var VueBase = (function () {
	    function VueBase() {
	        this.props = {};
	        this.methods = {};
	        this.watch = {};
	    }
	    VueBase.initProps = function (subClassObj) {
	        for (var key in subClassObj) {
	            var o = subClassObj[key];
	            if (o.hasOwnProperty("_")) {
	                if (o.hasOwnProperty("v")) {
	                    subClassObj.props[key] = o.v;
	                }
	                else if (o.hasOwnProperty("f")) {
	                    subClassObj.methods[key] = o.f;
	                }
	            }
	            else {
	                var isClsFunc = o instanceof Function;
	                if (isClsFunc) {
	                    subClassObj.methods[key] = o;
	                }
	            }
	        }
	    };
	    VueBase.prototype.created = function () {
	    };
	    VueBase.prototype.mounted = function () {
	    };
	    VueBase.PROP = { v: null, _: null };
	    VueBase.Dict = { v: {}, _: null };
	    VueBase.Number = { v: 0, _: null };
	    VueBase.String = { v: "", _: null };
	    return VueBase;
	}());
	exports.VueBase = VueBase;


/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"PlayerVideoJS box\" style=\"width:260px;height:850px;padding:5;margin-right:5\">\r\n    <div class=\"row\">{{roomInfo.title}} <br>主播：{{roomInfo.mc}}\r\n    </div>\r\n    <button class=\"delete\" style=\"position:relative;left:226px;top:-40px;\" @click='onClose'></button>\r\n    <video class=\"video-js vjs-default-skin\" controls width=\"250\" height=\"440\" data-setup=\"{}\">\r\n        </video>\r\n\r\n    <div class=\"col\">\r\n        <div class=\"row\">\r\n            <a href=\"#\" @click=\"onClkAc\"> 帐号： {{roomInfo.displayName?roomInfo.displayName:(roomInfo.selAc||\"未登录\")}}</a>\r\n            <p class=\"control\">\r\n                <textarea class=\"textarea\" v-model=\"dmkArr\" style=\"height:220px\" readonly=\"readonly\"></textarea>\r\n            </p>\r\n        </div>\r\n        <div class=\"control\">\r\n            <input placeholder=\"enter发送弹幕\" style=\"width: 200px\" class=\"input\" @keyup.enter=\"onInputEnter\" v-model=\"dmkContent\">\r\n        </div>\r\n        <div class=\"box\" v-if=\"isShowAclist\" style=\"position:absolute;left:50px;top:530px;overflow-y:scroll;height:150px\">\r\n            <div v-for=\"user in userArr\">\r\n                <a href=\"#\" @click=\"onSelAc(user.name)\">\r\n                    {{ user.name }}:{{ user.displayName }}\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Command_1 = __webpack_require__(56);
	var EventDispatcher_1 = __webpack_require__(57);
	var AccountInfo_1 = __webpack_require__(58);
	var TopicInfo_1 = __webpack_require__(59);
	var RoomInfo_1 = __webpack_require__(60);
	var DmkInfo_1 = __webpack_require__(61);
	var SettingModel = (function () {
	    function SettingModel() {
	        this.isShowRecVideo = false;
	    }
	    return SettingModel;
	}());
	exports._proxy = function (url) {
	    return "/proxy?url=" + url;
	};
	var MonitorModel = (function (_super) {
	    __extends(MonitorModel, _super);
	    function MonitorModel() {
	        _super.call(this);
	        this.accountInfo = new AccountInfo_1.AccountInfo();
	        this.settingModel = new SettingModel();
	        this.playerMap = {};
	        this.wsMap = {};
	        this.dmkArrMap = {};
	        this.nameTokenMap = {};
	        this.liveMap = {};
	    }
	    MonitorModel.prototype.openChatWs = function (roomInfo, token, onMsgCallback) {
	        var _this = this;
	        var liveId = roomInfo.id;
	        var idx = MonitorModel.getWsIdx(liveId, token);
	        var wsMap = this.wsMap;
	        if (!wsMap[idx]) {
	        }
	        this.getLiveChatUrl(liveId, token, function (chatWsUrl) {
	            console.log('con ws ', chatWsUrl);
	            if (!wsMap[idx]) {
	                exports.monitorModel.dmkArrMap[idx] = "";
	                wsMap[idx] = new WebSocket(chatWsUrl);
	                wsMap[idx].binaryType = "arraybuffer";
	                wsMap[idx].onopen = function (evt) {
	                    console.log('websocket open');
	                };
	                wsMap[idx].funcArr = [onMsgCallback];
	                wsMap[idx].onmessage = function (evt) {
	                    console.log("onmessage", evt);
	                    var dmkMsg = DmkInfo_1.decodeMsg(evt.data);
	                    if (dmkMsg) {
	                        var dmkContent = dmkMsg.content;
	                        var dmkUser = dmkMsg.user.displayName;
	                        console.log("onWebSocketMsg", evt, dmkContent);
	                        if (dmkContent) {
	                            exports.monitorModel.dmkArrMap[idx] += "[" + dmkUser + "]:" + dmkContent + "\n";
	                            for (var i = 0; i < wsMap[idx].funcArr.length; i++) {
	                                var func = wsMap[idx].funcArr[i];
	                                func(exports.monitorModel.dmkArrMap[idx]);
	                            }
	                        }
	                    }
	                };
	                _this.emit(Command_1.CommandId.openWs);
	            }
	            else {
	                onMsgCallback(exports.monitorModel.dmkArrMap[idx]);
	                wsMap[idx].funcArr.push(onMsgCallback);
	            }
	        });
	    };
	    MonitorModel.prototype.getTopicLives = function (topicArr, callback) {
	        var for1 = function (idx, topicArr) {
	            if (idx < topicArr.length) {
	                exports.monitorModel.getLiveList(topicArr[idx].id, function (roomArr) {
	                    topicArr[idx].roomArr = roomArr;
	                    for (var k = 0; k < roomArr.length; k++) {
	                        var roomInfo = roomArr[k];
	                        var urlLen = roomInfo.rtmp.length;
	                        roomInfo.shortUrl = roomInfo.rtmp.substr(0, 30)
	                            + "..." + roomInfo.rtmp.substr(urlLen - 11, 11);
	                    }
	                    for1(idx + 1, topicArr);
	                });
	            }
	            else {
	                callback(topicArr);
	            }
	        };
	        for1(0, topicArr);
	    };
	    MonitorModel.prototype.getTopic = function (callback, cursor, topicArrPre) {
	        var _this = this;
	        var topicArr = [];
	        if (topicArrPre)
	            topicArr = topicArr.concat(topicArrPre);
	        var url1 = 'http://api.weilutv.com/1/topic/list';
	        console.log("getTopic");
	        $.ajax({
	            url: exports._proxy(url1),
	            type: 'POST',
	            dataType: 'json',
	            data: JSON.stringify({ cursor: cursor }),
	            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
	            success: function (body) {
	                onRes(body);
	            },
	            error: function (e) {
	                console.log(url1, e);
	            }
	        });
	        var onRes = function (body) {
	            var topics = body.result.topics;
	            var hasMore = body.result.cursor.hasMore;
	            var cursor = body.result.cursor;
	            if (body.success) {
	                for (var i = 0; i < topics.length; i++) {
	                    var obj = topics[i];
	                    var topicInfo = new TopicInfo_1.TopicInfo();
	                    topicInfo.id = obj.id;
	                    topicInfo.topic = obj.title;
	                    topicInfo.liveCount = obj.count.live;
	                    topicInfo.videoCount = obj.count.video;
	                    topicInfo.viewCount = obj.count.view;
	                    topicInfo.hasActiveLive = obj.hasActiveLive;
	                    topicArr.push(topicInfo);
	                }
	                if (hasMore) {
	                    _this.getTopic(callback, cursor, topicArr);
	                }
	                if (callback)
	                    callback(topicArr);
	            }
	            else
	                throw "get /1/topic/list failed";
	        };
	    };
	    ;
	    MonitorModel.prototype.getLiveChatUrl = function (liveId, token, callback) {
	        var url = "https://api.weilutv.com/1/live/" + liveId;
	        console.log("getLiveChatUrl", url);
	        $.ajax({
	            url: exports._proxy(url),
	            type: 'GET',
	            headers: { Authorization: "Bearer " + token },
	            success: function (body) {
	                console.log('get Live chat', body);
	                var chatUrl = body.result.chat;
	                callback(chatUrl);
	            },
	            error: function (e) {
	                console.log(url, e);
	            }
	        });
	    };
	    MonitorModel.prototype.getLiveList = function (topicId, callback, cursor, roomArrPre) {
	        var _this = this;
	        var roomArr = [];
	        if (roomArrPre)
	            roomArr = roomArr.concat(roomArrPre);
	        var roomInfo;
	        var liveUrl = "https://api.weilutv.com/1/topic/" + topicId + "/live/live_list";
	        console.log(liveUrl, cursor, roomArr.length);
	        $.ajax({
	            url: exports._proxy(liveUrl),
	            type: 'POST',
	            dataType: 'json',
	            data: JSON.stringify({ cursor: cursor }),
	            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
	            success: function (body) {
	                onRes(body);
	            },
	            error: function (e) {
	                console.log(liveUrl, e);
	            }
	        });
	        var onRes = function (body) {
	            if (body.success) {
	                var lives = body.result.lives;
	                var hasMore = body.result.cursor.hasMore;
	                var cursor = body.result.cursor;
	                for (var j = 0; j < lives.length; j++) {
	                    var liveObj = lives[j];
	                    if (!_this.liveMap[liveObj.id])
	                        _this.liveMap[liveObj.id] = new RoomInfo_1.RoomInfo;
	                    roomInfo = _this.liveMap[liveObj.id];
	                    roomInfo.title = liveObj.title;
	                    roomInfo.mc = liveObj.user.displayName;
	                    roomInfo.rtmp = liveObj.playUrl;
	                    roomInfo.id = liveObj.id;
	                    roomInfo.topicId = topicId;
	                    roomArr.push(roomInfo);
	                }
	                console.log('get live:', liveObj);
	                if (hasMore) {
	                    _this.getLiveList(topicId, callback, cursor, roomArr);
	                }
	                else if (callback)
	                    callback(roomArr);
	            }
	            else
	                throw "get /live_list failed";
	        };
	    };
	    ;
	    MonitorModel.sendCommit = function (token, topicId, commit) {
	        var apiUrl = "https://api.weilutv.com/comment/t" + topicId + "/post/";
	    };
	    MonitorModel.getWsIdx = function (liveId, token) {
	        return liveId + ":" + token;
	    };
	    return MonitorModel;
	}(EventDispatcher_1.EventDispatcher));
	exports.MonitorModel = MonitorModel;
	exports.monitorModel = new MonitorModel();


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EventDispatcher_1 = __webpack_require__(57);
	(function (CommandId) {
	    CommandId[CommandId["ShowConsoleWin"] = 100000] = "ShowConsoleWin";
	    CommandId[CommandId["openWs"] = 100001] = "openWs";
	    CommandId[CommandId["onClosePlayer"] = 100002] = "onClosePlayer";
	    CommandId[CommandId["beforeAcOpiontArr"] = 100003] = "beforeAcOpiontArr";
	    CommandId[CommandId["afterAcOpiontArr"] = 100004] = "afterAcOpiontArr";
	})(exports.CommandId || (exports.CommandId = {}));
	var CommandId = exports.CommandId;
	var CommandItem = (function () {
	    function CommandItem(id) {
	        this.id = id;
	    }
	    return CommandItem;
	}());
	var Command = (function (_super) {
	    __extends(Command, _super);
	    function Command() {
	        _super.call(this);
	        console.log("CommandId", CommandId);
	    }
	    return Command;
	}(EventDispatcher_1.EventDispatcher));
	exports.Command = Command;


/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	var EventDispatcher = (function () {
	    function EventDispatcher() {
	        this._func = {};
	        this._funcId = 0;
	    }
	    EventDispatcher.prototype.on = function (type, func) {
	        if (!this._func[type])
	            this._func[type] = [];
	        this._funcId++;
	        this._func[type].push({ func: func, id: this._funcId });
	    };
	    EventDispatcher.prototype.emit = function (type, param, broadcastId) {
	        if (param === void 0) { param = null; }
	        if (broadcastId === void 0) { broadcastId = null; }
	        if (this._func[type]) {
	            for (var i = 0; i < this._func[type].length; ++i) {
	                var f = this._func[type][i];
	                if (f)
	                    f.func(param);
	            }
	        }
	        if (this.broadcast && broadcastId)
	            this.broadcast(broadcastId, type, param);
	    };
	    EventDispatcher.prototype.proxy = function () {
	        var param = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            param[_i - 0] = arguments[_i];
	        }
	        throw new Error("no proxy method!!!");
	    };
	    ;
	    EventDispatcher.prototype.broadcast = function () {
	        var param = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            param[_i - 0] = arguments[_i];
	        }
	        throw new Error("no broadcast method!!!");
	    };
	    ;
	    EventDispatcher.prototype.del = function (type, funcId) {
	        if (funcId === void 0) { funcId = -1; }
	        if (this._func[type])
	            if (funcId < 0) {
	                this._func[type] = [];
	            }
	            else {
	                for (var i = 0; i < this._func[type].length; ++i) {
	                    var f = this._func[type][i];
	                    if (f) {
	                        if (f.id == funcId) {
	                            delete this._func[type][i];
	                            console.log('del event', type, funcId);
	                            break;
	                        }
	                    }
	                }
	            }
	    };
	    EventDispatcher.prototype.removeAll = function () {
	        this._func = {};
	    };
	    return EventDispatcher;
	}());
	exports.EventDispatcher = EventDispatcher;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var MonitorModel_1 = __webpack_require__(55);
	var AccountInfo = (function () {
	    function AccountInfo() {
	        this.userArr = [
	            { name: "20000000003", pw: "vl12450", token: '', displayName: '' },
	            { name: "20000000004", pw: "vl12450", token: '', displayName: '' }
	        ];
	        this.initConf();
	    }
	    AccountInfo.prototype._getMyProfile = function (token, callback) {
	        var url = "https://api.weilutv.com/1/my/profile";
	        console.log('_getMyProfile:', token);
	        $.ajax({
	            url: MonitorModel_1._proxy(url),
	            type: 'GET',
	            headers: { Authorization: "Bearer " + token },
	            success: function (body) {
	                var displayName = body.result.displayName;
	                callback(displayName);
	            },
	            error: function (e) {
	                console.log(url, e);
	            }
	        });
	    };
	    AccountInfo.prototype._getPassword = function (ac) {
	        for (var _i = 0, _a = this.userArr; _i < _a.length; _i++) {
	            var user = _a[_i];
	            if (user.name == ac) {
	                return user.pw;
	            }
	        }
	        return "";
	    };
	    AccountInfo.prototype.getDisplayName = function (ac) {
	        for (var _i = 0, _a = this.userArr; _i < _a.length; _i++) {
	            var user = _a[_i];
	            if (user.name == ac) {
	                return user.displayName;
	            }
	        }
	        return "";
	    };
	    AccountInfo.prototype.login = function (ac, pw, callback) {
	        var _this = this;
	        var url = 'https://api.weilutv.com/1/account/login';
	        if (!pw) {
	            pw = this._getPassword(ac);
	        }
	        $.ajax({
	            url: MonitorModel_1._proxy(url),
	            type: 'POST',
	            dataType: 'json',
	            data: JSON.stringify({ username: ac, password: pw }),
	            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
	            success: function (body) {
	                onRes(body);
	            },
	            error: function (e) { console.log(url, e); }
	        });
	        var onRes = function (body) {
	            console.log("login res:", body);
	            if (body.success) {
	                var token_1 = body.result.token;
	                _this._getMyProfile(token_1, function (displayName) {
	                    _this._updateToken(ac, pw, token_1, displayName);
	                    callback(token_1);
	                });
	            }
	            else
	                throw "login failed";
	        };
	    };
	    AccountInfo.prototype.initConf = function () {
	        var _this = this;
	        this.userArr = store.get('userArr');
	        if (this.userArr && this.userArr.length) {
	            var firstAc = this.userArr[0];
	            this.login(firstAc.name, firstAc.pw, function (token) {
	                _this.lastToken = token;
	            });
	        }
	        console.log('user.conf', this.userArr);
	    };
	    AccountInfo.prototype._updateToken = function (name, pw, token, displayName) {
	        var isExist = false;
	        for (var i = 0; i < this.userArr.length; i++) {
	            var acObj = this.userArr[i];
	            if (acObj.name == name) {
	                acObj.token = token;
	                acObj.displayName = displayName;
	                isExist = true;
	                break;
	            }
	        }
	        if (!isExist) {
	            this.userArr.push({ name: name, pw: pw, token: token, displayName: displayName });
	        }
	    };
	    return AccountInfo;
	}());
	exports.AccountInfo = AccountInfo;


/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	var TopicInfo = (function () {
	    function TopicInfo() {
	    }
	    return TopicInfo;
	}());
	exports.TopicInfo = TopicInfo;


/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	var RoomInfo = (function () {
	    function RoomInfo() {
	    }
	    return RoomInfo;
	}());
	exports.RoomInfo = RoomInfo;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";
	var Message;
	var Danmaku;
	protobuf.load("/pb/live_websocket.proto", function (err, root) {
	    if (err)
	        throw err;
	    Message = root.lookup("Message");
	    Danmaku = root.lookup("Danmaku");
	    console.log(root, Danmaku, Message);
	});
	exports.packDmk = function (content, user) {
	    var dmkMsg = Danmaku.create({ content: content });
	    var msg = Message.create({ content: Danmaku.encode(dmkMsg).finish(), type: 20, timestamp: new Date().getTime() });
	    return Message.encode(msg).finish();
	};
	function toBuffer(ab) {
	    var buf = new Buffer(ab.byteLength);
	    var view = new Uint8Array(ab);
	    for (var i = 0; i < buf.length; ++i) {
	        buf[i] = view[i];
	    }
	    return buf;
	}
	exports.decodeMsg = function (msgBuf1) {
	    var msgBuf = toBuffer(msgBuf1);
	    console.log('msgBuf:', msgBuf);
	    var msg = Message.decode(msgBuf);
	    console.log('decodeMsg:', msg);
	    if (msg.type == 20) {
	        var dmk = Danmaku.decode(msg.content);
	        console.log(dmk);
	        return dmk;
	    }
	};
	var Danmaku2 = (function () {
	    function Danmaku2() {
	    }
	    Danmaku2.prototype.pack = function () {
	    };
	    return Danmaku2;
	}());
	exports.Danmaku2 = Danmaku2;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21).Buffer))

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	function ascendingProp(prop) {
	    return function (a, b) {
	        return a[prop] - b[prop];
	    };
	}
	exports.ascendingProp = ascendingProp;
	function descendingProp(prop) {
	    return function (a, b) {
	        return b[prop] - a[prop];
	    };
	}
	exports.descendingProp = descendingProp;
	function mapToSortArray(map, prop, sortFunc) {
	    var arr = [];
	    for (var k in map) {
	        arr.push(map[k]);
	    }
	    arr.sort(sortFunc(prop));
	    return arr;
	}
	exports.mapToSortArray = mapToSortArray;
	function mapToArr(map) {
	    var a = [];
	    for (var k in map) {
	        a.push(map[k]);
	    }
	    return a;
	}
	exports.mapToArr = mapToArr;
	function arrCountSame(arrA, arrB) {
	    var n = 0;
	    for (var i = 0; i < arrB.length; i++) {
	        var obj = arrB[i];
	        if (arrA.indexOf(obj) > -1) {
	            n++;
	        }
	    }
	    return n;
	}
	exports.arrCountSame = arrCountSame;
	function arrUniqueFilter(el, i, a) {
	    return i == a.indexOf(el);
	}
	exports.arrUniqueFilter = arrUniqueFilter;
	function loadImg(path1, callback) {
	    var img = new Image();
	    img.onload = callback;
	    img.src = path1;
	}
	exports.loadImg = loadImg;
	function loadImgArr(pathArr, callback) {
	    var count = pathArr.length;
	    function onLoadImg() {
	        count--;
	        if (count === 0)
	            callback();
	    }
	    for (var i = 0; i < pathArr.length; i++) {
	        var p = pathArr[i];
	        var img = new Image();
	        img.onload = onLoadImg;
	        img.src = p;
	    }
	}
	exports.loadImgArr = loadImgArr;
	function combineArr(arr, num) {
	    var r = [];
	    (function f(t, a, n) {
	        if (n == 0) {
	            return r.push(t);
	        }
	        for (var i = 0, l = a.length; i <= l - n; i++) {
	            f(t.concat(a[i]), a.slice(i + 1), n - 1);
	        }
	    })([], arr, num);
	    return r;
	}
	exports.combineArr = combineArr;
	function formatSecond(sec, minStr, secStr) {
	    if (minStr === void 0) { minStr = ":"; }
	    if (secStr === void 0) { secStr = ""; }
	    var min = Math.floor(sec / 60);
	    var s = sec % 60;
	    var strMin = min + "";
	    var strSec = s + "";
	    if (min < 10)
	        strMin = "0" + strMin;
	    if (s < 10)
	        strSec = "0" + strSec;
	    return strMin + minStr + strSec + secStr;
	}
	exports.formatSecond = formatSecond;
	function getLength(str) {
	    var realLength = 0, len = str.length, charCode = -1;
	    for (var i = 0; i < len; i++) {
	        charCode = str.charCodeAt(i);
	        if (charCode >= 0 && charCode <= 128)
	            realLength += 1;
	        else
	            realLength += 2;
	    }
	    return realLength;
	}
	exports.getLength = getLength;
	function cnWrap(str, len, start) {
	    if (start === void 0) { start = 0; }
	    var str_line_length = 0;
	    var str_len = str.length;
	    var str_cut = new String();
	    var str_out = '';
	    for (var i = start; i < str_len; i++) {
	        var a = str.charAt(i);
	        str_line_length++;
	        if (escape(a).length > 4) {
	            str_line_length++;
	        }
	        str_cut = str_cut.concat(a);
	        if (str_line_length >= len) {
	            str_out += str_cut.concat('\n');
	            str_cut = new String();
	            str_line_length = 0;
	        }
	    }
	    str_out += str_cut;
	    return str_out;
	}
	exports.cnWrap = cnWrap;


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<aside class=\"menu\">\r\n    <p class=\"menu-label\">\r\n        话题\r\n    </p>\r\n    <ul class=\"menu-list\" style=\"width:270px\">\r\n        <li v-for=\"(topic,index) in topicArr\">\r\n            <a href=\"#\" @click=\"onSelectTopic(topic.id)\">{{topic.topic}}</a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div style=\"position: absolute;\r\n         display: inline-flex;\r\n         left: 270px;top:55px;\">\r\n        <player :idx=\"index\" :roomInfo='roomInfo' v-for=\"(roomInfo, index) in playerArr\">\r\n        </player>\r\n    </div>\r\n\r\n    <div style=\"overflow-y: scroll\">\r\n        <div id=\"roomList\" class=\"collection box\" style=\"position: absolute;left: 70px;top:60px;width: 800px;z-index: 999;display:none\">\r\n            <li v-for=\"(roomInfo,index) in roomArr\">\r\n                <div class=\"row\">{{roomInfo.title}} [{{roomInfo.mc}}]\r\n                    <a href=\"#\" @click=\"onOpenRoom(roomInfo)\" title=\"打开直播\">{{ roomInfo.shortUrl}}</a>\r\n                </div>\r\n            </li>\r\n        </div>\r\n    </div>\r\n</aside>";

/***/ },
/* 64 */,
/* 65 */,
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var MonitorModel_1 = __webpack_require__(55);
	var VueBase_1 = __webpack_require__(53);
	var SettingView = (function (_super) {
	    __extends(SettingView, _super);
	    function SettingView() {
	        _super.call(this);
	        this.isShowRecVideo = VueBase_1.VueBase.PROP;
	        this.acText = VueBase_1.VueBase.PROP;
	        this.userArr = VueBase_1.VueBase.PROP;
	        this.template = __webpack_require__(67);
	        this.watch = {
	            isShowRecVideo: 'onIsShowRecVideo'
	        };
	        this.methods = {
	            onIsShowRecVideo: function (v) {
	                MonitorModel_1.monitorModel.settingModel.isShowRecVideo = this.isShowRecVideo;
	                console.log('onIsShowRecVideo', v);
	            },
	            onSaveAc: function () {
	                var lines = this.acText.split('\n');
	                var userArr = [];
	                for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
	                    var l = lines_1[_i];
	                    var a = l.split(' ');
	                    userArr.push({ name: a[1], pw: a[3], token: '', displayName: '' });
	                }
	                this.userArr = userArr;
	                if (userArr.length) {
	                    store.set('userArr', userArr);
	                    console.log('onSaveAc', userArr);
	                }
	                else
	                    alert("格式不对！");
	            },
	        };
	        VueBase_1.VueBase.initProps(this);
	    }
	    SettingView.prototype.mounted = function () {
	        console.log('SettingView mounted');
	        this.isShowRecVideo = MonitorModel_1.monitorModel.settingModel.isShowRecVideo;
	        this.userArr = MonitorModel_1.monitorModel.accountInfo.userArr;
	    };
	    return SettingView;
	}(VueBase_1.VueBase));
	;
	exports.settingView = new SettingView();


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<div class=\"box\">\r\n    <input type=\"checkbox\" id=\"checkbox1\" v-model=\"isShowRecVideo\" />\r\n    <label for=\"checkbox1\">显示录制视频</label>\r\n    <p class=\"control\">\r\n        <textarea class=\"textarea\" v-model=\"acText\" style=\"width:500px;height:220px\">\r\nuser 20000000053 pw vl12450\r\nuser 20000000063 pw vl12450\r\nuser 20000000073 pw vl12450\r\nuser 20000000083 pw vl12450\r\nuser 20000000093 pw vl12450\r\n        </textarea>\r\n    </p>\r\n    <a class=\"button is-success\" @click='onSaveAc'>\r\n        <span class=\"icon\">\r\n        <i class=\"fa fa-check\"></i>\r\n        </span>\r\n        <span>Save</span>\r\n    </a>\r\n    <table class='table is-striped'>\r\n        <tr>\r\n            <th>#</th>\r\n            <th>帐号</th>\r\n            <th>密码</th>\r\n            <th>昵称</th>\r\n        </tr>\r\n        <tr v-for=\"(user,index) in userArr\">\r\n            <td>{{index}}</td>\r\n            <td>{{user.name}}</td>\r\n            <td>{{user.pw}}</td>\r\n            <td>{{user.displayName}}</td>\r\n        </tr>\r\n    </table>\r\n</div>";

/***/ }
/******/ ]);
//# sourceMappingURL=walue.js.map