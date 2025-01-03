import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@base2/pretty-print-object/dist/index.js
var require_dist = __commonJS({
  "node_modules/@base2/pretty-print-object/dist/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prettyPrint = void 0;
    var seen = [];
    function isObj(value) {
      var type = typeof value;
      return value !== null && (type === "object" || type === "function");
    }
    function isRegexp(value) {
      return Object.prototype.toString.call(value) === "[object RegExp]";
    }
    function getOwnEnumPropSymbols(object) {
      return Object.getOwnPropertySymbols(object).filter(function(keySymbol) {
        return Object.prototype.propertyIsEnumerable.call(object, keySymbol);
      });
    }
    function prettyPrint2(input, options, pad) {
      if (pad === void 0) {
        pad = "";
      }
      var defaultOptions = {
        indent: "	",
        singleQuotes: true
      };
      var combinedOptions = __assign(__assign({}, defaultOptions), options);
      var tokens;
      if (combinedOptions.inlineCharacterLimit === void 0) {
        tokens = {
          newLine: "\n",
          newLineOrSpace: "\n",
          pad,
          indent: pad + combinedOptions.indent
        };
      } else {
        tokens = {
          newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
          newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
          pad: "@@__PRETTY_PRINT_PAD__@@",
          indent: "@@__PRETTY_PRINT_INDENT__@@"
        };
      }
      var expandWhiteSpace = function(string) {
        if (combinedOptions.inlineCharacterLimit === void 0) {
          return string;
        }
        var oneLined = string.replace(new RegExp(tokens.newLine, "g"), "").replace(new RegExp(tokens.newLineOrSpace, "g"), " ").replace(new RegExp(tokens.pad + "|" + tokens.indent, "g"), "");
        if (oneLined.length <= combinedOptions.inlineCharacterLimit) {
          return oneLined;
        }
        return string.replace(new RegExp(tokens.newLine + "|" + tokens.newLineOrSpace, "g"), "\n").replace(new RegExp(tokens.pad, "g"), pad).replace(new RegExp(tokens.indent, "g"), pad + combinedOptions.indent);
      };
      if (seen.indexOf(input) !== -1) {
        return '"[Circular]"';
      }
      if (input === null || input === void 0 || typeof input === "number" || typeof input === "boolean" || typeof input === "function" || typeof input === "symbol" || isRegexp(input)) {
        return String(input);
      }
      if (input instanceof Date) {
        return "new Date('".concat(input.toISOString(), "')");
      }
      if (Array.isArray(input)) {
        if (input.length === 0) {
          return "[]";
        }
        seen.push(input);
        var ret = "[" + tokens.newLine + input.map(function(el, i) {
          var eol = input.length - 1 === i ? tokens.newLine : "," + tokens.newLineOrSpace;
          var value;
          if (combinedOptions.transform) {
            value = combinedOptions.transform(input, i, function() {
              return prettyPrint2(el, combinedOptions, pad + combinedOptions.indent);
            });
          } else {
            value = prettyPrint2(el, combinedOptions, pad + combinedOptions.indent);
          }
          return tokens.indent + value + eol;
        }).join("") + tokens.pad + "]";
        seen.pop();
        return expandWhiteSpace(ret);
      }
      if (isObj(input)) {
        var objKeys_1 = __spreadArray(__spreadArray([], Object.keys(input), true), getOwnEnumPropSymbols(input), true);
        if (combinedOptions.filter) {
          objKeys_1 = objKeys_1.filter(function(el) {
            return combinedOptions.filter && combinedOptions.filter(input, el);
          });
        }
        if (objKeys_1.length === 0) {
          return "{}";
        }
        seen.push(input);
        var ret = "{" + tokens.newLine + objKeys_1.map(function(el, i) {
          var eol = objKeys_1.length - 1 === i ? tokens.newLine : "," + tokens.newLineOrSpace;
          var isSymbol = typeof el === "symbol";
          var isClassic = !isSymbol && /^[a-z$_][a-z$_0-9]*$/i.test(el.toString());
          var key = isSymbol || isClassic ? el : prettyPrint2(el, combinedOptions);
          var value;
          if (combinedOptions.transform) {
            value = combinedOptions.transform(input, el, function() {
              return prettyPrint2(input[el], combinedOptions, pad + combinedOptions.indent);
            });
          } else {
            value = prettyPrint2(input[el], combinedOptions, pad + combinedOptions.indent);
          }
          return tokens.indent + String(key) + ": " + value + eol;
        }).join("") + tokens.pad + "}";
        seen.pop();
        return expandWhiteSpace(ret);
      }
      input = String(input).replace(/[\r\n]/g, function(x) {
        return x === "\n" ? "\\n" : "\\r";
      });
      if (!combinedOptions.singleQuotes) {
        input = input.replace(/"/g, '\\"');
        return '"'.concat(input, '"');
      }
      input = input.replace(/\\?'/g, "\\'");
      return "'".concat(input, "'");
    }
    exports.prettyPrint = prettyPrint2;
  }
});

// node_modules/react-element-to-jsx-string/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-element-to-jsx-string/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider2(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy2(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo2(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler2(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode2(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense2(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider2;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef2;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy2;
        exports.isMemo = isMemo2;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler2;
        exports.isStrictMode = isStrictMode2;
        exports.isSuspense = isSuspense2;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-element-to-jsx-string/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-element-to-jsx-string/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/is-plain-object/dist/is-plain-object.mjs
function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
  var ctor, prot;
  if (isObject(o) === false) return false;
  ctor = o.constructor;
  if (ctor === void 0) return true;
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}

