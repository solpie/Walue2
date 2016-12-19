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

	var $ = __webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(13);
	window['$'] = $;
	window['Vue'] = Vue;
	window['VueRouter'] = VueRouter;
	window['store'] = store;
	window['long'] = __webpack_require__(15);
	window['bytebuffer'] = __webpack_require__(18);
	window['protobuf'] = __webpack_require__(19);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	
	return jQuery;
	} );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(4))

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript !== "undefined")
			execScript(src);
		else
			eval.call(null, src);
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "/*\n long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>\n Released under the Apache License, Version 2.0\n see: https://github.com/dcodeIO/long.js for details\n*/\n(function(d,g){\"function\"===typeof define&&define.amd?define([],g):\"function\"===typeof require&&\"object\"===typeof module&&module&&module.exports?module.exports=g():(d.dcodeIO=d.dcodeIO||{}).Long=g()})(this,function(){function d(a,b,c){this.low=a|0;this.high=b|0;this.unsigned=!!c}function g(a){return!0===(a&&a.__isLong__)}function m(a,b){var c,t;if(b){a>>>=0;if(t=0<=a&&256>a)if(c=z[a])return c;c=e(a,0>(a|0)?-1:0,!0);t&&(z[a]=c)}else{a|=0;if(t=-128<=a&&128>a)if(c=A[a])return c;c=e(a,0>a?-1:0,!1);t&&\n(A[a]=c)}return c}function n(a,b){if(isNaN(a)||!isFinite(a))return b?p:k;if(b){if(0>a)return p;if(a>=B)return C}else{if(a<=-D)return l;if(a+1>=D)return E}return 0>a?n(-a,b).neg():e(a%4294967296|0,a/4294967296|0,b)}function e(a,b,c){return new d(a,b,c)}function x(a,b,c){if(0===a.length)throw Error(\"empty string\");if(\"NaN\"===a||\"Infinity\"===a||\"+Infinity\"===a||\"-Infinity\"===a)return k;\"number\"===typeof b?(c=b,b=!1):b=!!b;c=c||10;if(2>c||36<c)throw RangeError(\"radix\");var t;if(0<(t=a.indexOf(\"-\")))throw Error(\"interior hyphen\");\nif(0===t)return x(a.substring(1),b,c).neg();t=n(v(c,8));for(var e=k,f=0;f<a.length;f+=8){var d=Math.min(8,a.length-f),g=parseInt(a.substring(f,f+d),c);8>d?(d=n(v(c,d)),e=e.mul(d).add(n(g))):(e=e.mul(t),e=e.add(n(g)))}e.unsigned=b;return e}function q(a){return a instanceof d?a:\"number\"===typeof a?n(a):\"string\"===typeof a?x(a):e(a.low,a.high,a.unsigned)}Object.defineProperty(d.prototype,\"__isLong__\",{value:!0,enumerable:!1,configurable:!1});d.isLong=g;var A={},z={};d.fromInt=m;d.fromNumber=n;d.fromBits=\ne;var v=Math.pow;d.fromString=x;d.fromValue=q;var B=4294967296*4294967296,D=B/2,F=m(16777216),k=m(0);d.ZERO=k;var p=m(0,!0);d.UZERO=p;var r=m(1);d.ONE=r;var G=m(1,!0);d.UONE=G;var y=m(-1);d.NEG_ONE=y;var E=e(-1,2147483647,!1);d.MAX_VALUE=E;var C=e(-1,-1,!0);d.MAX_UNSIGNED_VALUE=C;var l=e(0,-2147483648,!1);d.MIN_VALUE=l;var b=d.prototype;b.toInt=function(){return this.unsigned?this.low>>>0:this.low};b.toNumber=function(){return this.unsigned?4294967296*(this.high>>>0)+(this.low>>>0):4294967296*this.high+\n(this.low>>>0)};b.toString=function(a){a=a||10;if(2>a||36<a)throw RangeError(\"radix\");if(this.isZero())return\"0\";if(this.isNegative()){if(this.eq(l)){var b=n(a),c=this.div(b),b=c.mul(b).sub(this);return c.toString(a)+b.toInt().toString(a)}return\"-\"+this.neg().toString(a)}for(var c=n(v(a,6),this.unsigned),b=this,e=\"\";;){var d=b.div(c),f=(b.sub(d.mul(c)).toInt()>>>0).toString(a),b=d;if(b.isZero())return f+e;for(;6>f.length;)f=\"0\"+f;e=\"\"+f+e}};b.getHighBits=function(){return this.high};b.getHighBitsUnsigned=\nfunction(){return this.high>>>0};b.getLowBits=function(){return this.low};b.getLowBitsUnsigned=function(){return this.low>>>0};b.getNumBitsAbs=function(){if(this.isNegative())return this.eq(l)?64:this.neg().getNumBitsAbs();for(var a=0!=this.high?this.high:this.low,b=31;0<b&&0==(a&1<<b);b--);return 0!=this.high?b+33:b+1};b.isZero=function(){return 0===this.high&&0===this.low};b.isNegative=function(){return!this.unsigned&&0>this.high};b.isPositive=function(){return this.unsigned||0<=this.high};b.isOdd=\nfunction(){return 1===(this.low&1)};b.isEven=function(){return 0===(this.low&1)};b.equals=function(a){g(a)||(a=q(a));return this.unsigned!==a.unsigned&&1===this.high>>>31&&1===a.high>>>31?!1:this.high===a.high&&this.low===a.low};b.eq=b.equals;b.notEquals=function(a){return!this.eq(a)};b.neq=b.notEquals;b.lessThan=function(a){return 0>this.comp(a)};b.lt=b.lessThan;b.lessThanOrEqual=function(a){return 0>=this.comp(a)};b.lte=b.lessThanOrEqual;b.greaterThan=function(a){return 0<this.comp(a)};b.gt=b.greaterThan;\nb.greaterThanOrEqual=function(a){return 0<=this.comp(a)};b.gte=b.greaterThanOrEqual;b.compare=function(a){g(a)||(a=q(a));if(this.eq(a))return 0;var b=this.isNegative(),c=a.isNegative();return b&&!c?-1:!b&&c?1:this.unsigned?a.high>>>0>this.high>>>0||a.high===this.high&&a.low>>>0>this.low>>>0?-1:1:this.sub(a).isNegative()?-1:1};b.comp=b.compare;b.negate=function(){return!this.unsigned&&this.eq(l)?l:this.not().add(r)};b.neg=b.negate;b.add=function(a){g(a)||(a=q(a));var b=this.high>>>16,c=this.high&65535,\nd=this.low>>>16,l=a.high>>>16,f=a.high&65535,n=a.low>>>16,k;k=0+((this.low&65535)+(a.low&65535));a=0+(k>>>16);a+=d+n;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+l)&65535;return e((a&65535)<<16|k&65535,c<<16|d&65535,this.unsigned)};b.subtract=function(a){g(a)||(a=q(a));return this.add(a.neg())};b.sub=b.subtract;b.multiply=function(a){if(this.isZero())return k;g(a)||(a=q(a));if(a.isZero())return k;if(this.eq(l))return a.isOdd()?l:k;if(a.eq(l))return this.isOdd()?l:k;if(this.isNegative())return a.isNegative()?\nthis.neg().mul(a.neg()):this.neg().mul(a).neg();if(a.isNegative())return this.mul(a.neg()).neg();if(this.lt(F)&&a.lt(F))return n(this.toNumber()*a.toNumber(),this.unsigned);var b=this.high>>>16,c=this.high&65535,d=this.low>>>16,w=this.low&65535,f=a.high>>>16,m=a.high&65535,p=a.low>>>16;a=a.low&65535;var u,h,s,r;r=0+w*a;s=0+(r>>>16);s+=d*a;h=0+(s>>>16);s=(s&65535)+w*p;h+=s>>>16;s&=65535;h+=c*a;u=0+(h>>>16);h=(h&65535)+d*p;u+=h>>>16;h&=65535;h+=w*m;u+=h>>>16;h&=65535;u=u+(b*a+c*p+d*m+w*f)&65535;return e(s<<\n16|r&65535,u<<16|h,this.unsigned)};b.mul=b.multiply;b.divide=function(a){g(a)||(a=q(a));if(a.isZero())throw Error(\"division by zero\");if(this.isZero())return this.unsigned?p:k;var b,c,d;if(this.unsigned){a.unsigned||(a=a.toUnsigned());if(a.gt(this))return p;if(a.gt(this.shru(1)))return G;d=p}else{if(this.eq(l)){if(a.eq(r)||a.eq(y))return l;if(a.eq(l))return r;b=this.shr(1).div(a).shl(1);if(b.eq(k))return a.isNegative()?r:y;c=this.sub(a.mul(b));return d=b.add(c.div(a))}if(a.eq(l))return this.unsigned?\np:k;if(this.isNegative())return a.isNegative()?this.neg().div(a.neg()):this.neg().div(a).neg();if(a.isNegative())return this.div(a.neg()).neg();d=k}for(c=this;c.gte(a);){b=Math.max(1,Math.floor(c.toNumber()/a.toNumber()));for(var e=Math.ceil(Math.log(b)/Math.LN2),e=48>=e?1:v(2,e-48),f=n(b),m=f.mul(a);m.isNegative()||m.gt(c);)b-=e,f=n(b,this.unsigned),m=f.mul(a);f.isZero()&&(f=r);d=d.add(f);c=c.sub(m)}return d};b.div=b.divide;b.modulo=function(a){g(a)||(a=q(a));return this.sub(this.div(a).mul(a))};\nb.mod=b.modulo;b.not=function(){return e(~this.low,~this.high,this.unsigned)};b.and=function(a){g(a)||(a=q(a));return e(this.low&a.low,this.high&a.high,this.unsigned)};b.or=function(a){g(a)||(a=q(a));return e(this.low|a.low,this.high|a.high,this.unsigned)};b.xor=function(a){g(a)||(a=q(a));return e(this.low^a.low,this.high^a.high,this.unsigned)};b.shiftLeft=function(a){g(a)&&(a=a.toInt());return 0===(a&=63)?this:32>a?e(this.low<<a,this.high<<a|this.low>>>32-a,this.unsigned):e(0,this.low<<a-32,this.unsigned)};\nb.shl=b.shiftLeft;b.shiftRight=function(a){g(a)&&(a=a.toInt());return 0===(a&=63)?this:32>a?e(this.low>>>a|this.high<<32-a,this.high>>a,this.unsigned):e(this.high>>a-32,0<=this.high?0:-1,this.unsigned)};b.shr=b.shiftRight;b.shiftRightUnsigned=function(a){g(a)&&(a=a.toInt());a&=63;if(0===a)return this;var b=this.high;return 32>a?e(this.low>>>a|b<<32-a,b>>>a,this.unsigned):32===a?e(b,0,this.unsigned):e(b>>>a-32,0,this.unsigned)};b.shru=b.shiftRightUnsigned;b.toSigned=function(){return this.unsigned?\ne(this.low,this.high,!1):this};b.toUnsigned=function(){return this.unsigned?this:e(this.low,this.high,!0)};b.toBytes=function(a){return a?this.toBytesLE():this.toBytesBE()};b.toBytesLE=function(){var a=this.high,b=this.low;return[b&255,b>>>8&255,b>>>16&255,b>>>24&255,a&255,a>>>8&255,a>>>16&255,a>>>24&255]};b.toBytesBE=function(){var a=this.high,b=this.low;return[a>>>24&255,a>>>16&255,a>>>8&255,a&255,b>>>24&255,b>>>16&255,b>>>8&255,b&255]};return d});\n"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(6))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "/*\n bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>\n Backing buffer: ArrayBuffer, Accessor: Uint8Array\n Released under the Apache License, Version 2.0\n see: https://github.com/dcodeIO/bytebuffer.js for details\n*/\n(function(k,m){(k.dcodeIO=k.dcodeIO||{}).ByteBuffer=m(k.dcodeIO.Long)})(this,function(k){function m(a){var b=0;return function(){return b<a.length?a.charCodeAt(b++):null}}function r(){var a=[],b=[];return function(){if(0===arguments.length)return b.join(\"\")+w.apply(String,a);1024<a.length+\narguments.length&&(b.push(w.apply(String,a)),a.length=0);Array.prototype.push.apply(a,arguments)}}function s(a,b,c,d,f){var l;l=8*f-d-1;var g=(1<<l)-1,e=g>>1,h=-7;f=c?f-1:0;var k=c?-1:1,p=a[b+f];f+=k;c=p&(1<<-h)-1;p>>=-h;for(h+=l;0<h;c=256*c+a[b+f],f+=k,h-=8);l=c&(1<<-h)-1;c>>=-h;for(h+=d;0<h;l=256*l+a[b+f],f+=k,h-=8);if(0===c)c=1-e;else{if(c===g)return l?NaN:Infinity*(p?-1:1);l+=Math.pow(2,d);c-=e}return(p?-1:1)*l*Math.pow(2,c-d)}function u(a,b,c,d,f,l){var g,e=8*l-f-1,h=(1<<e)-1,k=h>>1,p=23===f?\nMath.pow(2,-24)-Math.pow(2,-77):0;l=d?0:l-1;var m=d?1:-1,n=0>b||0===b&&0>1/b?1:0;b=Math.abs(b);isNaN(b)||Infinity===b?(b=isNaN(b)?1:0,d=h):(d=Math.floor(Math.log(b)/Math.LN2),1>b*(g=Math.pow(2,-d))&&(d--,g*=2),b=1<=d+k?b+p/g:b+p*Math.pow(2,1-k),2<=b*g&&(d++,g/=2),d+k>=h?(b=0,d=h):1<=d+k?(b=(b*g-1)*Math.pow(2,f),d+=k):(b=b*Math.pow(2,k-1)*Math.pow(2,f),d=0));for(;8<=f;a[c+l]=b&255,l+=m,b/=256,f-=8);d=d<<f|b;for(e+=f;0<e;a[c+l]=d&255,l+=m,d/=256,e-=8);a[c+l-m]|=128*n}var h=function(a,b,c){\"undefined\"===\ntypeof a&&(a=h.DEFAULT_CAPACITY);\"undefined\"===typeof b&&(b=h.DEFAULT_ENDIAN);\"undefined\"===typeof c&&(c=h.DEFAULT_NOASSERT);if(!c){a|=0;if(0>a)throw RangeError(\"Illegal capacity\");b=!!b;c=!!c}this.buffer=0===a?v:new ArrayBuffer(a);this.view=0===a?null:new Uint8Array(this.buffer);this.offset=0;this.markedOffset=-1;this.limit=a;this.littleEndian=b;this.noAssert=c};h.VERSION=\"5.0.1\";h.LITTLE_ENDIAN=!0;h.BIG_ENDIAN=!1;h.DEFAULT_CAPACITY=16;h.DEFAULT_ENDIAN=h.BIG_ENDIAN;h.DEFAULT_NOASSERT=!1;h.Long=k||\nnull;var e=h.prototype;Object.defineProperty(e,\"__isByteBuffer__\",{value:!0,enumerable:!1,configurable:!1});var v=new ArrayBuffer(0),w=String.fromCharCode;h.accessor=function(){return Uint8Array};h.allocate=function(a,b,c){return new h(a,b,c)};h.concat=function(a,b,c,d){if(\"boolean\"===typeof b||\"string\"!==typeof b)d=c,c=b,b=void 0;for(var f=0,l=0,g=a.length,e;l<g;++l)h.isByteBuffer(a[l])||(a[l]=h.wrap(a[l],b)),e=a[l].limit-a[l].offset,0<e&&(f+=e);if(0===f)return new h(0,c,d);b=new h(f,c,d);for(l=\n0;l<g;)c=a[l++],e=c.limit-c.offset,0>=e||(b.view.set(c.view.subarray(c.offset,c.limit),b.offset),b.offset+=e);b.limit=b.offset;b.offset=0;return b};h.isByteBuffer=function(a){return!0===(a&&a.__isByteBuffer__)};h.type=function(){return ArrayBuffer};h.wrap=function(a,b,c,d){\"string\"!==typeof b&&(d=c,c=b,b=void 0);if(\"string\"===typeof a)switch(\"undefined\"===typeof b&&(b=\"utf8\"),b){case \"base64\":return h.fromBase64(a,c);case \"hex\":return h.fromHex(a,c);case \"binary\":return h.fromBinary(a,c);case \"utf8\":return h.fromUTF8(a,\nc);case \"debug\":return h.fromDebug(a,c);default:throw Error(\"Unsupported encoding: \"+b);}if(null===a||\"object\"!==typeof a)throw TypeError(\"Illegal buffer\");if(h.isByteBuffer(a))return b=e.clone.call(a),b.markedOffset=-1,b;if(a instanceof Uint8Array)b=new h(0,c,d),0<a.length&&(b.buffer=a.buffer,b.offset=a.byteOffset,b.limit=a.byteOffset+a.byteLength,b.view=new Uint8Array(a.buffer));else if(a instanceof ArrayBuffer)b=new h(0,c,d),0<a.byteLength&&(b.buffer=a,b.offset=0,b.limit=a.byteLength,b.view=0<\na.byteLength?new Uint8Array(a):null);else if(\"[object Array]\"===Object.prototype.toString.call(a))for(b=new h(a.length,c,d),b.limit=a.length,c=0;c<a.length;++c)b.view[c]=a[c];else throw TypeError(\"Illegal buffer\");return b};e.writeBitSet=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(!(a instanceof Array))throw TypeError(\"Illegal BitSet: Not an array\");if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>\nthis.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}var d=b,f=a.length,e=f>>3,g=0,h;for(b+=this.writeVarint32(f,b);e--;)h=!!a[g++]&1|(!!a[g++]&1)<<1|(!!a[g++]&1)<<2|(!!a[g++]&1)<<3|(!!a[g++]&1)<<4|(!!a[g++]&1)<<5|(!!a[g++]&1)<<6|(!!a[g++]&1)<<7,this.writeByte(h,b++);if(g<f){for(h=e=0;g<f;)h|=(!!a[g++]&1)<<e++;this.writeByte(h,b++)}return c?(this.offset=b,this):b-d};e.readBitSet=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);var c=this.readVarint32(a),\nd=c.value,f=d>>3,e=0,g=[];for(a+=c.length;f--;)c=this.readByte(a++),g[e++]=!!(c&1),g[e++]=!!(c&2),g[e++]=!!(c&4),g[e++]=!!(c&8),g[e++]=!!(c&16),g[e++]=!!(c&32),g[e++]=!!(c&64),g[e++]=!!(c&128);if(e<d)for(f=0,c=this.readByte(a++);e<d;)g[e++]=!!(c>>f++&1);b&&(this.offset=a);return g};e.readBytes=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+a>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+\nb+\" (+\"+a+\") <= \"+this.buffer.byteLength);}var d=this.slice(b,b+a);c&&(this.offset+=a);return d};e.writeBytes=e.append;e.writeInt8=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal value: \"+a+\" (not an integer)\");a|=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);\n}b+=1;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);this.view[b-1]=a;c&&(this.offset+=1);return this};e.writeByte=e.writeInt8;e.readInt8=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+1>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+1) <= \"+this.buffer.byteLength);}a=this.view[a];128===(a&128)&&(a=-(255-a+1));b&&(this.offset+=\n1);return a};e.readByte=e.readInt8;e.writeUint8=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal value: \"+a+\" (not an integer)\");a>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}b+=1;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);\nthis.view[b-1]=a;c&&(this.offset+=1);return this};e.writeUInt8=e.writeUint8;e.readUint8=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+1>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+1) <= \"+this.buffer.byteLength);}a=this.view[a];b&&(this.offset+=1);return a};e.readUInt8=e.readUint8;e.writeInt16=function(a,b){var c=\"undefined\"===typeof b;\nc&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal value: \"+a+\" (not an integer)\");a|=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}b+=2;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);b-=2;this.littleEndian?(this.view[b+1]=(a&65280)>>>8,this.view[b]=a&255):(this.view[b]=(a&65280)>>>\n8,this.view[b+1]=a&255);c&&(this.offset+=2);return this};e.writeShort=e.writeInt16;e.readInt16=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+2>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+2) <= \"+this.buffer.byteLength);}var c=0;this.littleEndian?(c=this.view[a],c|=this.view[a+1]<<8):(c=this.view[a]<<8,c|=this.view[a+1]);32768===(c&32768)&&\n(c=-(65535-c+1));b&&(this.offset+=2);return c};e.readShort=e.readInt16;e.writeUint16=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal value: \"+a+\" (not an integer)\");a>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}b+=2;var d=this.buffer.byteLength;\nb>d&&this.resize((d*=2)>b?d:b);b-=2;this.littleEndian?(this.view[b+1]=(a&65280)>>>8,this.view[b]=a&255):(this.view[b]=(a&65280)>>>8,this.view[b+1]=a&255);c&&(this.offset+=2);return this};e.writeUInt16=e.writeUint16;e.readUint16=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+2>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+2) <= \"+this.buffer.byteLength);\n}var c=0;this.littleEndian?(c=this.view[a],c|=this.view[a+1]<<8):(c=this.view[a]<<8,c|=this.view[a+1]);b&&(this.offset+=2);return c};e.readUInt16=e.readUint16;e.writeInt32=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal value: \"+a+\" (not an integer)\");a|=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+\nb+\" (+0) <= \"+this.buffer.byteLength);}b+=4;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);b-=4;this.littleEndian?(this.view[b+3]=a>>>24&255,this.view[b+2]=a>>>16&255,this.view[b+1]=a>>>8&255,this.view[b]=a&255):(this.view[b]=a>>>24&255,this.view[b+1]=a>>>16&255,this.view[b+2]=a>>>8&255,this.view[b+3]=a&255);c&&(this.offset+=4);return this};e.writeInt=e.writeInt32;e.readInt32=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%\n1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+4>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+4) <= \"+this.buffer.byteLength);}var c=0;this.littleEndian?(c=this.view[a+2]<<16,c|=this.view[a+1]<<8,c|=this.view[a],c+=this.view[a+3]<<24>>>0):(c=this.view[a+1]<<16,c|=this.view[a+2]<<8,c|=this.view[a+3],c+=this.view[a]<<24>>>0);b&&(this.offset+=4);return c|0};e.readInt=e.readInt32;e.writeUint32=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);\nif(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal value: \"+a+\" (not an integer)\");a>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}b+=4;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);b-=4;this.littleEndian?(this.view[b+3]=a>>>24&255,this.view[b+2]=a>>>16&255,this.view[b+1]=a>>>8&255,this.view[b]=\na&255):(this.view[b]=a>>>24&255,this.view[b+1]=a>>>16&255,this.view[b+2]=a>>>8&255,this.view[b+3]=a&255);c&&(this.offset+=4);return this};e.writeUInt32=e.writeUint32;e.readUint32=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+4>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+4) <= \"+this.buffer.byteLength);}var c=0;this.littleEndian?(c=this.view[a+\n2]<<16,c|=this.view[a+1]<<8,c|=this.view[a],c+=this.view[a+3]<<24>>>0):(c=this.view[a+1]<<16,c|=this.view[a+2]<<8,c|=this.view[a+3],c+=this.view[a]<<24>>>0);b&&(this.offset+=4);return c};e.readUInt32=e.readUint32;k&&(e.writeInt64=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"===typeof a)a=k.fromNumber(a);else if(\"string\"===typeof a)a=k.fromString(a);else if(!(a&&a instanceof k))throw TypeError(\"Illegal value: \"+a+\" (not an integer or Long)\");if(\"number\"!==\ntypeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}\"number\"===typeof a?a=k.fromNumber(a):\"string\"===typeof a&&(a=k.fromString(a));b+=8;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);b-=8;var d=a.low,f=a.high;this.littleEndian?(this.view[b+3]=d>>>24&255,this.view[b+2]=d>>>16&255,this.view[b+1]=d>>>8&255,this.view[b]=d&255,b+=4,this.view[b+3]=\nf>>>24&255,this.view[b+2]=f>>>16&255,this.view[b+1]=f>>>8&255,this.view[b]=f&255):(this.view[b]=f>>>24&255,this.view[b+1]=f>>>16&255,this.view[b+2]=f>>>8&255,this.view[b+3]=f&255,b+=4,this.view[b]=d>>>24&255,this.view[b+1]=d>>>16&255,this.view[b+2]=d>>>8&255,this.view[b+3]=d&255);c&&(this.offset+=8);return this},e.writeLong=e.writeInt64,e.readInt64=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");\na>>>=0;if(0>a||a+8>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+8) <= \"+this.buffer.byteLength);}var c=0,d=0;this.littleEndian?(c=this.view[a+2]<<16,c|=this.view[a+1]<<8,c|=this.view[a],c+=this.view[a+3]<<24>>>0,a+=4,d=this.view[a+2]<<16,d|=this.view[a+1]<<8,d|=this.view[a],d+=this.view[a+3]<<24>>>0):(d=this.view[a+1]<<16,d|=this.view[a+2]<<8,d|=this.view[a+3],d+=this.view[a]<<24>>>0,a+=4,c=this.view[a+1]<<16,c|=this.view[a+2]<<8,c|=this.view[a+3],c+=this.view[a]<<24>>>0);\na=new k(c,d,!1);b&&(this.offset+=8);return a},e.readLong=e.readInt64,e.writeUint64=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"===typeof a)a=k.fromNumber(a);else if(\"string\"===typeof a)a=k.fromString(a);else if(!(a&&a instanceof k))throw TypeError(\"Illegal value: \"+a+\" (not an integer or Long)\");if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+\nb+\" (+0) <= \"+this.buffer.byteLength);}\"number\"===typeof a?a=k.fromNumber(a):\"string\"===typeof a&&(a=k.fromString(a));b+=8;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);b-=8;var d=a.low,f=a.high;this.littleEndian?(this.view[b+3]=d>>>24&255,this.view[b+2]=d>>>16&255,this.view[b+1]=d>>>8&255,this.view[b]=d&255,b+=4,this.view[b+3]=f>>>24&255,this.view[b+2]=f>>>16&255,this.view[b+1]=f>>>8&255,this.view[b]=f&255):(this.view[b]=f>>>24&255,this.view[b+1]=f>>>16&255,this.view[b+2]=f>>>8&255,\nthis.view[b+3]=f&255,b+=4,this.view[b]=d>>>24&255,this.view[b+1]=d>>>16&255,this.view[b+2]=d>>>8&255,this.view[b+3]=d&255);c&&(this.offset+=8);return this},e.writeUInt64=e.writeUint64,e.readUint64=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+8>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+8) <= \"+this.buffer.byteLength);}var c=0,d=0;this.littleEndian?\n(c=this.view[a+2]<<16,c|=this.view[a+1]<<8,c|=this.view[a],c+=this.view[a+3]<<24>>>0,a+=4,d=this.view[a+2]<<16,d|=this.view[a+1]<<8,d|=this.view[a],d+=this.view[a+3]<<24>>>0):(d=this.view[a+1]<<16,d|=this.view[a+2]<<8,d|=this.view[a+3],d+=this.view[a]<<24>>>0,a+=4,c=this.view[a+1]<<16,c|=this.view[a+2]<<8,c|=this.view[a+3],c+=this.view[a]<<24>>>0);a=new k(c,d,!0);b&&(this.offset+=8);return a},e.readUInt64=e.readUint64);e.writeFloat32=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==\ntypeof a)throw TypeError(\"Illegal value: \"+a+\" (not a number)\");if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}b+=4;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);u(this.view,a,b-4,this.littleEndian,23,4);c&&(this.offset+=4);return this};e.writeFloat=e.writeFloat32;e.readFloat32=function(a){var b=\"undefined\"===typeof a;b&&\n(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+4>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+4) <= \"+this.buffer.byteLength);}a=s(this.view,a,this.littleEndian,23,4);b&&(this.offset+=4);return a};e.readFloat=e.readFloat32;e.writeFloat64=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof a)throw TypeError(\"Illegal value: \"+a+\" (not a number)\");\nif(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}b+=8;var d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);u(this.view,a,b-8,this.littleEndian,52,8);c&&(this.offset+=8);return this};e.writeDouble=e.writeFloat64;e.readFloat64=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==\na%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+8>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+8) <= \"+this.buffer.byteLength);}a=s(this.view,a,this.littleEndian,52,8);b&&(this.offset+=8);return a};e.readDouble=e.readFloat64;h.MAX_VARINT32_BYTES=5;h.calculateVarint32=function(a){a>>>=0;return 128>a?1:16384>a?2:2097152>a?3:268435456>a?4:5};h.zigZagEncode32=function(a){return((a|=0)<<1^a>>31)>>>0};h.zigZagDecode32=function(a){return a>>>1^-(a&\n1)|0};e.writeVarint32=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal value: \"+a+\" (not an integer)\");a|=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}var d=h.calculateVarint32(a),f;b+=d;f=this.buffer.byteLength;b>f&&this.resize((f*=2)>b?f:b);\nb-=d;for(a>>>=0;128<=a;)f=a&127|128,this.view[b++]=f,a>>>=7;this.view[b++]=a;return c?(this.offset=b,this):d};e.writeVarint32ZigZag=function(a,b){return this.writeVarint32(h.zigZagEncode32(a),b)};e.readVarint32=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+1>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+1) <= \"+this.buffer.byteLength);\n}var c=0,d=0,f;do{if(!this.noAssert&&a>this.limit)throw a=Error(\"Truncated\"),a.truncated=!0,a;f=this.view[a++];5>c&&(d|=(f&127)<<7*c);++c}while(0!==(f&128));d|=0;return b?(this.offset=a,d):{value:d,length:c}};e.readVarint32ZigZag=function(a){a=this.readVarint32(a);\"object\"===typeof a?a.value=h.zigZagDecode32(a.value):a=h.zigZagDecode32(a);return a};k&&(h.MAX_VARINT64_BYTES=10,h.calculateVarint64=function(a){\"number\"===typeof a?a=k.fromNumber(a):\"string\"===typeof a&&(a=k.fromString(a));var b=a.toInt()>>>\n0,c=a.shiftRightUnsigned(28).toInt()>>>0;a=a.shiftRightUnsigned(56).toInt()>>>0;return 0==a?0==c?16384>b?128>b?1:2:2097152>b?3:4:16384>c?128>c?5:6:2097152>c?7:8:128>a?9:10},h.zigZagEncode64=function(a){\"number\"===typeof a?a=k.fromNumber(a,!1):\"string\"===typeof a?a=k.fromString(a,!1):!1!==a.unsigned&&(a=a.toSigned());return a.shiftLeft(1).xor(a.shiftRight(63)).toUnsigned()},h.zigZagDecode64=function(a){\"number\"===typeof a?a=k.fromNumber(a,!1):\"string\"===typeof a?a=k.fromString(a,!1):!1!==a.unsigned&&\n(a=a.toSigned());return a.shiftRightUnsigned(1).xor(a.and(k.ONE).toSigned().negate()).toSigned()},e.writeVarint64=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"===typeof a)a=k.fromNumber(a);else if(\"string\"===typeof a)a=k.fromString(a);else if(!(a&&a instanceof k))throw TypeError(\"Illegal value: \"+a+\" (not an integer or Long)\");if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+\nb+\" (+0) <= \"+this.buffer.byteLength);}\"number\"===typeof a?a=k.fromNumber(a,!1):\"string\"===typeof a?a=k.fromString(a,!1):!1!==a.unsigned&&(a=a.toSigned());var d=h.calculateVarint64(a),f=a.toInt()>>>0,e=a.shiftRightUnsigned(28).toInt()>>>0,g=a.shiftRightUnsigned(56).toInt()>>>0;b+=d;var t=this.buffer.byteLength;b>t&&this.resize((t*=2)>b?t:b);b-=d;switch(d){case 10:this.view[b+9]=g>>>7&1;case 9:this.view[b+8]=9!==d?g|128:g&127;case 8:this.view[b+7]=8!==d?e>>>21|128:e>>>21&127;case 7:this.view[b+6]=\n7!==d?e>>>14|128:e>>>14&127;case 6:this.view[b+5]=6!==d?e>>>7|128:e>>>7&127;case 5:this.view[b+4]=5!==d?e|128:e&127;case 4:this.view[b+3]=4!==d?f>>>21|128:f>>>21&127;case 3:this.view[b+2]=3!==d?f>>>14|128:f>>>14&127;case 2:this.view[b+1]=2!==d?f>>>7|128:f>>>7&127;case 1:this.view[b]=1!==d?f|128:f&127}return c?(this.offset+=d,this):d},e.writeVarint64ZigZag=function(a,b){return this.writeVarint64(h.zigZagEncode64(a),b)},e.readVarint64=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==\ntypeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+1>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+1) <= \"+this.buffer.byteLength);}var c=a,d=0,f=0,e=0,g=0,g=this.view[a++],d=g&127;if(g&128&&(g=this.view[a++],d|=(g&127)<<7,g&128||this.noAssert&&\"undefined\"===typeof g)&&(g=this.view[a++],d|=(g&127)<<14,g&128||this.noAssert&&\"undefined\"===typeof g)&&(g=this.view[a++],d|=(g&127)<<21,g&128||this.noAssert&&\"undefined\"===typeof g)&&(g=this.view[a++],\nf=g&127,g&128||this.noAssert&&\"undefined\"===typeof g)&&(g=this.view[a++],f|=(g&127)<<7,g&128||this.noAssert&&\"undefined\"===typeof g)&&(g=this.view[a++],f|=(g&127)<<14,g&128||this.noAssert&&\"undefined\"===typeof g)&&(g=this.view[a++],f|=(g&127)<<21,g&128||this.noAssert&&\"undefined\"===typeof g)&&(g=this.view[a++],e=g&127,g&128||this.noAssert&&\"undefined\"===typeof g)&&(g=this.view[a++],e|=(g&127)<<7,g&128||this.noAssert&&\"undefined\"===typeof g))throw Error(\"Buffer overrun\");d=k.fromBits(d|f<<28,f>>>4|\ne<<24,!1);return b?(this.offset=a,d):{value:d,length:a-c}},e.readVarint64ZigZag=function(a){(a=this.readVarint64(a))&&a.value instanceof k?a.value=h.zigZagDecode64(a.value):a=h.zigZagDecode64(a);return a});e.writeCString=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);var d,f=a.length;if(!this.noAssert){if(\"string\"!==typeof a)throw TypeError(\"Illegal str: Not a string\");for(d=0;d<f;++d)if(0===a.charCodeAt(d))throw RangeError(\"Illegal str: Contains NULL-characters\");if(\"number\"!==typeof b||\n0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}f=n.calculateUTF16asUTF8(m(a))[1];b+=f+1;d=this.buffer.byteLength;b>d&&this.resize((d*=2)>b?d:b);b-=f+1;n.encodeUTF16toUTF8(m(a),function(a){this.view[b++]=a}.bind(this));this.view[b++]=0;return c?(this.offset=b,this):f};e.readCString=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==\ntypeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+1>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+1) <= \"+this.buffer.byteLength);}var c=a,d,f=-1;n.decodeUTF8toUTF16(function(){if(0===f)return null;if(a>=this.limit)throw RangeError(\"Illegal range: Truncated data, \"+a+\" < \"+this.limit);f=this.view[a++];return 0===f?null:f}.bind(this),d=r(),!0);return b?(this.offset=a,d()):{string:d(),length:a-c}};e.writeIString=function(a,b){var c=\n\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"string\"!==typeof a)throw TypeError(\"Illegal str: Not a string\");if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}var d=b,f;f=n.calculateUTF16asUTF8(m(a),this.noAssert)[1];b+=4+f;var e=this.buffer.byteLength;b>e&&this.resize((e*=2)>b?e:b);b-=4+f;this.littleEndian?(this.view[b+\n3]=f>>>24&255,this.view[b+2]=f>>>16&255,this.view[b+1]=f>>>8&255,this.view[b]=f&255):(this.view[b]=f>>>24&255,this.view[b+1]=f>>>16&255,this.view[b+2]=f>>>8&255,this.view[b+3]=f&255);b+=4;n.encodeUTF16toUTF8(m(a),function(a){this.view[b++]=a}.bind(this));if(b!==d+4+f)throw RangeError(\"Illegal range: Truncated data, \"+b+\" == \"+(b+4+f));return c?(this.offset=b,this):b-d};e.readIString=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+\na+\" (not an integer)\");a>>>=0;if(0>a||a+4>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+4) <= \"+this.buffer.byteLength);}var c=a,d=this.readUint32(a),d=this.readUTF8String(d,h.METRICS_BYTES,a+=4);a+=d.length;return b?(this.offset=a,d.string):{string:d.string,length:a-c}};h.METRICS_CHARS=\"c\";h.METRICS_BYTES=\"b\";e.writeUTF8String=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+\nb+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}var d,f=b;d=n.calculateUTF16asUTF8(m(a))[1];b+=d;var e=this.buffer.byteLength;b>e&&this.resize((e*=2)>b?e:b);b-=d;n.encodeUTF16toUTF8(m(a),function(a){this.view[b++]=a}.bind(this));return c?(this.offset=b,this):b-f};e.writeString=e.writeUTF8String;h.calculateUTF8Chars=function(a){return n.calculateUTF16asUTF8(m(a))[0]};h.calculateUTF8Bytes=function(a){return n.calculateUTF16asUTF8(m(a))[1]};\nh.calculateString=h.calculateUTF8Bytes;e.readUTF8String=function(a,b,c){\"number\"===typeof b&&(c=b,b=void 0);var d=\"undefined\"===typeof c;d&&(c=this.offset);\"undefined\"===typeof b&&(b=h.METRICS_CHARS);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal length: \"+a+\" (not an integer)\");a|=0;if(\"number\"!==typeof c||0!==c%1)throw TypeError(\"Illegal offset: \"+c+\" (not an integer)\");c>>>=0;if(0>c||c+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+c+\" (+0) <= \"+\nthis.buffer.byteLength);}var f=0,e=c,g;if(b===h.METRICS_CHARS){g=r();n.decodeUTF8(function(){return f<a&&c<this.limit?this.view[c++]:null}.bind(this),function(a){++f;n.UTF8toUTF16(a,g)});if(f!==a)throw RangeError(\"Illegal range: Truncated data, \"+f+\" == \"+a);return d?(this.offset=c,g()):{string:g(),length:c-e}}if(b===h.METRICS_BYTES){if(!this.noAssert){if(\"number\"!==typeof c||0!==c%1)throw TypeError(\"Illegal offset: \"+c+\" (not an integer)\");c>>>=0;if(0>c||c+a>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+\nc+\" (+\"+a+\") <= \"+this.buffer.byteLength);}var k=c+a;n.decodeUTF8toUTF16(function(){return c<k?this.view[c++]:null}.bind(this),g=r(),this.noAssert);if(c!==k)throw RangeError(\"Illegal range: Truncated data, \"+c+\" == \"+k);return d?(this.offset=c,g()):{string:g(),length:c-e}}throw TypeError(\"Unsupported metrics: \"+b);};e.readString=e.readUTF8String;e.writeVString=function(a,b){var c=\"undefined\"===typeof b;c&&(b=this.offset);if(!this.noAssert){if(\"string\"!==typeof a)throw TypeError(\"Illegal str: Not a string\");\nif(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: \"+b+\" (not an integer)\");b>>>=0;if(0>b||b+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+b+\" (+0) <= \"+this.buffer.byteLength);}var d=b,f,e;f=n.calculateUTF16asUTF8(m(a),this.noAssert)[1];e=h.calculateVarint32(f);b+=e+f;var g=this.buffer.byteLength;b>g&&this.resize((g*=2)>b?g:b);b-=e+f;b+=this.writeVarint32(f,b);n.encodeUTF16toUTF8(m(a),function(a){this.view[b++]=a}.bind(this));if(b!==d+f+e)throw RangeError(\"Illegal range: Truncated data, \"+\nb+\" == \"+(b+f+e));return c?(this.offset=b,this):b-d};e.readVString=function(a){var b=\"undefined\"===typeof a;b&&(a=this.offset);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+1>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+1) <= \"+this.buffer.byteLength);}var c=a,d=this.readVarint32(a),d=this.readUTF8String(d.value,h.METRICS_BYTES,a+=d.length);a+=d.length;return b?(this.offset=a,d.string):{string:d.string,\nlength:a-c}};e.append=function(a,b,c){if(\"number\"===typeof b||\"string\"!==typeof b)c=b,b=void 0;var d=\"undefined\"===typeof c;d&&(c=this.offset);if(!this.noAssert){if(\"number\"!==typeof c||0!==c%1)throw TypeError(\"Illegal offset: \"+c+\" (not an integer)\");c>>>=0;if(0>c||c+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+c+\" (+0) <= \"+this.buffer.byteLength);}a instanceof h||(a=h.wrap(a,b));b=a.limit-a.offset;if(0>=b)return this;c+=b;var f=this.buffer.byteLength;c>f&&this.resize((f*=2)>\nc?f:c);c-=b;this.view.set(a.view.subarray(a.offset,a.limit),c);a.offset+=b;d&&(this.offset+=b);return this};e.appendTo=function(a,b){a.append(this,b);return this};e.assert=function(a){this.noAssert=!a;return this};e.capacity=function(){return this.buffer.byteLength};e.clear=function(){this.offset=0;this.limit=this.buffer.byteLength;this.markedOffset=-1;return this};e.clone=function(a){var b=new h(0,this.littleEndian,this.noAssert);a?(b.buffer=new ArrayBuffer(this.buffer.byteLength),b.view=new Uint8Array(b.buffer)):\n(b.buffer=this.buffer,b.view=this.view);b.offset=this.offset;b.markedOffset=this.markedOffset;b.limit=this.limit;return b};e.compact=function(a,b){\"undefined\"===typeof a&&(a=this.offset);\"undefined\"===typeof b&&(b=this.limit);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal begin: Not an integer\");a>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal end: Not an integer\");b>>>=0;if(0>a||a>b||b>this.buffer.byteLength)throw RangeError(\"Illegal range: 0 <= \"+a+\" <= \"+\nb+\" <= \"+this.buffer.byteLength);}if(0===a&&b===this.buffer.byteLength)return this;var c=b-a;if(0===c)return this.buffer=v,this.view=null,0<=this.markedOffset&&(this.markedOffset-=a),this.limit=this.offset=0,this;var d=new ArrayBuffer(c),f=new Uint8Array(d);f.set(this.view.subarray(a,b));this.buffer=d;this.view=f;0<=this.markedOffset&&(this.markedOffset-=a);this.offset=0;this.limit=c;return this};e.copy=function(a,b){\"undefined\"===typeof a&&(a=this.offset);\"undefined\"===typeof b&&(b=this.limit);if(!this.noAssert){if(\"number\"!==\ntypeof a||0!==a%1)throw TypeError(\"Illegal begin: Not an integer\");a>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal end: Not an integer\");b>>>=0;if(0>a||a>b||b>this.buffer.byteLength)throw RangeError(\"Illegal range: 0 <= \"+a+\" <= \"+b+\" <= \"+this.buffer.byteLength);}if(a===b)return new h(0,this.littleEndian,this.noAssert);var c=b-a,d=new h(c,this.littleEndian,this.noAssert);d.offset=0;d.limit=c;0<=d.markedOffset&&(d.markedOffset-=a);this.copyTo(d,0,a,b);return d};e.copyTo=function(a,\nb,c,d){var f,e;if(!this.noAssert&&!h.isByteBuffer(a))throw TypeError(\"Illegal target: Not a ByteBuffer\");b=(e=\"undefined\"===typeof b)?a.offset:b|0;c=(f=\"undefined\"===typeof c)?this.offset:c|0;d=\"undefined\"===typeof d?this.limit:d|0;if(0>b||b>a.buffer.byteLength)throw RangeError(\"Illegal target range: 0 <= \"+b+\" <= \"+a.buffer.byteLength);if(0>c||d>this.buffer.byteLength)throw RangeError(\"Illegal source range: 0 <= \"+c+\" <= \"+this.buffer.byteLength);var g=d-c;if(0===g)return a;a.ensureCapacity(b+g);\na.view.set(this.view.subarray(c,d),b);f&&(this.offset+=g);e&&(a.offset+=g);return this};e.ensureCapacity=function(a){var b=this.buffer.byteLength;return b<a?this.resize((b*=2)>a?b:a):this};e.fill=function(a,b,c){var d=\"undefined\"===typeof b;d&&(b=this.offset);\"string\"===typeof a&&0<a.length&&(a=a.charCodeAt(0));\"undefined\"===typeof b&&(b=this.offset);\"undefined\"===typeof c&&(c=this.limit);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal value: \"+a+\" (not an integer)\");a|=\n0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal begin: Not an integer\");b>>>=0;if(\"number\"!==typeof c||0!==c%1)throw TypeError(\"Illegal end: Not an integer\");c>>>=0;if(0>b||b>c||c>this.buffer.byteLength)throw RangeError(\"Illegal range: 0 <= \"+b+\" <= \"+c+\" <= \"+this.buffer.byteLength);}if(b>=c)return this;for(;b<c;)this.view[b++]=a;d&&(this.offset=b);return this};e.flip=function(){this.limit=this.offset;this.offset=0;return this};e.mark=function(a){a=\"undefined\"===typeof a?this.offset:a;\nif(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal offset: \"+a+\" (not an integer)\");a>>>=0;if(0>a||a+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+a+\" (+0) <= \"+this.buffer.byteLength);}this.markedOffset=a;return this};e.order=function(a){if(!this.noAssert&&\"boolean\"!==typeof a)throw TypeError(\"Illegal littleEndian: Not a boolean\");this.littleEndian=!!a;return this};e.LE=function(a){this.littleEndian=\"undefined\"!==typeof a?!!a:!0;return this};e.BE=function(a){this.littleEndian=\n\"undefined\"!==typeof a?!a:!1;return this};e.prepend=function(a,b,c){if(\"number\"===typeof b||\"string\"!==typeof b)c=b,b=void 0;var d=\"undefined\"===typeof c;d&&(c=this.offset);if(!this.noAssert){if(\"number\"!==typeof c||0!==c%1)throw TypeError(\"Illegal offset: \"+c+\" (not an integer)\");c>>>=0;if(0>c||c+0>this.buffer.byteLength)throw RangeError(\"Illegal offset: 0 <= \"+c+\" (+0) <= \"+this.buffer.byteLength);}a instanceof h||(a=h.wrap(a,b));b=a.limit-a.offset;if(0>=b)return this;var f=b-c;if(0<f){var e=new ArrayBuffer(this.buffer.byteLength+\nf),g=new Uint8Array(e);g.set(this.view.subarray(c,this.buffer.byteLength),b);this.buffer=e;this.view=g;this.offset+=f;0<=this.markedOffset&&(this.markedOffset+=f);this.limit+=f;c+=f}else new Uint8Array(this.buffer);this.view.set(a.view.subarray(a.offset,a.limit),c-b);a.offset=a.limit;d&&(this.offset-=b);return this};e.prependTo=function(a,b){a.prepend(this,b);return this};e.printDebug=function(a){\"function\"!==typeof a&&(a=console.log.bind(console));a(this.toString()+\"\\n-------------------------------------------------------------------\\n\"+\nthis.toDebug(!0))};e.remaining=function(){return this.limit-this.offset};e.reset=function(){0<=this.markedOffset?(this.offset=this.markedOffset,this.markedOffset=-1):this.offset=0;return this};e.resize=function(a){if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal capacity: \"+a+\" (not an integer)\");a|=0;if(0>a)throw RangeError(\"Illegal capacity: 0 <= \"+a);}if(this.buffer.byteLength<a){a=new ArrayBuffer(a);var b=new Uint8Array(a);b.set(this.view);this.buffer=a;this.view=b}return this};\ne.reverse=function(a,b){\"undefined\"===typeof a&&(a=this.offset);\"undefined\"===typeof b&&(b=this.limit);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal begin: Not an integer\");a>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal end: Not an integer\");b>>>=0;if(0>a||a>b||b>this.buffer.byteLength)throw RangeError(\"Illegal range: 0 <= \"+a+\" <= \"+b+\" <= \"+this.buffer.byteLength);}if(a===b)return this;Array.prototype.reverse.call(this.view.subarray(a,b));return this};\ne.skip=function(a){if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal length: \"+a+\" (not an integer)\");a|=0}var b=this.offset+a;if(!this.noAssert&&(0>b||b>this.buffer.byteLength))throw RangeError(\"Illegal length: 0 <= \"+this.offset+\" + \"+a+\" <= \"+this.buffer.byteLength);this.offset=b;return this};e.slice=function(a,b){\"undefined\"===typeof a&&(a=this.offset);\"undefined\"===typeof b&&(b=this.limit);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal begin: Not an integer\");\na>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal end: Not an integer\");b>>>=0;if(0>a||a>b||b>this.buffer.byteLength)throw RangeError(\"Illegal range: 0 <= \"+a+\" <= \"+b+\" <= \"+this.buffer.byteLength);}var c=this.clone();c.offset=a;c.limit=b;return c};e.toBuffer=function(a){var b=this.offset,c=this.limit;if(!this.noAssert){if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal offset: Not an integer\");b>>>=0;if(\"number\"!==typeof c||0!==c%1)throw TypeError(\"Illegal limit: Not an integer\");\nc>>>=0;if(0>b||b>c||c>this.buffer.byteLength)throw RangeError(\"Illegal range: 0 <= \"+b+\" <= \"+c+\" <= \"+this.buffer.byteLength);}if(!a&&0===b&&c===this.buffer.byteLength)return this.buffer;if(b===c)return v;a=new ArrayBuffer(c-b);(new Uint8Array(a)).set((new Uint8Array(this.buffer)).subarray(b,c),0);return a};e.toArrayBuffer=e.toBuffer;e.toString=function(a,b,c){if(\"undefined\"===typeof a)return\"ByteBufferAB(offset=\"+this.offset+\",markedOffset=\"+this.markedOffset+\",limit=\"+this.limit+\",capacity=\"+this.capacity()+\n\")\";\"number\"===typeof a&&(c=b=a=\"utf8\");switch(a){case \"utf8\":return this.toUTF8(b,c);case \"base64\":return this.toBase64(b,c);case \"hex\":return this.toHex(b,c);case \"binary\":return this.toBinary(b,c);case \"debug\":return this.toDebug();case \"columns\":return this.toColumns();default:throw Error(\"Unsupported encoding: \"+a);}};var x=function(){for(var a={},b=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,\n114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47],c=[],d=0,f=b.length;d<f;++d)c[b[d]]=d;a.encode=function(a,c){for(var d,f;null!==(d=a());)c(b[d>>2&63]),f=(d&3)<<4,null!==(d=a())?(f|=d>>4&15,c(b[(f|d>>4&15)&63]),f=(d&15)<<2,null!==(d=a())?(c(b[(f|d>>6&3)&63]),c(b[d&63])):(c(b[f&63]),c(61))):(c(b[f&63]),c(61),c(61))};a.decode=function(a,b){function d(a){throw Error(\"Illegal character code: \"+a);}for(var f,e,h;null!==(f=a());)if(e=c[f],\"undefined\"===typeof e&&d(f),null!==(f=a())&&\n(h=c[f],\"undefined\"===typeof h&&d(f),b(e<<2>>>0|(h&48)>>4),null!==(f=a()))){e=c[f];if(\"undefined\"===typeof e)if(61===f)break;else d(f);b((h&15)<<4>>>0|(e&60)>>2);if(null!==(f=a())){h=c[f];if(\"undefined\"===typeof h)if(61===f)break;else d(f);b((e&3)<<6>>>0|h)}}};a.test=function(a){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)};return a}();e.toBase64=function(a,b){\"undefined\"===typeof a&&(a=this.offset);\"undefined\"===typeof b&&(b=this.limit);a|=0;b|=0;if(0>a||b>this.capacity||\na>b)throw RangeError(\"begin, end\");var c;x.encode(function(){return a<b?this.view[a++]:null}.bind(this),c=r());return c()};h.fromBase64=function(a,b){if(\"string\"!==typeof a)throw TypeError(\"str\");var c=new h(a.length/4*3,b),d=0;x.decode(m(a),function(a){c.view[d++]=a});c.limit=d;return c};h.btoa=function(a){return h.fromBinary(a).toBase64()};h.atob=function(a){return h.fromBase64(a).toBinary()};e.toBinary=function(a,b){\"undefined\"===typeof a&&(a=this.offset);\"undefined\"===typeof b&&(b=this.limit);\na|=0;b|=0;if(0>a||b>this.capacity()||a>b)throw RangeError(\"begin, end\");if(a===b)return\"\";for(var c=[],d=[];a<b;)c.push(this.view[a++]),1024<=c.length&&(d.push(String.fromCharCode.apply(String,c)),c=[]);return d.join(\"\")+String.fromCharCode.apply(String,c)};h.fromBinary=function(a,b){if(\"string\"!==typeof a)throw TypeError(\"str\");for(var c=0,d=a.length,f,e=new h(d,b);c<d;){f=a.charCodeAt(c);if(255<f)throw RangeError(\"illegal char code: \"+f);e.view[c++]=f}e.limit=d;return e};e.toDebug=function(a){for(var b=\n-1,c=this.buffer.byteLength,d,f=\"\",e=\"\",g=\"\";b<c;){-1!==b&&(d=this.view[b],f=16>d?f+(\"0\"+d.toString(16).toUpperCase()):f+d.toString(16).toUpperCase(),a&&(e+=32<d&&127>d?String.fromCharCode(d):\".\"));++b;if(a&&0<b&&0===b%16&&b!==c){for(;51>f.length;)f+=\" \";g+=f+e+\"\\n\";f=e=\"\"}f=b===this.offset&&b===this.limit?f+(b===this.markedOffset?\"!\":\"|\"):b===this.offset?f+(b===this.markedOffset?\"[\":\"<\"):b===this.limit?f+(b===this.markedOffset?\"]\":\">\"):f+(b===this.markedOffset?\"'\":a||0!==b&&b!==c?\" \":\"\")}if(a&&\" \"!==\nf){for(;51>f.length;)f+=\" \";g+=f+e+\"\\n\"}return a?g:f};h.fromDebug=function(a,b,c){var d=a.length;b=new h((d+1)/3|0,b,c);for(var f=0,e=0,g,k=!1,m=!1,n=!1,p=!1,q=!1;f<d;){switch(g=a.charAt(f++)){case \"!\":if(!c){if(m||n||p){q=!0;break}m=n=p=!0}b.offset=b.markedOffset=b.limit=e;k=!1;break;case \"|\":if(!c){if(m||p){q=!0;break}m=p=!0}b.offset=b.limit=e;k=!1;break;case \"[\":if(!c){if(m||n){q=!0;break}m=n=!0}b.offset=b.markedOffset=e;k=!1;break;case \"<\":if(!c){if(m){q=!0;break}m=!0}b.offset=e;k=!1;break;case \"]\":if(!c){if(p||\nn){q=!0;break}p=n=!0}b.limit=b.markedOffset=e;k=!1;break;case \">\":if(!c){if(p){q=!0;break}p=!0}b.limit=e;k=!1;break;case \"'\":if(!c){if(n){q=!0;break}n=!0}b.markedOffset=e;k=!1;break;case \" \":k=!1;break;default:if(!c&&k){q=!0;break}g=parseInt(g+a.charAt(f++),16);if(!c&&(isNaN(g)||0>g||255<g))throw TypeError(\"Illegal str: Not a debug encoded string\");b.view[e++]=g;k=!0}if(q)throw TypeError(\"Illegal str: Invalid symbol at \"+f);}if(!c){if(!m||!p)throw TypeError(\"Illegal str: Missing offset or limit\");\nif(e<b.buffer.byteLength)throw TypeError(\"Illegal str: Not a debug encoded string (is it hex?) \"+e+\" < \"+d);}return b};e.toHex=function(a,b){a=\"undefined\"===typeof a?this.offset:a;b=\"undefined\"===typeof b?this.limit:b;if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal begin: Not an integer\");a>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal end: Not an integer\");b>>>=0;if(0>a||a>b||b>this.buffer.byteLength)throw RangeError(\"Illegal range: 0 <= \"+a+\" <= \"+b+\" <= \"+\nthis.buffer.byteLength);}for(var c=Array(b-a),d;a<b;)d=this.view[a++],16>d?c.push(\"0\",d.toString(16)):c.push(d.toString(16));return c.join(\"\")};h.fromHex=function(a,b,c){if(!c){if(\"string\"!==typeof a)throw TypeError(\"Illegal str: Not a string\");if(0!==a.length%2)throw TypeError(\"Illegal str: Length not a multiple of 2\");}var d=a.length;b=new h(d/2|0,b);for(var f,e=0,g=0;e<d;e+=2){f=parseInt(a.substring(e,e+2),16);if(!c&&(!isFinite(f)||0>f||255<f))throw TypeError(\"Illegal str: Contains non-hex characters\");\nb.view[g++]=f}b.limit=g;return b};var n=function(){var a={MAX_CODEPOINT:1114111,encodeUTF8:function(a,c){var d=null;\"number\"===typeof a&&(d=a,a=function(){return null});for(;null!==d||null!==(d=a());)128>d?c(d&127):(2048>d?c(d>>6&31|192):(65536>d?c(d>>12&15|224):(c(d>>18&7|240),c(d>>12&63|128)),c(d>>6&63|128)),c(d&63|128)),d=null},decodeUTF8:function(a,c){for(var d,f,e,g,h=function(a){a=a.slice(0,a.indexOf(null));var b=Error(a.toString());b.name=\"TruncatedError\";b.bytes=a;throw b;};null!==(d=a());)if(0===\n(d&128))c(d);else if(192===(d&224))null===(f=a())&&h([d,f]),c((d&31)<<6|f&63);else if(224===(d&240))null!==(f=a())&&null!==(e=a())||h([d,f,e]),c((d&15)<<12|(f&63)<<6|e&63);else if(240===(d&248))null!==(f=a())&&null!==(e=a())&&null!==(g=a())||h([d,f,e,g]),c((d&7)<<18|(f&63)<<12|(e&63)<<6|g&63);else throw RangeError(\"Illegal starting byte: \"+d);},UTF16toUTF8:function(a,c){for(var d,e=null;null!==(d=null!==e?e:a());)55296<=d&&57343>=d&&null!==(e=a())&&56320<=e&&57343>=e?(c(1024*(d-55296)+e-56320+65536),\ne=null):c(d);null!==e&&c(e)},UTF8toUTF16:function(a,c){var d=null;\"number\"===typeof a&&(d=a,a=function(){return null});for(;null!==d||null!==(d=a());)65535>=d?c(d):(d-=65536,c((d>>10)+55296),c(d%1024+56320)),d=null},encodeUTF16toUTF8:function(b,c){a.UTF16toUTF8(b,function(b){a.encodeUTF8(b,c)})},decodeUTF8toUTF16:function(b,c){a.decodeUTF8(b,function(b){a.UTF8toUTF16(b,c)})},calculateCodePoint:function(a){return 128>a?1:2048>a?2:65536>a?3:4},calculateUTF8:function(a){for(var c,d=0;null!==(c=a());)d+=\n128>c?1:2048>c?2:65536>c?3:4;return d},calculateUTF16asUTF8:function(b){var c=0,d=0;a.UTF16toUTF8(b,function(a){++c;d+=128>a?1:2048>a?2:65536>a?3:4});return[c,d]}};return a}();e.toUTF8=function(a,b){\"undefined\"===typeof a&&(a=this.offset);\"undefined\"===typeof b&&(b=this.limit);if(!this.noAssert){if(\"number\"!==typeof a||0!==a%1)throw TypeError(\"Illegal begin: Not an integer\");a>>>=0;if(\"number\"!==typeof b||0!==b%1)throw TypeError(\"Illegal end: Not an integer\");b>>>=0;if(0>a||a>b||b>this.buffer.byteLength)throw RangeError(\"Illegal range: 0 <= \"+\na+\" <= \"+b+\" <= \"+this.buffer.byteLength);}var c;try{n.decodeUTF8toUTF16(function(){return a<b?this.view[a++]:null}.bind(this),c=r())}catch(d){if(a!==b)throw RangeError(\"Illegal range: Truncated data, \"+a+\" != \"+b);}return c()};h.fromUTF8=function(a,b,c){if(!c&&\"string\"!==typeof a)throw TypeError(\"Illegal str: Not a string\");var d=new h(n.calculateUTF16asUTF8(m(a),!0)[1],b,c),e=0;n.encodeUTF16toUTF8(m(a),function(a){d.view[e++]=a});d.limit=e;return d};return h});\n"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(8))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "/*\n protobuf.js (c) 2013 Daniel Wirtz <dcode@dcode.io>\n Released under the Apache License, Version 2.0\n see: https://github.com/dcodeIO/protobuf.js for details\n*/\n(function(h,u){(h.dcodeIO=h.dcodeIO||{}).ProtoBuf=u(h.dcodeIO.ByteBuffer)})(this,function(h,u){var d={};d.ByteBuffer=h;d.Long=h.Long||null;d.VERSION=\"5.0.1\";d.WIRE_TYPES={};d.WIRE_TYPES.VARINT=0;d.WIRE_TYPES.BITS64=1;d.WIRE_TYPES.LDELIM=2;d.WIRE_TYPES.STARTGROUP=3;d.WIRE_TYPES.ENDGROUP=4;d.WIRE_TYPES.BITS32=5;d.PACKABLE_WIRE_TYPES=\n[d.WIRE_TYPES.VARINT,d.WIRE_TYPES.BITS64,d.WIRE_TYPES.BITS32];d.TYPES={int32:{name:\"int32\",wireType:d.WIRE_TYPES.VARINT,defaultValue:0},uint32:{name:\"uint32\",wireType:d.WIRE_TYPES.VARINT,defaultValue:0},sint32:{name:\"sint32\",wireType:d.WIRE_TYPES.VARINT,defaultValue:0},int64:{name:\"int64\",wireType:d.WIRE_TYPES.VARINT,defaultValue:d.Long?d.Long.ZERO:void 0},uint64:{name:\"uint64\",wireType:d.WIRE_TYPES.VARINT,defaultValue:d.Long?d.Long.UZERO:void 0},sint64:{name:\"sint64\",wireType:d.WIRE_TYPES.VARINT,\ndefaultValue:d.Long?d.Long.ZERO:void 0},bool:{name:\"bool\",wireType:d.WIRE_TYPES.VARINT,defaultValue:!1},\"double\":{name:\"double\",wireType:d.WIRE_TYPES.BITS64,defaultValue:0},string:{name:\"string\",wireType:d.WIRE_TYPES.LDELIM,defaultValue:\"\"},bytes:{name:\"bytes\",wireType:d.WIRE_TYPES.LDELIM,defaultValue:null},fixed32:{name:\"fixed32\",wireType:d.WIRE_TYPES.BITS32,defaultValue:0},sfixed32:{name:\"sfixed32\",wireType:d.WIRE_TYPES.BITS32,defaultValue:0},fixed64:{name:\"fixed64\",wireType:d.WIRE_TYPES.BITS64,\ndefaultValue:d.Long?d.Long.UZERO:void 0},sfixed64:{name:\"sfixed64\",wireType:d.WIRE_TYPES.BITS64,defaultValue:d.Long?d.Long.ZERO:void 0},\"float\":{name:\"float\",wireType:d.WIRE_TYPES.BITS32,defaultValue:0},\"enum\":{name:\"enum\",wireType:d.WIRE_TYPES.VARINT,defaultValue:0},message:{name:\"message\",wireType:d.WIRE_TYPES.LDELIM,defaultValue:null},group:{name:\"group\",wireType:d.WIRE_TYPES.STARTGROUP,defaultValue:null}};d.MAP_KEY_TYPES=[d.TYPES.int32,d.TYPES.sint32,d.TYPES.sfixed32,d.TYPES.uint32,d.TYPES.fixed32,\nd.TYPES.int64,d.TYPES.sint64,d.TYPES.sfixed64,d.TYPES.uint64,d.TYPES.fixed64,d.TYPES.bool,d.TYPES.string,d.TYPES.bytes];d.ID_MIN=1;d.ID_MAX=536870911;d.convertFieldsToCamelCase=!1;d.populateAccessors=!0;d.populateDefaults=!0;d.Util=function(){var b={};b.IS_NODE=!(\"object\"!==typeof process||\"[object process]\"!==process+\"\"||process.browser);b.XHR=function(){for(var b=[function(){return new XMLHttpRequest},function(){return new ActiveXObject(\"Msxml2.XMLHTTP\")},function(){return new ActiveXObject(\"Msxml3.XMLHTTP\")},\nfunction(){return new ActiveXObject(\"Microsoft.XMLHTTP\")}],d=null,h=0;h<b.length;h++){try{d=b[h]()}catch(n){continue}break}if(!d)throw Error(\"XMLHttpRequest is not supported\");return d};b.fetch=function(d,p){p&&\"function\"!=typeof p&&(p=null);if(b.IS_NODE){var h=require(\"fs\");if(p)h.readFile(d,function(b,d){b?p(null):p(\"\"+d)});else try{return h.readFileSync(d)}catch(n){return null}}else{var k=b.XHR();k.open(\"GET\",d,p?!0:!1);k.setRequestHeader(\"Accept\",\"text/plain\");\"function\"===typeof k.overrideMimeType&&\nk.overrideMimeType(\"text/plain\");if(p)k.onreadystatechange=function(){4==k.readyState&&(200==k.status||0==k.status&&\"string\"===typeof k.responseText?p(k.responseText):p(null))},4!=k.readyState&&k.send(null);else return k.send(null),200==k.status||0==k.status&&\"string\"===typeof k.responseText?k.responseText:null}};b.toCamelCase=function(b){return b.replace(/_([a-zA-Z])/g,function(b,d){return d.toUpperCase()})};return b}();d.Lang={DELIM:/[\\s\\{\\}=;:\\[\\],'\"\\(\\)<>]/g,RULE:/^(?:required|optional|repeated|map)$/,\nTYPE:/^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,NAME:/^[a-zA-Z_][a-zA-Z_0-9]*$/,TYPEDEF:/^[a-zA-Z][a-zA-Z_0-9]*$/,TYPEREF:/^(?:\\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,FQTYPEREF:/^(?:\\.[a-zA-Z][a-zA-Z_0-9]*)+$/,NUMBER:/^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,NUMBER_DEC:/^(?:[1-9][0-9]*|0)$/,NUMBER_HEX:/^0[xX][0-9a-fA-F]+$/,NUMBER_OCT:/^0[0-7]+$/,NUMBER_FLT:/^([0-9]*(\\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,\nBOOL:/^(?:true|false)$/i,ID:/^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,NEGID:/^\\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,WHITESPACE:/\\s/,STRING:/(?:\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\")|(?:'([^'\\\\]*(?:\\\\.[^'\\\\]*)*)')/g,STRING_DQ:/(?:\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\")/g,STRING_SQ:/(?:'([^'\\\\]*(?:\\\\.[^'\\\\]*)*)')/g};d.DotProto=function(b,d){function h(b,c){var a=-1,l=1;\"-\"==b.charAt(0)&&(l=-1,b=b.substring(1));if(d.NUMBER_DEC.test(b))a=parseInt(b);else if(d.NUMBER_HEX.test(b))a=parseInt(b.substring(2),16);\nelse if(d.NUMBER_OCT.test(b))a=parseInt(b.substring(1),8);else throw Error(\"illegal id value: \"+(0>l?\"-\":\"\")+b);a=l*a|0;if(!c&&0>a)throw Error(\"illegal id value: \"+(0>l?\"-\":\"\")+b);return a}function q(b){var c=1;\"-\"==b.charAt(0)&&(c=-1,b=b.substring(1));if(d.NUMBER_DEC.test(b))return c*parseInt(b,10);if(d.NUMBER_HEX.test(b))return c*parseInt(b.substring(2),16);if(d.NUMBER_OCT.test(b))return c*parseInt(b.substring(1),8);if(\"inf\"===b)return Infinity*c;if(\"nan\"===b)return NaN;if(d.NUMBER_FLT.test(b))return c*\nparseFloat(b);throw Error(\"illegal number value: \"+(0>c?\"-\":\"\")+b);}function n(b,c,d){\"undefined\"===typeof b[c]?b[c]=d:(Array.isArray(b[c])||(b[c]=[b[c]]),b[c].push(d))}var k={},a=function(b){this.source=b+\"\";this.index=0;this.line=1;this.stack=[];this._stringOpen=null},e=a.prototype;e._readString=function(){var b='\"'===this._stringOpen?d.STRING_DQ:d.STRING_SQ;b.lastIndex=this.index-1;var c=b.exec(this.source);if(!c)throw Error(\"unterminated string\");this.index=b.lastIndex;this.stack.push(this._stringOpen);\nthis._stringOpen=null;return c[1]};e.next=function(){if(0<this.stack.length)return this.stack.shift();if(this.index>=this.source.length)return null;if(null!==this._stringOpen)return this._readString();var b,c;do{for(b=!1;d.WHITESPACE.test(c=this.source.charAt(this.index));)if(\"\\n\"===c&&++this.line,++this.index===this.source.length)return null;if(\"/\"===this.source.charAt(this.index))if(++this.index,\"/\"===this.source.charAt(this.index)){for(;\"\\n\"!==this.source.charAt(++this.index);)if(this.index==this.source.length)return null;\n++this.index;++this.line;b=!0}else if(\"*\"===(c=this.source.charAt(this.index))){do{\"\\n\"===c&&++this.line;if(++this.index===this.source.length)return null;b=c;c=this.source.charAt(this.index)}while(\"*\"!==b||\"/\"!==c);++this.index;b=!0}else return\"/\"}while(b);if(this.index===this.source.length)return null;c=this.index;d.DELIM.lastIndex=0;if(!d.DELIM.test(this.source.charAt(c++)))for(;c<this.source.length&&!d.DELIM.test(this.source.charAt(c));)++c;c=this.source.substring(this.index,this.index=c);if('\"'===\nc||\"'\"===c)this._stringOpen=c;return c};e.peek=function(){if(0===this.stack.length){var b=this.next();if(null===b)return null;this.stack.push(b)}return this.stack[0]};e.skip=function(b){var c=this.next();if(c!==b)throw Error(\"illegal '\"+c+\"', '\"+b+\"' expected\");};e.omit=function(b){return this.peek()===b?(this.next(),!0):!1};e.toString=function(){return\"Tokenizer (\"+this.index+\"/\"+this.source.length+\" at line \"+this.line+\")\"};k.Tokenizer=a;var f=function(b){this.tn=new a(b);this.proto3=!1},e=f.prototype;\ne.parse=function(){var b={name:\"[ROOT]\",\"package\":null,messages:[],enums:[],imports:[],options:{},services:[]},c,a=!0,l;try{for(;c=this.tn.next();)switch(c){case \"package\":if(!a||null!==b[\"package\"])throw Error(\"unexpected 'package'\");c=this.tn.next();if(!d.TYPEREF.test(c))throw Error(\"illegal package name: \"+c);this.tn.skip(\";\");b[\"package\"]=c;break;case \"import\":if(!a)throw Error(\"unexpected 'import'\");c=this.tn.peek();(\"public\"===c||(l=\"weak\"===c))&&this.tn.next();c=this._readString();this.tn.skip(\";\");\nl||b.imports.push(c);break;case \"syntax\":if(!a)throw Error(\"unexpected 'syntax'\");this.tn.skip(\"=\");\"proto3\"===(b.syntax=this._readString())&&(this.proto3=!0);this.tn.skip(\";\");break;case \"message\":this._parseMessage(b,null);a=!1;break;case \"enum\":this._parseEnum(b);a=!1;break;case \"option\":this._parseOption(b);break;case \"service\":this._parseService(b);break;case \"extend\":this._parseExtend(b);break;default:throw Error(\"unexpected '\"+c+\"'\");}}catch(e){throw e.message=\"Parse error at line \"+this.tn.line+\n\": \"+e.message,e;}delete b.name;return b};f.parse=function(b){return(new f(b)).parse()};e._readString=function(){var b=\"\",c;do{c=this.tn.next();if(\"'\"!==c&&'\"'!==c)throw Error(\"illegal string delimiter: \"+c);b+=this.tn.next();this.tn.skip(c);c=this.tn.peek()}while('\"'===c||'\"'===c);return b};e._readValue=function(b){var c=this.tn.peek();if('\"'===c||\"'\"===c)return this._readString();this.tn.next();if(d.NUMBER.test(c))return q(c);if(d.BOOL.test(c))return\"true\"===c.toLowerCase();if(b&&d.TYPEREF.test(c))return c;\nthrow Error(\"illegal value: \"+c);};e._parseOption=function(b,c){var a=this.tn.next(),l=!1;\"(\"===a&&(l=!0,a=this.tn.next());if(!d.TYPEREF.test(a))throw Error(\"illegal option name: \"+a);var e=a;l&&(this.tn.skip(\")\"),e=\"(\"+e+\")\",a=this.tn.peek(),d.FQTYPEREF.test(a)&&(e+=a,this.tn.next()));this.tn.skip(\"=\");this._parseOptionValue(b,e);c||this.tn.skip(\";\")};e._parseOptionValue=function(b,c){var a=this.tn.peek();if(\"{\"!==a)n(b.options,c,this._readValue(!0));else for(this.tn.skip(\"{\");\"}\"!==(a=this.tn.next());){if(!d.NAME.test(a))throw Error(\"illegal option name: \"+\nc+\".\"+a);this.tn.omit(\":\")?n(b.options,c+\".\"+a,this._readValue(!0)):this._parseOptionValue(b,c+\".\"+a)}};e._parseService=function(b){var c=this.tn.next();if(!d.NAME.test(c))throw Error(\"illegal service name at line \"+this.tn.line+\": \"+c);var a={name:c,rpc:{},options:{}};for(this.tn.skip(\"{\");\"}\"!==(c=this.tn.next());)if(\"option\"===c)this._parseOption(a);else if(\"rpc\"===c)this._parseServiceRPC(a);else throw Error(\"illegal service token: \"+c);this.tn.omit(\";\");b.services.push(a)};e._parseServiceRPC=\nfunction(b){var c=this.tn.next();if(!d.NAME.test(c))throw Error(\"illegal rpc service method name: \"+c);var a=c,l={request:null,response:null,request_stream:!1,response_stream:!1,options:{}};this.tn.skip(\"(\");c=this.tn.next();\"stream\"===c.toLowerCase()&&(l.request_stream=!0,c=this.tn.next());if(!d.TYPEREF.test(c))throw Error(\"illegal rpc service request type: \"+c);l.request=c;this.tn.skip(\")\");c=this.tn.next();if(\"returns\"!==c.toLowerCase())throw Error(\"illegal rpc service request type delimiter: \"+\nc);this.tn.skip(\"(\");c=this.tn.next();\"stream\"===c.toLowerCase()&&(l.response_stream=!0,c=this.tn.next());l.response=c;this.tn.skip(\")\");c=this.tn.peek();if(\"{\"===c){for(this.tn.next();\"}\"!==(c=this.tn.next());)if(\"option\"===c)this._parseOption(l);else throw Error(\"illegal rpc service token: \"+c);this.tn.omit(\";\")}else this.tn.skip(\";\");\"undefined\"===typeof b.rpc&&(b.rpc={});b.rpc[a]=l};e._parseMessage=function(b,c){var a=!!c,l=this.tn.next(),e={name:\"\",fields:[],enums:[],messages:[],options:{},services:[],\noneofs:{}};if(!d.NAME.test(l))throw Error(\"illegal \"+(a?\"group\":\"message\")+\" name: \"+l);e.name=l;a&&(this.tn.skip(\"=\"),c.id=h(this.tn.next()),e.isGroup=!0);l=this.tn.peek();\"[\"===l&&c&&this._parseFieldOptions(c);for(this.tn.skip(\"{\");\"}\"!==(l=this.tn.next());)if(d.RULE.test(l))this._parseMessageField(e,l);else if(\"oneof\"===l)this._parseMessageOneOf(e);else if(\"enum\"===l)this._parseEnum(e);else if(\"message\"===l)this._parseMessage(e);else if(\"option\"===l)this._parseOption(e);else if(\"service\"===l)this._parseService(e);\nelse if(\"extensions\"===l)e.extensions=this._parseExtensionRanges();else if(\"reserved\"===l)this._parseIgnored();else if(\"extend\"===l)this._parseExtend(e);else if(d.TYPEREF.test(l)){if(!this.proto3)throw Error(\"illegal field rule: \"+l);this._parseMessageField(e,\"optional\",l)}else throw Error(\"illegal message token: \"+l);this.tn.omit(\";\");b.messages.push(e);return e};e._parseIgnored=function(){for(;\";\"!==this.tn.peek();)this.tn.next();this.tn.skip(\";\")};e._parseMessageField=function(b,c,a){if(!d.RULE.test(c))throw Error(\"illegal message field rule: \"+\nc);var e={rule:c,type:\"\",name:\"\",options:{},id:0};if(\"map\"===c){if(a)throw Error(\"illegal type: \"+a);this.tn.skip(\"<\");c=this.tn.next();if(!d.TYPE.test(c)&&!d.TYPEREF.test(c))throw Error(\"illegal message field type: \"+c);e.keytype=c;this.tn.skip(\",\");c=this.tn.next();if(!d.TYPE.test(c)&&!d.TYPEREF.test(c))throw Error(\"illegal message field: \"+c);e.type=c;this.tn.skip(\">\");c=this.tn.next();if(!d.NAME.test(c))throw Error(\"illegal message field name: \"+c);e.name=c;this.tn.skip(\"=\");e.id=h(this.tn.next());\nc=this.tn.peek();\"[\"===c&&this._parseFieldOptions(e);this.tn.skip(\";\")}else if(a=\"undefined\"!==typeof a?a:this.tn.next(),\"group\"===a){c=this._parseMessage(b,e);if(!/^[A-Z]/.test(c.name))throw Error(\"illegal group name: \"+c.name);e.type=c.name;e.name=c.name.toLowerCase();this.tn.omit(\";\")}else{if(!d.TYPE.test(a)&&!d.TYPEREF.test(a))throw Error(\"illegal message field type: \"+a);e.type=a;c=this.tn.next();if(!d.NAME.test(c))throw Error(\"illegal message field name: \"+c);e.name=c;this.tn.skip(\"=\");e.id=\nh(this.tn.next());c=this.tn.peek();\"[\"===c&&this._parseFieldOptions(e);this.tn.skip(\";\")}b.fields.push(e);return e};e._parseMessageOneOf=function(b){var c=this.tn.next();if(!d.NAME.test(c))throw Error(\"illegal oneof name: \"+c);var a=c,e=[];for(this.tn.skip(\"{\");\"}\"!==(c=this.tn.next());)c=this._parseMessageField(b,\"optional\",c),c.oneof=a,e.push(c.id);this.tn.omit(\";\");b.oneofs[a]=e};e._parseFieldOptions=function(b){this.tn.skip(\"[\");for(var c=!0;\"]\"!==this.tn.peek();)c||this.tn.skip(\",\"),this._parseOption(b,\n!0),c=!1;this.tn.next()};e._parseEnum=function(b){var c={name:\"\",values:[],options:{}},a=this.tn.next();if(!d.NAME.test(a))throw Error(\"illegal name: \"+a);c.name=a;for(this.tn.skip(\"{\");\"}\"!==(a=this.tn.next());)if(\"option\"===a)this._parseOption(c);else{if(!d.NAME.test(a))throw Error(\"illegal name: \"+a);this.tn.skip(\"=\");var e={name:a,id:h(this.tn.next(),!0)},a=this.tn.peek();\"[\"===a&&this._parseFieldOptions({options:{}});this.tn.skip(\";\");c.values.push(e)}this.tn.omit(\";\");b.enums.push(c)};e._parseExtensionRanges=\nfunction(){var a=[],c,d;do{for(d=[];;){c=this.tn.next();switch(c){case \"min\":c=b.ID_MIN;break;case \"max\":c=b.ID_MAX;break;default:c=q(c)}d.push(c);if(2===d.length)break;if(\"to\"!==this.tn.peek()){d.push(c);break}this.tn.next()}a.push(d)}while(this.tn.omit(\",\"));this.tn.skip(\";\");return a};e._parseExtend=function(b){var a=this.tn.next();if(!d.TYPEREF.test(a))throw Error(\"illegal extend reference: \"+a);var e={ref:a,fields:[]};for(this.tn.skip(\"{\");\"}\"!==(a=this.tn.next());)if(d.RULE.test(a))this._parseMessageField(e,\na);else if(d.TYPEREF.test(a)){if(!this.proto3)throw Error(\"illegal field rule: \"+a);this._parseMessageField(e,\"optional\",a)}else throw Error(\"illegal extend token: \"+a);this.tn.omit(\";\");b.messages.push(e);return e};e.toString=function(){return\"Parser at line \"+this.tn.line};k.Parser=f;return k}(d,d.Lang);d.Reflect=function(b){function d(g,m){if(g&&\"number\"===typeof g.low&&\"number\"===typeof g.high&&\"boolean\"===typeof g.unsigned&&g.low===g.low&&g.high===g.high)return new b.Long(g.low,g.high,\"undefined\"===\ntypeof m?g.unsigned:m);if(\"string\"===typeof g)return b.Long.fromString(g,m||!1,10);if(\"number\"===typeof g)return b.Long.fromNumber(g,m||!1);throw Error(\"not convertible to Long\");}function p(g,m){var a=m.readVarint32(),c=a&7,a=a>>>3;switch(c){case b.WIRE_TYPES.VARINT:do a=m.readUint8();while(128===(a&128));break;case b.WIRE_TYPES.BITS64:m.offset+=8;break;case b.WIRE_TYPES.LDELIM:a=m.readVarint32();m.offset+=a;break;case b.WIRE_TYPES.STARTGROUP:p(a,m);break;case b.WIRE_TYPES.ENDGROUP:if(a===g)return!1;\nthrow Error(\"Illegal GROUPEND after unknown group: \"+a+\" (\"+g+\" expected)\");case b.WIRE_TYPES.BITS32:m.offset+=4;break;default:throw Error(\"Illegal wire type in unknown group \"+g+\": \"+c);}return!0}var q={},n=function(g,b,a){this.builder=g;this.parent=b;this.name=a},k=n.prototype;k.fqn=function(){var g=this.name,b=this;do{b=b.parent;if(null==b)break;g=b.name+\".\"+g}while(1);return g};k.toString=function(g){return(g?this.className+\" \":\"\")+this.fqn()};k.build=function(){throw Error(this.toString(!0)+\n\" cannot be built directly\");};q.T=n;var a=function(g,b,a,c,d){n.call(this,g,b,a);this.className=\"Namespace\";this.children=[];this.options=c||{};this.syntax=d||\"proto2\"},k=a.prototype=Object.create(n.prototype);k.getChildren=function(b){b=b||null;if(null==b)return this.children.slice();for(var a=[],c=0,d=this.children.length;c<d;++c)this.children[c]instanceof b&&a.push(this.children[c]);return a};k.addChild=function(b){var a;if(a=this.getChild(b.name))if(a instanceof s.Field&&a.name!==a.originalName&&\nnull===this.getChild(a.originalName))a.name=a.originalName;else if(b instanceof s.Field&&b.name!==b.originalName&&null===this.getChild(b.originalName))b.name=b.originalName;else throw Error(\"Duplicate name in namespace \"+this.toString(!0)+\": \"+b.name);this.children.push(b)};k.getChild=function(b){for(var a=\"number\"===typeof b?\"id\":\"name\",c=0,d=this.children.length;c<d;++c)if(this.children[c][a]===b)return this.children[c];return null};k.resolve=function(b,a){var c=\"string\"===typeof b?b.split(\".\"):\nb,d=this,e=0;if(\"\"===c[e]){for(;null!==d.parent;)d=d.parent;e++}do{do{if(!(d instanceof q.Namespace)){d=null;break}d=d.getChild(c[e]);if(!(d&&d instanceof q.T)||a&&!(d instanceof q.Namespace)){d=null;break}e++}while(e<c.length);if(null!=d)break;if(null!==this.parent)return this.parent.resolve(b,a)}while(null!=d);return d};k.qn=function(b){var a=[],c=b;do a.unshift(c.name),c=c.parent;while(null!==c);for(c=1;c<=a.length;c++){var d=a.slice(a.length-c);if(b===this.resolve(d,b instanceof q.Namespace))return d.join(\".\")}return b.fqn()};\nk.build=function(){for(var b={},c=this.children,d=0,e=c.length,l;d<e;++d)l=c[d],l instanceof a&&(b[l.name]=l.build());Object.defineProperty&&Object.defineProperty(b,\"$options\",{value:this.buildOpt()});return b};k.buildOpt=function(){for(var b={},a=Object.keys(this.options),c=0,d=a.length;c<d;++c)b[a[c]]=this.options[a[c]];return b};k.getOption=function(b){return\"undefined\"===typeof b?this.options:\"undefined\"!==typeof this.options[b]?this.options[b]:null};q.Namespace=a;var e=function(g,a,c,d){this.type=\ng;this.resolvedType=a;this.isMapKey=c;this.syntax=d;if(c&&0>b.MAP_KEY_TYPES.indexOf(g))throw Error(\"Invalid map key type: \"+g.name);},f=e.prototype;e.defaultFieldValue=function(g){\"string\"===typeof g&&(g=b.TYPES[g]);if(\"undefined\"===typeof g.defaultValue)throw Error(\"default value for type \"+g.name+\" is not supported\");return g==b.TYPES.bytes?new h(0):g.defaultValue};f.verifyValue=function(g){function a(b,g){throw Error(\"Illegal value for \"+c.toString(!0)+\" of type \"+c.type.name+\": \"+b+\" (\"+g+\")\");\n}var c=this;switch(this.type){case b.TYPES.int32:case b.TYPES.sint32:case b.TYPES.sfixed32:return(\"number\"!==typeof g||g===g&&0!==g%1)&&a(typeof g,\"not an integer\"),4294967295<g?g|0:g;case b.TYPES.uint32:case b.TYPES.fixed32:return(\"number\"!==typeof g||g===g&&0!==g%1)&&a(typeof g,\"not an integer\"),0>g?g>>>0:g;case b.TYPES.int64:case b.TYPES.sint64:case b.TYPES.sfixed64:if(b.Long)try{return d(g,!1)}catch(e){a(typeof g,e.message)}else a(typeof g,\"requires Long.js\");case b.TYPES.uint64:case b.TYPES.fixed64:if(b.Long)try{return d(g,\n!0)}catch(l){a(typeof g,l.message)}else a(typeof g,\"requires Long.js\");case b.TYPES.bool:return\"boolean\"!==typeof g&&a(typeof g,\"not a boolean\"),g;case b.TYPES[\"float\"]:case b.TYPES[\"double\"]:return\"number\"!==typeof g&&a(typeof g,\"not a number\"),g;case b.TYPES.string:return\"string\"===typeof g||g&&g instanceof String||a(typeof g,\"not a string\"),\"\"+g;case b.TYPES.bytes:return h.isByteBuffer(g)?g:h.wrap(g,\"base64\");case b.TYPES[\"enum\"]:for(var f=this.resolvedType.getChildren(b.Reflect.Enum.Value),k=\n0;k<f.length;k++)if(f[k].name==g||f[k].id==g)return f[k].id;if(\"proto3\"===this.syntax)return(\"number\"!==typeof g||g===g&&0!==g%1)&&a(typeof g,\"not an integer\"),(4294967295<g||0>g)&&a(typeof g,\"not in range for uint32\"),g;a(g,\"not a valid enum value\");case b.TYPES.group:case b.TYPES.message:g&&\"object\"===typeof g||a(typeof g,\"object expected\");if(g instanceof this.resolvedType.clazz)return g;if(g instanceof b.Builder.Message){var f={},k;for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=f}return new this.resolvedType.clazz(g)}throw Error(\"[INTERNAL] Illegal value for \"+\nthis.toString(!0)+\": \"+g+\" (undefined type \"+this.type+\")\");};f.calculateLength=function(g,a){if(null===a)return 0;var c;switch(this.type){case b.TYPES.int32:return 0>a?h.calculateVarint64(a):h.calculateVarint32(a);case b.TYPES.uint32:return h.calculateVarint32(a);case b.TYPES.sint32:return h.calculateVarint32(h.zigZagEncode32(a));case b.TYPES.fixed32:case b.TYPES.sfixed32:case b.TYPES[\"float\"]:return 4;case b.TYPES.int64:case b.TYPES.uint64:return h.calculateVarint64(a);case b.TYPES.sint64:return h.calculateVarint64(h.zigZagEncode64(a));\ncase b.TYPES.fixed64:case b.TYPES.sfixed64:return 8;case b.TYPES.bool:return 1;case b.TYPES[\"enum\"]:return h.calculateVarint32(a);case b.TYPES[\"double\"]:return 8;case b.TYPES.string:return c=h.calculateUTF8Bytes(a),h.calculateVarint32(c)+c;case b.TYPES.bytes:if(0>a.remaining())throw Error(\"Illegal value for \"+this.toString(!0)+\": \"+a.remaining()+\" bytes remaining\");return h.calculateVarint32(a.remaining())+a.remaining();case b.TYPES.message:return c=this.resolvedType.calculate(a),h.calculateVarint32(c)+\nc;case b.TYPES.group:return c=this.resolvedType.calculate(a),c+h.calculateVarint32(g<<3|b.WIRE_TYPES.ENDGROUP)}throw Error(\"[INTERNAL] Illegal value to encode in \"+this.toString(!0)+\": \"+a+\" (unknown type)\");};f.encodeValue=function(g,a,c){if(null===a)return c;switch(this.type){case b.TYPES.int32:0>a?c.writeVarint64(a):c.writeVarint32(a);break;case b.TYPES.uint32:c.writeVarint32(a);break;case b.TYPES.sint32:c.writeVarint32ZigZag(a);break;case b.TYPES.fixed32:c.writeUint32(a);break;case b.TYPES.sfixed32:c.writeInt32(a);\nbreak;case b.TYPES.int64:case b.TYPES.uint64:c.writeVarint64(a);break;case b.TYPES.sint64:c.writeVarint64ZigZag(a);break;case b.TYPES.fixed64:c.writeUint64(a);break;case b.TYPES.sfixed64:c.writeInt64(a);break;case b.TYPES.bool:\"string\"===typeof a?c.writeVarint32(\"false\"===a.toLowerCase()?0:!!a):c.writeVarint32(a?1:0);break;case b.TYPES[\"enum\"]:c.writeVarint32(a);break;case b.TYPES[\"float\"]:c.writeFloat32(a);break;case b.TYPES[\"double\"]:c.writeFloat64(a);break;case b.TYPES.string:c.writeVString(a);\nbreak;case b.TYPES.bytes:if(0>a.remaining())throw Error(\"Illegal value for \"+this.toString(!0)+\": \"+a.remaining()+\" bytes remaining\");g=a.offset;c.writeVarint32(a.remaining());c.append(a);a.offset=g;break;case b.TYPES.message:g=(new h).LE();this.resolvedType.encode(a,g);c.writeVarint32(g.offset);c.append(g.flip());break;case b.TYPES.group:this.resolvedType.encode(a,c);c.writeVarint32(g<<3|b.WIRE_TYPES.ENDGROUP);break;default:throw Error(\"[INTERNAL] Illegal value to encode in \"+this.toString(!0)+\": \"+\na+\" (unknown type)\");}return c};f.decode=function(a,c,d){if(c!=this.type.wireType)throw Error(\"Unexpected wire type for element\");switch(this.type){case b.TYPES.int32:return a.readVarint32()|0;case b.TYPES.uint32:return a.readVarint32()>>>0;case b.TYPES.sint32:return a.readVarint32ZigZag()|0;case b.TYPES.fixed32:return a.readUint32()>>>0;case b.TYPES.sfixed32:return a.readInt32()|0;case b.TYPES.int64:return a.readVarint64();case b.TYPES.uint64:return a.readVarint64().toUnsigned();case b.TYPES.sint64:return a.readVarint64ZigZag();\ncase b.TYPES.fixed64:return a.readUint64();case b.TYPES.sfixed64:return a.readInt64();case b.TYPES.bool:return!!a.readVarint32();case b.TYPES[\"enum\"]:return a.readVarint32();case b.TYPES[\"float\"]:return a.readFloat();case b.TYPES[\"double\"]:return a.readDouble();case b.TYPES.string:return a.readVString();case b.TYPES.bytes:d=a.readVarint32();if(a.remaining()<d)throw Error(\"Illegal number of bytes for \"+this.toString(!0)+\": \"+d+\" required but got only \"+a.remaining());c=a.clone();c.limit=c.offset+d;\na.offset+=d;return c;case b.TYPES.message:return d=a.readVarint32(),this.resolvedType.decode(a,d);case b.TYPES.group:return this.resolvedType.decode(a,-1,d)}throw Error(\"[INTERNAL] Illegal decode type\");};f.valueFromString=function(a){if(!this.isMapKey)throw Error(\"valueFromString() called on non-map-key element\");switch(this.type){case b.TYPES.int32:case b.TYPES.sint32:case b.TYPES.sfixed32:case b.TYPES.uint32:case b.TYPES.fixed32:return this.verifyValue(parseInt(a));case b.TYPES.int64:case b.TYPES.sint64:case b.TYPES.sfixed64:case b.TYPES.uint64:case b.TYPES.fixed64:return this.verifyValue(a);\ncase b.TYPES.bool:return\"true\"===a;case b.TYPES.string:return this.verifyValue(a);case b.TYPES.bytes:return h.fromBinary(a)}};f.valueToString=function(a){if(!this.isMapKey)throw Error(\"valueToString() called on non-map-key element\");return this.type===b.TYPES.bytes?a.toString(\"binary\"):a.toString()};q.Element=e;var s=function(b,c,d,e,l,f){a.call(this,b,c,d,e,f);this.className=\"Message\";this.extensions=void 0;this.clazz=null;this.isGroup=!!l;this._fieldsByName=this._fieldsById=this._fields=null},f=\ns.prototype=Object.create(a.prototype);f.build=function(a){if(this.clazz&&!a)return this.clazz;a=function(b,a){function c(a,g,d,e){if(null===a||\"object\"!==typeof a){if(e&&e instanceof b.Reflect.Enum){var m=b.Reflect.Enum.getName(e.object,a);if(null!==m)return m}return a}if(h.isByteBuffer(a))return g?a.toBase64():a.toBuffer();if(b.Long.isLong(a))return d?a.toString():b.Long.fromValue(a);var l;if(Array.isArray(a))return l=[],a.forEach(function(a,b){l[b]=c(a,g,d,e)}),l;l={};if(a instanceof b.Map){for(var m=\na.entries(),f=m.next();!f.done;f=m.next())l[a.keyElem.valueToString(f.value[0])]=c(f.value[1],g,d,a.valueElem.resolvedType);return l}var m=a.$type,f=void 0,k;for(k in a)a.hasOwnProperty(k)&&(m&&(f=m.getChild(k))?l[k]=c(a[k],g,d,f.resolvedType):l[k]=c(a[k],g,d));return l}var g=a.getChildren(b.Reflect.Message.Field),d=a.getChildren(b.Reflect.Message.OneOf),e=function(c,m){b.Builder.Message.call(this);for(var l=0,f=d.length;l<f;++l)this[d[l].name]=null;l=0;for(f=g.length;l<f;++l){var k=g[l];this[k.name]=\nk.repeated?[]:k.map?new b.Map(k):null;!k.required&&\"proto3\"!==a.syntax||null===k.defaultValue||(this[k.name]=k.defaultValue)}if(0<arguments.length)if(1!==arguments.length||null===c||\"object\"!==typeof c||!(\"function\"!==typeof c.encode||c instanceof e)||Array.isArray(c)||c instanceof b.Map||h.isByteBuffer(c)||c instanceof ArrayBuffer||b.Long&&c instanceof b.Long)for(l=0,f=arguments.length;l<f;++l)\"undefined\"!==typeof(k=arguments[l])&&this.$set(g[l].name,k);else this.$set(c)},m=e.prototype=Object.create(b.Builder.Message.prototype);\nm.add=function(c,g,d){var e=a._fieldsByName[c];if(!d){if(!e)throw Error(this+\"#\"+c+\" is undefined\");if(!(e instanceof b.Reflect.Message.Field))throw Error(this+\"#\"+c+\" is not a field: \"+e.toString(!0));if(!e.repeated)throw Error(this+\"#\"+c+\" is not a repeated field\");g=e.verifyValue(g,!0)}null===this[c]&&(this[c]=[]);this[c].push(g);return this};m.$add=m.add;m.set=function(c,g,d){if(c&&\"object\"===typeof c){d=g;for(var e in c)c.hasOwnProperty(e)&&\"undefined\"!==typeof(g=c[e])&&this.$set(e,g,d);return this}e=\na._fieldsByName[c];if(d)this[c]=g;else{if(!e)throw Error(this+\"#\"+c+\" is not a field: undefined\");if(!(e instanceof b.Reflect.Message.Field))throw Error(this+\"#\"+c+\" is not a field: \"+e.toString(!0));this[e.name]=g=e.verifyValue(g)}e&&e.oneof&&(d=this[e.oneof.name],null!==g?(null!==d&&d!==e.name&&(this[d]=null),this[e.oneof.name]=e.name):d===c&&(this[e.oneof.name]=null));return this};m.$set=m.set;m.get=function(c,g){if(g)return this[c];var d=a._fieldsByName[c];if(!(d&&d instanceof b.Reflect.Message.Field))throw Error(this+\n\"#\"+c+\" is not a field: undefined\");if(!(d instanceof b.Reflect.Message.Field))throw Error(this+\"#\"+c+\" is not a field: \"+d.toString(!0));return this[d.name]};m.$get=m.get;for(var l=0;l<g.length;l++){var f=g[l];f instanceof b.Reflect.Message.ExtensionField||a.builder.options.populateAccessors&&function(b){var c=b.originalName.replace(/(_[a-zA-Z])/g,function(a){return a.toUpperCase().replace(\"_\",\"\")}),c=c.substring(0,1).toUpperCase()+c.substring(1),g=b.originalName.replace(/([A-Z])/g,function(a){return\"_\"+\na}),d=function(a,c){this[b.name]=c?a:b.verifyValue(a);return this},e=function(){return this[b.name]};null===a.getChild(\"set\"+c)&&(m[\"set\"+c]=d);null===a.getChild(\"set_\"+g)&&(m[\"set_\"+g]=d);null===a.getChild(\"get\"+c)&&(m[\"get\"+c]=e);null===a.getChild(\"get_\"+g)&&(m[\"get_\"+g]=e)}(f)}m.encode=function(b,c){\"boolean\"===typeof b&&(c=b,b=void 0);var g=!1;b||(b=new h,g=!0);var d=b.littleEndian;try{return a.encode(this,b.LE(),c),(g?b.flip():b).LE(d)}catch(e){throw b.LE(d),e;}};e.encode=function(b,a,c){return(new e(b)).encode(a,\nc)};m.calculate=function(){return a.calculate(this)};m.encodeDelimited=function(b,c){var g=!1;b||(b=new h,g=!0);var d=(new h).LE();a.encode(this,d,c).flip();b.writeVarint32(d.remaining());b.append(d);return g?b.flip():b};m.encodeAB=function(){try{return this.encode().toArrayBuffer()}catch(b){throw b.encoded&&(b.encoded=b.encoded.toArrayBuffer()),b;}};m.toArrayBuffer=m.encodeAB;m.encodeNB=function(){try{return this.encode().toBuffer()}catch(b){throw b.encoded&&(b.encoded=b.encoded.toBuffer()),b;}};\nm.toBuffer=m.encodeNB;m.encode64=function(){try{return this.encode().toBase64()}catch(b){throw b.encoded&&(b.encoded=b.encoded.toBase64()),b;}};m.toBase64=m.encode64;m.encodeHex=function(){try{return this.encode().toHex()}catch(b){throw b.encoded&&(b.encoded=b.encoded.toHex()),b;}};m.toHex=m.encodeHex;m.toRaw=function(b,a){return c(this,!!b,!!a,this.$type)};m.encodeJSON=function(){return JSON.stringify(c(this,!0,!0,this.$type))};e.decode=function(b,c,g){\"string\"===typeof c&&(g=c);\"string\"===typeof b&&\n(b=h.wrap(b,g?g:\"base64\"));b=h.isByteBuffer(b)?b:h.wrap(b);c=b.littleEndian;try{var d=a.decode(b.LE());b.LE(c);return d}catch(e){throw b.LE(c),e;}};e.decodeDelimited=function(b,c){\"string\"===typeof b&&(b=h.wrap(b,c?c:\"base64\"));b=h.isByteBuffer(b)?b:h.wrap(b);if(1>b.remaining())return null;var g=b.offset,d=b.readVarint32();if(b.remaining()<d)return b.offset=g,null;try{var e=a.decode(b.slice(b.offset,b.offset+d).LE());b.offset+=d;return e}catch(m){throw b.offset+=d,m;}};e.decode64=function(b){return e.decode(b,\n\"base64\")};e.decodeHex=function(b){return e.decode(b,\"hex\")};e.decodeJSON=function(b){return new e(JSON.parse(b))};m.toString=function(){return a.toString()};Object.defineProperty&&(Object.defineProperty(e,\"$options\",{value:a.buildOpt()}),Object.defineProperty(m,\"$options\",{value:e.$options}),Object.defineProperty(e,\"$type\",{value:a}),Object.defineProperty(m,\"$type\",{value:a}));return e}(b,this);this._fields=[];this._fieldsById={};this._fieldsByName={};for(var c=0,d=this.children.length,e;c<d;c++)if(e=\nthis.children[c],e instanceof t||e instanceof s||e instanceof w){if(a.hasOwnProperty(e.name))throw Error(\"Illegal reflect child of \"+this.toString(!0)+\": \"+e.toString(!0)+\" cannot override static property '\"+e.name+\"'\");a[e.name]=e.build()}else if(e instanceof s.Field)e.build(),this._fields.push(e),this._fieldsById[e.id]=e,this._fieldsByName[e.name]=e;else if(!(e instanceof s.OneOf||e instanceof l))throw Error(\"Illegal reflect child of \"+this.toString(!0)+\": \"+this.children[c].toString(!0));return this.clazz=\na};f.encode=function(b,a,c){for(var d=null,e,l=0,f=this._fields.length,k;l<f;++l)e=this._fields[l],k=b[e.name],e.required&&null===k?null===d&&(d=e):e.encode(c?k:e.verifyValue(k),a,b);if(null!==d)throw b=Error(\"Missing at least one required field for \"+this.toString(!0)+\": \"+d),b.encoded=a,b;return a};f.calculate=function(b){for(var a=0,c=0,d=this._fields.length,e,l;c<d;++c){e=this._fields[c];l=b[e.name];if(e.required&&null===l)throw Error(\"Missing at least one required field for \"+this.toString(!0)+\n\": \"+e);a+=e.calculate(l,b)}return a};f.decode=function(a,c,d){c=\"number\"===typeof c?c:-1;for(var e=a.offset,l=new this.clazz,f,k,s;a.offset<e+c||-1===c&&0<a.remaining();){f=a.readVarint32();k=f&7;s=f>>>3;if(k===b.WIRE_TYPES.ENDGROUP){if(s!==d)throw Error(\"Illegal group end indicator for \"+this.toString(!0)+\": \"+s+\" (\"+(d?d+\" expected\":\"not a group\")+\")\");break}if(f=this._fieldsById[s])f.repeated&&!f.options.packed?l[f.name].push(f.decode(k,a)):f.map?(k=f.decode(k,a),l[f.name].set(k[0],k[1])):(l[f.name]=\nf.decode(k,a),f.oneof&&(k=l[f.oneof.name],null!==k&&k!==f.name&&(l[k]=null),l[f.oneof.name]=f.name));else switch(k){case b.WIRE_TYPES.VARINT:a.readVarint32();break;case b.WIRE_TYPES.BITS32:a.offset+=4;break;case b.WIRE_TYPES.BITS64:a.offset+=8;break;case b.WIRE_TYPES.LDELIM:f=a.readVarint32();a.offset+=f;break;case b.WIRE_TYPES.STARTGROUP:for(;p(s,a););break;default:throw Error(\"Illegal wire type for unknown field \"+s+\" in \"+this.toString(!0)+\"#decode: \"+k);}}a=0;for(c=this._fields.length;a<c;++a)if(f=\nthis._fields[a],null===l[f.name])if(\"proto3\"===this.syntax)l[f.name]=f.defaultValue;else{if(f.required)throw a=Error(\"Missing at least one required field for \"+this.toString(!0)+\": \"+f.name),a.decoded=l,a;b.populateDefaults&&null!==f.defaultValue&&(l[f.name]=f.defaultValue)}return l};q.Message=s;var c=function(a,c,d,e,l,f,k,h,r,p){n.call(this,a,c,f);this.className=\"Message.Field\";this.required=\"required\"===d;this.repeated=\"repeated\"===d;this.map=\"map\"===d;this.keyType=e||null;this.type=l;this.resolvedType=\nnull;this.id=k;this.options=h||{};this.defaultValue=null;this.oneof=r||null;this.syntax=p||\"proto2\";this.originalName=this.name;this.keyElement=this.element=null;!this.builder.options.convertFieldsToCamelCase||this instanceof s.ExtensionField||(this.name=b.Util.toCamelCase(this.name))},f=c.prototype=Object.create(n.prototype);f.build=function(){this.element=new e(this.type,this.resolvedType,!1,this.syntax);this.map&&(this.keyElement=new e(this.keyType,void 0,!0,this.syntax));\"proto3\"!==this.syntax||\nthis.repeated||this.map?\"undefined\"!==typeof this.options[\"default\"]&&(this.defaultValue=this.verifyValue(this.options[\"default\"])):this.defaultValue=e.defaultFieldValue(this.type)};f.verifyValue=function(a,c){function d(b,a){throw Error(\"Illegal value for \"+e.toString(!0)+\" of type \"+e.type.name+\": \"+b+\" (\"+a+\")\");}c=c||!1;var e=this;if(null===a)return this.required&&d(typeof a,\"required\"),\"proto3\"===this.syntax&&this.type!==b.TYPES.message&&d(typeof a,\"proto3 field without field presence cannot be null\"),\nnull;var l;if(this.repeated&&!c){Array.isArray(a)||(a=[a]);var f=[];for(l=0;l<a.length;l++)f.push(this.element.verifyValue(a[l]));return f}if(this.map&&!c){if(a instanceof b.Map)return a;a instanceof Object||d(typeof a,\"expected ProtoBuf.Map or raw object for map field\");return new b.Map(this,a)}!this.repeated&&Array.isArray(a)&&d(typeof a,\"no array expected\");return this.element.verifyValue(a)};f.hasWirePresence=function(a,c){if(\"proto3\"!==this.syntax)return null!==a;if(this.oneof&&c[this.oneof.name]===\nthis.name)return!0;switch(this.type){case b.TYPES.int32:case b.TYPES.sint32:case b.TYPES.sfixed32:case b.TYPES.uint32:case b.TYPES.fixed32:return 0!==a;case b.TYPES.int64:case b.TYPES.sint64:case b.TYPES.sfixed64:case b.TYPES.uint64:case b.TYPES.fixed64:return 0!==a.low||0!==a.high;case b.TYPES.bool:return a;case b.TYPES[\"float\"]:case b.TYPES[\"double\"]:return 0!==a;case b.TYPES.string:return 0<a.length;case b.TYPES.bytes:return 0<a.remaining();case b.TYPES[\"enum\"]:return 0!==a;case b.TYPES.message:return null!==\na;default:return!0}};f.encode=function(a,c,d){if(null===this.type||\"object\"!==typeof this.type)throw Error(\"[INTERNAL] Unresolved type in \"+this.toString(!0)+\": \"+this.type);if(null===a||this.repeated&&0==a.length)return c;try{if(this.repeated){var e;if(this.options.packed&&0<=b.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)){c.writeVarint32(this.id<<3|b.WIRE_TYPES.LDELIM);c.ensureCapacity(c.offset+=1);var l=c.offset;for(e=0;e<a.length;e++)this.element.encodeValue(this.id,a[e],c);var f=c.offset-\nl,k=h.calculateVarint32(f);if(1<k){var s=c.slice(l,c.offset),l=l+(k-1);c.offset=l;c.append(s)}c.writeVarint32(f,l-k)}else for(e=0;e<a.length;e++)c.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,a[e],c)}else this.map?a.forEach(function(a,d,e){e=h.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,d)+h.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,a);c.writeVarint32(this.id<<3|b.WIRE_TYPES.LDELIM);c.writeVarint32(e);\nc.writeVarint32(8|this.keyType.wireType);this.keyElement.encodeValue(1,d,c);c.writeVarint32(16|this.type.wireType);this.element.encodeValue(2,a,c)},this):this.hasWirePresence(a,d)&&(c.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,a,c))}catch(r){throw Error(\"Illegal value for \"+this.toString(!0)+\": \"+a+\" (\"+r+\")\");}return c};f.calculate=function(a,c){a=this.verifyValue(a);if(null===this.type||\"object\"!==typeof this.type)throw Error(\"[INTERNAL] Unresolved type in \"+this.toString(!0)+\n\": \"+this.type);if(null===a||this.repeated&&0==a.length)return 0;var d=0;try{if(this.repeated){var e,l;if(this.options.packed&&0<=b.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)){d+=h.calculateVarint32(this.id<<3|b.WIRE_TYPES.LDELIM);for(e=l=0;e<a.length;e++)l+=this.element.calculateLength(this.id,a[e]);d+=h.calculateVarint32(l);d+=l}else for(e=0;e<a.length;e++)d+=h.calculateVarint32(this.id<<3|this.type.wireType),d+=this.element.calculateLength(this.id,a[e])}else this.map?a.forEach(function(a,\nc,e){a=h.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,c)+h.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,a);d+=h.calculateVarint32(this.id<<3|b.WIRE_TYPES.LDELIM);d+=h.calculateVarint32(a);d+=a},this):this.hasWirePresence(a,c)&&(d+=h.calculateVarint32(this.id<<3|this.type.wireType),d+=this.element.calculateLength(this.id,a))}catch(f){throw Error(\"Illegal value for \"+this.toString(!0)+\": \"+a+\" (\"+f+\")\");}return d};f.decode=function(a,c,d){if(!(!this.map&&\na==this.type.wireType||!d&&this.repeated&&this.options.packed&&a==b.WIRE_TYPES.LDELIM||this.map&&a==b.WIRE_TYPES.LDELIM))throw Error(\"Illegal wire type for field \"+this.toString(!0)+\": \"+a+\" (\"+this.type.wireType+\" expected)\");if(a==b.WIRE_TYPES.LDELIM&&this.repeated&&this.options.packed&&0<=b.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)&&!d){a=c.readVarint32();a=c.offset+a;for(d=[];c.offset<a;)d.push(this.decode(this.type.wireType,c,!0));return d}if(this.map){var l=e.defaultFieldValue(this.keyType);\nd=e.defaultFieldValue(this.type);a=c.readVarint32();if(c.remaining()<a)throw Error(\"Illegal number of bytes for \"+this.toString(!0)+\": \"+a+\" required but got only \"+c.remaining());var f=c.clone();f.limit=f.offset+a;for(c.offset+=a;0<f.remaining();)if(c=f.readVarint32(),a=c&7,c>>>=3,1===c)l=this.keyElement.decode(f,a,c);else if(2===c)d=this.element.decode(f,a,c);else throw Error(\"Unexpected tag in map field key/value submessage\");return[l,d]}return this.element.decode(c,a,this.id)};q.Message.Field=\nc;f=function(a,b,d,e,l,f,k){c.call(this,a,b,d,null,e,l,f,k)};f.prototype=Object.create(c.prototype);q.Message.ExtensionField=f;q.Message.OneOf=function(a,b,c){n.call(this,a,b,c);this.fields=[]};var t=function(b,c,d,e,l){a.call(this,b,c,d,e,l);this.className=\"Enum\";this.object=null};t.getName=function(a,b){for(var c=Object.keys(a),d=0,e;d<c.length;++d)if(a[e=c[d]]===b)return e;return null};(t.prototype=Object.create(a.prototype)).build=function(a){if(this.object&&!a)return this.object;a=new b.Builder.Enum;\nfor(var c=this.getChildren(t.Value),d=0,e=c.length;d<e;++d)a[c[d].name]=c[d].id;Object.defineProperty&&Object.defineProperty(a,\"$options\",{value:this.buildOpt(),enumerable:!1});return this.object=a};q.Enum=t;f=function(a,b,c,d){n.call(this,a,b,c);this.className=\"Enum.Value\";this.id=d};f.prototype=Object.create(n.prototype);q.Enum.Value=f;var l=function(a,b,c,d){n.call(this,a,b,c);this.field=d};l.prototype=Object.create(n.prototype);q.Extension=l;var w=function(b,c,d,e){a.call(this,b,c,d,e);this.className=\n\"Service\";this.clazz=null};(w.prototype=Object.create(a.prototype)).build=function(a){return this.clazz&&!a?this.clazz:this.clazz=function(a,b){for(var c=function(b){a.Builder.Service.call(this);this.rpcImpl=b||function(a,b,c){setTimeout(c.bind(this,Error(\"Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services\")),0)}},d=c.prototype=Object.create(a.Builder.Service.prototype),e=b.getChildren(a.Reflect.Service.RPCMethod),l=0;l<e.length;l++)(function(a){d[a.name]=function(c,d){try{try{c=\na.resolvedRequestType.clazz.decode(h.wrap(c))}catch(e){if(!(e instanceof TypeError))throw e;}if(null===c||\"object\"!==typeof c)throw Error(\"Illegal arguments\");c instanceof a.resolvedRequestType.clazz||(c=new a.resolvedRequestType.clazz(c));this.rpcImpl(a.fqn(),c,function(c,e){if(c)d(c);else{null===e&&(e=\"\");try{e=a.resolvedResponseType.clazz.decode(e)}catch(l){}e&&e instanceof a.resolvedResponseType.clazz?d(null,e):d(Error(\"Illegal response type received in service method \"+b.name+\"#\"+a.name))}})}catch(l){setTimeout(d.bind(this,\nl),0)}};c[a.name]=function(b,d,e){(new c(b))[a.name](d,e)};Object.defineProperty&&(Object.defineProperty(c[a.name],\"$options\",{value:a.buildOpt()}),Object.defineProperty(d[a.name],\"$options\",{value:c[a.name].$options}))})(e[l]);Object.defineProperty&&(Object.defineProperty(c,\"$options\",{value:b.buildOpt()}),Object.defineProperty(d,\"$options\",{value:c.$options}),Object.defineProperty(c,\"$type\",{value:b}),Object.defineProperty(d,\"$type\",{value:b}));return c}(b,this)};q.Service=w;var v=function(a,b,\nc,d){n.call(this,a,b,c);this.className=\"Service.Method\";this.options=d||{}};(v.prototype=Object.create(n.prototype)).buildOpt=k.buildOpt;q.Service.Method=v;k=function(a,b,c,d,e,l,f,k){v.call(this,a,b,c,k);this.className=\"Service.RPCMethod\";this.requestName=d;this.responseName=e;this.requestStream=l;this.responseStream=f;this.resolvedResponseType=this.resolvedRequestType=null};k.prototype=Object.create(v.prototype);q.Service.RPCMethod=k;return q}(d);d.Builder=function(b,d,h){function q(a){a.messages&&\na.messages.forEach(function(b){b.syntax=a.syntax;q(b)});a.enums&&a.enums.forEach(function(b){b.syntax=a.syntax})}var n=function(a){this.ptr=this.ns=new h.Namespace(this,null,\"\");this.resolved=!1;this.result=null;this.files={};this.importRoot=null;this.options=a||{}},k=n.prototype;n.isMessage=function(a){return\"string\"!==typeof a.name||\"undefined\"!==typeof a.values||\"undefined\"!==typeof a.rpc?!1:!0};n.isMessageField=function(a){return\"string\"!==typeof a.rule||\"string\"!==typeof a.name||\"string\"!==typeof a.type||\n\"undefined\"===typeof a.id?!1:!0};n.isEnum=function(a){return\"string\"===typeof a.name&&\"undefined\"!==typeof a.values&&Array.isArray(a.values)&&0!==a.values.length?!0:!1};n.isService=function(a){return\"string\"===typeof a.name&&\"object\"===typeof a.rpc&&a.rpc?!0:!1};n.isExtend=function(a){return\"string\"!==typeof a.ref?!1:!0};k.reset=function(){this.ptr=this.ns;return this};k.define=function(a){if(\"string\"!==typeof a||!d.TYPEREF.test(a))throw Error(\"illegal namespace: \"+a);a.split(\".\").forEach(function(a){var b=\nthis.ptr.getChild(a);null===b&&this.ptr.addChild(b=new h.Namespace(this,this.ptr,a));this.ptr=b},this);return this};k.create=function(a){if(!a)return this;if(Array.isArray(a)){if(0===a.length)return this;a=a.slice()}else a=[a];for(var d=[a];0<d.length;){a=d.pop();if(!Array.isArray(a))throw Error(\"not a valid namespace: \"+JSON.stringify(a));for(;0<a.length;){var f=a.shift();if(n.isMessage(f)){var k=new h.Message(this,this.ptr,f.name,f.options,f.isGroup,f.syntax),c={};f.oneofs&&Object.keys(f.oneofs).forEach(function(a){k.addChild(c[a]=\nnew h.Message.OneOf(this,k,a))},this);f.fields&&f.fields.forEach(function(a){if(null!==k.getChild(a.id|0))throw Error(\"duplicate or invalid field id in \"+k.name+\": \"+a.id);if(a.options&&\"object\"!==typeof a.options)throw Error(\"illegal field options in \"+k.name+\"#\"+a.name);var b=null;if(\"string\"===typeof a.oneof&&!(b=c[a.oneof]))throw Error(\"illegal oneof in \"+k.name+\"#\"+a.name+\": \"+a.oneof);a=new h.Message.Field(this,k,a.rule,a.keytype,a.type,a.name,a.id,a.options,b,f.syntax);b&&b.fields.push(a);\nk.addChild(a)},this);var r=[];f.enums&&f.enums.forEach(function(a){r.push(a)});f.messages&&f.messages.forEach(function(a){r.push(a)});f.services&&f.services.forEach(function(a){r.push(a)});f.extensions&&(k.extensions=\"number\"===typeof f.extensions[0]?[f.extensions]:f.extensions);this.ptr.addChild(k);if(0<r.length){d.push(a);a=r;r=null;this.ptr=k;k=null;continue}r=null}else if(n.isEnum(f))k=new h.Enum(this,this.ptr,f.name,f.options,f.syntax),f.values.forEach(function(a){k.addChild(new h.Enum.Value(this,\nk,a.name,a.id))},this),this.ptr.addChild(k);else if(n.isService(f))k=new h.Service(this,this.ptr,f.name,f.options),Object.keys(f.rpc).forEach(function(a){var b=f.rpc[a];k.addChild(new h.Service.RPCMethod(this,k,a,b.request,b.response,!!b.request_stream,!!b.response_stream,b.options))},this),this.ptr.addChild(k);else if(n.isExtend(f))if(k=this.ptr.resolve(f.ref,!0))f.fields.forEach(function(a){if(null!==k.getChild(a.id|0))throw Error(\"duplicate extended field id in \"+k.name+\": \"+a.id);if(k.extensions){var c=\n!1;k.extensions.forEach(function(b){a.id>=b[0]&&a.id<=b[1]&&(c=!0)});if(!c)throw Error(\"illegal extended field id in \"+k.name+\": \"+a.id+\" (not within valid ranges)\");}var d=a.name;this.options.convertFieldsToCamelCase&&(d=b.Util.toCamelCase(d));var d=new h.Message.ExtensionField(this,k,a.rule,a.type,this.ptr.fqn()+\".\"+d,a.id,a.options),e=new h.Extension(this,this.ptr,a.name,d);d.extension=e;this.ptr.addChild(e);k.addChild(d)},this);else{if(!/\\.?google\\.protobuf\\./.test(f.ref))throw Error(\"extended message \"+\nf.ref+\" is not defined\");}else throw Error(\"not a valid definition: \"+JSON.stringify(f));k=f=null}a=null;this.ptr=this.ptr.parent}this.resolved=!1;this.result=null;return this};k[\"import\"]=function(a,d){var k=\"/\";if(\"string\"===typeof d){b.Util.IS_NODE&&(d=require(\"path\").resolve(d));if(!0===this.files[d])return this.reset();this.files[d]=!0}else if(\"object\"===typeof d){var h=d.root;b.Util.IS_NODE&&(h=require(\"path\").resolve(h));if(0<=h.indexOf(\"\\\\\")||0<=d.file.indexOf(\"\\\\\"))k=\"\\\\\";h=h+k+d.file;if(!0===\nthis.files[h])return this.reset();this.files[h]=!0}if(a.imports&&0<a.imports.length){var c=!1;if(\"object\"===typeof d){if(this.importRoot=d.root,c=!0,h=this.importRoot,d=d.file,0<=h.indexOf(\"\\\\\")||0<=d.indexOf(\"\\\\\"))k=\"\\\\\"}else\"string\"===typeof d?this.importRoot?h=this.importRoot:0<=d.indexOf(\"/\")?(h=d.replace(/\\/[^\\/]*$/,\"\"),\"\"===h&&(h=\"/\")):0<=d.indexOf(\"\\\\\")?(h=d.replace(/\\\\[^\\\\]*$/,\"\"),k=\"\\\\\"):h=\".\":h=null;for(var r=0;r<a.imports.length;r++)if(\"string\"===typeof a.imports[r]){if(!h)throw Error(\"cannot determine import root\");\nvar l=a.imports[r];if(\"google/protobuf/descriptor.proto\"!==l&&(l=h+k+l,!0!==this.files[l])){/\\.proto$/i.test(l)&&!b.DotProto&&(l=l.replace(/\\.proto$/,\".json\"));var n=b.Util.fetch(l);if(null===n)throw Error(\"failed to import '\"+l+\"' in '\"+d+\"': file not found\");if(/\\.json$/i.test(l))this[\"import\"](JSON.parse(n+\"\"),l);else this[\"import\"](b.DotProto.Parser.parse(n),l)}}else if(d)if(/\\.(\\w+)$/.test(d))this[\"import\"](a.imports[r],d.replace(/^(.+)\\.(\\w+)$/,function(a,b,c){return b+\"_import\"+r+\".\"+c}));\nelse this[\"import\"](a.imports[r],d+\"_import\"+r);else this[\"import\"](a.imports[r]);c&&(this.importRoot=null)}a[\"package\"]&&this.define(a[\"package\"]);a.syntax&&q(a);var p=this.ptr;a.options&&Object.keys(a.options).forEach(function(b){p.options[b]=a.options[b]});a.messages&&(this.create(a.messages),this.ptr=p);a.enums&&(this.create(a.enums),this.ptr=p);a.services&&(this.create(a.services),this.ptr=p);a[\"extends\"]&&this.create(a[\"extends\"]);return this.reset()};k.resolveAll=function(){var a;if(null==\nthis.ptr||\"object\"===typeof this.ptr.type)return this;if(this.ptr instanceof h.Namespace)this.ptr.children.forEach(function(a){this.ptr=a;this.resolveAll()},this);else if(this.ptr instanceof h.Message.Field){if(d.TYPE.test(this.ptr.type))this.ptr.type=b.TYPES[this.ptr.type];else{if(!d.TYPEREF.test(this.ptr.type))throw Error(\"illegal type reference in \"+this.ptr.toString(!0)+\": \"+this.ptr.type);a=(this.ptr instanceof h.Message.ExtensionField?this.ptr.extension.parent:this.ptr.parent).resolve(this.ptr.type,\n!0);if(!a)throw Error(\"unresolvable type reference in \"+this.ptr.toString(!0)+\": \"+this.ptr.type);this.ptr.resolvedType=a;if(a instanceof h.Enum){if(this.ptr.type=b.TYPES[\"enum\"],\"proto3\"===this.ptr.syntax&&\"proto3\"!==a.syntax)throw Error(\"proto3 message cannot reference proto2 enum\");}else if(a instanceof h.Message)this.ptr.type=a.isGroup?b.TYPES.group:b.TYPES.message;else throw Error(\"illegal type reference in \"+this.ptr.toString(!0)+\": \"+this.ptr.type);}if(this.ptr.map){if(!d.TYPE.test(this.ptr.keyType))throw Error(\"illegal key type for map field in \"+\nthis.ptr.toString(!0)+\": \"+this.ptr.keyType);this.ptr.keyType=b.TYPES[this.ptr.keyType]}}else if(this.ptr instanceof b.Reflect.Service.Method)if(this.ptr instanceof b.Reflect.Service.RPCMethod){a=this.ptr.parent.resolve(this.ptr.requestName,!0);if(!(a&&a instanceof b.Reflect.Message))throw Error(\"Illegal type reference in \"+this.ptr.toString(!0)+\": \"+this.ptr.requestName);this.ptr.resolvedRequestType=a;a=this.ptr.parent.resolve(this.ptr.responseName,!0);if(!(a&&a instanceof b.Reflect.Message))throw Error(\"Illegal type reference in \"+\nthis.ptr.toString(!0)+\": \"+this.ptr.responseName);this.ptr.resolvedResponseType=a}else throw Error(\"illegal service type in \"+this.ptr.toString(!0));else if(!(this.ptr instanceof b.Reflect.Message.OneOf||this.ptr instanceof b.Reflect.Extension||this.ptr instanceof b.Reflect.Enum.Value))throw Error(\"illegal object in namespace: \"+typeof this.ptr+\": \"+this.ptr);return this.reset()};k.build=function(a){this.reset();this.resolved||(this.resolveAll(),this.resolved=!0,this.result=null);null===this.result&&\n(this.result=this.ns.build());if(!a)return this.result;a=\"string\"===typeof a?a.split(\".\"):a;for(var b=this.result,d=0;d<a.length;d++)if(b[a[d]])b=b[a[d]];else{b=null;break}return b};k.lookup=function(a,b){return a?this.ns.resolve(a,b):this.ns};k.toString=function(){return\"Builder\"};n.Message=function(){};n.Enum=function(){};n.Service=function(){};return n}(d,d.Lang,d.Reflect);d.Map=function(b,d){function h(b){var a=0;return{next:function(){return a<b.length?{done:!1,value:b[a++]}:{done:!0}}}}var q=\nfunction(b,a){if(!b.map)throw Error(\"field is not a map\");this.field=b;this.keyElem=new d.Element(b.keyType,null,!0,b.syntax);this.valueElem=new d.Element(b.type,b.resolvedType,!1,b.syntax);this.map={};Object.defineProperty(this,\"size\",{get:function(){return Object.keys(this.map).length}});if(a)for(var e=Object.keys(a),f=0;f<e.length;f++){var h=this.keyElem.valueFromString(e[f]),c=this.valueElem.verifyValue(a[e[f]]);this.map[this.keyElem.valueToString(h)]={key:h,value:c}}},n=q.prototype;n.clear=function(){this.map=\n{}};n[\"delete\"]=function(b){b=this.keyElem.valueToString(this.keyElem.verifyValue(b));var a=b in this.map;delete this.map[b];return a};n.entries=function(){for(var b=[],a=Object.keys(this.map),d=0,f;d<a.length;d++)b.push([(f=this.map[a[d]]).key,f.value]);return h(b)};n.keys=function(){for(var b=[],a=Object.keys(this.map),d=0;d<a.length;d++)b.push(this.map[a[d]].key);return h(b)};n.values=function(){for(var b=[],a=Object.keys(this.map),d=0;d<a.length;d++)b.push(this.map[a[d]].value);return h(b)};n.forEach=\nfunction(b,a){for(var d=Object.keys(this.map),f=0,h;f<d.length;f++)b.call(a,(h=this.map[d[f]]).value,h.key,this)};n.set=function(b,a){var d=this.keyElem.verifyValue(b),f=this.valueElem.verifyValue(a);this.map[this.keyElem.valueToString(d)]={key:d,value:f};return this};n.get=function(b){b=this.keyElem.valueToString(this.keyElem.verifyValue(b));return b in this.map?this.map[b].value:void 0};n.has=function(b){return this.keyElem.valueToString(this.keyElem.verifyValue(b))in this.map};return q}(d,d.Reflect);\nd.loadProto=function(b,h,p){if(\"string\"===typeof h||h&&\"string\"===typeof h.file&&\"string\"===typeof h.root)p=h,h=void 0;return d.loadJson(d.DotProto.Parser.parse(b),h,p)};d.protoFromString=d.loadProto;d.loadProtoFile=function(b,h,p){h&&\"object\"===typeof h?(p=h,h=null):h&&\"function\"===typeof h||(h=null);if(h)return d.Util.fetch(\"string\"===typeof b?b:b.root+\"/\"+b.file,function(n){if(null===n)h(Error(\"Failed to fetch file\"));else try{h(null,d.loadProto(n,p,b))}catch(k){h(k)}});var q=d.Util.fetch(\"object\"===\ntypeof b?b.root+\"/\"+b.file:b);return null===q?null:d.loadProto(q,p,b)};d.protoFromFile=d.loadProtoFile;d.newBuilder=function(b){b=b||{};\"undefined\"===typeof b.convertFieldsToCamelCase&&(b.convertFieldsToCamelCase=d.convertFieldsToCamelCase);\"undefined\"===typeof b.populateAccessors&&(b.populateAccessors=d.populateAccessors);return new d.Builder(b)};d.loadJson=function(b,h,p){if(\"string\"===typeof h||h&&\"string\"===typeof h.file&&\"string\"===typeof h.root)p=h,h=null;h&&\"object\"===typeof h||(h=d.newBuilder());\n\"string\"===typeof b&&(b=JSON.parse(b));h[\"import\"](b,p);h.resolveAll();return h};d.loadJsonFile=function(b,h,p){h&&\"object\"===typeof h?(p=h,h=null):h&&\"function\"===typeof h||(h=null);if(h)return d.Util.fetch(\"string\"===typeof b?b:b.root+\"/\"+b.file,function(n){if(null===n)h(Error(\"Failed to fetch file\"));else try{h(null,d.loadJson(JSON.parse(n),p,b))}catch(k){h(k)}});var q=d.Util.fetch(\"object\"===typeof b?b.root+\"/\"+b.file:b);return null===q?null:d.loadJson(JSON.parse(q),p,b)};return d});\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(10))

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "/*!\r\n * Vue.js v2.1.3\r\n * (c) 2014-2016 Evan You\r\n * Released under the MIT License.\r\n */\r\n!function(e,t){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=t():\"function\"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){\"use strict\";function e(e){return null==e?\"\":\"object\"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(\",\"),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Ur.call(e,t)}function o(e){return\"string\"==typeof e||\"number\"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e){return null!==e&&\"object\"==typeof e}function f(e){return qr.call(e)===Wr}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&l(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(\",\")}function h(e,t){return e==t||!(!u(e)||!u(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+\"\").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(!Gr.test(e)){var t=e.split(\".\");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){di.target&&pi.push(di.target),di.target=e}function w(){di.target=pi.pop()}function x(e,t){e.__proto__=t}function C(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o])}}function k(e){if(u(e)){var t;return i(e,\"__ob__\")&&e.__ob__ instanceof yi?t=e.__ob__:gi.shouldConvert&&!oi()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new yi(e)),t}}function A(e,t,n,r){var i=new di,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return di.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&T(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=k(t),i.notify())}})}}function O(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(A(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function S(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function T(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&T(t)}function j(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&j(r,o):O(e,n,o);return e}function E(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){var n=Object.create(e||null);return t?l(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],\"string\"==typeof r&&(i=Vr(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Vr(a),o[i]=f(r)?r:{type:r};e.props=o}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];\"function\"==typeof r&&(t[n]={bind:r,update:r})}}function M(e,t,n){function r(r){var i=_i[r]||bi;u[r]=i(e[r],t[r],n,r)}L(t),D(t);var o=t.extends;if(o&&(e=\"function\"==typeof o?M(e,o.options,n):M(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof Re&&(c=c.options),e=M(e,c,n)}var l,u={};for(l in e)r(l);for(l in t)i(e,l)||r(l);return u}function P(e,t,n,r){if(\"string\"==typeof n){var i=e[t],o=i[n]||i[Vr(n)]||i[zr(Vr(n))];return o}}function R(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(B(o.type)&&(a&&!i(o,\"default\")?s=!1:\"\"!==s&&s!==Kr(e)||(s=!0)),void 0===s){s=I(r,o,e);var c=gi.shouldConvert;gi.shouldConvert=!0,k(s),gi.shouldConvert=c}return s}function I(e,t,n){if(i(t,\"default\")){var r=t.default;return u(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:\"function\"==typeof r&&t.type!==Function?r.call(e):r}}function F(e){var t=e&&e.toString().match(/^\\s*function (\\w+)/);return t&&t[1]}function B(e){if(!Array.isArray(e))return\"Boolean\"===F(e);for(var t=0,n=e.length;t<n;t++)if(\"Boolean\"===F(e[t]))return!0;return!1}function U(){wi.length=0,xi={},Ci=ki=!1}function H(){for(ki=!0,wi.sort(function(e,t){return e.id-t.id}),Ai=0;Ai<wi.length;Ai++){var e=wi[Ai],t=e.id;xi[t]=null,e.run()}ai&&li.devtools&&ai.emit(\"flush\"),U()}function V(e){var t=e.id;if(null==xi[t]){if(xi[t]=!0,ki){for(var n=wi.length-1;n>=0&&wi[n].id>e.id;)n--;wi.splice(Math.max(n,Ai)+1,0,e)}else wi.push(e);Ci||(Ci=!0,si(H))}}function z(e){Ti.clear(),J(e,Ti)}function J(e,t){var n,r,i=Array.isArray(e);if((i||u(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)J(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)J(e[r[n]],t)}}function K(e){e._watchers=[],q(e),W(e),Z(e),Y(e),Q(e)}function q(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;gi.shouldConvert=i;for(var o=function(i){var o=r[i];A(e,o,R(o,t,n,e))},a=0;a<r.length;a++)o(a);gi.shouldConvert=!0}}function W(e){var t=e.$options.data;t=e._data=\"function\"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||te(e,n[o]);k(t),t.__ob__&&t.__ob__.vmCount++}function Z(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n];\"function\"==typeof r?(ji.get=G(r,e),ji.set=p):(ji.get=r.get?r.cache!==!1?G(r.get,e):s(r.get,e):p,ji.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,ji)}}function G(e,t){var n=new Si(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),di.target&&n.depend(),n.value}}function Y(e){var t=e.$options.methods;if(t)for(var n in t)e[n]=null==t[n]?p:s(t[n],e)}function Q(e){var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)X(e,n,r[i]);else X(e,n,r)}}function X(e,t,n){var r;f(n)&&(r=n,n=n.handler),\"string\"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function ee(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,\"$data\",t),e.prototype.$set=O,e.prototype.$delete=S,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Si(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function te(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})}function ne(e){var t=new Ei(e.tag,e.data,e.children,e.text,e.elm,e.ns,e.context,e.componentOptions);return t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function re(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=ne(e[n]);return t}function ie(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var o=e[t];o?e[t]=function(){o.apply(this,arguments),n.apply(this,arguments)}:e[t]=n}}function oe(e,t,n,r,i){var o,a,s,c,l,u;for(o in e)if(a=e[o],s=t[o],a)if(s){if(a!==s)if(Array.isArray(s)){s.length=a.length;for(var f=0;f<s.length;f++)s[f]=a[f];e[o]=s}else s.fn=a,e[o]=s}else u=\"!\"===o.charAt(0),l=u?o.slice(1):o,Array.isArray(a)?n(l,a.invoker=ae(a),u):(a.invoker||(c=a,a=e[o]={},a.fn=c,a.invoker=se(a)),n(l,a.invoker,u));else;for(o in t)e[o]||(l=\"!\"===o.charAt(0)?o.slice(1):o,r(l,t[o].invoker))}function ae(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n)}}function se(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments)}}function ce(e,t,n){if(o(e))return[le(e)];if(Array.isArray(e)){for(var r=[],i=0,a=e.length;i<a;i++){var s=e[i],c=r[r.length-1];Array.isArray(s)?r.push.apply(r,ce(s,t,(n||\"\")+\"_\"+i)):o(s)?c&&c.text?c.text+=String(s):\"\"!==s&&r.push(le(s)):s instanceof Ei&&(s.text&&c&&c.text?c.isCloned||(c.text+=s.text):(t&&ue(s,t),s.tag&&null==s.key&&null!=n&&(s.key=\"__vlist\"+n+\"_\"+i+\"__\"),r.push(s)))}return r}}function le(e){return new Ei(void 0,void 0,void 0,String(e))}function ue(e,t){if(e.tag&&!e.ns&&(e.ns=t,e.children))for(var n=0,r=e.children.length;n<r;n++)ue(e.children[n],t)}function fe(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function de(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function pe(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=Ni),ve(n,\"beforeMount\"),n._watcher=new Si(n,function(){n._update(n._render(),t)},p),t=!1,null==n.$vnode&&(n._isMounted=!0,ve(n,\"mounted\")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&ve(n,\"beforeUpdate\");var r=n.$el,i=Li;Li=n;var o=n._vnode;n._vnode=e,o?n.$el=n.__patch__(o,e):n.$el=n.__patch__(n.$el,e,t),Li=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&ve(n,\"updated\")},e.prototype._updateFromParent=function(e,t,n,r){var i=this,o=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(i._vnode.parent=n),i.$options._renderChildren=r,e&&i.$options.props){gi.shouldConvert=!1;for(var a=i.$options._propKeys||[],s=0;s<a.length;s++){var c=a[s];i[c]=R(c,i.$options.props,e,i)}gi.shouldConvert=!0,i.$options.propsData=e}if(t){var l=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,l)}o&&(i.$slots=Ee(r,i._renderContext),i.$forceUpdate())},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ve(e,\"beforeDestroy\"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,ve(e,\"destroyed\"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function ve(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit(\"hook:\"+t)}function he(e,t,n,r,i){if(e){var o=n.$options._base;if(u(e)&&(e=o.extend(e)),\"function\"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=we(e,o,function(){n.$forceUpdate()}),!e)return;Pe(e),t=t||{};var a=xe(t,e);if(e.options.functional)return me(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),ke(t);var c=e.options.name||i,l=new Ei(\"vue-component-\"+e.cid+(c?\"-\"+c:\"\"),t,void 0,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r});return l}}}function me(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var c in a)o[c]=R(c,a,t);var l=e.options.render.call(null,s(Oe,{_self:Object.create(r)}),{props:o,data:n,parent:r,children:ce(i),slots:function(){return Ee(i,r)}});return l instanceof Ei&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function ge(e,t){var n=e.componentOptions,r={_isComponent:!0,parent:t,propsData:n.propsData,_componentTag:n.tag,_parentVnode:e,_parentListeners:n.listeners,_renderChildren:n.children},i=e.data.inlineTemplate;return i&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new n.Ctor(r)}function ye(e,t){if(!e.child||e.child._isDestroyed){var n=e.child=ge(e,Li);n.$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var r=e;_e(r,r)}}function _e(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children)}function be(e){e.child._isMounted||(e.child._isMounted=!0,ve(e.child,\"mounted\")),e.data.keepAlive&&(e.child._inactive=!1,ve(e.child,\"activated\"))}function $e(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,ve(e.child,\"deactivated\")):e.child.$destroy())}function we(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(u(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n)},a=function(e){},s=e(o,a);return s&&\"function\"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n)}function xe(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Kr(s);Ce(r,o,s,c,!0)||Ce(r,i,s,c)||Ce(r,a,s,c)}return r}}function Ce(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function ke(e){e.hook||(e.hook={});for(var t=0;t<Mi.length;t++){var n=Mi[t],r=e.hook[n],i=Di[n];e.hook[n]=r?Ae(i,r):i}}function Ae(e,t){return function(n,r){e(n,r),t(n,r)}}function Oe(e,t,n){return t&&(Array.isArray(t)||\"object\"!=typeof t)&&(n=t,t=void 0),Se(this._self,e,t,n)}function Se(e,t,n,r){if(!n||!n.__ob__){if(!t)return Ni();if(Array.isArray(r)&&\"function\"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),\"string\"==typeof t){var i,o=li.getTagNamespace(t);if(li.isReservedTag(t))return new Ei(t,n,ce(r,o),void 0,void 0,o,e);if(i=P(e.$options,\"components\",t))return he(i,n,e,r,t);var a=\"foreignObject\"===t?\"xhtml\":o;return new Ei(t,n,ce(r,a),void 0,void 0,o,e)}return he(t,n,e,r)}}function Te(e){e.$vnode=null,e._vnode=null,e._staticTrees=null,e._renderContext=e.$options._parentVnode&&e.$options._parentVnode.context,e.$slots=Ee(e.$options._renderChildren,e._renderContext),e.$scopedSlots={},e.$createElement=s(Oe,e),e.$options.el&&e.$mount(e.$options.el)}function je(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&\"string\"!=typeof e[r]&&i(e[r],t+\"_\"+r,n);else i(e,t,n)}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}n.prototype.$nextTick=function(e){return si(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=re(e.$slots[o]);i&&i.data.scopedSlots&&(e.$scopedSlots=i.data.scopedSlots),r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){if(li.errorHandler)li.errorHandler.call(null,t,e);else{if(oi())throw t;console.error(t)}a=e._vnode}return a instanceof Ei||(a=Ni()),a.parent=i,a},n.prototype._h=Oe,n.prototype._s=e,n.prototype._n=t,n.prototype._e=Ni,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?re(n):ne(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,\"__static__\"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,\"__once__\"+t+(n?\"_\"+n:\"\"),!0),e};var o=function(e){return e};n.prototype._f=function(e){return P(this.$options,\"filters\",e,!0)||o},n.prototype._l=function(e,t){var n,r,i,o,a;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if(\"number\"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n},n.prototype._t=function(e,t,n){var r=this.$scopedSlots[e];if(r)return r(n||{})||t;var i=this.$slots[e];return i||t},n.prototype._b=function(e,t,n,r){if(n)if(u(n)){Array.isArray(n)&&(n=d(n));for(var i in n)if(\"class\"===i||\"style\"===i)e[i]=n[i];else{var o=r||li.mustUseProp(t,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});o[i]=n[i]}}else;return e},n.prototype._k=function(e){return li.keyCodes[e]}}function Ee(e,t){var n={};if(!e)return n;for(var r,i,o=ce(e)||[],a=[],s=0,c=o.length;s<c;s++)if(i=o[s],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var l=n[r]||(n[r]=[]);\"template\"===i.tag?l.push.apply(l,i.children):l.push(i)}else a.push(i);return a.length&&(1!==a.length||\" \"!==a[0].text&&!a[0].isComment)&&(n.default=a),n}function Ne(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=s(e.$on,e),r=s(e.$off,e);e._updateListeners=function(t,i){oe(t,i||{},n,r,e)},t&&e._updateListeners(t)}function Le(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function De(e){e.prototype._init=function(e){var t=this;t._uid=Pi++,t._isVue=!0,e&&e._isComponent?Me(t,e):t.$options=M(Pe(t.constructor),e||{},t),t._renderProxy=t,t._self=t,de(t),Ne(t),ve(t,\"beforeCreate\"),K(t),ve(t,\"created\"),Te(t)}}function Me(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Pe(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._scopeId=t._scopeId,t=e.options=M(n,i),t.name&&(t.components[t.name]=e))}return t}function Re(e){this._init(e)}function Ie(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),\"function\"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}}}function Fe(e){e.mixin=function(e){this.options=M(this.options,e)}}function Be(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=M(n.options,e),a.super=n,a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,li._assetTypes.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,i[r]=a,a}}function Ue(e){li._assetTypes.forEach(function(t){e[t]=function(e,n){return n?(\"component\"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),\"directive\"===t&&\"function\"==typeof n&&(n={bind:n,update:n}),this.options[t+\"s\"][e]=n,n):this.options[t+\"s\"][e]}})}function He(e,t){return\"string\"==typeof e?e.split(\",\").indexOf(t)>-1:e.test(t)}function Ve(e){var t={};t.get=function(){return li},Object.defineProperty(e,\"config\",t),e.util=$i,e.set=O,e.delete=S,e.nextTick=si,e.options=Object.create(null),li._assetTypes.forEach(function(t){e.options[t+\"s\"]=Object.create(null)}),e.options._base=e,l(e.options.components,Fi),Ie(e),Fe(e),Be(e),Ue(e)}function ze(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Je(r.data,t));for(;n=n.parent;)n.data&&(t=Je(t,n.data));return Ke(t)}function Je(e,t){return{staticClass:qe(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Ke(e){var t=e.class,n=e.staticClass;return n||t?qe(n,We(t)):\"\"}function qe(e,t){return e?t?e+\" \"+t:e:t||\"\"}function We(e){var t=\"\";if(!e)return t;if(\"string\"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=We(e[r]))&&(t+=n+\" \");return t.slice(0,-1)}if(u(e)){for(var o in e)e[o]&&(t+=o+\" \");return t.slice(0,-1)}return t}function Ze(e){return Xi(e)?\"svg\":\"math\"===e?\"math\":void 0}function Ge(e){if(!Qr)return!0;if(to(e))return!1;if(e=e.toLowerCase(),null!=no[e])return no[e];var t=document.createElement(e);return e.indexOf(\"-\")>-1?no[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:no[e]=/HTMLUnknownElement/.test(t.toString())}function Ye(e){if(\"string\"==typeof e){if(e=document.querySelector(e),!e)return document.createElement(\"div\")}return e}function Qe(e,t){var n=document.createElement(e);return\"select\"!==e?n:(t.data&&t.data.attrs&&\"multiple\"in t.data.attrs&&n.setAttribute(\"multiple\",\"multiple\"),n)}function Xe(e,t){return document.createElementNS(Wi[e],t)}function et(e){return document.createTextNode(e)}function tt(e){return document.createComment(e)}function nt(e,t,n){e.insertBefore(t,n)}function rt(e,t){e.removeChild(t)}function it(e,t){e.appendChild(t)}function ot(e){return e.parentNode}function at(e){return e.nextSibling}function st(e){return e.tagName}function ct(e,t){e.textContent=t}function lt(e){return e.childNodes}function ut(e,t,n){e.setAttribute(t,n)}function ft(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.child||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o}}function dt(e){return null==e}function pt(e){return null!=e}function vt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function ht(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,pt(i)&&(o[i]=r);return o}function mt(e){function t(e){return new Ei(x.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0===--n.listeners&&r(e)}return n.listeners=t,n}function r(e){var t=x.parentNode(e);t&&x.removeChild(t,e)}function i(e,t,n){var r,i=e.data;if(e.isRootInsert=!n,pt(i)&&(pt(r=i.hook)&&pt(r=r.init)&&r(e),pt(r=e.child)))return l(e,t),e.elm;var o=e.children,s=e.tag;return pt(s)?(e.elm=e.ns?x.createElementNS(e.ns,s):x.createElement(s,e),u(e),a(e,o,t),pt(i)&&c(e,t)):e.isComment?e.elm=x.createComment(e.text):e.elm=x.createTextNode(e.text),e.elm}function a(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)x.appendChild(e.elm,i(t[r],n,!0));else o(e.text)&&x.appendChild(e.elm,x.createTextNode(e.text))}function s(e){for(;e.child;)e=e.child._vnode;return pt(e.tag)}function c(e,t){for(var n=0;n<$.create.length;++n)$.create[n](oo,e);_=e.data.hook,pt(_)&&(_.create&&_.create(oo,e),_.insert&&t.push(e))}function l(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,s(e)?(c(e,t),u(e)):(ft(e),t.push(e))}function u(e){var t;pt(t=e.context)&&pt(t=t.$options._scopeId)&&x.setAttribute(e.elm,t,\"\"),pt(t=Li)&&t!==e.context&&pt(t=t.$options._scopeId)&&x.setAttribute(e.elm,t,\"\")}function f(e,t,n,r,o,a){for(;r<=o;++r)x.insertBefore(e,i(n[r],a),t)}function d(e){var t,n,r=e.data;if(pt(r))for(pt(t=r.hook)&&pt(t=t.destroy)&&t(e),t=0;t<$.destroy.length;++t)$.destroy[t](e);if(pt(t=e.children))for(n=0;n<e.children.length;++n)d(e.children[n])}function p(e,t,n,r){for(;n<=r;++n){var i=t[n];pt(i)&&(pt(i.tag)?(v(i),d(i)):x.removeChild(e,i.elm))}}function v(e,t){if(t||pt(e.data)){var i=$.remove.length+1;for(t?t.listeners+=i:t=n(e.elm,i),pt(_=e.child)&&pt(_=_._vnode)&&pt(_.data)&&v(_,t),_=0;_<$.remove.length;++_)$.remove[_](e,t);pt(_=e.data.hook)&&pt(_=_.remove)?_(e,t):t()}else r(e.elm)}function h(e,t,n,r,o){for(var a,s,c,l,u=0,d=0,v=t.length-1,h=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],$=!o;u<=v&&d<=y;)dt(h)?h=t[++u]:dt(g)?g=t[--v]:vt(h,_)?(m(h,_,r),h=t[++u],_=n[++d]):vt(g,b)?(m(g,b,r),g=t[--v],b=n[--y]):vt(h,b)?(m(h,b,r),$&&x.insertBefore(e,h.elm,x.nextSibling(g.elm)),h=t[++u],b=n[--y]):vt(g,_)?(m(g,_,r),$&&x.insertBefore(e,g.elm,h.elm),g=t[--v],_=n[++d]):(dt(a)&&(a=ht(t,u,v)),s=pt(_.key)?a[_.key]:null,dt(s)?(x.insertBefore(e,i(_,r),h.elm),_=n[++d]):(c=t[s],c.tag!==_.tag?(x.insertBefore(e,i(_,r),h.elm),_=n[++d]):(m(c,_,r),t[s]=void 0,$&&x.insertBefore(e,_.elm,h.elm),_=n[++d])));u>v?(l=dt(n[y+1])?null:n[y+1].elm,f(e,l,n,d,y,r)):d>y&&p(e,t,u,v)}function m(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.child=e.child);var i,o=t.data,a=pt(o);a&&pt(i=o.hook)&&pt(i=i.prepatch)&&i(e,t);var c=t.elm=e.elm,l=e.children,u=t.children;if(a&&s(t)){for(i=0;i<$.update.length;++i)$.update[i](e,t);pt(i=o.hook)&&pt(i=i.update)&&i(e,t)}dt(t.text)?pt(l)&&pt(u)?l!==u&&h(c,l,u,n,r):pt(u)?(pt(e.text)&&x.setTextContent(c,\"\"),f(c,null,u,0,u.length-1,n)):pt(l)?p(c,l,0,l.length-1):pt(e.text)&&x.setTextContent(c,\"\"):e.text!==t.text&&x.setTextContent(c,t.text),a&&pt(i=o.hook)&&pt(i=i.postpatch)&&i(e,t)}}function g(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function y(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(pt(i)&&(pt(_=i.hook)&&pt(_=_.init)&&_(t,!0),pt(_=t.child)))return l(t,n),!0;if(pt(r)){if(pt(o)){var s=x.childNodes(e);if(s.length){var u=!0;if(s.length!==o.length)u=!1;else for(var f=0;f<o.length;f++)if(!y(s[f],o[f],n)){u=!1;break}if(!u)return!1}else a(t,o,n)}pt(i)&&c(t,n)}return!0}var _,b,$={},w=e.modules,x=e.nodeOps;for(_=0;_<ao.length;++_)for($[ao[_]]=[],b=0;b<w.length;++b)void 0!==w[b][ao[_]]&&$[ao[_]].push(w[b][ao[_]]);return function(e,n,r,o){if(!n)return void(e&&d(e));var a,c,l=!1,u=[];if(e){var f=pt(e.nodeType);if(!f&&vt(e,n))m(e,n,u,o);else{if(f){if(1===e.nodeType&&e.hasAttribute(\"server-rendered\")&&(e.removeAttribute(\"server-rendered\"),r=!0),r&&y(e,n,u))return g(n,u,!0),e;e=t(e)}if(a=e.elm,c=x.parentNode(a),i(n,u),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(s(n))for(var h=0;h<$.create.length;++h)$.create[h](oo,n.parent)}null!==c?(x.insertBefore(c,n.elm,x.nextSibling(a)),p(c,[e],0,0)):pt(e.tag)&&d(e)}}else l=!0,i(n,u);return g(n,u,l),n.elm}}function gt(e,t){if(e.data.directives||t.data.directives){var n,r,i,o=e===oo,a=yt(e.data.directives,e.context),s=yt(t.data.directives,t.context),c=[],l=[];for(n in s)r=a[n],i=s[n],r?(i.oldValue=r.value,bt(i,\"update\",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(bt(i,\"bind\",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var u=function(){c.forEach(function(n){bt(n,\"inserted\",t,e)})};o?ie(t.data.hook||(t.data.hook={}),\"insert\",u,\"dir-insert\"):u()}if(l.length&&ie(t.data.hook||(t.data.hook={}),\"postpatch\",function(){l.forEach(function(n){bt(n,\"componentUpdated\",t,e)})},\"dir-postpatch\"),!o)for(n in a)s[n]||bt(a[n],\"unbind\",e)}}function yt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=co),n[_t(i)]=i,i.def=P(t.$options,\"directives\",i.name,!0);return n}function _t(e){return e.rawName||e.name+\".\"+Object.keys(e.modifiers||{}).join(\".\")}function bt(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r)}function $t(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=l({},s));for(n in s)r=s[n],i=a[n],i!==r&&wt(o,n,r);for(n in a)null==s[n]&&(Ji(n)?o.removeAttributeNS(zi,Ki(n)):Hi(n)||o.removeAttribute(n))}}function wt(e,t,n){Vi(t)?qi(n)?e.removeAttribute(t):e.setAttribute(t,t):Hi(t)?e.setAttribute(t,qi(n)||\"false\"===n?\"false\":\"true\"):Ji(t)?qi(n)?e.removeAttributeNS(zi,Ki(t)):e.setAttributeNS(zi,t,n):qi(n)?e.removeAttribute(t):e.setAttribute(t,n)}function xt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=ze(t),a=n._transitionClasses;a&&(o=qe(o,We(a))),o!==n._prevClass&&(n.setAttribute(\"class\",o),n._prevClass=o)}}function Ct(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{},i=t.elm._v_add||(t.elm._v_add=function(e,n,r){t.elm.addEventListener(e,n,r)}),o=t.elm._v_remove||(t.elm._v_remove=function(e,n){t.elm.removeEventListener(e,n)});oe(n,r,i,o,t.context)}}function kt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=l({},a));for(n in o)null==a[n]&&(i[n]=\"\");for(n in a)if(r=a[n],\"textContent\"!==n&&\"innerHTML\"!==n||(t.children&&(t.children.length=0),r!==o[n]))if(\"value\"===n){i._value=r;var s=null==r?\"\":String(r);i.value===s||i.composing||(i.value=s)}else i[n]=r}}function At(e){var t=Ot(e.style);return e.staticStyle?l(e.staticStyle,t):t}function Ot(e){return Array.isArray(e)?d(e):\"string\"==typeof e?ho(e):e}function St(e,t){var n,r={};if(t)for(var i=e;i.child;)i=i.child._vnode,i.data&&(n=At(i.data))&&l(r,n);(n=At(e.data))&&l(r,n);for(var o=e;o=o.parent;)o.data&&(n=At(o.data))&&l(r,n);return r}function Tt(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},u=s||c,f=Ot(t.data.style)||{};t.data.style=f.__ob__?l({},f):f;var d=St(t,!0);for(o in u)null==d[o]&&go(a,o,\"\");for(o in d)i=d[o],i!==u[o]&&go(a,o,null==i?\"\":i)}}function jt(e,t){if(t&&t.trim())if(e.classList)t.indexOf(\" \")>-1?t.split(/\\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=\" \"+e.getAttribute(\"class\")+\" \";n.indexOf(\" \"+t+\" \")<0&&e.setAttribute(\"class\",(n+t).trim())}}function Et(e,t){if(t&&t.trim())if(e.classList)t.indexOf(\" \")>-1?t.split(/\\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=\" \"+e.getAttribute(\"class\")+\" \",r=\" \"+t+\" \";n.indexOf(r)>=0;)n=n.replace(r,\" \");e.setAttribute(\"class\",n.trim())}}function Nt(e){So(function(){So(e)})}function Lt(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),jt(e,t)}function Dt(e,t){e._transitionClasses&&r(e._transitionClasses,t),Et(e,t)}function Mt(e,t,n){var r=Pt(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===wo?ko:Oo,c=0,l=function(){e.removeEventListener(s,u),n()},u=function(t){t.target===e&&++c>=a&&l()};setTimeout(function(){c<a&&l()},o+1),e.addEventListener(s,u)}function Pt(e,t){var n,r=window.getComputedStyle(e),i=r[Co+\"Delay\"].split(\", \"),o=r[Co+\"Duration\"].split(\", \"),a=Rt(i,o),s=r[Ao+\"Delay\"].split(\", \"),c=r[Ao+\"Duration\"].split(\", \"),l=Rt(s,c),u=0,f=0;t===wo?a>0&&(n=wo,u=a,f=o.length):t===xo?l>0&&(n=xo,u=l,f=c.length):(u=Math.max(a,l),n=u>0?a>l?wo:xo:null,f=n?n===wo?o.length:c.length:0);var d=n===wo&&To.test(r[Co+\"Property\"]);return{type:n,timeout:u,propCount:f,hasTransform:d}}function Rt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return It(t)+It(e[n])}))}function It(e){return 1e3*Number(e.slice(0,-1))}function Ft(e){var t=e.elm;t._leaveCb&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Ut(e.data.transition);if(n&&!t._enterCb&&1===t.nodeType){var r=n.css,i=n.type,o=n.enterClass,a=n.enterActiveClass,s=n.appearClass,c=n.appearActiveClass,l=n.beforeEnter,u=n.enter,f=n.afterEnter,d=n.enterCancelled,p=n.beforeAppear,v=n.appear,h=n.afterAppear,m=n.appearCancelled,g=Li.$vnode,y=g&&g.parent?g.parent.context:Li,_=!y._isMounted||!e.isRootInsert;if(!_||v||\"\"===v){var b=_?s:o,$=_?c:a,w=_?p||l:l,x=_&&\"function\"==typeof v?v:u,C=_?h||f:f,k=_?m||d:d,A=r!==!1&&!ti,O=x&&(x._length||x.length)>1,S=t._enterCb=Ht(function(){A&&Dt(t,$),S.cancelled?(A&&Dt(t,b),k&&k(t)):C&&C(t),t._enterCb=null});e.data.show||ie(e.data.hook||(e.data.hook={}),\"insert\",function(){var n=t.parentNode,r=n&&n._pending&&n._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),x&&x(t,S)},\"transition-insert\"),w&&w(t),A&&(Lt(t,b),Lt(t,$),Nt(function(){Dt(t,b),S.cancelled||O||Mt(t,i,S)})),e.data.show&&x&&x(t,S),A||O||S()}}}function Bt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),l&&l(r),v&&(Lt(r,s),Lt(r,c),Nt(function(){Dt(r,s),m.cancelled||h||Mt(r,a,m)})),u&&u(r,m),v||h||m())}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Ut(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var o=i.css,a=i.type,s=i.leaveClass,c=i.leaveActiveClass,l=i.beforeLeave,u=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=o!==!1&&!ti,h=u&&(u._length||u.length)>1,m=r._leaveCb=Ht(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Dt(r,c),m.cancelled?(v&&Dt(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null});p?p(n):n()}}function Ut(e){if(e){if(\"object\"==typeof e){var t={};return e.css!==!1&&l(t,jo(e.name||\"v\")),\r\nl(t,e),t}return\"string\"==typeof e?jo(e):void 0}}function Ht(e){var t=!1;return function(){t||(t=!0,e())}}function Vt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,Jt(a))>-1,a.selected!==o&&(a.selected=o);else if(h(Jt(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function zt(e,t){for(var n=0,r=t.length;n<r;n++)if(h(Jt(t[n]),e))return!1;return!0}function Jt(e){return\"_value\"in e?e._value:e.value}function Kt(e){e.target.composing=!0}function qt(e){e.target.composing=!1,Wt(e.target,\"input\")}function Wt(e,t){var n=document.createEvent(\"HTMLEvents\");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Zt(e){return!e.child||e.data&&e.data.transition?e:Zt(e.child._vnode)}function Gt(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Gt(fe(t.children)):e}function Yt(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Vr(o)]=i[o].fn;return t}function Qt(e,t){return/\\d-keep-alive$/.test(t.tag)?e(\"keep-alive\"):null}function Xt(e){for(;e=e.parent;)if(e.data.transition)return!0}function en(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function tn(e){e.data.newPos=e.elm.getBoundingClientRect()}function nn(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform=\"translate(\"+r+\"px,\"+i+\"px)\",o.transitionDuration=\"0s\"}}function rn(e,t){var n=document.createElement(\"div\");return n.innerHTML='<div a=\"'+e+'\">',n.innerHTML.indexOf(t)>0}function on(e){return Vo=Vo||document.createElement(\"div\"),Vo.innerHTML=e,Vo.textContent}function an(e,t){return t&&(e=e.replace(Da,\"\\n\")),e.replace(Na,\"<\").replace(La,\">\").replace(Ma,\"&\").replace(Pa,'\"')}function sn(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(Yo);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(Qo))&&(o=e.match(Wo));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;l&&(\"p\"===s&&Qi(n)&&o(\"\",s),Yi(n)&&s===n&&o(\"\",n));for(var i=u(n)||\"html\"===n&&\"head\"===s||!!r,a=e.attrs.length,f=new Array(a),d=0;d<a;d++){var p=e.attrs[d];ra&&p[0].indexOf('\"\"')===-1&&(\"\"===p[3]&&delete p[3],\"\"===p[4]&&delete p[4],\"\"===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||\"\";f[d]={name:p[1],value:an(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,attrs:f}),s=n,r=\"\"),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r,i){var o;if(null==r&&(r=f),null==i&&(i=f),n){var a=n.toLowerCase();for(o=c.length-1;o>=0&&c[o].tag.toLowerCase()!==a;o--);}else o=0;if(o>=0){for(var l=c.length-1;l>=o;l--)t.end&&t.end(c[l].tag,r,i);c.length=o,s=o&&c[o-1].tag}else\"br\"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):\"p\"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i))}for(var a,s,c=[],l=t.expectHTML,u=t.isUnaryTag||Zr,f=0;e;){if(a=e,s&&ja(s,t.sfc,c)){var d=s.toLowerCase(),p=Ea[d]||(Ea[d]=new RegExp(\"([\\\\s\\\\S]*?)(</\"+d+\"[^>]*>)\",\"i\")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,\"script\"!==d&&\"style\"!==d&&\"noscript\"!==d&&(n=n.replace(/<!--([\\s\\S]*?)-->/g,\"$1\").replace(/<!\\[CDATA\\[([\\s\\S]*?)]]>/g,\"$1\")),t.chars&&t.chars(n),\"\"});f+=e.length-h.length,e=h,o(\"</\"+d+\">\",d,f-v,f)}else{var m=e.indexOf(\"<\");if(0===m){if(ta.test(e)){var g=e.indexOf(\"-->\");if(g>=0){n(g+3);continue}}if(na.test(e)){var y=e.indexOf(\"]>\");if(y>=0){n(y+2);continue}}var _=e.match(ea);if(_){n(_[0].length);continue}var b=e.match(Xo);if(b){var $=f;n(b[0].length),o(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var x=void 0,C=void 0,k=void 0;if(m>0){for(C=e.slice(m);!(Xo.test(C)||Yo.test(C)||ta.test(C)||na.test(C)||(k=C.indexOf(\"<\",1),k<0));)m+=k,C=e.slice(m);x=e.substring(0,m),n(m)}m<0&&(x=e,e=\"\"),t.chars&&x&&t.chars(x)}if(e===a&&t.chars){t.chars(e);break}}o()}function cn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,l=!1,u=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p)switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 47:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=ln(o,a[i]);return o}function ln(e,t){var n=t.indexOf(\"(\");if(n<0)return'_f(\"'+t+'\")('+e+\")\";var r=t.slice(0,n),i=t.slice(n+1);return'_f(\"'+r+'\")('+e+\",\"+i}function un(e,t){var n=t?Fa(t):Ra;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=cn(r[1].trim());o.push(\"_s(\"+s+\")\"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join(\"+\")}}function fn(e){console.error(\"[Vue parser]: \"+e)}function dn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function pn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function vn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function hn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function mn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t=\"!\"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function gn(e,t,n){var r=yn(e,\":\"+t)||yn(e,\"v-bind:\"+t);if(null!=r)return cn(r);if(n!==!1){var i=yn(e,t);if(null!=i)return JSON.stringify(i)}}function yn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function _n(e){if(oa=e,ia=oa.length,sa=ca=la=0,e.indexOf(\"[\")<0||e.lastIndexOf(\"]\")<ia-1)return{exp:e,idx:null};for(;!$n();)aa=bn(),wn(aa)?Cn(aa):91===aa&&xn(aa);return{exp:e.substring(0,ca),idx:e.substring(ca+1,la)}}function bn(){return oa.charCodeAt(++sa)}function $n(){return sa>=ia}function wn(e){return 34===e||39===e}function xn(e){var t=1;for(ca=sa;!$n();)if(e=bn(),wn(e))Cn(e);else if(91===e&&t++,93===e&&t--,0===t){la=sa;break}}function Cn(e){for(var t=e;!$n()&&(e=bn(),e!==t););}function kn(e,t){ua=t.warn||fn,fa=t.getTagNamespace||Zr,da=t.mustUseProp||Zr,pa=t.isPreTag||Zr,va=dn(t.modules,\"preTransformNode\"),ha=dn(t.modules,\"transformNode\"),ma=dn(t.modules,\"postTransformNode\"),ga=t.delimiters;var n,r,i=[],o=t.preserveWhitespace!==!1,a=!1,s=!1;return sn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,o,c){function l(e){}var u=r&&r.ns||fa(e);ei&&\"svg\"===u&&(o=Vn(o));var f={type:1,tag:e,attrsList:o,attrsMap:Bn(o),parent:r,children:[]};u&&(f.ns=u),Hn(f)&&!oi()&&(f.forbidden=!0);for(var d=0;d<va.length;d++)va[d](f,t);if(a||(An(f),f.pre&&(a=!0)),pa(f.tag)&&(s=!0),a)On(f);else{jn(f),En(f),Dn(f),Sn(f),f.plain=!f.key&&!o.length,Tn(f),Mn(f),Pn(f);for(var p=0;p<ha.length;p++)ha[p](f,t);Rn(f)}if(n?i.length||n.if&&(f.elseif||f.else)&&(l(f),Ln(n,{exp:f.elseif,block:f})):(n=f,l(n)),r&&!f.forbidden)if(f.elseif||f.else)Nn(f,r);else if(f.slotScope){r.plain=!1;var v=f.slotTarget||\"default\";(r.scopedSlots||(r.scopedSlots={}))[v]=f}else r.children.push(f),f.parent=r;c||(r=f,i.push(f));for(var h=0;h<ma.length;h++)ma[h](f,t)},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&\" \"===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(a=!1),pa(e.tag)&&(s=!1)},chars:function(e){if(r&&(!ei||\"textarea\"!==r.tag||r.attrsMap.placeholder!==e)&&(e=s||e.trim()?qa(e):o&&r.children.length?\" \":\"\")){var t;!a&&\" \"!==e&&(t=un(e,ga))?r.children.push({type:2,expression:t,text:e}):r.children.push({type:3,text:e})}}}),n}function An(e){null!=yn(e,\"v-pre\")&&(e.pre=!0)}function On(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function Sn(e){var t=gn(e,\"key\");t&&(e.key=t)}function Tn(e){var t=gn(e,\"ref\");t&&(e.ref=t,e.refInFor=In(e))}function jn(e){var t;if(t=yn(e,\"v-for\")){var n=t.match(Ua);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ha);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function En(e){var t=yn(e,\"v-if\");if(t)e.if=t,Ln(e,{exp:t,block:e});else{null!=yn(e,\"v-else\")&&(e.else=!0);var n=yn(e,\"v-else-if\");n&&(e.elseif=n)}}function Nn(e,t){var n=Un(t.children);n&&n.if&&Ln(n,{exp:e.elseif,block:e})}function Ln(e,t){e.conditions||(e.conditions=[]),e.conditions.push(t)}function Dn(e){var t=yn(e,\"v-once\");null!=t&&(e.once=!0)}function Mn(e){if(\"slot\"===e.tag)e.slotName=gn(e,\"name\");else{var t=gn(e,\"slot\");t&&(e.slotTarget='\"\"'===t?'\"default\"':t),\"template\"===e.tag&&(e.slotScope=yn(e,\"scope\"))}}function Pn(e){var t;(t=gn(e,\"is\"))&&(e.component=t),null!=yn(e,\"inline-template\")&&(e.inlineTemplate=!0)}function Rn(e){var t,n,r,i,o,a,s,c,l=e.attrsList;for(t=0,n=l.length;t<n;t++)if(r=i=l[t].name,o=l[t].value,Ba.test(r))if(e.hasBindings=!0,s=Fn(r),s&&(r=r.replace(Ka,\"\")),Va.test(r))r=r.replace(Va,\"\"),o=cn(o),s&&(s.prop&&(c=!0,r=Vr(r),\"innerHtml\"===r&&(r=\"innerHTML\")),s.camel&&(r=Vr(r))),c||da(e.tag,r)?pn(e,r,o):vn(e,r,o);else if(za.test(r))r=r.replace(za,\"\"),mn(e,r,o,s);else{r=r.replace(Ba,\"\");var u=r.match(Ja);u&&(a=u[1])&&(r=r.slice(0,-(a.length+1))),hn(e,r,i,o,a,s)}else vn(e,r,JSON.stringify(o))}function In(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Fn(e){var t=e.match(Ka);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Bn(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Un(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function Hn(e){return\"style\"===e.tag||\"script\"===e.tag&&(!e.attrsMap.type||\"text/javascript\"===e.attrsMap.type)}function Vn(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Wa.test(r.name)||(r.name=r.name.replace(Za,\"\"),t.push(r))}return t}function zn(e,t){e&&(ya=Ga(t.staticKeys||\"\"),_a=t.isReservedTag||function(){return!1},Kn(e),qn(e,!1))}function Jn(e){return n(\"type,tag,attrsList,attrsMap,plain,parent,children,attrs\"+(e?\",\"+e:\"\"))}function Kn(e){if(e.static=Zn(e),1===e.type){if(!_a(e.tag)&&\"slot\"!==e.tag&&null==e.attrsMap[\"inline-template\"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Kn(r),r.static||(e.static=!1)}}}function qn(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)qn(e.children[n],t||!!e.for);e.conditions&&Wn(e.conditions,t)}}function Wn(e,t){for(var n=1,r=e.length;n<r;n++)qn(e[n].block,t)}function Zn(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Br(e.tag)||!_a(e.tag)||Gn(e)||!Object.keys(e).every(ya))))}function Gn(e){for(;e.parent;){if(e=e.parent,\"template\"!==e.tag)return!1;if(e.for)return!0}return!1}function Yn(e,t){var n=t?\"nativeOn:{\":\"on:{\";for(var r in e)n+='\"'+r+'\":'+Qn(r,e[r])+\",\";return n.slice(0,-1)+\"}\"}function Qn(e,t){if(t){if(Array.isArray(t))return\"[\"+t.map(function(t){return Qn(e,t)}).join(\",\")+\"]\";if(t.modifiers){var n=\"\",r=[],i=ts.test(e);for(var o in t.modifiers)es[o]?n+=es[o]:i&&ns[o]?n+=ns[o]:r.push(o);r.length&&(n=Xn(r)+n);var a=Qa.test(t.value)?t.value+\"($event)\":t.value;return\"function($event){\"+n+a+\"}\"}return Ya.test(t.value)||Qa.test(t.value)?t.value:\"function($event){\"+t.value+\"}\"}return\"function(){}\"}function Xn(e){var t=1===e.length?er(e[0]):Array.prototype.concat.apply([],e.map(er));return Array.isArray(t)?\"if(\"+t.map(function(e){return\"$event.keyCode!==\"+e}).join(\"&&\")+\")return;\":\"if($event.keyCode!==\"+t+\")return;\"}function er(e){return parseInt(e,10)||Xa[e]||\"_k(\"+JSON.stringify(e)+\")\"}function tr(e,t){e.wrapData=function(n){return\"_b(\"+n+\",'\"+e.tag+\"',\"+t.value+(t.modifiers&&t.modifiers.prop?\",true\":\"\")+\")\"}}function nr(e,t){var n=Ca,r=Ca=[],i=ka;ka=0,Aa=t,ba=t.warn||fn,$a=dn(t.modules,\"transformCode\"),wa=dn(t.modules,\"genData\"),xa=t.directives||{};var o=e?rr(e):'_h(\"div\")';return Ca=n,ka=i,{render:\"with(this){return \"+o+\"}\",staticRenderFns:r}}function rr(e){if(e.staticRoot&&!e.staticProcessed)return ir(e);if(e.once&&!e.onceProcessed)return or(e);if(e.for&&!e.forProcessed)return cr(e);if(e.if&&!e.ifProcessed)return ar(e);if(\"template\"!==e.tag||e.slotTarget){if(\"slot\"===e.tag)return gr(e);var t;if(e.component)t=yr(e.component,e);else{var n=e.plain?void 0:lr(e),r=e.inlineTemplate?null:vr(e);t=\"_h('\"+e.tag+\"'\"+(n?\",\"+n:\"\")+(r?\",\"+r:\"\")+\")\"}for(var i=0;i<$a.length;i++)t=$a[i](e,t);return t}return vr(e)||\"void 0\"}function ir(e){return e.staticProcessed=!0,Ca.push(\"with(this){return \"+rr(e)+\"}\"),\"_m(\"+(Ca.length-1)+(e.staticInFor?\",true\":\"\")+\")\"}function or(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ar(e);if(e.staticInFor){for(var t=\"\",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?\"_o(\"+rr(e)+\",\"+ka++ +(t?\",\"+t:\"\")+\")\":rr(e)}return ir(e)}function ar(e){return e.ifProcessed=!0,sr(e.conditions)}function sr(e){function t(e){return e.once?or(e):rr(e)}if(!e.length)return\"_e()\";var n=e.shift();return n.exp?\"(\"+n.exp+\")?\"+t(n.block)+\":\"+sr(e):\"\"+t(n.block)}function cr(e){var t=e.for,n=e.alias,r=e.iterator1?\",\"+e.iterator1:\"\",i=e.iterator2?\",\"+e.iterator2:\"\";return e.forProcessed=!0,\"_l((\"+t+\"),function(\"+n+r+i+\"){return \"+rr(e)+\"})\"}function lr(e){var t=\"{\",n=ur(e);n&&(t+=n+\",\"),e.key&&(t+=\"key:\"+e.key+\",\"),e.ref&&(t+=\"ref:\"+e.ref+\",\"),e.refInFor&&(t+=\"refInFor:true,\"),e.component&&(t+='tag:\"'+e.tag+'\",');for(var r=0;r<wa.length;r++)t+=wa[r](e);if(e.attrs&&(t+=\"attrs:{\"+_r(e.attrs)+\"},\"),e.props&&(t+=\"domProps:{\"+_r(e.props)+\"},\"),e.events&&(t+=Yn(e.events)+\",\"),e.nativeEvents&&(t+=Yn(e.nativeEvents,!0)+\",\"),e.slotTarget&&(t+=\"slot:\"+e.slotTarget+\",\"),e.scopedSlots&&(t+=dr(e.scopedSlots)+\",\"),e.inlineTemplate){var i=fr(e);i&&(t+=i+\",\")}return t=t.replace(/,$/,\"\")+\"}\",e.wrapData&&(t=e.wrapData(t)),t}function ur(e){var t=e.directives;if(t){var n,r,i,o,a=\"directives:[\",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=xa[i.name]||rs[i.name];c&&(o=!!c(e,i,ba)),o&&(s=!0,a+='{name:\"'+i.name+'\",rawName:\"'+i.rawName+'\"'+(i.value?\",value:(\"+i.value+\"),expression:\"+JSON.stringify(i.value):\"\")+(i.arg?',arg:\"'+i.arg+'\"':\"\")+(i.modifiers?\",modifiers:\"+JSON.stringify(i.modifiers):\"\")+\"},\")}return s?a.slice(0,-1)+\"]\":void 0}}function fr(e){var t=e.children[0];if(1===t.type){var n=nr(t,Aa);return\"inlineTemplate:{render:function(){\"+n.render+\"},staticRenderFns:[\"+n.staticRenderFns.map(function(e){return\"function(){\"+e+\"}\"}).join(\",\")+\"]}\"}}function dr(e){return\"scopedSlots:{\"+Object.keys(e).map(function(t){return pr(t,e[t])}).join(\",\")+\"}\"}function pr(e,t){return e+\":function(\"+String(t.attrsMap.scope)+\"){return \"+(\"template\"===t.tag?vr(t)||\"void 0\":rr(t))+\"}\"}function vr(e){if(e.children.length)return\"[\"+e.children.map(hr).join(\",\")+\"]\"}function hr(e){return 1===e.type?rr(e):mr(e)}function mr(e){return 2===e.type?e.expression:br(JSON.stringify(e.text))}function gr(e){var t=e.slotName||'\"default\"',n=vr(e);return\"_t(\"+t+(n?\",\"+n:\"\")+(e.attrs?(n?\"\":\",null\")+\",{\"+e.attrs.map(function(e){return Vr(e.name)+\":\"+e.value}).join(\",\")+\"}\":\"\")+\")\"}function yr(e,t){var n=t.inlineTemplate?null:vr(t);return\"_h(\"+e+\",\"+lr(t)+(n?\",\"+n:\"\")+\")\"}function _r(e){for(var t=\"\",n=0;n<e.length;n++){var r=e[n];t+='\"'+r.name+'\":'+br(r.value)+\",\"}return t.slice(0,-1)}function br(e){return e.replace(/\\u2028/g,\"\\\\u2028\").replace(/\\u2029/g,\"\\\\u2029\")}function $r(e,t){var n=kn(e.trim(),t);zn(n,t);var r=nr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function wr(e,t){var n=(t.warn||fn,yn(e,\"class\"));n&&(e.staticClass=JSON.stringify(n));var r=gn(e,\"class\",!1);r&&(e.classBinding=r)}function xr(e){var t=\"\";return e.staticClass&&(t+=\"staticClass:\"+e.staticClass+\",\"),e.classBinding&&(t+=\"class:\"+e.classBinding+\",\"),t}function Cr(e,t){var n=(t.warn||fn,yn(e,\"style\"));n&&(e.staticStyle=JSON.stringify(ho(n)));var r=gn(e,\"style\",!1);r&&(e.styleBinding=r)}function kr(e){var t=\"\";return e.staticStyle&&(t+=\"staticStyle:\"+e.staticStyle+\",\"),e.styleBinding&&(t+=\"style:(\"+e.styleBinding+\"),\"),t}function Ar(e,t,n){Oa=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;return\"select\"===o?jr(e,r,i):\"input\"===o&&\"checkbox\"===a?Or(e,r,i):\"input\"===o&&\"radio\"===a?Sr(e,r,i):Tr(e,r,i),!0}function Or(e,t,n){var r=n&&n.number,i=gn(e,\"value\")||\"null\",o=gn(e,\"true-value\")||\"true\",a=gn(e,\"false-value\")||\"false\";pn(e,\"checked\",\"Array.isArray(\"+t+\")?_i(\"+t+\",\"+i+\")>-1:_q(\"+t+\",\"+o+\")\"),mn(e,\"change\",\"var $$a=\"+t+\",$$el=$event.target,$$c=$$el.checked?(\"+o+\"):(\"+a+\");if(Array.isArray($$a)){var $$v=\"+(r?\"_n(\"+i+\")\":i)+\",$$i=_i($$a,$$v);if($$c){$$i<0&&(\"+t+\"=$$a.concat($$v))}else{$$i>-1&&(\"+t+\"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{\"+t+\"=$$c}\",null,!0)}function Sr(e,t,n){var r=n&&n.number,i=gn(e,\"value\")||\"null\";i=r?\"_n(\"+i+\")\":i,pn(e,\"checked\",\"_q(\"+t+\",\"+i+\")\"),mn(e,\"change\",Er(t,i),null,!0)}function Tr(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=o||ei&&\"range\"===r?\"change\":\"input\",l=!o&&\"range\"!==r,u=\"input\"===e.tag||\"textarea\"===e.tag,f=u?\"$event.target.value\"+(s?\".trim()\":\"\"):s?\"(typeof $event === 'string' ? $event.trim() : $event)\":\"$event\";f=a||\"number\"===r?\"_n(\"+f+\")\":f;var d=Er(t,f);u&&l&&(d=\"if($event.target.composing)return;\"+d),pn(e,\"value\",u?\"_s(\"+t+\")\":\"(\"+t+\")\"),mn(e,c,d,null,!0)}function jr(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = \"_value\" in o ? o._value : o.value;return '+(r?\"_n(val)\":\"val\")+\"})\"+(null==e.attrsMap.multiple?\"[0]\":\"\"),o=Er(t,i);mn(e,\"change\",o,null,!0)}function Er(e,t){var n=_n(e);return null===n.idx?e+\"=\"+t:\"var $$exp = \"+n.exp+\", $$idx = \"+n.idx+\";if (!Array.isArray($$exp)){\"+e+\"=\"+t+\"}else{$$exp.splice($$idx, 1, \"+t+\")}\"}function Nr(e,t){t.value&&pn(e,\"textContent\",\"_s(\"+t.value+\")\")}function Lr(e,t){t.value&&pn(e,\"innerHTML\",\"_s(\"+t.value+\")\")}function Dr(e,t){return t=t?l(l({},ls),t):ls,$r(e,t)}function Mr(e,t,n){var r=(t&&t.warn||ui,t&&t.delimiters?String(t.delimiters)+e:e);if(cs[r])return cs[r];var i={},o=Dr(e,t);i.render=Pr(o.render);var a=o.staticRenderFns.length;i.staticRenderFns=new Array(a);for(var s=0;s<a;s++)i.staticRenderFns[s]=Pr(o.staticRenderFns[s]);return cs[r]=i}function Pr(e){try{return new Function(e)}catch(e){return p}}function Rr(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement(\"div\");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Ir,Fr,Br=n(\"slot,component\",!0),Ur=Object.prototype.hasOwnProperty,Hr=/-(\\w)/g,Vr=a(function(e){return e.replace(Hr,function(e,t){return t?t.toUpperCase():\"\"})}),zr=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Jr=/([^-])([A-Z])/g,Kr=a(function(e){return e.replace(Jr,\"$1-$2\").replace(Jr,\"$1-$2\").toLowerCase()}),qr=Object.prototype.toString,Wr=\"[object Object]\",Zr=function(){return!1},Gr=/[^\\w.$]/,Yr=\"__proto__\"in{},Qr=\"undefined\"!=typeof window&&\"[object Object]\"!==Object.prototype.toString.call(window),Xr=Qr&&window.navigator.userAgent.toLowerCase(),ei=Xr&&/msie|trident/.test(Xr),ti=Xr&&Xr.indexOf(\"msie 9.0\")>0,ni=Xr&&Xr.indexOf(\"edge/\")>0,ri=Xr&&Xr.indexOf(\"android\")>0,ii=Xr&&/iphone|ipad|ipod|ios/.test(Xr),oi=function(){return void 0===Ir&&(Ir=!Qr&&\"undefined\"!=typeof global&&\"server\"===global.process.env.VUE_ENV),Ir},ai=Qr&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,si=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if(\"undefined\"!=typeof Promise&&b(Promise)){var i=Promise.resolve();t=function(){i.then(e),ii&&setTimeout(p)}}else if(\"undefined\"==typeof MutationObserver||!b(MutationObserver)&&\"[object MutationObserverConstructor]\"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var o=1,a=new MutationObserver(e),s=document.createTextNode(String(o));a.observe(s,{characterData:!0}),t=function(){o=(o+1)%2,s.data=String(o)}}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i)}),r||(r=!0,t()),!e&&\"undefined\"!=typeof Promise)return new Promise(function(e){o=e})}}();Fr=\"undefined\"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return void 0!==this.set[e]},e.prototype.add=function(e){this.set[e]=1},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ci,li={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:Zr,isUnknownElement:Zr,getTagNamespace:p,mustUseProp:Zr,_assetTypes:[\"component\",\"directive\",\"filter\"],_lifecycleHooks:[\"beforeCreate\",\"created\",\"beforeMount\",\"mounted\",\"beforeUpdate\",\"updated\",\"beforeDestroy\",\"destroyed\",\"activated\",\"deactivated\"],_maxUpdateCount:100},ui=p,fi=0,di=function(){this.id=fi++,this.subs=[]};di.prototype.addSub=function(e){this.subs.push(e)},di.prototype.removeSub=function(e){r(this.subs,e)},di.prototype.depend=function(){di.target&&di.target.addDep(this)},di.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},di.target=null;var pi=[],vi=Array.prototype,hi=Object.create(vi);[\"push\",\"pop\",\"shift\",\"unshift\",\"splice\",\"sort\",\"reverse\"].forEach(function(e){var t=vi[e];y(hi,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case\"push\":o=i;break;case\"unshift\":o=i;break;case\"splice\":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var mi=Object.getOwnPropertyNames(hi),gi={shouldConvert:!0,isSettingProps:!1},yi=function(e){if(this.value=e,this.dep=new di,this.vmCount=0,y(e,\"__ob__\",this),Array.isArray(e)){var t=Yr?x:C;t(e,hi,mi),this.observeArray(e)}else this.walk(e)};yi.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]])},yi.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t])};var _i=li.optionMergeStrategies;_i.data=function(e,t,n){return n?e||t?function(){var r=\"function\"==typeof t?t.call(n):t,i=\"function\"==typeof e?e.call(n):void 0;return r?j(r,i):i}:void 0:t?\"function\"!=typeof t?e:e?function(){return j(t.call(this),e.call(this))}:t:e},li._lifecycleHooks.forEach(function(e){_i[e]=E}),li._assetTypes.forEach(function(e){_i[e+\"s\"]=N}),_i.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};l(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},_i.props=_i.methods=_i.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return l(n,e),l(n,t),n};var bi=function(e,t){return void 0===t?e:t},$i=Object.freeze({defineReactive:A,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:Br,remove:r,hasOwn:i,isPrimitive:o,cached:a,camelize:Vr,capitalize:zr,hyphenate:Kr,bind:s,toArray:c,extend:l,isObject:u,isPlainObject:f,toObject:d,noop:p,no:Zr,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:Yr,inBrowser:Qr,UA:Xr,isIE:ei,isIE9:ti,isEdge:ni,isAndroid:ri,isIOS:ii,isServerRendering:oi,devtools:ai,nextTick:si,get _Set(){return Fr},mergeOptions:M,resolveAsset:P,warn:ui,formatComponentName:ci,validateProp:R}),wi=[],xi={},Ci=!1,ki=!1,Ai=0,Oi=0,Si=function(e,t,n,r){void 0===r&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++Oi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Fr,this.newDepIds=new Fr,\"function\"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Si.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&z(e),w(),this.cleanupDeps(),e},Si.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Si.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Si.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():V(this)},Si.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){if(!li.errorHandler)throw e;li.errorHandler.call(null,e,this.vm)}else this.cb.call(this.vm,e,t)}}},Si.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Si.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Si.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Ti=new Fr,ji={enumerable:!0,configurable:!0,get:p,set:p},Ei=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=o,this.context=a,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=s,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},Ni=function(){var e=new Ei;return e.text=\"\",e.isComment=!0,e},Li=null,Di={init:ye,prepatch:_e,insert:be,destroy:$e},Mi=Object.keys(Di),Pi=0;De(Re),ee(Re),Le(Re),pe(Re),je(Re);var Ri=[String,RegExp],Ii={name:\"keep-alive\",abstract:!0,props:{include:Ri,exclude:Ri},created:function(){this.cache=Object.create(null)},render:function(){var e=fe(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=t.Ctor.options.name||t.tag;if(n&&(this.include&&!He(this.include,n)||this.exclude&&He(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?\"::\"+t.tag:\"\"):e.key;this.cache[r]?e.child=this.cache[r].child:this.cache[r]=e,e.data.keepAlive=!0}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];ve(n.child,\"deactivated\"),n.child.$destroy()}}},Fi={KeepAlive:Ii};Ve(Re),Object.defineProperty(Re.prototype,\"$isServer\",{get:oi}),Re.version=\"2.1.3\";var Bi,Ui=function(e,t){return\"value\"===t&&(\"input\"===e||\"textarea\"===e||\"option\"===e)||\"selected\"===t&&\"option\"===e||\"checked\"===t&&\"input\"===e||\"muted\"===t&&\"video\"===e},Hi=n(\"contenteditable,draggable,spellcheck\"),Vi=n(\"allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible\"),zi=\"http://www.w3.org/1999/xlink\",Ji=function(e){return\":\"===e.charAt(5)&&\"xlink\"===e.slice(0,5)},Ki=function(e){return Ji(e)?e.slice(6,e.length):\"\"},qi=function(e){return null==e||e===!1},Wi={svg:\"http://www.w3.org/2000/svg\",math:\"http://www.w3.org/1998/Math/MathML\",xhtml:\"http://www.w3.org/1999/xhtml\"},Zi=n(\"html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template\"),Gi=n(\"area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr\",!0),Yi=n(\"colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source\",!0),Qi=n(\"address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track\",!0),Xi=n(\"svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view\",!0),eo=function(e){return\"pre\"===e},to=function(e){return Zi(e)||Xi(e)},no=Object.create(null),ro=Object.freeze({createElement:Qe,createElementNS:Xe,createTextNode:et,createComment:tt,insertBefore:nt,removeChild:rt,appendChild:it,parentNode:ot,nextSibling:at,tagName:st,setTextContent:ct,childNodes:lt,setAttribute:ut}),io={create:function(e,t){ft(t)},update:function(e,t){e.data.ref!==t.data.ref&&(ft(e,!0),ft(t))},destroy:function(e){ft(e,!0)}},oo=new Ei(\"\",{},[]),ao=[\"create\",\"update\",\"remove\",\"destroy\"],so={create:gt,update:gt,destroy:function(e){gt(e,oo)}},co=Object.create(null),lo=[io,so],uo={create:$t,update:$t},fo={create:xt,update:xt},po={create:Ct,update:Ct},vo={create:kt,update:kt},ho=a(function(e){var t={},n=e.indexOf(\"background\")>=0,r=n?/;(?![^(]*\\))/g:\";\",i=n?/:(.+)/:\":\";return e.split(r).forEach(function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),mo=/^--/,go=function(e,t,n){mo.test(t)?e.style.setProperty(t,n):e.style[_o(t)]=n},yo=[\"Webkit\",\"Moz\",\"ms\"],_o=a(function(e){if(Bi=Bi||document.createElement(\"div\"),e=Vr(e),\"filter\"!==e&&e in Bi.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<yo.length;n++){var r=yo[n]+t;if(r in Bi.style)return r}}),bo={create:Tt,update:Tt},$o=Qr&&!ti,wo=\"transition\",xo=\"animation\",Co=\"transition\",ko=\"transitionend\",Ao=\"animation\",Oo=\"animationend\";$o&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Co=\"WebkitTransition\",ko=\"webkitTransitionEnd\"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ao=\"WebkitAnimation\",Oo=\"webkitAnimationEnd\"));var So=Qr&&window.requestAnimationFrame||setTimeout,To=/\\b(transform|all)(,|$)/,jo=a(function(e){return{enterClass:e+\"-enter\",leaveClass:e+\"-leave\",appearClass:e+\"-enter\",enterActiveClass:e+\"-enter-active\",leaveActiveClass:e+\"-leave-active\",appearActiveClass:e+\"-enter-active\"}}),Eo=Qr?{create:function(e,t){t.data.show||Ft(t)},remove:function(e,t){e.data.show?t():Bt(e,t)}}:{},No=[uo,fo,po,vo,bo,Eo],Lo=No.concat(lo),Do=mt({nodeOps:ro,modules:Lo});ti&&document.addEventListener(\"selectionchange\",function(){var e=document.activeElement;e&&e.vmodel&&Wt(e,\"input\")});var Mo={inserted:function(e,t,n){if(\"select\"===n.tag){var r=function(){Vt(e,t,n.context)};r(),(ei||ni)&&setTimeout(r,0)}else\"textarea\"!==n.tag&&\"text\"!==e.type||t.modifiers.lazy||(ri||(e.addEventListener(\"compositionstart\",Kt),e.addEventListener(\"compositionend\",qt)),ti&&(e.vmodel=!0))},componentUpdated:function(e,t,n){if(\"select\"===n.tag){Vt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return zt(t,e.options)}):t.value!==t.oldValue&&zt(t.value,e.options);r&&Wt(e,\"change\")}}},Po={bind:function(e,t,n){var r=t.value;n=Zt(n);var i=n.data&&n.data.transition;r&&i&&!ti&&Ft(n);var o=\"none\"===e.style.display?\"\":e.style.display;e.style.display=r?o:\"none\",e.__vOriginalDisplay=o},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=Zt(n);var o=n.data&&n.data.transition;o&&!ti?r?(Ft(n),e.style.display=e.__vOriginalDisplay):Bt(n,function(){e.style.display=\"none\"}):e.style.display=r?e.__vOriginalDisplay:\"none\"}}},Ro={model:Mo,show:Po},Io={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,\r\nappearClass:String,appearActiveClass:String},Fo={name:\"transition\",props:Io,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(Xt(this.$vnode))return i;var o=Gt(i);if(!o)return i;if(this._leaving)return Qt(e,i);var a=o.key=null==o.key||o.isStatic?\"__v\"+(o.tag+this._uid)+\"__\":o.key,s=(o.data||(o.data={})).transition=Yt(this),c=this._vnode,u=Gt(c);if(o.data.directives&&o.data.directives.some(function(e){return\"show\"===e.name})&&(o.data.show=!0),u&&u.data&&u.key!==a){var f=u.data.transition=l({},s);if(\"out-in\"===r)return this._leaving=!0,ie(f,\"afterLeave\",function(){t._leaving=!1,t.$forceUpdate()},a),Qt(e,i);if(\"in-out\"===r){var d,p=function(){d()};ie(s,\"afterEnter\",p,a),ie(s,\"enterCancelled\",p,a),ie(f,\"delayLeave\",function(e){d=e},a)}}return i}}},Bo=l({tag:String,moveClass:String},Io);delete Bo.mode;var Uo={props:Bo,render:function(e){for(var t=this.tag||this.$vnode.data.tag||\"span\",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Yt(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf(\"__vlist\")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=e(t,null,l),this.removed=u}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||\"v\")+\"-move\";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(en),e.forEach(tn),e.forEach(nn);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Lt(n,t),r.transform=r.WebkitTransform=r.transitionDuration=\"\",n.addEventListener(ko,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ko,e),n._moveCb=null,Dt(n,t))})}})}},methods:{hasMove:function(e,t){if(!$o)return!1;if(null!=this._hasMove)return this._hasMove;Lt(e,t);var n=Pt(e);return Dt(e,t),this._hasMove=n.hasTransform}}},Ho={Transition:Fo,TransitionGroup:Uo};Re.config.isUnknownElement=Ge,Re.config.isReservedTag=to,Re.config.getTagNamespace=Ze,Re.config.mustUseProp=Ui,l(Re.options.directives,Ro),l(Re.options.components,Ho),Re.prototype.__patch__=Qr?Do:p,Re.prototype.$mount=function(e,t){return e=e&&Qr?Ye(e):void 0,this._mount(e,t)},setTimeout(function(){li.devtools&&ai&&ai.emit(\"init\",Re)},0);var Vo,zo=!!Qr&&rn(\"\\n\",\"&#10;\"),Jo=/([^\\s\"'<>\\/=]+)/,Ko=/(?:=)/,qo=[/\"([^\"]*)\"+/.source,/'([^']*)'+/.source,/([^\\s\"'=<>`]+)/.source],Wo=new RegExp(\"^\\\\s*\"+Jo.source+\"(?:\\\\s*(\"+Ko.source+\")\\\\s*(?:\"+qo.join(\"|\")+\"))?\"),Zo=\"[a-zA-Z_][\\\\w\\\\-\\\\.]*\",Go=\"((?:\"+Zo+\"\\\\:)?\"+Zo+\")\",Yo=new RegExp(\"^<\"+Go),Qo=/^\\s*(\\/?)>/,Xo=new RegExp(\"^<\\\\/\"+Go+\"[^>]*>\"),ea=/^<!DOCTYPE [^>]+>/i,ta=/^<!--/,na=/^<!\\[/,ra=!1;\"x\".replace(/x(.)?/g,function(e,t){ra=\"\"===t});var ia,oa,aa,sa,ca,la,ua,fa,da,pa,va,ha,ma,ga,ya,_a,ba,$a,wa,xa,Ca,ka,Aa,Oa,Sa=n(\"script,style\",!0),Ta=function(e){return\"lang\"===e.name&&\"html\"!==e.value},ja=function(e,t,n){return!!Sa(e)||!(!t||1!==n.length)&&!(\"template\"===e&&!n[0].attrs.some(Ta))},Ea={},Na=/&lt;/g,La=/&gt;/g,Da=/&#10;/g,Ma=/&amp;/g,Pa=/&quot;/g,Ra=/\\{\\{((?:.|\\n)+?)\\}\\}/g,Ia=/[-.*+?^${}()|[\\]\\/\\\\]/g,Fa=a(function(e){var t=e[0].replace(Ia,\"\\\\$&\"),n=e[1].replace(Ia,\"\\\\$&\");return new RegExp(t+\"((?:.|\\\\n)+?)\"+n,\"g\")}),Ba=/^v-|^@|^:/,Ua=/(.*?)\\s+(?:in|of)\\s+(.*)/,Ha=/\\((\\{[^}]*\\}|[^,]*),([^,]*)(?:,([^,]*))?\\)/,Va=/^:|^v-bind:/,za=/^@|^v-on:/,Ja=/:(.*)$/,Ka=/\\.[^.]+/g,qa=a(on),Wa=/^xmlns:NS\\d+/,Za=/^NS\\d+:/,Ga=a(Jn),Ya=/^\\s*([\\w$_]+|\\([^)]*?\\))\\s*=>|^function\\s*\\(/,Qa=/^\\s*[A-Za-z_$][\\w$]*(?:\\.[A-Za-z_$][\\w$]*|\\['.*?']|\\[\".*?\"]|\\[\\d+]|\\[[A-Za-z_$][\\w$]*])*\\s*$/,Xa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},es={stop:\"$event.stopPropagation();\",prevent:\"$event.preventDefault();\",self:\"if($event.target !== $event.currentTarget)return;\"},ts=/^mouse|^pointer|^(click|dblclick|contextmenu|wheel)$/,ns={ctrl:\"if(!$event.ctrlKey)return;\",shift:\"if(!$event.shiftKey)return;\",alt:\"if(!$event.altKey)return;\",meta:\"if(!$event.metaKey)return;\"},rs={bind:tr,cloak:p},is={staticKeys:[\"staticClass\"],transformNode:wr,genData:xr},os={staticKeys:[\"staticStyle\"],transformNode:Cr,genData:kr},as=[is,os],ss={model:Ar,text:Nr,html:Lr},cs=Object.create(null),ls={expectHTML:!0,modules:as,staticKeys:v(as),directives:ss,isReservedTag:to,isUnaryTag:Gi,mustUseProp:Ui,getTagNamespace:Ze,isPreTag:eo},us=a(function(e){var t=Ye(e);return t&&t.innerHTML}),fs=Re.prototype.$mount;return Re.prototype.$mount=function(e,t){if(e=e&&Ye(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if(\"string\"==typeof r)\"#\"===r.charAt(0)&&(r=us(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Rr(e));if(r){var i=Mr(r,{warn:ui,shouldDecodeNewlines:zo,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return fs.call(this,e,t)},Re.compile=Mr,Re});"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(12))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "/**\r\n  * vue-router v2.1.0\r\n  * (c) 2016 Evan You\r\n  * @license MIT\r\n  */\r\n!function(t,e){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=e():\"function\"==typeof define&&define.amd?define(e):t.VueRouter=e()}(this,function(){\"use strict\";function t(t,e){t||\"undefined\"!=typeof console&&console.warn(\"[vue-router] \"+e)}function e(t,e){if(void 0===e&&(e={}),t){var r;try{r=n(t)}catch(t){r={}}for(var o in e)r[o]=e[o];return r}return e}function n(t){var e={};return(t=t.trim().replace(/^(\\?|#|&)/,\"\"))?(t.split(\"&\").forEach(function(t){var n=t.replace(/\\+/g,\" \").split(\"=\"),r=vt(n.shift()),o=n.length>0?vt(n.join(\"=\")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function r(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return\"\";if(null===n)return yt(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(yt(e)):r.push(yt(e)+\"=\"+yt(t)))}),r.join(\"&\")}return yt(e)+\"=\"+yt(n)}).filter(function(t){return t.length>0}).join(\"&\"):null;return e?\"?\"+e:\"\"}function o(t,e,n){var r={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||\"/\",hash:e.hash||\"\",query:e.query||{},params:e.params||{},fullPath:a(e),matched:t?i(t):[]};return n&&(r.redirectedFrom=a(n)),Object.freeze(r)}function i(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function a(t){var e=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=\"\"),(e||\"/\")+r(n)+o}function u(t,e){return e===mt?t===e:!!e&&(t.path&&e.path?t.path.replace(gt,\"\")===e.path.replace(gt,\"\")&&t.hash===e.hash&&c(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&c(t.query,e.query)&&c(t.params,e.params)))}function c(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function s(t,e){return 0===t.path.indexOf(e.path.replace(/\\/$/,\"\"))&&(!e.hash||t.hash===e.hash)&&p(t.query,e.query)}function p(t,e){for(var n in e)if(!(n in t))return!1;return!0}function f(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||0!==t.button)){var e=t.target.getAttribute(\"target\");if(!/\\b_blank\\b/i.test(e))return t.preventDefault(),!0}}function h(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],\"a\"===e.tag)return e;if(e.children&&(e=h(e.children)))return e}}function l(t){if(!l.installed){l.installed=!0,lt=t,Object.defineProperty(t.prototype,\"$router\",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,\"$route\",{get:function(){return this.$root._route}}),t.mixin({beforeCreate:function(){this.$options.router&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,\"_route\",this._router.history.current))}}),t.component(\"router-view\",dt),t.component(\"router-link\",bt);var e=t.config.optionMergeStrategies;e.beforeRouteEnter=e.beforeRouteLeave=e.created}}function d(t,e,n){if(\"/\"===t.charAt(0))return t;if(\"?\"===t.charAt(0)||\"#\"===t.charAt(0))return e+t;var r=e.split(\"/\");n&&r[r.length-1]||r.pop();for(var o=t.replace(/^\\//,\"\").split(\"/\"),i=0;i<o.length;i++){var a=o[i];\".\"!==a&&(\"..\"===a?r.pop():r.push(a))}return\"\"!==r[0]&&r.unshift(\"\"),r.join(\"/\")}function y(t){var e=\"\",n=\"\",r=t.indexOf(\"#\");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf(\"?\");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function v(t){return t.replace(/\\/\\//g,\"/\")}function m(t){var e=Object.create(null),n=Object.create(null);return t.forEach(function(t){g(e,n,t)}),{pathMap:e,nameMap:n}}function g(t,e,n,r,o){var i=n.path,a=n.name,u={path:w(i,r),components:n.components||{default:n.component},instances:{},name:a,parent:r,matchAs:o,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{}};n.children&&n.children.forEach(function(n){g(t,e,n,u)}),void 0!==n.alias&&(Array.isArray(n.alias)?n.alias.forEach(function(n){g(t,e,{path:n},r,u.path)}):g(t,e,{path:n.alias},r,u.path)),t[u.path]||(t[u.path]=u),a&&(e[a]||(e[a]=u))}function w(t,e){return t=t.replace(/\\/$/,\"\"),\"/\"===t[0]?t:null==e?t:v(e.path+\"/\"+t)}function b(t,e){for(var n,r=[],o=0,i=0,a=\"\",u=e&&e.delimiter||\"/\";null!=(n=_t.exec(t));){var c=n[0],s=n[1],p=n.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],y=n[5],v=n[6],m=n[7];a&&(r.push(a),a=\"\");var g=null!=h&&null!=f&&f!==h,w=\"+\"===v||\"*\"===v,b=\"?\"===v||\"*\"===v,x=n[2]||u,k=d||y;r.push({name:l||o++,prefix:h||\"\",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?j(k):m?\".*\":\"[^\"+E(x)+\"]+?\"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function x(t,e){return A(b(t,e))}function k(t){return encodeURI(t).replace(/[\\/?#]/g,function(t){return\"%\"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return encodeURI(t).replace(/[?#]/g,function(t){return\"%\"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){for(var e=new Array(t.length),n=0;n<t.length;n++)\"object\"==typeof t[n]&&(e[n]=new RegExp(\"^(?:\"+t[n].pattern+\")$\"));return function(n,r){for(var o=\"\",i=n||{},a=r||{},u=a.pretty?k:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if(\"string\"!=typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected \"'+s.name+'\" to be defined')}if(kt(f)){if(!s.repeat)throw new TypeError('Expected \"'+s.name+'\" to not repeat, but received `'+JSON.stringify(f)+\"`\");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected \"'+s.name+'\" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all \"'+s.name+'\" to match \"'+s.pattern+'\", but received `'+JSON.stringify(p)+\"`\");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?O(f):u(f),!e[c].test(p))throw new TypeError('Expected \"'+s.name+'\" to match \"'+s.pattern+'\", but received \"'+p+'\"');o+=s.prefix+p}}else o+=s}return o}}function E(t){return t.replace(/([.+*?=^!:${}()[\\]|\\/\\\\])/g,\"\\\\$1\")}function j(t){return t.replace(/([=!:$\\/()])/g,\"\\\\$1\")}function R(t,e){return t.keys=e,t}function _(t){return t.sensitive?\"\":\"i\"}function $(t,e){var n=t.source.match(/\\((?!\\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return R(t,e)}function T(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(C(t[o],e,n).source);var i=new RegExp(\"(?:\"+r.join(\"|\")+\")\",_(n));return R(i,e)}function S(t,e,n){return q(b(t,n),e,n)}function q(t,e,n){kt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i=\"\",a=0;a<t.length;a++){var u=t[a];if(\"string\"==typeof u)i+=E(u);else{var c=E(u.prefix),s=\"(?:\"+u.pattern+\")\";e.push(u),u.repeat&&(s+=\"(?:\"+c+s+\")*\"),s=u.optional?u.partial?c+\"(\"+s+\")?\":\"(?:\"+c+\"(\"+s+\"))?\":c+\"(\"+s+\")\",i+=s}}var p=E(n.delimiter||\"/\"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+\"(?:\"+p+\"(?=$))?\"),i+=o?\"$\":r&&f?\"\":\"(?=\"+p+\"|$)\",R(new RegExp(\"^\"+i,_(n)),e)}function C(t,e,n){return kt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?$(t,e):kt(t)?T(t,e,n):S(t,e,n)}function P(t){var e,n,r=$t[t];return r?(e=r.keys,n=r.regexp):(e=[],n=Ot(t,e),$t[t]={keys:e,regexp:n}),{keys:e,regexp:n}}function U(t,e,n){try{var r=Tt[t]||(Tt[t]=Ot.compile(t));return r(e||{},{pretty:!0})}catch(t){return\"\"}}function L(t,n,r){var o=\"string\"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&n){o=z({},o),o._normalized=!0;var i=z(z({},n.params),o.params);if(n.name)o.name=n.name,o.params=i;else if(n.matched){var a=n.matched[n.matched.length-1].path;o.path=U(a,i,\"path \"+n.path)}return o}var u=y(o.path||\"\"),c=n&&n.path||\"/\",s=u.path?d(u.path,c,r||o.append):n&&n.path||\"/\",p=e(u.query,o.query),f=o.hash||u.hash;return f&&\"#\"!==f.charAt(0)&&(f=\"#\"+f),{_normalized:!0,path:s,query:p,hash:f}}function z(t,e){for(var n in e)t[n]=e[n];return t}function H(e){function n(t,e,n){var r=L(t,e),o=r.name;if(o){var i=s[o],u=P(i.path).keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if(\"object\"!=typeof r.params&&(r.params={}),e&&\"object\"==typeof e.params)for(var p in e.params)!(p in r.params)&&u.indexOf(p)>-1&&(r.params[p]=e.params[p]);if(i)return r.path=U(i.path,r.params,'named route \"'+o+'\"'),a(i,r,n)}else if(r.path){r.params={};for(var f in c)if(M(f,r.params,r.path))return a(c[f],r,n)}return a(null,r)}function r(e,r){var i=e.redirect,u=\"function\"==typeof i?i(o(e,r)):i;if(\"string\"==typeof u&&(u={path:u}),!u||\"object\"!=typeof u)return a(null,r);var c=u,p=c.name,f=c.path,h=r.query,l=r.hash,d=r.params;if(h=c.hasOwnProperty(\"query\")?c.query:h,l=c.hasOwnProperty(\"hash\")?c.hash:l,d=c.hasOwnProperty(\"params\")?c.params:d,p){s[p];return n({_normalized:!0,name:p,query:h,hash:l,params:d},void 0,r)}if(f){var y=V(f,e),v=U(y,d,'redirect route with path \"'+y+'\"');return n({_normalized:!0,path:v,query:h,hash:l},void 0,r)}return t(!1,\"invalid redirect option: \"+JSON.stringify(u)),a(null,r)}function i(t,e,r){var o=U(r,e.params,'aliased route with path \"'+r+'\"'),i=n({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return e.params=i.params,a(c,e)}return a(null,e)}function a(t,e,n){return t&&t.redirect?r(t,n||e):t&&t.matchAs?i(t,e,t.matchAs):o(t,e,n)}var u=m(e),c=u.pathMap,s=u.nameMap;return n}function M(t,e,n){var r=P(t),o=r.regexp,i=r.keys,a=n.match(o);if(!a)return!1;if(!e)return!0;for(var u=1,c=a.length;u<c;++u){var s=i[u-1],p=\"string\"==typeof a[u]?decodeURIComponent(a[u]):a[u];s&&(e[s.name]=p)}return!0}function V(t,e){return d(t,e.parent?e.parent.path:\"/\",!0)}function B(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function F(t){if(!t)if(St){var e=document.querySelector(\"base\");t=e?e.getAttribute(\"href\"):\"/\"}else t=\"/\";return\"/\"!==t.charAt(0)&&(t=\"/\"+t),t.replace(/\\/$/,\"\")}function I(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{activated:e.slice(n),deactivated:t.slice(n)}}function D(t,e){return\"function\"!=typeof t&&(t=lt.extend(t)),t.options[e]}function J(t){return Q(G(t,function(t,e){var n=D(t,\"beforeRouteLeave\");if(n)return Array.isArray(n)?n.map(function(t){return K(t,e)}):K(n,e)}).reverse())}function K(t,e){return function(){return t.apply(e,arguments)}}function N(t,e,n){return Q(G(t,function(t,r,o,i){var a=D(t,\"beforeRouteEnter\");if(a)return Array.isArray(a)?a.map(function(t){return X(t,e,o,i,n)}):X(a,e,o,i,n)}))}function X(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),\"function\"==typeof t&&e.push(function(){Y(t,n.instances,r,o)})})}}function Y(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){Y(t,e,n,r)},16)}function W(e){return G(e,function(e,n,r,o){if(\"function\"==typeof e&&!e.options)return function(n,i,a){var u=function(t){r.components[o]=t,a()},c=function(e){t(!1,\"Failed to resolve async component \"+o+\": \"+e),a(!1)},s=e(u,c);s&&\"function\"==typeof s.then&&s.then(u,c)}})}function G(t,e){return Q(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function Q(t){return Array.prototype.concat.apply([],t)}function Z(t){t&&(Pt[t]={x:window.pageXOffset,y:window.pageYOffset})}function tt(t){if(t)return Pt[t]}function et(t){var e=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-e.left,y:n.top-e.top}}function nt(t){return ot(t.x)||ot(t.y)}function rt(t){return{x:ot(t.x)?t.x:window.pageXOffset,y:ot(t.y)?t.y:window.pageYOffset}}function ot(t){return\"number\"==typeof t}function it(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||\"/\")+window.location.search+window.location.hash}function at(t,e){var n=window.history;try{e?n.replaceState({key:Lt},\"\",t):(Lt=Ut(),n.pushState({key:Lt},\"\",t)),Z(Lt)}catch(n){window.location[e?\"assign\":\"replace\"](t)}}function ut(t){at(t,!0)}function ct(){var t=st();return\"/\"===t.charAt(0)||(ft(\"/\"+t),!1)}function st(){var t=window.location.href,e=t.indexOf(\"#\");return e===-1?\"\":t.slice(e+1)}function pt(t){window.location.hash=t}function ft(t){var e=window.location.href.indexOf(\"#\");window.location.replace(window.location.href.slice(0,e>=0?e:0)+\"#\"+t)}function ht(t,e,n){var r=\"hash\"===n?\"/#\"+e:e;return t?v(t+r):r}var lt,dt={name:\"router-view\",functional:!0,props:{name:{type:String,default:\"default\"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$route,u=o._routerViewCache||(o._routerViewCache={}),c=0,s=!1;o;)o.$vnode&&o.$vnode.data.routerView&&c++,o._inactive&&(s=!0),o=o.$parent;i.routerViewDepth=c;var p=a.matched[c];if(!p)return t();var f=n.name,h=s?u[f]:u[f]=p.components[f];if(!s){var l=i.hook||(i.hook={});l.init=function(t){p.instances[f]=t.child},l.prepatch=function(t,e){p.instances[f]=e.child},l.destroy=function(t){p.instances[f]===t.child&&(p.instances[f]=void 0)}}return t(h,i,r)}},yt=encodeURIComponent,vt=decodeURIComponent,mt=o(null,{path:\"/\"}),gt=/\\/$/,wt=[String,Object],bt={name:\"router-link\",props:{to:{type:wt,required:!0},tag:{type:String,default:\"a\"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,event:{type:[String,Array],default:\"click\"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),a=i.normalizedTo,c=i.resolved,p=i.href,l={},d=this.activeClass||n.options.linkActiveClass||\"router-link-active\",y=a.path?o(null,a):c;l[d]=this.exact?u(r,y):s(r,y);var v=function(t){f(t)&&(e.replace?n.replace(a):n.push(a))},m={click:f};Array.isArray(this.event)?this.event.forEach(function(t){m[t]=v}):m[this.event]=v;var g={class:l};if(\"a\"===this.tag)g.on=m,g.attrs={href:p};else{var w=h(this.$slots.default);if(w){w.isStatic=!1;var b=lt.util.extend,x=w.data=b({},w.data);x.on=m;var k=w.data.attrs=b({},w.data.attrs);k.href=p}else g.on=m}return t(this.tag,g,this.$slots.default)}},xt=Array.isArray||function(t){return\"[object Array]\"==Object.prototype.toString.call(t)},kt=xt,Ot=C,At=b,Et=x,jt=A,Rt=q,_t=new RegExp([\"(\\\\\\\\.)\",\"([\\\\/.])?(?:(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?|(\\\\*))\"].join(\"|\"),\"g\");Ot.parse=At,Ot.compile=Et,Ot.tokensToFunction=jt,Ot.tokensToRegExp=Rt;var $t=Object.create(null),Tt=Object.create(null),St=\"undefined\"!=typeof window,qt=St&&function(){var t=window.navigator.userAgent;return(t.indexOf(\"Android 2.\")===-1&&t.indexOf(\"Android 4.0\")===-1||t.indexOf(\"Mobile Safari\")===-1||t.indexOf(\"Chrome\")!==-1||t.indexOf(\"Windows Phone\")!==-1)&&(window.history&&\"pushState\"in window.history)}(),Ct=function(t,e){this.router=t,this.base=F(e),this.current=mt,this.pending=null};Ct.prototype.listen=function(t){this.cb=t},Ct.prototype.transitionTo=function(t,e){var n=this,r=this.router.match(t,this.current);this.confirmTransition(r,function(){n.updateRoute(r),e&&e(r),n.ensureURL()})},Ct.prototype.confirmTransition=function(t,e){var n=this,r=this.current;if(u(t,r))return void this.ensureURL();var o=I(this.current.matched,t.matched),i=o.deactivated,a=o.activated,c=[].concat(J(i),this.router.beforeHooks,a.map(function(t){return t.beforeEnter}),W(a));this.pending=t;var s=function(e,o){n.pending===t&&e(t,r,function(t){t===!1?n.ensureURL(!0):\"string\"==typeof t||\"object\"==typeof t?\"object\"==typeof t&&t.replace?n.replace(t):n.push(t):o(t)})};B(c,s,function(){var r=[],o=N(a,r,function(){return n.current===t});B(o,s,function(){n.pending===t&&(n.pending=null,e(t),n.router.app&&n.router.app.$nextTick(function(){r.forEach(function(t){return t()})}))})})},Ct.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var Pt=Object.create(null),Ut=function(){return String(Date.now())},Lt=Ut(),zt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;window.addEventListener(\"popstate\",function(t){Lt=t.state&&t.state.key;var e=r.current;r.transitionTo(it(r.base),function(t){o&&r.handleScroll(t,e,!0)})}),o&&window.addEventListener(\"scroll\",function(){Z(Lt)})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t){var e=this,n=this.current;this.transitionTo(t,function(t){at(v(e.base+t.fullPath)),e.handleScroll(t,n,!1)})},e.prototype.replace=function(t){var e=this,n=this.current;this.transitionTo(t,function(t){ut(v(e.base+t.fullPath)),e.handleScroll(t,n,!1)})},e.prototype.ensureURL=function(t){if(it(this.base)!==this.current.fullPath){var e=v(this.base+this.current.fullPath);t?at(e):ut(e)}},e.prototype.handleScroll=function(t,e,n){var r=this.router;if(r.app){var o=r.options.scrollBehavior;o&&r.app.$nextTick(function(){var r=tt(Lt),i=o(t,e,n?r:null);if(i){var a=\"object\"==typeof i;if(a&&\"string\"==typeof i.selector){var u=document.querySelector(i.selector);u?r=et(u):nt(i)&&(r=rt(i))}else a&&nt(i)&&(r=rt(i));r&&window.scrollTo(r.x,r.y)}})}},e}(Ct),Ht=function(t){function e(e,n,r){var o=this;t.call(this,e,n),window.addEventListener(\"hashchange\",function(){o.onHashChange()}),r&&this.checkFallback()||ct()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.checkFallback=function(){var t=it(this.base);if(!/^\\/#/.test(t))return window.location.replace(v(this.base+\"/#\"+t)),!0},e.prototype.onHashChange=function(){ct()&&this.transitionTo(st(),function(t){ft(t.fullPath)})},e.prototype.push=function(t){this.transitionTo(t,function(t){pt(t.fullPath)})},e.prototype.replace=function(t){this.transitionTo(t,function(t){ft(t.fullPath)})},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;st()!==e&&(t?pt(e):ft(e))},e}(Ct),Mt=function(t){function e(e){t.call(this,e),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index+1).concat(t),e.index++})},e.prototype.replace=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index).concat(t)})},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.ensureURL=function(){},e}(Ct),Vt=function(t){void 0===t&&(t={}),this.app=null,this.options=t,this.beforeHooks=[],this.afterHooks=[],this.match=H(t.routes||[]);var e=t.mode||\"hash\";switch(this.fallback=\"history\"===e&&!qt,this.fallback&&(e=\"hash\"),St||(e=\"abstract\"),this.mode=e,e){case\"history\":this.history=new zt(this,t.base);break;case\"hash\":this.history=new Ht(this,t.base,this.fallback);break;case\"abstract\":this.history=new Mt(this)}},Bt={currentRoute:{}};return Bt.currentRoute.get=function(){return this.history&&this.history.current},Vt.prototype.init=function(t){var e=this;this.app=t;var n=this.history;n instanceof zt?n.transitionTo(it(n.base)):n instanceof Ht&&n.transitionTo(st()),n.listen(function(t){e.app._route=t})},Vt.prototype.beforeEach=function(t){this.beforeHooks.push(t)},Vt.prototype.afterEach=function(t){this.afterHooks.push(t)},Vt.prototype.push=function(t){this.history.push(t)},Vt.prototype.replace=function(t){this.history.replace(t)},Vt.prototype.go=function(t){this.history.go(t)},Vt.prototype.back=function(){this.go(-1)},Vt.prototype.forward=function(){this.go(1)},Vt.prototype.getMatchedComponents=function(t){var e=t?this.resolve(t).resolved:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Vt.prototype.resolve=function(t,e,n){var r=L(t,e||this.history.current,n),o=this.match(r,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=ht(a,i,this.mode);return{normalizedTo:r,resolved:o,href:u}},Object.defineProperties(Vt.prototype,Bt),Vt.install=l,St&&window.Vue&&window.Vue.use(Vt),Vt});"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(14))

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "/* Copyright (c) 2010-2016 Marcus Westin */\n(function(f){if(typeof exports===\"object\"&&typeof module!==\"undefined\"){module.exports=f()}else if(typeof define===\"function\"&&define.amd){define([],f)}else{var g;if(typeof window!==\"undefined\"){g=window}else if(typeof global!==\"undefined\"){g=global}else if(typeof self!==\"undefined\"){g=self}else{g=this}g.store = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\n(function (global){\n\"use strict\";module.exports=function(){function e(){try{return o in n&&n[o]}catch(e){return!1}}var t,r={},n=\"undefined\"!=typeof window?window:global,i=n.document,o=\"localStorage\",a=\"script\";if(r.disabled=!1,r.version=\"1.3.20\",r.set=function(e,t){},r.get=function(e,t){},r.has=function(e){return void 0!==r.get(e)},r.remove=function(e){},r.clear=function(){},r.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var i=r.get(e,t);n(i),r.set(e,i)},r.getAll=function(){},r.forEach=function(){},r.serialize=function(e){return JSON.stringify(e)},r.deserialize=function(e){if(\"string\"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},e())t=n[o],r.set=function(e,n){return void 0===n?r.remove(e):(t.setItem(e,r.serialize(n)),n)},r.get=function(e,n){var i=r.deserialize(t.getItem(e));return void 0===i?n:i},r.remove=function(e){t.removeItem(e)},r.clear=function(){t.clear()},r.getAll=function(){var e={};return r.forEach(function(t,r){e[t]=r}),e},r.forEach=function(e){for(var n=0;n<t.length;n++){var i=t.key(n);e(i,r.get(i))}};else if(i&&i.documentElement.addBehavior){var c,u;try{u=new ActiveXObject(\"htmlfile\"),u.open(),u.write(\"<\"+a+\">document.w=window</\"+a+'><iframe src=\"/favicon.ico\"></iframe>'),u.close(),c=u.w.frames[0].document,t=c.createElement(\"div\")}catch(l){t=i.createElement(\"div\"),c=i.body}var f=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(t),c.appendChild(t),t.addBehavior(\"#default#userData\"),t.load(o);var i=e.apply(r,n);return c.removeChild(t),i}},d=new RegExp(\"[!\\\"#$%&'()*+,/\\\\\\\\:;<=>?@[\\\\]^`{|}~]\",\"g\"),s=function(e){return e.replace(/^d/,\"___$&\").replace(d,\"___\")};r.set=f(function(e,t,n){return t=s(t),void 0===n?r.remove(t):(e.setAttribute(t,r.serialize(n)),e.save(o),n)}),r.get=f(function(e,t,n){t=s(t);var i=r.deserialize(e.getAttribute(t));return void 0===i?n:i}),r.remove=f(function(e,t){t=s(t),e.removeAttribute(t),e.save(o)}),r.clear=f(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(o);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(o)}),r.getAll=function(e){var t={};return r.forEach(function(e,r){t[e]=r}),t},r.forEach=f(function(e,t){for(var n,i=e.XMLDocument.documentElement.attributes,o=0;n=i[o];++o)t(n.name,r.deserialize(e.getAttribute(n.name)))})}try{var v=\"__storejs__\";r.set(v,v),r.get(v)!=v&&(r.disabled=!0),r.remove(v)}catch(l){r.disabled=!0}return r.enabled=!r.disabled,r}();\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{}]},{},[1])(1)\n});"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*
	 Copyright 2013 Daniel Wirtz <dcode@dcode.io>
	 Copyright 2009 The Closure Library Authors. All Rights Reserved.
	
	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at
	
	 http://www.apache.org/licenses/LICENSE-2.0
	
	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS-IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */
	
	/**
	 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/long.js for details
	 */
	(function(global, factory) {
	
	    /* AMD */ if ("function" === 'function' && __webpack_require__(17)["amd"])
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* CommonJS */ else if ("function" === 'function' && typeof module === "object" && module && module["exports"])
	        module["exports"] = factory();
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["Long"] = factory();
	
	})(this, function() {
	    "use strict";
	
	    /**
	     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
	     *  See the from* functions below for more convenient ways of constructing Longs.
	     * @exports Long
	     * @class A Long class for representing a 64 bit two's-complement integer value.
	     * @param {number} low The low (signed) 32 bits of the long
	     * @param {number} high The high (signed) 32 bits of the long
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @constructor
	     */
	    function Long(low, high, unsigned) {
	
	        /**
	         * The low 32 bits as a signed value.
	         * @type {number}
	         */
	        this.low = low | 0;
	
	        /**
	         * The high 32 bits as a signed value.
	         * @type {number}
	         */
	        this.high = high | 0;
	
	        /**
	         * Whether unsigned or not.
	         * @type {boolean}
	         */
	        this.unsigned = !!unsigned;
	    }
	
	    // The internal representation of a long is the two given signed, 32-bit values.
	    // We use 32-bit pieces because these are the size of integers on which
	    // Javascript performs bit-operations.  For operations like addition and
	    // multiplication, we split each number into 16 bit pieces, which can easily be
	    // multiplied within Javascript's floating-point representation without overflow
	    // or change in sign.
	    //
	    // In the algorithms below, we frequently reduce the negative case to the
	    // positive case by negating the input(s) and then post-processing the result.
	    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
	    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
	    // a positive number, it overflows back into a negative).  Not handling this
	    // case would often result in infinite recursion.
	    //
	    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
	    // methods on which they depend.
	
	    /**
	     * An indicator used to reliably determine if an object is a Long or not.
	     * @type {boolean}
	     * @const
	     * @private
	     */
	    Long.prototype.__isLong__;
	
	    Object.defineProperty(Long.prototype, "__isLong__", {
	        value: true,
	        enumerable: false,
	        configurable: false
	    });
	
	    /**
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     * @inner
	     */
	    function isLong(obj) {
	        return (obj && obj["__isLong__"]) === true;
	    }
	
	    /**
	     * Tests if the specified object is a Long.
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     */
	    Long.isLong = isLong;
	
	    /**
	     * A cache of the Long representations of small integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var INT_CACHE = {};
	
	    /**
	     * A cache of the Long representations of small unsigned integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var UINT_CACHE = {};
	
	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromInt(value, unsigned) {
	        var obj, cachedObj, cache;
	        if (unsigned) {
	            value >>>= 0;
	            if (cache = (0 <= value && value < 256)) {
	                cachedObj = UINT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
	            if (cache)
	                UINT_CACHE[value] = obj;
	            return obj;
	        } else {
	            value |= 0;
	            if (cache = (-128 <= value && value < 128)) {
	                cachedObj = INT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, value < 0 ? -1 : 0, false);
	            if (cache)
	                INT_CACHE[value] = obj;
	            return obj;
	        }
	    }
	
	    /**
	     * Returns a Long representing the given 32 bit integer value.
	     * @function
	     * @param {number} value The 32 bit integer in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromInt = fromInt;
	
	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromNumber(value, unsigned) {
	        if (isNaN(value) || !isFinite(value))
	            return unsigned ? UZERO : ZERO;
	        if (unsigned) {
	            if (value < 0)
	                return UZERO;
	            if (value >= TWO_PWR_64_DBL)
	                return MAX_UNSIGNED_VALUE;
	        } else {
	            if (value <= -TWO_PWR_63_DBL)
	                return MIN_VALUE;
	            if (value + 1 >= TWO_PWR_63_DBL)
	                return MAX_VALUE;
	        }
	        if (value < 0)
	            return fromNumber(-value, unsigned).neg();
	        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
	    }
	
	    /**
	     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
	     * @function
	     * @param {number} value The number in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromNumber = fromNumber;
	
	    /**
	     * @param {number} lowBits
	     * @param {number} highBits
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromBits(lowBits, highBits, unsigned) {
	        return new Long(lowBits, highBits, unsigned);
	    }
	
	    /**
	     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
	     *  assumed to use 32 bits.
	     * @function
	     * @param {number} lowBits The low 32 bits
	     * @param {number} highBits The high 32 bits
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromBits = fromBits;
	
	    /**
	     * @function
	     * @param {number} base
	     * @param {number} exponent
	     * @returns {number}
	     * @inner
	     */
	    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
	
	    /**
	     * @param {string} str
	     * @param {(boolean|number)=} unsigned
	     * @param {number=} radix
	     * @returns {!Long}
	     * @inner
	     */
	    function fromString(str, unsigned, radix) {
	        if (str.length === 0)
	            throw Error('empty string');
	        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
	            return ZERO;
	        if (typeof unsigned === 'number') {
	            // For goog.math.long compatibility
	            radix = unsigned,
	            unsigned = false;
	        } else {
	            unsigned = !! unsigned;
	        }
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');
	
	        var p;
	        if ((p = str.indexOf('-')) > 0)
	            throw Error('interior hyphen');
	        else if (p === 0) {
	            return fromString(str.substring(1), unsigned, radix).neg();
	        }
	
	        // Do several (8) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 8));
	
	        var result = ZERO;
	        for (var i = 0; i < str.length; i += 8) {
	            var size = Math.min(8, str.length - i),
	                value = parseInt(str.substring(i, i + size), radix);
	            if (size < 8) {
	                var power = fromNumber(pow_dbl(radix, size));
	                result = result.mul(power).add(fromNumber(value));
	            } else {
	                result = result.mul(radixToPower);
	                result = result.add(fromNumber(value));
	            }
	        }
	        result.unsigned = unsigned;
	        return result;
	    }
	
	    /**
	     * Returns a Long representation of the given string, written using the specified radix.
	     * @function
	     * @param {string} str The textual representation of the Long
	     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromString = fromString;
	
	    /**
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
	     * @returns {!Long}
	     * @inner
	     */
	    function fromValue(val) {
	        if (val /* is compatible */ instanceof Long)
	            return val;
	        if (typeof val === 'number')
	            return fromNumber(val);
	        if (typeof val === 'string')
	            return fromString(val);
	        // Throws for non-objects, converts non-instanceof Long:
	        return fromBits(val.low, val.high, val.unsigned);
	    }
	
	    /**
	     * Converts the specified value to a Long.
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
	     * @returns {!Long}
	     */
	    Long.fromValue = fromValue;
	
	    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
	    // no runtime penalty for these.
	
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_16_DBL = 1 << 16;
	
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24_DBL = 1 << 24;
	
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
	
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
	
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
	
	    /**
	     * @type {!Long}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
	
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ZERO = fromInt(0);
	
	    /**
	     * Signed zero.
	     * @type {!Long}
	     */
	    Long.ZERO = ZERO;
	
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UZERO = fromInt(0, true);
	
	    /**
	     * Unsigned zero.
	     * @type {!Long}
	     */
	    Long.UZERO = UZERO;
	
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ONE = fromInt(1);
	
	    /**
	     * Signed one.
	     * @type {!Long}
	     */
	    Long.ONE = ONE;
	
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UONE = fromInt(1, true);
	
	    /**
	     * Unsigned one.
	     * @type {!Long}
	     */
	    Long.UONE = UONE;
	
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var NEG_ONE = fromInt(-1);
	
	    /**
	     * Signed negative one.
	     * @type {!Long}
	     */
	    Long.NEG_ONE = NEG_ONE;
	
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);
	
	    /**
	     * Maximum signed value.
	     * @type {!Long}
	     */
	    Long.MAX_VALUE = MAX_VALUE;
	
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);
	
	    /**
	     * Maximum unsigned value.
	     * @type {!Long}
	     */
	    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
	
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MIN_VALUE = fromBits(0, 0x80000000|0, false);
	
	    /**
	     * Minimum signed value.
	     * @type {!Long}
	     */
	    Long.MIN_VALUE = MIN_VALUE;
	
	    /**
	     * @alias Long.prototype
	     * @inner
	     */
	    var LongPrototype = Long.prototype;
	
	    /**
	     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
	     * @returns {number}
	     */
	    LongPrototype.toInt = function toInt() {
	        return this.unsigned ? this.low >>> 0 : this.low;
	    };
	
	    /**
	     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
	     * @returns {number}
	     */
	    LongPrototype.toNumber = function toNumber() {
	        if (this.unsigned)
	            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
	        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
	    };
	
	    /**
	     * Converts the Long to a string written in the specified radix.
	     * @param {number=} radix Radix (2-36), defaults to 10
	     * @returns {string}
	     * @override
	     * @throws {RangeError} If `radix` is out of range
	     */
	    LongPrototype.toString = function toString(radix) {
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');
	        if (this.isZero())
	            return '0';
	        if (this.isNegative()) { // Unsigned Longs are never negative
	            if (this.eq(MIN_VALUE)) {
	                // We need to change the Long value before it can be negated, so we remove
	                // the bottom-most digit in this base and then recurse to do the rest.
	                var radixLong = fromNumber(radix),
	                    div = this.div(radixLong),
	                    rem1 = div.mul(radixLong).sub(this);
	                return div.toString(radix) + rem1.toInt().toString(radix);
	            } else
	                return '-' + this.neg().toString(radix);
	        }
	
	        // Do several (6) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
	            rem = this;
	        var result = '';
	        while (true) {
	            var remDiv = rem.div(radixToPower),
	                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
	                digits = intval.toString(radix);
	            rem = remDiv;
	            if (rem.isZero())
	                return digits + result;
	            else {
	                while (digits.length < 6)
	                    digits = '0' + digits;
	                result = '' + digits + result;
	            }
	        }
	    };
	
	    /**
	     * Gets the high 32 bits as a signed integer.
	     * @returns {number} Signed high bits
	     */
	    LongPrototype.getHighBits = function getHighBits() {
	        return this.high;
	    };
	
	    /**
	     * Gets the high 32 bits as an unsigned integer.
	     * @returns {number} Unsigned high bits
	     */
	    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
	        return this.high >>> 0;
	    };
	
	    /**
	     * Gets the low 32 bits as a signed integer.
	     * @returns {number} Signed low bits
	     */
	    LongPrototype.getLowBits = function getLowBits() {
	        return this.low;
	    };
	
	    /**
	     * Gets the low 32 bits as an unsigned integer.
	     * @returns {number} Unsigned low bits
	     */
	    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
	        return this.low >>> 0;
	    };
	
	    /**
	     * Gets the number of bits needed to represent the absolute value of this Long.
	     * @returns {number}
	     */
	    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
	        if (this.isNegative()) // Unsigned Longs are never negative
	            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
	        var val = this.high != 0 ? this.high : this.low;
	        for (var bit = 31; bit > 0; bit--)
	            if ((val & (1 << bit)) != 0)
	                break;
	        return this.high != 0 ? bit + 33 : bit + 1;
	    };
	
	    /**
	     * Tests if this Long's value equals zero.
	     * @returns {boolean}
	     */
	    LongPrototype.isZero = function isZero() {
	        return this.high === 0 && this.low === 0;
	    };
	
	    /**
	     * Tests if this Long's value is negative.
	     * @returns {boolean}
	     */
	    LongPrototype.isNegative = function isNegative() {
	        return !this.unsigned && this.high < 0;
	    };
	
	    /**
	     * Tests if this Long's value is positive.
	     * @returns {boolean}
	     */
	    LongPrototype.isPositive = function isPositive() {
	        return this.unsigned || this.high >= 0;
	    };
	
	    /**
	     * Tests if this Long's value is odd.
	     * @returns {boolean}
	     */
	    LongPrototype.isOdd = function isOdd() {
	        return (this.low & 1) === 1;
	    };
	
	    /**
	     * Tests if this Long's value is even.
	     * @returns {boolean}
	     */
	    LongPrototype.isEven = function isEven() {
	        return (this.low & 1) === 0;
	    };
	
	    /**
	     * Tests if this Long's value equals the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.equals = function equals(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
	            return false;
	        return this.high === other.high && this.low === other.low;
	    };
	
	    /**
	     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.eq = LongPrototype.equals;
	
	    /**
	     * Tests if this Long's value differs from the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.notEquals = function notEquals(other) {
	        return !this.eq(/* validates */ other);
	    };
	
	    /**
	     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.neq = LongPrototype.notEquals;
	
	    /**
	     * Tests if this Long's value is less than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThan = function lessThan(other) {
	        return this.comp(/* validates */ other) < 0;
	    };
	
	    /**
	     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lt = LongPrototype.lessThan;
	
	    /**
	     * Tests if this Long's value is less than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
	        return this.comp(/* validates */ other) <= 0;
	    };
	
	    /**
	     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lte = LongPrototype.lessThanOrEqual;
	
	    /**
	     * Tests if this Long's value is greater than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThan = function greaterThan(other) {
	        return this.comp(/* validates */ other) > 0;
	    };
	
	    /**
	     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gt = LongPrototype.greaterThan;
	
	    /**
	     * Tests if this Long's value is greater than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
	        return this.comp(/* validates */ other) >= 0;
	    };
	
	    /**
	     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gte = LongPrototype.greaterThanOrEqual;
	
	    /**
	     * Compares this Long's value with the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.compare = function compare(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.eq(other))
	            return 0;
	        var thisNeg = this.isNegative(),
	            otherNeg = other.isNegative();
	        if (thisNeg && !otherNeg)
	            return -1;
	        if (!thisNeg && otherNeg)
	            return 1;
	        // At this point the sign bits are the same
	        if (!this.unsigned)
	            return this.sub(other).isNegative() ? -1 : 1;
	        // Both are positive if at least one is unsigned
	        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
	    };
	
	    /**
	     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.comp = LongPrototype.compare;
	
	    /**
	     * Negates this Long's value.
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.negate = function negate() {
	        if (!this.unsigned && this.eq(MIN_VALUE))
	            return MIN_VALUE;
	        return this.not().add(ONE);
	    };
	
	    /**
	     * Negates this Long's value. This is an alias of {@link Long#negate}.
	     * @function
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.neg = LongPrototype.negate;
	
	    /**
	     * Returns the sum of this and the specified Long.
	     * @param {!Long|number|string} addend Addend
	     * @returns {!Long} Sum
	     */
	    LongPrototype.add = function add(addend) {
	        if (!isLong(addend))
	            addend = fromValue(addend);
	
	        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
	
	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;
	
	        var b48 = addend.high >>> 16;
	        var b32 = addend.high & 0xFFFF;
	        var b16 = addend.low >>> 16;
	        var b00 = addend.low & 0xFFFF;
	
	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 + b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 + b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 + b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 + b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };
	
	    /**
	     * Returns the difference of this and the specified Long.
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.subtract = function subtract(subtrahend) {
	        if (!isLong(subtrahend))
	            subtrahend = fromValue(subtrahend);
	        return this.add(subtrahend.neg());
	    };
	
	    /**
	     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
	     * @function
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.sub = LongPrototype.subtract;
	
	    /**
	     * Returns the product of this and the specified Long.
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.multiply = function multiply(multiplier) {
	        if (this.isZero())
	            return ZERO;
	        if (!isLong(multiplier))
	            multiplier = fromValue(multiplier);
	        if (multiplier.isZero())
	            return ZERO;
	        if (this.eq(MIN_VALUE))
	            return multiplier.isOdd() ? MIN_VALUE : ZERO;
	        if (multiplier.eq(MIN_VALUE))
	            return this.isOdd() ? MIN_VALUE : ZERO;
	
	        if (this.isNegative()) {
	            if (multiplier.isNegative())
	                return this.neg().mul(multiplier.neg());
	            else
	                return this.neg().mul(multiplier).neg();
	        } else if (multiplier.isNegative())
	            return this.mul(multiplier.neg()).neg();
	
	        // If both longs are small, use float multiplication
	        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
	            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
	
	        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
	        // We can skip products that would overflow.
	
	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;
	
	        var b48 = multiplier.high >>> 16;
	        var b32 = multiplier.high & 0xFFFF;
	        var b16 = multiplier.low >>> 16;
	        var b00 = multiplier.low & 0xFFFF;
	
	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 * b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 * b00;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c16 += a00 * b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 * b00;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a16 * b16;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a00 * b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };
	
	    /**
	     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
	     * @function
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.mul = LongPrototype.multiply;
	
	    /**
	     * Returns this Long divided by the specified. The result is signed if this Long is signed or
	     *  unsigned if this Long is unsigned.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.divide = function divide(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        if (divisor.isZero())
	            throw Error('division by zero');
	        if (this.isZero())
	            return this.unsigned ? UZERO : ZERO;
	        var approx, rem, res;
	        if (!this.unsigned) {
	            // This section is only relevant for signed longs and is derived from the
	            // closure library as a whole.
	            if (this.eq(MIN_VALUE)) {
	                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
	                    return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
	                else if (divisor.eq(MIN_VALUE))
	                    return ONE;
	                else {
	                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
	                    var halfThis = this.shr(1);
	                    approx = halfThis.div(divisor).shl(1);
	                    if (approx.eq(ZERO)) {
	                        return divisor.isNegative() ? ONE : NEG_ONE;
	                    } else {
	                        rem = this.sub(divisor.mul(approx));
	                        res = approx.add(rem.div(divisor));
	                        return res;
	                    }
	                }
	            } else if (divisor.eq(MIN_VALUE))
	                return this.unsigned ? UZERO : ZERO;
	            if (this.isNegative()) {
	                if (divisor.isNegative())
	                    return this.neg().div(divisor.neg());
	                return this.neg().div(divisor).neg();
	            } else if (divisor.isNegative())
	                return this.div(divisor.neg()).neg();
	            res = ZERO;
	        } else {
	            // The algorithm below has not been made for unsigned longs. It's therefore
	            // required to take special care of the MSB prior to running it.
	            if (!divisor.unsigned)
	                divisor = divisor.toUnsigned();
	            if (divisor.gt(this))
	                return UZERO;
	            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
	                return UONE;
	            res = UZERO;
	        }
	
	        // Repeat the following until the remainder is less than other:  find a
	        // floating-point that approximates remainder / other *from below*, add this
	        // into the result, and subtract it from the remainder.  It is critical that
	        // the approximate value is less than or equal to the real value so that the
	        // remainder never becomes negative.
	        rem = this;
	        while (rem.gte(divisor)) {
	            // Approximate the result of division. This may be a little greater or
	            // smaller than the actual value.
	            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
	
	            // We will tweak the approximate result by changing it in the 48-th digit or
	            // the smallest non-fractional digit, whichever is larger.
	            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
	                delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),
	
	            // Decrease the approximation until it is smaller than the remainder.  Note
	            // that if it is too large, the product overflows and is negative.
	                approxRes = fromNumber(approx),
	                approxRem = approxRes.mul(divisor);
	            while (approxRem.isNegative() || approxRem.gt(rem)) {
	                approx -= delta;
	                approxRes = fromNumber(approx, this.unsigned);
	                approxRem = approxRes.mul(divisor);
	            }
	
	            // We know the answer can't be zero... and actually, zero would cause
	            // infinite recursion since we would make no progress.
	            if (approxRes.isZero())
	                approxRes = ONE;
	
	            res = res.add(approxRes);
	            rem = rem.sub(approxRem);
	        }
	        return res;
	    };
	
	    /**
	     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.div = LongPrototype.divide;
	
	    /**
	     * Returns this Long modulo the specified.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.modulo = function modulo(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        return this.sub(this.div(divisor).mul(divisor));
	    };
	
	    /**
	     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.mod = LongPrototype.modulo;
	
	    /**
	     * Returns the bitwise NOT of this Long.
	     * @returns {!Long}
	     */
	    LongPrototype.not = function not() {
	        return fromBits(~this.low, ~this.high, this.unsigned);
	    };
	
	    /**
	     * Returns the bitwise AND of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.and = function and(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
	    };
	
	    /**
	     * Returns the bitwise OR of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.or = function or(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
	    };
	
	    /**
	     * Returns the bitwise XOR of this Long and the given one.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.xor = function xor(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
	    };
	
	    /**
	     * Returns this Long with bits shifted to the left by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftLeft = function shiftLeft(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
	        else
	            return fromBits(0, this.low << (numBits - 32), this.unsigned);
	    };
	
	    /**
	     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shl = LongPrototype.shiftLeft;
	
	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRight = function shiftRight(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
	        else
	            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
	    };
	
	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shr = LongPrototype.shiftRight;
	
	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        numBits &= 63;
	        if (numBits === 0)
	            return this;
	        else {
	            var high = this.high;
	            if (numBits < 32) {
	                var low = this.low;
	                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
	            } else if (numBits === 32)
	                return fromBits(high, 0, this.unsigned);
	            else
	                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
	        }
	    };
	
	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shru = LongPrototype.shiftRightUnsigned;
	
	    /**
	     * Converts this Long to signed.
	     * @returns {!Long} Signed long
	     */
	    LongPrototype.toSigned = function toSigned() {
	        if (!this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, false);
	    };
	
	    /**
	     * Converts this Long to unsigned.
	     * @returns {!Long} Unsigned long
	     */
	    LongPrototype.toUnsigned = function toUnsigned() {
	        if (this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, true);
	    };
	
	    /**
	     * Converts this Long to its byte representation.
	     * @param {boolean=} le Whether little or big endian, defaults to big endian
	     * @returns {!Array.<number>} Byte representation
	     */
	    LongPrototype.toBytes = function(le) {
	        return le ? this.toBytesLE() : this.toBytesBE();
	    }
	
	    /**
	     * Converts this Long to its little endian byte representation.
	     * @returns {!Array.<number>} Little endian byte representation
	     */
	    LongPrototype.toBytesLE = function() {
	        var hi = this.high,
	            lo = this.low;
	        return [
	             lo         & 0xff,
	            (lo >>>  8) & 0xff,
	            (lo >>> 16) & 0xff,
	            (lo >>> 24) & 0xff,
	             hi         & 0xff,
	            (hi >>>  8) & 0xff,
	            (hi >>> 16) & 0xff,
	            (hi >>> 24) & 0xff
	        ];
	    }
	
	    /**
	     * Converts this Long to its big endian byte representation.
	     * @returns {!Array.<number>} Big endian byte representation
	     */
	    LongPrototype.toBytesBE = function() {
	        var hi = this.high,
	            lo = this.low;
	        return [
	            (hi >>> 24) & 0xff,
	            (hi >>> 16) & 0xff,
	            (hi >>>  8) & 0xff,
	             hi         & 0xff,
	            (lo >>> 24) & 0xff,
	            (lo >>> 16) & 0xff,
	            (lo >>>  8) & 0xff,
	             lo         & 0xff
	        ];
	    }
	
	    return Long;
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*
	 Copyright 2013-2014 Daniel Wirtz <dcode@dcode.io>
	
	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at
	
	 http://www.apache.org/licenses/LICENSE-2.0
	
	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */
	
	/**
	 * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
	 * Backing buffer: ArrayBuffer, Accessor: Uint8Array
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/bytebuffer.js for details
	 */
	(function(global, factory) {
	
	    /* AMD */ if ("function" === 'function' && __webpack_require__(17)["amd"])
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* CommonJS */ else if ("function" === 'function' && typeof module === "object" && module && module["exports"])
	        module['exports'] = (function() {
	            var Long; try { Long = __webpack_require__(15); } catch (e) {}
	            return factory(Long);
	        })();
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["ByteBuffer"] = factory(global["dcodeIO"]["Long"]);
	
	})(this, function(Long) {
	    "use strict";
	
	    /**
	     * Constructs a new ByteBuffer.
	     * @class The swiss army knife for binary data in JavaScript.
	     * @exports ByteBuffer
	     * @constructor
	     * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @expose
	     */
	    var ByteBuffer = function(capacity, littleEndian, noAssert) {
	        if (typeof capacity === 'undefined')
	            capacity = ByteBuffer.DEFAULT_CAPACITY;
	        if (typeof littleEndian === 'undefined')
	            littleEndian = ByteBuffer.DEFAULT_ENDIAN;
	        if (typeof noAssert === 'undefined')
	            noAssert = ByteBuffer.DEFAULT_NOASSERT;
	        if (!noAssert) {
	            capacity = capacity | 0;
	            if (capacity < 0)
	                throw RangeError("Illegal capacity");
	            littleEndian = !!littleEndian;
	            noAssert = !!noAssert;
	        }
	
	        /**
	         * Backing ArrayBuffer.
	         * @type {!ArrayBuffer}
	         * @expose
	         */
	        this.buffer = capacity === 0 ? EMPTY_BUFFER : new ArrayBuffer(capacity);
	
	        /**
	         * Uint8Array utilized to manipulate the backing buffer. Becomes `null` if the backing buffer has a capacity of `0`.
	         * @type {?Uint8Array}
	         * @expose
	         */
	        this.view = capacity === 0 ? null : new Uint8Array(this.buffer);
	
	        /**
	         * Absolute read/write offset.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#flip
	         * @see ByteBuffer#clear
	         */
	        this.offset = 0;
	
	        /**
	         * Marked offset.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#mark
	         * @see ByteBuffer#reset
	         */
	        this.markedOffset = -1;
	
	        /**
	         * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
	         * @type {number}
	         * @expose
	         * @see ByteBuffer#flip
	         * @see ByteBuffer#clear
	         */
	        this.limit = capacity;
	
	        /**
	         * Whether to use little endian byte order, defaults to `false` for big endian.
	         * @type {boolean}
	         * @expose
	         */
	        this.littleEndian = littleEndian;
	
	        /**
	         * Whether to skip assertions of offsets and values, defaults to `false`.
	         * @type {boolean}
	         * @expose
	         */
	        this.noAssert = noAssert;
	    };
	
	    /**
	     * ByteBuffer version.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.VERSION = "5.0.1";
	
	    /**
	     * Little endian constant that can be used instead of its boolean value. Evaluates to `true`.
	     * @type {boolean}
	     * @const
	     * @expose
	     */
	    ByteBuffer.LITTLE_ENDIAN = true;
	
	    /**
	     * Big endian constant that can be used instead of its boolean value. Evaluates to `false`.
	     * @type {boolean}
	     * @const
	     * @expose
	     */
	    ByteBuffer.BIG_ENDIAN = false;
	
	    /**
	     * Default initial capacity of `16`.
	     * @type {number}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_CAPACITY = 16;
	
	    /**
	     * Default endianess of `false` for big endian.
	     * @type {boolean}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.BIG_ENDIAN;
	
	    /**
	     * Default no assertions flag of `false`.
	     * @type {boolean}
	     * @expose
	     */
	    ByteBuffer.DEFAULT_NOASSERT = false;
	
	    /**
	     * A `Long` class for representing a 64-bit two's-complement integer value. May be `null` if Long.js has not been loaded
	     *  and int64 support is not available.
	     * @type {?Long}
	     * @const
	     * @see https://github.com/dcodeIO/long.js
	     * @expose
	     */
	    ByteBuffer.Long = Long || null;
	
	    /**
	     * @alias ByteBuffer.prototype
	     * @inner
	     */
	    var ByteBufferPrototype = ByteBuffer.prototype;
	
	    /**
	     * An indicator used to reliably determine if an object is a ByteBuffer or not.
	     * @type {boolean}
	     * @const
	     * @expose
	     * @private
	     */
	    ByteBufferPrototype.__isByteBuffer__;
	
	    Object.defineProperty(ByteBufferPrototype, "__isByteBuffer__", {
	        value: true,
	        enumerable: false,
	        configurable: false
	    });
	
	    // helpers
	
	    /**
	     * @type {!ArrayBuffer}
	     * @inner
	     */
	    var EMPTY_BUFFER = new ArrayBuffer(0);
	
	    /**
	     * String.fromCharCode reference for compile-time renaming.
	     * @type {function(...number):string}
	     * @inner
	     */
	    var stringFromCharCode = String.fromCharCode;
	
	    /**
	     * Creates a source function for a string.
	     * @param {string} s String to read from
	     * @returns {function():number|null} Source function returning the next char code respectively `null` if there are
	     *  no more characters left.
	     * @throws {TypeError} If the argument is invalid
	     * @inner
	     */
	    function stringSource(s) {
	        var i=0; return function() {
	            return i < s.length ? s.charCodeAt(i++) : null;
	        };
	    }
	
	    /**
	     * Creates a destination function for a string.
	     * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
	     *  Returns the final string when called without arguments.
	     * @inner
	     */
	    function stringDestination() {
	        var cs = [], ps = []; return function() {
	            if (arguments.length === 0)
	                return ps.join('')+stringFromCharCode.apply(String, cs);
	            if (cs.length + arguments.length > 1024)
	                ps.push(stringFromCharCode.apply(String, cs)),
	                    cs.length = 0;
	            Array.prototype.push.apply(cs, arguments);
	        };
	    }
	
	    /**
	     * Gets the accessor type.
	     * @returns {Function} `Buffer` under node.js, `Uint8Array` respectively `DataView` in the browser (classes)
	     * @expose
	     */
	    ByteBuffer.accessor = function() {
	        return Uint8Array;
	    };
	    /**
	     * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
	     * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBuffer.allocate = function(capacity, littleEndian, noAssert) {
	        return new ByteBuffer(capacity, littleEndian, noAssert);
	    };
	
	    /**
	     * Concatenates multiple ByteBuffers into one.
	     * @param {!Array.<!ByteBuffer|!ArrayBuffer|!Uint8Array|string>} buffers Buffers to concatenate
	     * @param {(string|boolean)=} encoding String encoding if `buffers` contains a string ("base64", "hex", "binary",
	     *  defaults to "utf8")
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order for the resulting ByteBuffer. Defaults
	     *  to {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values for the resulting ByteBuffer. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} Concatenated ByteBuffer
	     * @expose
	     */
	    ByteBuffer.concat = function(buffers, encoding, littleEndian, noAssert) {
	        if (typeof encoding === 'boolean' || typeof encoding !== 'string') {
	            noAssert = littleEndian;
	            littleEndian = encoding;
	            encoding = undefined;
	        }
	        var capacity = 0;
	        for (var i=0, k=buffers.length, length; i<k; ++i) {
	            if (!ByteBuffer.isByteBuffer(buffers[i]))
	                buffers[i] = ByteBuffer.wrap(buffers[i], encoding);
	            length = buffers[i].limit - buffers[i].offset;
	            if (length > 0) capacity += length;
	        }
	        if (capacity === 0)
	            return new ByteBuffer(0, littleEndian, noAssert);
	        var bb = new ByteBuffer(capacity, littleEndian, noAssert),
	            bi;
	        i=0; while (i<k) {
	            bi = buffers[i++];
	            length = bi.limit - bi.offset;
	            if (length <= 0) continue;
	            bb.view.set(bi.view.subarray(bi.offset, bi.limit), bb.offset);
	            bb.offset += length;
	        }
	        bb.limit = bb.offset;
	        bb.offset = 0;
	        return bb;
	    };
	
	    /**
	     * Tests if the specified type is a ByteBuffer.
	     * @param {*} bb ByteBuffer to test
	     * @returns {boolean} `true` if it is a ByteBuffer, otherwise `false`
	     * @expose
	     */
	    ByteBuffer.isByteBuffer = function(bb) {
	        return (bb && bb["__isByteBuffer__"]) === true;
	    };
	    /**
	     * Gets the backing buffer type.
	     * @returns {Function} `Buffer` under node.js, `ArrayBuffer` in the browser (classes)
	     * @expose
	     */
	    ByteBuffer.type = function() {
	        return ArrayBuffer;
	    };
	    /**
	     * Wraps a buffer or a string. Sets the allocated ByteBuffer's {@link ByteBuffer#offset} to `0` and its
	     *  {@link ByteBuffer#limit} to the length of the wrapped data.
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string|!Array.<number>} buffer Anything that can be wrapped
	     * @param {(string|boolean)=} encoding String encoding if `buffer` is a string ("base64", "hex", "binary", defaults to
	     *  "utf8")
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} A ByteBuffer wrapping `buffer`
	     * @expose
	     */
	    ByteBuffer.wrap = function(buffer, encoding, littleEndian, noAssert) {
	        if (typeof encoding !== 'string') {
	            noAssert = littleEndian;
	            littleEndian = encoding;
	            encoding = undefined;
	        }
	        if (typeof buffer === 'string') {
	            if (typeof encoding === 'undefined')
	                encoding = "utf8";
	            switch (encoding) {
	                case "base64":
	                    return ByteBuffer.fromBase64(buffer, littleEndian);
	                case "hex":
	                    return ByteBuffer.fromHex(buffer, littleEndian);
	                case "binary":
	                    return ByteBuffer.fromBinary(buffer, littleEndian);
	                case "utf8":
	                    return ByteBuffer.fromUTF8(buffer, littleEndian);
	                case "debug":
	                    return ByteBuffer.fromDebug(buffer, littleEndian);
	                default:
	                    throw Error("Unsupported encoding: "+encoding);
	            }
	        }
	        if (buffer === null || typeof buffer !== 'object')
	            throw TypeError("Illegal buffer");
	        var bb;
	        if (ByteBuffer.isByteBuffer(buffer)) {
	            bb = ByteBufferPrototype.clone.call(buffer);
	            bb.markedOffset = -1;
	            return bb;
	        }
	        if (buffer instanceof Uint8Array) { // Extract ArrayBuffer from Uint8Array
	            bb = new ByteBuffer(0, littleEndian, noAssert);
	            if (buffer.length > 0) { // Avoid references to more than one EMPTY_BUFFER
	                bb.buffer = buffer.buffer;
	                bb.offset = buffer.byteOffset;
	                bb.limit = buffer.byteOffset + buffer.byteLength;
	                bb.view = new Uint8Array(buffer.buffer);
	            }
	        } else if (buffer instanceof ArrayBuffer) { // Reuse ArrayBuffer
	            bb = new ByteBuffer(0, littleEndian, noAssert);
	            if (buffer.byteLength > 0) {
	                bb.buffer = buffer;
	                bb.offset = 0;
	                bb.limit = buffer.byteLength;
	                bb.view = buffer.byteLength > 0 ? new Uint8Array(buffer) : null;
	            }
	        } else if (Object.prototype.toString.call(buffer) === "[object Array]") { // Create from octets
	            bb = new ByteBuffer(buffer.length, littleEndian, noAssert);
	            bb.limit = buffer.length;
	            for (var i=0; i<buffer.length; ++i)
	                bb.view[i] = buffer[i];
	        } else
	            throw TypeError("Illegal buffer"); // Otherwise fail
	        return bb;
	    };
	
	    /**
	     * Writes the array as a bitset.
	     * @param {Array<boolean>} value Array of booleans to write
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBufferPrototype.writeBitSet = function(value, offset) {
	      var relative = typeof offset === 'undefined';
	      if (relative) offset = this.offset;
	      if (!this.noAssert) {
	        if (!(value instanceof Array))
	          throw TypeError("Illegal BitSet: Not an array");
	        if (typeof offset !== 'number' || offset % 1 !== 0)
	            throw TypeError("Illegal offset: "+offset+" (not an integer)");
	        offset >>>= 0;
	        if (offset < 0 || offset + 0 > this.buffer.byteLength)
	            throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	      }
	
	      var start = offset,
	          bits = value.length,
	          bytes = (bits >> 3),
	          bit = 0,
	          k;
	
	      offset += this.writeVarint32(bits,offset);
	
	      while(bytes--) {
	        k = (!!value[bit++] & 1) |
	            ((!!value[bit++] & 1) << 1) |
	            ((!!value[bit++] & 1) << 2) |
	            ((!!value[bit++] & 1) << 3) |
	            ((!!value[bit++] & 1) << 4) |
	            ((!!value[bit++] & 1) << 5) |
	            ((!!value[bit++] & 1) << 6) |
	            ((!!value[bit++] & 1) << 7);
	        this.writeByte(k,offset++);
	      }
	
	      if(bit < bits) {
	        var m = 0; k = 0;
	        while(bit < bits) k = k | ((!!value[bit++] & 1) << (m++));
	        this.writeByte(k,offset++);
	      }
	
	      if (relative) {
	        this.offset = offset;
	        return this;
	      }
	      return offset - start;
	    }
	
	    /**
	     * Reads a BitSet as an array of booleans.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {Array<boolean>
	     * @expose
	     */
	    ByteBufferPrototype.readBitSet = function(offset) {
	      var relative = typeof offset === 'undefined';
	      if (relative) offset = this.offset;
	
	      var ret = this.readVarint32(offset),
	          bits = ret.value,
	          bytes = (bits >> 3),
	          bit = 0,
	          value = [],
	          k;
	
	      offset += ret.length;
	
	      while(bytes--) {
	        k = this.readByte(offset++);
	        value[bit++] = !!(k & 0x01);
	        value[bit++] = !!(k & 0x02);
	        value[bit++] = !!(k & 0x04);
	        value[bit++] = !!(k & 0x08);
	        value[bit++] = !!(k & 0x10);
	        value[bit++] = !!(k & 0x20);
	        value[bit++] = !!(k & 0x40);
	        value[bit++] = !!(k & 0x80);
	      }
	
	      if(bit < bits) {
	        var m = 0;
	        k = this.readByte(offset++);
	        while(bit < bits) value[bit++] = !!((k >> (m++)) & 1);
	      }
	
	      if (relative) {
	        this.offset = offset;
	      }
	      return value;
	    }
	    /**
	     * Reads the specified number of bytes.
	     * @param {number} length Number of bytes to read
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
	     * @returns {!ByteBuffer}
	     * @expose
	     */
	    ByteBufferPrototype.readBytes = function(length, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + length > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
	        }
	        var slice = this.slice(offset, offset + length);
	        if (relative) this.offset += length;
	        return slice;
	    };
	
	    /**
	     * Writes a payload of bytes. This is an alias of {@link ByteBuffer#append}.
	     * @function
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to write. If `source` is a ByteBuffer, its offsets
	     *  will be modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeBytes = ByteBufferPrototype.append;
	
	    // types/ints/int8
	
	    /**
	     * Writes an 8bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeInt8 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 1;
	        var capacity0 = this.buffer.byteLength;
	        if (offset > capacity0)
	            this.resize((capacity0 *= 2) > offset ? capacity0 : offset);
	        offset -= 1;
	        this.view[offset] = value;
	        if (relative) this.offset += 1;
	        return this;
	    };
	
	    /**
	     * Writes an 8bit signed integer. This is an alias of {@link ByteBuffer#writeInt8}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeByte = ByteBufferPrototype.writeInt8;
	
	    /**
	     * Reads an 8bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt8 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var value = this.view[offset];
	        if ((value & 0x80) === 0x80) value = -(0xFF - value + 1); // Cast to signed
	        if (relative) this.offset += 1;
	        return value;
	    };
	
	    /**
	     * Reads an 8bit signed integer. This is an alias of {@link ByteBuffer#readInt8}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readByte = ByteBufferPrototype.readInt8;
	
	    /**
	     * Writes an 8bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeUint8 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 1;
	        var capacity1 = this.buffer.byteLength;
	        if (offset > capacity1)
	            this.resize((capacity1 *= 2) > offset ? capacity1 : offset);
	        offset -= 1;
	        this.view[offset] = value;
	        if (relative) this.offset += 1;
	        return this;
	    };
	
	    /**
	     * Writes an 8bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint8}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt8 = ByteBufferPrototype.writeUint8;
	
	    /**
	     * Reads an 8bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUint8 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var value = this.view[offset];
	        if (relative) this.offset += 1;
	        return value;
	    };
	
	    /**
	     * Reads an 8bit unsigned integer. This is an alias of {@link ByteBuffer#readUint8}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUInt8 = ByteBufferPrototype.readUint8;
	
	    // types/ints/int16
	
	    /**
	     * Writes a 16bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeInt16 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 2;
	        var capacity2 = this.buffer.byteLength;
	        if (offset > capacity2)
	            this.resize((capacity2 *= 2) > offset ? capacity2 : offset);
	        offset -= 2;
	        if (this.littleEndian) {
	            this.view[offset+1] = (value & 0xFF00) >>> 8;
	            this.view[offset  ] =  value & 0x00FF;
	        } else {
	            this.view[offset]   = (value & 0xFF00) >>> 8;
	            this.view[offset+1] =  value & 0x00FF;
	        }
	        if (relative) this.offset += 2;
	        return this;
	    };
	
	    /**
	     * Writes a 16bit signed integer. This is an alias of {@link ByteBuffer#writeInt16}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeShort = ByteBufferPrototype.writeInt16;
	
	    /**
	     * Reads a 16bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readInt16 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 2 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset  ];
	            value |= this.view[offset+1] << 8;
	        } else {
	            value  = this.view[offset  ] << 8;
	            value |= this.view[offset+1];
	        }
	        if ((value & 0x8000) === 0x8000) value = -(0xFFFF - value + 1); // Cast to signed
	        if (relative) this.offset += 2;
	        return value;
	    };
	
	    /**
	     * Reads a 16bit signed integer. This is an alias of {@link ByteBuffer#readInt16}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readShort = ByteBufferPrototype.readInt16;
	
	    /**
	     * Writes a 16bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeUint16 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 2;
	        var capacity3 = this.buffer.byteLength;
	        if (offset > capacity3)
	            this.resize((capacity3 *= 2) > offset ? capacity3 : offset);
	        offset -= 2;
	        if (this.littleEndian) {
	            this.view[offset+1] = (value & 0xFF00) >>> 8;
	            this.view[offset  ] =  value & 0x00FF;
	        } else {
	            this.view[offset]   = (value & 0xFF00) >>> 8;
	            this.view[offset+1] =  value & 0x00FF;
	        }
	        if (relative) this.offset += 2;
	        return this;
	    };
	
	    /**
	     * Writes a 16bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint16}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @throws {TypeError} If `offset` or `value` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt16 = ByteBufferPrototype.writeUint16;
	
	    /**
	     * Reads a 16bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readUint16 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 2 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset  ];
	            value |= this.view[offset+1] << 8;
	        } else {
	            value  = this.view[offset  ] << 8;
	            value |= this.view[offset+1];
	        }
	        if (relative) this.offset += 2;
	        return value;
	    };
	
	    /**
	     * Reads a 16bit unsigned integer. This is an alias of {@link ByteBuffer#readUint16}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
	     * @returns {number} Value read
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.readUInt16 = ByteBufferPrototype.readUint16;
	
	    // types/ints/int32
	
	    /**
	     * Writes a 32bit signed integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeInt32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity4 = this.buffer.byteLength;
	        if (offset > capacity4)
	            this.resize((capacity4 *= 2) > offset ? capacity4 : offset);
	        offset -= 4;
	        if (this.littleEndian) {
	            this.view[offset+3] = (value >>> 24) & 0xFF;
	            this.view[offset+2] = (value >>> 16) & 0xFF;
	            this.view[offset+1] = (value >>>  8) & 0xFF;
	            this.view[offset  ] =  value         & 0xFF;
	        } else {
	            this.view[offset  ] = (value >>> 24) & 0xFF;
	            this.view[offset+1] = (value >>> 16) & 0xFF;
	            this.view[offset+2] = (value >>>  8) & 0xFF;
	            this.view[offset+3] =  value         & 0xFF;
	        }
	        if (relative) this.offset += 4;
	        return this;
	    };
	
	    /**
	     * Writes a 32bit signed integer. This is an alias of {@link ByteBuffer#writeInt32}.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeInt = ByteBufferPrototype.writeInt32;
	
	    /**
	     * Reads a 32bit signed integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset+2] << 16;
	            value |= this.view[offset+1] <<  8;
	            value |= this.view[offset  ];
	            value += this.view[offset+3] << 24 >>> 0;
	        } else {
	            value  = this.view[offset+1] << 16;
	            value |= this.view[offset+2] <<  8;
	            value |= this.view[offset+3];
	            value += this.view[offset  ] << 24 >>> 0;
	        }
	        value |= 0; // Cast to signed
	        if (relative) this.offset += 4;
	        return value;
	    };
	
	    /**
	     * Reads a 32bit signed integer. This is an alias of {@link ByteBuffer#readInt32}.
	     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readInt = ByteBufferPrototype.readInt32;
	
	    /**
	     * Writes a 32bit unsigned integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeUint32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value >>>= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity5 = this.buffer.byteLength;
	        if (offset > capacity5)
	            this.resize((capacity5 *= 2) > offset ? capacity5 : offset);
	        offset -= 4;
	        if (this.littleEndian) {
	            this.view[offset+3] = (value >>> 24) & 0xFF;
	            this.view[offset+2] = (value >>> 16) & 0xFF;
	            this.view[offset+1] = (value >>>  8) & 0xFF;
	            this.view[offset  ] =  value         & 0xFF;
	        } else {
	            this.view[offset  ] = (value >>> 24) & 0xFF;
	            this.view[offset+1] = (value >>> 16) & 0xFF;
	            this.view[offset+2] = (value >>>  8) & 0xFF;
	            this.view[offset+3] =  value         & 0xFF;
	        }
	        if (relative) this.offset += 4;
	        return this;
	    };
	
	    /**
	     * Writes a 32bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint32}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @expose
	     */
	    ByteBufferPrototype.writeUInt32 = ByteBufferPrototype.writeUint32;
	
	    /**
	     * Reads a 32bit unsigned integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUint32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = 0;
	        if (this.littleEndian) {
	            value  = this.view[offset+2] << 16;
	            value |= this.view[offset+1] <<  8;
	            value |= this.view[offset  ];
	            value += this.view[offset+3] << 24 >>> 0;
	        } else {
	            value  = this.view[offset+1] << 16;
	            value |= this.view[offset+2] <<  8;
	            value |= this.view[offset+3];
	            value += this.view[offset  ] << 24 >>> 0;
	        }
	        if (relative) this.offset += 4;
	        return value;
	    };
	
	    /**
	     * Reads a 32bit unsigned integer. This is an alias of {@link ByteBuffer#readUint32}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number} Value read
	     * @expose
	     */
	    ByteBufferPrototype.readUInt32 = ByteBufferPrototype.readUint32;
	
	    // types/ints/int64
	
	    if (Long) {
	
	        /**
	         * Writes a 64bit signed integer.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeInt64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            offset += 8;
	            var capacity6 = this.buffer.byteLength;
	            if (offset > capacity6)
	                this.resize((capacity6 *= 2) > offset ? capacity6 : offset);
	            offset -= 8;
	            var lo = value.low,
	                hi = value.high;
	            if (this.littleEndian) {
	                this.view[offset+3] = (lo >>> 24) & 0xFF;
	                this.view[offset+2] = (lo >>> 16) & 0xFF;
	                this.view[offset+1] = (lo >>>  8) & 0xFF;
	                this.view[offset  ] =  lo         & 0xFF;
	                offset += 4;
	                this.view[offset+3] = (hi >>> 24) & 0xFF;
	                this.view[offset+2] = (hi >>> 16) & 0xFF;
	                this.view[offset+1] = (hi >>>  8) & 0xFF;
	                this.view[offset  ] =  hi         & 0xFF;
	            } else {
	                this.view[offset  ] = (hi >>> 24) & 0xFF;
	                this.view[offset+1] = (hi >>> 16) & 0xFF;
	                this.view[offset+2] = (hi >>>  8) & 0xFF;
	                this.view[offset+3] =  hi         & 0xFF;
	                offset += 4;
	                this.view[offset  ] = (lo >>> 24) & 0xFF;
	                this.view[offset+1] = (lo >>> 16) & 0xFF;
	                this.view[offset+2] = (lo >>>  8) & 0xFF;
	                this.view[offset+3] =  lo         & 0xFF;
	            }
	            if (relative) this.offset += 8;
	            return this;
	        };
	
	        /**
	         * Writes a 64bit signed integer. This is an alias of {@link ByteBuffer#writeInt64}.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeLong = ByteBufferPrototype.writeInt64;
	
	        /**
	         * Reads a 64bit signed integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readInt64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	            }
	            var lo = 0,
	                hi = 0;
	            if (this.littleEndian) {
	                lo  = this.view[offset+2] << 16;
	                lo |= this.view[offset+1] <<  8;
	                lo |= this.view[offset  ];
	                lo += this.view[offset+3] << 24 >>> 0;
	                offset += 4;
	                hi  = this.view[offset+2] << 16;
	                hi |= this.view[offset+1] <<  8;
	                hi |= this.view[offset  ];
	                hi += this.view[offset+3] << 24 >>> 0;
	            } else {
	                hi  = this.view[offset+1] << 16;
	                hi |= this.view[offset+2] <<  8;
	                hi |= this.view[offset+3];
	                hi += this.view[offset  ] << 24 >>> 0;
	                offset += 4;
	                lo  = this.view[offset+1] << 16;
	                lo |= this.view[offset+2] <<  8;
	                lo |= this.view[offset+3];
	                lo += this.view[offset  ] << 24 >>> 0;
	            }
	            var value = new Long(lo, hi, false);
	            if (relative) this.offset += 8;
	            return value;
	        };
	
	        /**
	         * Reads a 64bit signed integer. This is an alias of {@link ByteBuffer#readInt64}.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readLong = ByteBufferPrototype.readInt64;
	
	        /**
	         * Writes a 64bit unsigned integer.
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeUint64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            offset += 8;
	            var capacity7 = this.buffer.byteLength;
	            if (offset > capacity7)
	                this.resize((capacity7 *= 2) > offset ? capacity7 : offset);
	            offset -= 8;
	            var lo = value.low,
	                hi = value.high;
	            if (this.littleEndian) {
	                this.view[offset+3] = (lo >>> 24) & 0xFF;
	                this.view[offset+2] = (lo >>> 16) & 0xFF;
	                this.view[offset+1] = (lo >>>  8) & 0xFF;
	                this.view[offset  ] =  lo         & 0xFF;
	                offset += 4;
	                this.view[offset+3] = (hi >>> 24) & 0xFF;
	                this.view[offset+2] = (hi >>> 16) & 0xFF;
	                this.view[offset+1] = (hi >>>  8) & 0xFF;
	                this.view[offset  ] =  hi         & 0xFF;
	            } else {
	                this.view[offset  ] = (hi >>> 24) & 0xFF;
	                this.view[offset+1] = (hi >>> 16) & 0xFF;
	                this.view[offset+2] = (hi >>>  8) & 0xFF;
	                this.view[offset+3] =  hi         & 0xFF;
	                offset += 4;
	                this.view[offset  ] = (lo >>> 24) & 0xFF;
	                this.view[offset+1] = (lo >>> 16) & 0xFF;
	                this.view[offset+2] = (lo >>>  8) & 0xFF;
	                this.view[offset+3] =  lo         & 0xFF;
	            }
	            if (relative) this.offset += 8;
	            return this;
	        };
	
	        /**
	         * Writes a 64bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint64}.
	         * @function
	         * @param {number|!Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!ByteBuffer} this
	         * @expose
	         */
	        ByteBufferPrototype.writeUInt64 = ByteBufferPrototype.writeUint64;
	
	        /**
	         * Reads a 64bit unsigned integer.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readUint64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	            }
	            var lo = 0,
	                hi = 0;
	            if (this.littleEndian) {
	                lo  = this.view[offset+2] << 16;
	                lo |= this.view[offset+1] <<  8;
	                lo |= this.view[offset  ];
	                lo += this.view[offset+3] << 24 >>> 0;
	                offset += 4;
	                hi  = this.view[offset+2] << 16;
	                hi |= this.view[offset+1] <<  8;
	                hi |= this.view[offset  ];
	                hi += this.view[offset+3] << 24 >>> 0;
	            } else {
	                hi  = this.view[offset+1] << 16;
	                hi |= this.view[offset+2] <<  8;
	                hi |= this.view[offset+3];
	                hi += this.view[offset  ] << 24 >>> 0;
	                offset += 4;
	                lo  = this.view[offset+1] << 16;
	                lo |= this.view[offset+2] <<  8;
	                lo |= this.view[offset+3];
	                lo += this.view[offset  ] << 24 >>> 0;
	            }
	            var value = new Long(lo, hi, true);
	            if (relative) this.offset += 8;
	            return value;
	        };
	
	        /**
	         * Reads a 64bit unsigned integer. This is an alias of {@link ByteBuffer#readUint64}.
	         * @function
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	         * @returns {!Long}
	         * @expose
	         */
	        ByteBufferPrototype.readUInt64 = ByteBufferPrototype.readUint64;
	
	    } // Long
	
	
	    // types/floats/float32
	
	    /*
	     ieee754 - https://github.com/feross/ieee754
	
	     The MIT License (MIT)
	
	     Copyright (c) Feross Aboukhadijeh
	
	     Permission is hereby granted, free of charge, to any person obtaining a copy
	     of this software and associated documentation files (the "Software"), to deal
	     in the Software without restriction, including without limitation the rights
	     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	     copies of the Software, and to permit persons to whom the Software is
	     furnished to do so, subject to the following conditions:
	
	     The above copyright notice and this permission notice shall be included in
	     all copies or substantial portions of the Software.
	
	     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	     THE SOFTWARE.
	    */
	
	    /**
	     * Reads an IEEE754 float from a byte array.
	     * @param {!Array} buffer
	     * @param {number} offset
	     * @param {boolean} isLE
	     * @param {number} mLen
	     * @param {number} nBytes
	     * @returns {number}
	     * @inner
	     */
	    function ieee754_read(buffer, offset, isLE, mLen, nBytes) {
	        var e, m,
	            eLen = nBytes * 8 - mLen - 1,
	            eMax = (1 << eLen) - 1,
	            eBias = eMax >> 1,
	            nBits = -7,
	            i = isLE ? (nBytes - 1) : 0,
	            d = isLE ? -1 : 1,
	            s = buffer[offset + i];
	
	        i += d;
	
	        e = s & ((1 << (-nBits)) - 1);
	        s >>= (-nBits);
	        nBits += eLen;
	        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	        m = e & ((1 << (-nBits)) - 1);
	        e >>= (-nBits);
	        nBits += mLen;
	        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	        if (e === 0) {
	            e = 1 - eBias;
	        } else if (e === eMax) {
	            return m ? NaN : ((s ? -1 : 1) * Infinity);
	        } else {
	            m = m + Math.pow(2, mLen);
	            e = e - eBias;
	        }
	        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	    }
	
	    /**
	     * Writes an IEEE754 float to a byte array.
	     * @param {!Array} buffer
	     * @param {number} value
	     * @param {number} offset
	     * @param {boolean} isLE
	     * @param {number} mLen
	     * @param {number} nBytes
	     * @inner
	     */
	    function ieee754_write(buffer, value, offset, isLE, mLen, nBytes) {
	        var e, m, c,
	            eLen = nBytes * 8 - mLen - 1,
	            eMax = (1 << eLen) - 1,
	            eBias = eMax >> 1,
	            rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	            i = isLE ? 0 : (nBytes - 1),
	            d = isLE ? 1 : -1,
	            s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
	
	        value = Math.abs(value);
	
	        if (isNaN(value) || value === Infinity) {
	            m = isNaN(value) ? 1 : 0;
	            e = eMax;
	        } else {
	            e = Math.floor(Math.log(value) / Math.LN2);
	            if (value * (c = Math.pow(2, -e)) < 1) {
	                e--;
	                c *= 2;
	            }
	            if (e + eBias >= 1) {
	                value += rt / c;
	            } else {
	                value += rt * Math.pow(2, 1 - eBias);
	            }
	            if (value * c >= 2) {
	                e++;
	                c /= 2;
	            }
	
	            if (e + eBias >= eMax) {
	                m = 0;
	                e = eMax;
	            } else if (e + eBias >= 1) {
	                m = (value * c - 1) * Math.pow(2, mLen);
	                e = e + eBias;
	            } else {
	                m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	                e = 0;
	            }
	        }
	
	        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	        e = (e << mLen) | m;
	        eLen += mLen;
	        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	        buffer[offset + i - d] |= s * 128;
	    }
	
	    /**
	     * Writes a 32bit float.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number')
	                throw TypeError("Illegal value: "+value+" (not a number)");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 4;
	        var capacity8 = this.buffer.byteLength;
	        if (offset > capacity8)
	            this.resize((capacity8 *= 2) > offset ? capacity8 : offset);
	        offset -= 4;
	        ieee754_write(this.view, value, offset, this.littleEndian, 23, 4);
	        if (relative) this.offset += 4;
	        return this;
	    };
	
	    /**
	     * Writes a 32bit float. This is an alias of {@link ByteBuffer#writeFloat32}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat = ByteBufferPrototype.writeFloat32;
	
	    /**
	     * Reads a 32bit float.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var value = ieee754_read(this.view, offset, this.littleEndian, 23, 4);
	        if (relative) this.offset += 4;
	        return value;
	    };
	
	    /**
	     * Reads a 32bit float. This is an alias of {@link ByteBuffer#readFloat32}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat = ByteBufferPrototype.readFloat32;
	
	    // types/floats/float64
	
	    /**
	     * Writes a 64bit float.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeFloat64 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number')
	                throw TypeError("Illegal value: "+value+" (not a number)");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        offset += 8;
	        var capacity9 = this.buffer.byteLength;
	        if (offset > capacity9)
	            this.resize((capacity9 *= 2) > offset ? capacity9 : offset);
	        offset -= 8;
	        ieee754_write(this.view, value, offset, this.littleEndian, 52, 8);
	        if (relative) this.offset += 8;
	        return this;
	    };
	
	    /**
	     * Writes a 64bit float. This is an alias of {@link ByteBuffer#writeFloat64}.
	     * @function
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.writeDouble = ByteBufferPrototype.writeFloat64;
	
	    /**
	     * Reads a 64bit float.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readFloat64 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 8 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
	        }
	        var value = ieee754_read(this.view, offset, this.littleEndian, 52, 8);
	        if (relative) this.offset += 8;
	        return value;
	    };
	
	    /**
	     * Reads a 64bit float. This is an alias of {@link ByteBuffer#readFloat64}.
	     * @function
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
	     * @returns {number}
	     * @expose
	     */
	    ByteBufferPrototype.readDouble = ByteBufferPrototype.readFloat64;
	
	
	    // types/varints/varint32
	
	    /**
	     * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
	     * @type {number}
	     * @const
	     * @expose
	     */
	    ByteBuffer.MAX_VARINT32_BYTES = 5;
	
	    /**
	     * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
	     * @param {number} value Value to encode
	     * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT32_BYTES}
	     * @expose
	     */
	    ByteBuffer.calculateVarint32 = function(value) {
	        // ref: src/google/protobuf/io/coded_stream.cc
	        value = value >>> 0;
	             if (value < 1 << 7 ) return 1;
	        else if (value < 1 << 14) return 2;
	        else if (value < 1 << 21) return 3;
	        else if (value < 1 << 28) return 4;
	        else                      return 5;
	    };
	
	    /**
	     * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
	     * @param {number} n Signed 32bit integer
	     * @returns {number} Unsigned zigzag encoded 32bit integer
	     * @expose
	     */
	    ByteBuffer.zigZagEncode32 = function(n) {
	        return (((n |= 0) << 1) ^ (n >> 31)) >>> 0; // ref: src/google/protobuf/wire_format_lite.h
	    };
	
	    /**
	     * Decodes a zigzag encoded signed 32bit integer.
	     * @param {number} n Unsigned zigzag encoded 32bit integer
	     * @returns {number} Signed 32bit integer
	     * @expose
	     */
	    ByteBuffer.zigZagDecode32 = function(n) {
	        return ((n >>> 1) ^ -(n & 1)) | 0; // // ref: src/google/protobuf/wire_format_lite.h
	    };
	
	    /**
	     * Writes a 32bit base 128 variable-length integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeVarint32 = function(value, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var size = ByteBuffer.calculateVarint32(value),
	            b;
	        offset += size;
	        var capacity10 = this.buffer.byteLength;
	        if (offset > capacity10)
	            this.resize((capacity10 *= 2) > offset ? capacity10 : offset);
	        offset -= size;
	        value >>>= 0;
	        while (value >= 0x80) {
	            b = (value & 0x7f) | 0x80;
	            this.view[offset++] = b;
	            value >>>= 7;
	        }
	        this.view[offset++] = value;
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return size;
	    };
	
	    /**
	     * Writes a zig-zag encoded (signed) 32bit base 128 variable-length integer.
	     * @param {number} value Value to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeVarint32ZigZag = function(value, offset) {
	        return this.writeVarint32(ByteBuffer.zigZagEncode32(value), offset);
	    };
	
	    /**
	     * Reads a 32bit base 128 variable-length integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
	     *  and the actual number of bytes read.
	     * @throws {Error} If it's not a valid varint. Has a property `truncated = true` if there is not enough data available
	     *  to fully decode the varint.
	     * @expose
	     */
	    ByteBufferPrototype.readVarint32 = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var c = 0,
	            value = 0 >>> 0,
	            b;
	        do {
	            if (!this.noAssert && offset > this.limit) {
	                var err = Error("Truncated");
	                err['truncated'] = true;
	                throw err;
	            }
	            b = this.view[offset++];
	            if (c < 5)
	                value |= (b & 0x7f) << (7*c);
	            ++c;
	        } while ((b & 0x80) !== 0);
	        value |= 0;
	        if (relative) {
	            this.offset = offset;
	            return value;
	        }
	        return {
	            "value": value,
	            "length": c
	        };
	    };
	
	    /**
	     * Reads a zig-zag encoded (signed) 32bit base 128 variable-length integer.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
	     *  and the actual number of bytes read.
	     * @throws {Error} If it's not a valid varint
	     * @expose
	     */
	    ByteBufferPrototype.readVarint32ZigZag = function(offset) {
	        var val = this.readVarint32(offset);
	        if (typeof val === 'object')
	            val["value"] = ByteBuffer.zigZagDecode32(val["value"]);
	        else
	            val = ByteBuffer.zigZagDecode32(val);
	        return val;
	    };
	
	    // types/varints/varint64
	
	    if (Long) {
	
	        /**
	         * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
	         * @type {number}
	         * @const
	         * @expose
	         */
	        ByteBuffer.MAX_VARINT64_BYTES = 10;
	
	        /**
	         * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
	         * @param {number|!Long} value Value to encode
	         * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT64_BYTES}
	         * @expose
	         */
	        ByteBuffer.calculateVarint64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value);
	            else if (typeof value === 'string')
	                value = Long.fromString(value);
	            // ref: src/google/protobuf/io/coded_stream.cc
	            var part0 = value.toInt() >>> 0,
	                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	            if (part2 == 0) {
	                if (part1 == 0) {
	                    if (part0 < 1 << 14)
	                        return part0 < 1 << 7 ? 1 : 2;
	                    else
	                        return part0 < 1 << 21 ? 3 : 4;
	                } else {
	                    if (part1 < 1 << 14)
	                        return part1 < 1 << 7 ? 5 : 6;
	                    else
	                        return part1 < 1 << 21 ? 7 : 8;
	                }
	            } else
	                return part2 < 1 << 7 ? 9 : 10;
	        };
	
	        /**
	         * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
	         * @param {number|!Long} value Signed long
	         * @returns {!Long} Unsigned zigzag encoded long
	         * @expose
	         */
	        ByteBuffer.zigZagEncode64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            // ref: src/google/protobuf/wire_format_lite.h
	            return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
	        };
	
	        /**
	         * Decodes a zigzag encoded signed 64bit integer.
	         * @param {!Long|number} value Unsigned zigzag encoded long or JavaScript number
	         * @returns {!Long} Signed long
	         * @expose
	         */
	        ByteBuffer.zigZagDecode64 = function(value) {
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            // ref: src/google/protobuf/wire_format_lite.h
	            return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
	        };
	
	        /**
	         * Writes a 64bit base 128 variable-length integer.
	         * @param {number|Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
	         * @expose
	         */
	        ByteBufferPrototype.writeVarint64 = function(value, offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof value === 'number')
	                    value = Long.fromNumber(value);
	                else if (typeof value === 'string')
	                    value = Long.fromString(value);
	                else if (!(value && value instanceof Long))
	                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	            }
	            if (typeof value === 'number')
	                value = Long.fromNumber(value, false);
	            else if (typeof value === 'string')
	                value = Long.fromString(value, false);
	            else if (value.unsigned !== false) value = value.toSigned();
	            var size = ByteBuffer.calculateVarint64(value),
	                part0 = value.toInt() >>> 0,
	                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	            offset += size;
	            var capacity11 = this.buffer.byteLength;
	            if (offset > capacity11)
	                this.resize((capacity11 *= 2) > offset ? capacity11 : offset);
	            offset -= size;
	            switch (size) {
	                case 10: this.view[offset+9] = (part2 >>>  7) & 0x01;
	                case 9 : this.view[offset+8] = size !== 9 ? (part2       ) | 0x80 : (part2       ) & 0x7F;
	                case 8 : this.view[offset+7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
	                case 7 : this.view[offset+6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
	                case 6 : this.view[offset+5] = size !== 6 ? (part1 >>>  7) | 0x80 : (part1 >>>  7) & 0x7F;
	                case 5 : this.view[offset+4] = size !== 5 ? (part1       ) | 0x80 : (part1       ) & 0x7F;
	                case 4 : this.view[offset+3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
	                case 3 : this.view[offset+2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
	                case 2 : this.view[offset+1] = size !== 2 ? (part0 >>>  7) | 0x80 : (part0 >>>  7) & 0x7F;
	                case 1 : this.view[offset  ] = size !== 1 ? (part0       ) | 0x80 : (part0       ) & 0x7F;
	            }
	            if (relative) {
	                this.offset += size;
	                return this;
	            } else {
	                return size;
	            }
	        };
	
	        /**
	         * Writes a zig-zag encoded 64bit base 128 variable-length integer.
	         * @param {number|Long} value Value to write
	         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  written if omitted.
	         * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
	         * @expose
	         */
	        ByteBufferPrototype.writeVarint64ZigZag = function(value, offset) {
	            return this.writeVarint64(ByteBuffer.zigZagEncode64(value), offset);
	        };
	
	        /**
	         * Reads a 64bit base 128 variable-length integer. Requires Long.js.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
	         *  the actual number of bytes read.
	         * @throws {Error} If it's not a valid varint
	         * @expose
	         */
	        ByteBufferPrototype.readVarint64 = function(offset) {
	            var relative = typeof offset === 'undefined';
	            if (relative) offset = this.offset;
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	            }
	            // ref: src/google/protobuf/io/coded_stream.cc
	            var start = offset,
	                part0 = 0,
	                part1 = 0,
	                part2 = 0,
	                b  = 0;
	            b = this.view[offset++]; part0  = (b & 0x7F)      ; if ( b & 0x80                                                   ) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part0 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part1 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part2  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            b = this.view[offset++]; part2 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
	            throw Error("Buffer overrun"); }}}}}}}}}}
	            var value = Long.fromBits(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24, false);
	            if (relative) {
	                this.offset = offset;
	                return value;
	            } else {
	                return {
	                    'value': value,
	                    'length': offset-start
	                };
	            }
	        };
	
	        /**
	         * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
	         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	         *  read if omitted.
	         * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
	         *  the actual number of bytes read.
	         * @throws {Error} If it's not a valid varint
	         * @expose
	         */
	        ByteBufferPrototype.readVarint64ZigZag = function(offset) {
	            var val = this.readVarint64(offset);
	            if (val && val['value'] instanceof Long)
	                val["value"] = ByteBuffer.zigZagDecode64(val["value"]);
	            else
	                val = ByteBuffer.zigZagDecode64(val);
	            return val;
	        };
	
	    } // Long
	
	
	    // types/strings/cstring
	
	    /**
	     * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL
	     *  characters itself.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  contained in `str` + 1 if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written
	     * @expose
	     */
	    ByteBufferPrototype.writeCString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        var i,
	            k = str.length;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            for (i=0; i<k; ++i) {
	                if (str.charCodeAt(i) === 0)
	                    throw RangeError("Illegal str: Contains NULL-characters");
	            }
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        // UTF8 strings do not contain zero bytes in between except for the zero character, so:
	        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
	        offset += k+1;
	        var capacity12 = this.buffer.byteLength;
	        if (offset > capacity12)
	            this.resize((capacity12 *= 2) > offset ? capacity12 : offset);
	        offset -= k+1;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        this.view[offset++] = 0;
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return k;
	    };
	
	    /**
	     * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters
	     *  itself.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readCString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var start = offset,
	            temp;
	        // UTF8 strings do not contain zero bytes in between except for the zero character itself, so:
	        var sd, b = -1;
	        utfx.decodeUTF8toUTF16(function() {
	            if (b === 0) return null;
	            if (offset >= this.limit)
	                throw RangeError("Illegal range: Truncated data, "+offset+" < "+this.limit);
	            b = this.view[offset++];
	            return b === 0 ? null : b;
	        }.bind(this), sd = stringDestination(), true);
	        if (relative) {
	            this.offset = offset;
	            return sd();
	        } else {
	            return {
	                "string": sd(),
	                "length": offset - start
	            };
	        }
	    };
	
	    // types/strings/istring
	
	    /**
	     * Writes a length as uint32 prefixed UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     * @see ByteBuffer#writeVarint32
	     */
	    ByteBufferPrototype.writeIString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var start = offset,
	            k;
	        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
	        offset += 4+k;
	        var capacity13 = this.buffer.byteLength;
	        if (offset > capacity13)
	            this.resize((capacity13 *= 2) > offset ? capacity13 : offset);
	        offset -= 4+k;
	        if (this.littleEndian) {
	            this.view[offset+3] = (k >>> 24) & 0xFF;
	            this.view[offset+2] = (k >>> 16) & 0xFF;
	            this.view[offset+1] = (k >>>  8) & 0xFF;
	            this.view[offset  ] =  k         & 0xFF;
	        } else {
	            this.view[offset  ] = (k >>> 24) & 0xFF;
	            this.view[offset+1] = (k >>> 16) & 0xFF;
	            this.view[offset+2] = (k >>>  8) & 0xFF;
	            this.view[offset+3] =  k         & 0xFF;
	        }
	        offset += 4;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (offset !== start + 4 + k)
	            throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+4+k));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };
	
	    /**
	     * Reads a length as uint32 prefixed UTF8 encoded string.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     * @see ByteBuffer#readVarint32
	     */
	    ByteBufferPrototype.readIString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 4 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
	        }
	        var start = offset;
	        var len = this.readUint32(offset);
	        var str = this.readUTF8String(len, ByteBuffer.METRICS_BYTES, offset += 4);
	        offset += str['length'];
	        if (relative) {
	            this.offset = offset;
	            return str['string'];
	        } else {
	            return {
	                'string': str['string'],
	                'length': offset - start
	            };
	        }
	    };
	
	    // types/strings/utf8string
	
	    /**
	     * Metrics representing number of UTF8 characters. Evaluates to `c`.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.METRICS_CHARS = 'c';
	
	    /**
	     * Metrics representing number of bytes. Evaluates to `b`.
	     * @type {string}
	     * @const
	     * @expose
	     */
	    ByteBuffer.METRICS_BYTES = 'b';
	
	    /**
	     * Writes an UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
	     * @expose
	     */
	    ByteBufferPrototype.writeUTF8String = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var k;
	        var start = offset;
	        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
	        offset += k;
	        var capacity14 = this.buffer.byteLength;
	        if (offset > capacity14)
	            this.resize((capacity14 *= 2) > offset ? capacity14 : offset);
	        offset -= k;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };
	
	    /**
	     * Writes an UTF8 encoded string. This is an alias of {@link ByteBuffer#writeUTF8String}.
	     * @function
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
	     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
	     * @expose
	     */
	    ByteBufferPrototype.writeString = ByteBufferPrototype.writeUTF8String;
	
	    /**
	     * Calculates the number of UTF8 characters of a string. JavaScript itself uses UTF-16, so that a string's
	     *  `length` property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 characters
	     * @expose
	     */
	    ByteBuffer.calculateUTF8Chars = function(str) {
	        return utfx.calculateUTF16asUTF8(stringSource(str))[0];
	    };
	
	    /**
	     * Calculates the number of UTF8 bytes of a string.
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 bytes
	     * @expose
	     */
	    ByteBuffer.calculateUTF8Bytes = function(str) {
	        return utfx.calculateUTF16asUTF8(stringSource(str))[1];
	    };
	
	    /**
	     * Calculates the number of UTF8 bytes of a string. This is an alias of {@link ByteBuffer.calculateUTF8Bytes}.
	     * @function
	     * @param {string} str String to calculate
	     * @returns {number} Number of UTF8 bytes
	     * @expose
	     */
	    ByteBuffer.calculateString = ByteBuffer.calculateUTF8Bytes;
	
	    /**
	     * Reads an UTF8 encoded string.
	     * @param {number} length Number of characters or bytes to read.
	     * @param {string=} metrics Metrics specifying what `length` is meant to count. Defaults to
	     *  {@link ByteBuffer.METRICS_CHARS}.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readUTF8String = function(length, metrics, offset) {
	        if (typeof metrics === 'number') {
	            offset = metrics;
	            metrics = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (typeof metrics === 'undefined') metrics = ByteBuffer.METRICS_CHARS;
	        if (!this.noAssert) {
	            if (typeof length !== 'number' || length % 1 !== 0)
	                throw TypeError("Illegal length: "+length+" (not an integer)");
	            length |= 0;
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var i = 0,
	            start = offset,
	            sd;
	        if (metrics === ByteBuffer.METRICS_CHARS) { // The same for node and the browser
	            sd = stringDestination();
	            utfx.decodeUTF8(function() {
	                return i < length && offset < this.limit ? this.view[offset++] : null;
	            }.bind(this), function(cp) {
	                ++i; utfx.UTF8toUTF16(cp, sd);
	            });
	            if (i !== length)
	                throw RangeError("Illegal range: Truncated data, "+i+" == "+length);
	            if (relative) {
	                this.offset = offset;
	                return sd();
	            } else {
	                return {
	                    "string": sd(),
	                    "length": offset - start
	                };
	            }
	        } else if (metrics === ByteBuffer.METRICS_BYTES) {
	            if (!this.noAssert) {
	                if (typeof offset !== 'number' || offset % 1 !== 0)
	                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
	                offset >>>= 0;
	                if (offset < 0 || offset + length > this.buffer.byteLength)
	                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
	            }
	            var k = offset + length;
	            utfx.decodeUTF8toUTF16(function() {
	                return offset < k ? this.view[offset++] : null;
	            }.bind(this), sd = stringDestination(), this.noAssert);
	            if (offset !== k)
	                throw RangeError("Illegal range: Truncated data, "+offset+" == "+k);
	            if (relative) {
	                this.offset = offset;
	                return sd();
	            } else {
	                return {
	                    'string': sd(),
	                    'length': offset - start
	                };
	            }
	        } else
	            throw TypeError("Unsupported metrics: "+metrics);
	    };
	
	    /**
	     * Reads an UTF8 encoded string. This is an alias of {@link ByteBuffer#readUTF8String}.
	     * @function
	     * @param {number} length Number of characters or bytes to read
	     * @param {number=} metrics Metrics specifying what `n` is meant to count. Defaults to
	     *  {@link ByteBuffer.METRICS_CHARS}.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     */
	    ByteBufferPrototype.readString = ByteBufferPrototype.readUTF8String;
	
	    // types/strings/vstring
	
	    /**
	     * Writes a length as varint32 prefixed UTF8 encoded string.
	     * @param {string} str String to write
	     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
	     * @expose
	     * @see ByteBuffer#writeVarint32
	     */
	    ByteBufferPrototype.writeVString = function(str, offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        var start = offset,
	            k, l;
	        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
	        l = ByteBuffer.calculateVarint32(k);
	        offset += l+k;
	        var capacity15 = this.buffer.byteLength;
	        if (offset > capacity15)
	            this.resize((capacity15 *= 2) > offset ? capacity15 : offset);
	        offset -= l+k;
	        offset += this.writeVarint32(k, offset);
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            this.view[offset++] = b;
	        }.bind(this));
	        if (offset !== start+k+l)
	            throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+k+l));
	        if (relative) {
	            this.offset = offset;
	            return this;
	        }
	        return offset - start;
	    };
	
	    /**
	     * Reads a length as varint32 prefixed UTF8 encoded string.
	     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
	     *  read and the actual number of bytes read.
	     * @expose
	     * @see ByteBuffer#readVarint32
	     */
	    ByteBufferPrototype.readVString = function(offset) {
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 1 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
	        }
	        var start = offset;
	        var len = this.readVarint32(offset);
	        var str = this.readUTF8String(len['value'], ByteBuffer.METRICS_BYTES, offset += len['length']);
	        offset += str['length'];
	        if (relative) {
	            this.offset = offset;
	            return str['string'];
	        } else {
	            return {
	                'string': str['string'],
	                'length': offset - start
	            };
	        }
	    };
	
	
	    /**
	     * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
	     *  data's length.
	     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to append. If `source` is a ByteBuffer, its offsets
	     *  will be modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to append at. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example A relative `<01 02>03.append(<04 05>)` will result in `<01 02 04 05>, 04 05|`
	     * @example An absolute `<01 02>03.append(04 05>, 1)` will result in `<01 04>05, 04 05|`
	     */
	    ByteBufferPrototype.append = function(source, encoding, offset) {
	        if (typeof encoding === 'number' || typeof encoding !== 'string') {
	            offset = encoding;
	            encoding = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        if (!(source instanceof ByteBuffer))
	            source = ByteBuffer.wrap(source, encoding);
	        var length = source.limit - source.offset;
	        if (length <= 0) return this; // Nothing to append
	        offset += length;
	        var capacity16 = this.buffer.byteLength;
	        if (offset > capacity16)
	            this.resize((capacity16 *= 2) > offset ? capacity16 : offset);
	        offset -= length;
	        this.view.set(source.view.subarray(source.offset, source.limit), offset);
	        source.offset += length;
	        if (relative) this.offset += length;
	        return this;
	    };
	
	    /**
	     * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents at and after the
	        specified offset up to the length of this ByteBuffer's data.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} offset Offset to append to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  read if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @see ByteBuffer#append
	     */
	    ByteBufferPrototype.appendTo = function(target, offset) {
	        target.append(this, offset);
	        return this;
	    };
	
	    /**
	     * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to
	     *  disable them if your code already makes sure that everything is valid.
	     * @param {boolean} assert `true` to enable assertions, otherwise `false`
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.assert = function(assert) {
	        this.noAssert = !assert;
	        return this;
	    };
	
	    /**
	     * Gets the capacity of this ByteBuffer's backing buffer.
	     * @returns {number} Capacity of the backing buffer
	     * @expose
	     */
	    ByteBufferPrototype.capacity = function() {
	        return this.buffer.byteLength;
	    };
	    /**
	     * Clears this ByteBuffer's offsets by setting {@link ByteBuffer#offset} to `0` and {@link ByteBuffer#limit} to the
	     *  backing buffer's capacity. Discards {@link ByteBuffer#markedOffset}.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.clear = function() {
	        this.offset = 0;
	        this.limit = this.buffer.byteLength;
	        this.markedOffset = -1;
	        return this;
	    };
	
	    /**
	     * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for {@link ByteBuffer#offset},
	     *  {@link ByteBuffer#markedOffset} and {@link ByteBuffer#limit}.
	     * @param {boolean=} copy Whether to copy the backing buffer or to return another view on the same, defaults to `false`
	     * @returns {!ByteBuffer} Cloned instance
	     * @expose
	     */
	    ByteBufferPrototype.clone = function(copy) {
	        var bb = new ByteBuffer(0, this.littleEndian, this.noAssert);
	        if (copy) {
	            bb.buffer = new ArrayBuffer(this.buffer.byteLength);
	            bb.view = new Uint8Array(bb.buffer);
	        } else {
	            bb.buffer = this.buffer;
	            bb.view = this.view;
	        }
	        bb.offset = this.offset;
	        bb.markedOffset = this.markedOffset;
	        bb.limit = this.limit;
	        return bb;
	    };
	
	    /**
	     * Compacts this ByteBuffer to be backed by a {@link ByteBuffer#buffer} of its contents' length. Contents are the bytes
	     *  between {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will set `offset = 0` and `limit = capacity` and
	     *  adapt {@link ByteBuffer#markedOffset} to the same relative position if set.
	     * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.compact = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === 0 && end === this.buffer.byteLength)
	            return this; // Already compacted
	        var len = end - begin;
	        if (len === 0) {
	            this.buffer = EMPTY_BUFFER;
	            this.view = null;
	            if (this.markedOffset >= 0) this.markedOffset -= begin;
	            this.offset = 0;
	            this.limit = 0;
	            return this;
	        }
	        var buffer = new ArrayBuffer(len);
	        var view = new Uint8Array(buffer);
	        view.set(this.view.subarray(begin, end));
	        this.buffer = buffer;
	        this.view = view;
	        if (this.markedOffset >= 0) this.markedOffset -= begin;
	        this.offset = 0;
	        this.limit = len;
	        return this;
	    };
	
	    /**
	     * Creates a copy of this ByteBuffer's contents. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}.
	     * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} Copy
	     * @expose
	     */
	    ByteBufferPrototype.copy = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === end)
	            return new ByteBuffer(0, this.littleEndian, this.noAssert);
	        var capacity = end - begin,
	            bb = new ByteBuffer(capacity, this.littleEndian, this.noAssert);
	        bb.offset = 0;
	        bb.limit = capacity;
	        if (bb.markedOffset >= 0) bb.markedOffset -= begin;
	        this.copyTo(bb, 0, begin, end);
	        return bb;
	    };
	
	    /**
	     * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} targetOffset Offset to copy to. Will use and increase the target's {@link ByteBuffer#offset}
	     *  by the number of bytes copied if omitted.
	     * @param {number=} sourceOffset Offset to start copying from. Will use and increase {@link ByteBuffer#offset} by the
	     *  number of bytes copied if omitted.
	     * @param {number=} sourceLimit Offset to end copying from, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.copyTo = function(target, targetOffset, sourceOffset, sourceLimit) {
	        var relative,
	            targetRelative;
	        if (!this.noAssert) {
	            if (!ByteBuffer.isByteBuffer(target))
	                throw TypeError("Illegal target: Not a ByteBuffer");
	        }
	        targetOffset = (targetRelative = typeof targetOffset === 'undefined') ? target.offset : targetOffset | 0;
	        sourceOffset = (relative = typeof sourceOffset === 'undefined') ? this.offset : sourceOffset | 0;
	        sourceLimit = typeof sourceLimit === 'undefined' ? this.limit : sourceLimit | 0;
	
	        if (targetOffset < 0 || targetOffset > target.buffer.byteLength)
	            throw RangeError("Illegal target range: 0 <= "+targetOffset+" <= "+target.buffer.byteLength);
	        if (sourceOffset < 0 || sourceLimit > this.buffer.byteLength)
	            throw RangeError("Illegal source range: 0 <= "+sourceOffset+" <= "+this.buffer.byteLength);
	
	        var len = sourceLimit - sourceOffset;
	        if (len === 0)
	            return target; // Nothing to copy
	
	        target.ensureCapacity(targetOffset + len);
	
	        target.view.set(this.view.subarray(sourceOffset, sourceLimit), targetOffset);
	
	        if (relative) this.offset += len;
	        if (targetRelative) target.offset += len;
	
	        return this;
	    };
	
	    /**
	     * Makes sure that this ByteBuffer is backed by a {@link ByteBuffer#buffer} of at least the specified capacity. If the
	     *  current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity,
	     *  the required capacity will be used instead.
	     * @param {number} capacity Required capacity
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.ensureCapacity = function(capacity) {
	        var current = this.buffer.byteLength;
	        if (current < capacity)
	            return this.resize((current *= 2) > capacity ? current : capacity);
	        return this;
	    };
	
	    /**
	     * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
	     * @param {number|string} value Byte value to fill with. If given as a string, the first character is used.
	     * @param {number=} begin Begin offset. Will use and increase {@link ByteBuffer#offset} by the number of bytes
	     *  written if omitted. defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example `someByteBuffer.clear().fill(0)` fills the entire backing buffer with zeroes
	     */
	    ByteBufferPrototype.fill = function(value, begin, end) {
	        var relative = typeof begin === 'undefined';
	        if (relative) begin = this.offset;
	        if (typeof value === 'string' && value.length > 0)
	            value = value.charCodeAt(0);
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof value !== 'number' || value % 1 !== 0)
	                throw TypeError("Illegal value: "+value+" (not an integer)");
	            value |= 0;
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin >= end)
	            return this; // Nothing to fill
	        while (begin < end) this.view[begin++] = value;
	        if (relative) this.offset = begin;
	        return this;
	    };
	
	    /**
	     * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets `limit = offset` and
	     *  `offset = 0`. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.flip = function() {
	        this.limit = this.offset;
	        this.offset = 0;
	        return this;
	    };
	    /**
	     * Marks an offset on this ByteBuffer to be used later.
	     * @param {number=} offset Offset to mark. Defaults to {@link ByteBuffer#offset}.
	     * @returns {!ByteBuffer} this
	     * @throws {TypeError} If `offset` is not a valid number
	     * @throws {RangeError} If `offset` is out of bounds
	     * @see ByteBuffer#reset
	     * @expose
	     */
	    ByteBufferPrototype.mark = function(offset) {
	        offset = typeof offset === 'undefined' ? this.offset : offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        this.markedOffset = offset;
	        return this;
	    };
	    /**
	     * Sets the byte order.
	     * @param {boolean} littleEndian `true` for little endian byte order, `false` for big endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.order = function(littleEndian) {
	        if (!this.noAssert) {
	            if (typeof littleEndian !== 'boolean')
	                throw TypeError("Illegal littleEndian: Not a boolean");
	        }
	        this.littleEndian = !!littleEndian;
	        return this;
	    };
	
	    /**
	     * Switches (to) little endian byte order.
	     * @param {boolean=} littleEndian Defaults to `true`, otherwise uses big endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.LE = function(littleEndian) {
	        this.littleEndian = typeof littleEndian !== 'undefined' ? !!littleEndian : true;
	        return this;
	    };
	
	    /**
	     * Switches (to) big endian byte order.
	     * @param {boolean=} bigEndian Defaults to `true`, otherwise uses little endian
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.BE = function(bigEndian) {
	        this.littleEndian = typeof bigEndian !== 'undefined' ? !bigEndian : false;
	        return this;
	    };
	    /**
	     * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the
	     *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
	     *  will be resized and its contents moved accordingly.
	     * @param {!ByteBuffer|string|!ArrayBuffer} source Data to prepend. If `source` is a ByteBuffer, its offset will be
	     *  modified according to the performed read operation.
	     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
	     * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
	     *  prepended if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @example A relative `00<01 02 03>.prepend(<04 05>)` results in `<04 05 01 02 03>, 04 05|`
	     * @example An absolute `00<01 02 03>.prepend(<04 05>, 2)` results in `04<05 02 03>, 04 05|`
	     */
	    ByteBufferPrototype.prepend = function(source, encoding, offset) {
	        if (typeof encoding === 'number' || typeof encoding !== 'string') {
	            offset = encoding;
	            encoding = undefined;
	        }
	        var relative = typeof offset === 'undefined';
	        if (relative) offset = this.offset;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: "+offset+" (not an integer)");
	            offset >>>= 0;
	            if (offset < 0 || offset + 0 > this.buffer.byteLength)
	                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
	        }
	        if (!(source instanceof ByteBuffer))
	            source = ByteBuffer.wrap(source, encoding);
	        var len = source.limit - source.offset;
	        if (len <= 0) return this; // Nothing to prepend
	        var diff = len - offset;
	        if (diff > 0) { // Not enough space before offset, so resize + move
	            var buffer = new ArrayBuffer(this.buffer.byteLength + diff);
	            var view = new Uint8Array(buffer);
	            view.set(this.view.subarray(offset, this.buffer.byteLength), len);
	            this.buffer = buffer;
	            this.view = view;
	            this.offset += diff;
	            if (this.markedOffset >= 0) this.markedOffset += diff;
	            this.limit += diff;
	            offset += diff;
	        } else {
	            var arrayView = new Uint8Array(this.buffer);
	        }
	        this.view.set(source.view.subarray(source.offset, source.limit), offset - len);
	
	        source.offset = source.limit;
	        if (relative)
	            this.offset -= len;
	        return this;
	    };
	
	    /**
	     * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the
	     *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
	     *  will be resized and its contents moved accordingly.
	     * @param {!ByteBuffer} target Target ByteBuffer
	     * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
	     *  prepended if omitted.
	     * @returns {!ByteBuffer} this
	     * @expose
	     * @see ByteBuffer#prepend
	     */
	    ByteBufferPrototype.prependTo = function(target, offset) {
	        target.prepend(this, offset);
	        return this;
	    };
	    /**
	     * Prints debug information about this ByteBuffer's contents.
	     * @param {function(string)=} out Output function to call, defaults to console.log
	     * @expose
	     */
	    ByteBufferPrototype.printDebug = function(out) {
	        if (typeof out !== 'function') out = console.log.bind(console);
	        out(
	            this.toString()+"\n"+
	            "-------------------------------------------------------------------\n"+
	            this.toDebug(/* columns */ true)
	        );
	    };
	
	    /**
	     * Gets the number of remaining readable bytes. Contents are the bytes between {@link ByteBuffer#offset} and
	     *  {@link ByteBuffer#limit}, so this returns `limit - offset`.
	     * @returns {number} Remaining readable bytes. May be negative if `offset > limit`.
	     * @expose
	     */
	    ByteBufferPrototype.remaining = function() {
	        return this.limit - this.offset;
	    };
	    /**
	     * Resets this ByteBuffer's {@link ByteBuffer#offset}. If an offset has been marked through {@link ByteBuffer#mark}
	     *  before, `offset` will be set to {@link ByteBuffer#markedOffset}, which will then be discarded. If no offset has been
	     *  marked, sets `offset = 0`.
	     * @returns {!ByteBuffer} this
	     * @see ByteBuffer#mark
	     * @expose
	     */
	    ByteBufferPrototype.reset = function() {
	        if (this.markedOffset >= 0) {
	            this.offset = this.markedOffset;
	            this.markedOffset = -1;
	        } else {
	            this.offset = 0;
	        }
	        return this;
	    };
	    /**
	     * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that
	     *  large or larger.
	     * @param {number} capacity Capacity required
	     * @returns {!ByteBuffer} this
	     * @throws {TypeError} If `capacity` is not a number
	     * @throws {RangeError} If `capacity < 0`
	     * @expose
	     */
	    ByteBufferPrototype.resize = function(capacity) {
	        if (!this.noAssert) {
	            if (typeof capacity !== 'number' || capacity % 1 !== 0)
	                throw TypeError("Illegal capacity: "+capacity+" (not an integer)");
	            capacity |= 0;
	            if (capacity < 0)
	                throw RangeError("Illegal capacity: 0 <= "+capacity);
	        }
	        if (this.buffer.byteLength < capacity) {
	            var buffer = new ArrayBuffer(capacity);
	            var view = new Uint8Array(buffer);
	            view.set(this.view);
	            this.buffer = buffer;
	            this.view = view;
	        }
	        return this;
	    };
	    /**
	     * Reverses this ByteBuffer's contents.
	     * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.reverse = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        if (begin === end)
	            return this; // Nothing to reverse
	        Array.prototype.reverse.call(this.view.subarray(begin, end));
	        return this;
	    };
	    /**
	     * Skips the next `length` bytes. This will just advance
	     * @param {number} length Number of bytes to skip. May also be negative to move the offset back.
	     * @returns {!ByteBuffer} this
	     * @expose
	     */
	    ByteBufferPrototype.skip = function(length) {
	        if (!this.noAssert) {
	            if (typeof length !== 'number' || length % 1 !== 0)
	                throw TypeError("Illegal length: "+length+" (not an integer)");
	            length |= 0;
	        }
	        var offset = this.offset + length;
	        if (!this.noAssert) {
	            if (offset < 0 || offset > this.buffer.byteLength)
	                throw RangeError("Illegal length: 0 <= "+this.offset+" + "+length+" <= "+this.buffer.byteLength);
	        }
	        this.offset = offset;
	        return this;
	    };
	
	    /**
	     * Slices this ByteBuffer by creating a cloned instance with `offset = begin` and `limit = end`.
	     * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
	     * @returns {!ByteBuffer} Clone of this ByteBuffer with slicing applied, backed by the same {@link ByteBuffer#buffer}
	     * @expose
	     */
	    ByteBufferPrototype.slice = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var bb = this.clone();
	        bb.offset = begin;
	        bb.limit = end;
	        return bb;
	    };
	    /**
	     * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
	     * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory if
	     *  possible. Defaults to `false`
	     * @returns {!ArrayBuffer} Contents as an ArrayBuffer
	     * @expose
	     */
	    ByteBufferPrototype.toBuffer = function(forceCopy) {
	        var offset = this.offset,
	            limit = this.limit;
	        if (!this.noAssert) {
	            if (typeof offset !== 'number' || offset % 1 !== 0)
	                throw TypeError("Illegal offset: Not an integer");
	            offset >>>= 0;
	            if (typeof limit !== 'number' || limit % 1 !== 0)
	                throw TypeError("Illegal limit: Not an integer");
	            limit >>>= 0;
	            if (offset < 0 || offset > limit || limit > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+offset+" <= "+limit+" <= "+this.buffer.byteLength);
	        }
	        // NOTE: It's not possible to have another ArrayBuffer reference the same memory as the backing buffer. This is
	        // possible with Uint8Array#subarray only, but we have to return an ArrayBuffer by contract. So:
	        if (!forceCopy && offset === 0 && limit === this.buffer.byteLength)
	            return this.buffer;
	        if (offset === limit)
	            return EMPTY_BUFFER;
	        var buffer = new ArrayBuffer(limit - offset);
	        new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(offset, limit), 0);
	        return buffer;
	    };
	
	    /**
	     * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between
	     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. This is an alias of {@link ByteBuffer#toBuffer}.
	     * @function
	     * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory.
	     *  Defaults to `false`
	     * @returns {!ArrayBuffer} Contents as an ArrayBuffer
	     * @expose
	     */
	    ByteBufferPrototype.toArrayBuffer = ByteBufferPrototype.toBuffer;
	
	    /**
	     * Converts the ByteBuffer's contents to a string.
	     * @param {string=} encoding Output encoding. Returns an informative string representation if omitted but also allows
	     *  direct conversion to "utf8", "hex", "base64" and "binary" encoding. "debug" returns a hex representation with
	     *  highlighted offsets.
	     * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
	     * @returns {string} String representation
	     * @throws {Error} If `encoding` is invalid
	     * @expose
	     */
	    ByteBufferPrototype.toString = function(encoding, begin, end) {
	        if (typeof encoding === 'undefined')
	            return "ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";
	        if (typeof encoding === 'number')
	            encoding = "utf8",
	            begin = encoding,
	            end = begin;
	        switch (encoding) {
	            case "utf8":
	                return this.toUTF8(begin, end);
	            case "base64":
	                return this.toBase64(begin, end);
	            case "hex":
	                return this.toHex(begin, end);
	            case "binary":
	                return this.toBinary(begin, end);
	            case "debug":
	                return this.toDebug();
	            case "columns":
	                return this.toColumns();
	            default:
	                throw Error("Unsupported encoding: "+encoding);
	        }
	    };
	
	    // lxiv-embeddable
	
	    /**
	     * lxiv-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
	     * Released under the Apache License, Version 2.0
	     * see: https://github.com/dcodeIO/lxiv for details
	     */
	    var lxiv = function() {
	        "use strict";
	
	        /**
	         * lxiv namespace.
	         * @type {!Object.<string,*>}
	         * @exports lxiv
	         */
	        var lxiv = {};
	
	        /**
	         * Character codes for output.
	         * @type {!Array.<number>}
	         * @inner
	         */
	        var aout = [
	            65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
	            81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102,
	            103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
	            119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
	        ];
	
	        /**
	         * Character codes for input.
	         * @type {!Array.<number>}
	         * @inner
	         */
	        var ain = [];
	        for (var i=0, k=aout.length; i<k; ++i)
	            ain[aout[i]] = i;
	
	        /**
	         * Encodes bytes to base64 char codes.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
	         *  there are no more bytes left.
	         * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
	         *  code.
	         */
	        lxiv.encode = function(src, dst) {
	            var b, t;
	            while ((b = src()) !== null) {
	                dst(aout[(b>>2)&0x3f]);
	                t = (b&0x3)<<4;
	                if ((b = src()) !== null) {
	                    t |= (b>>4)&0xf;
	                    dst(aout[(t|((b>>4)&0xf))&0x3f]);
	                    t = (b&0xf)<<2;
	                    if ((b = src()) !== null)
	                        dst(aout[(t|((b>>6)&0x3))&0x3f]),
	                        dst(aout[b&0x3f]);
	                    else
	                        dst(aout[t&0x3f]),
	                        dst(61);
	                } else
	                    dst(aout[t&0x3f]),
	                    dst(61),
	                    dst(61);
	            }
	        };
	
	        /**
	         * Decodes base64 char codes to bytes.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
	         * @throws {Error} If a character code is invalid
	         */
	        lxiv.decode = function(src, dst) {
	            var c, t1, t2;
	            function fail(c) {
	                throw Error("Illegal character code: "+c);
	            }
	            while ((c = src()) !== null) {
	                t1 = ain[c];
	                if (typeof t1 === 'undefined') fail(c);
	                if ((c = src()) !== null) {
	                    t2 = ain[c];
	                    if (typeof t2 === 'undefined') fail(c);
	                    dst((t1<<2)>>>0|(t2&0x30)>>4);
	                    if ((c = src()) !== null) {
	                        t1 = ain[c];
	                        if (typeof t1 === 'undefined')
	                            if (c === 61) break; else fail(c);
	                        dst(((t2&0xf)<<4)>>>0|(t1&0x3c)>>2);
	                        if ((c = src()) !== null) {
	                            t2 = ain[c];
	                            if (typeof t2 === 'undefined')
	                                if (c === 61) break; else fail(c);
	                            dst(((t1&0x3)<<6)>>>0|t2);
	                        }
	                    }
	                }
	            }
	        };
	
	        /**
	         * Tests if a string is valid base64.
	         * @param {string} str String to test
	         * @returns {boolean} `true` if valid, otherwise `false`
	         */
	        lxiv.test = function(str) {
	            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
	        };
	
	        return lxiv;
	    }();
	
	    // encodings/base64
	
	    /**
	     * Encodes this ByteBuffer's contents to a base64 encoded string.
	     * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Base64 encoded string
	     * @throws {RangeError} If `begin` or `end` is out of bounds
	     * @expose
	     */
	    ByteBufferPrototype.toBase64 = function(begin, end) {
	        if (typeof begin === 'undefined')
	            begin = this.offset;
	        if (typeof end === 'undefined')
	            end = this.limit;
	        begin = begin | 0; end = end | 0;
	        if (begin < 0 || end > this.capacity || begin > end)
	            throw RangeError("begin, end");
	        var sd; lxiv.encode(function() {
	            return begin < end ? this.view[begin++] : null;
	        }.bind(this), sd = stringDestination());
	        return sd();
	    };
	
	    /**
	     * Decodes a base64 encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromBase64 = function(str, littleEndian) {
	        if (typeof str !== 'string')
	            throw TypeError("str");
	        var bb = new ByteBuffer(str.length/4*3, littleEndian),
	            i = 0;
	        lxiv.decode(stringSource(str), function(b) {
	            bb.view[i++] = b;
	        });
	        bb.limit = i;
	        return bb;
	    };
	
	    /**
	     * Encodes a binary string to base64 like `window.btoa` does.
	     * @param {string} str Binary string
	     * @returns {string} Base64 encoded string
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa
	     * @expose
	     */
	    ByteBuffer.btoa = function(str) {
	        return ByteBuffer.fromBinary(str).toBase64();
	    };
	
	    /**
	     * Decodes a base64 encoded string to binary like `window.atob` does.
	     * @param {string} b64 Base64 encoded string
	     * @returns {string} Binary string
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.atob
	     * @expose
	     */
	    ByteBuffer.atob = function(b64) {
	        return ByteBuffer.fromBase64(b64).toBinary();
	    };
	
	    // encodings/binary
	
	    /**
	     * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
	     * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Binary encoded string
	     * @throws {RangeError} If `offset > limit`
	     * @expose
	     */
	    ByteBufferPrototype.toBinary = function(begin, end) {
	        if (typeof begin === 'undefined')
	            begin = this.offset;
	        if (typeof end === 'undefined')
	            end = this.limit;
	        begin |= 0; end |= 0;
	        if (begin < 0 || end > this.capacity() || begin > end)
	            throw RangeError("begin, end");
	        if (begin === end)
	            return "";
	        var chars = [],
	            parts = [];
	        while (begin < end) {
	            chars.push(this.view[begin++]);
	            if (chars.length >= 1024)
	                parts.push(String.fromCharCode.apply(String, chars)),
	                chars = [];
	        }
	        return parts.join('') + String.fromCharCode.apply(String, chars);
	    };
	
	    /**
	     * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromBinary = function(str, littleEndian) {
	        if (typeof str !== 'string')
	            throw TypeError("str");
	        var i = 0,
	            k = str.length,
	            charCode,
	            bb = new ByteBuffer(k, littleEndian);
	        while (i<k) {
	            charCode = str.charCodeAt(i);
	            if (charCode > 0xff)
	                throw RangeError("illegal char code: "+charCode);
	            bb.view[i++] = charCode;
	        }
	        bb.limit = k;
	        return bb;
	    };
	
	    // encodings/debug
	
	    /**
	     * Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
	     * * `<` : offset,
	     * * `'` : markedOffset,
	     * * `>` : limit,
	     * * `|` : offset and limit,
	     * * `[` : offset and markedOffset,
	     * * `]` : markedOffset and limit,
	     * * `!` : offset, markedOffset and limit
	     * @param {boolean=} columns If `true` returns two columns hex + ascii, defaults to `false`
	     * @returns {string|!Array.<string>} Debug string or array of lines if `asArray = true`
	     * @expose
	     * @example `>00'01 02<03` contains four bytes with `limit=0, markedOffset=1, offset=3`
	     * @example `00[01 02 03>` contains four bytes with `offset=markedOffset=1, limit=4`
	     * @example `00|01 02 03` contains four bytes with `offset=limit=1, markedOffset=-1`
	     * @example `|` contains zero bytes with `offset=limit=0, markedOffset=-1`
	     */
	    ByteBufferPrototype.toDebug = function(columns) {
	        var i = -1,
	            k = this.buffer.byteLength,
	            b,
	            hex = "",
	            asc = "",
	            out = "";
	        while (i<k) {
	            if (i !== -1) {
	                b = this.view[i];
	                if (b < 0x10) hex += "0"+b.toString(16).toUpperCase();
	                else hex += b.toString(16).toUpperCase();
	                if (columns)
	                    asc += b > 32 && b < 127 ? String.fromCharCode(b) : '.';
	            }
	            ++i;
	            if (columns) {
	                if (i > 0 && i % 16 === 0 && i !== k) {
	                    while (hex.length < 3*16+3) hex += " ";
	                    out += hex+asc+"\n";
	                    hex = asc = "";
	                }
	            }
	            if (i === this.offset && i === this.limit)
	                hex += i === this.markedOffset ? "!" : "|";
	            else if (i === this.offset)
	                hex += i === this.markedOffset ? "[" : "<";
	            else if (i === this.limit)
	                hex += i === this.markedOffset ? "]" : ">";
	            else
	                hex += i === this.markedOffset ? "'" : (columns || (i !== 0 && i !== k) ? " " : "");
	        }
	        if (columns && hex !== " ") {
	            while (hex.length < 3*16+3)
	                hex += " ";
	            out += hex + asc + "\n";
	        }
	        return columns ? out : hex;
	    };
	
	    /**
	     * Decodes a hex encoded string with marked offsets to a ByteBuffer.
	     * @param {string} str Debug string to decode (not be generated with `columns = true`)
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     * @see ByteBuffer#toDebug
	     */
	    ByteBuffer.fromDebug = function(str, littleEndian, noAssert) {
	        var k = str.length,
	            bb = new ByteBuffer(((k+1)/3)|0, littleEndian, noAssert);
	        var i = 0, j = 0, ch, b,
	            rs = false, // Require symbol next
	            ho = false, hm = false, hl = false, // Already has offset (ho), markedOffset (hm), limit (hl)?
	            fail = false;
	        while (i<k) {
	            switch (ch = str.charAt(i++)) {
	                case '!':
	                    if (!noAssert) {
	                        if (ho || hm || hl) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hm = hl = true;
	                    }
	                    bb.offset = bb.markedOffset = bb.limit = j;
	                    rs = false;
	                    break;
	                case '|':
	                    if (!noAssert) {
	                        if (ho || hl) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hl = true;
	                    }
	                    bb.offset = bb.limit = j;
	                    rs = false;
	                    break;
	                case '[':
	                    if (!noAssert) {
	                        if (ho || hm) {
	                            fail = true;
	                            break;
	                        }
	                        ho = hm = true;
	                    }
	                    bb.offset = bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case '<':
	                    if (!noAssert) {
	                        if (ho) {
	                            fail = true;
	                            break;
	                        }
	                        ho = true;
	                    }
	                    bb.offset = j;
	                    rs = false;
	                    break;
	                case ']':
	                    if (!noAssert) {
	                        if (hl || hm) {
	                            fail = true;
	                            break;
	                        }
	                        hl = hm = true;
	                    }
	                    bb.limit = bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case '>':
	                    if (!noAssert) {
	                        if (hl) {
	                            fail = true;
	                            break;
	                        }
	                        hl = true;
	                    }
	                    bb.limit = j;
	                    rs = false;
	                    break;
	                case "'":
	                    if (!noAssert) {
	                        if (hm) {
	                            fail = true;
	                            break;
	                        }
	                        hm = true;
	                    }
	                    bb.markedOffset = j;
	                    rs = false;
	                    break;
	                case ' ':
	                    rs = false;
	                    break;
	                default:
	                    if (!noAssert) {
	                        if (rs) {
	                            fail = true;
	                            break;
	                        }
	                    }
	                    b = parseInt(ch+str.charAt(i++), 16);
	                    if (!noAssert) {
	                        if (isNaN(b) || b < 0 || b > 255)
	                            throw TypeError("Illegal str: Not a debug encoded string");
	                    }
	                    bb.view[j++] = b;
	                    rs = true;
	            }
	            if (fail)
	                throw TypeError("Illegal str: Invalid symbol at "+i);
	        }
	        if (!noAssert) {
	            if (!ho || !hl)
	                throw TypeError("Illegal str: Missing offset or limit");
	            if (j<bb.buffer.byteLength)
	                throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+j+" < "+k);
	        }
	        return bb;
	    };
	
	    // encodings/hex
	
	    /**
	     * Encodes this ByteBuffer's contents to a hex encoded string.
	     * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
	     * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
	     * @returns {string} Hex encoded string
	     * @expose
	     */
	    ByteBufferPrototype.toHex = function(begin, end) {
	        begin = typeof begin === 'undefined' ? this.offset : begin;
	        end = typeof end === 'undefined' ? this.limit : end;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var out = new Array(end - begin),
	            b;
	        while (begin < end) {
	            b = this.view[begin++];
	            if (b < 0x10)
	                out.push("0", b.toString(16));
	            else out.push(b.toString(16));
	        }
	        return out.join('');
	    };
	
	    /**
	     * Decodes a hex encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromHex = function(str, littleEndian, noAssert) {
	        if (!noAssert) {
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	            if (str.length % 2 !== 0)
	                throw TypeError("Illegal str: Length not a multiple of 2");
	        }
	        var k = str.length,
	            bb = new ByteBuffer((k / 2) | 0, littleEndian),
	            b;
	        for (var i=0, j=0; i<k; i+=2) {
	            b = parseInt(str.substring(i, i+2), 16);
	            if (!noAssert)
	                if (!isFinite(b) || b < 0 || b > 255)
	                    throw TypeError("Illegal str: Contains non-hex characters");
	            bb.view[j++] = b;
	        }
	        bb.limit = j;
	        return bb;
	    };
	
	    // utfx-embeddable
	
	    /**
	     * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
	     * Released under the Apache License, Version 2.0
	     * see: https://github.com/dcodeIO/utfx for details
	     */
	    var utfx = function() {
	        "use strict";
	
	        /**
	         * utfx namespace.
	         * @inner
	         * @type {!Object.<string,*>}
	         */
	        var utfx = {};
	
	        /**
	         * Maximum valid code point.
	         * @type {number}
	         * @const
	         */
	        utfx.MAX_CODEPOINT = 0x10FFFF;
	
	        /**
	         * Encodes UTF8 code points to UTF8 bytes.
	         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
	         *  respectively `null` if there are no more code points left or a single numeric code point.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
	         */
	        utfx.encodeUTF8 = function(src, dst) {
	            var cp = null;
	            if (typeof src === 'number')
	                cp = src,
	                src = function() { return null; };
	            while (cp !== null || (cp = src()) !== null) {
	                if (cp < 0x80)
	                    dst(cp&0x7F);
	                else if (cp < 0x800)
	                    dst(((cp>>6)&0x1F)|0xC0),
	                    dst((cp&0x3F)|0x80);
	                else if (cp < 0x10000)
	                    dst(((cp>>12)&0x0F)|0xE0),
	                    dst(((cp>>6)&0x3F)|0x80),
	                    dst((cp&0x3F)|0x80);
	                else
	                    dst(((cp>>18)&0x07)|0xF0),
	                    dst(((cp>>12)&0x3F)|0x80),
	                    dst(((cp>>6)&0x3F)|0x80),
	                    dst((cp&0x3F)|0x80);
	                cp = null;
	            }
	        };
	
	        /**
	         * Decodes UTF8 bytes to UTF8 code points.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
	         *  are no more bytes left.
	         * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
	         * @throws {RangeError} If a starting byte is invalid in UTF8
	         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
	         *  remaining bytes.
	         */
	        utfx.decodeUTF8 = function(src, dst) {
	            var a, b, c, d, fail = function(b) {
	                b = b.slice(0, b.indexOf(null));
	                var err = Error(b.toString());
	                err.name = "TruncatedError";
	                err['bytes'] = b;
	                throw err;
	            };
	            while ((a = src()) !== null) {
	                if ((a&0x80) === 0)
	                    dst(a);
	                else if ((a&0xE0) === 0xC0)
	                    ((b = src()) === null) && fail([a, b]),
	                    dst(((a&0x1F)<<6) | (b&0x3F));
	                else if ((a&0xF0) === 0xE0)
	                    ((b=src()) === null || (c=src()) === null) && fail([a, b, c]),
	                    dst(((a&0x0F)<<12) | ((b&0x3F)<<6) | (c&0x3F));
	                else if ((a&0xF8) === 0xF0)
	                    ((b=src()) === null || (c=src()) === null || (d=src()) === null) && fail([a, b, c ,d]),
	                    dst(((a&0x07)<<18) | ((b&0x3F)<<12) | ((c&0x3F)<<6) | (d&0x3F));
	                else throw RangeError("Illegal starting byte: "+a);
	            }
	        };
	
	        /**
	         * Converts UTF16 characters to UTF8 code points.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @param {!function(number)} dst Code points destination as a function successively called with each converted code
	         *  point.
	         */
	        utfx.UTF16toUTF8 = function(src, dst) {
	            var c1, c2 = null;
	            while (true) {
	                if ((c1 = c2 !== null ? c2 : src()) === null)
	                    break;
	                if (c1 >= 0xD800 && c1 <= 0xDFFF) {
	                    if ((c2 = src()) !== null) {
	                        if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
	                            dst((c1-0xD800)*0x400+c2-0xDC00+0x10000);
	                            c2 = null; continue;
	                        }
	                    }
	                }
	                dst(c1);
	            }
	            if (c2 !== null) dst(c2);
	        };
	
	        /**
	         * Converts UTF8 code points to UTF16 characters.
	         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
	         *  respectively `null` if there are no more code points left or a single numeric code point.
	         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
	         * @throws {RangeError} If a code point is out of range
	         */
	        utfx.UTF8toUTF16 = function(src, dst) {
	            var cp = null;
	            if (typeof src === 'number')
	                cp = src, src = function() { return null; };
	            while (cp !== null || (cp = src()) !== null) {
	                if (cp <= 0xFFFF)
	                    dst(cp);
	                else
	                    cp -= 0x10000,
	                    dst((cp>>10)+0xD800),
	                    dst((cp%0x400)+0xDC00);
	                cp = null;
	            }
	        };
	
	        /**
	         * Converts and encodes UTF16 characters to UTF8 bytes.
	         * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
	         *  if there are no more characters left.
	         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
	         */
	        utfx.encodeUTF16toUTF8 = function(src, dst) {
	            utfx.UTF16toUTF8(src, function(cp) {
	                utfx.encodeUTF8(cp, dst);
	            });
	        };
	
	        /**
	         * Decodes and converts UTF8 bytes to UTF16 characters.
	         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
	         *  are no more bytes left.
	         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
	         * @throws {RangeError} If a starting byte is invalid in UTF8
	         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
	         */
	        utfx.decodeUTF8toUTF16 = function(src, dst) {
	            utfx.decodeUTF8(src, function(cp) {
	                utfx.UTF8toUTF16(cp, dst);
	            });
	        };
	
	        /**
	         * Calculates the byte length of an UTF8 code point.
	         * @param {number} cp UTF8 code point
	         * @returns {number} Byte length
	         */
	        utfx.calculateCodePoint = function(cp) {
	            return (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	        };
	
	        /**
	         * Calculates the number of UTF8 bytes required to store UTF8 code points.
	         * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
	         *  `null` if there are no more code points left.
	         * @returns {number} The number of UTF8 bytes required
	         */
	        utfx.calculateUTF8 = function(src) {
	            var cp, l=0;
	            while ((cp = src()) !== null)
	                l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	            return l;
	        };
	
	        /**
	         * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
	         * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
	         *  `null` if there are no more characters left.
	         * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
	         */
	        utfx.calculateUTF16asUTF8 = function(src) {
	            var n=0, l=0;
	            utfx.UTF16toUTF8(src, function(cp) {
	                ++n; l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
	            });
	            return [n,l];
	        };
	
	        return utfx;
	    }();
	
	    // encodings/utf8
	
	    /**
	     * Encodes this ByteBuffer's contents between {@link ByteBuffer#offset} and {@link ByteBuffer#limit} to an UTF8 encoded
	     *  string.
	     * @returns {string} Hex encoded string
	     * @throws {RangeError} If `offset > limit`
	     * @expose
	     */
	    ByteBufferPrototype.toUTF8 = function(begin, end) {
	        if (typeof begin === 'undefined') begin = this.offset;
	        if (typeof end === 'undefined') end = this.limit;
	        if (!this.noAssert) {
	            if (typeof begin !== 'number' || begin % 1 !== 0)
	                throw TypeError("Illegal begin: Not an integer");
	            begin >>>= 0;
	            if (typeof end !== 'number' || end % 1 !== 0)
	                throw TypeError("Illegal end: Not an integer");
	            end >>>= 0;
	            if (begin < 0 || begin > end || end > this.buffer.byteLength)
	                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
	        }
	        var sd; try {
	            utfx.decodeUTF8toUTF16(function() {
	                return begin < end ? this.view[begin++] : null;
	            }.bind(this), sd = stringDestination());
	        } catch (e) {
	            if (begin !== end)
	                throw RangeError("Illegal range: Truncated data, "+begin+" != "+end);
	        }
	        return sd();
	    };
	
	    /**
	     * Decodes an UTF8 encoded string to a ByteBuffer.
	     * @param {string} str String to decode
	     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
	     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
	     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
	     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
	     * @returns {!ByteBuffer} ByteBuffer
	     * @expose
	     */
	    ByteBuffer.fromUTF8 = function(str, littleEndian, noAssert) {
	        if (!noAssert)
	            if (typeof str !== 'string')
	                throw TypeError("Illegal str: Not a string");
	        var bb = new ByteBuffer(utfx.calculateUTF16asUTF8(stringSource(str), true)[1], littleEndian, noAssert),
	            i = 0;
	        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
	            bb.view[i++] = b;
	        });
	        bb.limit = i;
	        return bb;
	    };
	
	    return ByteBuffer;
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var protobuf = global.protobuf = exports;
	
	var util = __webpack_require__(20);
	
	/**
	 * Loads one or multiple .proto or preprocessed .json files into a common root namespace.
	 * @param {string|string[]} filename One or multiple files to load
	 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
	 * @param {function(?Error, Root=)} [callback] Callback function
	 * @returns {Promise<Root>|Object} A promise if callback has been omitted, otherwise the protobuf namespace
	 * @throws {TypeError} If arguments are invalid
	 */
	function load(filename, root, callback) {
	    if (typeof root === 'function') {
	        callback = root;
	        root = new protobuf.Root();
	    } else if (!root)
	        root = new protobuf.Root();
	    return root.load(filename, callback) || protobuf;
	}
	
	protobuf.load = load;
	
	// Parser
	protobuf.tokenize         = __webpack_require__(27);
	protobuf.parse            = __webpack_require__(28);
	
	// Serialization
	protobuf.Writer           = __webpack_require__(47);
	protobuf.BufferWriter     = protobuf.Writer.BufferWriter;
	protobuf.Reader           = __webpack_require__(44);
	protobuf.BufferReader     = protobuf.Reader.BufferReader;
	protobuf.Encoder          = __webpack_require__(46);
	protobuf.Decoder          = __webpack_require__(48);
	
	// Reflection
	protobuf.ReflectionObject = __webpack_require__(31);
	protobuf.Namespace        = __webpack_require__(30);
	protobuf.Root             = __webpack_require__(29);
	protobuf.Enum             = __webpack_require__(32);
	protobuf.Type             = __webpack_require__(33);
	protobuf.Field            = __webpack_require__(35);
	protobuf.OneOf            = __webpack_require__(34);
	protobuf.MapField         = __webpack_require__(36);
	protobuf.Service          = __webpack_require__(38);
	protobuf.Method           = __webpack_require__(41);
	
	// Runtime
	protobuf.Prototype        = __webpack_require__(42);
	protobuf.inherits         = __webpack_require__(43);
	
	// Utility
	protobuf.types            = __webpack_require__(37);
	protobuf.common           = __webpack_require__(50);
	protobuf.util             = util;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	/**
	 * Utility functions.
	 * @namespace
	 */
	var util = module.exports = {};
	
	var LongBits =
	util.LongBits = __webpack_require__(21);
	util.codegen  = __webpack_require__(22);
	
	/**
	 * Whether running within node or not.
	 * @memberof util
	 * @type {boolean}
	 */
	var isNode = util.isNode = Boolean(global.process && global.process.versions && global.process.versions.node);
	
	/**
	 * Optional buffer class to use.
	 * If you assign any compatible buffer implementation to this property, the library will use it.
	 * @type {?Function}
	 */
	util.Buffer = null;
	
	if (isNode)
	    try { util.Buffer = __webpack_require__(23).Buffer; } catch (e) {} // eslint-disable-line no-empty
	
	/**
	 * Optional Long class to use.
	 * If you assign any compatible long implementation to this property, the library will use it.
	 * @type {?Function}
	 */
	util.Long = global.dcodeIO && global.dcodeIO.Long || null;
	
	if (!util.Long)
	    try { util.Long = __webpack_require__(15); } catch (e) {} // eslint-disable-line no-empty
	
	/**
	 * Tests if the specified value is a string.
	 * @memberof util
	 * @param {*} value Value to test
	 * @returns {boolean} `true` if the value is a string
	 */
	function isString(value) {
	    return typeof value === 'string' || value instanceof String;
	}
	
	util.isString = isString;
	
	/**
	 * Tests if the specified value is a non-null object.
	 * @param {*} value Value to test
	 * @returns {boolean} `true` if the value is a non-null object
	 */
	util.isObject = function isObject(value) {
	    return Boolean(value && typeof value === 'object');
	};
	
	/**
	 * Tests if the specified value is an integer.
	 * @function
	 * @param {*} value Value to test
	 * @returns {boolean} `true` if the value is an integer
	 */
	util.isInteger = Number.isInteger || function isInteger(value) {
	    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	};
	
	/**
	 * Converts an object's values to an array.
	 * @param {Object.<string,*>} object Object to convert
	 * @returns {Array.<*>} Converted array
	 */
	util.toArray = function toArray(object) {
	    if (!object)
	        return [];
	    var names = Object.keys(object),
	        length = names.length;
	    var array = new Array(length);
	    for (var i = 0; i < length; ++i)
	        array[i] = object[names[i]];
	    return array;
	};
	
	/**
	 * Creates a type error.
	 * @param {string} name Argument name
	 * @param {string} [description=a string] Expected argument descripotion
	 * @returns {TypeError} Created type error
	 * @private
	 */
	util._TypeError = function(name, description) {
	    return TypeError(name + " must be " + (description || "a string"));
	};
	
	/**
	 * Returns a promise from a node-style function.
	 * @memberof util
	 * @param {function(Error, ...*)} fn Function to call
	 * @param {Object} ctx Function context
	 * @param {...*} params Function arguments
	 * @returns {Promise<*>} Promisified function
	 */
	function asPromise(fn, ctx/*, varargs */) {
	    var args = [];
	    for (var i = 2; i < arguments.length; ++i)
	        args.push(arguments[i]);
	    return new Promise(function(resolve, reject) {
	        fn.apply(ctx, args.concat(
	            function(err/*, varargs */) {
	                if (err) reject(err);
	                else resolve.apply(null, Array.prototype.slice.call(arguments, 1));
	            }
	        ));
	    });
	}
	
	util.asPromise = asPromise;
	
	/**
	 * Fetches the contents of a file.
	 * @memberof util
	 * @param {string} path File path or url
	 * @param {function(?Error, string=)} [callback] Node-style callback
	 * @returns {Promise<string>|undefined} Promise if callback has been omitted 
	 */
	function fetch(path, callback) {
	    if (!callback)
	        return asPromise(fetch, util, path);
	    var fs; try { fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); } catch (e) {} // eslint-disable-line no-empty
	    if (fs && fs.readFile)
	        return fs.readFile(path, "utf8", callback);
	    var xhr = new XMLHttpRequest();
	    function onload() {
	        if (xhr.status !== 0 && xhr.status !== 200)
	            return callback(Error("status " + xhr.status));
	        if (isString(xhr.responseText))
	            return callback(null, xhr.responseText);
	        return callback(Error("request failed"));
	    }
	    xhr.onreadystatechange = function() {
	        if (xhr.readyState === 4)
	            onload();
	    };
	    xhr.open("GET", path, true);
	    xhr.send();
	    return undefined;
	}
	
	util.fetch = fetch;
	
	/**
	 * Tests if the specified path is absolute.
	 * @memberof util
	 * @param {string} path Path to test
	 * @returns {boolean} `true` if path is absolute
	 */
	function isAbsolutePath(path) {
	    return /^(?:\/|[a-zA-Z0-9]+:)/.test(path);
	}
	
	util.isAbsolutePath = isAbsolutePath;
	
	/**
	 * Normalizes the specified path.
	 * @memberof util
	 * @param {string} path Path to normalize
	 * @returns {string} Normalized path
	 */
	function normalizePath(path) {
	    path = path.replace(/\\/g, '/')
	               .replace(/\/{2,}/g, '/');
	    var parts = path.split('/');
	    var abs = isAbsolutePath(path);
	    var prefix = "";
	    if (abs)
	        prefix = parts.shift() + '/';
	    for (var i = 0; i < parts.length;) {
	        if (parts[i] === '..') {
	            if (i > 0)
	                parts.splice(--i, 2);
	            else if (abs)
	                parts.splice(i, 1);
	            else
	                ++i;
	        } else if (parts[i] === '.')
	            parts.splice(i, 1);
	        else
	            ++i;
	    }
	    return prefix + parts.join('/');
	}
	
	util.normalizePath = normalizePath;
	
	/**
	 * Resolves the specified include path against the specified origin path.
	 * @param {string} originPath Path that was used to fetch the origin file
	 * @param {string} importPath Import path specified in the origin file
	 * @param {boolean} [alreadyNormalized] `true` if both paths are already known to be normalized
	 * @returns {string} Path to the imported file
	 */
	util.resolvePath = function resolvePath(originPath, importPath, alreadyNormalized) {
	    if (!alreadyNormalized)
	        importPath = normalizePath(importPath);
	    if (isAbsolutePath(importPath))
	        return importPath;
	    if (!alreadyNormalized)
	        originPath = normalizePath(originPath);
	    originPath = originPath.replace(/(?:\/|^)[^/]+$/, '');
	    return originPath.length ? normalizePath(originPath + '/' + importPath) : importPath;
	};
	
	/**
	 * Converts a number or long to an 8 characters long hash string.
	 * @param {Long|number} value Value to convert
	 * @returns {string} Hash
	 */
	util.longToHash = function longToHash(value) {
	    return value
	        ? LongBits.from(value).toHash()
	        : '\0\0\0\0\0\0\0\0';
	};
	
	/**
	 * Converts an 8 characters long hash string to a long or number.
	 * @param {string} hash Hash
	 * @param {boolean} [unsigned=false] Whether unsigned or not
	 * @returns {Long|number} Original value
	 */
	util.longFromHash = function longFromHash(hash, unsigned) {
	    var bits = LongBits.fromHash(hash);
	    if (util.Long)
	        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
	    return bits.toNumber(Boolean(unsigned));
	};
	
	/**
	 * Tests if two possibly long values are not equal.
	 * @param {number|Long} a First value
	 * @param {number|Long} b Second value
	 * @returns {boolean} `true` if not equal
	 */
	util.longNeq = function longNeq(a, b) {
	    return typeof a === 'number'
	         ? typeof b === 'number'
	            ? a !== b
	            : (a = LongBits.fromNumber(a)).lo !== b.low || a.hi !== b.high
	         : typeof b === 'number'
	            ? (b = LongBits.fromNumber(b)).lo !== a.low || b.hi !== a.high
	            : a.low !== b.low || a.high !== b.high;
	};
	
	/**
	 * Merges the properties of the source object into the destination object.
	 * @param {Object} dst Destination object
	 * @param {Object} src Source object
	 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
	 * @returns {Object} Destination object
	 */
	util.merge = function merge(dst, src, ifNotSet) {
	    if (src) {
	        var keys = Object.keys(src);
	        for (var i = 0; i < keys.length; ++i)
	            if (dst[keys[i]] === undefined || !ifNotSet)
	                dst[keys[i]] = src[keys[i]];
	    }
	    return dst;
	};
	
	// Reserved words, ref: https://msdn.microsoft.com/en-us/library/ttyab5c8.aspx
	// var reserved = "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,false,finally,for,function,if,import,in,instanceof,new,null,protected,return,super,switch,this,throw,true,try,typeof,var,while,with,abstract,boolean,byte,char,decimal,double,enum,final,float,get,implements,int,interface,internal,long,package,private,protected,public,sbyte,set,short,static,uint,ulong,ushort,void,assert,ensure,event,goto,invariant,namespace,native,require,synchronized,throws,transient,use,volatile".split(',');
	
	/**
	 * Returns a safe property accessor for the specified properly name.
	 * @param {string} prop Property name
	 * @returns {string} Safe accessor
	 */
	util.safeProp = function safeProp(prop) {
	    // NOTE: While dot notation looks cleaner it doesn't seem to have a significant impact on performance.
	    // Hence, we can safe the extra bytes from providing the reserved keywords above for pre-ES5 envs.
	    return /* /^[a-z_$][a-z0-9_$]*$/i.test(prop) && !reserved.indexOf(prop) ? "." + prop : */ "['" + prop.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "']";
	};
	
	/**
	 * Creates a new buffer of whatever type supported by the environment.
	 * @param {number} [size=0] Buffer size
	 * @returns {Uint8Array} Buffer
	 */
	util.newBuffer = function newBuffer(size) {
	    return new (util.Buffer || typeof Uint8Array !== 'undefined' && Uint8Array || Array)(size || 0);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = LongBits;
	
	var util = __webpack_require__(20);
	
	/**
	 * Constructs new long bits.
	 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
	 * @memberof util
	 * @constructor
	 * @param {number} lo Low bits
	 * @param {number} hi High bits
	 */
	function LongBits(lo, hi) { // make sure to always call this with unsigned 32bits for proper optimization
	
	    /**
	     * Low bits.
	     * @type {number}
	     */
	    this.lo = lo;
	
	    /**
	     * High bits.
	     * @type {number}
	     */
	    this.hi = hi;
	}
	
	/** @alias util.LongBits.prototype */
	var LongBitsPrototype = LongBits.prototype;
	
	/**
	 * Zero bits.
	 * @memberof util.LongBits
	 * @type {util.LongBits}
	 */
	var zero = LongBits.zero = new LongBits(0, 0);
	
	zero.toNumber = function() { return 0; };
	zero.zzEncode = zero.zzDecode = function() { return this; };
	zero.length = function() { return 1; };
	
	/**
	 * Constructs new long bits from the specified number.
	 * @param {number} value Value
	 * @returns {util.LongBits} Instance
	 */
	LongBits.fromNumber = function fromNumber(value) {
	    if (value === 0)
	        return zero;
	    var sign  = value < 0;
	        value = Math.abs(value);
	    var lo = value >>> 0,
	        hi = (value - lo) / 4294967296 >>> 0;
	    if (sign) {
	        hi = ~hi >>> 0;
	        lo = ~lo >>> 0;
	        if (++lo > 4294967295) {
	            lo = 0;
	            if (++hi > 4294967295)
	                hi = 0;
	        }
	    }
	    return new LongBits(lo, hi);
	};
	
	/**
	 * Constructs new long bits from a number, long or string.
	 * @param {Long|number|string} value Value
	 * @returns {util.LongBits} Instance
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	LongBits.from = function from(value) {
	    switch (typeof value) { // eslint-disable-line default-case
	        case 'number':
	            return LongBits.fromNumber(value);
	        case 'string':
	            value = util.Long.fromString(value); // throws without a long lib
	    }
	    return (value.low || value.high) && new LongBits(value.low >>> 0, value.high >>> 0) || zero;
	};
	
	/**
	 * Converts this long bits to a possibly unsafe JavaScript number.
	 * @param {boolean} [unsigned=false] Whether unsigned or not
	 * @returns {number} Possibly unsafe number
	 */
	LongBitsPrototype.toNumber = function toNumber(unsigned) {
	    if (!unsigned && this.hi >>> 31) {
	        this.lo = ~this.lo + 1 >>> 0;
	        this.hi = ~this.hi     >>> 0;
	        if (!this.lo)
	            this.hi = this.hi + 1 >>> 0;
	        return -(this.lo + this.hi * 4294967296);
	    }
	    return this.lo + this.hi * 4294967296;
	};
	
	/**
	 * Converts this long bits to a long.
	 * @param {boolean} [unsigned=false] Whether unsigned or not
	 * @returns {Long} Long
	 */
	LongBitsPrototype.toLong = function toLong(unsigned) {
	    return new util.Long(this.lo, this.hi, unsigned);
	};
	
	var charCodeAt = String.prototype.charCodeAt;
	
	/**
	 * Constructs new long bits from the specified 8 characters long hash.
	 * @param {string} hash Hash
	 * @returns {util.LongBits} Bits
	 */
	LongBits.fromHash = function fromHash(hash) {
	    return new LongBits(
	        ( charCodeAt.call(hash, 0)
	        | charCodeAt.call(hash, 1) << 8
	        | charCodeAt.call(hash, 2) << 16
	        | charCodeAt.call(hash, 3) << 24) >>> 0
	    ,
	        ( charCodeAt.call(hash, 4)
	        | charCodeAt.call(hash, 5) << 8
	        | charCodeAt.call(hash, 6) << 16
	        | charCodeAt.call(hash, 7) << 24) >>> 0
	    );
	};
	
	/**
	 * Converts this long bits to a 8 characters long hash.
	 * @returns {string} Hash
	 */
	LongBitsPrototype.toHash = function toHash() {
	    return String.fromCharCode(
	        this.lo        & 255,
	        this.lo >>> 8  & 255,
	        this.lo >>> 16 & 255,
	        this.lo >>> 24 & 255,
	        this.hi        & 255,
	        this.hi >>> 8  & 255,
	        this.hi >>> 16 & 255,
	        this.hi >>> 24 & 255
	    );
	};
	
	/**
	 * Zig-zag encodes this long bits.
	 * @returns {util.LongBits} `this`
	 */
	LongBitsPrototype.zzEncode = function zzEncode() {
	    var mask =   this.hi >> 31;
	    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
	    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
	    return this;
	};
	
	/**
	 * Zig-zag decodes this long bits.
	 * @returns {util.LongBits} `this`
	 */
	LongBitsPrototype.zzDecode = function zzDecode() {
	    var mask = -(this.lo & 1);
	    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
	    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
	    return this;
	};
	
	/**
	 * Calculates the length of this longbits when encoded as a varint.
	 * @returns {number} Length
	 */
	LongBitsPrototype.length = function length() {
	    var part0 =  this.lo,
	        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
	        part2 =  this.hi >>> 24;
	    if (part2 === 0) {
	        if (part1 === 0)
	            return part0 < 1 << 14
	                ? part0 < 1 << 7 ? 1 : 2
	                : part0 < 1 << 21 ? 3 : 4;
	        return part1 < 1 << 14
	            ? part1 < 1 << 7 ? 5 : 6
	            : part1 < 1 << 21 ? 7 : 8;
	    }
	    return part2 < 1 << 7 ? 9 : 10;
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	module.exports = codegen;
	
	var blockOpenRe  = /[{[]$/,
	    blockCloseRe = /^[}\]]/,
	    casingRe     = /:$/,
	    branchRe     = /^\s*(?:if|else if|while|for)\b|\b(?:else)\s*$/,
	    breakRe      = /\b(?:break|continue);?$|^\s*return\b/;
	
	/**
	 * Programmatically generates a function.
	 * @memberof util
	 * @param {...string} params Function parameter names
	 * @returns {util.CodegenAppender} Printf-like appender function
	 * @property {boolean} supported Whether code generation is supported by the environment.
	 * @property {boolean} verbose=false When set to true, codegen will log generated code to console. Useful for debugging.
	 */
	function codegen(/* varargs */) {
	    var args   = Array.prototype.slice.call(arguments),
	        src    = ['\t"use strict"'];
	
	    var indent = 1,
	        inCase = false;
	
	    /**
	     * Appends a printf-like formatted line to the generated source. Returned when calling {@link util.codegen}.
	     * @typedef CodegenAppender
	     * @memberof util
	     * @type {function}
	     * @param {string} format A printf-like format string
	     * @param {...*} params Format replacements
	     * @returns {util.CodegenAppender} Itself
	     * @property {util.CodegenStringer} str
	     * @property {util.CodegenEnder} eof
	     * @see {@link https://nodejs.org/docs/latest/api/util.html#util_util_format_format_args}
	     */
	    /**/
	    function gen() {
	        var fmt = [];
	        for (var i = 0; i < arguments.length; ++i)
	            fmt[i] = arguments[i];
	        var line = gen.fmt.apply(null, fmt);
	        var level = indent;
	        if (src.length) {
	            var prev = src[src.length - 1];
	
	            // block open or one time branch
	            if (blockOpenRe.test(prev))
	                level = ++indent; // keep
	            else if (branchRe.test(prev))
	                ++level; // once
	            
	            // casing
	            if (casingRe.test(prev) && !casingRe.test(line)) {
	                level = ++indent;
	                inCase = true;
	            } else if (inCase && breakRe.test(prev)) {
	                level = --indent;
	                inCase = false;
	            }
	
	            // block close
	            if (blockCloseRe.test(line))
	                level = --indent;
	        }
	        for (var index = 0; index < level; ++index)
	            line = "\t" + line;
	        src.push(line);
	        return gen;
	    }
	
	    gen.fmt = function fmt(format) {
	        var params = Array.prototype.slice.call(arguments, 1),
	            index  = 0;
	        return format.replace(/%([djs])/g, function($0, $1) {
	            var param = params[index++];
	            return $1 === "j"
	                ? JSON.stringify(param)
	                : String(param);
	        });
	    };
	
	    /**
	     * Stringifies the so far generated function source.
	     * @typedef CodegenStringer
	     * @memberof util
	     * @type {function}
	     * @param {string} [name] Function name, defaults to generate an anonymous function
	     * @returns {string} Function source using tabs for indentation
	     */
	    /**/
	    gen.str = function str(name) {
	        return "function " + (name ? name.replace(/[^\w_$]/g, "_") : "") + "(" + args.join(",") + ") {\n" + src.join("\n") + "\n}";
	    };
	
	    /**
	     * Ends generation and builds the function.
	     * @typedef CodegenEnder
	     * @memberof util
	     * @type {function}
	     * @param {string} [name] Function name, defaults to generate an anonymous function
	     * @param {Object|Array.<string>} [scope] Function scope
	     * @returns {function} A function to apply the scope manually when `scope` is an array, otherwise the generated function with scope applied
	     */
	    /**/
	    gen.eof = function eof(name, scope) {
	        if (name && typeof name === 'object') {
	            scope = name;
	            name = undefined;
	        }
	        var code = gen.str(name);
	        if (codegen.verbose)
	            console.log("--- codegen ---\n" + code.replace(/^/mg, "> ").replace(/\t/g, "  ")); // eslint-disable-line no-console
	        code = "return " + code;
	        var params, values = [];
	        if (Array.isArray(scope)) {
	            params = scope.slice();
	        } else if (scope) {
	            params = Object.keys(scope);
	            values = params.map(function(key) { return scope[key]; });
	        } else
	            params = [];
	        var fn = Function.apply(null, params.concat(code)); // eslint-disable-line no-new-func
	        return values ? fn.apply(null, values) : fn();
	    };
	
	    return gen;
	}
	
	codegen.supported = false;
	try { codegen.supported = codegen("a","b")("return a-b").eof()(2,1) === 1; } catch (e) {} // eslint-disable-line no-empty
	
	codegen.verbose = false;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(24)
	var ieee754 = __webpack_require__(25)
	var isArray = __webpack_require__(26)
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23).Buffer, (function() { return this; }())))

/***/ },
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	module.exports = tokenize;
	
	var delimRe        = /[\s{}=;:[\],'"()<>]/g,
	    stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
	    stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
	
	/**
	 * Handle object returned from {@link tokenize}.
	 * @typedef {Object} TokenizerHandle
	 * @property {function():number} line Gets the current line number
	 * @property {function():?string} next Gets the next token and advances (`null` on eof)
	 * @property {function():?string} peek Peeks for the next token (`null` on eof)
	 * @property {function(string)} push Pushes a token back to the stack
	 * @property {function(string, boolean=):boolean} skip Skips a token, returns its presence and advances or, if non-optional and not present, throws
	 */
	
	var s_nl = "\n",
	    s_sl = '/',
	    s_as = '*';
	
	function unescape(str) {
	    return str.replace(/\\(.?)/g, function($0, $1) {
	        switch ($1) {
	            case "\\":
	            case "":
	                return $1;
	            case "0":
	                return "\u0000";
	            default:
	                return $1;
	        }
	    });
	}
	
	/**
	 * Tokenizes the given .proto source and returns an object with useful utility functions.
	 * @param {string} source Source contents
	 * @returns {TokenizerHandle} Tokenizer handle
	 */
	function tokenize(source) {
	    /* eslint-disable default-case, callback-return */
	    source = source.toString();
	    
	    var offset = 0,
	        length = source.length,
	        line = 1;
	    
	    var stack = [];
	
	    var stringDelim = null;
	
	    /**
	     * Creates an error for illegal syntax.
	     * @param {string} subject Subject
	     * @returns {Error} Error created
	     * @inner
	     */
	    function illegal(subject) {
	        return Error("illegal " + subject + " (line " + line + ")");
	    }
	
	    /**
	     * Reads a string till its end.
	     * @returns {string} String read
	     * @inner
	     */
	    function readString() {
	        var re = stringDelim === '"' ? stringDoubleRe : stringSingleRe;
	        re.lastIndex = offset - 1;
	        var match = re.exec(source);
	        if (!match)
	            throw illegal("string");
	        offset = re.lastIndex;
	        push(stringDelim);
	        stringDelim = null;
	        return unescape(match[1]);
	    }
	
	    /**
	     * Gets the character at `pos` within the source.
	     * @param {number} pos Position
	     * @returns {string} Character
	     * @inner
	     */
	    function charAt(pos) {
	        return source.charAt(pos);
	    }
	
	    /**
	     * Obtains the next token.
	     * @returns {?string} Next token or `null` on eof
	     * @inner
	     */
	    function next() {
	        if (stack.length > 0)
	            return stack.shift();
	        if (stringDelim)
	            return readString();
	        var repeat,
	            prev,
	            curr;
	        do {
	            if (offset === length)
	                return null;
	            repeat = false;
	            while (/\s/.test(curr = charAt(offset))) {
	                if (curr === s_nl)
	                    ++line;
	                if (++offset === length)
	                    return null;
	            }
	            if (charAt(offset) === s_sl) {
	                if (++offset === length)
	                    throw illegal("comment");
	                if (charAt(offset) === s_sl) { // Line
	                    while (charAt(++offset) !== s_nl)
	                        if (offset === length)
	                            return null;
	                    ++offset;
	                    ++line;
	                    repeat = true;
	                } else if ((curr = charAt(offset)) === s_as) { /* Block */
	                    do {
	                        if (curr === s_nl)
	                            ++line;
	                        if (++offset === length)
	                            return null;
	                        prev = curr;
	                        curr = charAt(offset);
	                    } while (prev !== s_as || curr !== s_sl);
	                    ++offset;
	                    repeat = true;
	                } else
	                    return s_sl;
	            }
	        } while (repeat);
	
	        if (offset === length)
	            return null;
	        var end = offset;
	        delimRe.lastIndex = 0;
	        var delim = delimRe.test(charAt(end++));
	        if (!delim)
	            while (end < length && !delimRe.test(charAt(end)))
	                ++end;
	        var token = source.substring(offset, offset = end);
	        if (token === '"' || token === "'")
	            stringDelim = token;
	        return token;
	    }
	
	    /**
	     * Pushes a token back to the stack.
	     * @param {string} token Token
	     * @returns {undefined}
	     * @inner
	     */
	    function push(token) {
	        stack.push(token);
	    }
	
	    /**
	     * Peeks for the next token.
	     * @returns {?string} Token or `null` on eof
	     * @inner
	     */
	    function peek() {
	        if (!stack.length) {
	            var token = next();
	            if (token === null)
	                return null;
	            push(token);
	        }
	        return stack[0];
	    }
	
	    /**
	     * Skips a token.
	     * @param {string} expected Expected token
	     * @param {boolean} [optional=false] Whether the token is optional
	     * @returns {boolean} `true` when skipped, `false` if not
	     * @throws {Error} When a required token is not present
	     * @inner
	     */
	    function skip(expected, optional) {
	        var actual = peek(),
	            equals = actual === expected;
	        if (equals) {
	            next();
	            return true;
	        }
	        if (!optional)
	            throw illegal("token '" + actual + "', '" + expected + "' expected");
	        return false;
	    }
	
	    return {
	        line: function() { return line; },
	        next: next,
	        peek: peek,
	        push: push,
	        skip: skip
	    };
	    /* eslint-enable default-case, callback-return */
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = parse;
	
	var tokenize = __webpack_require__(27),
	    Root     = __webpack_require__(29),
	    Type     = __webpack_require__(33),
	    Field    = __webpack_require__(35),
	    MapField = __webpack_require__(36),
	    OneOf    = __webpack_require__(34),
	    Enum     = __webpack_require__(32),
	    Service  = __webpack_require__(38),
	    Method   = __webpack_require__(41),
	    types    = __webpack_require__(37);
	
	var nameRe      = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
	    typeRefRe   = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
	    fqTypeRefRe = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;
	
	function lower(token) {
	    return token === null ? null : token.toLowerCase();
	}
	
	function camelCase(name) {
	    return name.substring(0,1)
	         + name.substring(1)
	               .replace(/_([a-z])(?=[a-z]|$)/g, function($0, $1) { return $1.toUpperCase(); });
	}
	
	var s_required = "required",
	    s_repeated = "repeated",
	    s_optional = "optional",
	    s_option   = "option",
	    s_name     = "name",
	    s_type     = "type";
	var s_open     = "{",
	    s_close    = "}",
	    s_bopen    = '(',
	    s_bclose   = ')',
	    s_semi     = ";",
	    s_dq       = '"',
	    s_sq       = "'";
	
	/**
	 * Result object returned from {@link parse}.
	 * @typedef ParserResult
	 * @type {Object}
	 * @property {string|undefined} package Package name, if declared
	 * @property {string[]|undefined} imports Imports, if any
	 * @property {string[]|undefined} weakImports Weak imports, if any
	 * @property {string|undefined} syntax Syntax, if specified (either `"proto2"` or `"proto3"`)
	 * @property {Root} root Populated root instance
	 */
	
	/**
	 * Parses the given .proto source and returns an object with the parsed contents.
	 * @param {string} source Source contents
	 * @param {Root} [root] Root to populate
	 * @returns {ParserResult} Parser result
	 */
	function parse(source, root) {
	    /* eslint-disable default-case, callback-return */
	    if (!root)
	        root = new Root();
	
	    var tn = tokenize(source),
	        next = tn.next,
	        push = tn.push,
	        peek = tn.peek,
	        skip = tn.skip;
	
	    var head = true,
	        pkg,
	        imports,
	        weakImports,
	        syntax,
	        isProto3 = false;
	
	    if (!root)
	        root = new Root();
	
	    var ptr = root;
	
	    function illegal(token, name) {
	        return Error("illegal " + (name || "token") + " '" + token + "' (line " + tn.line() + s_bclose);
	    }
	
	    function readString() {
	        var values = [],
	            token;
	        do {
	            if ((token = next()) !== s_dq && token !== s_sq)
	                throw illegal(token);
	            values.push(next());
	            skip(token);
	            token = peek();
	        } while (token === s_dq || token === s_sq);
	        return values.join('');
	    }
	
	    function readValue(acceptTypeRef) {
	        var token = next();
	        switch (lower(token)) {
	            case s_sq:
	            case s_dq:
	                push(token);
	                return readString();
	            case "true":
	                return true;
	            case "false":
	                return false;
	        }
	        try {
	            return parseNumber(token);
	        } catch (e) {
	            if (acceptTypeRef && typeRefRe.test(token))
	                return token;
	            throw illegal(token, "value");
	        }
	    }
	
	    function readRange() {
	        var start = parseId(next());
	        var end = start;
	        if (skip("to", true))
	            end = parseId(next());
	        skip(s_semi);
	        return [ start, end ];
	    }
	
	    function parseNumber(token) {
	        var sign = 1;
	        if (token.charAt(0) === '-') {
	            sign = -1;
	            token = token.substring(1);
	        }
	        var tokenLower = lower(token);
	        switch (tokenLower) {
	            case "inf": return sign * Infinity;
	            case "nan": return NaN;
	            case "0": return 0;
	        }
	        if (/^[1-9][0-9]*$/.test(token))
	            return sign * parseInt(token, 10);
	        if (/^0[x][0-9a-f]+$/.test(tokenLower))
	            return sign * parseInt(token, 16);
	        if (/^0[0-7]+$/.test(token))
	            return sign * parseInt(token, 8);
	        if (/^(?!e)[0-9]*(?:\.[0-9]*)?(?:[e][+-]?[0-9]+)?$/.test(tokenLower))
	            return sign * parseFloat(token);
	        throw illegal(token, 'number');
	    }
	
	    function parseId(token, acceptNegative) {
	        var tokenLower = lower(token);
	        switch (tokenLower) {
	            case "min": return 1;
	            case "max": return 0x1FFFFFFF;
	            case "0": return 0;
	        }
	        if (token.charAt(0) === '-' && !acceptNegative)
	            throw illegal(token, "id");
	        if (/^-?[1-9][0-9]*$/.test(token))
	            return parseInt(token, 10);
	        if (/^-?0[x][0-9a-f]+$/.test(tokenLower))
	            return parseInt(token, 16);
	        if (/^-?0[0-7]+$/.test(token))
	            return parseInt(token, 8);
	        throw illegal(token, "id");
	    }
	
	    function parsePackage() {
	        if (pkg !== undefined)
	            throw illegal("package");
	        pkg = next();
	        if (!typeRefRe.test(pkg))
	            throw illegal(pkg, s_name);
	        ptr = ptr.define(pkg);
	        skip(s_semi);
	    }
	
	    function parseImport() {
	        var token = peek();
	        var whichImports;
	        switch (token) {
	            case "weak":
	                whichImports = weakImports || (weakImports = []);
	                next();
	                break;
	            case "public":
	                next();
	                // eslint-disable-line no-fallthrough
	            default:
	                whichImports = imports || (imports = []);
	                break;
	        }
	        token = readString();
	        skip(s_semi);
	        whichImports.push(token);
	    }
	
	    function parseSyntax() {
	        skip("=");
	        syntax = lower(readString());
	        var p3;
	        if ([ "proto2", p3 = "proto3" ].indexOf(syntax) < 0)
	            throw illegal(syntax, "syntax");
	        isProto3 = syntax === p3;
	        skip(s_semi);
	    }
	
	    function parseCommon(parent, token) {
	        switch (token) {
	
	            case s_option:
	                parseOption(parent, token);
	                skip(s_semi);
	                return true;
	
	            case "message":
	                parseType(parent, token);
	                return true;
	
	            case "enum":
	                parseEnum(parent, token);
	                return true;
	
	            case "service":
	                parseService(parent, token);
	                return true;
	
	            case "extend":
	                parseExtension(parent, token);
	                return true;
	        }
	        return false;
	    }
	
	    function parseType(parent, token) {
	        var name = next();
	        if (!nameRe.test(name))
	            throw illegal(name, "type name");
	        var type = new Type(name);
	        if (skip(s_open, true)) {
	            while ((token = next()) !== s_close) {
	                var tokenLower = lower(token);
	                if (parseCommon(type, token))
	                    continue;
	                switch (tokenLower) {
	                    case "map":
	                        parseMapField(type, tokenLower);
	                        break;
	                    case s_required:
	                    case s_optional:
	                    case s_repeated:
	                        parseField(type, tokenLower);
	                        break;
	                    case "oneof":
	                        parseOneOf(type, tokenLower);
	                        break;
	                    case "extensions":
	                        (type.extensions || (type.extensions = [])).push(readRange(type, tokenLower));
	                        break;
	                    case "reserved":
	                        (type.reserved || (type.reserved = [])).push(readRange(type, tokenLower));
	                        break;
	                    default:
	                        if (!isProto3 || !typeRefRe.test(token))
	                            throw illegal(token);
	                        push(token);
	                        parseField(type, s_optional);
	                        break;
	                }
	            }
	            skip(s_semi, true);
	        } else
	            skip(s_semi);
	        parent.add(type);
	    }
	
	    function parseField(parent, rule, extend) {
	        var type = next();
	        if (!typeRefRe.test(type))
	            throw illegal(type, s_type);
	        var name = next();
	        if (!nameRe.test(name))
	            throw illegal(name, s_name);
	        name = camelCase(name);
	        skip("=");
	        var id = parseId(next());
	        var field = parseInlineOptions(new Field(name, id, type, rule, extend));
	        if (field.repeated)
	            field.setOption("packed", isProto3, /* ifNotSet */ true);
	        parent.add(field);
	    }
	
	    function parseMapField(parent) {
	        skip("<");
	        var keyType = next();
	        if (types.mapKey[keyType] === undefined)
	            throw illegal(keyType, s_type);
	        skip(",");
	        var valueType = next();
	        if (!typeRefRe.test(valueType))
	            throw illegal(valueType, s_type);
	        skip(">");
	        var name = next();
	        if (!nameRe.test(name))
	            throw illegal(name, s_name);
	        name = camelCase(name);
	        skip("=");
	        var id = parseId(next());
	        var field = parseInlineOptions(new MapField(name, id, keyType, valueType));
	        parent.add(field);
	    }
	
	    function parseOneOf(parent, token) {
	        var name = next();
	        if (!nameRe.test(name))
	            throw illegal(name, s_name);
	        name = camelCase(name);
	        var oneof = new OneOf(name);
	        if (skip(s_open, true)) {
	            while ((token = next()) !== s_close) {
	                if (token === s_option) {
	                    parseOption(oneof, token);
	                    skip(s_semi);
	                } else {
	                    push(token);
	                    parseField(oneof, s_optional);
	                }
	            }
	            skip(s_semi, true);
	        } else
	            skip(s_semi);
	        parent.add(oneof);
	    }
	
	    function parseEnum(parent, token) {
	        var name = next();
	        if (!nameRe.test(name))
	            throw illegal(name, s_name);
	        var values = {};
	        var enm = new Enum(name, values);
	        if (skip(s_open, true)) {
	            while ((token = next()) !== s_close) {
	                if (lower(token) === s_option)
	                    parseOption(enm);
	                else
	                    parseEnumField(enm, token);
	            }
	            skip(s_semi, true);
	        } else
	            skip(s_semi);
	        parent.add(enm);
	    }
	
	    function parseEnumField(parent, token) {
	        if (!nameRe.test(token))
	            throw illegal(token, s_name);
	        var name = token;
	        skip("=");
	        var value = parseId(next(), true);
	        parent.values[name] = value;
	        parseInlineOptions({}); // skips enum value options
	    }
	
	    function parseOption(parent, token) {
	        var custom = skip(s_bopen, true);
	        var name = next();
	        if (!typeRefRe.test(name))
	            throw illegal(name, s_name);
	        if (custom) {
	            skip(s_bclose);
	            name = s_bopen + name + s_bclose;
	            token = peek();
	            if (fqTypeRefRe.test(token)) {
	                name += token;
	                next();
	            }
	        }
	        skip("=");
	        parseOptionValue(parent, name);
	    }
	
	    function parseOptionValue(parent, name) {
	        if (skip(s_open, true)) {
	            while ((token = next()) !== s_close) {
	                if (!nameRe.test(token))
	                    throw illegal(token, s_name);
	                name = name + "." + token;
	                if (skip(":", true))
	                    setOption(parent, name, readValue(true));
	                else
	                    parseOptionValue(parent, name);
	            }
	            skip(s_semi, true);
	        } else
	            setOption(parent, name, readValue(true));
	        // Does not enforce a delimiter to be universal
	    }
	
	    function setOption(parent, name, value) {
	        if (parent.setOption)
	            parent.setOption(name, value);
	        else
	            parent[name] = value;
	    }
	
	    function parseInlineOptions(parent) {
	        if (skip("[", true)) {
	            do {
	                parseOption(parent, s_option);
	            } while (skip(",", true));
	            skip("]");
	        }
	        skip(s_semi);
	        return parent;
	    }
	
	    function parseService(parent, token) {
	        token = next();
	        if (!nameRe.test(token))
	            throw illegal(token, "service name");
	        var name = token;
	        var service = new Service(name);
	        if (skip(s_open, true)) {
	            while ((token = next()) !== s_close) {
	                var tokenLower = lower(token);
	                switch (tokenLower) {
	                    case s_option:
	                        parseOption(service, tokenLower);
	                        skip(s_semi);
	                        break;
	                    case "rpc":
	                        parseMethod(service, tokenLower);
	                        break;
	                    default:
	                        throw illegal(token);
	                }
	            }
	            skip(s_semi, true);
	        } else
	            skip(s_semi);
	        parent.add(service);
	    }
	
	    function parseMethod(parent, token) {
	        var type = token;
	        var name = next();
	        if (!nameRe.test(name))
	            throw illegal(name, s_name);
	        var requestType, requestStream,
	            responseType, responseStream;
	        skip(s_bopen);
	        var st;
	        if (skip(st = "stream", true))
	            requestStream = true;
	        if (!typeRefRe.test(token = next()))
	            throw illegal(token);
	        requestType = token;
	        skip(s_bclose); skip("returns"); skip(s_bopen);
	        if (skip(st, true))
	            responseStream = true;
	        if (!typeRefRe.test(token = next()))
	            throw illegal(token);
	        responseType = token;
	        skip(s_bclose);
	        var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
	        if (skip(s_open, true)) {
	            while ((token = next()) !== s_close) {
	                var tokenLower = lower(token);
	                switch (tokenLower) {
	                    case s_option:
	                        parseOption(method, tokenLower);
	                        skip(s_semi);
	                        break;
	                    default:
	                        throw illegal(token);
	                }
	            }
	            skip(s_semi, true);
	        } else
	            skip(s_semi);
	        parent.add(method);
	    }
	
	    function parseExtension(parent, token) {
	        var reference = next();
	        if (!typeRefRe.test(reference))
	            throw illegal(reference, "reference");
	        if (skip(s_open, true)) {
	            while ((token = next()) !== s_close) {
	                var tokenLower = lower(token);
	                switch (tokenLower) {
	                    case s_required:
	                    case s_repeated:
	                    case s_optional:
	                        parseField(parent, tokenLower, reference);
	                        break;
	                    default:
	                        if (!isProto3 || !typeRefRe.test(token))
	                            throw illegal(token);
	                        push(token);
	                        parseField(parent, s_optional, reference);
	                        break;
	                }
	            }
	            skip(s_semi, true);
	        } else
	            skip(s_semi);
	    }
	
	    var token;
	    while ((token = next()) !== null) {
	        var tokenLower = lower(token);
	        switch (tokenLower) {
	
	            case "package":
	                if (!head)
	                    throw illegal(token);
	                parsePackage();
	                break;
	
	            case "import":
	                if (!head)
	                    throw illegal(token);
	                parseImport();
	                break;
	
	            case "syntax":
	                if (!head)
	                    throw illegal(token);
	                parseSyntax();
	                break;
	
	            case s_option:
	                if (!head)
	                    throw illegal(token);
	                parseOption(ptr, token);
	                skip(s_semi);
	                break;
	
	            default:
	                if (parseCommon(ptr, token)) {
	                    head = false;
	                    continue;
	                }
	                throw illegal(token);
	        }
	    }
	
	    return {
	        'package'     : pkg,
	        'imports'     : imports,
	        'weakImports' : weakImports,
	        'syntax'      : syntax,
	        'root'        : root
	    };
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Root;
	
	var Namespace = __webpack_require__(30);
	/** @alias Root.prototype */
	var RootPrototype = Namespace.extend(Root);
	
	var Field  = __webpack_require__(35),
	    util   = __webpack_require__(20),
	    common = __webpack_require__(50);
	
	/**
	 * Constructs a new root namespace.
	 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
	 * @extends Namespace
	 * @constructor
	 * @param {Object} [options] Top level options
	 */
	function Root(options) {
	    Namespace.call(this, "", options);
	
	    /**
	     * Deferred extension fields.
	     * @type {Field[]}
	     */
	    this.deferred = [];
	
	    /**
	     * Resolved file names of loaded files. 
	     * @type {string[]}
	     */
	    this.files = [];
	}
	
	/**
	 * Loads a JSON definition into a root namespace.
	 * @param {*} json JSON definition
	 * @param {Root} [root] Root namespace, defaults to create a new one if omitted
	 * @returns {Root} Root namespace
	 */
	Root.fromJSON = function fromJSON(json, root) {
	    if (!root)
	        root = new Root();
	    return root.setOptions(json.options).addJSON(json.nested);
	};
	
	/**
	 * Resolves the path of an imported file, relative to the importing origin.
	 * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
	 * @function
	 * @param {string} origin The file name of the importing file
	 * @param {string} target The file name being imported
	 * @returns {string} Resolved path to `target`
	 */
	RootPrototype.resolvePath = util.resolvePath;
	
	/**
	 * Loads one or multiple .proto or preprocessed .json files into this root namespace.
	 * @param {string|string[]} filename Names of one or multiple files to load
	 * @param {function(?Error, Root=)} [callback] Node-style callback function
	 * @returns {Promise<Root>|undefined} A promise if `callback` has been omitted
	 * @throws {TypeError} If arguments are invalid
	 */
	RootPrototype.load = function load(filename, callback) {
	    var self = this;
	    if (!callback)
	        return util.asPromise(load, self, filename);
	
	    // Finishes loading by calling the callback (exactly once)
	    function finish(err, root) {
	        if (!callback)
	            return;
	        var cb = callback;
	        callback = null;
	        cb(err, root);
	    }
	
	    // Processes a single file
	    function process(filename, source) {
	        try {
	            if (util.isString(source) && source.charAt(0) === "{")
	                source = JSON.parse(source);
	            if (!util.isString(source))
	                self.setOptions(source.options).addJSON(source.nested);
	            else {
	                var parsed = __webpack_require__(28)(source, self);
	                if (parsed.imports)
	                    parsed.imports.forEach(function(name) {
	                        fetch(self.resolvePath(filename, name));
	                    });
	                if (parsed.weakImports)
	                    parsed.weakImports.forEach(function(name) {
	                        fetch(self.resolvePath(filename, name), true);
	                    });
	            }
	        } catch (err) {
	            finish(err);
	            return;
	        }
	        if (!queued)
	            finish(null, self);
	    }
	
	    // Fetches a single file
	    function fetch(filename, weak) {
	
	        // Strip path if this file references a bundled definition
	        var idx = filename.indexOf("google/protobuf/");
	        if (idx > -1) {
	            var altname = filename.substring(idx);
	            if (altname in common)
	                filename = altname;
	        }
	
	        // Skip if already loaded
	        if (self.files.indexOf(filename) > -1)
	            return;
	        self.files.push(filename);
	
	        // Shortcut bundled definitions
	        if (filename in common) {
	            ++queued;
	            setTimeout(function() {
	                --queued;
	                process(filename, common[filename]);
	            });
	            return;
	        }
	
	        // Otherwise fetch from disk or network
	        ++queued;
	        util.fetch(filename, function(err, source) {
	            --queued;
	            if (!callback)
	                return; // terminated meanwhile
	            if (err) {
	                if (!weak)
	                    finish(err);
	                return;
	            }
	            process(filename, source);
	        });
	    }
	    var queued = 0;
	
	    // Assembling the root namespace doesn't require working type
	    // references anymore, so we can load everything in parallel
	    if (util.isString(filename))
	        filename = [ filename ];
	    filename.forEach(function(filename) {
	        fetch(self.resolvePath("", filename));
	    });
	
	    if (!queued)
	        finish(null);
	    return undefined;
	};
	
	/**
	 * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
	 * @param {Field} field Declaring extension field witin the declaring type
	 * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
	 * @inner
	 * @ignore
	 */
	function handleExtension(field) {
	    var extendedType = field.parent.lookup(field.extend);
	    if (extendedType) {
	        var sisterField = new Field(field.getFullName(), field.id, field.type, field.rule, undefined, field.options);
	        sisterField.declaringField = field;
	        field.extensionField = sisterField;
	        extendedType.add(sisterField);
	        return true;
	    }
	    return false;
	}
	
	/**
	 * Called when any object is added to this root or its sub-namespaces.
	 * @param {ReflectionObject} object Object added
	 * @returns {undefined}
	 * @private
	 */
	RootPrototype._handleAdd = function handleAdd(object) {
	    // Try to handle any deferred extensions
	    var newDeferred = this.deferred.slice();
	    this.deferred = []; // because the loop calls handleAdd
	    var i = 0;
	    while (i < newDeferred.length)
	        if (handleExtension(newDeferred[i]))
	            newDeferred.splice(i, 1);
	        else
	            ++i;
	    this.deferred = newDeferred;
	    // Handle new declaring extension fields without a sister field yet
	    if (object instanceof Field && object.extend !== undefined && !object.extensionField && !handleExtension(object) && this.deferred.indexOf(object) < 0)
	        this.deferred.push(object);
	    else if (object instanceof Namespace) {
	        var nested = object.getNestedArray();
	        for (i = 0; i < nested.length; ++i) // recurse into the namespace
	            this._handleAdd(nested[i]);
	    }
	};
	
	/**
	 * Called when any object is removed from this root or its sub-namespaces.
	 * @param {ReflectionObject} object Object removed
	 * @returns {undefined}
	 * @private
	 */
	RootPrototype._handleRemove = function handleRemove(object) {
	    if (object instanceof Field) {
	        // If a deferred declaring extension field, cancel the extension
	        if (object.extend !== undefined && !object.extensionField) {
	            var index = this.deferred.indexOf(object);
	            if (index > -1)
	                this.deferred.splice(index, 1);
	        }
	        // If a declaring extension field with a sister field, remove its sister field
	        if (object.extensionField) {
	            object.extensionField.parent.remove(object.extensionField);
	            object.extensionField = null;
	        }
	    } else if (object instanceof Namespace) {
	        var nested = object.getNestedArray();
	        for (var i = 0; i < nested.length; ++i) // recurse into the namespace
	            this._handleRemove(nested[i]);
	    }
	};
	
	/**
	 * @override
	 */
	RootPrototype.toString = function toString() {
	    return this.constructor.name;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Namespace;
	
	var ReflectionObject = __webpack_require__(31);
	/** @alias Namespace.prototype */
	var NamespacePrototype = ReflectionObject.extend(Namespace);
	
	var Enum    = __webpack_require__(32),
	    Type    = __webpack_require__(33),
	    Field   = __webpack_require__(35),
	    Service = __webpack_require__(38),
	    util    = __webpack_require__(20);
	
	var _TypeError = util._TypeError;
	
	var nestedTypes = [ Enum, Type, Service, Field, Namespace ],
	    nestedError = "one of " + nestedTypes.map(function(ctor) { return ctor.name; }).join(', ');
	
	/**
	 * Constructs a new namespace.
	 * @classdesc Reflected namespace and base class of all reflection objects containing nested objects.
	 * @extends ReflectionObject
	 * @constructor
	 * @param {string} name Namespace name
	 * @param {Object} [options] Declared options
	 */
	function Namespace(name, options) {
	    ReflectionObject.call(this, name, options);
	
	    /**
	     * Nested objects by name.
	     * @type {Object.<string,ReflectionObject>|undefined}
	     */
	    this.nested = undefined; // toJSON
	
	    /**
	     * Cached nested objects as an array.
	     * @type {?ReflectionObject[]}
	     * @private
	     */
	    this._nestedArray = null;
	}
	
	function clearCache(namespace) {
	    namespace._nestedArray = null;
	    return namespace;
	}
	
	Object.defineProperties(NamespacePrototype, {
	
	    /**
	     * Nested objects of this namespace as an array for iteration.
	     * @name Namespace#nestedArray
	     * @type {ReflectionObject[]}
	     * @readonly
	     */
	    nestedArray: {
	        get: NamespacePrototype.getNestedArray = function getNestedArray() {
	            return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
	        }
	    }
	
	});
	
	/**
	 * Tests if the specified JSON object describes not another reflection object.
	 * @param {*} json JSON object
	 * @returns {boolean} `true` if the object describes not another reflection object
	 */
	Namespace.testJSON = function testJSON(json) {
	    return Boolean(json
	        && !json.fields                   // Type
	        && !json.values                   // Enum
	        && json.id === undefined          // Field, MapField
	        && !json.oneof                    // OneOf
	        && !json.methods                  // Service
	        && json.requestType === undefined // Method
	    );
	};
	
	/**
	 * Constructs a namespace from JSON.
	 * @param {string} name Namespace name
	 * @param {Object} json JSON object
	 * @returns {Namespace} Created namespace
	 * @throws {TypeError} If arguments are invalid
	 */
	Namespace.fromJSON = function fromJSON(name, json) {
	    return new Namespace(name, json.options).addJSON(json.nested);
	};
	
	/**
	 * @override
	 */
	NamespacePrototype.toJSON = function toJSON() {
	    return {
	        options : this.options,
	        nested  : arrayToJSON(this.getNestedArray())
	    };
	};
	
	/**
	 * Converts an array of reflection objects to JSON.
	 * @memberof Namespace
	 * @param {ReflectionObject[]} array Object array
	 * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
	 */
	function arrayToJSON(array) {
	    if (!(array && array.length))
	        return undefined;
	    var obj = {};
	    for (var i = 0; i < array.length; ++i)
	        obj[array[i].name] = array[i].toJSON();
	    return obj;
	}
	
	Namespace.arrayToJSON = arrayToJSON;
	
	/**
	 * Adds nested elements to this namespace from JSON.
	 * @param {Object.<string,*>} nestedJson Nested JSON
	 * @returns {Namespace} `this`
	 */
	NamespacePrototype.addJSON = function addJSON(nestedJson) {
	    var ns = this;
	    if (nestedJson)
	        Object.keys(nestedJson).forEach(function(nestedName) {
	            var nested = nestedJson[nestedName];
	            for (var j = 0; j < nestedTypes.length; ++j)
	                if (nestedTypes[j].testJSON(nested))
	                    return ns.add(nestedTypes[j].fromJSON(nestedName, nested));
	            throw _TypeError("nested." + nestedName, "JSON for " + nestedError);
	        });
	    return this;
	};
	
	/**
	 * Gets the nested object of the specified name.
	 * @param {string} name Nested object name
	 * @returns {?ReflectionObject} The reflection object or `null` if it doesn't exist
	 */
	NamespacePrototype.get = function get(name) {
	    if (this.nested === undefined) // prevents deopt
	        return null;
	    return this.nested[name] || null;
	};
	
	/**
	 * Adds a nested object to this namespace.
	 * @param {ReflectionObject} object Nested object to add
	 * @returns {Namespace} `this`
	 * @throws {TypeError} If arguments are invalid
	 * @throws {Error} If there is already a nested object with this name
	 */
	NamespacePrototype.add = function add(object) {
	    if (!object || nestedTypes.indexOf(object.constructor) < 0)
	        throw _TypeError("object", nestedError);
	    if (object instanceof Field && object.extend === undefined)
	        throw _TypeError("object", "an extension field when not part of a type");
	    if (!this.nested)
	        this.nested = {};
	    else {
	        var prev = this.get(object.name);
	        if (prev) {
	            if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
	                // replace plain namespace but keep existing nested elements and options
	                var nested = prev.getNestedArray();
	                for (var i = 0; i < nested.length; ++i)
	                    object.add(nested[i]);
	                this.remove(prev);
	                if (!this.nested)
	                    this.nested = {};
	                object.setOptions(prev.options, true);
	            } else
	                throw Error("duplicate name '" + object.name + "' in " + this);
	        }
	    }
	    this.nested[object.name] = object;
	    object.onAdd(this);
	    return clearCache(this);
	};
	
	/**
	 * Removes a nested object from this namespace.
	 * @param {ReflectionObject} object Nested object to remove
	 * @returns {Namespace} `this`
	 * @throws {TypeError} If arguments are invalid
	 * @throws {Error} If `object` is not a member of this namespace
	 */
	NamespacePrototype.remove = function remove(object) {
	    if (!(object instanceof ReflectionObject))
	        throw _TypeError("object", "a ReflectionObject");
	    if (object.parent !== this || !this.nested)
	        throw Error(object + " is not a member of " + this);
	    delete this.nested[object.name];
	    if (!Object.keys(this.nested).length)
	        this.nested = undefined;
	    object.onRemove(this);
	    return clearCache(this);
	};
	
	/**
	 * Defines additial namespaces within this one if not yet existing.
	 * @param {string|string[]} path Path to create
	 * @param {*} [json] Nested types to create from JSON
	 * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
	 */
	NamespacePrototype.define = function define(path, json) {
	    if (util.isString(path))
	        path = path.split('.');
	    else if (!Array.isArray(path)) {
	        json = path;
	        path = undefined;
	    }
	    var ptr = this;
	    if (path)
	        while (path.length > 0) {
	            var part = path.shift();
	            if (ptr.nested && ptr.nested[part]) {
	                ptr = ptr.nested[part];
	                if (!(ptr instanceof Namespace))
	                    throw Error("path conflicts with non-namespace objects");
	            } else
	                ptr.add(ptr = new Namespace(part));
	        }
	    if (json)
	        ptr.addJSON(json);
	    return ptr;
	};
	
	/**
	 * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree.
	 * @returns {Namespace} `this`
	 */
	NamespacePrototype.resolveAll = function resolve() {
	    var nested = this.getNestedArray(), i = 0;
	    while (i < nested.length)
	        if (nested[i] instanceof Namespace)
	            nested[i++].resolveAll();
	        else
	            nested[i++].resolve();
	    return ReflectionObject.prototype.resolve.call(this);
	};
	
	/**
	 * Looks up the reflection object at the specified path, relative to this namespace.
	 * @param {string|string[]} path Path to look up
	 * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
	 * @returns {?ReflectionObject} Looked up object or `null` if none could be found
	 */
	NamespacePrototype.lookup = function lookup(path, parentAlreadyChecked) {
	    if (util.isString(path)) {
	        if (!path.length)
	            return null;
	        path = path.split('.');
	    } else if (!path.length)
	        return null;
	    // Start at root if path is absolute
	    if (path[0] === "")
	        return this.getRoot().lookup(path.slice(1));
	    // Test if the first part matches any nested object, and if so, traverse if path contains more
	    var found = this.get(path[0]);
	    if (found && (path.length === 1 || found instanceof Namespace && (found = found.lookup(path.slice(1), true))))
	        return found;
	    // If there hasn't been a match, try again at the parent
	    if (this.parent === null || parentAlreadyChecked)
	        return null;
	    return this.parent.lookup(path);
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = ReflectionObject;
	
	ReflectionObject.extend = extend;
	
	var Root = __webpack_require__(29),
	    util = __webpack_require__(20);
	
	var _TypeError = util._TypeError;
	
	/**
	 * Constructs a new reflection object.
	 * @classdesc Base class of all reflection objects.
	 * @constructor
	 * @param {string} name Object name
	 * @param {Object} [options] Declared options
	 * @abstract
	 */
	function ReflectionObject(name, options) {
	    if (!util.isString(name))
	        throw _TypeError("name");
	    if (options && !util.isObject(options))
	        throw _TypeError("options", "an object");
	
	    /**
	     * Options.
	     * @type {Object.<string,*>|undefined}
	     */
	    this.options = options; // toJSON
	
	    /**
	     * Unique name within its namespace.
	     * @type {string}
	     */
	    this.name = name;
	
	    /**
	     * Parent namespace.
	     * @type {?Namespace}
	     */
	    this.parent = null;
	
	    /**
	     * Whether already resolved or not.
	     * @type {boolean}
	     */
	    this.resolved = false;
	}
	
	/** @alias ReflectionObject.prototype */
	var ReflectionObjectPrototype = ReflectionObject.prototype;
	
	Object.defineProperties(ReflectionObjectPrototype, {
	
	    /**
	     * Reference to the root namespace.
	     * @name ReflectionObject#root
	     * @type {Root}
	     * @readonly
	     */
	    root: {
	        get: ReflectionObjectPrototype.getRoot = function getRoot() {
	            var ptr = this;
	            while (ptr.parent !== null)
	                ptr = ptr.parent;
	            return ptr;
	        }
	    },
	
	    /**
	     * Full name including leading dot.
	     * @name ReflectionObject#fullName
	     * @type {string}
	     * @readonly
	     */
	    fullName: {
	        get: ReflectionObjectPrototype.getFullName = function getFullName() {
	            var path = [ this.name ],
	                ptr = this.parent;
	            while (ptr) {
	                path.unshift(ptr.name);
	                ptr = ptr.parent;
	            }
	            return path.join('.');
	        }
	    }
	});
	
	/**
	 * Lets the specified constructor extend this class.
	 * @memberof ReflectionObject
	 * @param {Function} constructor Extending constructor
	 * @returns {Object} Prototype
	 * @this ReflectionObject
	 */
	function extend(constructor) {
	    var proto = constructor.prototype = Object.create(this.prototype);
	    proto.constructor = constructor;
	    constructor.extend = extend;
	    return proto;
	}
	
	/**
	 * Converts this reflection object to its JSON representation.
	 * @returns {Object} JSON object
	 * @abstract
	 */
	ReflectionObjectPrototype.toJSON = function toJSON() {
	    throw Error(); // not implemented, shouldn't happen
	};
	
	/**
	 * Called when this object is added to a parent.
	 * @param {ReflectionObject} parent Parent added to
	 * @returns {undefined}
	 */
	ReflectionObjectPrototype.onAdd = function onAdd(parent) {
	    if (this.parent && this.parent !== parent)
	        this.parent.remove(this);
	    this.parent = parent;
	    this.resolved = false;
	    var root = parent.getRoot();
	    if (root instanceof Root)
	        root._handleAdd(this);
	};
	
	/**
	 * Called when this object is removed from a parent.
	 * @param {ReflectionObject} parent Parent removed from
	 * @returns {undefined}
	 */
	ReflectionObjectPrototype.onRemove = function onRemove(parent) {
	    var root = parent.getRoot();
	    if (root instanceof Root)
	        root._handleRemove(this);
	    this.parent = null;
	    this.resolved = false;
	};
	
	/**
	 * Resolves this objects type references.
	 * @returns {ReflectionObject} `this`
	 */
	ReflectionObjectPrototype.resolve = function resolve() {
	    if (this.resolved)
	        return this;
	    var root = this.getRoot();
	    if (root instanceof Root)
	        this.resolved = true; // only if part of a root
	    return this;
	};
	
	/**
	 * Gets an option value.
	 * @param {string} name Option name
	 * @returns {*} Option value or `undefined` if not set
	 */
	ReflectionObjectPrototype.getOption = function getOption(name) {
	    if (this.options)
	        return this.options[name];
	    return undefined;
	};
	
	/**
	 * Sets an option.
	 * @param {string} name Option name
	 * @param {*} value Option value
	 * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
	 * @returns {ReflectionObject} `this`
	 */
	ReflectionObjectPrototype.setOption = function setOption(name, value, ifNotSet) {
	    if (!ifNotSet || !this.options || this.options[name] === undefined)
	        (this.options || (this.options = {}))[name] = value;
	    return this;
	};
	
	/**
	 * Sets multiple options.
	 * @param {Object.<string,*>} options Options to set
	 * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
	 * @returns {ReflectionObject} `this`
	 */
	ReflectionObjectPrototype.setOptions = function setOptions(options, ifNotSet) {
	    if (options)
	        Object.keys(options).forEach(function(name) {
	            this.setOption(name, options[name], ifNotSet);
	        }, this);
	    return this;
	};
	
	/**
	 * Converts this instance to its string representation.
	 * @returns {string} Constructor name, space, full name
	 */
	ReflectionObjectPrototype.toString = function toString() {
	    return this.constructor.name + " " + this.getFullName();
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Enum;
	
	var ReflectionObject = __webpack_require__(31);
	/** @alias Enum.prototype */
	var EnumPrototype = ReflectionObject.extend(Enum);
	
	var util = __webpack_require__(20);
	
	var _TypeError = util._TypeError;
	
	/**
	 * Constructs a new enum.
	 * @classdesc Reflected enum.
	 * @extends ReflectionObject
	 * @constructor
	 * @param {string} name Unique name within its namespace
	 * @param {Object.<string,number>} [values] Enum values as an object, by name
	 * @param {Object} [options] Declared options
	 */
	function Enum(name, values, options) {
	    ReflectionObject.call(this, name, options);
	
	    /**
	     * Enum values by name.
	     * @type {Object.<string,number>}
	     */
	    this.values = values || {}; // toJSON, marker
	
	    /**
	     * Cached values by id.
	     * @type {?Object.<number,string>}
	     * @private
	     */
	    this._valuesById = null;
	}
	
	Object.defineProperties(EnumPrototype, {
	
	    /**
	     * Enum values by id.
	     * @name Enum#valuesById
	     * @type {Object.<number,string>}
	     * @readonly
	     */
	    valuesById: {
	        get: EnumPrototype.getValuesById = function getValuesById() {
	            if (!this._valuesById) {
	                this._valuesById = {};
	                Object.keys(this.values).forEach(function(name) {
	                    var id = this.values[name];
	                    if (this._valuesById[id])
	                        throw Error("duplicate id " + id + " in " + this);
	                    this._valuesById[id] = name;
	                }, this);
	            }
	            return this._valuesById;
	        }
	    }
	});
	
	function clearCache(enm) {
	    enm._valuesById = null;
	    return enm;
	}
	
	/**
	 * Tests if the specified JSON object describes an enum.
	 * @param {*} json JSON object to test
	 * @returns {boolean} `true` if the object describes an enum
	 */
	Enum.testJSON = function testJSON(json) {
	    return Boolean(json && json.values);
	};
	
	/**
	 * Creates an enum from JSON.
	 * @param {string} name Enum name
	 * @param {Object.<string,*>} json JSON object
	 * @returns {Enum} Created enum
	 * @throws {TypeError} If arguments are invalid
	 */
	Enum.fromJSON = function fromJSON(name, json) {
	    return new Enum(name, json.values, json.options);
	};
	
	/**
	 * @override
	 */
	EnumPrototype.toJSON = function toJSON() {
	    return {
	        options : this.options,
	        values  : this.values
	    };
	};
	
	/**
	 * Adds a value to this enum.
	 * @param {string} name Value name
	 * @param {number} id Value id
	 * @returns {Enum} `this`
	 * @throws {TypeError} If arguments are invalid
	 * @throws {Error} If there is already a value with this name or id
	 */
	EnumPrototype.add = function(name, id) {
	    if (!util.isString(name))
	        throw _TypeError("name");
	    if (!util.isInteger(id) || id < 0)
	        throw _TypeError("id", "a non-negative integer");
	    if (this.values[name] !== undefined)
	        throw Error('duplicate name "' + name + '" in ' + this);
	    if (this.getValuesById()[id] !== undefined)
	        throw Error("duplicate id " + id + " in " + this);
	    this.values[name] = id;
	    return clearCache(this);
	};
	
	/**
	 * Removes a value from this enum
	 * @param {string} name Value name
	 * @returns {Enum} `this`
	 * @throws {TypeError} If arguments are invalid
	 * @throws {Error} If `name` is not a name of this enum
	 */
	EnumPrototype.remove = function(name) {
	    if (!util.isString(name))
	        throw _TypeError("name");
	    if (this.values[name] === undefined)
	        throw Error('"' + name + '" is not a name of ' + this);
	    delete this.values[name];
	    return clearCache(this);
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Type; 
	
	var Namespace = __webpack_require__(30);
	/** @alias Namespace.prototype */
	var NamespacePrototype = Namespace.prototype;
	/** @alias Type.prototype */
	var TypePrototype = Namespace.extend(Type);
	
	var Enum      = __webpack_require__(32),
	    OneOf     = __webpack_require__(34),
	    Field     = __webpack_require__(35),
	    Service   = __webpack_require__(38),
	    Prototype = __webpack_require__(42),
	    inherits  = __webpack_require__(43),
	    util      = __webpack_require__(20),
	    Reader    = __webpack_require__(44),
	    Encoder   = __webpack_require__(46),
	    Decoder   = __webpack_require__(48),
	    Verifier  = __webpack_require__(49);
	var codegen   = util.codegen;
	
	/**
	 * Constructs a new message type.
	 * @classdesc Reflected message type.
	 * @extends Namespace
	 * @constructor
	 * @param {string} name Message name
	 * @param {Object} [options] Declared options
	 */
	function Type(name, options) {
	    Namespace.call(this, name, options);
	
	    /**
	     * Message fields.
	     * @type {Object.<string,Field>}
	     */
	    this.fields = {};  // toJSON, marker
	
	    /**
	     * Oneofs declared within this namespace, if any.
	     * @type {Object.<string,OneOf>}
	     */
	    this.oneofs = undefined; // toJSON
	
	    /**
	     * Extension ranges, if any.
	     * @type {number[][]}
	     */
	    this.extensions = undefined; // toJSON
	
	    /**
	     * Reserved ranges, if any.
	     * @type {number[][]}
	     */
	    this.reserved = undefined; // toJSON
	
	    /**
	     * Cached fields by id.
	     * @type {?Object.<number,Field>}
	     * @private
	     */
	    this._fieldsById = null;
	
	    /**
	     * Cached fields as an array.
	     * @type {?Field[]}
	     * @private
	     */
	    this._fieldsArray = null;
	
	    /**
	     * Cached oneofs as an array.
	     * @type {?OneOf[]}
	     * @private
	     */
	    this._oneofsArray = null;
	
	    /**
	     * Cached constructor.
	     * @type {?Function}
	     * @private
	     */
	    this._ctor = null;
	}
	
	Object.defineProperties(TypePrototype, {
	
	    /**
	     * Message fields by id.
	     * @name Type#fieldsById
	     * @type {Object.<number,Field>}
	     * @readonly
	     */
	    fieldsById: {
	        get: TypePrototype.getFieldsById = function getFieldsById() {
	            if (this._fieldsById)
	                return this._fieldsById;
	            this._fieldsById = {};
	            var names = Object.keys(this.fields);
	            for (var i = 0; i < names.length; ++i) {
	                var field = this.fields[names[i]],
	                    id = field.id;
	                if (this._fieldsById[id])
	                    throw Error("duplicate id " + id + " in " + this);
	                this._fieldsById[id] = field;
	            }
	            return this._fieldsById;
	        }
	    },
	
	    /**
	     * Fields of this message as an array for iteration.
	     * @name Type#fieldsArray
	     * @type {Field[]}
	     * @readonly
	     */
	    fieldsArray: {
	        get: TypePrototype.getFieldsArray = function getFieldsArray() {
	            return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
	        }
	    },
	
	    /**
	     * Oneofs of this message as an array for iteration.
	     * @name Type#oneofsArray
	     * @type {OneOf[]}
	     * @readonly
	     */
	    oneofsArray: {
	        get: TypePrototype.getOneofsArray = function getOneofsArray() {
	            return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
	        }
	    },
	
	    /**
	     * The registered constructor, if any registered, otherwise a generic constructor.
	     * @name Type#ctor
	     * @type {Prototype}
	     */
	    ctor: {
	        get: TypePrototype.getCtor = function getCtor() {
	            if (this._ctor)
	                return this._ctor;
	            var ctor;
	            if (codegen.supported)
	                ctor = codegen("p")("P.call(this,p)").eof(this.getFullName() + "$ctor", {
	                    P: Prototype
	                });
	            else
	                ctor = function GenericMessage(properties) {
	                    Prototype.call(this, properties);
	                };
	            ctor.prototype = inherits(ctor, this);
	            this._ctor = ctor;
	            return ctor;
	        },
	        set: TypePrototype.setCtor = function setCtor(ctor) {
	            if (ctor && !(ctor.prototype instanceof Prototype))
	                throw util._TypeError("ctor", "a constructor inheriting from Prototype");
	            this._ctor = ctor;
	        }
	    }
	});
	
	function clearCache(type) {
	    type._fieldsById = type._fieldsArray = type._oneofsArray = type._ctor = null;
	    delete type.encode;
	    delete type.decode;
	    return type;
	}
	
	/**
	 * Tests if the specified JSON object describes a message type.
	 * @param {*} json JSON object to test
	 * @returns {boolean} `true` if the object describes a message type
	 */
	Type.testJSON = function testJSON(json) {
	    return Boolean(json && json.fields);
	};
	
	var nestedTypes = [ Enum, Type, Field, Service ];
	
	/**
	 * Creates a type from JSON.
	 * @param {string} name Message name
	 * @param {Object} json JSON object
	 * @returns {Type} Created message type
	 */
	Type.fromJSON = function fromJSON(name, json) {
	    var type = new Type(name, json.options);
	    type.extensions = json.extensions;
	    type.reserved = json.reserved;
	    if (json.fields)
	        Object.keys(json.fields).forEach(function(fieldName) {
	            type.add(Field.fromJSON(fieldName, json.fields[fieldName]));
	        });
	    if (json.oneofs)
	        Object.keys(json.oneofs).forEach(function(oneOfName) {
	            type.add(OneOf.fromJSON(oneOfName, json.oneofs[oneOfName]));
	        });
	    if (json.nested)
	        Object.keys(json.nested).forEach(function(nestedName) {
	            var nested = json.nested[nestedName];
	            for (var i = 0; i < nestedTypes.length; ++i) {
	                if (nestedTypes[i].testJSON(nested)) {
	                    type.add(nestedTypes[i].fromJSON(nestedName, nested));
	                    return;
	                }
	            }
	            throw Error("invalid nested object in " + type + ": " + nestedName);
	        });
	    if (json.extensions && json.extensions.length)
	        type.extensions = json.extensions;
	    if (json.reserved && json.reserved.length)
	        type.reserved = json.reserved;
	    return type;
	};
	
	/**
	 * @override
	 */
	TypePrototype.toJSON = function toJSON() {
	    var inherited = NamespacePrototype.toJSON.call(this);
	    return {
	        options    : inherited && inherited.options || undefined,
	        oneofs     : Namespace.arrayToJSON(this.getOneofsArray()),
	        fields     : Namespace.arrayToJSON(this.getFieldsArray().filter(function(obj) { return !obj.declaringField; })) || {},
	        extensions : this.extensions && this.extensions.length ? this.extensions : undefined,
	        reserved   : this.reserved && this.reserved.length ? this.reserved : undefined,
	        nested     : inherited && inherited.nested || undefined
	    };
	};
	
	/**
	 * @override
	 */
	TypePrototype.resolveAll = function resolve() {
	    var fields = this.getFieldsArray(), i = 0;
	    while (i < fields.length)
	        fields[i++].resolve();
	    var oneofs = this.getOneofsArray(); i = 0;
	    while (i < oneofs.length)
	        oneofs[i++].resolve();
	    return NamespacePrototype.resolve.call(this);
	};
	
	/**
	 * @override
	 */
	TypePrototype.get = function get(name) {
	    return NamespacePrototype.get.call(this, name) || this.fields && this.fields[name] || this.oneofs && this.oneofs[name] || null;
	};
	
	/**
	 * Adds a nested object to this type.
	 * @param {ReflectionObject} object Nested object to add
	 * @returns {Type} `this`
	 * @throws {TypeError} If arguments are invalid
	 * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
	 */
	TypePrototype.add = function add(object) {
	    if (this.get(object.name))
	        throw Error("duplicate name '" + object.name + '" in ' + this);
	    if (object instanceof Field && object.extend === undefined) {
	        // NOTE: Extension fields aren't actual fields on the declaring type, but nested objects.
	        // The root object takes care of adding distinct sister-fields to the respective extended
	        // type instead.
	        if (this.getFieldsById()[object.id])
	            throw Error("duplicate id " + object.id + " in " + this);
	        if (object.parent)
	            object.parent.remove(object);
	        this.fields[object.name] = object;
	        object.message = this;
	        object.onAdd(this);
	        return clearCache(this);
	    }
	    if (object instanceof OneOf) {
	        if (!this.oneofs)
	            this.oneofs = {};
	        this.oneofs[object.name] = object;
	        object.onAdd(this);
	        return clearCache(this);
	    }
	    return NamespacePrototype.add.call(this, object);
	};
	
	/**
	 * Removes a nested object from this type.
	 * @param {ReflectionObject} object Nested object to remove
	 * @returns {Type} `this`
	 * @throws {TypeError} If arguments are invalid
	 * @throws {Error} If `object` is not a member of this type
	 */
	TypePrototype.remove = function remove(object) {
	    if (object instanceof Field && object.extend === undefined) {
	        // See Type#add for the reason why extension fields are excluded here.
	        if (this.fields[object.name] !== object)
	            throw Error(object + " is not a member of " + this);
	        delete this.fields[object.name];
	        object.message = null;
	        return clearCache(this);
	    }
	    return NamespacePrototype.remove.call(this, object);
	};
	
	/**
	 * Creates a new message of this type using the specified properties.
	 * @param {Object} [properties] Properties to set
	 * @param {?Function} [ctor] Constructor to use.
	 * Defaults to use the internal constuctor.
	 * @returns {Prototype} Message instance
	 */
	TypePrototype.create = function create(properties, ctor) {
	    if (typeof properties === 'function') {
	        ctor = properties;
	        properties = undefined;
	    } else if (properties /* already */ instanceof Prototype)
	        return properties;
	    if (ctor) {
	        if (!(ctor.prototype instanceof Prototype))
	            throw util._TypeError("ctor", "a constructor inheriting from Prototype");
	    } else
	        ctor = this.getCtor();
	    return new ctor(properties);
	};
	
	/**
	 * Encodes a message of this type.
	 * @param {Prototype|Object} message Message instance or plain object
	 * @param {Writer} [writer] Writer to encode to
	 * @returns {Writer} writer
	 */
	TypePrototype.encode = function encode(message, writer) {
	    var encoder = new Encoder(this);
	    this.encode = codegen.supported
	        ? encoder.generate()
	        : encoder.encode;
	    return this.encode(message, writer);
	};
	
	/**
	 * Encodes a message of this type preceeded by its byte length as a varint.
	 * @param {Prototype|Object} message Message instance or plain object
	 * @param {Writer} [writer] Writer to encode to
	 * @returns {Writer} writer
	 */
	TypePrototype.encodeDelimited = function encodeDelimited(message, writer) {
	    return this.encode(message, writer).ldelim();
	};
	
	/**
	 * Decodes a message of this type.
	 * @param {Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	 * @param {number} [length] Length of the message, if known beforehand
	 * @returns {Prototype} Decoded message
	 */
	TypePrototype.decode = function decode(readerOrBuffer, length) {
	    var decoder = new Decoder(this);
	    this.decode = codegen.supported
	        ? decoder.generate()
	        : decoder.decode;
	    return this.decode(readerOrBuffer, length);
	};
	
	/**
	 * Decodes a message of this type preceeded by its byte length as a varint.
	 * @param {Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	 * @returns {Prototype} Decoded message
	 */
	TypePrototype.decodeDelimited = function decodeDelimited(readerOrBuffer) {
	    readerOrBuffer = readerOrBuffer instanceof Reader ? readerOrBuffer : Reader(readerOrBuffer);
	    return this.decode(readerOrBuffer, readerOrBuffer.uint32());
	};
	
	/**
	 * Verifies that enum values are valid and that any required fields are present.
	 * @param {Prototype|Object} message Message to verify
	 * @returns {?string} `null` if valid, otherwise the reason why it is not
	 */
	TypePrototype.verify = function verify(message) {
	    var verifier = new Verifier(this);
	    this.verify = codegen.supported
	        ? verifier.generate()
	        : verifier.verify;
	    return this.verify(message);
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = OneOf;
	
	var ReflectionObject = __webpack_require__(31);
	/** @alias OneOf.prototype */
	var OneOfPrototype = ReflectionObject.extend(OneOf);
	
	var Field = __webpack_require__(35),
	    util  = __webpack_require__(20);
	
	var _TypeError = util._TypeError;
	
	/**
	 * Constructs a new oneof.
	 * @classdesc Reflected oneof.
	 * @extends ReflectionObject
	 * @constructor
	 * @param {string} name Oneof name
	 * @param {string[]} [fieldNames] Field names
	 * @param {Object} [options] Declared options
	 */
	function OneOf(name, fieldNames, options) {
	    if (!Array.isArray(fieldNames)) {
	        options = fieldNames;
	        fieldNames = undefined;
	    }
	    ReflectionObject.call(this, name, options);
	    if (fieldNames && !Array.isArray(fieldNames))
	        throw _TypeError("fieldNames", "an Array");
	
	    /**
	     * Field names that belong to this oneof.
	     * @type {Array.<string>}
	     */
	    this.oneof = fieldNames || []; // toJSON, marker
	
	    /**
	     * Fields that belong to this oneof and are possibly not yet added to its parent.
	     * @type {Array.<Field>}
	     * @private
	     */
	    this._fields = [];
	}
	
	/**
	 * Tests if the specified JSON object describes a oneof.
	 * @param {*} json JSON object
	 * @returns {boolean} `true` if the object describes a oneof
	 */
	OneOf.testJSON = function testJSON(json) {
	    return Boolean(json.oneof);
	};
	
	/**
	 * Constructs a oneof from JSON.
	 * @param {string} name Oneof name
	 * @param {Object} json JSON object
	 * @returns {MapField} Created oneof
	 * @throws {TypeError} If arguments are invalid
	 */
	OneOf.fromJSON = function fromJSON(name, json) {
	    return new OneOf(name, json.oneof, json.options);
	};
	
	/**
	 * @override
	 */
	OneOfPrototype.toJSON = function toJSON() {
	    return {
	        oneof   : this.oneof,
	        options : this.options
	    };
	};
	
	/**
	 * Adds the fields of the specified oneof to the parent if not already done so.
	 * @param {OneOf} oneof The oneof
	 * @returns {undefined}
	 * @inner
	 * @ignore
	 */
	function addFieldsToParent(oneof) {
	    if (oneof.parent)
	        oneof._fields.forEach(function(field) {
	            if (!field.parent)
	                oneof.parent.add(field);
	        });
	}
	
	/**
	 * Adds a field to this oneof.
	 * @param {Field} field Field to add
	 * @returns {OneOf} `this`
	 */
	OneOfPrototype.add = function add(field) {
	    if (!(field instanceof Field))
	        throw _TypeError("field", "a Field");
	    if (field.parent)
	        field.parent.remove(field);
	    this.oneof.push(field.name);
	    this._fields.push(field);
	    field.partOf = this; // field.parent remains null
	    addFieldsToParent(this);
	    return this;
	};
	
	/**
	 * Removes a field from this oneof.
	 * @param {Field} field Field to remove
	 * @returns {OneOf} `this`
	 */
	OneOfPrototype.remove = function remove(field) {
	    if (!(field instanceof Field))
	        throw _TypeError("field", "a Field");
	    var index = this._fields.indexOf(field);
	    if (index < 0)
	        throw Error(field + " is not a member of " + this);
	    this._fields.splice(index, 1);
	    index = this.oneof.indexOf(field.name);
	    if (index > -1)
	        this.oneof.splice(index, 1);
	    if (field.parent)
	        field.parent.remove(field);
	    field.partOf = null;
	    return this;
	};
	
	/**
	 * @override
	 */
	OneOfPrototype.onAdd = function onAdd(parent) {
	    ReflectionObject.prototype.onAdd.call(this, parent);
	    addFieldsToParent(this);
	};
	
	/**
	 * @override
	 */
	OneOfPrototype.onRemove = function onRemove(parent) {
	    this._fields.forEach(function(field) {
	        if (field.parent)
	            field.parent.remove(field);
	    });
	    ReflectionObject.prototype.onRemove.call(this, parent);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Field;
	
	var ReflectionObject = __webpack_require__(31);
	/** @alias Field.prototype */
	var FieldPrototype = ReflectionObject.extend(Field);
	
	var Type      = __webpack_require__(33),
	    Enum      = __webpack_require__(32),
	    MapField  = __webpack_require__(36),
	    types     = __webpack_require__(37),
	    util      = __webpack_require__(20);
	
	var _TypeError = util._TypeError;
	
	/**
	 * Constructs a new message field. Note that {@link MapField|map fields} have their own class.
	 * @classdesc Reflected message field.
	 * @extends ReflectionObject
	 * @constructor
	 * @param {string} name Unique name within its namespace
	 * @param {number} id Unique id within its namespace
	 * @param {string} type Value type
	 * @param {string} [rule=optional] Field rule
	 * @param {string} [extend] Extended type if different from parent
	 * @param {Object} [options] Declared options
	 */
	function Field(name, id, type, rule, extend, options) {
	    if (util.isObject(rule)) {
	        options = rule;
	        rule = extend = undefined;
	    } else if (util.isObject(extend)) {
	        options = extend;
	        extend = undefined;
	    }
	    ReflectionObject.call(this, name, options);
	    if (!util.isInteger(id) || id < 0)
	        throw _TypeError("id", "a non-negative integer");
	    if (!util.isString(type))
	        throw _TypeError("type");
	    if (extend !== undefined && !util.isString(extend))
	        throw _TypeError("extend");
	    if (rule !== undefined && !/^required|optional|repeated$/.test(rule = rule.toString().toLowerCase()))
	        throw _TypeError("rule", "a valid rule string");
	
	    /**
	     * Field rule, if any.
	     * @type {string|undefined}
	     */
	    this.rule = rule && rule !== 'optional' ? rule : undefined; // toJSON
	
	    /**
	     * Field type.
	     * @type {string}
	     */
	    this.type = type; // toJSON
	
	    /**
	     * Unique field id.
	     * @type {number}
	     */
	    this.id = id; // toJSON, marker
	
	    /**
	     * Extended type if different from parent.
	     * @type {string|undefined}
	     */
	    this.extend = extend || undefined; // toJSON
	
	    /**
	     * Whether this field is required.
	     * @type {boolean}
	     */
	    this.required = rule === "required";
	
	    /**
	     * Whether this field is optional.
	     * @type {boolean}
	     */
	    this.optional = !this.required;
	
	    /**
	     * Whether this field is repeated.
	     * @type {boolean}
	     */
	    this.repeated = rule === "repeated";
	
	    /**
	     * Whether this field is a map or not.
	     * @type {boolean}
	     */
	    this.map = false;
	
	    /**
	     * Message this field belongs to.
	     * @type {?Type}
	     */
	    this.message = null;
	
	    /**
	     * OneOf this field belongs to, if any,
	     * @type {?OneOf}
	     */
	    this.partOf = null;
	
	    /**
	     * The field's default value. Only relevant when working with proto2.
	     * @type {*}
	     */
	    this.defaultValue = null;
	
	    /**
	     * Whether this field's value should be treated as a long.
	     * @type {boolean}
	     */
	    this.long = util.Long ? types.long[type] !== undefined : false;
	
	    /**
	     * Resolved type if not a basic type.
	     * @type {?(Type|Enum)}
	     */
	    this.resolvedType = null;
	
	    /**
	     * Sister-field within the extended type if a declaring extension field.
	     * @type {?Field}
	     */
	    this.extensionField = null;
	
	    /**
	     * Sister-field within the declaring namespace if an extended field.
	     * @type {?Field}
	     */
	    this.declaringField = null;
	
	    /**
	     * Internally remembers whether this field is packed.
	     * @type {?boolean}
	     * @private
	     */
	    this._packed = null;
	}
	
	Object.defineProperties(FieldPrototype, {
	
	    /**
	     * Determines whether this field is packed. Only relevant when repeated and working with proto2.
	     * @name Field#packed
	     * @type {boolean}
	     * @readonly
	     */
	    packed: {
	        get: FieldPrototype.isPacked = function() {
	            if (this._packed === null)
	                this._packed = this.getOption("packed") !== false;
	            return this._packed;
	        }
	    }
	
	});
	
	/**
	 * @override
	 */
	FieldPrototype.setOption = function setOption(name, value, ifNotSet) {
	    if (name === "packed")
	        this._packed = null;
	    return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
	};
	
	/**
	 * Tests if the specified JSON object describes a field.
	 * @param {*} json Any JSON object to test
	 * @returns {boolean} `true` if the object describes a field
	 */
	Field.testJSON = function testJSON(json) {
	    return Boolean(json && json.id !== undefined);
	};
	
	/**
	 * Constructs a field from JSON.
	 * @param {string} name Field name
	 * @param {Object} json JSON object
	 * @returns {Field} Created field
	 * @throws {TypeError} If arguments are invalid
	 */
	Field.fromJSON = function fromJSON(name, json) {
	    if (json.keyType !== undefined)
	        return MapField.fromJSON(name, json);
	    return new Field(name, json.id, json.type, json.role, json.extend, json.options);
	};
	
	/**
	 * @override
	 */
	FieldPrototype.toJSON = function toJSON() {
	    return {
	        rule    : this.rule !== "optional" && this.rule || undefined,
	        type    : this.type,
	        id      : this.id,
	        extend  : this.extend,
	        options : this.options
	    };
	};
	
	/**
	 * Resolves this field's type references.
	 * @returns {Field} `this`
	 * @throws {Error} If any reference cannot be resolved
	 */
	FieldPrototype.resolve = function resolve() {
	    if (this.resolved)
	        return this;
	
	    var typeDefault = types.defaults[this.type];
	
	    // if not a basic type, resolve it
	    if (typeDefault === undefined) {
	        var resolved = this.parent.lookup(this.type);
	        if (resolved instanceof Type) {
	            this.resolvedType = resolved;
	            typeDefault = null;
	        } else if (resolved instanceof Enum) {
	            this.resolvedType = resolved;
	            typeDefault = 0;
	        } else
	            throw Error("unresolvable field type: " + this.type);
	    }
	
	    // when everything is resolved determine the default value
	    var optionDefault;
	    if (this.map)
	        this.defaultValue = {};
	    else if (this.repeated)
	        this.defaultValue = [];
	    else if (this.options && (optionDefault = this.options['default']) !== undefined) // eslint-disable-line dot-notation
	        this.defaultValue = optionDefault;
	    else
	        this.defaultValue = typeDefault;
	
	    if (this.long)
	        this.defaultValue = util.Long.fromValue(this.defaultValue);
	    
	    return ReflectionObject.prototype.resolve.call(this);
	};
	
	/**
	 * Converts a field value to JSON using the specified options. Note that this method does not account for repeated fields and must be called once for each repeated element instead.
	 * @param {*} value Field value
	 * @param {Object.<string,*>} [options] Conversion options
	 * @returns {*} Converted value
	 * @see {@link Prototype#asJSON}
	 */
	FieldPrototype.jsonConvert = function(value, options) {
	    if (options) {
	        if (this.resolvedType instanceof Enum && options['enum'] === String) // eslint-disable-line dot-notation
	            return this.resolvedType.getValuesById()[value];
	        else if (this.long && options.long)
	            return options.long === Number
	                ? typeof value === 'number'
	                ? value
	                : util.Long.fromValue(value).toNumber()
	                : util.Long.fromValue(value, this.type.charAt(0) === 'u').toString();
	    }
	    return value;
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = MapField;
	
	var Field = __webpack_require__(35);
	/** @alias Field.prototype */
	var FieldPrototype = Field.prototype;
	/** @alias MapField.prototype */
	var MapFieldPrototype = Field.extend(MapField);
	
	var Enum    = __webpack_require__(32),
	    types   = __webpack_require__(37),
	    util    = __webpack_require__(20);
	
	/**
	 * Constructs a new map field.
	 * @classdesc Reflected map field.
	 * @extends Field
	 * @constructor
	 * @param {string} name Unique name within its namespace
	 * @param {number} id Unique id within its namespace
	 * @param {string} keyType Key type
	 * @param {string} type Value type
	 * @param {Object} [options] Declared options
	 */
	function MapField(name, id, keyType, type, options) {
	    Field.call(this, name, id, type, options);
	    if (!util.isString(keyType))
	        throw util._TypeError("keyType");
	    
	    /**
	     * Key type.
	     * @type {string}
	     */
	    this.keyType = keyType; // toJSON, marker
	
	    /**
	     * Resolved key type if not a basic type.
	     * @type {?ReflectionObject}
	     */
	    this.resolvedKeyType = null;
	
	    // Overrides Field#map
	    this.map = true;
	}
	
	/**
	 * Tests if the specified JSON object describes a map field.
	 * @param {Object} json JSON object to test
	 * @returns {boolean} `true` if the object describes a field
	 */
	MapField.testJSON = function testJSON(json) {
	    return Field.testJSON(json) && json.keyType !== undefined;
	};
	
	/**
	 * Constructs a map field from JSON.
	 * @param {string} name Field name
	 * @param {Object} json JSON object
	 * @returns {MapField} Created map field
	 * @throws {TypeError} If arguments are invalid
	 */
	MapField.fromJSON = function fromJSON(name, json) {
	    return new MapField(name, json.id, json.keyType, json.type, json.options);
	};
	
	/**
	 * @override
	 */
	MapFieldPrototype.toJSON = function toJSON() {
	    return {
	        keyType : this.keyType,
	        type    : this.type,
	        id      : this.id,
	        extend  : this.extend,
	        options : this.options
	    };
	};
	
	/**
	 * @override
	 */
	MapFieldPrototype.resolve = function resolve() {
	    if (this.resolved)
	        return this;
	    
	    // Besides a value type, map fields have a key type to resolve
	    var keyWireType = types.mapKey[this.keyType];
	    if (keyWireType === undefined) {
	        var resolved = this.parent.lookup(this.keyType);
	        if (!(resolved instanceof Enum))
	            throw Error("unresolvable map key type: " + this.keyType);
	        this.resolvedKeyType = resolved;
	    }
	
	    return FieldPrototype.resolve.call(this);
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Common type constants.
	 * @namespace
	 */
	var types = module.exports = {};
	
	var s = [
	    "double",   // 0
	    "float",    // 1
	    "int32",    // 2
	    "uint32",   // 3
	    "sint32",   // 4
	    "fixed32",  // 5
	    "sfixed32", // 6
	    "int64",    // 7
	    "uint64",   // 8
	    "sint64",   // 9
	    "fixed64",  // 10
	    "sfixed64", // 11
	    "bool",     // 12
	    "string",   // 13
	    "bytes"     // 14
	];
	
	function bake(values, offset) {
	    var i = 0, o = {};
	    offset |= 0;
	    while (i < values.length) o[s[i + offset]] = values[i++];
	    return o;
	}
	
	/**
	 * Basic type wire types.
	 * @type {Object.<string,number>}
	 */
	types.basic = bake([
	    /* double   */ 1,
	    /* float    */ 5,
	    /* int32    */ 0,
	    /* uint32   */ 0,
	    /* sint32   */ 0,
	    /* fixed32  */ 5,
	    /* sfixed32 */ 5,
	    /* int64    */ 0,
	    /* uint64   */ 0,
	    /* sint64   */ 0,
	    /* fixed64  */ 1,
	    /* sfixed64 */ 1,
	    /* bool     */ 0,
	    /* string   */ 2,
	    /* bytes    */ 2
	]);
	
	var emptyArray = [];
	if (Object.freeze)
	    Object.freeze(emptyArray);
	
	/**
	 * Basic type defaults.
	 * @type {Object.<string,*>}
	 */
	types.defaults = bake([
	    /* double   */ 0,
	    /* float    */ 0,
	    /* int32    */ 0,
	    /* uint32   */ 0,
	    /* sint32   */ 0,
	    /* fixed32  */ 0,
	    /* sfixed32 */ 0,
	    /* int64    */ 0,
	    /* uint64   */ 0,
	    /* sint64   */ 0,
	    /* fixed64  */ 0,
	    /* sfixed64 */ 0,
	    /* bool     */ false,
	    /* string   */ "",
	    /* bytes    */ emptyArray
	]);
	
	/**
	 * Basic long type wire types.
	 * @type {Object.<string,number>}
	 */
	types.long = bake([
	    /* int64    */ 0,
	    /* uint64   */ 0,
	    /* sint64   */ 0,
	    /* fixed64  */ 1,
	    /* sfixed64 */ 1
	], 7);
	
	/**
	 * Allowed types for map keys with their associated wire type.
	 * @type {Object.<string,number>}
	 */
	types.mapKey = bake([
	    /* int32    */ 0,
	    /* uint32   */ 0,
	    /* sint32   */ 0,
	    /* fixed32  */ 5,
	    /* sfixed32 */ 5,
	    /* int64    */ 0,
	    /* uint64   */ 0,
	    /* sint64   */ 0,
	    /* fixed64  */ 1,
	    /* sfixed64 */ 1,
	    /* bool     */ 0,
	    /* string   */ 2
	], 2);
	
	/**
	 * Allowed types for packed repeated fields with their associated wire type.
	 * @type {Object.<string,number>}
	 */
	types.packed = bake([
	    /* int32    */ 0,
	    /* uint32   */ 0,
	    /* sint32   */ 0,
	    /* fixed32  */ 5,
	    /* sfixed32 */ 5,
	    /* int64    */ 0,
	    /* uint64   */ 0,
	    /* sint64   */ 0,
	    /* fixed64  */ 1,
	    /* sfixed64 */ 1,
	    /* bool     */ 0
	], 2);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {"use strict";
	module.exports = Service;
	
	var Namespace = __webpack_require__(30);
	/** @alias Namespace.prototype */
	var NamespacePrototype = Namespace.prototype;
	/** @alias Service.prototype */
	var ServicePrototype = Namespace.extend(Service);
	
	var Method = __webpack_require__(41),
	    util   = __webpack_require__(20);
	
	/**
	 * Constructs a new service.
	 * @classdesc Reflected service.
	 * @extends Namespace
	 * @constructor
	 * @param {string} name Service name
	 * @param {Object.<string,*>} [options] Service options
	 * @throws {TypeError} If arguments are invalid
	 */
	function Service(name, options) {
	    Namespace.call(this, name, options);
	
	    /**
	     * Service methods.
	     * @type {Object.<string,Method>}
	     */
	    this.methods = {}; // toJSON, marker
	
	    /**
	     * Cached methods as an array.
	     * @type {?Method[]}
	     * @private
	     */
	    this._methodsArray = null;
	}
	
	Object.defineProperties(ServicePrototype, {
	
	    /**
	     * Methods of this service as an array for iteration.
	     * @name Service#methodsArray
	     * @type {Method[]}
	     * @readonly
	     */
	    methodsArray: {
	        get: ServicePrototype.getMethodsArray = function getMethodsArray() {
	            return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
	        }
	    }
	
	});
	
	function clearCache(service) {
	    service._methodsArray = null;
	    return service;
	}
	
	/**
	 * Tests if the specified JSON object describes a service.
	 * @param {Object} json JSON object to test
	 * @returns {boolean} `true` if the object describes a service
	 */
	Service.testJSON = function testJSON(json) {
	    return Boolean(json && json.methods);
	};
	
	/**
	 * Constructs a service from JSON.
	 * @param {string} name Service name
	 * @param {Object} json JSON object
	 * @returns {Service} Created service
	 * @throws {TypeError} If arguments are invalid
	 */
	Service.fromJSON = function fromJSON(name, json) {
	    var service = new Service(name, json.options);
	    if (json.methods)
	        Object.keys(json.methods).forEach(function(methodName) {
	            service.add(Method.fromJSON(methodName, json.methods[methodName]));
	        });
	    return service;
	};
	
	/**
	 * @override
	 */
	ServicePrototype.toJSON = function toJSON() {
	    var inherited = NamespacePrototype.toJSON.call(this);
	    return {
	        options : inherited && inherited.options || undefined,
	        methods : Namespace.arrayToJSON(this.getMethodsArray()) || {},
	        nested  : inherited && inherited.nested || undefined
	    };
	};
	
	/**
	 * @override
	 */
	ServicePrototype.get = function get(name) {
	    return NamespacePrototype.get.call(this, name) || this.methods[name] || null;
	};
	
	/**
	 * @override
	 */
	ServicePrototype.resolveAll = function resolve() {
	    var methods = this.getMethodsArray();
	    for (var i = 0; i < methods.length; ++i)
	        methods[i].resolve();
	    return NamespacePrototype.resolve.call(this);
	};
	
	/**
	 * @override
	 */
	ServicePrototype.add = function add(object) {
	    if (this.get(object.name))
	        throw Error("duplicate name '" + object.name + '" in ' + this);
	    if (object instanceof Method) {
	        this.methods[object.name] = object;
	        object.parent = this;
	        return clearCache(this);
	    }
	    return NamespacePrototype.add.call(this, object);
	};
	
	/**
	 * @override
	 */
	ServicePrototype.remove = function remove(object) {
	    if (object instanceof Method) {
	        if (this.methods[object.name] !== object)
	            throw Error(object + " is not a member of " + this);
	        delete this.methods[object.name];
	        object.parent = null;
	        return clearCache(this);
	    }
	    return NamespacePrototype.remove.call(this, object);
	};
	
	/**
	 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
	 * @typedef RPCImpl
	 * @function
	 * @param {Method} method Reflected method being called
	 * @param {Uint8Array} requestData Request data
	 * @param {function(?Error, Uint8Array=)} callback Node-style callback called with the error, if any, and the response data
	 * @returns {undefined}
	 */
	
	/**
	 * Creates a runtime service using the specified rpc implementation.
	 * @param {function(Method, Uint8Array, function)} rpc RPC implementation ({@link RPCImpl|see})
	 * @param {boolean} [requestDelimited=false] Whether request data is length delimited
	 * @param {boolean} [responseDelimited=false] Whether response data is length delimited
	 * @returns {Object} Runtime service
	 */
	ServicePrototype.create = function create(rpc, requestDelimited, responseDelimited) {
	    var rpcService = {};
	    Object.defineProperty(rpcService, "$rpc", {
	        value: rpc
	    });
	    this.getMethodsArray().forEach(function(method) {
	        rpcService[method.name] = function(request, callback) {
	            method.resolve();
	            var requestData;
	            try {
	                requestData = (requestDelimited && method.resolvedRequestType.encodeDelimited(request) || method.resolvedRequestType.encode(request)).finish();
	            } catch (err) {
	                (typeof setImmediate === 'function' && setImmediate || setTimeout)(function() { callback(err); });
	                return;
	            }
	            // Calls the custom RPC implementation with the reflected method and binary request data
	            // and expects the rpc implementation to call its callback with the binary response data.
	            rpc(method, requestData, function(err, responseData) {
	                if (err) {
	                    callback(err);
	                    return;
	                }
	                var response;
	                try {
	                    response = responseDelimited && method.resolvedResponseType.decodeDelimited(responseData) || method.resolvedResponseType.decode(responseData);
	                } catch (err2) {
	                    callback(err2);
	                    return;
	                }
	                callback(null, response);
	            });
	        };
	    });
	    return rpcService;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39).setImmediate))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(40).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39).setImmediate, __webpack_require__(39).clearImmediate))

/***/ },
/* 40 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Method;
	
	var ReflectionObject = __webpack_require__(31);
	/** @alias Method.prototype */
	var MethodPrototype = ReflectionObject.extend(Method);
	
	var Type = __webpack_require__(33),
	    util = __webpack_require__(20);
	
	var _TypeError = util._TypeError;
	
	/**
	 * Constructs a new service method.
	 * @classdesc Reflected service method.
	 * @extends ReflectionObject
	 * @constructor
	 * @param {string} name Method name
	 * @param {string|undefined} type Method type, usually `"rpc"`
	 * @param {string} requestType Request message type
	 * @param {string} responseType Response message type
	 * @param {boolean} [requestStream] Whether the request is streamed
	 * @param {boolean} [responseStream] Whether the response is streamed
	 * @param {Object} [options] Declared options
	 */
	function Method(name, type, requestType, responseType, requestStream, responseStream, options) {
	    if (util.isObject(requestStream)) {
	        options = requestStream;
	        requestStream = responseStream = undefined;
	    } else if (util.isObject(responseStream)) {
	        options = responseStream;
	        responseStream = undefined;
	    }
	    if (!util.isString(type))
	        throw _TypeError("type");
	    if (!util.isString(requestType))
	        throw _TypeError("requestType");
	    if (!util.isString(responseType))
	        throw _TypeError("responseType");
	
	    ReflectionObject.call(this, name, options);
	
	    /**
	     * Method type.
	     * @type {string}
	     */
	    this.type = type || "rpc"; // toJSON
	
	    /**
	     * Request type.
	     * @type {string}
	     */
	    this.requestType = requestType; // toJSON, marker
	
	    /**
	     * Whether requests are streamed or not.
	     * @type {boolean|undefined}
	     */
	    this.requestStream = requestStream ? true : undefined; // toJSON
	
	    /**
	     * Response type.
	     * @type {string}
	     */
	    this.responseType = responseType; // toJSON
	
	    /**
	     * Whether responses are streamed or not.
	     * @type {boolean|undefined}
	     */
	    this.responseStream = responseStream ? true : undefined; // toJSON
	
	    /**
	     * Resolved request type.
	     * @type {?Type}
	     */
	    this.resolvedRequestType = null;
	
	    /**
	     * Resolved response type.
	     * @type {?Type}
	     */
	    this.resolvedResponseType = null;
	}
	
	/**
	 * Tests if the specified JSON object describes a service method.
	 * @param {Object} json JSON object
	 * @returns {boolean} `true` if the object describes a map field
	 */
	Method.testJSON = function testJSON(json) {
	    return Boolean(json && json.requestType !== undefined);
	};
	
	/**
	 * Constructs a service method from JSON.
	 * @param {string} name Method name
	 * @param {Object} json JSON object
	 * @returns {Method} Created method
	 * @throws {TypeError} If arguments are invalid
	 */
	Method.fromJSON = function fromJSON(name, json) {
	    return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options);
	};
	
	/**
	 * @override
	 */
	MethodPrototype.toJSON = function toJSON() {
	    return {
	        type           : this.type !== "rpc" && this.type || undefined,
	        requestType    : this.requestType,
	        requestStream  : this.requestStream,
	        responseType   : this.responseType,
	        responseStream : this.responseStream,
	        options        : this.options
	    };
	};
	
	/**
	 * @override
	 */
	MethodPrototype.resolve = function resolve() {
	    if (this.resolved)
	        return this;
	    var resolved = this.parent.lookup(this.requestType);
	    if (!(resolved && resolved instanceof Type))
	        throw Error("unresolvable request type: " + this.requestType);
	    this.resolvedRequestType = resolved;
	    resolved = this.parent.lookup(this.responseType);
	    if (!(resolved && resolved instanceof Type))
	        throw Error("unresolvable response type: " + this.requestType);
	    this.resolvedResponseType = resolved;
	    return ReflectionObject.prototype.resolve.call(this);
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	module.exports = Prototype;
	
	/**
	 * Options passed to the {@link Prototype|prototype constructor}, modifying its behavior.
	 * @typedef PrototypeOptions
	 * @type {Object}
	 * @property {boolean} [fieldsOnly=false] Sets only properties that reference a field
	 */
	
	/**
	 * Constructs a new prototype.
	 * This method should be called from your custom constructors, i.e. `Prototype.call(this, properties)`.
	 * @classdesc Runtime message prototype ready to be extended by custom classes or generated code.
	 * @constructor
	 * @param {Object.<string,*>} [properties] Properties to set
	 * @param {PrototypeOptions} [options] Prototype options
	 * @abstract
	 * @see {@link inherits}
	 * @see {@link Class}
	 */
	function Prototype(properties, options) {
	    if (properties) {
	        var any    = !(options && options.fieldsOnly),
	            fields = this.constructor.$type.fields,
	            keys   = Object.keys(properties);
	        for (var i = 0; i < keys.length; ++i)
	            if (fields[keys[i]] || any)
	                this[keys[i]] = properties[keys[i]];
	    }
	}
	
	/**
	 * Converts a runtime message to a JSON object.
	 * @param {Object.<string,*>} [options] Conversion options
	 * @param {boolean} [options.fieldsOnly=false] Converts only properties that reference a field
	 * @param {Function} [options.long] Long conversion type. Only relevant with a long library.
	 * Valid values are `String` and `Number` (the global types).
	 * Defaults to a possibly unsafe number without, and a `Long` with a long library.
	 * @param {Function} [options.enum=Number] Enum value conversion type.
	 * Valid values are `String` and `Number` (the global types).
	 * Defaults to the numeric ids.
	 * @returns {Object.<string,*>} JSON object
	 */
	Prototype.prototype.asJSON = function asJSON(options) {
	    var any    = !(options && options.fieldsOnly),
	        fields = this.constructor.$type.fields,
	        json   = {};
	    var keys   = Object.keys(this);
	    for (var i = 0, key; i < keys.length; ++i) {
	        var field = fields[key = keys[i]],
	            value = this[key];
	        if (field) {
	            if (field.repeated) {
	                if (value && value.length) {
	                    var array = new Array(value.length);
	                    for (var j = 0, l = value.length; j < l; ++j)
	                        array[j] = field.jsonConvert(value[j], options);
	                    json[key] = array;
	                }
	            } else
	                json[key] = field.jsonConvert(value, options);
	        } else if (any)
	            json[key] = value;
	    }
	    return json;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = inherits;
	
	var Prototype = __webpack_require__(42),
	    Type      = __webpack_require__(33),
	    util      = __webpack_require__(20);
	
	var _TypeError = util._TypeError;
	
	/**
	 * Options passed to {@link inherits}, modifying its behavior.
	 * @typedef InheritanceOptions
	 * @type {Object}
	 * @property {boolean} [noStatics=false] Skips adding the default static methods on top of the constructor
	 * @property {boolean} [noRegister=false] Skips registering the constructor with the reflected type
	 */
	
	/**
	 * Inherits a custom class from the message prototype of the specified message type.
	 * @param {Function} clazz Inheriting class
	 * @param {Type} type Inherited message type
	 * @param {InheritanceOptions} [options] Inheritance options
	 * @returns {Prototype} Created prototype
	 */
	function inherits(clazz, type, options) {
	    if (typeof clazz !== 'function')
	        throw _TypeError("clazz", "a function");
	    if (!(type instanceof Type))
	        throw _TypeError("type", "a Type");
	    if (!options)
	        options = {};
	
	    /**
	     * This is not an actual type but stands as a reference for any constructor of a custom message class that you pass to the library.
	     * @name Class
	     * @extends Prototype
	     * @constructor
	     * @param {Object.<string,*>} [properties] Properties to set on the message
	     * @see {@link inherits}
	     */
	
	    var classProperties = {
	        
	        /**
	         * Reference to the reflected type.
	         * @name Class.$type
	         * @type {Type}
	         * @readonly
	         */
	        $type: {
	            value: type
	        }
	    };
	
	    if (!options.noStatics)
	        util.merge(classProperties, {
	
	            /**
	             * Encodes a message of this type to a buffer.
	             * @name Class.encode
	             * @function
	             * @param {Prototype|Object} message Message to encode
	             * @param {Writer} [writer] Writer to use
	             * @returns {Uint8Array} Encoded message
	             */
	            encode: {
	                value: function encode(message, writer) {
	                    return this.$type.encode(message, writer).finish();
	                }
	            },
	
	            /**
	             * Encodes a message of this type preceeded by its length as a varint to a buffer.
	             * @name Class.encodeDelimited
	             * @function
	             * @param {Prototype|Object} message Message to encode
	             * @param {Writer} [writer] Writer to use
	             * @returns {Uint8Array} Encoded message
	             */
	            encodeDelimited: {
	                value: function encodeDelimited(message, writer) {
	                    return this.$type.encodeDelimited(message, writer).finish();
	                }
	            },
	
	            /**
	             * Decodes a message of this type from a buffer.
	             * @name Class.decode
	             * @function
	             * @param {Uint8Array} buffer Buffer to decode
	             * @returns {Prototype} Decoded message
	             */
	            decode: {
	                value: function decode(buffer) {
	                    return this.$type.decode(buffer);
	                }
	            },
	
	            /**
	             * Decodes a message of this type preceeded by its length as a varint from a buffer.
	             * @name Class.decodeDelimited
	             * @function
	             * @param {Uint8Array} buffer Buffer to decode
	             * @returns {Prototype} Decoded message
	             */
	            decodeDelimited: {
	                value: function decodeDelimited(buffer) {
	                    return this.$type.decodeDelimited(buffer);
	                }
	            },
	
	            /**
	             * Verifies a message of this type.
	             * @name Class.verify
	             * @function
	             * @param {Prototype|Object} message Message or plain object to verify
	             * @returns {?string} `null` if valid, otherwise the reason why it is not
	             */
	            verify: {
	                value: function verify(message) {
	                    return this.$type.verify(message);
	                }
	            }
	
	        }, true);
	
	    Object.defineProperties(clazz, classProperties);
	    var prototype = inherits.defineProperties(new Prototype(), type);
	    clazz.prototype = prototype;
	    prototype.constructor = clazz;
	
	    if (!options.noRegister)
	        type.setCtor(clazz);
	
	    return prototype;
	}
	
	/**
	 * Defines the reflected type's default values and virtual oneof properties on the specified prototype.
	 * @memberof inherits
	 * @param {Prototype} prototype Prototype to define properties upon
	 * @param {Type} type Reflected message type
	 * @returns {Prototype} The specified prototype
	 */
	inherits.defineProperties = function defineProperties(prototype, type) {
	
	    var prototypeProperties = {
	
	        /**
	         * Reference to the reflected type.
	         * @name Prototype#$type
	         * @type {Type}
	         * @readonly
	         */
	        $type: {
	            value: type
	        }
	    };
	
	    // Initialize default values
	    type.getFieldsArray().forEach(function(field) {
	        field.resolve();
	        if (!util.isObject(field.defaultValue))
	            // objects are mutable (i.e. would modify the array on the prototype, not the instance)
	            prototype[field.name] = field.defaultValue;
	    });
	
	    // Define each oneof with a non-enumerable getter and setter for the present field
	    type.getOneofsArray().forEach(function(oneof) {
	        prototypeProperties[oneof.resolve().name] = {
	            get: function() {
	                var keys = oneof.oneof;
	                for (var i = 0; i < keys.length; ++i) {
	                    var field = oneof.parent.fields[keys[i]];
	                    if (this[keys[i]] != field.defaultValue) // eslint-disable-line eqeqeq
	                        return keys[i];
	                }
	                return undefined;
	            },
	            set: function(value) {
	                var keys = oneof.oneof;
	                for (var i = 0; i < keys.length; ++i) {
	                    if (keys[i] !== value)
	                        delete this[keys[i]];
	                }
	            }
	        };
	    });
	
	    Object.defineProperties(prototype, prototypeProperties);
	    return prototype;
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Reader;
	
	Reader.BufferReader = BufferReader;
	
	var util     = __webpack_require__(20),
	    ieee754  = __webpack_require__(45);
	var LongBits = util.LongBits,
	    Long     = util.Long;
	
	function indexOutOfRange(reader, writeLength) {
	    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
	}
	
	/**
	 * Constructs a new reader using the specified buffer.
	 * When called as a function, returns an appropriate reader for the specified buffer.
	 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
	 * @constructor
	 * @param {Uint8Array} buffer Buffer to read from
	 */
	function Reader(buffer) {
	    if (!(this instanceof Reader))
	        return util.Buffer && (!buffer || util.Buffer.isBuffer(buffer)) && new BufferReader(buffer) || new Reader(buffer);
	
	    /**
	     * Read buffer.
	     * @type {Uint8Array}
	     */
	    this.buf = buffer;
	
	    /**
	     * Read buffer position.
	     * @type {number}
	     */
	    this.pos = 0;
	
	    /**
	     * Read buffer length.
	     * @type {number}
	     */
	    this.len = buffer.length;
	}
	
	/** @alias Reader.prototype */
	var ReaderPrototype = Reader.prototype;
	
	var ArrayImpl = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	ReaderPrototype._slice = ArrayImpl.prototype.slice || ArrayImpl.prototype.subarray;
	
	/**
	 * Tag read.
	 * @constructor
	 * @param {number} id Field id
	 * @param {number} wireType Wire type
	 * @ignore
	 */
	function Tag(id, wireType) {
	    this.id = id;
	    this.wireType = wireType;
	}
	
	/**
	 * Reads a tag.
	 * @returns {{id: number, wireType: number}} Field id and wire type
	 */
	ReaderPrototype.tag = function read_tag() {
	    if (this.pos >= this.len)
	        throw indexOutOfRange(this);
	    return new Tag(this.buf[this.pos] >>> 3, this.buf[this.pos++] & 7);
	};
	
	/**
	 * Reads a varint as a signed 32 bit value.
	 * @returns {number} Value read
	 */
	ReaderPrototype.int32 = function read_int32() {
	    var value = 0,
	        shift = 0,
	        octet = 0;
	    do {
	        if (this.pos >= this.len)
	            throw indexOutOfRange(this);
	        octet = this.buf[this.pos++];
	        if (shift < 32)
	            value |= (octet & 127) << shift;
	        shift += 7;
	    } while (octet & 128);
	    return value;
	};
	
	/**
	 * Reads a varint as an unsigned 32 bit value.
	 * @returns {number} Value read
	 */
	ReaderPrototype.uint32 = function read_uint32() {
	    return this.int32() >>> 0;
	};
	
	/**
	 * Reads a zig-zag encoded varint as a signed 32 bit value.
	 * @returns {number} Value read
	 */
	ReaderPrototype.sint32 = function read_sint32() {
	    var value = this.int32();
	    return value >>> 1 ^ -(value & 1);
	};
	
	/**
	 * Reads a possibly 64 bits varint.
	 * @returns {LongBits} Long bits
	 * @this {Reader}
	 * @inner
	 * @ignore
	 */
	function readLongVarint() {
	    var lo = 0, hi = 0,
	        i  = 0, b  = 0;
	    if (this.len - this.pos > 9) { // fast route
	        for (i = 0; i < 4; ++i) {
	            b = this.buf[this.pos++];
	            lo |= (b & 127) << i * 7;
	            if (b < 128)
	                return new LongBits(lo >>> 0, hi >>> 0);
	        }
	        b = this.buf[this.pos++];
	        lo |= (b & 127) << 28;
	        hi |= (b & 127) >> 4;
	        if (b < 128)
	            return new LongBits(lo >>> 0, hi >>> 0);
	        for (i = 0; i < 5; ++i) {
	            b = this.buf[this.pos++];
	            hi |= (b & 127) << i * 7 + 3;
	            if (b < 128)
	                return new LongBits(lo >>> 0, hi >>> 0);
	        }
	    } else {
	        for (i = 0; i < 4; ++i) {
	            if (this.pos >= this.len)
	                throw indexOutOfRange(this);
	            b = this.buf[this.pos++];
	            lo |= (b & 127) << i * 7;
	            if (b < 128)
	                return new LongBits(lo >>> 0, hi >>> 0);
	        }
	        if (this.pos >= this.len)
	            throw indexOutOfRange(this);
	        b = this.buf[this.pos++];
	        lo |= (b & 127) << 28;
	        hi |= (b & 127) >> 4;
	        if (b < 128)
	            return new LongBits(lo >>> 0, hi >>> 0);
	        for (i = 0; i < 5; ++i) {
	            if (this.pos >= this.len)
	                throw indexOutOfRange(this);
	            b = this.buf[this.pos++];
	            hi |= (b & 127) << i * 7 + 3;
	            if (b < 128)
	                return new LongBits(lo >>> 0, hi >>> 0);
	        }
	    }
	    throw Error("invalid varint encoding");
	}
	
	function read_int64_long() {
	    return readLongVarint.call(this).toLong(); // eslint-disable-line no-invalid-this
	}
	
	function read_int64_number() {
	    return readLongVarint.call(this).toNumber(); // eslint-disable-line no-invalid-this
	}
	
	/**
	 * Reads a varint as a signed 64 bit value.
	 * @function
	 * @returns {Long|number} Value read
	 */
	ReaderPrototype.int64 = Long && read_int64_long || read_int64_number;
	
	function read_uint64_long() {
	    return readLongVarint.call(this).toLong(true); // eslint-disable-line no-invalid-this
	}
	
	function read_uint64_number() {
	    return readLongVarint.call(this).toNumber(true); // eslint-disable-line no-invalid-this
	}
	
	/**
	 * Reads a varint as an unsigned 64 bit value.
	 * @function
	 * @returns {Long|number} Value read
	 */
	ReaderPrototype.uint64 = Long && read_uint64_long || read_uint64_number;
	
	function read_sint64_long() {
	    return readLongVarint.call(this).zzDecode().toLong(); // eslint-disable-line no-invalid-this
	}
	
	function read_sint64_number() {
	    return readLongVarint.call(this).zzDecode().toNumber(); // eslint-disable-line no-invalid-this
	}
	
	/**
	 * Reads a zig-zag encoded varint as a signed 64 bit value.
	 * @function
	 * @returns {Long|number} Value read
	 */
	ReaderPrototype.sint64 = Long && read_sint64_long || read_sint64_number;
	
	/**
	 * Reads a varint as a boolean.
	 * @returns {boolean} Value read
	 */
	ReaderPrototype.bool = function read_bool() {
	    return this.int32() !== 0;
	};
	
	/**
	 * Reads fixed 32 bits as a number.
	 * @returns {number} Value read
	 */
	ReaderPrototype.fixed32 = function read_fixed32() {
	    if (this.pos + 4 > this.len)
	        throw indexOutOfRange(this, 4);
	    this.pos += 4;
	    return this.buf[this.pos - 4]
	         | this.buf[this.pos - 3] << 8
	         | this.buf[this.pos - 2] << 16
	         | this.buf[this.pos - 1] << 24;
	};
	
	/**
	 * Reads zig-zag encoded fixed 32 bits as a number.
	 * @returns {number} Value read
	 */
	ReaderPrototype.sfixed32 = function read_sfixed32() {
	    var value = this.fixed32();
	    return value >>> 1 ^ -(value & 1);
	};
	
	/**
	 * Reads a 64 bit value.
	 * @returns {LongBits} Long bits
	 * @this {Reader}
	 * @inner 
	 * @ignore
	 */
	function readLongFixed() {
	    if (this.pos + 8 > this.len)
	        throw indexOutOfRange(this, 8);
	    return new LongBits(
	      ( this.buf[this.pos++]
	      | this.buf[this.pos++] << 8
	      | this.buf[this.pos++] << 16
	      | this.buf[this.pos++] << 24 ) >>> 0
	    ,
	      ( this.buf[this.pos++]
	      | this.buf[this.pos++] << 8
	      | this.buf[this.pos++] << 16
	      | this.buf[this.pos++] << 24 ) >>> 0
	    );
	}
	
	function read_fixed64_long() {
	    return readLongFixed.call(this).toLong(true); // eslint-disable-line no-invalid-this
	}
	
	function read_fixed64_number() {
	    return readLongFixed.call(this).toNumber(true); // eslint-disable-line no-invalid-this
	}
	
	/**
	 * Reads fixed 64 bits.
	 * @function
	 * @returns {Long|number} Value read
	 */
	ReaderPrototype.fixed64 = Long && read_fixed64_long || read_fixed64_number;
	
	function read_sfixed64_long() {
	    return readLongFixed.call(this).zzDecode().toLong(); // eslint-disable-line no-invalid-this
	}
	
	function read_sfixed64_number() {
	    return readLongFixed.call(this).zzDecode().toNumber(); // eslint-disable-line no-invalid-this
	}
	
	/**
	 * Reads zig-zag encoded fixed 64 bits.
	 * @returns {Long|number} Value read
	 */
	ReaderPrototype.sfixed64 = Long && read_sfixed64_long || read_sfixed64_number;
	
	/**
	 * Reads a float (32 bit) as a number.
	 * @function
	 * @returns {number} Value read
	 */
	ReaderPrototype.float = function read_float() {
	    if (this.pos + 4 > this.len)
	        throw indexOutOfRange(this, 4);
	    var value = ieee754.read(this.buf, this.pos, false, 23, 4);
	    this.pos += 4;
	    return value;
	};
	
	/**
	 * Reads a double (64 bit float) as a number.
	 * @function
	 * @returns {number} Value read
	 */
	ReaderPrototype.double = function read_double() {
	    if (this.pos + 8 > this.len)
	        throw indexOutOfRange(this, 4);
	    var value = ieee754.read(this.buf, this.pos, false, 52, 8);
	    this.pos += 8;
	    return value;
	};
	
	/**
	 * Reads a sequence of bytes preceeded by its length as a varint.
	 * @returns {Uint8Array} Value read
	 */
	ReaderPrototype.bytes = function read_bytes() {
	    var length = this.int32() >>> 0,
	        start  = this.pos,
	        end    = this.pos + length;
	    if (end > this.len)
	        throw indexOutOfRange(this, length);
	    this.pos += length;
	    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
	        ? new this.buf.constructor(0)
	        : this._slice.call(this.buf, start, end);
	};
	
	/**
	 * Reads a string preceeded by its byte length as a varint.
	 * @returns {string} Value read
	 */
	ReaderPrototype.string = function read_string() {
	    // ref: https://github.com/google/closure-library/blob/master/closure/goog/crypt/crypt.js
	    var bytes = this.bytes(),
	        len = bytes.length;
	    if (len) {
	        var out = new Array(len), p = 0, c = 0;
	        while (p < len) {
	            var c1 = bytes[p++];
	            if (c1 < 128)
	                out[c++] = c1;
	            else if (c1 > 191 && c1 < 224)
	                out[c++] = (c1 & 31) << 6 | bytes[p++] & 63;
	            else if (c1 > 239 && c1 < 365) {
	                var u = ((c1 & 7) << 18 | (bytes[p++] & 63) << 12 | (bytes[p++] & 63) << 6 | bytes[p++] & 63) - 0x10000;
	                out[c++] = 0xD800 + (u >> 10);
	                out[c++] = 0xDC00 + (u & 1023);
	            } else
	                out[c++] = (c1 & 15) << 12 | (bytes[p++] & 63) << 6 | bytes[p++] & 63;
	        }
	        return String.fromCharCode.apply(String, out.slice(0, c));
	    }
	    return "";
	};
	
	/**
	 * Skips the specified number of bytes if specified, otherwise skips a varint.
	 * @param {number} [length] Length if known, otherwise a varint is assumed
	 * @returns {Reader} `this`
	 */
	ReaderPrototype.skip = function skip(length) {
	    if (length === undefined) {
	        do {
	            if (this.pos >= this.len)
	                throw indexOutOfRange(this);
	        } while (this.buf[this.pos++] & 128);
	    } else {
	        if (this.pos + length > this.len)
	            throw indexOutOfRange(this, length);
	        this.pos += length;
	    }
	    return this;
	};
	
	/**
	 * Skips the next element of the specified wire type.
	 * @param {number} wireType Wire type received
	 * @returns {Reader} `this`
	 */
	ReaderPrototype.skipType = function(wireType) {
	    switch (wireType) {
	        case 0:
	            this.skip();
	            break;
	        case 1:
	            this.skip(8);
	            break;
	        case 2:
	            this.skip(this.uint32());
	            break;
	        case 3:
	            do { // eslint-disable-line no-constant-condition
	                var tag = this.tag();
	                if (tag.wireType === 4)
	                    break;
	                this.skipType(tag.wireType);
	            } while (true);
	            break;
	        case 5:
	            this.skip(4);
	            break;
	        default:
	            throw Error("invalid wire type: " + wireType);
	    }
	    return this;
	};
	
	/**
	 * Resets this instance and frees all resources.
	 * @param {Uint8Array} [buffer] New buffer for a new sequence of read operations
	 * @returns {Reader} `this`
	 */
	ReaderPrototype.reset = function reset(buffer) {
	    if (buffer) {
	        this.buf = buffer;
	        this.len = buffer.length;
	    } else {
	        this.buf = null; // makes it throw
	        this.len = 0;
	    }
	    this.pos = 0;
	    return this;
	};
	
	/**
	 * Finishes the current sequence of read operations, frees all resources and returns the remaining buffer.
	 * @param {Uint8Array} [buffer] New buffer for a new sequence of read operations
	 * @returns {Uint8Array} Finished buffer
	 */
	ReaderPrototype.finish = function finish(buffer) {
	    var remain = this.pos
	        ? this._slice.call(this.buf, this.pos)
	        : this.buf;
	    this.reset(buffer);
	    return remain;
	};
	
	// One time function to initialize BufferReader with the now-known buffer implementation's slice method
	var initBufferReader = function() {
	    if (!util.Buffer)
	        throw Error("Buffer is not supported");
	    BufferReaderPrototype._slice = util.Buffer.prototype.slice;
	    initBufferReader = false;
	};
	
	/**
	 * Constructs a new buffer reader.
	 * @classdesc Wire format reader using node buffers.
	 * @extends Reader
	 * @constructor
	 * @param {Buffer} buffer Buffer to read from
	 */
	function BufferReader(buffer) {
	    if (initBufferReader)
	        initBufferReader();
	    Reader.call(this, buffer);
	}
	
	/** @alias BufferReader.prototype */
	var BufferReaderPrototype = BufferReader.prototype = Object.create(Reader.prototype);
	
	BufferReaderPrototype.constructor = BufferReader;
	
	/**
	 * @override
	 */
	BufferReaderPrototype.float = function read_float_buffer() {
	    if (this.pos + 4 > this.len)
	        throw indexOutOfRange(this, 4);
	    var value = this.buf.readFloatLE(this.pos, true);
	    this.pos += 4;
	    return value;
	};
	
	/**
	 * @override
	 */
	BufferReaderPrototype.double = function read_double_buffer() {
	    if (this.pos + 8 > this.len)
	        throw indexOutOfRange(this, 8);
	    var value = this.buf.readDoubleLE(this.pos, true);
	    this.pos += 8;
	    return value;
	};
	
	/**
	 * @override
	 */
	BufferReaderPrototype.string = function read_string_buffer() {
	    var length = this.int32() >>> 0,
	        start = this.pos,
	        end   = this.pos + length;
	    if (end > this.len)
	        throw indexOutOfRange(this, length);
	    this.pos += length;
	    return this.buf.toString("utf8", start, end);
	};
	
	/**
	 * @override
	 */
	BufferReaderPrototype.finish = function finish_buffer(buffer) {
	    var remain = this.pos ? this.buf.slice(this.pos) : this.buf;
	    this.reset(buffer);
	    return remain;
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	// Copyright (c) 2008, Fair Oaks Labs, Inc.
	// All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions are met:
	//
	//  * Redistributions of source code must retain the above copyright notice,
	//    this list of conditions and the following disclaimer.
	//
	//  * Redistributions in binary form must reproduce the above copyright notice,
	//    this list of conditions and the following disclaimer in the documentation
	//    and/or other materials provided with the distribution.
	//
	//  * Neither the name of Fair Oaks Labs, Inc. nor the names of its contributors
	//    may be used to endorse or promote products derived from this software
	//    without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	// ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
	// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	// POSSIBILITY OF SUCH DAMAGE.
	//
	//
	// Modifications to writeIEEE754 to support negative zeroes made by Brian White
	
	// ref: https://github.com/nodejs/node/blob/87286cc7371886d9856edf424785aaa890ba05a9/lib/buffer_ieee754.js
	
	exports.read = function readIEEE754(buffer, offset, isBE, mLen, nBytes) {
	    var e, m,
	        eLen = nBytes * 8 - mLen - 1,
	        eMax = (1 << eLen) - 1,
	        eBias = eMax >> 1,
	        nBits = -7,
	        i = isBE ? 0 : (nBytes - 1),
	        d = isBE ? 1 : -1,
	        s = buffer[offset + i];
	
	    i += d;
	
	    e = s & ((1 << (-nBits)) - 1);
	    s >>= (-nBits);
	    nBits += eLen;
	    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
	
	    m = e & ((1 << (-nBits)) - 1);
	    e >>= (-nBits);
	    nBits += mLen;
	    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
	
	    if (e === 0) {
	        e = 1 - eBias;
	    } else if (e === eMax) {
	        return m ? NaN : ((s ? -1 : 1) * Infinity);
	    } else {
	        m = m + Math.pow(2, mLen);
	        e = e - eBias;
	    }
	    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};
	
	exports.write = function writeIEEE754(buffer, value, offset, isBE, mLen, nBytes) {
	    var e, m, c,
	        eLen = nBytes * 8 - mLen - 1,
	        eMax = (1 << eLen) - 1,
	        eBias = eMax >> 1,
	        rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	        i = isBE ? (nBytes - 1) : 0,
	        d = isBE ? -1 : 1,
	        s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
	
	    value = Math.abs(value);
	
	    if (isNaN(value) || value === Infinity) {
	        m = isNaN(value) ? 1 : 0;
	        e = eMax;
	    } else {
	        e = Math.floor(Math.log(value) / Math.LN2);
	        if (value * (c = Math.pow(2, -e)) < 1) {
	            e--;
	            c *= 2;
	        }
	        if (e + eBias >= 1) {
	            value += rt / c;
	        } else {
	            value += rt * Math.pow(2, 1 - eBias);
	        }
	        if (value * c >= 2) {
	            e++;
	            c /= 2;
	        }
	
	        if (e + eBias >= eMax) {
	            m = 0;
	            e = eMax;
	        } else if (e + eBias >= 1) {
	            m = (value * c - 1) * Math.pow(2, mLen);
	            e = e + eBias;
	        } else {
	            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	            e = 0;
	        }
	    }
	
	    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
	
	    e = (e << mLen) | m;
	    eLen += mLen;
	    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
	
	    buffer[offset + i - d] |= s * 128;
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Encoder;
	
	var Enum   = __webpack_require__(32),
	    Writer = __webpack_require__(47),
	    types  = __webpack_require__(37),
	    util   = __webpack_require__(20);
	
	/**
	 * Constructs a new encoder for the specified message type.
	 * @classdesc Wire format encoder using code generation on top of reflection
	 * @constructor
	 * @param {Type} type Message type
	 */
	function Encoder(type) {
	
	    /**
	     * Message type.
	     * @type {Type}
	     */
	    this.type = type;
	}
	
	/** @alias Encoder.prototype */
	var EncoderPrototype = Encoder.prototype;
	
	// This is here to mimic Type so that fallback functions work without having to bind()
	Object.defineProperties(EncoderPrototype, {
	
	    /**
	     * Fields of this encoder's message type as an array for iteration.
	     * @name Encoder#fieldsArray
	     * @type {Field[]}
	     * @readonly
	     */
	    fieldsArray: {
	        get: EncoderPrototype.getFieldsArray = function getFieldsArray() {
	            return this.type.getFieldsArray();
	        }
	    }
	});
	
	/**
	 * Encodes a message of this encoder's message type.
	 * @param {Prototype|Object} message Runtime message or plain object to encode
	 * @param {Writer} [writer] Writer to encode to
	 * @returns {Writer} writer
	 */
	EncoderPrototype.encode = function encode_fallback(message, writer) { // codegen reference and fallback
	    /* eslint-disable block-scoped-var, no-redeclare */
	    if (!writer)
	        writer = Writer();
	    var fields = this.getFieldsArray(), fi = 0;
	    while (fi < fields.length) {
	        var field    = fields[fi++].resolve(),
	            type     = field.resolvedType instanceof Enum ? "uint32" : field.type,
	            wireType = types.basic[type];
	
	        // Map fields
	        if (field.map) {
	            var keyType = field.resolvedKeyType /* only valid is enum */ ? "uint32" : field.keyType;
	            var value, keys;
	            if ((value = message[field.name]) && (keys = Object.keys(value)).length) {
	                writer.fork();
	                for (var i = 0; i < keys.length; ++i) {
	                    writer.tag(1, types.mapKey[keyType])[keyType](keys[i]);
	                    if (wireType !== undefined)
	                        writer.tag(2, wireType)[type](value[keys[i]]);
	                    else
	                        field.resolvedType.encode(value[keys[i]], writer.tag(2,2).fork()).ldelim();
	                }
	                writer.ldelim(field.id);
	            }
	
	        // Repeated fields
	        } else if (field.repeated) {
	            var values = message[field.name];
	            if (values && values.length) {
	
	                // Packed repeated
	                if (field.packed && types.packed[type] !== undefined) {
	                    writer.fork();
	                    var i = 0;
	                    while (i < values.length)
	                        writer[type](values[i++]);
	                    writer.ldelim(field.id);
	
	                // Non-packed
	                } else {
	                    var i = 0;
	                    if (wireType !== undefined)
	                        while (i < values.length)
	                            writer.tag(field.id, wireType)[type](values[i++]);
	                    else
	                        while (i < values.length)
	                            field.resolvedType.encode(values[i++], writer.tag(field.id,2).fork()).ldelim();
	                }
	
	            }
	
	        // Non-repeated
	        } else {
	            var value = message[field.name];
	            if (field.required || value !== undefined && field.long ? util.longNeq(value, field.defaultValue) : value !== field.defaultValue) {
	                if (wireType !== undefined)
	                    writer.tag(field.id, wireType)[type](value);
	                else {
	                    field.resolvedType.encode(value, writer.fork());
	                    if (writer.len || field.required)
	                        writer.ldelim(field.id);
	                    else
	                        writer.reset();
	                }
	            }
	        }
	    }
	    return writer;
	    /* eslint-enable block-scoped-var, no-redeclare */
	};
	
	/**
	 * Generates an encoder specific to this encoder's message type.
	 * @returns {function} Encoder function with an identical signature to {@link Encoder#encode}
	 */
	EncoderPrototype.generate = function generate() {
	    /* eslint-disable no-unexpected-multiline */
	    var fields = this.type.getFieldsArray();
	    var gen = util.codegen("m", "w")
	    ("w||(w=Writer())");
	
	    for (var i = 0; i < fields.length; ++i) {
	        var field    = fields[i].resolve(),
	            type     = field.resolvedType instanceof Enum ? "uint32" : field.type,
	            wireType = types.basic[type],
	            prop     = util.safeProp(field.name);
	        
	        // Map fields
	        if (field.map) {
	            var keyType     = field.resolvedKeyType /* only valid is enum */ ? "uint32" : field.keyType,
	                keyWireType = types.mapKey[keyType];
	            gen
	
	    ("if(m%s){", prop)
	        ("w.fork()")
	        ("for(var i=0,ks=Object.keys(m%s);i<ks.length;++i){", prop)
	            ("w.tag(1,%d).%s(ks[i])", keyWireType, keyType);
	
	            if (wireType !== undefined) gen
	
	            ("w.tag(2,%d).%s(m%s[ks[i]])", wireType, type, prop);
	
	            else gen
	            
	            ("types[%d].encode(m%s[ks[i]],w.tag(2,2).fork()).ldelim()", i, prop);
	
	            gen
	        ("}")
	        ("w.len&&w.ldelim(%d)||w.reset()", field.id)
	    ("}");
	
	        // Repeated fields
	        } else if (field.repeated) {
	
	            // Packed repeated
	            if (field.packed && types.packed[type] !== undefined) { gen
	
	    ("if(m%s&&m%s.length){", prop, prop)
	        ("w.fork()")
	        ("for(var i=0;i<m%s.length;++i)", prop)
	            ("w.%s(m%s[i])", type, prop)
	        ("w.ldelim(%d)", field.id)
	    ("}");
	
	            // Non-packed
	            } else { gen
	
	    ("if(m%s)", prop)
	        ("for(var i=0;i<m%s.length;++i)", prop);
	                if (wireType !== undefined) gen
	            ("w.tag(%d,%d).%s(m%s[i])", field.id, wireType, type, prop);
	                else gen
	            ("types[%d].encode(m%s[i],w.tag(%d,2).fork()).ldelim()", i, prop, field.id);
	
	            }
	
	        // Non-repeated
	        } else {
	            if (!field.required) {
	
	                if (field.long) gen
	    ("if(m%s!==undefined&&util.longNeq(m%s,%j))", prop, prop, field.defaultValue);
	                else gen
	    ("if(m%s!==undefined&&m%s!==%j)", prop, prop, field.defaultValue);
	
	            }
	
	            if (wireType !== undefined) gen
	
	        ("w.tag(%d,%d).%s(m%s)", field.id, wireType, type, prop);
	
	            else if (field.required) gen
	            
	        ("types[%d].encode(m%s,w.tag(%d,2).fork()).ldelim()", i, prop, field.id);
	        
	            else gen
	
	        ("types[%d].encode(m%s,w.fork()).len&&w.ldelim(%d)||w.reset()", i, prop, field.id);
	    
	        }
	    }
	    return gen
	    ("return w")
	
	    .eof(this.type.getFullName() + "$encode", {
	        Writer : Writer,
	        types  : fields.map(function(fld) { return fld.resolvedType; }),
	        util   : util
	    });
	    /* eslint-enable no-unexpected-multiline */
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Writer;
	
	Writer.BufferWriter = BufferWriter;
	
	var util     = __webpack_require__(20),
	    ieee754  = __webpack_require__(45);
	var LongBits = util.LongBits;
	
	/**
	 * Constructs a new writer operation.
	 * @classdesc Scheduled writer operation.
	 * @memberof Writer
	 * @constructor
	 * @param {function(Uint8Array, number, *)} fn Function to call
	 * @param {*} val Value to write
	 * @param {number} len Value byte length
	 * @private
	 * @ignore
	 */
	function Op(fn, val, len) {
	
	    /**
	     * Function to call.
	     * @type {function(Uint8Array, number, *)}
	     */
	    this.fn = fn;
	
	    /**
	     * Value to write.
	     * @type {*}
	     */
	    this.val = val;
	
	    /**
	     * Value byte length.
	     * @type {number}
	     */
	    this.len = len;
	
	    /**
	     * Next operation.
	     * @type {?Writer.Op}
	     */
	    this.next = null;
	}
	
	Writer.Op = Op;
	
	function noop() {} // eslint-disable-line no-empty-function
	
	/**
	 * Constructs a new writer state.
	 * @classdesc Copied writer state.
	 * @memberof Writer
	 * @constructor
	 * @param {Writer} writer Writer to copy state from
	 * @private
	 * @ignore
	 */
	function State(writer) {
	
	    /**
	     * Current head.
	     * @type {Writer.Op}
	     */
	    this.head = writer.head;
	
	    /**
	     * Current tail.
	     * @type {Writer.Op}
	     */
	    this.tail = writer.tail;
	
	    /**
	     * Current buffer length.
	     * @type {number}
	     */
	    this.len = writer.len;
	}
	
	Writer.State = State;
	
	var ArrayImpl = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	
	/**
	 * Constructs a new writer.
	 * When called as a function, returns an appropriate writer for the current environment.
	 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
	 * @exports Writer
	 * @constructor
	 */
	function Writer() {
	    if (!(this instanceof Writer))
	        return util.Buffer && new BufferWriter() || new Writer();
	
	    /**
	     * Current length.
	     * @type {number}
	     */
	    this.len = 0;
	
	    /**
	     * Operations head.
	     * @type {Object}
	     */
	    this.head = new Op(noop, 0, 0);
	
	    /**
	     * Operations tail
	     * @type {Object}
	     */
	    this.tail = this.head;
	
	    /**
	     * State stack.
	     * @type {Object[]}
	     */
	    this.stack = [];
	
	    // When a value is written, the writer calculates its byte length and puts it into a linked
	    // list of operations to perform when finish() is called. This both allows us to allocate
	    // buffers of the exact required size and reduces the amount of work we have to do compared
	    // to first calculating over objects and then encoding over objects. In our case, the encoding
	    // part is just a linked list walk calling linked operations with already prepared values.
	}
	
	/** @alias Writer.prototype */
	var WriterPrototype = Writer.prototype;
	
	/**
	 * Pushes a new operation to the queue.
	 * @param {function(Uint8Array, number, *)} fn Function to call
	 * @param {number} len Value byte length
	 * @param {number} val Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.push = function push(fn, len, val) {
	    var op = new Op(fn, val, len);
	    this.tail.next = op;
	    this.tail = op;
	    this.len += len;
	    return this;
	};
	
	function writeByte(buf, pos, val) {
	    buf[pos] = val & 255;
	}
	
	/**
	 * Writes a tag.
	 * @param {number} id Field id
	 * @param {number} wireType Wire type
	 * @returns {Writer} `this`
	 */
	WriterPrototype.tag = function write_tag(id, wireType) {
	    return this.push(writeByte, 1, id << 3 | wireType & 7);
	};
	
	function writeVarint32(buf, pos, val) {
	    while (val > 127) {
	        buf[pos++] = val & 127 | 128;
	        val >>>= 7;
	    }
	    buf[pos] = val;
	}
	
	/**
	 * Writes an unsigned 32 bit value as a varint.
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.uint32 = function write_uint32(value) {
	    value >>>= 0;
	    return this.push(writeVarint32,
	          value < 128       ? 1
	        : value < 16384     ? 2
	        : value < 2097152   ? 3
	        : value < 268435456 ? 4
	        :                     5
	    , value);
	};
	
	/**
	 * Writes a signed 32 bit value as a varint.
	 * @function
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.int32 = function write_int32(value) {
	    return value < 0
	        ? this.push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
	        : this.uint32(value);
	};
	
	/**
	 * Writes a 32 bit value as a varint, zig-zag encoded.
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.sint32 = function write_sint32(value) {
	    return this.uint32(value << 1 ^ value >> 31);
	};
	
	function writeVarint64(buf, pos, val) {
	    // tends to deoptimize. stays optimized when using bits directly.
	    while (val.hi || val.lo > 127) {
	        buf[pos++] = val.lo & 127 | 128;
	        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
	        val.hi >>>= 7;
	    }
	    buf[pos++] = val.lo;
	}
	
	/**
	 * Writes an unsigned 64 bit value as a varint.
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.uint64 = function write_uint64(value) {
	    var bits = LongBits.from(value);
	    return this.push(writeVarint64, bits.length(), bits);
	};
	
	/**
	 * Writes a signed 64 bit value as a varint.
	 * @function
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.int64 = WriterPrototype.uint64;
	
	/**
	 * Writes a signed 64 bit value as a varint, zig-zag encoded.
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.sint64 = function sint64(value) {
	    var bits = LongBits.from(value).zzEncode();
	    return this.push(writeVarint64, bits.length(), bits);
	};
	
	/**
	 * Writes a boolish value as a varint.
	 * @param {boolean} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.bool = function write_bool(value) {
	    return this.push(writeByte, 1, value ? 1 : 0);
	};
	
	function writeFixed32(buf, pos, val) {
	    buf[pos++] =  val         & 255;
	    buf[pos++] =  val >>> 8   & 255;
	    buf[pos++] =  val >>> 16  & 255;
	    buf[pos  ] =  val >>> 24  & 255;
	}
	
	/**
	 * Writes a 32 bit value as fixed 32 bits.
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.fixed32 = function write_fixed32(value) {
	    return this.push(writeFixed32, 4, value >>> 0);
	};
	
	/**
	 * Writes a 32 bit value as fixed 32 bits, zig-zag encoded.
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.sfixed32 = function write_sfixed32(value) {
	    return this.push(writeFixed32, 4, value << 1 ^ value >> 31);
	};
	
	/**
	 * Writes a 64 bit value as fixed 64 bits.
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.fixed64 = function write_fixed64(value) {
	    var bits = LongBits.from(value);
	    return this.push(writeFixed32, 4, bits.hi).push(writeFixed32, 4, bits.lo);
	};
	
	/**
	 * Writes a 64 bit value as fixed 64 bits, zig-zag encoded.
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.sfixed64 = function write_sfixed64(value) {
	    var bits = LongBits.from(value).zzEncode();
	    return this.push(writeFixed32, 4, bits.hi).push(writeFixed32, 4, bits.lo);
	};
	
	function writeFloat(buf, pos, val) {
	    ieee754.write(buf, val, pos, false, 23, 4);
	}
	
	/**
	 * Writes a float (32 bit).
	 * @function
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.float = function write_float(value) {
	    return this.push(writeFloat, 4, value);
	};
	
	function writeDouble(buf, pos, val) {
	    ieee754.write(buf, val, pos, false, 52, 8);
	}
	
	/**
	 * Writes a double (64 bit float).
	 * @function
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.double = function write_double(value) {
	    return this.push(writeDouble, 8, value);
	};
	
	var writeBytes = ArrayImpl.prototype.set
	    ? function writeBytes_set(buf, pos, val) { buf.set(val, pos); }
	    : function writeBytes_for(buf, pos, val) { for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i]; };
	
	/**
	 * Writes a sequence of bytes.
	 * @param {Uint8Array} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.bytes = function write_bytes(value) {
	    var len = value.length >>> 0;
	    return len
	        ? this.uint32(len).push(writeBytes, len, value)
	        : this.push(writeByte, 1, 0);
	};
	
	function writeString(buf, pos, val) {
	    for (var i = 0; i < val.length; ++i) {
	        var c1 = val.charCodeAt(i), c2;
	        if (c1 < 128) {
	            buf[pos++] = c1;
	        } else if (c1 < 2048) {
	            buf[pos++] = c1 >> 6 | 192;
	            buf[pos++] = c1 & 63 | 128;
	        } else if ((c1 & 0xFC00) === 0xD800 && i + 1 < val.length && ((c2 = val.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
	            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
	            ++i;
	            buf[pos++] = c1 >> 18      | 240;
	            buf[pos++] = c1 >> 12 & 63 | 128;
	            buf[pos++] = c1 >> 6  & 63 | 128;
	            buf[pos++] = c1       & 63 | 128;
	        } else {
	            buf[pos++] = c1 >> 12      | 224;
	            buf[pos++] = c1 >> 6  & 63 | 128;
	            buf[pos++] = c1       & 63 | 128;
	        }
	    }
	}
	
	function byteLength(val) {
	    var strlen = val.length >>> 0;
	    if (strlen) {
	        var len = 0;
	        for (var i = 0, c1; i < strlen; ++i) {
	            c1 = val.charCodeAt(i);
	            if (c1 < 128)
	                len += 1;
	            else if (c1 < 2048)
	                len += 2;
	            else if ((c1 & 0xFC00) === 0xD800 && i + 1 < strlen && (val.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
	                ++i;
	                len += 4;
	            } else
	                len += 3;
	        }
	        return len;
	    }
	    return 0;
	}
	
	/**
	 * Writes a string.
	 * @param {string} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.string = function write_string(value) {
	    var len = byteLength(value);
	    return len
	        ? this.uint32(len).push(writeString, len, value)
	        : this.push(writeByte, 1, 0);
	};
	
	/**
	 * Forks this writer's state by pushing it to a stack.
	 * Calling {@link Writer#ldelim}, {@link Writer#reset} or {@link Writer#finish} resets the writer to the previous state.
	 * @returns {Writer} `this`
	 */
	WriterPrototype.fork = function fork() {
	    this.stack.push(new State(this));
	    this.head = this.tail = new Op(noop, 0, 0);
	    this.len = 0;
	    return this;
	};
	
	/**
	 * Resets this instance to the last state.
	 * @returns {Writer} `this`
	 */
	WriterPrototype.reset = function reset() {
	    if (this.stack.length) {
	        var state = this.stack.pop();
	        this.head = state.head;
	        this.tail = state.tail;
	        this.len  = state.len;
	    } else {
	        this.head = this.tail = new Op(noop, 0, 0);
	        this.len  = 0;
	    }
	    return this;
	};
	
	/**
	 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
	 * @param {number} [id] Id with wire type 2 to prepend where applicable
	 * @returns {Writer} `this`
	 */
	WriterPrototype.ldelim = function ldelim(id) {
	    var head = this.head,
	        tail = this.tail,
	        len  = this.len;
	    this.reset();
	    if (id !== undefined)
	        this.tag(id, 2);
	    this.uint32(len);
	    this.tail.next = head.next; // skip noop
	    this.tail = tail;
	    this.len += len;
	    return this;
	};
	
	/**
	 * Finishes the current sequence of write operations and frees all resources.
	 * @returns {Uint8Array} Finished buffer
	 */
	WriterPrototype.finish = function finish() {
	    var head = this.head.next, // skip noop
	        buf  = new ArrayImpl(this.len),
	        pos  = 0;
	    this.reset();
	    while (head) {
	        head.fn(buf, pos, head.val);
	        pos += head.len;
	        head = head.next;
	    }
	    return buf;
	};
	
	/**
	 * Constructs a new buffer writer.
	 * @classdesc Wire format writer using node buffers.
	 * @exports BufferWriter
	 * @extends Writer
	 * @constructor
	 */
	function BufferWriter() {
	    Writer.call(this);
	}
	
	/** @alias BufferWriter.prototype */
	var BufferWriterPrototype = BufferWriter.prototype = Object.create(Writer.prototype);
	BufferWriterPrototype.constructor = BufferWriter;
	
	function writeFloatBuffer(buf, pos, val) {
	    buf.writeFloatLE(val, pos, true);
	}
	
	/**
	 * @override
	 */
	BufferWriterPrototype.float = function write_float_buffer(value) {
	    return this.push(writeFloatBuffer, 4, value);
	};
	
	function writeDoubleBuffer(buf, pos, val) {
	    buf.writeDoubleLE(val, pos, true);
	}
	
	/**
	 * @override
	 */
	BufferWriterPrototype.double = function write_double_buffer(value) {
	    return this.push(writeDoubleBuffer, 8, value);
	};
	
	function writeBytesBuffer(buf, pos, val) {
	    if (val.length)
	        val.copy(buf, pos, 0, val.length);
	}
	
	/**
	 * @override
	 */
	BufferWriterPrototype.bytes = function write_bytes_buffer(value) {
	    var len = value.length >>> 0;
	    return len
	        ? this.uint32(len).push(writeBytesBuffer, len, value)
	        : this.push(writeByte, 1, 0);
	};
	
	function writeStringBuffer(buf, pos, val) {
	    buf.write(val, pos);
	}
	
	/**
	 * @override
	 */
	BufferWriterPrototype.string = function write_string_buffer(value) {
	    var len = byteLength(value);
	    return len
	        ? this.uint32(len).push(writeStringBuffer, len, value)
	        : this.push(writeByte, 1, 0);
	};
	
	/**
	 * @override
	 */
	BufferWriterPrototype.finish = function finish_buffer() {
	    var head = this.head.next, // skip noop
	        buf  = util.Buffer.allocUnsafe && util.Buffer.allocUnsafe(this.len) || new util.Buffer(this.len),
	        pos  = 0;
	    this.reset();
	    while (head) {
	        head.fn(buf, pos, head.val);
	        pos += head.len;
	        head = head.next;
	    }
	    return buf;
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Decoder;
	
	var Enum   = __webpack_require__(32),
	    Reader = __webpack_require__(44),
	    types  = __webpack_require__(37),
	    util   = __webpack_require__(20);
	
	/**
	 * Constructs a new decoder for the specified message type.
	 * @classdesc Wire format decoder using code generation on top of reflection.
	 * @constructor
	 * @param {Type} type Message type
	 */
	function Decoder(type) {
	
	    /**
	     * Message type.
	     * @type {Type}
	     */
	    this.type = type;
	}
	
	/** @alias Decoder.prototype */
	var DecoderPrototype = Decoder.prototype;
	
	// This is here to mimic Type so that fallback functions work without having to bind()
	Object.defineProperties(DecoderPrototype, {
	
	    /**
	     * Fields of this decoder's message type by id for lookups.
	     * @name Decoder#fieldsById
	     * @type {Object.<number,Field>}
	     * @readonly
	     */
	    fieldsById: {
	        get: DecoderPrototype.getFieldsById = function getFieldsById() {
	            return this.type.getFieldsById();
	        }
	    },
	
	    /**
	     * With this decoder's message type registered constructor, if any registered, otherwise a generic constructor.
	     * @name Decoder#ctor
	     * @type {Prototype}
	     */
	    ctor: {
	        get: DecoderPrototype.getCtor = function getCtor() {
	            return this.type.getCtor();
	        }
	    }
	});
	
	/**
	 * Decodes a message of this decoder's message type.
	 * @param {Reader} reader Reader to decode from
	 * @param {number} [length] Length of the message, if known beforehand
	 * @returns {Prototype} Populated runtime message
	 */
	DecoderPrototype.decode = function decode_fallback(reader, length) { // codegen reference and fallback
	    /* eslint-disable no-invalid-this, block-scoped-var, no-redeclare */
	    var fields  = this.getFieldsById(),
	        reader  = reader instanceof Reader ? reader : Reader(reader),
	        limit   = length === undefined ? reader.len : reader.pos + length,
	        message = new (this.getCtor())();
	    while (reader.pos < limit) {
	        var tag      = reader.tag(),
	            field    = fields[tag.id].resolve(),
	            type     = field.resolvedType instanceof Enum ? "uint32" : field.type;
	        
	        // Known fields
	        if (field) {
	
	            // Map fields
	            if (field.map) {
	                var keyType = field.resolvedKeyType /* only valid is enum */ ? "uint32" : field.keyType,
	                    length  = reader.uint32();
	                var map = message[field.name] = {};
	                if (length) {
	                    length += reader.pos;
	                    var ks = [], vs = [];
	                    while (reader.pos < length) {
	                        if (reader.tag().id === 1)
	                            ks[ks.length] = reader[keyType]();
	                        else if (types.basic[type] !== undefined)
	                            vs[vs.length] = reader[type]();
	                        else
	                            vs[vs.length] = field.resolvedType.decode(reader, reader.uint32());
	                    }
	                    for (var i = 0; i < ks.length; ++i)
	                        map[typeof ks[i] === 'object' ? util.longToHash(ks[i]) : ks[i]] = vs[i];
	                }
	
	            // Repeated fields
	            } else if (field.repeated) {
	                var values = message[field.name] || (message[field.name] = []);
	
	                // Packed
	                if (field.packed && types.packed[type] !== undefined && tag.wireType === 2) {
	                    var plimit = reader.uint32() + reader.pos;
	                    while (reader.pos < plimit)
	                        values[values.length] = reader[type]();
	
	                // Non-packed
	                } else if (types.basic[type] !== undefined)
	                    values[values.length] = reader[type]();
	                  else
	                    values[values.length] = field.resolvedType.decode(reader, reader.uint32());
	
	            // Non-repeated
	            } else if (types.basic[type] !== undefined)
	                message[field.name] = reader[type]();
	              else
	                message[field.name] = field.resolvedType.decode(reader, reader.uint32());
	
	        // Unknown fields
	        } else
	            reader.skipType(tag.wireType);
	    }
	    return message;
	    /* eslint-enable no-invalid-this, block-scoped-var, no-redeclare */
	};
	
	/**
	 * Generates a decoder specific to this decoder's message type.
	 * @returns {function} Decoder function with an identical signature to {@link Decoder#decode}
	 */
	DecoderPrototype.generate = function generate() {
	    /* eslint-disable no-unexpected-multiline */
	    var fields = this.type.getFieldsArray();    
	    var gen = util.codegen("r", "l")
	
	    ("r instanceof Reader||(r=Reader(r))")
	    ("var c=l===undefined?r.len:r.pos+l,m=new (this.getCtor())()")
	    ("while(r.pos<c){")
	        ("var t=r.tag()")
	        ("switch(t.id){");
	    
	    for (var i = 0; i < fields.length; ++i) {
	        var field = fields[i].resolve(),
	            type  = field.resolvedType instanceof Enum ? "uint32" : field.type,
	            prop  = util.safeProp(field.name);
	        gen
	            ("case %d:", field.id);
	
	        if (field.map) {
	            var keyType = field.resolvedKeyType /* only valid is enum */ ? "uint32" : field.keyType;
	            gen
	                ("var n=r.uint32(),o={}")
	                ("if(n){")
	                    ("n+=r.pos")
	                    ("var k=[],v=[]")
	                    ("while(r.pos<n){")
	                        ("if(r.tag().id===1)")
	                            ("k[k.length]=r.%s()", keyType);
	
	                        if (types.basic[type] !== undefined) gen
	
	                        ("else")
	                            ("v[v.length]=r.%s()", type);
	
	                        else gen
	
	                        ("else")
	                            ("v[v.length]=types[%d].decode(r,r.uint32())", i, i);
	                    gen
	                    ("}")
	                    ("for(var i=0;i<k.length;++i)")
	                        ("o[typeof(k[i])==='object'?util.longToHash(k[i]):k[i]]=v[i]")
	                ("}")
	                ("m%s=o", prop);
	
	        } else if (field.repeated) { gen
	
	                ("m%s||(m%s=[])", prop, prop);
	
	            if (field.packed && types.packed[type] !== undefined) { gen
	
	                ("if(t.wireType===2){")
	                    ("var e=r.uint32()+r.pos")
	                    ("while(r.pos<e)")
	                        ("m%s[m%s.length]=r.%s()", prop, prop, type)
	                ("}else");
	            }
	
	            if (types.basic[type] !== undefined) gen
	
	                    ("m%s[m%s.length]=r.%s()", prop, prop, type);
	
	            else gen
	
	                    ("m%s[m%s.length]=types[%d].decode(r,r.uint32())", prop, prop, i, i);
	
	        } else if (types.basic[type] !== undefined) { gen
	
	                ("m%s=r.%s()", prop, type);
	
	        } else { gen
	
	                ("m%s=types[%d].decode(r,r.uint32())", prop, i, i);
	
	        } gen
	                ("break");
	    } gen
	            ("default:")
	                ("r.skipType(t.wireType)")
	                ("break")
	        ("}")
	    ("}")
	    ("return m");
	    return gen
	    .eof(this.type.getFullName() + "$decode", {
	        Reader : Reader,
	        types  : fields.map(function(fld) { return fld.resolvedType; }),
	        util   : util.toHash
	    });
	    /* eslint-enable no-unexpected-multiline */
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Verifier;
	
	var Enum = __webpack_require__(32),
	    Type = __webpack_require__(33),
	    util = __webpack_require__(20);
	
	/**
	 * Constructs a new verifier for the specified message type.
	 * @classdesc Runtime message verifier using code generation on top of reflection.
	 * @constructor
	 * @param {Type} type Message type
	 */
	function Verifier(type) {
	
	    /**
	     * Message type.
	     * @type {Type}
	     */
	    this.type = type;
	}
	
	/** @alias Verifier.prototype */
	var VerifierPrototype = Verifier.prototype;
	
	// This is here to mimic Type so that fallback functions work without having to bind()
	Object.defineProperties(VerifierPrototype, {
	
	    /**
	     * Fields of this verifier's message type as an array for iteration.
	     * @name Verifier#fieldsArray
	     * @type {Field[]}
	     * @readonly
	     */
	    fieldsArray: {
	        get: VerifierPrototype.getFieldsArray = function getFieldsArray() {
	            return this.type.getFieldsArray();
	        }
	    },
	
	    /**
	     * Full name of this verifier's message type.
	     * @name Verifier#fullName
	     * @type {string}
	     * @readonly
	     */
	    fullName: {
	        get: VerifierPrototype.getFullName = function getFullName() {
	            return this.type.getFullName();
	        }
	    }
	});
	
	/**
	 * Verifies a runtime message of this verifier's message type.
	 * @param {Prototype|Object} message Runtime message or plain object to verify
	 * @returns {?string} `null` if valid, otherwise the reason why it is not
	 */
	VerifierPrototype.verify = function verify_fallback(message) {
	    var fields = this.getFieldsArray(),
	        i = 0;
	    while (i < fields.length) {
	        var field = fields[i++].resolve(),
	            value = message[field.name];
	
	        if (value === undefined) {
	            if (field.required)
	                return "missing required field " + field.name + " in " + this.getFullName();
	
	        } else if (field.resolvedType instanceof Enum && field.resolvedType.getValuesById()[value] === undefined) {
	            return "invalid enum value " + field.name + " = " + value + " in " + this.getFullName();
	
	        } else if (field.resolvedType instanceof Type) {
	            if (!value && field.required)
	                return "missing required field " + field.name + " in " + this.getFullName();
	            var reason;
	            if ((reason = field.resolvedType.verify(value)) !== null)
	                return reason;
	        }
	    }
	    return null;
	};
	
	/**
	 * Generates a verifier specific to this verifier's message type.
	 * @returns {function} Verifier function with an identical signature to {@link Verifier#verify}
	 */
	VerifierPrototype.generate = function generate() {
	    /* eslint-disable no-unexpected-multiline */
	    var fields = this.type.getFieldsArray();
	    var gen = util.codegen("m");
	    var hasReasonVar = false;
	
	    for (var i = 0; i < fields.length; ++i) {
	        var field = fields[i].resolve(),
	            prop  = util.safeProp(field.name);
	        if (field.required) { gen
	
	            ("if(m%s===undefined)", prop)
	                ("return 'missing required field %s in %s'", field.name, this.type.getFullName());
	
	        } else if (field.resolvedType instanceof Enum) {
	            var values = util.toArray(field.resolvedType.values); gen
	
	            ("switch(m%s){", prop)
	                ("default:")
	                    ("return 'invalid enum value %s = '+m%s+' in %s'", field.name, prop, this.type.getFullName());
	
	            for (var j = 0, l = values.length; j < l; ++j) gen
	                ("case %d:", values[j]); gen
	            ("}");
	
	        } else if (field.resolvedType instanceof Type) {
	            if (field.required) gen
	
	            ("if(!m%s)", prop)
	                ("return 'missing required field %s in %s'", field.name, this.type.getFullName());
	
	            if (!hasReasonVar) { gen("var r"); hasReasonVar = true; } gen
	
	            ("if((r=types[%d].verify(m%s))!==null)", i, prop)
	                ("return r");
	        }
	    }
	    return gen
	    ("return null")
	
	    .eof(this.type.getFullName() + "$verify", {
	        types : fields.map(function(fld) { return fld.resolvedType; })
	    });
	    /* eslint-enable no-unexpected-multiline */
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = common;
	
	/**
	 * Provides common type definitions.
	 * Can also be used to provide additional google types or your own custom types.
	 * @param {string} name Short name as in `google/protobuf/[name].proto` or full file name
	 * @param {Object} json JSON definition within `google.protobuf` if a short name, otherwise the file's root definition
	 * @returns {undefined}
	 * @property {Object} google/protobuf/any.proto Any
	 * @property {Object} google/protobuf/duration.proto Duration
	 * @property {Object} google/protobuf/empty.proto Empty
	 * @property {Object} google/protobuf/struct.proto Struct, Value, NullValue and ListValue
	 * @property {Object} google/protobuf/timestamp.proto Timestamp
	 */
	function common(name, json) {
	    if (!/\/|\./.test(name)) {
	        name = "google/protobuf/" + name + ".proto";
	        json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
	    }
	    common[name] = json;
	}
	
	// Not provided because of limited use (feel free to discuss or to provide yourself):
	// - google/protobuf/descriptor.proto
	// - google/protobuf/field_mask.proto
	// - google/protobuf/source_context.proto
	// - google/protobuf/type.proto
	// - google/protobuf/wrappers.proto
	
	common("any", {
	    Any: {
	        fields: {
	            type_url: {
	                type: "string",
	                id: 1
	            },
	            value: {
	                type: "bytes",
	                id: 2
	            }
	        }
	    }
	});
	
	var timeType;
	
	common("duration", {
	    Duration: timeType = {
	        fields: {
	            seconds: {
	                type: "int64",
	                id: 1
	            },
	            nanos: {
	                type: "int32",
	                id: 2
	            }
	        }
	    }
	});
	
	common("timestamp", {
	    Timestamp: timeType
	});
	
	common("empty", {
	    Empty: {
	        fields: {}
	    }
	});
	
	common("struct", {
	    Struct: {
	        fields: {
	            fields: {
	                keyType: "string",
	                type: "Value",
	                id: 1
	            }
	        }
	    },
	    Value: {
	        oneofs: {
	            kind: {
	                oneof: [ "nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue" ]
	            }
	        },
	        fields: {
	            nullValue: {
	                type: "NullValue",
	                id: 1
	            },
	            numberValue: {
	                type: "double",
	                id: 2
	            },
	            stringValue: {
	                type: "string",
	                id: 3
	            },
	            boolValue: {
	                type: "bool",
	                id: 4
	            },
	            structValue: {
	                type: "Struct",
	                id: 5
	            },
	            listValue: {
	                type: "ListValue",
	                id: 6
	            }
	        }
	    },
	    NullValue: {
	        values: {
	            NULL_VALUE: 0
	        }
	    },
	    ListValue: {
	        fields: {
	            values: {
	                rule: "repeated",
	                type: "Value",
	                id: 1
	            }
	        }
	    }
	});


/***/ }
/******/ ]);
//# sourceMappingURL=libs.js.map