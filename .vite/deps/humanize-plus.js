import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// ../../../../../aviato-ui/node_modules/humanize-plus/dist/humanize.js
var require_humanize = __commonJS({
  "../../../../../aviato-ui/node_modules/humanize-plus/dist/humanize.js"(exports, module) {
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    (function(root, factory) {
      if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], function() {
          return root.Humanize = factory();
        });
      } else {
        root.Humanize = factory();
      }
    })(exports, function() {
      var TIME_FORMATS = [{
        name: "second",
        value: 1e3
      }, {
        name: "minute",
        value: 6e4
      }, {
        name: "hour",
        value: 36e5
      }, {
        name: "day",
        value: 864e5
      }, {
        name: "week",
        value: 6048e5
      }];
      var LABELS_FOR_POWERS_OF_KILO = {
        P: Math.pow(2, 50),
        T: Math.pow(2, 40),
        G: Math.pow(2, 30),
        M: Math.pow(2, 20)
      };
      var exists = function exists2(maybe) {
        return typeof maybe !== "undefined" && maybe !== null;
      };
      var isNaN = function isNaN2(value) {
        return value !== value;
      };
      var isFiniteNumber = function isFiniteNumber2(value) {
        return isFinite(value) && !isNaN(parseFloat(value));
      };
      var isArray = function isArray2(value) {
        var type = Object.prototype.toString.call(value);
        return type === "[object Array]";
      };
      var Humanize = {
        // Converts a large integer to a friendly text representation.
        intword: function intword(number, charWidth) {
          var decimals = arguments.length <= 2 || arguments[2] === void 0 ? 2 : arguments[2];
          return Humanize.compactInteger(number, decimals);
        },
        // Converts an integer into its most compact representation
        compactInteger: function compactInteger(input) {
          var decimals = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
          decimals = Math.max(decimals, 0);
          var number = parseInt(input, 10);
          var signString = number < 0 ? "-" : "";
          var unsignedNumber = Math.abs(number);
          var unsignedNumberString = String(unsignedNumber);
          var numberLength = unsignedNumberString.length;
          var numberLengths = [13, 10, 7, 4];
          var bigNumPrefixes = ["T", "B", "M", "k"];
          if (unsignedNumber < 1e3) {
            return "" + signString + unsignedNumberString;
          }
          if (numberLength > numberLengths[0] + 3) {
            return number.toExponential(decimals).replace("e+", "x10^");
          }
          var length = void 0;
          for (var i = 0; i < numberLengths.length; i++) {
            var _length = numberLengths[i];
            if (numberLength >= _length) {
              length = _length;
              break;
            }
          }
          var decimalIndex = numberLength - length + 1;
          var unsignedNumberCharacterArray = unsignedNumberString.split("");
          var wholePartArray = unsignedNumberCharacterArray.slice(0, decimalIndex);
          var decimalPartArray = unsignedNumberCharacterArray.slice(decimalIndex, decimalIndex + decimals + 1);
          var wholePart = wholePartArray.join("");
          var decimalPart = decimalPartArray.join("");
          if (decimalPart.length < decimals) {
            decimalPart += "" + Array(decimals - decimalPart.length + 1).join("0");
          }
          var output = void 0;
          if (decimals === 0) {
            output = "" + signString + wholePart + bigNumPrefixes[numberLengths.indexOf(length)];
          } else {
            var outputNumber = Number(wholePart + "." + decimalPart).toFixed(decimals);
            output = "" + signString + outputNumber + bigNumPrefixes[numberLengths.indexOf(length)];
          }
          return output;
        },
        // Converts an integer to a string containing commas every three digits.
        intComma: function intComma(number) {
          var decimals = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
          return Humanize.formatNumber(number, decimals);
        },
        intcomma: function intcomma() {
          return Humanize.intComma.apply(Humanize, arguments);
        },
        // Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).
        fileSize: function fileSize(filesize) {
          var precision = arguments.length <= 1 || arguments[1] === void 0 ? 2 : arguments[1];
          for (var label in LABELS_FOR_POWERS_OF_KILO) {
            if (LABELS_FOR_POWERS_OF_KILO.hasOwnProperty(label)) {
              var minnum = LABELS_FOR_POWERS_OF_KILO[label];
              if (filesize >= minnum) {
                return Humanize.formatNumber(filesize / minnum, precision, "") + " " + label + "B";
              }
            }
          }
          if (filesize >= 1024) {
            return Humanize.formatNumber(filesize / 1024, 0) + " KB";
          }
          return Humanize.formatNumber(filesize, 0) + Humanize.pluralize(filesize, " byte");
        },
        filesize: function filesize() {
          return Humanize.fileSize.apply(Humanize, arguments);
        },
        // Formats a number to a human-readable string.
        // Localize by overriding the precision, thousand and decimal arguments.
        formatNumber: function formatNumber(number) {
          var precision = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
          var thousand = arguments.length <= 2 || arguments[2] === void 0 ? "," : arguments[2];
          var decimal = arguments.length <= 3 || arguments[3] === void 0 ? "." : arguments[3];
          var firstComma = function firstComma2(_number, _thousand, _position) {
            return _position ? _number.substr(0, _position) + _thousand : "";
          };
          var commas = function commas2(_number, _thousand, _position) {
            return _number.substr(_position).replace(/(\d{3})(?=\d)/g, "$1" + _thousand);
          };
          var decimals = function decimals2(_number, _decimal, usePrecision2) {
            return usePrecision2 ? _decimal + Humanize.toFixed(Math.abs(_number), usePrecision2).split(".")[1] : "";
          };
          var usePrecision = Humanize.normalizePrecision(precision);
          var negative = number < 0 && "-" || "";
          var base = String(parseInt(Humanize.toFixed(Math.abs(number || 0), usePrecision), 10));
          var mod = base.length > 3 ? base.length % 3 : 0;
          return negative + firstComma(base, thousand, mod) + commas(base, thousand, mod) + decimals(number, decimal, usePrecision);
        },
        // Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61')
        toFixed: function toFixed(value, precision) {
          precision = exists(precision) ? precision : Humanize.normalizePrecision(precision, 0);
          var power = Math.pow(10, precision);
          return (Math.round(value * power) / power).toFixed(precision);
        },
        // Ensures precision value is a positive integer
        normalizePrecision: function normalizePrecision(value, base) {
          value = Math.round(Math.abs(value));
          return isNaN(value) ? base : value;
        },
        // Converts an integer to its ordinal as a string.
        ordinal: function ordinal(value) {
          var number = parseInt(value, 10);
          if (number === 0) {
            return value;
          }
          var specialCase = number % 100;
          if ([11, 12, 13].indexOf(specialCase) >= 0) {
            return number + "th";
          }
          var leastSignificant = number % 10;
          var end = void 0;
          switch (leastSignificant) {
            case 1:
              end = "st";
              break;
            case 2:
              end = "nd";
              break;
            case 3:
              end = "rd";
              break;
            default:
              end = "th";
          }
          return "" + number + end;
        },
        // Interprets numbers as occurences. Also accepts an optional array/map of overrides.
        times: function times(value) {
          var overrides = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
          if (isFiniteNumber(value) && value >= 0) {
            var number = parseFloat(value);
            var smallTimes = ["never", "once", "twice"];
            if (exists(overrides[number])) {
              return String(overrides[number]);
            }
            var numberString = exists(smallTimes[number]) && smallTimes[number].toString();
            return numberString || number.toString() + " times";
          }
          return null;
        },
        // Returns the plural version of a given word if the value is not 1. The default suffix is 's'.
        pluralize: function pluralize(number, singular, plural) {
          if (!(exists(number) && exists(singular))) {
            return null;
          }
          plural = exists(plural) ? plural : singular + "s";
          return parseInt(number, 10) === 1 ? singular : plural;
        },
        // Truncates a string if it is longer than the specified number of characters (inclusive).
        // Truncated strings will end with a translatable ellipsis sequence ("…").
        truncate: function truncate(str) {
          var length = arguments.length <= 1 || arguments[1] === void 0 ? 100 : arguments[1];
          var ending = arguments.length <= 2 || arguments[2] === void 0 ? "..." : arguments[2];
          if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
          }
          return str;
        },
        // Truncates a string after a certain number of words.
        truncateWords: function truncateWords(string, length) {
          var array = string.split(" ");
          var result = "";
          var i = 0;
          while (i < length) {
            if (exists(array[i])) {
              result += array[i] + " ";
            }
            i++;
          }
          if (array.length > length) {
            return result + "...";
          }
          return null;
        },
        truncatewords: function truncatewords() {
          return Humanize.truncateWords.apply(Humanize, arguments);
        },
        // Truncates a number to an upper bound.
        boundedNumber: function boundedNumber(num) {
          var bound = arguments.length <= 1 || arguments[1] === void 0 ? 100 : arguments[1];
          var ending = arguments.length <= 2 || arguments[2] === void 0 ? "+" : arguments[2];
          var result = void 0;
          if (isFiniteNumber(num) && isFiniteNumber(bound)) {
            if (num > bound) {
              result = bound + ending;
            }
          }
          return (result || num).toString();
        },
        truncatenumber: function truncatenumber() {
          return Humanize.boundedNumber.apply(Humanize, arguments);
        },
        // Converts a list of items to a human readable string with an optional limit.
        oxford: function oxford(items, limit, limitStr) {
          var numItems = items.length;
          var limitIndex = void 0;
          if (numItems < 2) {
            return String(items);
          } else if (numItems === 2) {
            return items.join(" and ");
          } else if (exists(limit) && numItems > limit) {
            var extra = numItems - limit;
            limitIndex = limit;
            limitStr = exists(limitStr) ? limitStr : ", and " + extra + " " + Humanize.pluralize(extra, "other");
          } else {
            limitIndex = -1;
            limitStr = ", and " + items[numItems - 1];
          }
          return items.slice(0, limitIndex).join(", ") + limitStr;
        },
        // Converts an object to a definition-like string
        dictionary: function dictionary(object) {
          var joiner = arguments.length <= 1 || arguments[1] === void 0 ? " is " : arguments[1];
          var separator = arguments.length <= 2 || arguments[2] === void 0 ? ", " : arguments[2];
          var result = "";
          if (exists(object) && (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && !isArray(object)) {
            var defs = [];
            for (var key in object) {
              if (object.hasOwnProperty(key)) {
                var val = object[key];
                defs.push("" + key + joiner + val);
              }
            }
            return defs.join(separator);
          }
          return result;
        },
        // Describes how many times an item appears in a list
        frequency: function frequency(list, verb) {
          if (!isArray(list)) {
            return null;
          }
          var len = list.length;
          var times = Humanize.times(len);
          if (len === 0) {
            return times + " " + verb;
          }
          return verb + " " + times;
        },
        pace: function pace(value, intervalMs) {
          var unit = arguments.length <= 2 || arguments[2] === void 0 ? "time" : arguments[2];
          if (value === 0 || intervalMs === 0) {
            return "No " + Humanize.pluralize(0, unit);
          }
          var prefix = "Approximately";
          var timeUnit = void 0;
          var relativePace = void 0;
          var rate = value / intervalMs;
          for (var i = 0; i < TIME_FORMATS.length; ++i) {
            var f = TIME_FORMATS[i];
            relativePace = rate * f.value;
            if (relativePace > 1) {
              timeUnit = f.name;
              break;
            }
          }
          if (!timeUnit) {
            prefix = "Less than";
            relativePace = 1;
            timeUnit = TIME_FORMATS[TIME_FORMATS.length - 1].name;
          }
          var roundedPace = Math.round(relativePace);
          unit = Humanize.pluralize(roundedPace, unit);
          return prefix + " " + roundedPace + " " + unit + " per " + timeUnit;
        },
        // Converts newlines to <br/> tags
        nl2br: function nl2br(string) {
          var replacement = arguments.length <= 1 || arguments[1] === void 0 ? "<br/>" : arguments[1];
          return string.replace(/\n/g, replacement);
        },
        // Converts <br/> tags to newlines
        br2nl: function br2nl(string) {
          var replacement = arguments.length <= 1 || arguments[1] === void 0 ? "\r\n" : arguments[1];
          return string.replace(/\<br\s*\/?\>/g, replacement);
        },
        // Capitalizes first letter in a string
        capitalize: function capitalize(string) {
          var downCaseTail = arguments.length <= 1 || arguments[1] === void 0 ? false : arguments[1];
          return "" + string.charAt(0).toUpperCase() + (downCaseTail ? string.slice(1).toLowerCase() : string.slice(1));
        },
        // Capitalizes the first letter of each word in a string
        capitalizeAll: function capitalizeAll(string) {
          return string.replace(/(?:^|\s)\S/g, function(a) {
            return a.toUpperCase();
          });
        },
        // Titlecase words in a string.
        titleCase: function titleCase(string) {
          var smallWords = /\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i;
          var internalCaps = /\S+[A-Z]+\S*/;
          var splitOnWhiteSpaceRegex = /\s+/;
          var splitOnHyphensRegex = /-/;
          var _doTitleCase = void 0;
          _doTitleCase = function doTitleCase(_string) {
            var hyphenated = arguments.length <= 1 || arguments[1] === void 0 ? false : arguments[1];
            var firstOrLast = arguments.length <= 2 || arguments[2] === void 0 ? true : arguments[2];
            var titleCasedArray = [];
            var stringArray = _string.split(hyphenated ? splitOnHyphensRegex : splitOnWhiteSpaceRegex);
            for (var index = 0; index < stringArray.length; ++index) {
              var word = stringArray[index];
              if (word.indexOf("-") !== -1) {
                titleCasedArray.push(_doTitleCase(word, true, index === 0 || index === stringArray.length - 1));
                continue;
              }
              if (firstOrLast && (index === 0 || index === stringArray.length - 1)) {
                titleCasedArray.push(internalCaps.test(word) ? word : Humanize.capitalize(word));
                continue;
              }
              if (internalCaps.test(word)) {
                titleCasedArray.push(word);
              } else if (smallWords.test(word)) {
                titleCasedArray.push(word.toLowerCase());
              } else {
                titleCasedArray.push(Humanize.capitalize(word));
              }
            }
            return titleCasedArray.join(hyphenated ? "-" : " ");
          };
          return _doTitleCase(string);
        },
        titlecase: function titlecase() {
          return Humanize.titleCase.apply(Humanize, arguments);
        }
      };
      return Humanize;
    });
  }
});
export default require_humanize();
//# sourceMappingURL=humanize-plus.js.map
