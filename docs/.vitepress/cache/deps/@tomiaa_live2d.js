import "./chunk-R647EDCJ.js";

// node_modules/@tomiaa/live2d/es/index.js
import "D:/code/Vue3_Project/vitepress-blog/node_modules/@tomiaa/live2d/es/style.css";

// node_modules/@tomiaa/hitokoto/es/index.js
import "D:/code/Vue3_Project/vitepress-blog/node_modules/@tomiaa/hitokoto/es/style.css";

// node_modules/@tomiaa/utils/es/create.js
var n = (t2, b4 = "", $3 = "", o6 = "") => (b4 && (t2 += `-${b4}`), $3 && (t2 += `__${$3}`), o6 && (t2 += `--${o6}`), t2);
var B = (t2) => ({
  b: (s3 = "") => n(t2, s3),
  e: (s3 = "") => s3 ? n(t2, "", s3) : "",
  m: (s3 = "") => s3 ? n(t2, "", "", s3) : "",
  be: (s3 = "", c4 = "") => s3 && c4 ? n(t2, s3, c4) : "",
  bm: (s3 = "", c4 = "") => s3 && c4 ? n(t2, s3, "", c4) : "",
  em: (s3 = "", c4 = "") => s3 && c4 ? n(t2, "", s3, c4) : "",
  bem: (s3 = "", c4 = "", _3 = "") => s3 && c4 && _3 ? n(t2, s3, c4, _3) : "",
  is: (s3, c4) => c4 ? `is-${s3}` : ""
});
var q = (t2) => {
  const b4 = `k-${t2}`;
  return B(b4);
};

// node_modules/@tomiaa/utils/es/random.js
var e = (o6, a5) => Math.floor(Math.random() * (a5 - o6 + 1)) + o6;

// node_modules/@vueuse/shared/index.mjs
var _a;
var isClient = typeof window !== "undefined";
var isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function identity(arg) {
  return arg;
}

// node_modules/@vueuse/core/index.mjs
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
var handlers = _global[globalKey];
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys = Object.keys(defaultState);
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a5, b4) => {
  for (var prop in b4 || (b4 = {}))
    if (__hasOwnProp.call(b4, prop))
      __defNormalProp(a5, prop, b4[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b4)) {
      if (__propIsEnum.call(b4, prop))
        __defNormalProp(a5, prop, b4[prop]);
    }
  return a5;
};
var _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
var TransitionPresets = __spreadValues({
  linear: identity
}, _TransitionPresets);