// node_modules/react-element-to-jsx-string/dist/esm/index.js
var React = __toESM(require_react());
var import_react = __toESM(require_react());
var import_pretty_print_object = __toESM(require_dist());
var import_react_is = __toESM(require_react_is());
var spacer = function(times, tabStop) {
  if (times === 0) {
    return "";
  }
  return new Array(times * tabStop).fill(" ").join("");
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function safeSortObject(value, seen) {
  if (value === null || _typeof(value) !== "object") {
    return value;
  }
  if (value instanceof Date || value instanceof RegExp || React.isValidElement(value)) {
    return value;
  }
  seen.add(value);
  if (Array.isArray(value)) {
    return value.map(function(v) {
      return safeSortObject(v, seen);
    });
  }
  return Object.keys(value).sort().reduce(function(result, key) {
    if (key === "_owner") {
      return result;
    }
    if (key === "current" || seen.has(value[key])) {
      result[key] = "[Circular]";
    } else {
      result[key] = safeSortObject(value[key], seen);
    }
    return result;
  }, {});
}
function sortObject(value) {
  return safeSortObject(value, /* @__PURE__ */ new WeakSet());
}
var createStringTreeNode = function createStringTreeNode2(value) {
  return {
    type: "string",
    value
  };
};
var createNumberTreeNode = function createNumberTreeNode2(value) {
  return {
    type: "number",
    value
  };
};
var createReactElementTreeNode = function createReactElementTreeNode2(displayName, props, defaultProps, childrens) {
  return {
    type: "ReactElement",
    displayName,
    props,
    defaultProps,
    childrens
  };
};
var createReactFragmentTreeNode = function createReactFragmentTreeNode2(key, childrens) {
  return {
    type: "ReactFragment",
    key,
    childrens
  };
};
var supportFragment = Boolean(import_react.Fragment);
var getFunctionTypeName = function getFunctionTypeName2(functionType) {
  if (!functionType.name || functionType.name === "_default") {
    return "No Display Name";
  }
  return functionType.name;
};
var getWrappedComponentDisplayName = function getWrappedComponentDisplayName2(Component) {
  switch (true) {
    case Boolean(Component.displayName):
      return Component.displayName;
    case Component.$$typeof === import_react_is.Memo:
      return getWrappedComponentDisplayName2(Component.type);
    case Component.$$typeof === import_react_is.ForwardRef:
      return getWrappedComponentDisplayName2(Component.render);
    default:
      return getFunctionTypeName(Component);
  }
};
var getReactElementDisplayName = function getReactElementDisplayName2(element) {
  switch (true) {
    case typeof element.type === "string":
      return element.type;
    case typeof element.type === "function":
      if (element.type.displayName) {
        return element.type.displayName;
      }
      return getFunctionTypeName(element.type);
    case (0, import_react_is.isForwardRef)(element):
    case (0, import_react_is.isMemo)(element):
      return getWrappedComponentDisplayName(element.type);
    case (0, import_react_is.isContextConsumer)(element):
      return "".concat(element.type._context.displayName || "Context", ".Consumer");
    case (0, import_react_is.isContextProvider)(element):
      return "".concat(element.type._context.displayName || "Context", ".Provider");
    case (0, import_react_is.isLazy)(element):
      return "Lazy";
    case (0, import_react_is.isProfiler)(element):
      return "Profiler";
    case (0, import_react_is.isStrictMode)(element):
      return "StrictMode";
    case (0, import_react_is.isSuspense)(element):
      return "Suspense";
    default:
      return "UnknownElementType";
  }
};
var noChildren = function noChildren2(propsValue, propName) {
  return propName !== "children";
};
var onlyMeaningfulChildren = function onlyMeaningfulChildren2(children) {
  return children !== true && children !== false && children !== null && children !== "";
};
var filterProps = function filterProps2(originalProps, cb) {
  var filteredProps = {};
  Object.keys(originalProps).filter(function(key) {
    return cb(originalProps[key], key);
  }).forEach(function(key) {
    return filteredProps[key] = originalProps[key];
  });
  return filteredProps;
};
var parseReactElement = function parseReactElement2(element, options) {
  var _options$displayName = options.displayName, displayNameFn = _options$displayName === void 0 ? getReactElementDisplayName : _options$displayName;
  if (typeof element === "string") {
    return createStringTreeNode(element);
  } else if (typeof element === "number") {
    return createNumberTreeNode(element);
  } else if (!import_react.default.isValidElement(element)) {
    throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(_typeof(element), "`"));
  }
  var displayName = displayNameFn(element);
  var props = filterProps(element.props, noChildren);
  if (element.ref !== null) {
    props.ref = element.ref;
  }
  var key = element.key;
  if (typeof key === "string" && key.search(/^\./)) {
    props.key = key;
  }
  var defaultProps = filterProps(element.type.defaultProps || {}, noChildren);
  var childrens = import_react.default.Children.toArray(element.props.children).filter(onlyMeaningfulChildren).map(function(child) {
    return parseReactElement2(child, options);
  });
  if (supportFragment && element.type === import_react.Fragment) {
    return createReactFragmentTreeNode(key, childrens);
  }
  return createReactElementTreeNode(displayName, props, defaultProps, childrens);
};
function noRefCheck() {
}
var inlineFunction = function inlineFunction2(fn) {
  return fn.toString().split("\n").map(function(line) {
    return line.trim();
  }).join("");
};
var preserveFunctionLineBreak = function preserveFunctionLineBreak2(fn) {
  return fn.toString();
};
var defaultFunctionValue = inlineFunction;
var formatFunction = function(fn, options) {
  var _options$functionValu = options.functionValue, functionValue = _options$functionValu === void 0 ? defaultFunctionValue : _options$functionValu, showFunctions = options.showFunctions;
  if (!showFunctions && functionValue === defaultFunctionValue) {
    return functionValue(noRefCheck);
  }
  return functionValue(fn);
};
var formatComplexDataStructure = function(value, inline, lvl, options) {
  var normalizedValue = sortObject(value);
  var stringifiedValue = (0, import_pretty_print_object.prettyPrint)(normalizedValue, {
    transform: function transform(currentObj, prop, originalResult) {
      var currentValue = currentObj[prop];
      if (currentValue && (0, import_react.isValidElement)(currentValue)) {
        return formatTreeNode(parseReactElement(currentValue, options), true, lvl, options);
      }
      if (typeof currentValue === "function") {
        return formatFunction(currentValue, options);
      }
      return originalResult();
    }
  });
  if (inline) {
    return stringifiedValue.replace(/\s+/g, " ").replace(/{ /g, "{").replace(/ }/g, "}").replace(/\[ /g, "[").replace(/ ]/g, "]");
  }
  return stringifiedValue.replace(/\t/g, spacer(1, options.tabStop)).replace(/\n([^$])/g, "\n".concat(spacer(lvl + 1, options.tabStop), "$1"));
};
var escape$1 = function escape(s) {
  return s.replace(/"/g, "&quot;");
};
var formatPropValue = function formatPropValue2(propValue, inline, lvl, options) {
  if (typeof propValue === "number") {
    return "{".concat(String(propValue), "}");
  }
  if (typeof propValue === "string") {
    return '"'.concat(escape$1(propValue), '"');
  }
  if (_typeof(propValue) === "symbol") {
    var symbolDescription = propValue.valueOf().toString().replace(/Symbol\((.*)\)/, "$1");
    if (!symbolDescription) {
      return "{Symbol()}";
    }
    return "{Symbol('".concat(symbolDescription, "')}");
  }
  if (typeof propValue === "function") {
    return "{".concat(formatFunction(propValue, options), "}");
  }
  if ((0, import_react.isValidElement)(propValue)) {
    return "{".concat(formatTreeNode(parseReactElement(propValue, options), true, lvl, options), "}");
  }
  if (propValue instanceof Date) {
    if (isNaN(propValue.valueOf())) {
      return "{new Date(NaN)}";
    }
    return '{new Date("'.concat(propValue.toISOString(), '")}');
  }
  if (isPlainObject(propValue) || Array.isArray(propValue)) {
    return "{".concat(formatComplexDataStructure(propValue, inline, lvl, options), "}");
  }
  return "{".concat(String(propValue), "}");
};
var formatProp = function(name, hasValue, value, hasDefaultValue, defaultValue, inline, lvl, options) {
  if (!hasValue && !hasDefaultValue) {
    throw new Error('The prop "'.concat(name, '" has no value and no default: could not be formatted'));
  }
  var usedValue = hasValue ? value : defaultValue;
  var useBooleanShorthandSyntax = options.useBooleanShorthandSyntax, tabStop = options.tabStop;
  var formattedPropValue = formatPropValue(usedValue, inline, lvl, options);
  var attributeFormattedInline = " ";
  var attributeFormattedMultiline = "\n".concat(spacer(lvl + 1, tabStop));
  var isMultilineAttribute = formattedPropValue.includes("\n");
  if (useBooleanShorthandSyntax && formattedPropValue === "{false}" && !hasDefaultValue) {
    attributeFormattedInline = "";
    attributeFormattedMultiline = "";
  } else if (useBooleanShorthandSyntax && formattedPropValue === "{true}") {
    attributeFormattedInline += "".concat(name);
    attributeFormattedMultiline += "".concat(name);
  } else {
    attributeFormattedInline += "".concat(name, "=").concat(formattedPropValue);
    attributeFormattedMultiline += "".concat(name, "=").concat(formattedPropValue);
  }
  return {
    attributeFormattedInline,
    attributeFormattedMultiline,
    isMultilineAttribute
  };
};
var mergeSiblingPlainStringChildrenReducer = function(previousNodes, currentNode) {
  var nodes = previousNodes.slice(0, previousNodes.length > 0 ? previousNodes.length - 1 : 0);
  var previousNode = previousNodes[previousNodes.length - 1];
  if (previousNode && (currentNode.type === "string" || currentNode.type === "number") && (previousNode.type === "string" || previousNode.type === "number")) {
    nodes.push(createStringTreeNode(String(previousNode.value) + String(currentNode.value)));
  } else {
    if (previousNode) {
      nodes.push(previousNode);
    }
    nodes.push(currentNode);
  }
  return nodes;
};
var isKeyOrRefProps = function isKeyOrRefProps2(propName) {
  return ["key", "ref"].includes(propName);
};
var sortPropsByNames = function(shouldSortUserProps) {
  return function(props) {
    var haveKeyProp = props.includes("key");
    var haveRefProp = props.includes("ref");
    var userPropsOnly = props.filter(function(oneProp) {
      return !isKeyOrRefProps(oneProp);
    });
    var sortedProps = shouldSortUserProps ? _toConsumableArray(userPropsOnly.sort()) : _toConsumableArray(userPropsOnly);
    if (haveRefProp) {
      sortedProps.unshift("ref");
    }
    if (haveKeyProp) {
      sortedProps.unshift("key");
    }
    return sortedProps;
  };
};
function createPropFilter(props, filter) {
  if (Array.isArray(filter)) {
    return function(key) {
      return filter.indexOf(key) === -1;
    };
  } else {
    return function(key) {
      return filter(props[key], key);
    };
  }
}
var compensateMultilineStringElementIndentation = function compensateMultilineStringElementIndentation2(element, formattedElement, inline, lvl, options) {
  var tabStop = options.tabStop;
  if (element.type === "string") {
    return formattedElement.split("\n").map(function(line, offset) {
      if (offset === 0) {
        return line;
      }
      return "".concat(spacer(lvl, tabStop)).concat(line);
    }).join("\n");
  }
  return formattedElement;
};
var formatOneChildren = function formatOneChildren2(inline, lvl, options) {
  return function(element) {
    return compensateMultilineStringElementIndentation(element, formatTreeNode(element, inline, lvl, options), inline, lvl, options);
  };
};
var onlyPropsWithOriginalValue = function onlyPropsWithOriginalValue2(defaultProps, props) {
  return function(propName) {
    var haveDefaultValue = Object.keys(defaultProps).includes(propName);
    return !haveDefaultValue || haveDefaultValue && defaultProps[propName] !== props[propName];
  };
};
var isInlineAttributeTooLong = function isInlineAttributeTooLong2(attributes, inlineAttributeString, lvl, tabStop, maxInlineAttributesLineLength) {
  if (!maxInlineAttributesLineLength) {
    return attributes.length > 1;
  }
  return spacer(lvl, tabStop).length + inlineAttributeString.length > maxInlineAttributesLineLength;
};
var shouldRenderMultilineAttr = function shouldRenderMultilineAttr2(attributes, inlineAttributeString, containsMultilineAttr, inline, lvl, tabStop, maxInlineAttributesLineLength) {
  return (isInlineAttributeTooLong(attributes, inlineAttributeString, lvl, tabStop, maxInlineAttributesLineLength) || containsMultilineAttr) && !inline;
};
var formatReactElementNode = function(node, inline, lvl, options) {
  var type = node.type, _node$displayName = node.displayName, displayName = _node$displayName === void 0 ? "" : _node$displayName, childrens = node.childrens, _node$props = node.props, props = _node$props === void 0 ? {} : _node$props, _node$defaultProps = node.defaultProps, defaultProps = _node$defaultProps === void 0 ? {} : _node$defaultProps;
  if (type !== "ReactElement") {
    throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(type));
  }
  var filterProps3 = options.filterProps, maxInlineAttributesLineLength = options.maxInlineAttributesLineLength, showDefaultProps = options.showDefaultProps, sortProps = options.sortProps, tabStop = options.tabStop;
  var out = "<".concat(displayName);
  var outInlineAttr = out;
  var outMultilineAttr = out;
  var containsMultilineAttr = false;
  var visibleAttributeNames = [];
  var propFilter = createPropFilter(props, filterProps3);
  Object.keys(props).filter(propFilter).filter(onlyPropsWithOriginalValue(defaultProps, props)).forEach(function(propName) {
    return visibleAttributeNames.push(propName);
  });
  Object.keys(defaultProps).filter(propFilter).filter(function() {
    return showDefaultProps;
  }).filter(function(defaultPropName) {
    return !visibleAttributeNames.includes(defaultPropName);
  }).forEach(function(defaultPropName) {
    return visibleAttributeNames.push(defaultPropName);
  });
  var attributes = sortPropsByNames(sortProps)(visibleAttributeNames);
  attributes.forEach(function(attributeName) {
    var _formatProp = formatProp(attributeName, Object.keys(props).includes(attributeName), props[attributeName], Object.keys(defaultProps).includes(attributeName), defaultProps[attributeName], inline, lvl, options), attributeFormattedInline = _formatProp.attributeFormattedInline, attributeFormattedMultiline = _formatProp.attributeFormattedMultiline, isMultilineAttribute = _formatProp.isMultilineAttribute;
    if (isMultilineAttribute) {
      containsMultilineAttr = true;
    }
    outInlineAttr += attributeFormattedInline;
    outMultilineAttr += attributeFormattedMultiline;
  });
  outMultilineAttr += "\n".concat(spacer(lvl, tabStop));
  if (shouldRenderMultilineAttr(attributes, outInlineAttr, containsMultilineAttr, inline, lvl, tabStop, maxInlineAttributesLineLength)) {
    out = outMultilineAttr;
  } else {
    out = outInlineAttr;
  }
  if (childrens && childrens.length > 0) {
    var newLvl = lvl + 1;
    out += ">";
    if (!inline) {
      out += "\n";
      out += spacer(newLvl, tabStop);
    }
    out += childrens.reduce(mergeSiblingPlainStringChildrenReducer, []).map(formatOneChildren(inline, newLvl, options)).join(!inline ? "\n".concat(spacer(newLvl, tabStop)) : "");
    if (!inline) {
      out += "\n";
      out += spacer(newLvl - 1, tabStop);
    }
    out += "</".concat(displayName, ">");
  } else {
    if (!isInlineAttributeTooLong(attributes, outInlineAttr, lvl, tabStop, maxInlineAttributesLineLength)) {
      out += " ";
    }
    out += "/>";
  }
  return out;
};
var REACT_FRAGMENT_TAG_NAME_SHORT_SYNTAX = "";
var REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX = "React.Fragment";
var toReactElementTreeNode = function toReactElementTreeNode2(displayName, key, childrens) {
  var props = {};
  if (key) {
    props = {
      key
    };
  }
  return {
    type: "ReactElement",
    displayName,
    props,
    defaultProps: {},
    childrens
  };
};
var isKeyedFragment = function isKeyedFragment2(_ref) {
  var key = _ref.key;
  return Boolean(key);
};
var hasNoChildren = function hasNoChildren2(_ref2) {
  var childrens = _ref2.childrens;
  return childrens.length === 0;
};
var formatReactFragmentNode = function(node, inline, lvl, options) {
  var type = node.type, key = node.key, childrens = node.childrens;
  if (type !== "ReactFragment") {
    throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(type));
  }
  var useFragmentShortSyntax = options.useFragmentShortSyntax;
  var displayName;
  if (useFragmentShortSyntax) {
    if (hasNoChildren(node) || isKeyedFragment(node)) {
      displayName = REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX;
    } else {
      displayName = REACT_FRAGMENT_TAG_NAME_SHORT_SYNTAX;
    }
  } else {
    displayName = REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX;
  }
  return formatReactElementNode(toReactElementTreeNode(displayName, key, childrens), inline, lvl, options);
};
var jsxStopChars = ["<", ">", "{", "}"];
var shouldBeEscaped = function shouldBeEscaped2(s) {
  return jsxStopChars.some(function(jsxStopChar) {
    return s.includes(jsxStopChar);
  });
};
var escape2 = function escape3(s) {
  if (!shouldBeEscaped(s)) {
    return s;
  }
  return "{`".concat(s, "`}");
};
var preserveTrailingSpace = function preserveTrailingSpace2(s) {
  var result = s;
  if (result.endsWith(" ")) {
    result = result.replace(/^(.*?)(\s+)$/, "$1{'$2'}");
  }
  if (result.startsWith(" ")) {
    result = result.replace(/^(\s+)(.*)$/, "{'$1'}$2");
  }
  return result;
};
var formatTreeNode = function(node, inline, lvl, options) {
  if (node.type === "number") {
    return String(node.value);
  }
  if (node.type === "string") {
    return node.value ? "".concat(preserveTrailingSpace(escape2(String(node.value)))) : "";
  }
  if (node.type === "ReactElement") {
    return formatReactElementNode(node, inline, lvl, options);
  }
  if (node.type === "ReactFragment") {
    return formatReactFragmentNode(node, inline, lvl, options);
  }
  throw new TypeError('Unknow format type "'.concat(node.type, '"'));
};
var formatTree = function(node, options) {
  return formatTreeNode(node, false, 0, options);
};
var reactElementToJsxString = function reactElementToJsxString2(element) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$filterProps = _ref.filterProps, filterProps3 = _ref$filterProps === void 0 ? [] : _ref$filterProps, _ref$showDefaultProps = _ref.showDefaultProps, showDefaultProps = _ref$showDefaultProps === void 0 ? true : _ref$showDefaultProps, _ref$showFunctions = _ref.showFunctions, showFunctions = _ref$showFunctions === void 0 ? false : _ref$showFunctions, functionValue = _ref.functionValue, _ref$tabStop = _ref.tabStop, tabStop = _ref$tabStop === void 0 ? 2 : _ref$tabStop, _ref$useBooleanShorth = _ref.useBooleanShorthandSyntax, useBooleanShorthandSyntax = _ref$useBooleanShorth === void 0 ? true : _ref$useBooleanShorth, _ref$useFragmentShort = _ref.useFragmentShortSyntax, useFragmentShortSyntax = _ref$useFragmentShort === void 0 ? true : _ref$useFragmentShort, _ref$sortProps = _ref.sortProps, sortProps = _ref$sortProps === void 0 ? true : _ref$sortProps, maxInlineAttributesLineLength = _ref.maxInlineAttributesLineLength, displayName = _ref.displayName;
  if (!element) {
    throw new Error("react-element-to-jsx-string: Expected a ReactElement");
  }
  var options = {
    filterProps: filterProps3,
    showDefaultProps,
    showFunctions,
    functionValue,
    tabStop,
    useBooleanShorthandSyntax,
    useFragmentShortSyntax,
    sortProps,
    maxInlineAttributesLineLength,
    displayName
  };
  return formatTree(parseReactElement(element, options), options);
};
export {
  reactElementToJsxString as default,
  inlineFunction,
  preserveFunctionLineBreak
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

is-plain-object/dist/is-plain-object.mjs:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=react-element-to-jsx-string.js.map
