import {
  _objectWithoutPropertiesLoose
} from "./chunk-PEWUM5KQ.js";
import "./chunk-EWTE5DHJ.js";

// ../../../../../aviato-ui/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
export {
  _objectWithoutProperties as default
};
//# sourceMappingURL=@babel_runtime_helpers_esm_objectWithoutProperties.js.map