// node_modules/@tomiaa/utils/es/utils.js
var S = (e3, o6 = "") => {
  const t2 = (l4) => new Promise((r7, i5) => {
    let n7 = document.querySelector(`script[src="${o6 + l4}"]`);
    if (n7 && n7.hasAttribute("data-loaded"))
      return r7(n7);
    n7 = document.createElement("script"), n7.src = o6 + l4, document.body.appendChild(n7), n7.onload = n7.onreadystatechange = function() {
      (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (n7.setAttribute("data-loaded", "true"), r7(n7)), this.onload = this.onreadystatechange = null;
    }, n7.addEventListener("error", (s3) => i5(s3)), n7.addEventListener("abort", (s3) => i5(s3));
  });
  return Array.isArray(e3) ? Promise.all(e3.map(t2)) : t2(e3);
};
var k = ({ el: e3, adsorb: o6 = true, adsorbNum: t2 = 15 }) => {
  e3.addEventListener("mousedown", function(l4) {
    const r7 = l4.offsetX, i5 = l4.offsetY, n7 = function(a5) {
      let u4 = a5.clientX - r7, c4 = a5.clientY - i5;
      return o6 && (u4 <= t2 && (u4 = 0), u4 >= document.documentElement.clientWidth - this.offsetWidth - t2 && (u4 = document.documentElement.clientWidth - this.offsetWidth), c4 <= t2 && (c4 = 0), c4 >= document.documentElement.clientHeight - this.offsetHeight - t2 && (c4 = document.documentElement.clientHeight - this.offsetHeight)), this.style.right = "unset", this.style.bottom = "unset", this.style.left = u4 + "px", this.style.top = c4 + "px", false;
    };
    this.addEventListener("mousemove", n7);
    const s3 = () => (e3.removeEventListener("mousemove", n7), document.removeEventListener("mouseup", s3), false);
    return document.addEventListener("mouseup", s3), false;
  });
};

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction2(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString2 = typeOfTest("string");
var isFunction2 = typeOfTest("function");
var isNumber2 = typeOfTest("number");
var isObject2 = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject2(val) && isFunction2(val.pipe);
var isFormData = (thing) => {
  const pattern = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction2(thing.toString) && thing.toString() === pattern);
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i5;
  let l4;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i5 = 0, l4 = obj.length; i5 < l4; i5++) {
      fn.call(null, obj[i5], i5, obj);
    }
  } else {
    const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys2.length;
    let key;
    for (i5 = 0; i5 < len; i5++) {
      key = keys2[i5];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys2 = Object.keys(obj);
  let i5 = keys2.length;
  let _key;
  while (i5-- > 0) {
    _key = keys2[i5];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global2 = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global2;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i5 = 0, l4 = arguments.length; i5 < l4; i5++) {
    arguments[i5] && forEach(arguments[i5], assignValue);
  }
  return result;
}
var extend = (a5, b4, thisArg, { allOwnKeys } = {}) => {
  forEach(b4, (val, key) => {
    if (thisArg && isFunction2(val)) {
      a5[key] = bind(val, thisArg);
    } else {
      a5[key] = val;
    }
  }, { allOwnKeys });
  return a5;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i5;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i5 = props.length;
    while (i5-- > 0) {
      prop = props[i5];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i5 = thing.length;
  if (!isNumber2(i5))
    return null;
  const arr = new Array(i5);
  while (i5-- > 0) {
    arr[i5] = thing[i5];
  }
  return arr;
};
var isTypedArray = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m5, p1, p22) {
      return p1.toUpperCase() + p22;
    }
  );
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction2(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction2(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop2 = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction2(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i5) => {
    if (isObject2(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i5] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i5 + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i5] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString: isString2,
  isNumber: isNumber2,
  isBoolean,
  isObject: isObject2,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction: isFunction2,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop2,
  toFiniteNumber,
  findKey,
  global: _global2,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
};

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/null.js
var null_default = null;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i5) {
    token = removeBrackets(token);
    return !dots && i5 ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (null_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h3) {
      if (h3 !== null) {
        fn(h3);
      }
    });
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/platform/browser/classes/FormData.js
var FormData_default = typeof FormData !== "undefined" ? FormData : null;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/platform/browser/classes/Blob.js
var Blob_default = typeof Blob !== "undefined" ? Blob : null;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/platform/browser/index.js
var isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
})();
var isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var browser_default = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: Blob_default
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new browser_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (browser_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys2 = Object.keys(arr);
  let i5;
  const len = keys2.length;
  let key;
  for (i5 = 0; i5 < len; i5++) {
    key = keys2[i5];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/defaults/index.js
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e3) {
      if (e3.name !== "SyntaxError") {
        throw e3;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e3) {
        if (strictJSONParsing) {
          if (e3.name === "SyntaxError") {
            throw AxiosError_default.from(e3, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e3;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: browser_default.classes.FormData,
    Blob: browser_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils_default.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_default = defaults;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i5;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i5 = line.indexOf(":");
    key = line.substring(0, i5).trim().toLowerCase();
    val = line.substring(i5 + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value))
    return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w4, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys2 = Object.keys(this);
    let i5 = keys2.length;
    let deleted = false;
    while (i5--) {
      const key = keys2[i5];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed2 = new this(first);
    targets.forEach((target) => computed2.set(target));
    return computed2;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.freezeMethods(AxiosHeaders.prototype);
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/cookies.js
var cookies_default = browser_default.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils_default.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils_default.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils_default.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }()
);

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv2() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv2() {
    return function isURLSameOrigin() {
      return true;
    };
  }()
);

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i5 = tail;
    let bytesCount = 0;
    while (i5 !== head) {
      bytesCount += bytes[i5++];
      i5 = i5 % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return (e3) => {
    const loaded = e3.loaded;
    const total = e3.lengthComputable ? e3.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e3
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils_default.isFormData(requestData) && (browser_default.isStandardBrowserEnv || browser_default.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false);
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = config.transitional || transitional_default;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    if (browser_default.isStandardBrowserEnv) {
      const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: null_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e3) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    for (let i5 = 0; i5 < length; i5++) {
      nameOrAdapter = adapters[i5];
      if (adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError_default(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          "ERR_NOT_SUPPORT"
        );
      }
      throw new Error(
        utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    }
    if (!utils_default.isFunction(adapter)) {
      throw new TypeError("adapter is not a function");
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a5, b4, caseless) {
    if (!utils_default.isUndefined(b4)) {
      return getMergedValue(a5, b4, caseless);
    } else if (!utils_default.isUndefined(a5)) {
      return getMergedValue(void 0, a5, caseless);
    }
  }
  function valueFromConfig2(a5, b4) {
    if (!utils_default.isUndefined(b4)) {
      return getMergedValue(void 0, b4);
    }
  }
  function defaultToConfig2(a5, b4) {
    if (!utils_default.isUndefined(b4)) {
      return getMergedValue(void 0, b4);
    } else if (!utils_default.isUndefined(a5)) {
      return getMergedValue(void 0, a5);
    }
  }
  function mergeDirectKeys(a5, b4, prop) {
    if (prop in config2) {
      return getMergedValue(a5, b4);
    } else if (prop in config1) {
      return getMergedValue(void 0, a5);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a5, b4) => mergeDeepProperties(headersToObject(a5), headersToObject(b4), true)
  };
  utils_default.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/env/data.js
var VERSION = "1.3.5";

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i5) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i5 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version2, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version2 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version2 + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys2 = Object.keys(options);
  let i5 = keys2.length;
  while (i5-- > 0) {
    const opt = keys2[i5];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    contextHeaders && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i5 = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i5 < len) {
        promise = promise.then(chain[i5++], chain[i5++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i5 = 0;
    while (i5 < len) {
      const onFulfilled = requestInterceptorChain[i5++];
      const onRejected = requestInterceptorChain[i5++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i5 = 0;
    len = responseInterceptorChain.length;
    while (i5 < len) {
      promise = promise.then(responseInterceptorChain[i5++], responseInterceptorChain[i5++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i5 = token._listeners.length;
      while (i5-- > 0) {
        token._listeners[i5](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c4) {
      cancel = c4;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/@tomiaa/hitokoto/node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/@tomiaa/hitokoto/node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  mergeConfig: mergeConfig2
} = axios_default;

// node_modules/@tomiaa/hitokoto/es/index.js
var n6 = Object.defineProperty;
var r5 = (s3, t2, e3) => t2 in s3 ? n6(s3, t2, { enumerable: true, configurable: true, writable: true, value: e3 }) : s3[t2] = e3;
var i3 = (s3, t2, e3) => (r5(s3, typeof t2 != "symbol" ? t2 + "" : t2, e3), e3);
var a4 = axios_default.create({
  baseURL: "https://hitokoto.cn/api"
});
var o4 = q("hitokoto");
var d4 = '<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect width="48" height="48" fill="currentColor" fill-opacity="0.01" ></rect><path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z" fill="currentColor" stroke="#ff93a0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" ></path></svg>';
var k3 = class {
  constructor(t2) {
    i3(this, "data");
    i3(this, "options", {
      movingBorderColor: "#42b883",
      interval: 1e4
    });
    i3(this, "el");
    i3(this, "word", document.createElement("div"));
    i3(this, "author", document.createElement("div"));
    i3(this, "elLike", document.createElement("div"));
    i3(this, "timer", 0);
    Object.assign(this.options, t2);
    const { el: e3 } = t2;
    typeof e3 == "string" ? this.el = document.querySelector(e3) : this.el = e3, this.el.style.setProperty(
      "--moving-border-color",
      this.options.movingBorderColor
    ), this.el.classList.add(o4.b()), this.init(), this.getData(), this.el.addEventListener("mouseover", () => {
      clearTimeout(this.timer);
    }), this.el.addEventListener("mouseout", this.autoGet.bind(this));
  }
  init() {
    const t2 = document.createElement("div");
    t2.classList.add(o4.e("info")), t2.innerHTML = '<div class="left">『</div>', this.word.classList.add("word"), t2.innerHTML += '<div class="right">』</div>', t2.appendChild(this.word), this.el.appendChild(t2), this.author.classList.add(o4.e("author")), this.el.appendChild(this.author), this.elLike.classList.add(o4.e("like")), this.elLike.onclick = this.like.bind(this), this.elLike.innerHTML = d4, this.el.appendChild(this.elLike);
  }
  autoGet() {
    this.options.interval && (this.timer = window.setTimeout(
      this.getData.bind(this),
      this.options.interval
    ));
  }
  async getData() {
    window.clearTimeout(this.timer), this.elLike.style.color = "transparent";
    const { data: t2 } = await a4.get("https://v1.hitokoto.cn?encode=json");
    this.data = t2, this.word.innerText = t2.hitokoto, this.author.innerText = `——${t2.from_who || ""}「${t2.from || ""}」`, this.getLikeNum(), this.autoGet();
  }
  // 获取喜欢数量
  async getLikeNum() {
    const { data: t2 } = await a4(
      `/common/v1/like?sentence_uuid=${this.data.uuid}`
    );
    this.elLike.dataset.num = this.data.total = t2.data[0].total;
  }
  // 喜欢
  async like() {
    await a4(`/restful/v1/like?sentence_uuid=${this.data.uuid}`), this.elLike.style.color = "#f04a83", this.elLike.dataset.num = ++this.data.total + "";
  }
};

// node_modules/@tomiaa/live2d/es/modelList.js
var e2 = [
  {
    name: "shazuku",
    scale: 0.9,
    list: ["/live2d/shizuku/shizuku.model.json"]
  },
  {
    name: "snow_miku",
    list: ["/live2d/snow_miku/model.json"]
  },
  {
    name: "Tia",
    list: [
      "/live2d/Tia/index.json",
      "/live2d/Tia/index1.json",
      "/live2d/Tia/index2.json",
      "/live2d/Tia/index3.json",
      "/live2d/Tia/index4.json",
      "/live2d/Tia/index5.json"
    ]
  },
  {
    name: "Pio",
    list: [
      "/live2d/Pio/model.json",
      "/live2d/Pio/model1.json",
      "/live2d/Pio/model2.json",
      "/live2d/Pio/model3.json",
      "/live2d/Pio/model4.json",
      "/live2d/Pio/model5.json"
    ]
  },
  {
    name: "rem",
    list: ["/live2d/rem/model.json"]
  },
  {
    name: "dollsfrontline",
    position: {
      x: -40,
      y: 30
    },
    list: ["/live2d/dollsfrontline/fn57_2203/normal/model.json"]
  },
  {
    name: "Violet",
    position: {
      x: -30,
      y: -40
    },
    list: ["/live2d/Violet/14.json"]
  },
  {
    name: "95type_405",
    list: [
      "/live2d/dollsfrontline/95type_405/normal/model.json",
      "/live2d/dollsfrontline/95type_405/destroy/model.json"
    ]
  },
  {
    name: "Alice",
    list: ["/live2d/Alice/model.json"]
  },
  {
    name: "g36c_1202",
    position: {
      x: -60,
      y: 10
    },
    list: [
      "/live2d/dollsfrontline/g36c_1202/normal/model.json",
      "/live2d/dollsfrontline/g36c_1202/destroy/model.json"
    ]
  },
  {
    name: "g41_2401",
    position: {
      x: -30,
      y: 40
    },
    list: [
      "/live2d/dollsfrontline/g41_2401/normal/model.json",
      "/live2d/dollsfrontline/g41_2401/destroy/model.json"
    ]
  },
  {
    name: "hk416_805",
    position: {
      x: -40,
      y: 10
    },
    list: [
      "/live2d/dollsfrontline/hk416_805/normal/model.json",
      "/live2d/dollsfrontline/hk416_805/destroy/model.json"
    ]
  },
  {
    position: {
      x: -35
    },
    list: [
      "/live2d/dollsfrontline/rfb_1601/normal/model.json",
      "/live2d/dollsfrontline/rfb_1601/destroy/model.json"
    ]
  },
  {
    name: "sat8_2601",
    list: [
      "/live2d/dollsfrontline/sat8_2601/normal/model.json",
      "/live2d/dollsfrontline/sat8_2601/destroy/model.json"
    ]
  },
  {
    name: "kp31_310",
    position: {
      x: -50
    },
    list: [
      "/live2d/dollsfrontline/kp31_310/normal/model.json",
      "/live2d/dollsfrontline/kp31_310/destroy/model.json"
    ]
  },
  {
    name: "px4storm_2801",
    position: {
      x: -50,
      y: 35
    },
    list: [
      "/live2d/dollsfrontline/px4storm_2801/normal/model.json",
      "/live2d/dollsfrontline/px4storm_2801/destroy/model.json"
    ]
  },
  {
    name: "welrod_1401",
    position: {
      x: -40
    },
    list: [
      "/live2d/dollsfrontline/welrod_1401/normal/model.json",
      "/live2d/dollsfrontline/welrod_1401/destroy/model.json"
    ]
  },
  {
    name: "22_Q版",
    position: {
      x: -30,
      y: 44
    },
    list: [
      "/live2d/22/model.default.json",
      "/live2d/22/model.2016.xmas.1.json",
      "/live2d/22/model.2016.xmas.2.json",
      "/live2d/22/model.2017.cba-normal.json",
      "/live2d/22/model.2017.cba-super.json",
      "/live2d/22/model.2017.newyear.json",
      "/live2d/22/model.2017.school.json",
      "/live2d/22/model.2017.summer.normal.1.json",
      "/live2d/22/model.2017.summer.normal.2.json",
      "/live2d/22/model.2017.summer.super.1.json",
      "/live2d/22/model.2017.summer.super.2.json",
      "/live2d/22/model.2017.tomo-bukatsu.high.json",
      "/live2d/22/model.2017.tomo-bukatsu.low.json",
      "/live2d/22/model.2017.valley.json",
      "/live2d/22/model.2017.vdays.json",
      "/live2d/22/model.2018.bls-summer.json",
      "/live2d/22/model.2018.bls-winter.json",
      "/live2d/22/model.2018.lover.json",
      "/live2d/22/model.2018.spring.json"
    ]
  },
  {
    name: "33_Q版",
    position: {
      x: -30,
      y: 44
    },
    list: [
      "/live2d/33/model.default.json",
      "/live2d/33/model.2016.xmas.1.json",
      "/live2d/33/model.2016.xmas.2.json",
      "/live2d/33/model.2017.cba-normal.json",
      "/live2d/33/model.2017.cba-super.json",
      "/live2d/33/model.2017.newyear.json",
      "/live2d/33/model.2017.school.json",
      "/live2d/33/model.2017.summer.normal.1.json",
      "/live2d/33/model.2017.summer.normal.2.json",
      "/live2d/33/model.2017.summer.super.1.json",
      "/live2d/33/model.2017.summer.super.2.json",
      "/live2d/33/model.2017.tomo-bukatsu.high.json",
      "/live2d/33/model.2017.tomo-bukatsu.low.json",
      "/live2d/33/model.2017.valley.json",
      "/live2d/33/model.2017.vdays.json",
      "/live2d/33/model.2018.bls-summer.json",
      "/live2d/33/model.2018.bls-winter.json",
      "/live2d/33/model.2018.lover.json",
      "/live2d/33/model.2018.spring.json"
    ]
  },
  {
    name: "dsr50_2101",
    position: {
      x: -30,
      y: 10
    },
    list: [
      "/live2d/dollsfrontline/dsr50_2101/normal/model.json",
      "/live2d/dollsfrontline/dsr50_2101/destroy/model.json"
    ]
  },
  {
    name: "kp31_1103",
    position: {
      x: -40,
      y: 30
    },
    list: [
      "/live2d/dollsfrontline/kp31_1103/normal/model.json",
      "/live2d/dollsfrontline/kp31_1103/destroy/model.json"
    ]
  },
  {
    name: "ntw20_2301",
    position: {
      x: -30,
      y: 15
    },
    list: [
      "/live2d/dollsfrontline/ntw20_2301/normal/model.json",
      "/live2d/dollsfrontline/ntw20_2301/destroy/model.json"
    ]
  },
  {
    name: "ots14_3001",
    list: [
      "/live2d/dollsfrontline/ots14_3001/normal/model.json",
      "/live2d/dollsfrontline/ots14_3001/destroy/model.json"
    ]
  },
  {
    name: "type64-ar_2901",
    position: { x: -40, y: 10 },
    list: [
      "/live2d/dollsfrontline/type64-ar_2901/normal/model.json",
      "/live2d/dollsfrontline/type64-ar_2901/destroy/model.json"
    ]
  },
  {
    name: "Kobayaxi",
    position: {
      x: -75
    },
    list: ["/live2d/Kobayaxi/Kobayaxi.model.json"]
  },
  {
    name: "22_high",
    position: {
      x: -90
    },
    list: ["/live2d/22_high/model.json"]
  },
  {
    name: "33_high",
    position: {
      x: -90
    },
    list: ["/live2d/33_high/model.json"]
  },
  {
    name: "shield",
    list: [
      "/live2d/dollsfrontline/shield/model1.json",
      "/live2d/dollsfrontline/shield/model2.json",
      "/live2d/dollsfrontline/shield/model3.json"
    ]
  },
  {
    name: "bronya",
    list: ["/live2d/bronya/model.json"]
  },
  {
    name: "haru",
    position: {
      y: 90,
      x: -30
    },
    scale: 0.8,
    stretch: {
      height: 1.3
    },
    list: [
      "/live2d/haru/haru_01.model.json",
      "/live2d/haru/haru_02.model.json"
    ]
  },
  {
    name: "hijiki_tororo",
    list: [
      "/live2d/hijiki/hijiki.model.json",
      "/live2d/tororo/tororo.model.json"
    ]
  },
  {
    name: "wa2000_6",
    list: [
      "/live2d/dollsfrontline/wa2000_6/normal/model.json",
      "/live2d/dollsfrontline/wa2000_6/destroy/model.json"
    ]
  },
  {
    name: "katou_01",
    position: {
      x: -70,
      y: -55
    },
    list: ["/live2d/katou_01/katou_01.model.json"]
  },
  {
    name: "liang",
    position: {
      y: -80,
      x: -30
    },
    scale: 0.8,
    stretch: {
      height: 1.3
    },
    list: ["/live2d/liang/2.json"]
  },
  {
    name: "live_uu",
    position: {
      x: 50
    },
    scale: 1.3,
    stretch: { height: 1.3 },
    list: [
      "/live2d/live_uu/model.json"
    ]
  },
  {
    name: "mei",
    position: {
      x: -60
    },
    list: ["/live2d/mei/model.json"]
  },
  {
    name: "miku",
    position: {
      x: -40
    },
    list: ["/live2d/miku/miku.model.json"]
  },
  {
    name: "xiaomai",
    position: {
      x: -30
    },
    list: ["/live2d/xiaomai/xiaomai.model.json"]
  },
  {
    name: "Epsilon2.1",
    list: ["/live2d/Epsilon2.1/Epsilon2.1.model.json"]
  },
  {
    name: "platelet",
    list: ["/live2d/platelet/model.json"]
  },
  {
    name: "platelet-2-3",
    position: {
      x: 50
    },
    list: [
      "/live2d/platelet-2/model.json",
      "/live2d/platelet-3/kesyoban.model.json"
    ]
  },
  {
    name: "yuri",
    position: {
      y: 20
    },
    list: ["/live2d/yuri/model.json"]
  },
  {
    name: "blanc",
    position: {
      y: -168
    },
    stretch: {
      height: 1.2
    },
    list: [
      "/live2d/HyperdimensionNeptunia/blanc_classic/index.json",
      "/live2d/HyperdimensionNeptunia/blanc_normal/index.json",
      "/live2d/HyperdimensionNeptunia/blanc_swimwear/index.json"
    ]
  },
  {
    name: "histoire",
    position: {
      y: -200
    },
    stretch: {
      height: 1.1
    },
    list: [
      "/live2d/HyperdimensionNeptunia/histoire/index.json"
    ]
  },
  {
    name: "nepmaid",
    position: {
      y: -150
    },
    stretch: {
      height: 1.3
    },
    list: [
      "/live2d/HyperdimensionNeptunia/nepmaid/index.json",
      "/live2d/HyperdimensionNeptunia/nepnep/index.json",
      "/live2d/HyperdimensionNeptunia/nepswim/index.json",
      "/live2d/HyperdimensionNeptunia/neptune_classic/index.json",
      "/live2d/HyperdimensionNeptunia/neptune_santa/index.json"
    ]
  },
  {
    name: "noir",
    position: {
      y: -220
    },
    stretch: {
      height: 1.3
    },
    list: [
      "/live2d/HyperdimensionNeptunia/noir_classic/index.json",
      "/live2d/HyperdimensionNeptunia/noir/index.json",
      "/live2d/HyperdimensionNeptunia/noir_santa/index.json",
      "/live2d/HyperdimensionNeptunia/noireswim/index.json"
    ]
  },
  {
    name: "vert",
    position: {
      y: -190
    },
    stretch: {
      height: 1.3
    },
    list: [
      "/live2d/HyperdimensionNeptunia/vert_classic/index.json",
      "/live2d/HyperdimensionNeptunia/vert_normal/index.json",
      "/live2d/HyperdimensionNeptunia/vert_swimwear/index.json"
    ]
  },
  {
    name: "mashiro",
    position: {
      x: -80,
      y: -80
    },
    list: [
      "/live2d/mashiro/ryoufuku.model.json",
      "/live2d/mashiro/seifuku.model.json",
      "/live2d/mashiro/shifuku.model.json"
    ]
  },
  {
    name: "iio",
    position: {
      y: 65
    },
    list: ["/live2d/iio/iio.model.json"]
  },
  {
    name: "fox",
    position: {
      y: -65
    },
    list: ["/live2d/fox/model.json"]
  },
  {
    name: "himeko",
    position: {
      x: -90
    },
    list: ["/live2d/himeko/model.json"]
  },
  {
    name: "kiana",
    position: {
      x: -30
    },
    list: ["/live2d/kiana/model.json"]
  },
  {
    name: "redeemer",
    position: {
      x: -50,
      y: 20
    },
    list: ["/live2d/redeemer/model.json"]
  },
  {
    name: "sakura",
    position: {
      x: -40,
      y: 10
    },
    list: ["/live2d/sakura/model.json"]
  },
  {
    name: "seele",
    position: {
      x: -70
    },
    list: ["/live2d/seele/model.json"]
  },
  {
    name: "sin",
    position: {
      y: -35
    },
    list: ["/live2d/sin/model.json"]
  },
  {
    name: "theresa",
    scale: 0.8,
    position: {
      x: -60,
      y: -70
    },
    list: ["/live2d/theresa/model.json"]
  },
  {
    name: "illyasviel",
    position: {
      y: -180
    },
    stretch: {
      height: 1.8
    },
    list: ["/live2d/illyasviel/illyasviel.model.json"]
  },
  {
    name: "88type_1809",
    list: [
      "/live2d/dollsfrontline/88type_1809/normal/model.json",
      "/live2d/dollsfrontline/88type_1809/destroy/model.json"
    ]
  },
  {
    name: "ags-30",
    list: ["/live2d/dollsfrontline/ags-30/model.json"]
  },
  {
    name: "armor",
    list: [
      "/live2d/dollsfrontline/armor/model1.json",
      "/live2d/dollsfrontline/armor/model2.json",
      "/live2d/dollsfrontline/armor/model3.json"
    ]
  },
  {
    name: "command",
    list: [
      "/live2d/dollsfrontline/command/model1.json",
      "/live2d/dollsfrontline/command/model2.json",
      "/live2d/dollsfrontline/command/model3.json"
    ]
  },
  {
    name: "dsr50_1801",
    position: {
      x: -30
    },
    list: [
      "/live2d/dollsfrontline/dsr50_1801/normal/model.json",
      "/live2d/dollsfrontline/dsr50_1801/destroy/model.json"
    ]
  },
  {
    name: "fortress",
    position: {
      y: 30
    },
    list: [
      "/live2d/dollsfrontline/fortress/model1.json",
      "/live2d/dollsfrontline/fortress/model2.json",
      "/live2d/dollsfrontline/fortress/model3.json"
    ]
  },
  {
    name: "gelina",
    scale: 0.8,
    position: {
      y: -70,
      x: -40
    },
    list: ["/live2d/dollsfrontline/gelina/normal/model.json"]
  },
  {
    name: "golden",
    list: [
      "/live2d/dollsfrontline/golden/model1.json",
      "/live2d/dollsfrontline/golden/model2.json",
      "/live2d/dollsfrontline/golden/model3.json"
    ]
  },
  {
    name: "grizzly_2102",
    position: {
      x: -40
    },
    list: [
      "/live2d/dollsfrontline/grizzly_2102/normal/model.json",
      "/live2d/dollsfrontline/grizzly_2102/destroy/model.json"
    ]
  },
  {
    name: "kp31_3101",
    position: {
      x: -30
    },
    list: [
      "/live2d/dollsfrontline/kp31_3101/normal/model.json",
      "/live2d/dollsfrontline/kp31_3101/destroy/model.json"
    ]
  },
  {
    name: "mlemk1_604",
    position: {
      x: -60
    },
    list: ["/live2d/dollsfrontline/mlemk1_604/normal/model.json"]
  },
  {
    name: "mlemk1_604",
    list: ["/live2d/dollsfrontline/mlemk1_604/destroy/model.json"]
  },
  {
    name: "vector_1901",
    list: [
      "/live2d/dollsfrontline/vector_1901/normal/model.json",
      "/live2d/dollsfrontline/vector_1901/destroy/model.json"
    ]
  },
  {
    name: "date_16",
    position: {
      y: 20,
      x: -30
    },
    list: [
      "/live2d/date_16/date_16.model.json",
      "/live2d/hallo_16/hallo_16.model.json"
    ]
  },
  {
    name: "kanzaki",
    scale: 0.7,
    position: {
      y: -140,
      x: -40
    },
    stretch: {
      height: 1.1
    },
    list: ["/live2d/kanzaki/kanzaki.model.json"]
  },
  {
    name: "kuroko",
    position: {
      y: -120,
      x: -10
    },
    scale: 0.9,
    stretch: {
      height: 1.1
    },
    list: ["/live2d/kuroko/kuroko.model.json"]
  },
  {
    name: "len",
    position: {
      y: -140,
      x: -50
    },
    scale: 0.8,
    stretch: {
      height: 1.2
    },
    list: [
      "/live2d/len/len.model.json",
      "/live2d/len_impact/len_impact.model.json",
      "/live2d/len_space/len_space.model.json",
      "/live2d/len_swim/len_swim.model.json"
    ]
  },
  {
    name: "ryoufuku",
    position: {
      x: -80,
      y: -60
    },
    list: ["/live2d/ryoufuku/ryoufuku.model.json"]
  },
  {
    name: "saten",
    position: {
      y: -100,
      x: -30
    },
    scale: 0.8,
    stretch: {
      height: 1.1
    },
    list: ["/live2d/saten/saten.model.json"]
  },
  {
    name: "seifuku",
    position: {
      x: -70,
      y: -70
    },
    list: ["/live2d/seifuku/seifuku.model.json"]
  },
  {
    name: "shifuku",
    position: {
      x: -66,
      y: -65
    },
    list: [
      "/live2d/shifuku/shifuku.model.json",
      "/live2d/shifuku2/shifuku2.model.json"
    ]
  },
  {
    name: "uiharu",
    position: {
      y: -120,
      x: -30
    },
    scale: 0.8,
    stretch: {
      height: 1.1
    },
    list: ["/live2d/uiharu/uiharu.model.json"]
  },
  {
    name: "wed_16",
    position: {
      x: -40,
      y: 15
    },
    list: ["/live2d/wed_16/wed_16.model.json"]
  },
  {
    name: "z16",
    position: {
      x: -70
    },
    list: ["/live2d/z16/z16.model.json"]
  },
  {
    name: "sagiri",
    position: {
      x: -70
    },
    list: ["/live2d/sagiri/sagiri.model.json"]
  },
  {
    name: "makoto0",
    position: {
      x: -50,
      y: 10
    },
    list: ["/live2d/makoto0/makoto0.model.json"]
  },
  {
    name: "penchan",
    list: ["/live2d/penchan/penchan.model.json"]
  },
  {
    name: "bronya_1",
    list: ["/live2d/bronya_1/model.json"]
  },
  {
    name: "nepgear",
    position: {
      y: -220
    },
    scale: 0.9,
    stretch: {
      height: 1.5
    },
    list: [
      "/live2d/HyperdimensionNeptunia/nepgear/index.json",
      "/live2d/HyperdimensionNeptunia/nepgearswim/index.json",
      "/live2d/HyperdimensionNeptunia/nepgear_extra/index.json"
    ]
  },
  {
    name: "haruto",
    position: {
      x: -40
    },
    list: ["/live2d/haruto/haruto.model.json"]
  },
  {
    name: "hibiki",
    position: {
      x: -80
    },
    list: ["/live2d/hibiki/hibiki.model.json"]
  },
  {
    name: "index",
    position: {
      y: -90,
      x: -10
    },
    scale: 0.9,
    stretch: {
      height: 1.3
    },
    list: ["/live2d/index/model.json"]
  },
  {
    name: "YuzukiYukari",
    position: {
      x: -50
    },
    list: ["/live2d/YuzukiYukari/YuzukiYukari.model.json"]
  },
  {
    name: "izumi",
    list: ["/live2d/izumi/izumi.model.json"]
  },
  {
    name: "murakumo",
    stretch: {
      height: 0.9
    },
    position: {
      x: -15
    },
    list: ["/live2d/murakumo/index.json"]
  },
  {
    name: "wanko",
    position: {
      y: 300,
      x: 50
    },
    scale: 1.3,
    stretch: {
      height: 1.2
    },
    list: ["/live2d/wanko/wanko.model.json"]
  },
  {
    name: "tsumiki",
    position: {
      x: -60,
      y: 20
    },
    list: ["/live2d/tsumiki/tsumiki.model.json"]
  },
  {
    name: "unitychan",
    list: ["/live2d/unitychan/unitychan.model.json"]
  },
  {
    name: "m1928a1_1501",
    position: {
      x: -50,
      y: 10
    },
    list: [
      "/live2d/dollsfrontline/m1928a1_1501/normal/model.json",
      "/live2d/dollsfrontline/m1928a1_1501/destroy/model.json"
    ]
  },
  {
    name: "chiaki_kitty",
    position: {
      x: -60
    },
    list: ["/live2d/chiaki_kitty/chiaki_kitty.model.json"]
  },
  {
    name: "chitose",
    position: {
      x: -50
    },
    list: ["/live2d/chitose/chitose.model.json"]
  },
  {
    name: "stl",
    stretch: {
      height: 1.2
    },
    scale: 0.7,
    position: {
      x: -40,
      y: -140
    },
    list: ["/live2d/stl/stl.model.json"]
  },
  {
    name: "touma",
    position: {
      y: -180,
      x: -40
    },
    scale: 0.7,
    list: ["/live2d/touma/touma.model.json"]
  }
];
var i4 = [
  {
    name: "tianlangxing_3",
    list: ["/live2d_3/Azue Lane(JP)/tianlangxing_3/tianlangxing_3.model3.json"],
    version: 3
  },
  {
    name: "Bismarck (Majesty of the Ironblood)",
    scale: 1.5,
    position: {
      x: 40,
      y: 60
    },
    list: ["/live2d_3/Azue Lane(JP)/bisimai_2/bisimai_2.model3.json"],
    version: 3
  },
  {
    name: "Ark Royal (Banquet Guardian)",
    list: [
      "/live2d_3/Azue Lane(JP)/huangjiafangzhou_3/huangjiafangzhou_3.model3.json"
    ],
    version: 3
  },
  {
    name: "Taihou (Forbidden Feast)",
    list: ["/live2d_3/Azue Lane(JP)/dafeng_2/dafeng_2.model3.json"],
    version: 3
  },
  {
    name: "Atago (Midsummer March)",
    list: ["/live2d_3/Azue Lane(JP)/aidang_2/aidang_2.model3.json"],
    version: 3
  },
  {
    name: "Eldridge (New Year's Handholding)",
    list: ["/live2d_3/Azue Lane(JP)/aierdeliqi_4/aierdeliqi_4.model3.json"],
    version: 3
  },
  {
    name: "Eldridge",
    position: {
      x: 40,
      y: 50
    },
    scale: 1.3,
    list: ["/live2d_3/Azue Lane(JP)/aierdeliqi_5/aierdeliqi_5.model3.json"],
    version: 3
  },
  {
    name: "Emile Bertin (Côte d'Azur)",
    list: [
      "/live2d_3/Azue Lane(JP)/aimierbeierding_2/aimierbeierding_2.model3.json"
    ],
    version: 3
  },
  {
    name: "Centaur (Undine of the Beach)",
    list: ["/live2d_3/Azue Lane(JP)/banrenma_2/banrenma_2.model3.json"],
    version: 3
  },
  {
    scale: 1.2,
    position: {
      x: -30,
      y: 15
    },
    name: "Belfast (Iridescent Rose)",
    list: ["/live2d_3/Azue Lane(JP)/beierfasite_2/beierfasite_2.model3.json"],
    version: 3
  },
  {
    position: {
      y: 13
    },
    name: "Javelin",
    list: ["/live2d_3/Azue Lane(JP)/biaoqiang/biaoqiang.model3.json"],
    version: 3
  },
  {
    scale: 0.9,
    position: {
      x: -10
    },
    name: "Javelin (Beach Picnic!)",
    list: ["/live2d_3/Azue Lane(JP)/biaoqiang_3/biaoqiang_3.model3.json"],
    version: 3
  },
  {
    position: {
      x: -40,
      y: 20
    },
    name: "Fubuki (Music Pixy)",
    list: ["/live2d_3/Azue Lane(JP)/chuixue_3/chuixue_3.model3.json"],
    version: 3
  },
  {
    position: {
      y: 30
    },
    name: "Deutschland (Service Time?!)",
    list: ["/live2d_3/Azue Lane(JP)/deyizhi_3/deyizhi_3.model3.json"],
    version: 3
  },
  {
    name: "Unicorn (Amusement Park Date)",
    list: ["/live2d_3/Azue Lane(JP)/dujiaoshou_4/dujiaoshou_4.model3.json"],
    version: 3
  },
  {
    name: "Dunkerque (Summer Sucré)",
    list: ["/live2d_3/Azue Lane(JP)/dunkeerke_2/dunkeerke_2.model3.json"],
    version: 3
  },
  {
    name: "Honolulu (Summer Accident?!)",
    list: ["/live2d_3/Azue Lane(JP)/huonululu_3/huonululu_3.model3.json"],
    version: 3
  },
  {
    name: "Honolulu",
    list: ["/live2d_3/Azue Lane(JP)/huonululu_5/huonululu_5.model3.json"],
    version: 3
  },
  {
    name: "Cleveland (Gentry Knight)",
    list: ["/live2d_3/Azue Lane(JP)/kelifulan_3/kelifulan_3.model3.json"],
    version: 3
  },
  {
    position: {
      y: 10
    },
    name: "Laffey",
    list: ["/live2d_3/Azue Lane(JP)/lafei/lafei.model3.json"],
    version: 3
  },
  {
    name: "Laffey (New Year Rabbit)",
    list: ["/live2d_3/Azue Lane(JP)/lafei_4/lafei_4.model3.json"],
    version: 3
  },
  {
    name: "Ayanami",
    list: ["/live2d_3/Azue Lane(JP)/lingbo/lingbo.model3.json"],
    version: 3
  },
  {
    name: "Akashi",
    list: ["/live2d_3/Azue Lane(JP)/mingshi/mingshi.model3.json"],
    version: 3
  },
  {
    name: "Graf Zeppelin (Beachside Urd)",
    list: ["/live2d_3/Azue Lane(JP)/qibolin_2/qibolin_2.model3.json"],
    version: 3
  },
  {
    name: "St. Louis (Splendor of Spring)",
    list: ["/live2d_3/Azue Lane(JP)/shengluyisi_2/shengluyisi_2.model3.json"],
    version: 3
  },
  {
    name: "St. Louis (Tipsy Snow)",
    list: ["/live2d_3/Azue Lane(JP)/shengluyisi_3/shengluyisi_3.model3.json"],
    version: 3
  },
  {
    name: "Tai Yuan (Clamorous Tortoise)",
    list: ["/live2d_3/Azue Lane(JP)/taiyuan_2/taiyuan_2.model3.json"],
    version: 3
  },
  {
    name: "Tirpitz (Snow-melting Summer)",
    list: ["/live2d_3/Azue Lane(JP)/tierbici_2/tierbici_2.model3.json"],
    version: 3
  },
  {
    name: "Yukikaze",
    list: ["/live2d_3/Azue Lane(JP)/xuefeng/xuefeng.model3.json"],
    version: 3
  },
  {
    name: "Ibuki (Wish of a Snow Goddess)",
    list: ["/live2d_3/Azue Lane(JP)/yichui_2/yichui_2.model3.json"],
    version: 3
  },
  {
    position: {
      y: 10
    },
    name: "Z23",
    list: ["/live2d_3/Azue Lane(JP)/z23/z23.model3.json"],
    version: 3
  },
  {
    name: "Z46 (First Summer)",
    list: ["/live2d_3/Azue Lane(JP)/z46_2/z46_2.model3.json"],
    version: 3
  },
  {
    name: "Gneisenau",
    list: ["/live2d_3/Azue Lane(JP)/genaisennao_2/genaisennao_2.model3.json"],
    version: 3
  },
  {
    name: "Black Prince",
    list: ["/live2d_3/Azue Lane(JP)/heitaizi_2/heitaizi_2.model3.json"],
    version: 3
  },
  {
    position: {
      x: 50,
      y: 30
    },
    name: "Ning Hai",
    list: ["/live2d_3/Azue Lane(JP)/ninghai_4/ninghai_4.model3.json"],
    version: 3
  },
  {
    name: "Ping Hai",
    list: ["/live2d_3/Azue Lane(JP)/pinghai_4/pinghai_4.model3.json"],
    version: 3
  },
  {
    name: "Admiral Graf Spee",
    list: ["/live2d_3/Azue Lane(JP)/sipeibojue_5/sipeibojue_5.model3.json"],
    version: 3
  },
  {
    position: {
      y: -15
    },
    name: "Shōkaku",
    list: ["/live2d_3/Azue Lane(JP)/xianghe_2/xianghe_2.model3.json"],
    version: 3
  },
  {
    name: "Vampire",
    list: ["/live2d_3/Azue Lane(JP)/xixuegui_4/xixuegui_4.model3.json"],
    version: 3
  },
  {
    name: "Zara",
    list: ["/live2d_3/Azue Lane(JP)/zhala_2/zhala_2.model3.json"],
    version: 3
  }
];

// node_modules/@tomiaa/live2d/es/index.js
var f4 = Object.defineProperty;
var y3 = (l4, i5, t2) => i5 in l4 ? f4(l4, i5, { enumerable: true, configurable: true, writable: true, value: t2 }) : l4[i5] = t2;
var o5 = (l4, i5, t2) => (y3(l4, typeof i5 != "symbol" ? i5 + "" : i5, t2), t2);
var r6 = q("live2d");
var _2 = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path></svg>';
var b3 = '<svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"  > <path d="M42 19H5.99998" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> <path d="M30 7L42 19" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> <path d="M6.79897 29H42.799" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> <path d="M6.79895 29L18.799 41" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> </svg>';
var H2 = '<svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"  > <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7301 27.1255C22.7185 25.833 25.2815 25.833 27.2699 27.1255L42.8202 37.2331C43.556 37.7114 44 38.5295 44 39.4071C44 40.8391 42.8391 42 41.4071 42H6.59288C5.16087 42 4 40.8391 4 39.4071C4 38.5295 4.44395 37.7114 5.17979 37.2331L20.7301 27.1255Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> <path d="M24 25C24 25 30 16.3137 30 13C30 9.68629 27.3137 7 24 7C20.6863 7 18 9.68629 18 13" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> </svg>';
var E3 = class {
  constructor(i5) {
    o5(this, "options", {
      el: "#live2d",
      loadLive2d_2: true,
      loadLive2d_3: true,
      playLoadingAnimation: true,
      showLoading: true,
      showControl: true,
      iApplicationOptions: {},
      maxWidth: 400,
      minWidth: 200,
      aspectRatio: [10, 9],
      randomPeople: true,
      allowDrag: true,
      hitokoto: true
    });
    o5(this, "el");
    o5(this, "canvas");
    o5(this, "Live2DModel");
    o5(this, "app");
    o5(this, "loading", false);
    o5(this, "model");
    o5(this, "modelList", []);
    o5(this, "currentModelOption");
    o5(this, "personIndex", 0);
    o5(this, "clothingIndex", 0);
    o5(this, "elLoading");
    o5(this, "elControl");
    o5(this, "elSwitchPerson");
    o5(this, "elSwitchClothing");
    o5(this, "elHitokoto");
    o5(this, "hitokoto");
    Object.assign(this.options, i5);
    const { el: t2 } = this.options;
    typeof t2 == "string" ? this.el = document.querySelector(t2) : this.el = t2, this.el.classList.add(r6.b()), this.init();
  }
  get getJsBaseURL() {
    return this.options.jsBaseURL || "https://tomiaa12.github.io/live2d/public";
  }
  get getLive2d_2_ModelBaseURL() {
    return this.options.live2d_2_ModelBaseURL || this.getJsBaseURL;
  }
  get getLive2d_3_ModelBaseURL() {
    return this.options.live2d_2_ModelBaseURL || this.getJsBaseURL;
  }
  async init() {
    var i5, t2, s3, e3;
    await ((t2 = (i5 = this.options).beforeInit) == null ? void 0 : t2.call(i5, {
      options: this.options,
      modelList: this.modelList
    })), this.options.allowDrag && k({ el: this.el }), await this.loadJS(), this.createPIXI(), await this.loadModelList(), this.addLoadingSvg(), this.addControls(), this.setPersonIndex(), await this.loadModel(), window.addEventListener("resize", this.onresize.bind(this)), this.createHitokoto(), (e3 = (s3 = this.options).afterInit) == null || e3.call(s3, {
      options: this.options,
      modelList: this.modelList,
      currentModelOption: this.currentModelOption,
      Live2DModel: this.Live2DModel,
      app: this.app
    });
  }
  async loadJS() {
    await Promise.all([
      S(this.getJsBaseURL + "/js/pixi.min.js"),
      S(this.getJsBaseURL + "/js/live2d.min.js"),
      S(this.getJsBaseURL + "/js/live2dcubismcore.min.js")
    ]), await S(this.getJsBaseURL + "/js/index.min.js"), this.Live2DModel = window.PIXI.live2d.Live2DModel;
  }
  createPIXI() {
    this.canvas || (this.canvas = document.createElement("canvas"), this.el.appendChild(this.canvas), this.canvas.addEventListener("click", this.animation.bind(this))), this.app = new window.PIXI.Application({
      view: this.canvas,
      width: 400,
      height: 300,
      backgroundAlpha: 0,
      ...this.options.iApplicationOptions
    });
  }
  async loadModelList() {
    if (!this.options.loadLive2d_2 && !this.options.loadLive2d_3)
      return console.error("loadLive2d_2与loadLive2d_3至少加载一种!"), Promise.reject();
    this.options.loadLive2d_3 && (this.modelList = [...this.modelList, ...i4]), this.options.loadLive2d_2 && (this.modelList = [...this.modelList, ...e2]);
  }
  addLoadingSvg() {
    this.options.showLoading && (this.elLoading = document.createElement("i"), this.elLoading.innerHTML = _2, this.elLoading.classList.add(r6.e("loading")), this.el.appendChild(this.elLoading));
  }
  addControls() {
    this.options.showControl && (this.elControl = document.createElement("div"), this.elControl.classList.add(r6.e("control")), this.elSwitchPerson = document.createElement("i"), this.elSwitchPerson.innerHTML = b3, this.elSwitchPerson.setAttribute("data-tip", "切换人物"), this.elSwitchPerson.addEventListener("click", this.switchPerson.bind(this)), this.elControl.appendChild(this.elSwitchPerson), this.elSwitchClothing = document.createElement("i"), this.elSwitchClothing.innerHTML = H2, this.elSwitchClothing.setAttribute("data-tip", "更换服装"), this.elSwitchClothing.addEventListener(
      "click",
      this.switchClothing.bind(this)
    ), this.elControl.appendChild(this.elSwitchClothing), this.el.appendChild(this.elControl));
  }
  async loadModel() {
    var t2, s3, e3;
    this.loading = true, this.el.style.pointerEvents = "none", this.elLoading && (this.elLoading.style.display = "block"), this.elControl && (this.elControl.style.display = "none"), this.elHitokoto && (this.elHitokoto.style.display = "none", (t2 = this.hitokoto) == null || t2.getData()), (e3 = (s3 = this.model) == null ? void 0 : s3.destroy) == null || e3.call(s3);
    const i5 = this.currentModelOption.version === 3 ? this.getLive2d_3_ModelBaseURL : this.getLive2d_2_ModelBaseURL;
    try {
      this.model = await this.Live2DModel.from(
        i5 + this.currentModelOption.list[this.clothingIndex]
      );
    } catch {
      this.elLoading && (this.elLoading.style.display = "none");
    }
    this.loading = false, this.el.style.pointerEvents = "auto", this.elLoading && (this.elLoading.style.display = "none"), this.elControl && (this.elControl.style.display = "block"), this.elHitokoto && (this.elHitokoto.style.display = "block"), this.app.stage.addChild(this.model), this.onresize(), this.options.playLoadingAnimation && this.animation("login");
  }
  setPersonIndex() {
    this.options.randomPeople ? this.personIndex = e(0, this.modelList.length - 1) : ++this.personIndex >= this.modelList.length && (this.personIndex = 0), this.currentModelOption = this.modelList[this.personIndex], this.elSwitchClothing.style.display = this.currentModelOption.list.length > 1 ? "block" : "none";
  }
  onresize() {
    var p4, g5, L3, w4, m5, v3, k4, u4;
    const i5 = this.model;
    if (!i5)
      return;
    const t2 = this.currentModelOption, s3 = this.app;
    let e3 = window.innerWidth * 0.3;
    e3 > this.options.maxWidth && (e3 = this.options.maxWidth), e3 < this.options.minWidth && (e3 = this.options.minWidth);
    const n7 = e3 / (((p4 = t2 == null ? void 0 : t2.aspectRatio) == null ? void 0 : p4[0]) || this.options.aspectRatio[0]) * (((g5 = t2 == null ? void 0 : t2.aspectRatio) == null ? void 0 : g5[1]) || this.options.aspectRatio[1]);
    s3.view.style.width = e3 + "px", s3.view.style.height = n7 + "px", s3.renderer.resize(e3, n7);
    const c4 = i5.width > i5.height ? e3 / i5.width : n7 / i5.height;
    i5.width *= c4, i5.height *= c4;
    let a5, d5;
    typeof (t2 == null ? void 0 : t2.scale) == "number" ? a5 = d5 = t2 == null ? void 0 : t2.scale : (a5 = (L3 = t2 == null ? void 0 : t2.scale) == null ? void 0 : L3.x, d5 = (w4 = t2 == null ? void 0 : t2.scale) == null ? void 0 : w4.y), i5.width *= ((m5 = t2 == null ? void 0 : t2.stretch) == null ? void 0 : m5.width) || 1, i5.height *= ((v3 = t2 == null ? void 0 : t2.stretch) == null ? void 0 : v3.height) || 1, i5.scale = new window.PIXI.Point(
      i5.scale.x * (a5 || 1),
      i5.scale.y * (d5 || 1)
    ), i5.position = new window.PIXI.Point(
      e3 - i5.width + (((k4 = t2 == null ? void 0 : t2.position) == null ? void 0 : k4.x) || 0),
      n7 - i5.height + (((u4 = t2 == null ? void 0 : t2.position) == null ? void 0 : u4.y) || 0)
    );
  }
  animation(i5) {
    const t2 = this.model;
    if (typeof i5 == "string") {
      t2.motion(i5);
      return;
    }
    const [s3] = t2.hitTest((i5 == null ? void 0 : i5.offsetX) || 0, (i5 == null ? void 0 : i5.offsetY) || 0), e3 = Object.keys(
      t2.internalModel.motionManager.definitions
    ).filter((n7) => n7 !== "login");
    s3 ? t2.motion(e3.filter((n7) => n7.includes(s3))[0]) : t2.motion(e3[e(0, e3.length - 1)]);
  }
  switchPerson() {
    event == null || event.stopPropagation(), this.clothingIndex = 0, this.setPersonIndex(), this.loadModel();
  }
  switchClothing() {
    event == null || event.stopPropagation(), ++this.clothingIndex >= this.currentModelOption.list.length && (this.clothingIndex = 0), this.loadModel();
  }
  createHitokoto() {
    this.options.hitokoto && (this.elHitokoto = document.createElement("div"), this.el.appendChild(this.elHitokoto), this.elHitokoto.addEventListener("mousedown", (i5) => {
      i5.stopPropagation();
    }), this.hitokoto = new k3({
      el: this.elHitokoto,
      ...this.options.hitokotoOptions
    }));
  }
  destroy() {
    window.removeEventListener("resize", this.onresize), this.el.innerHTML = "";
  }
};
export {
  E3 as Live2d,
  E3 as default
};
//# sourceMappingURL=@tomiaa_live2d.js.map
