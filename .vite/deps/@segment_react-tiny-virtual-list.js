import {
  require_react
} from "./chunk-PQOUKJFQ.js";
import {
  require_prop_types
} from "./chunk-5ZYNRIRP.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// ../../../../../aviato-ui/node_modules/@segment/react-tiny-virtual-list/build/react-tiny-virtual-list.es.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
      t[p[i]] = s[p[i]];
  }
  return t;
}
var ALIGNMENT;
(function(ALIGNMENT2) {
  ALIGNMENT2["AUTO"] = "auto";
  ALIGNMENT2["START"] = "start";
  ALIGNMENT2["CENTER"] = "center";
  ALIGNMENT2["END"] = "end";
})(ALIGNMENT || (ALIGNMENT = {}));
var DIRECTION;
(function(DIRECTION2) {
  DIRECTION2["HORIZONTAL"] = "horizontal";
  DIRECTION2["VERTICAL"] = "vertical";
})(DIRECTION || (DIRECTION = {}));
var SCROLL_CHANGE_REASON;
(function(SCROLL_CHANGE_REASON2) {
  SCROLL_CHANGE_REASON2["OBSERVED"] = "observed";
  SCROLL_CHANGE_REASON2["REQUESTED"] = "requested";
})(SCROLL_CHANGE_REASON || (SCROLL_CHANGE_REASON = {}));
var scrollProp = (_a = {}, _a[DIRECTION.VERTICAL] = "scrollTop", _a[DIRECTION.HORIZONTAL] = "scrollLeft", _a);
var sizeProp = (_b = {}, _b[DIRECTION.VERTICAL] = "height", _b[DIRECTION.HORIZONTAL] = "width", _b);
var positionProp = (_c = {}, _c[DIRECTION.VERTICAL] = "top", _c[DIRECTION.HORIZONTAL] = "left", _c);
var marginProp = (_d = {}, _d[DIRECTION.VERTICAL] = "marginTop", _d[DIRECTION.HORIZONTAL] = "marginLeft", _d);
var oppositeMarginProp = (_e = {}, _e[DIRECTION.VERTICAL] = "marginBottom", _e[DIRECTION.HORIZONTAL] = "marginRight", _e);
var _a;
var _b;
var _c;
var _d;
var _e;
var SizeAndPositionManager = (
  /** @class */
  function() {
    function SizeAndPositionManager2(_a2) {
      var itemCount = _a2.itemCount, itemSizeGetter = _a2.itemSizeGetter, estimatedItemSize = _a2.estimatedItemSize;
      this.itemSizeGetter = itemSizeGetter;
      this.itemCount = itemCount;
      this.estimatedItemSize = estimatedItemSize;
      this.itemSizeAndPositionData = {};
      this.lastMeasuredIndex = -1;
    }
    SizeAndPositionManager2.prototype.updateConfig = function(_a2) {
      var itemCount = _a2.itemCount, itemSizeGetter = _a2.itemSizeGetter, estimatedItemSize = _a2.estimatedItemSize;
      if (itemCount != null) {
        this.itemCount = itemCount;
      }
      if (estimatedItemSize != null) {
        this.estimatedItemSize = estimatedItemSize;
      }
      if (itemSizeGetter != null) {
        this.itemSizeGetter = itemSizeGetter;
      }
    };
    SizeAndPositionManager2.prototype.getLastMeasuredIndex = function() {
      return this.lastMeasuredIndex;
    };
    SizeAndPositionManager2.prototype.getSizeAndPositionForIndex = function(index) {
      if (index < 0 || index >= this.itemCount) {
        throw Error("Requested index " + index + " is outside of range 0.." + this.itemCount);
      }
      if (index > this.lastMeasuredIndex) {
        var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
        var offset = lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size;
        for (var i = this.lastMeasuredIndex + 1; i <= index; i++) {
          var size = this.itemSizeGetter(i);
          if (size == null || isNaN(size)) {
            throw Error("Invalid size returned for index " + i + " of value " + size);
          }
          this.itemSizeAndPositionData[i] = {
            offset,
            size
          };
          offset += size;
        }
        this.lastMeasuredIndex = index;
      }
      return this.itemSizeAndPositionData[index];
    };
    SizeAndPositionManager2.prototype.getSizeAndPositionOfLastMeasuredItem = function() {
      return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : { offset: 0, size: 0 };
    };
    SizeAndPositionManager2.prototype.getTotalSize = function() {
      var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
      return lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize;
    };
    SizeAndPositionManager2.prototype.getUpdatedOffsetForIndex = function(_a2) {
      var _b2 = _a2.align, align = _b2 === void 0 ? ALIGNMENT.START : _b2, containerSize = _a2.containerSize, currentOffset = _a2.currentOffset, targetIndex = _a2.targetIndex;
      if (containerSize <= 0) {
        return 0;
      }
      var datum = this.getSizeAndPositionForIndex(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;
      switch (align) {
        case ALIGNMENT.END:
          idealOffset = minOffset;
          break;
        case ALIGNMENT.CENTER:
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        case ALIGNMENT.START:
          idealOffset = maxOffset;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
      }
      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    };
    SizeAndPositionManager2.prototype.getVisibleRange = function(_a2) {
      var containerSize = _a2.containerSize, offset = _a2.offset, overscanCount = _a2.overscanCount;
      var totalSize = this.getTotalSize();
      if (totalSize === 0) {
        return {};
      }
      var maxOffset = offset + containerSize;
      var start = this.findNearestItem(offset);
      if (typeof start === "undefined") {
        throw Error("Invalid offset " + offset + " specified");
      }
      var datum = this.getSizeAndPositionForIndex(start);
      offset = datum.offset + datum.size;
      var stop = start;
      while (offset < maxOffset && stop < this.itemCount - 1) {
        stop++;
        offset += this.getSizeAndPositionForIndex(stop).size;
      }
      if (overscanCount) {
        start = Math.max(0, start - overscanCount);
        stop = Math.min(stop + overscanCount, this.itemCount - 1);
      }
      return {
        start,
        stop
      };
    };
    SizeAndPositionManager2.prototype.resetItem = function(index) {
      this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, index - 1);
    };
    SizeAndPositionManager2.prototype.findNearestItem = function(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset " + offset + " specified");
      }
      offset = Math.max(0, offset);
      var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
      var lastMeasuredIndex = Math.max(0, this.lastMeasuredIndex);
      if (lastMeasuredSizeAndPosition.offset >= offset) {
        return this.binarySearch({
          high: lastMeasuredIndex,
          low: 0,
          offset
        });
      } else {
        return this.exponentialSearch({
          index: lastMeasuredIndex,
          offset
        });
      }
    };
    SizeAndPositionManager2.prototype.binarySearch = function(_a2) {
      var low = _a2.low, high = _a2.high, offset = _a2.offset;
      var middle = 0;
      var currentOffset = 0;
      while (low <= high) {
        middle = low + Math.floor((high - low) / 2);
        currentOffset = this.getSizeAndPositionForIndex(middle).offset;
        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }
      if (low > 0) {
        return low - 1;
      }
      return 0;
    };
    SizeAndPositionManager2.prototype.exponentialSearch = function(_a2) {
      var index = _a2.index, offset = _a2.offset;
      var interval = 1;
      while (index < this.itemCount && this.getSizeAndPositionForIndex(index).offset < offset) {
        index += interval;
        interval *= 2;
      }
      return this.binarySearch({
        high: Math.min(index, this.itemCount - 1),
        low: Math.floor(index / 2),
        offset
      });
    };
    return SizeAndPositionManager2;
  }()
);
var STYLE_WRAPPER = {
  overflow: "auto",
  willChange: "transform",
  WebkitOverflowScrolling: "touch"
};
var STYLE_INNER = {
  position: "relative",
  width: "100%",
  minHeight: "100%"
};
var STYLE_ITEM = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%"
};
var STYLE_STICKY_ITEM = __assign({}, STYLE_ITEM, { position: "sticky" });
var VirtualList = (
  /** @class */
  function(_super) {
    __extends(VirtualList2, _super);
    function VirtualList2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.itemSizeGetter = function(itemSize) {
        return function(index) {
          return _this.getSize(index, itemSize);
        };
      };
      _this.sizeAndPositionManager = new SizeAndPositionManager({
        itemCount: _this.props.itemCount,
        itemSizeGetter: _this.itemSizeGetter(_this.props.itemSize),
        estimatedItemSize: _this.getEstimatedItemSize()
      });
      _this.state = {
        offset: _this.props.scrollOffset || _this.props.scrollToIndex != null && _this.getOffsetForIndex(_this.props.scrollToIndex) || 0,
        scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
      };
      _this.styleCache = {};
      _this.getRef = function(node) {
        _this.rootNode = node;
      };
      _this.handleScroll = function(event) {
        var onScroll = _this.props.onScroll;
        var offset = _this.getNodeOffset();
        if (offset < 0 || _this.state.offset === offset || event.target !== _this.rootNode) {
          return;
        }
        _this.setState({
          offset,
          scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
        });
        if (typeof onScroll === "function") {
          onScroll(offset, event);
        }
      };
      return _this;
    }
    VirtualList2.prototype.componentDidMount = function() {
      var _a2 = this.props, scrollOffset = _a2.scrollOffset, scrollToIndex = _a2.scrollToIndex;
      this.rootNode.addEventListener("scroll", this.handleScroll, {
        passive: true
      });
      if (scrollOffset != null) {
        this.scrollTo(scrollOffset);
      } else if (scrollToIndex != null) {
        this.scrollTo(this.getOffsetForIndex(scrollToIndex));
      }
    };
    VirtualList2.prototype.UNSAFE_componentWillReceiveProps = function(nextProps) {
      var _a2 = this.props, estimatedItemSize = _a2.estimatedItemSize, itemCount = _a2.itemCount, itemSize = _a2.itemSize, scrollOffset = _a2.scrollOffset, scrollToAlignment = _a2.scrollToAlignment, scrollToIndex = _a2.scrollToIndex;
      var scrollPropsHaveChanged = nextProps.scrollToIndex !== scrollToIndex || nextProps.scrollToAlignment !== scrollToAlignment;
      var itemPropsHaveChanged = nextProps.itemCount !== itemCount || nextProps.itemSize !== itemSize || nextProps.estimatedItemSize !== estimatedItemSize;
      if (nextProps.itemSize !== itemSize) {
        this.sizeAndPositionManager.updateConfig({
          itemSizeGetter: this.itemSizeGetter(nextProps.itemSize)
        });
      }
      if (nextProps.itemCount !== itemCount || nextProps.estimatedItemSize !== estimatedItemSize) {
        this.sizeAndPositionManager.updateConfig({
          itemCount: nextProps.itemCount,
          estimatedItemSize: this.getEstimatedItemSize(nextProps)
        });
      }
      if (itemPropsHaveChanged) {
        this.recomputeSizes();
      }
      if (nextProps.scrollOffset !== scrollOffset) {
        this.setState({
          offset: nextProps.scrollOffset || 0,
          scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
        });
      } else if (typeof nextProps.scrollToIndex === "number" && (scrollPropsHaveChanged || itemPropsHaveChanged)) {
        this.setState({
          offset: this.getOffsetForIndex(nextProps.scrollToIndex, nextProps.scrollToAlignment, nextProps.itemCount),
          scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
        });
      }
    };
    VirtualList2.prototype.componentDidUpdate = function(_, prevState) {
      var _a2 = this.state, offset = _a2.offset, scrollChangeReason = _a2.scrollChangeReason;
      if (prevState.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
        this.scrollTo(offset);
      }
    };
    VirtualList2.prototype.componentWillUnmount = function() {
      this.rootNode.removeEventListener("scroll", this.handleScroll);
    };
    VirtualList2.prototype.scrollTo = function(value) {
      var _a2 = this.props.scrollDirection, scrollDirection = _a2 === void 0 ? DIRECTION.VERTICAL : _a2;
      this.rootNode[scrollProp[scrollDirection]] = value;
    };
    VirtualList2.prototype.getOffsetForIndex = function(index, scrollToAlignment, itemCount) {
      if (scrollToAlignment === void 0) {
        scrollToAlignment = this.props.scrollToAlignment;
      }
      if (itemCount === void 0) {
        itemCount = this.props.itemCount;
      }
      var _a2 = this.props.scrollDirection, scrollDirection = _a2 === void 0 ? DIRECTION.VERTICAL : _a2;
      if (index < 0 || index >= itemCount) {
        index = 0;
      }
      return this.sizeAndPositionManager.getUpdatedOffsetForIndex({
        align: scrollToAlignment,
        containerSize: this.props[sizeProp[scrollDirection]],
        currentOffset: this.state && this.state.offset || 0,
        targetIndex: index
      });
    };
    VirtualList2.prototype.recomputeSizes = function(startIndex) {
      if (startIndex === void 0) {
        startIndex = 0;
      }
      this.styleCache = {};
      this.sizeAndPositionManager.resetItem(startIndex);
    };
    VirtualList2.prototype.render = function() {
      var _this = this;
      var _a2 = this.props, estimatedItemSize = _a2.estimatedItemSize, height = _a2.height, _b2 = _a2.overscanCount, overscanCount = _b2 === void 0 ? 3 : _b2, renderItem = _a2.renderItem, itemCount = _a2.itemCount, itemSize = _a2.itemSize, onItemsRendered = _a2.onItemsRendered, onScroll = _a2.onScroll, _c2 = _a2.scrollDirection, scrollDirection = _c2 === void 0 ? DIRECTION.VERTICAL : _c2, scrollOffset = _a2.scrollOffset, scrollToIndex = _a2.scrollToIndex, scrollToAlignment = _a2.scrollToAlignment, stickyIndices = _a2.stickyIndices, style = _a2.style, width = _a2.width, props = __rest(_a2, ["estimatedItemSize", "height", "overscanCount", "renderItem", "itemCount", "itemSize", "onItemsRendered", "onScroll", "scrollDirection", "scrollOffset", "scrollToIndex", "scrollToAlignment", "stickyIndices", "style", "width"]);
      var offset = this.state.offset;
      var _d2 = this.sizeAndPositionManager.getVisibleRange({
        containerSize: this.props[sizeProp[scrollDirection]] || 0,
        offset,
        overscanCount
      }), start = _d2.start, stop = _d2.stop;
      var items = [];
      var wrapperStyle = __assign({}, STYLE_WRAPPER, style, { height, width });
      var innerStyle = __assign({}, STYLE_INNER, (_e2 = {}, _e2[sizeProp[scrollDirection]] = this.sizeAndPositionManager.getTotalSize(), _e2));
      if (stickyIndices != null && stickyIndices.length !== 0) {
        stickyIndices.forEach(function(index2) {
          return items.push(renderItem({
            index: index2,
            style: _this.getStyle(index2, true)
          }));
        });
        if (scrollDirection === DIRECTION.HORIZONTAL) {
          innerStyle.display = "flex";
        }
      }
      if (typeof start !== "undefined" && typeof stop !== "undefined") {
        for (var index = start; index <= stop; index++) {
          if (stickyIndices != null && stickyIndices.includes(index)) {
            continue;
          }
          items.push(renderItem({
            index,
            style: this.getStyle(index, false)
          }));
        }
        if (typeof onItemsRendered === "function") {
          onItemsRendered({
            startIndex: start,
            stopIndex: stop
          });
        }
      }
      return (0, import_react.createElement)("div", __assign({ ref: this.getRef }, props, { style: wrapperStyle }), (0, import_react.createElement)("div", { style: innerStyle }, items));
      var _e2;
    };
    VirtualList2.prototype.getNodeOffset = function() {
      var _a2 = this.props.scrollDirection, scrollDirection = _a2 === void 0 ? DIRECTION.VERTICAL : _a2;
      return this.rootNode[scrollProp[scrollDirection]];
    };
    VirtualList2.prototype.getEstimatedItemSize = function(props) {
      if (props === void 0) {
        props = this.props;
      }
      return props.estimatedItemSize || typeof props.itemSize === "number" && props.itemSize || 50;
    };
    VirtualList2.prototype.getSize = function(index, itemSize) {
      if (typeof itemSize === "function") {
        return itemSize(index);
      }
      return Array.isArray(itemSize) ? itemSize[index] : itemSize;
    };
    VirtualList2.prototype.getStyle = function(index, sticky) {
      var style = this.styleCache[index];
      if (style) {
        return style;
      }
      var _a2 = this.props.scrollDirection, scrollDirection = _a2 === void 0 ? DIRECTION.VERTICAL : _a2;
      var _b2 = this.sizeAndPositionManager.getSizeAndPositionForIndex(index), size = _b2.size, offset = _b2.offset;
      return this.styleCache[index] = sticky ? __assign({}, STYLE_STICKY_ITEM, (_c2 = {}, _c2[sizeProp[scrollDirection]] = size, _c2[marginProp[scrollDirection]] = offset, _c2[oppositeMarginProp[scrollDirection]] = -(offset + size), _c2.zIndex = 1, _c2)) : __assign({}, STYLE_ITEM, (_d2 = {}, _d2[sizeProp[scrollDirection]] = size, _d2[positionProp[scrollDirection]] = offset, _d2));
      var _c2, _d2;
    };
    VirtualList2.defaultProps = {
      overscanCount: 3,
      scrollDirection: DIRECTION.VERTICAL,
      width: "100%"
    };
    VirtualList2.propTypes = {
      estimatedItemSize: import_prop_types.number,
      height: (0, import_prop_types.oneOfType)([import_prop_types.number, import_prop_types.string]).isRequired,
      itemCount: import_prop_types.number.isRequired,
      itemSize: (0, import_prop_types.oneOfType)([import_prop_types.number, import_prop_types.array, import_prop_types.func]).isRequired,
      onScroll: import_prop_types.func,
      onItemsRendered: import_prop_types.func,
      overscanCount: import_prop_types.number,
      renderItem: import_prop_types.func.isRequired,
      scrollOffset: import_prop_types.number,
      scrollToIndex: import_prop_types.number,
      scrollToAlignment: (0, import_prop_types.oneOf)([ALIGNMENT.AUTO, ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END]),
      scrollDirection: (0, import_prop_types.oneOf)([DIRECTION.HORIZONTAL, DIRECTION.VERTICAL]),
      stickyIndices: (0, import_prop_types.arrayOf)(import_prop_types.number),
      style: import_prop_types.object,
      width: (0, import_prop_types.oneOfType)([import_prop_types.number, import_prop_types.string])
    };
    return VirtualList2;
  }(import_react.PureComponent)
);
var react_tiny_virtual_list_es_default = VirtualList;
export {
  DIRECTION as ScrollDirection,
  react_tiny_virtual_list_es_default as default
};
/*! Bundled license information:

@segment/react-tiny-virtual-list/build/react-tiny-virtual-list.es.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@segment_react-tiny-virtual-list.js.map
