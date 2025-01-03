import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/prettier/plugins/acorn.js
var require_acorn = __commonJS({
  "node_modules/prettier/plugins/acorn.js"(exports, module) {
    (function(n) {
      function e() {
        var i = n();
        return i.default || i;
      }
      if (typeof exports == "object" && typeof module == "object") module.exports = e();
      else if (typeof define == "function" && define.amd) define(e);
      else {
        var t = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
        t.prettierPlugins = t.prettierPlugins || {}, t.prettierPlugins.acorn = e();
      }
    })(function() {
      "use strict";
      var di = Object.create;
      var ce = Object.defineProperty;
      var mi = Object.getOwnPropertyDescriptor;
      var xi = Object.getOwnPropertyNames;
      var yi = Object.getPrototypeOf, gi = Object.prototype.hasOwnProperty;
      var $e = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), vi = (e, t) => {
        for (var i in t) ce(e, i, { get: t[i], enumerable: true });
      }, Ze = (e, t, i, s) => {
        if (t && typeof t == "object" || typeof t == "function") for (let r of xi(t)) !gi.call(e, r) && r !== i && ce(e, r, { get: () => t[r], enumerable: !(s = mi(t, r)) || s.enumerable });
        return e;
      };
      var et = (e, t, i) => (i = e != null ? di(yi(e)) : {}, Ze(t || !e || !e.__esModule ? ce(i, "default", { value: e, enumerable: true }) : i, e)), bi = (e) => Ze(ce({}, "__esModule", { value: true }), e);
      var Jt = $e((zs, qt) => {
        qt.exports = {};
      });
      var Ge = $e((Qs, Je) => {
        "use strict";
        var rs = Jt(), as = /^[\da-fA-F]+$/, ns = /^\d+$/, Gt = /* @__PURE__ */ new WeakMap();
        function Kt(e) {
          e = e.Parser.acorn || e;
          let t = Gt.get(e);
          if (!t) {
            let i = e.tokTypes, s = e.TokContext, r = e.TokenType, n = new s("<tag", false), o = new s("</tag", false), u = new s("<tag>...</tag>", true, true), p = { tc_oTag: n, tc_cTag: o, tc_expr: u }, d = { jsxName: new r("jsxName"), jsxText: new r("jsxText", { beforeExpr: true }), jsxTagStart: new r("jsxTagStart", { startsExpr: true }), jsxTagEnd: new r("jsxTagEnd") };
            d.jsxTagStart.updateContext = function() {
              this.context.push(u), this.context.push(n), this.exprAllowed = false;
            }, d.jsxTagEnd.updateContext = function(l) {
              let C = this.context.pop();
              C === n && l === i.slash || C === o ? (this.context.pop(), this.exprAllowed = this.curContext() === u) : this.exprAllowed = true;
            }, t = { tokContexts: p, tokTypes: d }, Gt.set(e, t);
          }
          return t;
        }
        function ne(e) {
          if (!e) return e;
          if (e.type === "JSXIdentifier") return e.name;
          if (e.type === "JSXNamespacedName") return e.namespace.name + ":" + e.name.name;
          if (e.type === "JSXMemberExpression") return ne(e.object) + "." + ne(e.property);
        }
        Je.exports = function(e) {
          return e = e || {}, function(t) {
            return os({ allowNamespaces: e.allowNamespaces !== false, allowNamespacedObjects: !!e.allowNamespacedObjects }, t);
          };
        };
        Object.defineProperty(Je.exports, "tokTypes", { get: function() {
          return Kt(void 0).tokTypes;
        }, configurable: true, enumerable: true });
        function os(e, t) {
          let i = t.acorn || void 0, s = Kt(i), r = i.tokTypes, n = s.tokTypes, o = i.tokContexts, u = s.tokContexts.tc_oTag, p = s.tokContexts.tc_cTag, d = s.tokContexts.tc_expr, l = i.isNewLine, C = i.isIdentifierStart, B = i.isIdentifierChar;
          return class extends t {
            static get acornJsx() {
              return s;
            }
            jsx_readToken() {
              let h = "", m = this.pos;
              for (; ; ) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
                let x = this.input.charCodeAt(this.pos);
                switch (x) {
                  case 60:
                  case 123:
                    return this.pos === this.start ? x === 60 && this.exprAllowed ? (++this.pos, this.finishToken(n.jsxTagStart)) : this.getTokenFromCode(x) : (h += this.input.slice(m, this.pos), this.finishToken(n.jsxText, h));
                  case 38:
                    h += this.input.slice(m, this.pos), h += this.jsx_readEntity(), m = this.pos;
                    break;
                  case 62:
                  case 125:
                    this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (x === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
                  default:
                    l(x) ? (h += this.input.slice(m, this.pos), h += this.jsx_readNewLine(true), m = this.pos) : ++this.pos;
                }
              }
            }
            jsx_readNewLine(h) {
              let m = this.input.charCodeAt(this.pos), x;
              return ++this.pos, m === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, x = h ? `
` : `\r
`) : x = String.fromCharCode(m), this.options.locations && (++this.curLine, this.lineStart = this.pos), x;
            }
            jsx_readString(h) {
              let m = "", x = ++this.pos;
              for (; ; ) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                let g = this.input.charCodeAt(this.pos);
                if (g === h) break;
                g === 38 ? (m += this.input.slice(x, this.pos), m += this.jsx_readEntity(), x = this.pos) : l(g) ? (m += this.input.slice(x, this.pos), m += this.jsx_readNewLine(false), x = this.pos) : ++this.pos;
              }
              return m += this.input.slice(x, this.pos++), this.finishToken(r.string, m);
            }
            jsx_readEntity() {
              let h = "", m = 0, x, g = this.input[this.pos];
              g !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
              let w = ++this.pos;
              for (; this.pos < this.input.length && m++ < 10; ) {
                if (g = this.input[this.pos++], g === ";") {
                  h[0] === "#" ? h[1] === "x" ? (h = h.substr(2), as.test(h) && (x = String.fromCharCode(parseInt(h, 16)))) : (h = h.substr(1), ns.test(h) && (x = String.fromCharCode(parseInt(h, 10)))) : x = rs[h];
                  break;
                }
                h += g;
              }
              return x || (this.pos = w, "&");
            }
            jsx_readWord() {
              let h, m = this.pos;
              do
                h = this.input.charCodeAt(++this.pos);
              while (B(h) || h === 45);
              return this.finishToken(n.jsxName, this.input.slice(m, this.pos));
            }
            jsx_parseIdentifier() {
              let h = this.startNode();
              return this.type === n.jsxName ? h.name = this.value : this.type.keyword ? h.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(h, "JSXIdentifier");
            }
            jsx_parseNamespacedName() {
              let h = this.start, m = this.startLoc, x = this.jsx_parseIdentifier();
              if (!e.allowNamespaces || !this.eat(r.colon)) return x;
              var g = this.startNodeAt(h, m);
              return g.namespace = x, g.name = this.jsx_parseIdentifier(), this.finishNode(g, "JSXNamespacedName");
            }
            jsx_parseElementName() {
              if (this.type === n.jsxTagEnd) return "";
              let h = this.start, m = this.startLoc, x = this.jsx_parseNamespacedName();
              for (this.type === r.dot && x.type === "JSXNamespacedName" && !e.allowNamespacedObjects && this.unexpected(); this.eat(r.dot); ) {
                let g = this.startNodeAt(h, m);
                g.object = x, g.property = this.jsx_parseIdentifier(), x = this.finishNode(g, "JSXMemberExpression");
              }
              return x;
            }
            jsx_parseAttributeValue() {
              switch (this.type) {
                case r.braceL:
                  let h = this.jsx_parseExpressionContainer();
                  return h.expression.type === "JSXEmptyExpression" && this.raise(h.start, "JSX attributes must only be assigned a non-empty expression"), h;
                case n.jsxTagStart:
                case r.string:
                  return this.parseExprAtom();
                default:
                  this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
              }
            }
            jsx_parseEmptyExpression() {
              let h = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
              return this.finishNodeAt(h, "JSXEmptyExpression", this.start, this.startLoc);
            }
            jsx_parseExpressionContainer() {
              let h = this.startNode();
              return this.next(), h.expression = this.type === r.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(r.braceR), this.finishNode(h, "JSXExpressionContainer");
            }
            jsx_parseAttribute() {
              let h = this.startNode();
              return this.eat(r.braceL) ? (this.expect(r.ellipsis), h.argument = this.parseMaybeAssign(), this.expect(r.braceR), this.finishNode(h, "JSXSpreadAttribute")) : (h.name = this.jsx_parseNamespacedName(), h.value = this.eat(r.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(h, "JSXAttribute"));
            }
            jsx_parseOpeningElementAt(h, m) {
              let x = this.startNodeAt(h, m);
              x.attributes = [];
              let g = this.jsx_parseElementName();
              for (g && (x.name = g); this.type !== r.slash && this.type !== n.jsxTagEnd; ) x.attributes.push(this.jsx_parseAttribute());
              return x.selfClosing = this.eat(r.slash), this.expect(n.jsxTagEnd), this.finishNode(x, g ? "JSXOpeningElement" : "JSXOpeningFragment");
            }
            jsx_parseClosingElementAt(h, m) {
              let x = this.startNodeAt(h, m), g = this.jsx_parseElementName();
              return g && (x.name = g), this.expect(n.jsxTagEnd), this.finishNode(x, g ? "JSXClosingElement" : "JSXClosingFragment");
            }
            jsx_parseElementAt(h, m) {
              let x = this.startNodeAt(h, m), g = [], w = this.jsx_parseOpeningElementAt(h, m), he = null;
              if (!w.selfClosing) {
                e: for (; ; ) switch (this.type) {
                  case n.jsxTagStart:
                    if (h = this.start, m = this.startLoc, this.next(), this.eat(r.slash)) {
                      he = this.jsx_parseClosingElementAt(h, m);
                      break e;
                    }
                    g.push(this.jsx_parseElementAt(h, m));
                    break;
                  case n.jsxText:
                    g.push(this.parseExprAtom());
                    break;
                  case r.braceL:
                    g.push(this.jsx_parseExpressionContainer());
                    break;
                  default:
                    this.unexpected();
                }
                ne(he.name) !== ne(w.name) && this.raise(he.start, "Expected corresponding JSX closing tag for <" + ne(w.name) + ">");
              }
              let we = w.name ? "Element" : "Fragment";
              return x["opening" + we] = w, x["closing" + we] = he, x.children = g, this.type === r.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(x, "JSX" + we);
            }
            jsx_parseText() {
              let h = this.parseLiteral(this.value);
              return h.type = "JSXText", h;
            }
            jsx_parseElement() {
              let h = this.start, m = this.startLoc;
              return this.next(), this.jsx_parseElementAt(h, m);
            }
            parseExprAtom(h) {
              return this.type === n.jsxText ? this.jsx_parseText() : this.type === n.jsxTagStart ? this.jsx_parseElement() : super.parseExprAtom(h);
            }
            readToken(h) {
              let m = this.curContext();
              if (m === d) return this.jsx_readToken();
              if (m === u || m === p) {
                if (C(h)) return this.jsx_readWord();
                if (h == 62) return ++this.pos, this.finishToken(n.jsxTagEnd);
                if ((h === 34 || h === 39) && m == u) return this.jsx_readString(h);
              }
              return h === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33 ? (++this.pos, this.finishToken(n.jsxTagStart)) : super.readToken(h);
            }
            updateContext(h) {
              if (this.type == r.braceL) {
                var m = this.curContext();
                m == u ? this.context.push(o.b_expr) : m == d ? this.context.push(o.b_tmpl) : super.updateContext(h), this.exprAllowed = true;
              } else if (this.type === r.slash && h === n.jsxTagStart) this.context.length -= 2, this.context.push(p), this.exprAllowed = false;
              else return super.updateContext(h);
            }
          };
        }
      });
      var Ws = {};
      vi(Ws, { parsers: () => Xs });
      var Si = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], nt = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Ci = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ot = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Ae = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" }, Pe = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", _i = { 5: Pe, "5module": Pe + " export import", 6: Pe + " const class extends export import super" }, Ti = /^in(stanceof)?$/, ki = new RegExp("[" + ot + "]"), Ei = new RegExp("[" + ot + Ci + "]");
      function Ne(e, t) {
        for (var i = 65536, s = 0; s < t.length; s += 2) {
          if (i += t[s], i > e) return false;
          if (i += t[s + 1], i >= e) return true;
        }
        return false;
      }
      function U(e, t) {
        return e < 65 ? e === 36 : e < 91 ? true : e < 97 ? e === 95 : e < 123 ? true : e <= 65535 ? e >= 170 && ki.test(String.fromCharCode(e)) : t === false ? false : Ne(e, nt);
      }
      function z(e, t) {
        return e < 48 ? e === 36 : e < 58 ? true : e < 65 ? false : e < 91 ? true : e < 97 ? e === 95 : e < 123 ? true : e <= 65535 ? e >= 170 && Ei.test(String.fromCharCode(e)) : t === false ? false : Ne(e, nt) || Ne(e, Si);
      }
      var S = function(t, i) {
        i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
      };
      function I(e, t) {
        return new S(e, { beforeExpr: true, binop: t });
      }
      var N = { beforeExpr: true }, A = { startsExpr: true }, Oe = {};
      function b(e, t) {
        return t === void 0 && (t = {}), t.keyword = e, Oe[e] = new S(e, t);
      }
      var a = { num: new S("num", A), regexp: new S("regexp", A), string: new S("string", A), name: new S("name", A), privateId: new S("privateId", A), eof: new S("eof"), bracketL: new S("[", { beforeExpr: true, startsExpr: true }), bracketR: new S("]"), braceL: new S("{", { beforeExpr: true, startsExpr: true }), braceR: new S("}"), parenL: new S("(", { beforeExpr: true, startsExpr: true }), parenR: new S(")"), comma: new S(",", N), semi: new S(";", N), colon: new S(":", N), dot: new S("."), question: new S("?", N), questionDot: new S("?."), arrow: new S("=>", N), template: new S("template"), invalidTemplate: new S("invalidTemplate"), ellipsis: new S("...", N), backQuote: new S("`", A), dollarBraceL: new S("${", { beforeExpr: true, startsExpr: true }), eq: new S("=", { beforeExpr: true, isAssign: true }), assign: new S("_=", { beforeExpr: true, isAssign: true }), incDec: new S("++/--", { prefix: true, postfix: true, startsExpr: true }), prefix: new S("!/~", { beforeExpr: true, prefix: true, startsExpr: true }), logicalOR: I("||", 1), logicalAND: I("&&", 2), bitwiseOR: I("|", 3), bitwiseXOR: I("^", 4), bitwiseAND: I("&", 5), equality: I("==/!=/===/!==", 6), relational: I("</>/<=/>=", 7), bitShift: I("<</>>/>>>", 8), plusMin: new S("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }), modulo: I("%", 10), star: I("*", 10), slash: I("/", 10), starstar: new S("**", { beforeExpr: true }), coalesce: I("??", 1), _break: b("break"), _case: b("case", N), _catch: b("catch"), _continue: b("continue"), _debugger: b("debugger"), _default: b("default", N), _do: b("do", { isLoop: true, beforeExpr: true }), _else: b("else", N), _finally: b("finally"), _for: b("for", { isLoop: true }), _function: b("function", A), _if: b("if"), _return: b("return", N), _switch: b("switch"), _throw: b("throw", N), _try: b("try"), _var: b("var"), _const: b("const"), _while: b("while", { isLoop: true }), _with: b("with"), _new: b("new", { beforeExpr: true, startsExpr: true }), _this: b("this", A), _super: b("super", A), _class: b("class", A), _extends: b("extends", N), _export: b("export"), _import: b("import", A), _null: b("null", A), _true: b("true", A), _false: b("false", A), _in: b("in", { beforeExpr: true, binop: 7 }), _instanceof: b("instanceof", { beforeExpr: true, binop: 7 }), _typeof: b("typeof", { beforeExpr: true, prefix: true, startsExpr: true }), _void: b("void", { beforeExpr: true, prefix: true, startsExpr: true }), _delete: b("delete", { beforeExpr: true, prefix: true, startsExpr: true }) }, R = /\r\n?|\n|\u2028|\u2029/, wi = new RegExp(R.source, "g");
      function Q(e) {
        return e === 10 || e === 13 || e === 8232 || e === 8233;
      }
      function ut(e, t, i) {
        i === void 0 && (i = e.length);
        for (var s = t; s < i; s++) {
          var r = e.charCodeAt(s);
          if (Q(r)) return s < i - 1 && r === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
        }
        return -1;
      }
      var pt = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, V = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ht = Object.prototype, Ai = ht.hasOwnProperty, Pi = ht.toString, se = Object.hasOwn || function(e, t) {
        return Ai.call(e, t);
      }, tt = Array.isArray || function(e) {
        return Pi.call(e) === "[object Array]";
      }, it = /* @__PURE__ */ Object.create(null);
      function G(e) {
        return it[e] || (it[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
      }
      function K(e) {
        return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
      }
      var Ii = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, te = function(t, i) {
        this.line = t, this.column = i;
      };
      te.prototype.offset = function(t) {
        return new te(this.line, this.column + t);
      };
      var ye = function(t, i, s) {
        this.start = i, this.end = s, t.sourceFile !== null && (this.source = t.sourceFile);
      };
      function ct(e, t) {
        for (var i = 1, s = 0; ; ) {
          var r = ut(e, s, t);
          if (r < 0) return new te(i, t - s);
          ++i, s = r;
        }
      }
      var Ve = { ecmaVersion: null, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: false, allowImportExportEverywhere: false, allowAwaitOutsideFunction: null, allowSuperOutsideMethod: null, allowHashBang: false, checkPrivateFields: true, locations: false, onToken: null, onComment: null, ranges: false, program: null, sourceFile: null, directSourceFile: null, preserveParens: false }, st = false;
      function Ni(e) {
        var t = {};
        for (var i in Ve) t[i] = e && se(e, i) ? e[i] : Ve[i];
        if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!st && typeof console == "object" && console.warn && (st = true, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), tt(t.onToken)) {
          var s = t.onToken;
          t.onToken = function(r) {
            return s.push(r);
          };
        }
        return tt(t.onComment) && (t.onComment = Vi(t, t.onComment)), t;
      }
      function Vi(e, t) {
        return function(i, s, r, n, o, u) {
          var p = { type: i ? "Block" : "Line", value: s, start: r, end: n };
          e.locations && (p.loc = new ye(this, o, u)), e.ranges && (p.range = [r, n]), t.push(p);
        };
      }
      var ie = 1, Y = 2, Be = 4, lt = 8, ft = 16, dt = 32, De = 64, mt = 128, re = 256, Fe = ie | Y | re;
      function Me(e, t) {
        return Y | (e ? Be : 0) | (t ? lt : 0);
      }
      var fe = 0, je = 1, J = 2, xt = 3, yt = 4, gt = 5, T = function(t, i, s) {
        this.options = t = Ni(t), this.sourceFile = t.sourceFile, this.keywords = G(_i[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
        var r = "";
        t.allowReserved !== true && (r = Ae[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (r += " await")), this.reservedWords = G(r);
        var n = (r ? r + " " : "") + Ae.strict;
        this.reservedWordsStrict = G(n), this.reservedWordsStrictBind = G(n + " " + Ae.strictBind), this.input = String(i), this.containsEsc = false, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf(`
`, s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(R).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = a.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = true, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = false, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(ie), this.regexpState = null, this.privateNameStack = [];
      }, F = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
      T.prototype.parse = function() {
        var t = this.options.program || this.startNode();
        return this.nextToken(), this.parseTopLevel(t);
      };
      F.inFunction.get = function() {
        return (this.currentVarScope().flags & Y) > 0;
      };
      F.inGenerator.get = function() {
        return (this.currentVarScope().flags & lt) > 0 && !this.currentVarScope().inClassFieldInit;
      };
      F.inAsync.get = function() {
        return (this.currentVarScope().flags & Be) > 0 && !this.currentVarScope().inClassFieldInit;
      };
      F.canAwait.get = function() {
        for (var e = this.scopeStack.length - 1; e >= 0; e--) {
          var t = this.scopeStack[e];
          if (t.inClassFieldInit || t.flags & re) return false;
          if (t.flags & Y) return (t.flags & Be) > 0;
        }
        return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
      };
      F.allowSuper.get = function() {
        var e = this.currentThisScope(), t = e.flags, i = e.inClassFieldInit;
        return (t & De) > 0 || i || this.options.allowSuperOutsideMethod;
      };
      F.allowDirectSuper.get = function() {
        return (this.currentThisScope().flags & mt) > 0;
      };
      F.treatFunctionsAsVar.get = function() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      };
      F.allowNewDotTarget.get = function() {
        var e = this.currentThisScope(), t = e.flags, i = e.inClassFieldInit;
        return (t & (Y | re)) > 0 || i;
      };
      F.inClassStaticBlock.get = function() {
        return (this.currentVarScope().flags & re) > 0;
      };
      T.extend = function() {
        for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
        for (var s = this, r = 0; r < t.length; r++) s = t[r](s);
        return s;
      };
      T.parse = function(t, i) {
        return new this(i, t).parse();
      };
      T.parseExpressionAt = function(t, i, s) {
        var r = new this(s, t, i);
        return r.nextToken(), r.parseExpression();
      };
      T.tokenizer = function(t, i) {
        return new this(i, t);
      };
      Object.defineProperties(T.prototype, F);
      var k = T.prototype, Li = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
      k.strictDirective = function(e) {
        if (this.options.ecmaVersion < 5) return false;
        for (; ; ) {
          V.lastIndex = e, e += V.exec(this.input)[0].length;
          var t = Li.exec(this.input.slice(e));
          if (!t) return false;
          if ((t[1] || t[2]) === "use strict") {
            V.lastIndex = e + t[0].length;
            var i = V.exec(this.input), s = i.index + i[0].length, r = this.input.charAt(s);
            return r === ";" || r === "}" || R.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || r === "!" && this.input.charAt(s + 1) === "=");
          }
          e += t[0].length, V.lastIndex = e, e += V.exec(this.input)[0].length, this.input[e] === ";" && e++;
        }
      };
      k.eat = function(e) {
        return this.type === e ? (this.next(), true) : false;
      };
      k.isContextual = function(e) {
        return this.type === a.name && this.value === e && !this.containsEsc;
      };
      k.eatContextual = function(e) {
        return this.isContextual(e) ? (this.next(), true) : false;
      };
      k.expectContextual = function(e) {
        this.eatContextual(e) || this.unexpected();
      };
      k.canInsertSemicolon = function() {
        return this.type === a.eof || this.type === a.braceR || R.test(this.input.slice(this.lastTokEnd, this.start));
      };
      k.insertSemicolon = function() {
        if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), true;
      };
      k.semicolon = function() {
        !this.eat(a.semi) && !this.insertSemicolon() && this.unexpected();
      };
      k.afterTrailingComma = function(e, t) {
        if (this.type === e) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), true;
      };
      k.expect = function(e) {
        this.eat(e) || this.unexpected();
      };
      k.unexpected = function(e) {
        this.raise(e ?? this.start, "Unexpected token");
      };
      var ge = function() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
      };
      k.checkPatternErrors = function(e, t) {
        if (e) {
          e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
          var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
          i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
        }
      };
      k.checkExpressionErrors = function(e, t) {
        if (!e) return false;
        var i = e.shorthandAssign, s = e.doubleProto;
        if (!t) return i >= 0 || s >= 0;
        i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
      };
      k.checkYieldAwaitInDefaultParams = function() {
        this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
      };
      k.isSimpleAssignTarget = function(e) {
        return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
      };
      var f = T.prototype;
      f.parseTopLevel = function(e) {
        var t = /* @__PURE__ */ Object.create(null);
        for (e.body || (e.body = []); this.type !== a.eof; ) {
          var i = this.parseStatement(null, true, t);
          e.body.push(i);
        }
        if (this.inModule) for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
          var n = r[s];
          this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined");
        }
        return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
      };
      var Ue = { kind: "loop" }, Ri = { kind: "switch" };
      f.isLet = function(e) {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return false;
        V.lastIndex = this.pos;
        var t = V.exec(this.input), i = this.pos + t[0].length, s = this.input.charCodeAt(i);
        if (s === 91 || s === 92) return true;
        if (e) return false;
        if (s === 123 || s > 55295 && s < 56320) return true;
        if (U(s, true)) {
          for (var r = i + 1; z(s = this.input.charCodeAt(r), true); ) ++r;
          if (s === 92 || s > 55295 && s < 56320) return true;
          var n = this.input.slice(i, r);
          if (!Ti.test(n)) return true;
        }
        return false;
      };
      f.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return false;
        V.lastIndex = this.pos;
        var e = V.exec(this.input), t = this.pos + e[0].length, i;
        return !R.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(z(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
      };
      f.parseStatement = function(e, t, i) {
        var s = this.type, r = this.startNode(), n;
        switch (this.isLet(e) && (s = a._var, n = "let"), s) {
          case a._break:
          case a._continue:
            return this.parseBreakContinueStatement(r, s.keyword);
          case a._debugger:
            return this.parseDebuggerStatement(r);
          case a._do:
            return this.parseDoStatement(r);
          case a._for:
            return this.parseForStatement(r);
          case a._function:
            return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(r, false, !e);
          case a._class:
            return e && this.unexpected(), this.parseClass(r, true);
          case a._if:
            return this.parseIfStatement(r);
          case a._return:
            return this.parseReturnStatement(r);
          case a._switch:
            return this.parseSwitchStatement(r);
          case a._throw:
            return this.parseThrowStatement(r);
          case a._try:
            return this.parseTryStatement(r);
          case a._const:
          case a._var:
            return n = n || this.value, e && n !== "var" && this.unexpected(), this.parseVarStatement(r, n);
          case a._while:
            return this.parseWhileStatement(r);
          case a._with:
            return this.parseWithStatement(r);
          case a.braceL:
            return this.parseBlock(true, r);
          case a.semi:
            return this.parseEmptyStatement(r);
          case a._export:
          case a._import:
            if (this.options.ecmaVersion > 10 && s === a._import) {
              V.lastIndex = this.pos;
              var o = V.exec(this.input), u = this.pos + o[0].length, p = this.input.charCodeAt(u);
              if (p === 40 || p === 46) return this.parseExpressionStatement(r, this.parseExpression());
            }
            return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), s === a._import ? this.parseImport(r) : this.parseExport(r, i);
          default:
            if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(r, true, !e);
            var d = this.value, l = this.parseExpression();
            return s === a.name && l.type === "Identifier" && this.eat(a.colon) ? this.parseLabeledStatement(r, d, l, e) : this.parseExpressionStatement(r, l);
        }
      };
      f.parseBreakContinueStatement = function(e, t) {
        var i = t === "break";
        this.next(), this.eat(a.semi) || this.insertSemicolon() ? e.label = null : this.type !== a.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
        for (var s = 0; s < this.labels.length; ++s) {
          var r = this.labels[s];
          if ((e.label == null || r.name === e.label.name) && (r.kind != null && (i || r.kind === "loop") || e.label && i)) break;
        }
        return s === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
      };
      f.parseDebuggerStatement = function(e) {
        return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
      };
      f.parseDoStatement = function(e) {
        return this.next(), this.labels.push(Ue), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(a._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(a.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
      };
      f.parseForStatement = function(e) {
        this.next();
        var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
        if (this.labels.push(Ue), this.enterScope(0), this.expect(a.parenL), this.type === a.semi) return t > -1 && this.unexpected(t), this.parseFor(e, null);
        var i = this.isLet();
        if (this.type === a._var || this.type === a._const || i) {
          var s = this.startNode(), r = i ? "let" : this.value;
          return this.next(), this.parseVar(s, true, r), this.finishNode(s, "VariableDeclaration"), (this.type === a._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && s.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === a._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, s)) : (t > -1 && this.unexpected(t), this.parseFor(e, s));
        }
        var n = this.isContextual("let"), o = false, u = this.containsEsc, p = new ge(), d = this.start, l = t > -1 ? this.parseExprSubscripts(p, "await") : this.parseExpression(true, p);
        return this.type === a._in || (o = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === a._in && this.unexpected(t), e.await = true) : o && this.options.ecmaVersion >= 8 && (l.start === d && !u && l.type === "Identifier" && l.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = false)), n && o && this.raise(l.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(l, false, p), this.checkLValPattern(l), this.parseForIn(e, l)) : (this.checkExpressionErrors(p, true), t > -1 && this.unexpected(t), this.parseFor(e, l));
      };
      f.parseFunctionStatement = function(e, t, i) {
        return this.next(), this.parseFunction(e, ee | (i ? 0 : Le), false, t);
      };
      f.parseIfStatement = function(e) {
        return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(a._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
      };
      f.parseReturnStatement = function(e) {
        return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(a.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
      };
      f.parseSwitchStatement = function(e) {
        this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(a.braceL), this.labels.push(Ri), this.enterScope(0);
        for (var t, i = false; this.type !== a.braceR; ) if (this.type === a._case || this.type === a._default) {
          var s = this.type === a._case;
          t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), s ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = true, t.test = null), this.expect(a.colon);
        } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
        return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
      };
      f.parseThrowStatement = function(e) {
        return this.next(), R.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
      };
      var Oi = [];
      f.parseCatchClauseParam = function() {
        var e = this.parseBindingAtom(), t = e.type === "Identifier";
        return this.enterScope(t ? dt : 0), this.checkLValPattern(e, t ? yt : J), this.expect(a.parenR), e;
      };
      f.parseTryStatement = function(e) {
        if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === a._catch) {
          var t = this.startNode();
          this.next(), this.eat(a.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(false), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
        }
        return e.finalizer = this.eat(a._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
      };
      f.parseVarStatement = function(e, t, i) {
        return this.next(), this.parseVar(e, false, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
      };
      f.parseWhileStatement = function(e) {
        return this.next(), e.test = this.parseParenExpression(), this.labels.push(Ue), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
      };
      f.parseWithStatement = function(e) {
        return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
      };
      f.parseEmptyStatement = function(e) {
        return this.next(), this.finishNode(e, "EmptyStatement");
      };
      f.parseLabeledStatement = function(e, t, i, s) {
        for (var r = 0, n = this.labels; r < n.length; r += 1) {
          var o = n[r];
          o.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
        }
        for (var u = this.type.isLoop ? "loop" : this.type === a._switch ? "switch" : null, p = this.labels.length - 1; p >= 0; p--) {
          var d = this.labels[p];
          if (d.statementStart === e.start) d.statementStart = this.start, d.kind = u;
          else break;
        }
        return this.labels.push({ name: t, kind: u, statementStart: this.start }), e.body = this.parseStatement(s ? s.indexOf("label") === -1 ? s + "label" : s : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
      };
      f.parseExpressionStatement = function(e, t) {
        return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
      };
      f.parseBlock = function(e, t, i) {
        for (e === void 0 && (e = true), t === void 0 && (t = this.startNode()), t.body = [], this.expect(a.braceL), e && this.enterScope(0); this.type !== a.braceR; ) {
          var s = this.parseStatement(null);
          t.body.push(s);
        }
        return i && (this.strict = false), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
      };
      f.parseFor = function(e, t) {
        return e.init = t, this.expect(a.semi), e.test = this.type === a.semi ? null : this.parseExpression(), this.expect(a.semi), e.update = this.type === a.parenR ? null : this.parseExpression(), this.expect(a.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
      };
      f.parseForIn = function(e, t) {
        var i = this.type === a._in;
        return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(t.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(a.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
      };
      f.parseVar = function(e, t, i, s) {
        for (e.declarations = [], e.kind = i; ; ) {
          var r = this.startNode();
          if (this.parseVarId(r, i), this.eat(a.eq) ? r.init = this.parseMaybeAssign(t) : !s && i === "const" && !(this.type === a._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !s && r.id.type !== "Identifier" && !(t && (this.type === a._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : r.init = null, e.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(a.comma)) break;
        }
        return e;
      };
      f.parseVarId = function(e, t) {
        e.id = this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? je : J, false);
      };
      var ee = 1, Le = 2, vt = 4;
      f.parseFunction = function(e, t, i, s, r) {
        this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === a.star && t & Le && this.unexpected(), e.generator = this.eat(a.star)), this.options.ecmaVersion >= 8 && (e.async = !!s), t & ee && (e.id = t & vt && this.type !== a.name ? null : this.parseIdent(), e.id && !(t & Le) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? je : J : xt));
        var n = this.yieldPos, o = this.awaitPos, u = this.awaitIdentPos;
        return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Me(e.async, e.generator)), t & ee || (e.id = this.type === a.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, false, r), this.yieldPos = n, this.awaitPos = o, this.awaitIdentPos = u, this.finishNode(e, t & ee ? "FunctionDeclaration" : "FunctionExpression");
      };
      f.parseFunctionParams = function(e) {
        this.expect(a.parenL), e.params = this.parseBindingList(a.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
      };
      f.parseClass = function(e, t) {
        this.next();
        var i = this.strict;
        this.strict = true, this.parseClassId(e, t), this.parseClassSuper(e);
        var s = this.enterClassBody(), r = this.startNode(), n = false;
        for (r.body = [], this.expect(a.braceL); this.type !== a.braceR; ) {
          var o = this.parseClassElement(e.superClass !== null);
          o && (r.body.push(o), o.type === "MethodDefinition" && o.kind === "constructor" ? (n && this.raiseRecoverable(o.start, "Duplicate constructor in the same class"), n = true) : o.key && o.key.type === "PrivateIdentifier" && Bi(s, o) && this.raiseRecoverable(o.key.start, "Identifier '#" + o.key.name + "' has already been declared"));
        }
        return this.strict = i, this.next(), e.body = this.finishNode(r, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
      };
      f.parseClassElement = function(e) {
        if (this.eat(a.semi)) return null;
        var t = this.options.ecmaVersion, i = this.startNode(), s = "", r = false, n = false, o = "method", u = false;
        if (this.eatContextual("static")) {
          if (t >= 13 && this.eat(a.braceL)) return this.parseClassStaticBlock(i), i;
          this.isClassElementNameStart() || this.type === a.star ? u = true : s = "static";
        }
        if (i.static = u, !s && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === a.star) && !this.canInsertSemicolon() ? n = true : s = "async"), !s && (t >= 9 || !n) && this.eat(a.star) && (r = true), !s && !n && !r) {
          var p = this.value;
          (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? o = p : s = p);
        }
        if (s ? (i.computed = false, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = s, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === a.parenL || o !== "method" || r || n) {
          var d = !i.static && de(i, "constructor"), l = d && e;
          d && o !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = d ? "constructor" : o, this.parseClassMethod(i, r, n, l);
        } else this.parseClassField(i);
        return i;
      };
      f.isClassElementNameStart = function() {
        return this.type === a.name || this.type === a.privateId || this.type === a.num || this.type === a.string || this.type === a.bracketL || this.type.keyword;
      };
      f.parseClassElementName = function(e) {
        this.type === a.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = false, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
      };
      f.parseClassMethod = function(e, t, i, s) {
        var r = e.key;
        e.kind === "constructor" ? (t && this.raise(r.start, "Constructor can't be a generator"), i && this.raise(r.start, "Constructor can't be an async method")) : e.static && de(e, "prototype") && this.raise(r.start, "Classes may not have a static property named prototype");
        var n = e.value = this.parseMethod(t, i, s);
        return e.kind === "get" && n.params.length !== 0 && this.raiseRecoverable(n.start, "getter should have no params"), e.kind === "set" && n.params.length !== 1 && this.raiseRecoverable(n.start, "setter should have exactly one param"), e.kind === "set" && n.params[0].type === "RestElement" && this.raiseRecoverable(n.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
      };
      f.parseClassField = function(e) {
        if (de(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && de(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(a.eq)) {
          var t = this.currentThisScope(), i = t.inClassFieldInit;
          t.inClassFieldInit = true, e.value = this.parseMaybeAssign(), t.inClassFieldInit = i;
        } else e.value = null;
        return this.semicolon(), this.finishNode(e, "PropertyDefinition");
      };
      f.parseClassStaticBlock = function(e) {
        e.body = [];
        var t = this.labels;
        for (this.labels = [], this.enterScope(re | De); this.type !== a.braceR; ) {
          var i = this.parseStatement(null);
          e.body.push(i);
        }
        return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
      };
      f.parseClassId = function(e, t) {
        this.type === a.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, J, false)) : (t === true && this.unexpected(), e.id = null);
      };
      f.parseClassSuper = function(e) {
        e.superClass = this.eat(a._extends) ? this.parseExprSubscripts(null, false) : null;
      };
      f.enterClassBody = function() {
        var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
        return this.privateNameStack.push(e), e.declared;
      };
      f.exitClassBody = function() {
        var e = this.privateNameStack.pop(), t = e.declared, i = e.used;
        if (this.options.checkPrivateFields) for (var s = this.privateNameStack.length, r = s === 0 ? null : this.privateNameStack[s - 1], n = 0; n < i.length; ++n) {
          var o = i[n];
          se(t, o.name) || (r ? r.used.push(o) : this.raiseRecoverable(o.start, "Private field '#" + o.name + "' must be declared in an enclosing class"));
        }
      };
      function Bi(e, t) {
        var i = t.key.name, s = e[i], r = "true";
        return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (r = (t.static ? "s" : "i") + t.kind), s === "iget" && r === "iset" || s === "iset" && r === "iget" || s === "sget" && r === "sset" || s === "sset" && r === "sget" ? (e[i] = "true", false) : s ? true : (e[i] = r, false);
      }
      function de(e, t) {
        var i = e.computed, s = e.key;
        return !i && (s.type === "Identifier" && s.name === t || s.type === "Literal" && s.value === t);
      }
      f.parseExportAllDeclaration = function(e, t) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== a.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
      };
      f.parseExport = function(e, t) {
        if (this.next(), this.eat(a.star)) return this.parseExportAllDeclaration(e, t);
        if (this.eat(a._default)) return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null;
        else {
          if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== a.string && this.unexpected(), e.source = this.parseExprAtom();
          else {
            for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
              var r = s[i];
              this.checkUnreserved(r.local), this.checkLocalExport(r.local), r.local.type === "Literal" && this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            e.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(e, "ExportNamedDeclaration");
      };
      f.parseExportDeclaration = function(e) {
        return this.parseStatement(null);
      };
      f.parseExportDefaultDeclaration = function() {
        var e;
        if (this.type === a._function || (e = this.isAsyncFunction())) {
          var t = this.startNode();
          return this.next(), e && this.next(), this.parseFunction(t, ee | vt, false, e);
        } else if (this.type === a._class) {
          var i = this.startNode();
          return this.parseClass(i, "nullableID");
        } else {
          var s = this.parseMaybeAssign();
          return this.semicolon(), s;
        }
      };
      f.checkExport = function(e, t, i) {
        e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), se(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = true);
      };
      f.checkPatternExport = function(e, t) {
        var i = t.type;
        if (i === "Identifier") this.checkExport(e, t, t.start);
        else if (i === "ObjectPattern") for (var s = 0, r = t.properties; s < r.length; s += 1) {
          var n = r[s];
          this.checkPatternExport(e, n);
        }
        else if (i === "ArrayPattern") for (var o = 0, u = t.elements; o < u.length; o += 1) {
          var p = u[o];
          p && this.checkPatternExport(e, p);
        }
        else i === "Property" ? this.checkPatternExport(e, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : i === "RestElement" && this.checkPatternExport(e, t.argument);
      };
      f.checkVariableExport = function(e, t) {
        if (e) for (var i = 0, s = t; i < s.length; i += 1) {
          var r = s[i];
          this.checkPatternExport(e, r.id);
        }
      };
      f.shouldParseExportStatement = function() {
        return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
      };
      f.parseExportSpecifier = function(e) {
        var t = this.startNode();
        return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(e, t.exported, t.exported.start), this.finishNode(t, "ExportSpecifier");
      };
      f.parseExportSpecifiers = function(e) {
        var t = [], i = true;
        for (this.expect(a.braceL); !this.eat(a.braceR); ) {
          if (i) i = false;
          else if (this.expect(a.comma), this.afterTrailingComma(a.braceR)) break;
          t.push(this.parseExportSpecifier(e));
        }
        return t;
      };
      f.parseImport = function(e) {
        return this.next(), this.type === a.string ? (e.specifiers = Oi, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === a.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
      };
      f.parseImportSpecifier = function() {
        var e = this.startNode();
        return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, J), this.finishNode(e, "ImportSpecifier");
      };
      f.parseImportDefaultSpecifier = function() {
        var e = this.startNode();
        return e.local = this.parseIdent(), this.checkLValSimple(e.local, J), this.finishNode(e, "ImportDefaultSpecifier");
      };
      f.parseImportNamespaceSpecifier = function() {
        var e = this.startNode();
        return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, J), this.finishNode(e, "ImportNamespaceSpecifier");
      };
      f.parseImportSpecifiers = function() {
        var e = [], t = true;
        if (this.type === a.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(a.comma))) return e;
        if (this.type === a.star) return e.push(this.parseImportNamespaceSpecifier()), e;
        for (this.expect(a.braceL); !this.eat(a.braceR); ) {
          if (t) t = false;
          else if (this.expect(a.comma), this.afterTrailingComma(a.braceR)) break;
          e.push(this.parseImportSpecifier());
        }
        return e;
      };
      f.parseModuleExportName = function() {
        if (this.options.ecmaVersion >= 13 && this.type === a.string) {
          var e = this.parseLiteral(this.value);
          return Ii.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
        }
        return this.parseIdent(true);
      };
      f.adaptDirectivePrologue = function(e) {
        for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
      };
      f.isDirectiveCandidate = function(e) {
        return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && (this.input[e.start] === '"' || this.input[e.start] === "'");
      };
      var O = T.prototype;
      O.toAssignable = function(e, t, i) {
        if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
          case "Identifier":
            this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
            break;
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            break;
          case "ObjectExpression":
            e.type = "ObjectPattern", i && this.checkPatternErrors(i, true);
            for (var s = 0, r = e.properties; s < r.length; s += 1) {
              var n = r[s];
              this.toAssignable(n, t), n.type === "RestElement" && (n.argument.type === "ArrayPattern" || n.argument.type === "ObjectPattern") && this.raise(n.argument.start, "Unexpected token");
            }
            break;
          case "Property":
            e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
            break;
          case "ArrayExpression":
            e.type = "ArrayPattern", i && this.checkPatternErrors(i, true), this.toAssignableList(e.elements, t);
            break;
          case "SpreadElement":
            e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
            break;
          case "AssignmentExpression":
            e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
            break;
          case "ParenthesizedExpression":
            this.toAssignable(e.expression, t, i);
            break;
          case "ChainExpression":
            this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            if (!t) break;
          default:
            this.raise(e.start, "Assigning to rvalue");
        }
        else i && this.checkPatternErrors(i, true);
        return e;
      };
      O.toAssignableList = function(e, t) {
        for (var i = e.length, s = 0; s < i; s++) {
          var r = e[s];
          r && this.toAssignable(r, t);
        }
        if (i) {
          var n = e[i - 1];
          this.options.ecmaVersion === 6 && t && n && n.type === "RestElement" && n.argument.type !== "Identifier" && this.unexpected(n.argument.start);
        }
        return e;
      };
      O.parseSpread = function(e) {
        var t = this.startNode();
        return this.next(), t.argument = this.parseMaybeAssign(false, e), this.finishNode(t, "SpreadElement");
      };
      O.parseRestBinding = function() {
        var e = this.startNode();
        return this.next(), this.options.ecmaVersion === 6 && this.type !== a.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
      };
      O.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6) switch (this.type) {
          case a.bracketL:
            var e = this.startNode();
            return this.next(), e.elements = this.parseBindingList(a.bracketR, true, true), this.finishNode(e, "ArrayPattern");
          case a.braceL:
            return this.parseObj(true);
        }
        return this.parseIdent();
      };
      O.parseBindingList = function(e, t, i, s) {
        for (var r = [], n = true; !this.eat(e); ) if (n ? n = false : this.expect(a.comma), t && this.type === a.comma) r.push(null);
        else {
          if (i && this.afterTrailingComma(e)) break;
          if (this.type === a.ellipsis) {
            var o = this.parseRestBinding();
            this.parseBindingListItem(o), r.push(o), this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
            break;
          } else r.push(this.parseAssignableListItem(s));
        }
        return r;
      };
      O.parseAssignableListItem = function(e) {
        var t = this.parseMaybeDefault(this.start, this.startLoc);
        return this.parseBindingListItem(t), t;
      };
      O.parseBindingListItem = function(e) {
        return e;
      };
      O.parseMaybeDefault = function(e, t, i) {
        if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(a.eq)) return i;
        var s = this.startNodeAt(e, t);
        return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
      };
      O.checkLValSimple = function(e, t, i) {
        t === void 0 && (t = fe);
        var s = t !== fe;
        switch (e.type) {
          case "Identifier":
            this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (s ? "Binding " : "Assigning to ") + e.name + " in strict mode"), s && (t === J && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (se(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = true), t !== gt && this.declareName(e.name, t, e.start));
            break;
          case "ChainExpression":
            this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            s && this.raiseRecoverable(e.start, "Binding member expression");
            break;
          case "ParenthesizedExpression":
            return s && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, i);
          default:
            this.raise(e.start, (s ? "Binding" : "Assigning to") + " rvalue");
        }
      };
      O.checkLValPattern = function(e, t, i) {
        switch (t === void 0 && (t = fe), e.type) {
          case "ObjectPattern":
            for (var s = 0, r = e.properties; s < r.length; s += 1) {
              var n = r[s];
              this.checkLValInnerPattern(n, t, i);
            }
            break;
          case "ArrayPattern":
            for (var o = 0, u = e.elements; o < u.length; o += 1) {
              var p = u[o];
              p && this.checkLValInnerPattern(p, t, i);
            }
            break;
          default:
            this.checkLValSimple(e, t, i);
        }
      };
      O.checkLValInnerPattern = function(e, t, i) {
        switch (t === void 0 && (t = fe), e.type) {
          case "Property":
            this.checkLValInnerPattern(e.value, t, i);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(e.left, t, i);
            break;
          case "RestElement":
            this.checkLValPattern(e.argument, t, i);
            break;
          default:
            this.checkLValPattern(e, t, i);
        }
      };
      var D = function(t, i, s, r, n) {
        this.token = t, this.isExpr = !!i, this.preserveSpace = !!s, this.override = r, this.generator = !!n;
      }, _ = { b_stat: new D("{", false), b_expr: new D("{", true), b_tmpl: new D("${", false), p_stat: new D("(", false), p_expr: new D("(", true), q_tmpl: new D("`", true, true, function(e) {
        return e.tryReadTemplateToken();
      }), f_stat: new D("function", false), f_expr: new D("function", true), f_expr_gen: new D("function", true, false, null, true), f_gen: new D("function", false, false, null, true) }, $ = T.prototype;
      $.initialContext = function() {
        return [_.b_stat];
      };
      $.curContext = function() {
        return this.context[this.context.length - 1];
      };
      $.braceIsBlock = function(e) {
        var t = this.curContext();
        return t === _.f_expr || t === _.f_stat ? true : e === a.colon && (t === _.b_stat || t === _.b_expr) ? !t.isExpr : e === a._return || e === a.name && this.exprAllowed ? R.test(this.input.slice(this.lastTokEnd, this.start)) : e === a._else || e === a.semi || e === a.eof || e === a.parenR || e === a.arrow ? true : e === a.braceL ? t === _.b_stat : e === a._var || e === a._const || e === a.name ? false : !this.exprAllowed;
      };
      $.inGeneratorContext = function() {
        for (var e = this.context.length - 1; e >= 1; e--) {
          var t = this.context[e];
          if (t.token === "function") return t.generator;
        }
        return false;
      };
      $.updateContext = function(e) {
        var t, i = this.type;
        i.keyword && e === a.dot ? this.exprAllowed = false : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
      };
      $.overrideContext = function(e) {
        this.curContext() !== e && (this.context[this.context.length - 1] = e);
      };
      a.parenR.updateContext = a.braceR.updateContext = function() {
        if (this.context.length === 1) {
          this.exprAllowed = true;
          return;
        }
        var e = this.context.pop();
        e === _.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
      };
      a.braceL.updateContext = function(e) {
        this.context.push(this.braceIsBlock(e) ? _.b_stat : _.b_expr), this.exprAllowed = true;
      };
      a.dollarBraceL.updateContext = function() {
        this.context.push(_.b_tmpl), this.exprAllowed = true;
      };
      a.parenL.updateContext = function(e) {
        var t = e === a._if || e === a._for || e === a._with || e === a._while;
        this.context.push(t ? _.p_stat : _.p_expr), this.exprAllowed = true;
      };
      a.incDec.updateContext = function() {
      };
      a._function.updateContext = a._class.updateContext = function(e) {
        e.beforeExpr && e !== a._else && !(e === a.semi && this.curContext() !== _.p_stat) && !(e === a._return && R.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === a.colon || e === a.braceL) && this.curContext() === _.b_stat) ? this.context.push(_.f_expr) : this.context.push(_.f_stat), this.exprAllowed = false;
      };
      a.colon.updateContext = function() {
        this.curContext().token === "function" && this.context.pop(), this.exprAllowed = true;
      };
      a.backQuote.updateContext = function() {
        this.curContext() === _.q_tmpl ? this.context.pop() : this.context.push(_.q_tmpl), this.exprAllowed = false;
      };
      a.star.updateContext = function(e) {
        if (e === a._function) {
          var t = this.context.length - 1;
          this.context[t] === _.f_expr ? this.context[t] = _.f_expr_gen : this.context[t] = _.f_gen;
        }
        this.exprAllowed = true;
      };
      a.name.updateContext = function(e) {
        var t = false;
        this.options.ecmaVersion >= 6 && e !== a.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = true), this.exprAllowed = t;
      };
      var y = T.prototype;
      y.checkPropClash = function(e, t, i) {
        if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
          var s = e.key, r;
          switch (s.type) {
            case "Identifier":
              r = s.name;
              break;
            case "Literal":
              r = String(s.value);
              break;
            default:
              return;
          }
          var n = e.kind;
          if (this.options.ecmaVersion >= 6) {
            r === "__proto__" && n === "init" && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")), t.proto = true);
            return;
          }
          r = "$" + r;
          var o = t[r];
          if (o) {
            var u;
            n === "init" ? u = this.strict && o.init || o.get || o.set : u = o.init || o[n], u && this.raiseRecoverable(s.start, "Redefinition of property");
          } else o = t[r] = { init: false, get: false, set: false };
          o[n] = true;
        }
      };
      y.parseExpression = function(e, t) {
        var i = this.start, s = this.startLoc, r = this.parseMaybeAssign(e, t);
        if (this.type === a.comma) {
          var n = this.startNodeAt(i, s);
          for (n.expressions = [r]; this.eat(a.comma); ) n.expressions.push(this.parseMaybeAssign(e, t));
          return this.finishNode(n, "SequenceExpression");
        }
        return r;
      };
      y.parseMaybeAssign = function(e, t, i) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(e);
          this.exprAllowed = false;
        }
        var s = false, r = -1, n = -1, o = -1;
        t ? (r = t.parenthesizedAssign, n = t.trailingComma, o = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new ge(), s = true);
        var u = this.start, p = this.startLoc;
        (this.type === a.parenL || this.type === a.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
        var d = this.parseMaybeConditional(e, t);
        if (i && (d = i.call(this, d, u, p)), this.type.isAssign) {
          var l = this.startNodeAt(u, p);
          return l.operator = this.value, this.type === a.eq && (d = this.toAssignable(d, false, t)), s || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= d.start && (t.shorthandAssign = -1), this.type === a.eq ? this.checkLValPattern(d) : this.checkLValSimple(d), l.left = d, this.next(), l.right = this.parseMaybeAssign(e), o > -1 && (t.doubleProto = o), this.finishNode(l, "AssignmentExpression");
        } else s && this.checkExpressionErrors(t, true);
        return r > -1 && (t.parenthesizedAssign = r), n > -1 && (t.trailingComma = n), d;
      };
      y.parseMaybeConditional = function(e, t) {
        var i = this.start, s = this.startLoc, r = this.parseExprOps(e, t);
        if (this.checkExpressionErrors(t)) return r;
        if (this.eat(a.question)) {
          var n = this.startNodeAt(i, s);
          return n.test = r, n.consequent = this.parseMaybeAssign(), this.expect(a.colon), n.alternate = this.parseMaybeAssign(e), this.finishNode(n, "ConditionalExpression");
        }
        return r;
      };
      y.parseExprOps = function(e, t) {
        var i = this.start, s = this.startLoc, r = this.parseMaybeUnary(t, false, false, e);
        return this.checkExpressionErrors(t) || r.start === i && r.type === "ArrowFunctionExpression" ? r : this.parseExprOp(r, i, s, -1, e);
      };
      y.parseExprOp = function(e, t, i, s, r) {
        var n = this.type.binop;
        if (n != null && (!r || this.type !== a._in) && n > s) {
          var o = this.type === a.logicalOR || this.type === a.logicalAND, u = this.type === a.coalesce;
          u && (n = a.logicalAND.binop);
          var p = this.value;
          this.next();
          var d = this.start, l = this.startLoc, C = this.parseExprOp(this.parseMaybeUnary(null, false, false, r), d, l, n, r), B = this.buildBinary(t, i, e, C, p, o || u);
          return (o && this.type === a.coalesce || u && (this.type === a.logicalOR || this.type === a.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(B, t, i, s, r);
        }
        return e;
      };
      y.buildBinary = function(e, t, i, s, r, n) {
        s.type === "PrivateIdentifier" && this.raise(s.start, "Private identifier can only be left side of binary expression");
        var o = this.startNodeAt(e, t);
        return o.left = i, o.operator = r, o.right = s, this.finishNode(o, n ? "LogicalExpression" : "BinaryExpression");
      };
      y.parseMaybeUnary = function(e, t, i, s) {
        var r = this.start, n = this.startLoc, o;
        if (this.isContextual("await") && this.canAwait) o = this.parseAwait(s), t = true;
        else if (this.type.prefix) {
          var u = this.startNode(), p = this.type === a.incDec;
          u.operator = this.value, u.prefix = true, this.next(), u.argument = this.parseMaybeUnary(null, true, p, s), this.checkExpressionErrors(e, true), p ? this.checkLValSimple(u.argument) : this.strict && u.operator === "delete" && bt(u.argument) ? this.raiseRecoverable(u.start, "Deleting local variable in strict mode") : u.operator === "delete" && Re(u.argument) ? this.raiseRecoverable(u.start, "Private fields can not be deleted") : t = true, o = this.finishNode(u, p ? "UpdateExpression" : "UnaryExpression");
        } else if (!t && this.type === a.privateId) (s || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), o = this.parsePrivateIdent(), this.type !== a._in && this.unexpected();
        else {
          if (o = this.parseExprSubscripts(e, s), this.checkExpressionErrors(e)) return o;
          for (; this.type.postfix && !this.canInsertSemicolon(); ) {
            var d = this.startNodeAt(r, n);
            d.operator = this.value, d.prefix = false, d.argument = o, this.checkLValSimple(o), this.next(), o = this.finishNode(d, "UpdateExpression");
          }
        }
        if (!i && this.eat(a.starstar)) if (t) this.unexpected(this.lastTokStart);
        else return this.buildBinary(r, n, o, this.parseMaybeUnary(null, false, false, s), "**", false);
        else return o;
      };
      function bt(e) {
        return e.type === "Identifier" || e.type === "ParenthesizedExpression" && bt(e.expression);
      }
      function Re(e) {
        return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Re(e.expression) || e.type === "ParenthesizedExpression" && Re(e.expression);
      }
      y.parseExprSubscripts = function(e, t) {
        var i = this.start, s = this.startLoc, r = this.parseExprAtom(e, t);
        if (r.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return r;
        var n = this.parseSubscripts(r, i, s, false, t);
        return e && n.type === "MemberExpression" && (e.parenthesizedAssign >= n.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= n.start && (e.parenthesizedBind = -1), e.trailingComma >= n.start && (e.trailingComma = -1)), n;
      };
      y.parseSubscripts = function(e, t, i, s, r) {
        for (var n = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, o = false; ; ) {
          var u = this.parseSubscript(e, t, i, s, n, o, r);
          if (u.optional && (o = true), u === e || u.type === "ArrowFunctionExpression") {
            if (o) {
              var p = this.startNodeAt(t, i);
              p.expression = u, u = this.finishNode(p, "ChainExpression");
            }
            return u;
          }
          e = u;
        }
      };
      y.shouldParseAsyncArrow = function() {
        return !this.canInsertSemicolon() && this.eat(a.arrow);
      };
      y.parseSubscriptAsyncArrow = function(e, t, i, s) {
        return this.parseArrowExpression(this.startNodeAt(e, t), i, true, s);
      };
      y.parseSubscript = function(e, t, i, s, r, n, o) {
        var u = this.options.ecmaVersion >= 11, p = u && this.eat(a.questionDot);
        s && p && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var d = this.eat(a.bracketL);
        if (d || p && this.type !== a.parenL && this.type !== a.backQuote || this.eat(a.dot)) {
          var l = this.startNodeAt(t, i);
          l.object = e, d ? (l.property = this.parseExpression(), this.expect(a.bracketR)) : this.type === a.privateId && e.type !== "Super" ? l.property = this.parsePrivateIdent() : l.property = this.parseIdent(this.options.allowReserved !== "never"), l.computed = !!d, u && (l.optional = p), e = this.finishNode(l, "MemberExpression");
        } else if (!s && this.eat(a.parenL)) {
          var C = new ge(), B = this.yieldPos, h = this.awaitPos, m = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var x = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, false, C);
          if (r && !p && this.shouldParseAsyncArrow()) return this.checkPatternErrors(C, false), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = B, this.awaitPos = h, this.awaitIdentPos = m, this.parseSubscriptAsyncArrow(t, i, x, o);
          this.checkExpressionErrors(C, true), this.yieldPos = B || this.yieldPos, this.awaitPos = h || this.awaitPos, this.awaitIdentPos = m || this.awaitIdentPos;
          var g = this.startNodeAt(t, i);
          g.callee = e, g.arguments = x, u && (g.optional = p), e = this.finishNode(g, "CallExpression");
        } else if (this.type === a.backQuote) {
          (p || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var w = this.startNodeAt(t, i);
          w.tag = e, w.quasi = this.parseTemplate({ isTagged: true }), e = this.finishNode(w, "TaggedTemplateExpression");
        }
        return e;
      };
      y.parseExprAtom = function(e, t, i) {
        this.type === a.slash && this.readRegexp();
        var s, r = this.potentialArrowAt === this.start;
        switch (this.type) {
          case a._super:
            return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), s = this.startNode(), this.next(), this.type === a.parenL && !this.allowDirectSuper && this.raise(s.start, "super() call outside constructor of a subclass"), this.type !== a.dot && this.type !== a.bracketL && this.type !== a.parenL && this.unexpected(), this.finishNode(s, "Super");
          case a._this:
            return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");
          case a.name:
            var n = this.start, o = this.startLoc, u = this.containsEsc, p = this.parseIdent(false);
            if (this.options.ecmaVersion >= 8 && !u && p.name === "async" && !this.canInsertSemicolon() && this.eat(a._function)) return this.overrideContext(_.f_expr), this.parseFunction(this.startNodeAt(n, o), 0, false, true, t);
            if (r && !this.canInsertSemicolon()) {
              if (this.eat(a.arrow)) return this.parseArrowExpression(this.startNodeAt(n, o), [p], false, t);
              if (this.options.ecmaVersion >= 8 && p.name === "async" && this.type === a.name && !u && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return p = this.parseIdent(false), (this.canInsertSemicolon() || !this.eat(a.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(n, o), [p], true, t);
            }
            return p;
          case a.regexp:
            var d = this.value;
            return s = this.parseLiteral(d.value), s.regex = { pattern: d.pattern, flags: d.flags }, s;
          case a.num:
          case a.string:
            return this.parseLiteral(this.value);
          case a._null:
          case a._true:
          case a._false:
            return s = this.startNode(), s.value = this.type === a._null ? null : this.type === a._true, s.raw = this.type.keyword, this.next(), this.finishNode(s, "Literal");
          case a.parenL:
            var l = this.start, C = this.parseParenAndDistinguishExpression(r, t);
            return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(C) && (e.parenthesizedAssign = l), e.parenthesizedBind < 0 && (e.parenthesizedBind = l)), C;
          case a.bracketL:
            return s = this.startNode(), this.next(), s.elements = this.parseExprList(a.bracketR, true, true, e), this.finishNode(s, "ArrayExpression");
          case a.braceL:
            return this.overrideContext(_.b_expr), this.parseObj(false, e);
          case a._function:
            return s = this.startNode(), this.next(), this.parseFunction(s, 0);
          case a._class:
            return this.parseClass(this.startNode(), false);
          case a._new:
            return this.parseNew();
          case a.backQuote:
            return this.parseTemplate();
          case a._import:
            return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
          default:
            return this.parseExprAtomDefault();
        }
      };
      y.parseExprAtomDefault = function() {
        this.unexpected();
      };
      y.parseExprImport = function(e) {
        var t = this.startNode();
        if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === a.parenL && !e) return this.parseDynamicImport(t);
        if (this.type === a.dot) {
          var i = this.startNodeAt(t.start, t.loc && t.loc.start);
          return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
        } else this.unexpected();
      };
      y.parseDynamicImport = function(e) {
        if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(a.parenR)) {
          var t = this.start;
          this.eat(a.comma) && this.eat(a.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
        }
        return this.finishNode(e, "ImportExpression");
      };
      y.parseImportMeta = function(e) {
        this.next();
        var t = this.containsEsc;
        return e.property = this.parseIdent(true), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
      };
      y.parseLiteral = function(e) {
        var t = this.startNode();
        return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
      };
      y.parseParenExpression = function() {
        this.expect(a.parenL);
        var e = this.parseExpression();
        return this.expect(a.parenR), e;
      };
      y.shouldParseArrow = function(e) {
        return !this.canInsertSemicolon();
      };
      y.parseParenAndDistinguishExpression = function(e, t) {
        var i = this.start, s = this.startLoc, r, n = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();
          var o = this.start, u = this.startLoc, p = [], d = true, l = false, C = new ge(), B = this.yieldPos, h = this.awaitPos, m;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== a.parenR; ) if (d ? d = false : this.expect(a.comma), n && this.afterTrailingComma(a.parenR, true)) {
            l = true;
            break;
          } else if (this.type === a.ellipsis) {
            m = this.start, p.push(this.parseParenItem(this.parseRestBinding())), this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
            break;
          } else p.push(this.parseMaybeAssign(false, C, this.parseParenItem));
          var x = this.lastTokEnd, g = this.lastTokEndLoc;
          if (this.expect(a.parenR), e && this.shouldParseArrow(p) && this.eat(a.arrow)) return this.checkPatternErrors(C, false), this.checkYieldAwaitInDefaultParams(), this.yieldPos = B, this.awaitPos = h, this.parseParenArrowList(i, s, p, t);
          (!p.length || l) && this.unexpected(this.lastTokStart), m && this.unexpected(m), this.checkExpressionErrors(C, true), this.yieldPos = B || this.yieldPos, this.awaitPos = h || this.awaitPos, p.length > 1 ? (r = this.startNodeAt(o, u), r.expressions = p, this.finishNodeAt(r, "SequenceExpression", x, g)) : r = p[0];
        } else r = this.parseParenExpression();
        if (this.options.preserveParens) {
          var w = this.startNodeAt(i, s);
          return w.expression = r, this.finishNode(w, "ParenthesizedExpression");
        } else return r;
      };
      y.parseParenItem = function(e) {
        return e;
      };
      y.parseParenArrowList = function(e, t, i, s) {
        return this.parseArrowExpression(this.startNodeAt(e, t), i, false, s);
      };
      var Di = [];
      y.parseNew = function() {
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var e = this.startNode();
        if (this.next(), this.options.ecmaVersion >= 6 && this.type === a.dot) {
          var t = this.startNodeAt(e.start, e.loc && e.loc.start);
          t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
          var i = this.containsEsc;
          return e.property = this.parseIdent(true), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
        }
        var s = this.start, r = this.startLoc;
        return e.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), s, r, true, false), this.eat(a.parenL) ? e.arguments = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, false) : e.arguments = Di, this.finishNode(e, "NewExpression");
      };
      y.parseTemplateElement = function(e) {
        var t = e.isTagged, i = this.startNode();
        return this.type === a.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = { raw: this.value.replace(/\r\n?/g, `
`), cooked: null }) : i.value = { raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`), cooked: this.value }, this.next(), i.tail = this.type === a.backQuote, this.finishNode(i, "TemplateElement");
      };
      y.parseTemplate = function(e) {
        e === void 0 && (e = {});
        var t = e.isTagged;
        t === void 0 && (t = false);
        var i = this.startNode();
        this.next(), i.expressions = [];
        var s = this.parseTemplateElement({ isTagged: t });
        for (i.quasis = [s]; !s.tail; ) this.type === a.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(a.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(a.braceR), i.quasis.push(s = this.parseTemplateElement({ isTagged: t }));
        return this.next(), this.finishNode(i, "TemplateLiteral");
      };
      y.isAsyncProp = function(e) {
        return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === a.name || this.type === a.num || this.type === a.string || this.type === a.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === a.star) && !R.test(this.input.slice(this.lastTokEnd, this.start));
      };
      y.parseObj = function(e, t) {
        var i = this.startNode(), s = true, r = {};
        for (i.properties = [], this.next(); !this.eat(a.braceR); ) {
          if (s) s = false;
          else if (this.expect(a.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(a.braceR)) break;
          var n = this.parseProperty(e, t);
          e || this.checkPropClash(n, r, t), i.properties.push(n);
        }
        return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
      };
      y.parseProperty = function(e, t) {
        var i = this.startNode(), s, r, n, o;
        if (this.options.ecmaVersion >= 9 && this.eat(a.ellipsis)) return e ? (i.argument = this.parseIdent(false), this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(false, t), this.type === a.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
        this.options.ecmaVersion >= 6 && (i.method = false, i.shorthand = false, (e || t) && (n = this.start, o = this.startLoc), e || (s = this.eat(a.star)));
        var u = this.containsEsc;
        return this.parsePropertyName(i), !e && !u && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i) ? (r = true, s = this.options.ecmaVersion >= 9 && this.eat(a.star), this.parsePropertyName(i)) : r = false, this.parsePropertyValue(i, e, s, r, n, o, t, u), this.finishNode(i, "Property");
      };
      y.parseGetterSetter = function(e) {
        e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(false);
        var t = e.kind === "get" ? 0 : 1;
        if (e.value.params.length !== t) {
          var i = e.value.start;
          e.kind === "get" ? this.raiseRecoverable(i, "getter should have no params") : this.raiseRecoverable(i, "setter should have exactly one param");
        } else e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
      };
      y.parsePropertyValue = function(e, t, i, s, r, n, o, u) {
        (i || s) && this.type === a.colon && this.unexpected(), this.eat(a.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, o), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === a.parenL ? (t && this.unexpected(), e.kind = "init", e.method = true, e.value = this.parseMethod(i, s)) : !t && !u && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== a.comma && this.type !== a.braceR && this.type !== a.eq ? ((i || s) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || s) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r), e.kind = "init", t ? e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key)) : this.type === a.eq && o ? (o.shorthandAssign < 0 && (o.shorthandAssign = this.start), e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.shorthand = true) : this.unexpected();
      };
      y.parsePropertyName = function(e) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(a.bracketL)) return e.computed = true, e.key = this.parseMaybeAssign(), this.expect(a.bracketR), e.key;
          e.computed = false;
        }
        return e.key = this.type === a.num || this.type === a.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
      };
      y.initFunction = function(e) {
        e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = false), this.options.ecmaVersion >= 8 && (e.async = false);
      };
      y.parseMethod = function(e, t, i) {
        var s = this.startNode(), r = this.yieldPos, n = this.awaitPos, o = this.awaitIdentPos;
        return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = e), this.options.ecmaVersion >= 8 && (s.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Me(t, s.generator) | De | (i ? mt : 0)), this.expect(a.parenL), s.params = this.parseBindingList(a.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, false, true, false), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(s, "FunctionExpression");
      };
      y.parseArrowExpression = function(e, t, i, s) {
        var r = this.yieldPos, n = this.awaitPos, o = this.awaitIdentPos;
        return this.enterScope(Me(i, false) | ft), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, true), this.parseFunctionBody(e, true, false, s), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(e, "ArrowFunctionExpression");
      };
      y.parseFunctionBody = function(e, t, i, s) {
        var r = t && this.type !== a.braceL, n = this.strict, o = false;
        if (r) e.body = this.parseMaybeAssign(s), e.expression = true, this.checkParams(e, false);
        else {
          var u = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
          (!n || u) && (o = this.strictDirective(this.end), o && u && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
          var p = this.labels;
          this.labels = [], o && (this.strict = true), this.checkParams(e, !n && !o && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, gt), e.body = this.parseBlock(false, void 0, o && !n), e.expression = false, this.adaptDirectivePrologue(e.body.body), this.labels = p;
        }
        this.exitScope();
      };
      y.isSimpleParamList = function(e) {
        for (var t = 0, i = e; t < i.length; t += 1) {
          var s = i[t];
          if (s.type !== "Identifier") return false;
        }
        return true;
      };
      y.checkParams = function(e, t) {
        for (var i = /* @__PURE__ */ Object.create(null), s = 0, r = e.params; s < r.length; s += 1) {
          var n = r[s];
          this.checkLValInnerPattern(n, je, t ? null : i);
        }
      };
      y.parseExprList = function(e, t, i, s) {
        for (var r = [], n = true; !this.eat(e); ) {
          if (n) n = false;
          else if (this.expect(a.comma), t && this.afterTrailingComma(e)) break;
          var o = void 0;
          i && this.type === a.comma ? o = null : this.type === a.ellipsis ? (o = this.parseSpread(s), s && this.type === a.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : o = this.parseMaybeAssign(false, s), r.push(o);
        }
        return r;
      };
      y.checkUnreserved = function(e) {
        var t = e.start, i = e.end, s = e.name;
        if (this.inGenerator && s === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && s === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (s === "arguments" || s === "await") && this.raise(t, "Cannot use " + s + " in class static initialization block"), this.keywords.test(s) && this.raise(t, "Unexpected keyword '" + s + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
          var r = this.strict ? this.reservedWordsStrict : this.reservedWords;
          r.test(s) && (!this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + s + "' is reserved"));
        }
      };
      y.parseIdent = function(e) {
        var t = this.parseIdentNode();
        return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
      };
      y.parseIdentNode = function() {
        var e = this.startNode();
        return this.type === a.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = a.name) : this.unexpected(), e;
      };
      y.parsePrivateIdent = function() {
        var e = this.startNode();
        return this.type === a.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
      };
      y.parseYield = function(e) {
        this.yieldPos || (this.yieldPos = this.start);
        var t = this.startNode();
        return this.next(), this.type === a.semi || this.canInsertSemicolon() || this.type !== a.star && !this.type.startsExpr ? (t.delegate = false, t.argument = null) : (t.delegate = this.eat(a.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
      };
      y.parseAwait = function(e) {
        this.awaitPos || (this.awaitPos = this.start);
        var t = this.startNode();
        return this.next(), t.argument = this.parseMaybeUnary(null, true, false, e), this.finishNode(t, "AwaitExpression");
      };
      var me = T.prototype;
      me.raise = function(e, t) {
        var i = ct(this.input, e);
        t += " (" + i.line + ":" + i.column + ")";
        var s = new SyntaxError(t);
        throw s.pos = e, s.loc = i, s.raisedAt = this.pos, s;
      };
      me.raiseRecoverable = me.raise;
      me.curPosition = function() {
        if (this.options.locations) return new te(this.curLine, this.pos - this.lineStart);
      };
      var X = T.prototype, Fi = function(t) {
        this.flags = t, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = false;
      };
      X.enterScope = function(e) {
        this.scopeStack.push(new Fi(e));
      };
      X.exitScope = function() {
        this.scopeStack.pop();
      };
      X.treatFunctionsAsVarInScope = function(e) {
        return e.flags & Y || !this.inModule && e.flags & ie;
      };
      X.declareName = function(e, t, i) {
        var s = false;
        if (t === J) {
          var r = this.currentScope();
          s = r.lexical.indexOf(e) > -1 || r.functions.indexOf(e) > -1 || r.var.indexOf(e) > -1, r.lexical.push(e), this.inModule && r.flags & ie && delete this.undefinedExports[e];
        } else if (t === yt) {
          var n = this.currentScope();
          n.lexical.push(e);
        } else if (t === xt) {
          var o = this.currentScope();
          this.treatFunctionsAsVar ? s = o.lexical.indexOf(e) > -1 : s = o.lexical.indexOf(e) > -1 || o.var.indexOf(e) > -1, o.functions.push(e);
        } else for (var u = this.scopeStack.length - 1; u >= 0; --u) {
          var p = this.scopeStack[u];
          if (p.lexical.indexOf(e) > -1 && !(p.flags & dt && p.lexical[0] === e) || !this.treatFunctionsAsVarInScope(p) && p.functions.indexOf(e) > -1) {
            s = true;
            break;
          }
          if (p.var.push(e), this.inModule && p.flags & ie && delete this.undefinedExports[e], p.flags & Fe) break;
        }
        s && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
      };
      X.checkLocalExport = function(e) {
        this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
      };
      X.currentScope = function() {
        return this.scopeStack[this.scopeStack.length - 1];
      };
      X.currentVarScope = function() {
        for (var e = this.scopeStack.length - 1; ; e--) {
          var t = this.scopeStack[e];
          if (t.flags & Fe) return t;
        }
      };
      X.currentThisScope = function() {
        for (var e = this.scopeStack.length - 1; ; e--) {
          var t = this.scopeStack[e];
          if (t.flags & Fe && !(t.flags & ft)) return t;
        }
      };
      var ve = function(t, i, s) {
        this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new ye(t, s)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
      }, ae = T.prototype;
      ae.startNode = function() {
        return new ve(this, this.start, this.startLoc);
      };
      ae.startNodeAt = function(e, t) {
        return new ve(this, e, t);
      };
      function St(e, t, i, s) {
        return e.type = t, e.end = i, this.options.locations && (e.loc.end = s), this.options.ranges && (e.range[1] = i), e;
      }
      ae.finishNode = function(e, t) {
        return St.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
      };
      ae.finishNodeAt = function(e, t, i, s) {
        return St.call(this, e, t, i, s);
      };
      ae.copyNode = function(e) {
        var t = new ve(this, e.start, this.startLoc);
        for (var i in e) t[i] = e[i];
        return t;
      };
      var Ct = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", _t = Ct + " Extended_Pictographic", Tt = _t, kt = Tt + " EBase EComp EMod EPres ExtPict", Et = kt, Mi = Et, ji = { 9: Ct, 10: _t, 11: Tt, 12: kt, 13: Et, 14: Mi }, Ui = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", qi = { 9: "", 10: "", 11: "", 12: "", 13: "", 14: Ui }, rt = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", wt = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", At = wt + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Pt = At + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", It = Pt + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Nt = It + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Ji = Nt + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz", Gi = { 9: wt, 10: At, 11: Pt, 12: It, 13: Nt, 14: Ji }, Vt = {};
      function Ki(e) {
        var t = Vt[e] = { binary: G(ji[e] + " " + rt), binaryOfStrings: G(qi[e]), nonBinary: { General_Category: G(rt), Script: G(Gi[e]) } };
        t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
      }
      for (le = 0, Ie = [9, 10, 11, 12, 13, 14]; le < Ie.length; le += 1) at = Ie[le], Ki(at);
      var at, le, Ie, c = T.prototype, xe = function(t, i) {
        this.parent = t, this.base = i || this;
      };
      xe.prototype.separatedFrom = function(t) {
        for (var i = this; i; i = i.parent) for (var s = t; s; s = s.parent) if (i.base === s.base && i !== s) return true;
        return false;
      };
      xe.prototype.sibling = function() {
        return new xe(this.parent, this.base);
      };
      var M = function(t) {
        this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Vt[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = false, this.switchV = false, this.switchN = false, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = false, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
      };
      M.prototype.reset = function(t, i, s) {
        var r = s.indexOf("v") !== -1, n = s.indexOf("u") !== -1;
        this.start = t | 0, this.source = i + "", this.flags = s, r && this.parser.options.ecmaVersion >= 15 ? (this.switchU = true, this.switchV = true, this.switchN = true) : (this.switchU = n && this.parser.options.ecmaVersion >= 6, this.switchV = false, this.switchN = n && this.parser.options.ecmaVersion >= 9);
      };
      M.prototype.raise = function(t) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
      };
      M.prototype.at = function(t, i) {
        i === void 0 && (i = false);
        var s = this.source, r = s.length;
        if (t >= r) return -1;
        var n = s.charCodeAt(t);
        if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r) return n;
        var o = s.charCodeAt(t + 1);
        return o >= 56320 && o <= 57343 ? (n << 10) + o - 56613888 : n;
      };
      M.prototype.nextIndex = function(t, i) {
        i === void 0 && (i = false);
        var s = this.source, r = s.length;
        if (t >= r) return r;
        var n = s.charCodeAt(t), o;
        return !(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r || (o = s.charCodeAt(t + 1)) < 56320 || o > 57343 ? t + 1 : t + 2;
      };
      M.prototype.current = function(t) {
        return t === void 0 && (t = false), this.at(this.pos, t);
      };
      M.prototype.lookahead = function(t) {
        return t === void 0 && (t = false), this.at(this.nextIndex(this.pos, t), t);
      };
      M.prototype.advance = function(t) {
        t === void 0 && (t = false), this.pos = this.nextIndex(this.pos, t);
      };
      M.prototype.eat = function(t, i) {
        return i === void 0 && (i = false), this.current(i) === t ? (this.advance(i), true) : false;
      };
      M.prototype.eatChars = function(t, i) {
        i === void 0 && (i = false);
        for (var s = this.pos, r = 0, n = t; r < n.length; r += 1) {
          var o = n[r], u = this.at(s, i);
          if (u === -1 || u !== o) return false;
          s = this.nextIndex(s, i);
        }
        return this.pos = s, true;
      };
      c.validateRegExpFlags = function(e) {
        for (var t = e.validFlags, i = e.flags, s = false, r = false, n = 0; n < i.length; n++) {
          var o = i.charAt(n);
          t.indexOf(o) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(o, n + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), o === "u" && (s = true), o === "v" && (r = true);
        }
        this.options.ecmaVersion >= 15 && s && r && this.raise(e.start, "Invalid regular expression flag");
      };
      function Xi(e) {
        for (var t in e) return true;
        return false;
      }
      c.validateRegExpPattern = function(e) {
        this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Xi(e.groupNames) && (e.switchN = true, this.regexp_pattern(e));
      };
      c.regexp_pattern = function(e) {
        e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = false, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = /* @__PURE__ */ Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
        for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
          var s = i[t];
          e.groupNames[s] || e.raise("Invalid named capture referenced");
        }
      };
      c.regexp_disjunction = function(e) {
        var t = this.options.ecmaVersion >= 16;
        for (t && (e.branchID = new xe(e.branchID, null)), this.regexp_alternative(e); e.eat(124); ) t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
        t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, true) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
      };
      c.regexp_alternative = function(e) {
        for (; e.pos < e.source.length && this.regexp_eatTerm(e); ) ;
      };
      c.regexp_eatTerm = function(e) {
        return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), true) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), true) : false;
      };
      c.regexp_eatAssertion = function(e) {
        var t = e.pos;
        if (e.lastAssertionIsQuantifiable = false, e.eat(94) || e.eat(36)) return true;
        if (e.eat(92)) {
          if (e.eat(66) || e.eat(98)) return true;
          e.pos = t;
        }
        if (e.eat(40) && e.eat(63)) {
          var i = false;
          if (this.options.ecmaVersion >= 9 && (i = e.eat(60)), e.eat(61) || e.eat(33)) return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !i, true;
        }
        return e.pos = t, false;
      };
      c.regexp_eatQuantifier = function(e, t) {
        return t === void 0 && (t = false), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), true) : false;
      };
      c.regexp_eatQuantifierPrefix = function(e, t) {
        return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
      };
      c.regexp_eatBracedQuantifier = function(e, t) {
        var i = e.pos;
        if (e.eat(123)) {
          var s = 0, r = -1;
          if (this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue), e.eat(125))) return r !== -1 && r < s && !t && e.raise("numbers out of order in {} quantifier"), true;
          e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = i;
        }
        return false;
      };
      c.regexp_eatAtom = function(e) {
        return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
      };
      c.regexp_eatReverseSolidusAtomEscape = function(e) {
        var t = e.pos;
        if (e.eat(92)) {
          if (this.regexp_eatAtomEscape(e)) return true;
          e.pos = t;
        }
        return false;
      };
      c.regexp_eatUncapturingGroup = function(e) {
        var t = e.pos;
        if (e.eat(40)) {
          if (e.eat(63) && e.eat(58)) {
            if (this.regexp_disjunction(e), e.eat(41)) return true;
            e.raise("Unterminated group");
          }
          e.pos = t;
        }
        return false;
      };
      c.regexp_eatCapturingGroup = function(e) {
        if (e.eat(40)) {
          if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, true;
          e.raise("Unterminated group");
        }
        return false;
      };
      c.regexp_eatExtendedAtom = function(e) {
        return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
      };
      c.regexp_eatInvalidBracedQuantifier = function(e) {
        return this.regexp_eatBracedQuantifier(e, true) && e.raise("Nothing to repeat"), false;
      };
      c.regexp_eatSyntaxCharacter = function(e) {
        var t = e.current();
        return Lt(t) ? (e.lastIntValue = t, e.advance(), true) : false;
      };
      function Lt(e) {
        return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
      }
      c.regexp_eatPatternCharacters = function(e) {
        for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !Lt(i); ) e.advance();
        return e.pos !== t;
      };
      c.regexp_eatExtendedPatternCharacter = function(e) {
        var t = e.current();
        return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), true) : false;
      };
      c.regexp_groupSpecifier = function(e) {
        if (e.eat(63)) {
          this.regexp_eatGroupName(e) || e.raise("Invalid group");
          var t = this.options.ecmaVersion >= 16, i = e.groupNames[e.lastStringValue];
          if (i) if (t) for (var s = 0, r = i; s < r.length; s += 1) {
            var n = r[s];
            n.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
          }
          else e.raise("Duplicate capture group name");
          t ? (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = true;
        }
      };
      c.regexp_eatGroupName = function(e) {
        if (e.lastStringValue = "", e.eat(60)) {
          if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return true;
          e.raise("Invalid capture group name");
        }
        return false;
      };
      c.regexp_eatRegExpIdentifierName = function(e) {
        if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
          for (e.lastStringValue += K(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); ) e.lastStringValue += K(e.lastIntValue);
          return true;
        }
        return false;
      };
      c.regexp_eatRegExpIdentifierStart = function(e) {
        var t = e.pos, i = this.options.ecmaVersion >= 11, s = e.current(i);
        return e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue), Wi(s) ? (e.lastIntValue = s, true) : (e.pos = t, false);
      };
      function Wi(e) {
        return U(e, true) || e === 36 || e === 95;
      }
      c.regexp_eatRegExpIdentifierPart = function(e) {
        var t = e.pos, i = this.options.ecmaVersion >= 11, s = e.current(i);
        return e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue), Hi(s) ? (e.lastIntValue = s, true) : (e.pos = t, false);
      };
      function Hi(e) {
        return z(e, true) || e === 36 || e === 95 || e === 8204 || e === 8205;
      }
      c.regexp_eatAtomEscape = function(e) {
        return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? true : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), false);
      };
      c.regexp_eatBackReference = function(e) {
        var t = e.pos;
        if (this.regexp_eatDecimalEscape(e)) {
          var i = e.lastIntValue;
          if (e.switchU) return i > e.maxBackReference && (e.maxBackReference = i), true;
          if (i <= e.numCapturingParens) return true;
          e.pos = t;
        }
        return false;
      };
      c.regexp_eatKGroupName = function(e) {
        if (e.eat(107)) {
          if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), true;
          e.raise("Invalid named reference");
        }
        return false;
      };
      c.regexp_eatCharacterEscape = function(e) {
        return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, false) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
      };
      c.regexp_eatCControlLetter = function(e) {
        var t = e.pos;
        if (e.eat(99)) {
          if (this.regexp_eatControlLetter(e)) return true;
          e.pos = t;
        }
        return false;
      };
      c.regexp_eatZero = function(e) {
        return e.current() === 48 && !be(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), true) : false;
      };
      c.regexp_eatControlEscape = function(e) {
        var t = e.current();
        return t === 116 ? (e.lastIntValue = 9, e.advance(), true) : t === 110 ? (e.lastIntValue = 10, e.advance(), true) : t === 118 ? (e.lastIntValue = 11, e.advance(), true) : t === 102 ? (e.lastIntValue = 12, e.advance(), true) : t === 114 ? (e.lastIntValue = 13, e.advance(), true) : false;
      };
      c.regexp_eatControlLetter = function(e) {
        var t = e.current();
        return Rt(t) ? (e.lastIntValue = t % 32, e.advance(), true) : false;
      };
      function Rt(e) {
        return e >= 65 && e <= 90 || e >= 97 && e <= 122;
      }
      c.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
        t === void 0 && (t = false);
        var i = e.pos, s = t || e.switchU;
        if (e.eat(117)) {
          if (this.regexp_eatFixedHexDigits(e, 4)) {
            var r = e.lastIntValue;
            if (s && r >= 55296 && r <= 56319) {
              var n = e.pos;
              if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
                var o = e.lastIntValue;
                if (o >= 56320 && o <= 57343) return e.lastIntValue = (r - 55296) * 1024 + (o - 56320) + 65536, true;
              }
              e.pos = n, e.lastIntValue = r;
            }
            return true;
          }
          if (s && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && zi(e.lastIntValue)) return true;
          s && e.raise("Invalid unicode escape"), e.pos = i;
        }
        return false;
      };
      function zi(e) {
        return e >= 0 && e <= 1114111;
      }
      c.regexp_eatIdentityEscape = function(e) {
        if (e.switchU) return this.regexp_eatSyntaxCharacter(e) ? true : e.eat(47) ? (e.lastIntValue = 47, true) : false;
        var t = e.current();
        return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), true) : false;
      };
      c.regexp_eatDecimalEscape = function(e) {
        e.lastIntValue = 0;
        var t = e.current();
        if (t >= 49 && t <= 57) {
          do
            e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
          while ((t = e.current()) >= 48 && t <= 57);
          return true;
        }
        return false;
      };
      var Ot = 0, q = 1, L = 2;
      c.regexp_eatCharacterClassEscape = function(e) {
        var t = e.current();
        if (Qi(t)) return e.lastIntValue = -1, e.advance(), q;
        var i = false;
        if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
          e.lastIntValue = -1, e.advance();
          var s;
          if (e.eat(123) && (s = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(125)) return i && s === L && e.raise("Invalid property name"), s;
          e.raise("Invalid property name");
        }
        return Ot;
      };
      function Qi(e) {
        return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
      }
      c.regexp_eatUnicodePropertyValueExpression = function(e) {
        var t = e.pos;
        if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
          var i = e.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(e)) {
            var s = e.lastStringValue;
            return this.regexp_validateUnicodePropertyNameAndValue(e, i, s), q;
          }
        }
        if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
          var r = e.lastStringValue;
          return this.regexp_validateUnicodePropertyNameOrValue(e, r);
        }
        return Ot;
      };
      c.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
        se(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
      };
      c.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
        if (e.unicodeProperties.binary.test(t)) return q;
        if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t)) return L;
        e.raise("Invalid property name");
      };
      c.regexp_eatUnicodePropertyName = function(e) {
        var t = 0;
        for (e.lastStringValue = ""; Bt(t = e.current()); ) e.lastStringValue += K(t), e.advance();
        return e.lastStringValue !== "";
      };
      function Bt(e) {
        return Rt(e) || e === 95;
      }
      c.regexp_eatUnicodePropertyValue = function(e) {
        var t = 0;
        for (e.lastStringValue = ""; Yi(t = e.current()); ) e.lastStringValue += K(t), e.advance();
        return e.lastStringValue !== "";
      };
      function Yi(e) {
        return Bt(e) || be(e);
      }
      c.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
        return this.regexp_eatUnicodePropertyValue(e);
      };
      c.regexp_eatCharacterClass = function(e) {
        if (e.eat(91)) {
          var t = e.eat(94), i = this.regexp_classContents(e);
          return e.eat(93) || e.raise("Unterminated character class"), t && i === L && e.raise("Negated character class may contain strings"), true;
        }
        return false;
      };
      c.regexp_classContents = function(e) {
        return e.current() === 93 ? q : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), q);
      };
      c.regexp_nonEmptyClassRanges = function(e) {
        for (; this.regexp_eatClassAtom(e); ) {
          var t = e.lastIntValue;
          if (e.eat(45) && this.regexp_eatClassAtom(e)) {
            var i = e.lastIntValue;
            e.switchU && (t === -1 || i === -1) && e.raise("Invalid character class"), t !== -1 && i !== -1 && t > i && e.raise("Range out of order in character class");
          }
        }
      };
      c.regexp_eatClassAtom = function(e) {
        var t = e.pos;
        if (e.eat(92)) {
          if (this.regexp_eatClassEscape(e)) return true;
          if (e.switchU) {
            var i = e.current();
            (i === 99 || Mt(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
          }
          e.pos = t;
        }
        var s = e.current();
        return s !== 93 ? (e.lastIntValue = s, e.advance(), true) : false;
      };
      c.regexp_eatClassEscape = function(e) {
        var t = e.pos;
        if (e.eat(98)) return e.lastIntValue = 8, true;
        if (e.switchU && e.eat(45)) return e.lastIntValue = 45, true;
        if (!e.switchU && e.eat(99)) {
          if (this.regexp_eatClassControlLetter(e)) return true;
          e.pos = t;
        }
        return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
      };
      c.regexp_classSetExpression = function(e) {
        var t = q, i;
        if (!this.regexp_eatClassSetRange(e)) if (i = this.regexp_eatClassSetOperand(e)) {
          i === L && (t = L);
          for (var s = e.pos; e.eatChars([38, 38]); ) {
            if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
              i !== L && (t = q);
              continue;
            }
            e.raise("Invalid character in character class");
          }
          if (s !== e.pos) return t;
          for (; e.eatChars([45, 45]); ) this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
          if (s !== e.pos) return t;
        } else e.raise("Invalid character in character class");
        for (; ; ) if (!this.regexp_eatClassSetRange(e)) {
          if (i = this.regexp_eatClassSetOperand(e), !i) return t;
          i === L && (t = L);
        }
      };
      c.regexp_eatClassSetRange = function(e) {
        var t = e.pos;
        if (this.regexp_eatClassSetCharacter(e)) {
          var i = e.lastIntValue;
          if (e.eat(45) && this.regexp_eatClassSetCharacter(e)) {
            var s = e.lastIntValue;
            return i !== -1 && s !== -1 && i > s && e.raise("Range out of order in character class"), true;
          }
          e.pos = t;
        }
        return false;
      };
      c.regexp_eatClassSetOperand = function(e) {
        return this.regexp_eatClassSetCharacter(e) ? q : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
      };
      c.regexp_eatNestedClass = function(e) {
        var t = e.pos;
        if (e.eat(91)) {
          var i = e.eat(94), s = this.regexp_classContents(e);
          if (e.eat(93)) return i && s === L && e.raise("Negated character class may contain strings"), s;
          e.pos = t;
        }
        if (e.eat(92)) {
          var r = this.regexp_eatCharacterClassEscape(e);
          if (r) return r;
          e.pos = t;
        }
        return null;
      };
      c.regexp_eatClassStringDisjunction = function(e) {
        var t = e.pos;
        if (e.eatChars([92, 113])) {
          if (e.eat(123)) {
            var i = this.regexp_classStringDisjunctionContents(e);
            if (e.eat(125)) return i;
          } else e.raise("Invalid escape");
          e.pos = t;
        }
        return null;
      };
      c.regexp_classStringDisjunctionContents = function(e) {
        for (var t = this.regexp_classString(e); e.eat(124); ) this.regexp_classString(e) === L && (t = L);
        return t;
      };
      c.regexp_classString = function(e) {
        for (var t = 0; this.regexp_eatClassSetCharacter(e); ) t++;
        return t === 1 ? q : L;
      };
      c.regexp_eatClassSetCharacter = function(e) {
        var t = e.pos;
        if (e.eat(92)) return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? true : e.eat(98) ? (e.lastIntValue = 8, true) : (e.pos = t, false);
        var i = e.current();
        return i < 0 || i === e.lookahead() && $i(i) || Zi(i) ? false : (e.advance(), e.lastIntValue = i, true);
      };
      function $i(e) {
        return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
      }
      function Zi(e) {
        return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
      }
      c.regexp_eatClassSetReservedPunctuator = function(e) {
        var t = e.current();
        return es(t) ? (e.lastIntValue = t, e.advance(), true) : false;
      };
      function es(e) {
        return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
      }
      c.regexp_eatClassControlLetter = function(e) {
        var t = e.current();
        return be(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), true) : false;
      };
      c.regexp_eatHexEscapeSequence = function(e) {
        var t = e.pos;
        if (e.eat(120)) {
          if (this.regexp_eatFixedHexDigits(e, 2)) return true;
          e.switchU && e.raise("Invalid escape"), e.pos = t;
        }
        return false;
      };
      c.regexp_eatDecimalDigits = function(e) {
        var t = e.pos, i = 0;
        for (e.lastIntValue = 0; be(i = e.current()); ) e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
        return e.pos !== t;
      };
      function be(e) {
        return e >= 48 && e <= 57;
      }
      c.regexp_eatHexDigits = function(e) {
        var t = e.pos, i = 0;
        for (e.lastIntValue = 0; Dt(i = e.current()); ) e.lastIntValue = 16 * e.lastIntValue + Ft(i), e.advance();
        return e.pos !== t;
      };
      function Dt(e) {
        return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
      }
      function Ft(e) {
        return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
      }
      c.regexp_eatLegacyOctalEscapeSequence = function(e) {
        if (this.regexp_eatOctalDigit(e)) {
          var t = e.lastIntValue;
          if (this.regexp_eatOctalDigit(e)) {
            var i = e.lastIntValue;
            t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + i * 8 + e.lastIntValue : e.lastIntValue = t * 8 + i;
          } else e.lastIntValue = t;
          return true;
        }
        return false;
      };
      c.regexp_eatOctalDigit = function(e) {
        var t = e.current();
        return Mt(t) ? (e.lastIntValue = t - 48, e.advance(), true) : (e.lastIntValue = 0, false);
      };
      function Mt(e) {
        return e >= 48 && e <= 55;
      }
      c.regexp_eatFixedHexDigits = function(e, t) {
        var i = e.pos;
        e.lastIntValue = 0;
        for (var s = 0; s < t; ++s) {
          var r = e.current();
          if (!Dt(r)) return e.pos = i, false;
          e.lastIntValue = 16 * e.lastIntValue + Ft(r), e.advance();
        }
        return true;
      };
      var qe = function(t) {
        this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new ye(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
      }, v = T.prototype;
      v.next = function(e) {
        !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new qe(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
      };
      v.getToken = function() {
        return this.next(), new qe(this);
      };
      typeof Symbol < "u" && (v[Symbol.iterator] = function() {
        var e = this;
        return { next: function() {
          var t = e.getToken();
          return { done: t.type === a.eof, value: t };
        } };
      });
      v.nextToken = function() {
        var e = this.curContext();
        if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) return this.finishToken(a.eof);
        if (e.override) return e.override(this);
        this.readToken(this.fullCharCodeAtPos());
      };
      v.readToken = function(e) {
        return U(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
      };
      v.fullCharCodeAtPos = function() {
        var e = this.input.charCodeAt(this.pos);
        if (e <= 55295 || e >= 56320) return e;
        var t = this.input.charCodeAt(this.pos + 1);
        return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
      };
      v.skipBlockComment = function() {
        var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
        if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations) for (var s = void 0, r = t; (s = ut(this.input, r, this.pos)) > -1; ) ++this.curLine, r = this.lineStart = s;
        this.options.onComment && this.options.onComment(true, this.input.slice(t + 2, i), t, this.pos, e, this.curPosition());
      };
      v.skipLineComment = function(e) {
        for (var t = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !Q(s); ) s = this.input.charCodeAt(++this.pos);
        this.options.onComment && this.options.onComment(false, this.input.slice(t + e, this.pos), t, this.pos, i, this.curPosition());
      };
      v.skipSpace = function() {
        e: for (; this.pos < this.input.length; ) {
          var e = this.input.charCodeAt(this.pos);
          switch (e) {
            case 32:
            case 160:
              ++this.pos;
              break;
            case 13:
              this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
            case 10:
            case 8232:
            case 8233:
              ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
              break;
            case 47:
              switch (this.input.charCodeAt(this.pos + 1)) {
                case 42:
                  this.skipBlockComment();
                  break;
                case 47:
                  this.skipLineComment(2);
                  break;
                default:
                  break e;
              }
              break;
            default:
              if (e > 8 && e < 14 || e >= 5760 && pt.test(String.fromCharCode(e))) ++this.pos;
              else break e;
          }
        }
      };
      v.finishToken = function(e, t) {
        this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var i = this.type;
        this.type = e, this.value = t, this.updateContext(i);
      };
      v.readToken_dot = function() {
        var e = this.input.charCodeAt(this.pos + 1);
        if (e >= 48 && e <= 57) return this.readNumber(true);
        var t = this.input.charCodeAt(this.pos + 2);
        return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(a.ellipsis)) : (++this.pos, this.finishToken(a.dot));
      };
      v.readToken_slash = function() {
        var e = this.input.charCodeAt(this.pos + 1);
        return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.slash, 1);
      };
      v.readToken_mult_modulo_exp = function(e) {
        var t = this.input.charCodeAt(this.pos + 1), i = 1, s = e === 42 ? a.star : a.modulo;
        return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, s = a.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(a.assign, i + 1) : this.finishOp(s, i);
      };
      v.readToken_pipe_amp = function(e) {
        var t = this.input.charCodeAt(this.pos + 1);
        if (t === e) {
          if (this.options.ecmaVersion >= 12) {
            var i = this.input.charCodeAt(this.pos + 2);
            if (i === 61) return this.finishOp(a.assign, 3);
          }
          return this.finishOp(e === 124 ? a.logicalOR : a.logicalAND, 2);
        }
        return t === 61 ? this.finishOp(a.assign, 2) : this.finishOp(e === 124 ? a.bitwiseOR : a.bitwiseAND, 1);
      };
      v.readToken_caret = function() {
        var e = this.input.charCodeAt(this.pos + 1);
        return e === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.bitwiseXOR, 1);
      };
      v.readToken_plus_min = function(e) {
        var t = this.input.charCodeAt(this.pos + 1);
        return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || R.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(a.incDec, 2) : t === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.plusMin, 1);
      };
      v.readToken_lt_gt = function(e) {
        var t = this.input.charCodeAt(this.pos + 1), i = 1;
        return t === e ? (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(a.assign, i + 1) : this.finishOp(a.bitShift, i)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(a.relational, i));
      };
      v.readToken_eq_excl = function(e) {
        var t = this.input.charCodeAt(this.pos + 1);
        return t === 61 ? this.finishOp(a.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(a.arrow)) : this.finishOp(e === 61 ? a.eq : a.prefix, 1);
      };
      v.readToken_question = function() {
        var e = this.options.ecmaVersion;
        if (e >= 11) {
          var t = this.input.charCodeAt(this.pos + 1);
          if (t === 46) {
            var i = this.input.charCodeAt(this.pos + 2);
            if (i < 48 || i > 57) return this.finishOp(a.questionDot, 2);
          }
          if (t === 63) {
            if (e >= 12) {
              var s = this.input.charCodeAt(this.pos + 2);
              if (s === 61) return this.finishOp(a.assign, 3);
            }
            return this.finishOp(a.coalesce, 2);
          }
        }
        return this.finishOp(a.question, 1);
      };
      v.readToken_numberSign = function() {
        var e = this.options.ecmaVersion, t = 35;
        if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), U(t, true) || t === 92)) return this.finishToken(a.privateId, this.readWord1());
        this.raise(this.pos, "Unexpected character '" + K(t) + "'");
      };
      v.getTokenFromCode = function(e) {
        switch (e) {
          case 46:
            return this.readToken_dot();
          case 40:
            return ++this.pos, this.finishToken(a.parenL);
          case 41:
            return ++this.pos, this.finishToken(a.parenR);
          case 59:
            return ++this.pos, this.finishToken(a.semi);
          case 44:
            return ++this.pos, this.finishToken(a.comma);
          case 91:
            return ++this.pos, this.finishToken(a.bracketL);
          case 93:
            return ++this.pos, this.finishToken(a.bracketR);
          case 123:
            return ++this.pos, this.finishToken(a.braceL);
          case 125:
            return ++this.pos, this.finishToken(a.braceR);
          case 58:
            return ++this.pos, this.finishToken(a.colon);
          case 96:
            if (this.options.ecmaVersion < 6) break;
            return ++this.pos, this.finishToken(a.backQuote);
          case 48:
            var t = this.input.charCodeAt(this.pos + 1);
            if (t === 120 || t === 88) return this.readRadixNumber(16);
            if (this.options.ecmaVersion >= 6) {
              if (t === 111 || t === 79) return this.readRadixNumber(8);
              if (t === 98 || t === 66) return this.readRadixNumber(2);
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(false);
          case 34:
          case 39:
            return this.readString(e);
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo_exp(e);
          case 124:
          case 38:
            return this.readToken_pipe_amp(e);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(e);
          case 60:
          case 62:
            return this.readToken_lt_gt(e);
          case 61:
          case 33:
            return this.readToken_eq_excl(e);
          case 63:
            return this.readToken_question();
          case 126:
            return this.finishOp(a.prefix, 1);
          case 35:
            return this.readToken_numberSign();
        }
        this.raise(this.pos, "Unexpected character '" + K(e) + "'");
      };
      v.finishOp = function(e, t) {
        var i = this.input.slice(this.pos, this.pos + t);
        return this.pos += t, this.finishToken(e, i);
      };
      v.readRegexp = function() {
        for (var e, t, i = this.pos; ; ) {
          this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
          var s = this.input.charAt(this.pos);
          if (R.test(s) && this.raise(i, "Unterminated regular expression"), e) e = false;
          else {
            if (s === "[") t = true;
            else if (s === "]" && t) t = false;
            else if (s === "/" && !t) break;
            e = s === "\\";
          }
          ++this.pos;
        }
        var r = this.input.slice(i, this.pos);
        ++this.pos;
        var n = this.pos, o = this.readWord1();
        this.containsEsc && this.unexpected(n);
        var u = this.regexpState || (this.regexpState = new M(this));
        u.reset(i, r, o), this.validateRegExpFlags(u), this.validateRegExpPattern(u);
        var p = null;
        try {
          p = new RegExp(r, o);
        } catch {
        }
        return this.finishToken(a.regexp, { pattern: r, flags: o, value: p });
      };
      v.readInt = function(e, t, i) {
        for (var s = this.options.ecmaVersion >= 12 && t === void 0, r = i && this.input.charCodeAt(this.pos) === 48, n = this.pos, o = 0, u = 0, p = 0, d = t ?? 1 / 0; p < d; ++p, ++this.pos) {
          var l = this.input.charCodeAt(this.pos), C = void 0;
          if (s && l === 95) {
            r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), u === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), p === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), u = l;
            continue;
          }
          if (l >= 97 ? C = l - 97 + 10 : l >= 65 ? C = l - 65 + 10 : l >= 48 && l <= 57 ? C = l - 48 : C = 1 / 0, C >= e) break;
          u = l, o = o * e + C;
        }
        return s && u === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n || t != null && this.pos - n !== t ? null : o;
      };
      function ts(e, t) {
        return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
      }
      function jt(e) {
        return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
      }
      v.readRadixNumber = function(e) {
        var t = this.pos;
        this.pos += 2;
        var i = this.readInt(e);
        return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = jt(this.input.slice(t, this.pos)), ++this.pos) : U(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(a.num, i);
      };
      v.readNumber = function(e) {
        var t = this.pos;
        !e && this.readInt(10, void 0, true) === null && this.raise(t, "Invalid number");
        var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
        i && this.strict && this.raise(t, "Invalid number");
        var s = this.input.charCodeAt(this.pos);
        if (!i && !e && this.options.ecmaVersion >= 11 && s === 110) {
          var r = jt(this.input.slice(t, this.pos));
          return ++this.pos, U(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(a.num, r);
        }
        i && /[89]/.test(this.input.slice(t, this.pos)) && (i = false), s === 46 && !i && (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), (s === 69 || s === 101) && !i && (s = this.input.charCodeAt(++this.pos), (s === 43 || s === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), U(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
        var n = ts(this.input.slice(t, this.pos), i);
        return this.finishToken(a.num, n);
      };
      v.readCodePoint = function() {
        var e = this.input.charCodeAt(this.pos), t;
        if (e === 123) {
          this.options.ecmaVersion < 6 && this.unexpected();
          var i = ++this.pos;
          t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
        } else t = this.readHexChar(4);
        return t;
      };
      v.readString = function(e) {
        for (var t = "", i = ++this.pos; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          var s = this.input.charCodeAt(this.pos);
          if (s === e) break;
          s === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(false), i = this.pos) : s === 8232 || s === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Q(s) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
        }
        return t += this.input.slice(i, this.pos++), this.finishToken(a.string, t);
      };
      var Ut = {};
      v.tryReadTemplateToken = function() {
        this.inTemplateElement = true;
        try {
          this.readTmplToken();
        } catch (e) {
          if (e === Ut) this.readInvalidTemplateToken();
          else throw e;
        }
        this.inTemplateElement = false;
      };
      v.invalidStringToken = function(e, t) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Ut;
        this.raise(e, t);
      };
      v.readTmplToken = function() {
        for (var e = "", t = this.pos; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
          var i = this.input.charCodeAt(this.pos);
          if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123) return this.pos === this.start && (this.type === a.template || this.type === a.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(a.dollarBraceL)) : (++this.pos, this.finishToken(a.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(a.template, e));
          if (i === 92) e += this.input.slice(t, this.pos), e += this.readEscapedChar(true), t = this.pos;
          else if (Q(i)) {
            switch (e += this.input.slice(t, this.pos), ++this.pos, i) {
              case 13:
                this.input.charCodeAt(this.pos) === 10 && ++this.pos;
              case 10:
                e += `
`;
                break;
              default:
                e += String.fromCharCode(i);
                break;
            }
            this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
          } else ++this.pos;
        }
      };
      v.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
          case "\\":
            ++this.pos;
            break;
          case "$":
            if (this.input[this.pos + 1] !== "{") break;
          case "`":
            return this.finishToken(a.invalidTemplate, this.input.slice(this.start, this.pos));
          case "\r":
            this.input[this.pos + 1] === `
` && ++this.pos;
          case `
`:
          case "\u2028":
          case "\u2029":
            ++this.curLine, this.lineStart = this.pos + 1;
            break;
        }
        this.raise(this.start, "Unterminated template");
      };
      v.readEscapedChar = function(e) {
        var t = this.input.charCodeAt(++this.pos);
        switch (++this.pos, t) {
          case 110:
            return `
`;
          case 114:
            return "\r";
          case 120:
            return String.fromCharCode(this.readHexChar(2));
          case 117:
            return K(this.readCodePoint());
          case 116:
            return "	";
          case 98:
            return "\b";
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 13:
            this.input.charCodeAt(this.pos) === 10 && ++this.pos;
          case 10:
            return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
          case 56:
          case 57:
            if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e) {
              var i = this.pos - 1;
              this.invalidStringToken(i, "Invalid escape sequence in template string");
            }
          default:
            if (t >= 48 && t <= 55) {
              var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], r = parseInt(s, 8);
              return r > 255 && (s = s.slice(0, -1), r = parseInt(s, 8)), this.pos += s.length - 1, t = this.input.charCodeAt(this.pos), (s !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(this.pos - 1 - s.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r);
            }
            return Q(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
        }
      };
      v.readHexChar = function(e) {
        var t = this.pos, i = this.readInt(16, e);
        return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
      };
      v.readWord1 = function() {
        this.containsEsc = false;
        for (var e = "", t = true, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
          var r = this.fullCharCodeAtPos();
          if (z(r, s)) this.pos += r <= 65535 ? 1 : 2;
          else if (r === 92) {
            this.containsEsc = true, e += this.input.slice(i, this.pos);
            var n = this.pos;
            this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
            var o = this.readCodePoint();
            (t ? U : z)(o, s) || this.invalidStringToken(n, "Invalid Unicode escape"), e += K(o), i = this.pos;
          } else break;
          t = false;
        }
        return e + this.input.slice(i, this.pos);
      };
      v.readWord = function() {
        var e = this.readWord1(), t = a.name;
        return this.keywords.test(e) && (t = Oe[e]), this.finishToken(t, e);
      };
      var is = "8.12.1";
      T.acorn = { Parser: T, version: is, defaultOptions: Ve, Position: te, SourceLocation: ye, getLineInfo: ct, Node: ve, TokenType: S, tokTypes: a, keywordTypes: Oe, TokContext: D, tokContexts: _, isIdentifierChar: z, isIdentifierStart: U, Token: qe, isNewLine: Q, lineBreak: R, lineBreakG: wi, nonASCIIwhitespace: pt };
      var ni = et(Ge(), 1);
      function us(e, t) {
        let i = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
        return Object.assign(i, t);
      }
      var Se = us;
      function ps(e) {
        let t = [];
        for (let i of e) try {
          return i();
        } catch (s) {
          t.push(s);
        }
        throw Object.assign(new Error("All combinations failed"), { errors: t });
      }
      var Ce = ps;
      var hs = (e, t, i) => {
        if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[i < 0 ? t.length + i : i] : t.at(i);
      }, W = hs;
      function cs(e) {
        return Array.isArray(e) && e.length > 0;
      }
      var Xt = cs;
      function P(e) {
        var s, r, n;
        let t = ((s = e.range) == null ? void 0 : s[0]) ?? e.start, i = (n = ((r = e.declaration) == null ? void 0 : r.decorators) ?? e.decorators) == null ? void 0 : n[0];
        return i ? Math.min(P(i), t) : t;
      }
      function j(e) {
        var t;
        return ((t = e.range) == null ? void 0 : t[1]) ?? e.end;
      }
      function ls(e) {
        let t = new Set(e);
        return (i) => t.has(i == null ? void 0 : i.type);
      }
      var Wt = ls;
      var fs = Wt(["Block", "CommentBlock", "MultiLine"]), oe = fs;
      function ds(e) {
        let t = `*${e.value}*`.split(`
`);
        return t.length > 1 && t.every((i) => i.trimStart()[0] === "*");
      }
      var Ke = ds;
      function ms(e) {
        return oe(e) && e.value[0] === "*" && /@(?:type|satisfies)\b/u.test(e.value);
      }
      var Ht = ms;
      var ue = null;
      function pe(e) {
        if (ue !== null && typeof ue.property) {
          let t = ue;
          return ue = pe.prototype = null, t;
        }
        return ue = pe.prototype = e ?? /* @__PURE__ */ Object.create(null), new pe();
      }
      var xs = 10;
      for (let e = 0; e <= xs; e++) pe();
      function Xe(e) {
        return pe(e);
      }
      function ys(e, t = "type") {
        Xe(e);
        function i(s) {
          let r = s[t], n = e[r];
          if (!Array.isArray(n)) throw Object.assign(new Error(`Missing visitor keys for '${r}'.`), { node: s });
          return n;
        }
        return i;
      }
      var zt = ys;
      var Qt = { ArrayExpression: ["elements"], AssignmentExpression: ["left", "right"], BinaryExpression: ["left", "right"], InterpreterDirective: [], Directive: ["value"], DirectiveLiteral: [], BlockStatement: ["directives", "body"], BreakStatement: ["label"], CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], CatchClause: ["param", "body"], ConditionalExpression: ["test", "consequent", "alternate"], ContinueStatement: ["label"], DebuggerStatement: [], DoWhileStatement: ["test", "body"], EmptyStatement: [], ExpressionStatement: ["expression"], File: ["program"], ForInStatement: ["left", "right", "body"], ForStatement: ["init", "test", "update", "body"], FunctionDeclaration: ["id", "params", "body", "returnType", "typeParameters", "predicate"], FunctionExpression: ["id", "params", "body", "returnType", "typeParameters"], Identifier: ["typeAnnotation", "decorators"], IfStatement: ["test", "consequent", "alternate"], LabeledStatement: ["label", "body"], StringLiteral: [], NumericLiteral: [], NullLiteral: [], BooleanLiteral: [], RegExpLiteral: [], LogicalExpression: ["left", "right"], MemberExpression: ["object", "property"], NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"], Program: ["directives", "body"], ObjectExpression: ["properties"], ObjectMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"], ObjectProperty: ["key", "value", "decorators"], RestElement: ["argument", "typeAnnotation", "decorators"], ReturnStatement: ["argument"], SequenceExpression: ["expressions"], ParenthesizedExpression: ["expression"], SwitchCase: ["test", "consequent"], SwitchStatement: ["discriminant", "cases"], ThisExpression: [], ThrowStatement: ["argument"], TryStatement: ["block", "handler", "finalizer"], UnaryExpression: ["argument"], UpdateExpression: ["argument"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id", "init"], WhileStatement: ["test", "body"], WithStatement: ["object", "body"], AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"], ArrayPattern: ["elements", "typeAnnotation", "decorators"], ArrowFunctionExpression: ["params", "body", "returnType", "typeParameters", "predicate"], ClassBody: ["body"], ClassExpression: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators", "superTypeArguments"], ClassDeclaration: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators", "superTypeArguments"], ExportAllDeclaration: ["source", "attributes", "exported"], ExportDefaultDeclaration: ["declaration"], ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"], ExportSpecifier: ["local", "exported"], ForOfStatement: ["left", "right", "body"], ImportDeclaration: ["specifiers", "source", "attributes"], ImportDefaultSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportSpecifier: ["local", "imported"], ImportExpression: ["source", "options", "attributes"], MetaProperty: ["meta", "property"], ClassMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"], ObjectPattern: ["properties", "typeAnnotation", "decorators"], SpreadElement: ["argument"], Super: [], TaggedTemplateExpression: ["tag", "quasi", "typeParameters", "typeArguments"], TemplateElement: [], TemplateLiteral: ["quasis", "expressions"], YieldExpression: ["argument"], AwaitExpression: ["argument"], Import: [], BigIntLiteral: [], ExportNamespaceSpecifier: ["exported"], OptionalMemberExpression: ["object", "property"], OptionalCallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], ClassProperty: ["key", "value", "typeAnnotation", "decorators", "variance"], ClassAccessorProperty: ["key", "value", "typeAnnotation", "decorators"], ClassPrivateProperty: ["key", "value", "decorators", "typeAnnotation", "variance"], ClassPrivateMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"], PrivateName: ["id"], StaticBlock: ["body"], AnyTypeAnnotation: [], ArrayTypeAnnotation: ["elementType"], BooleanTypeAnnotation: [], BooleanLiteralTypeAnnotation: [], NullLiteralTypeAnnotation: [], ClassImplements: ["id", "typeParameters"], DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"], DeclareFunction: ["id", "predicate"], DeclareInterface: ["id", "typeParameters", "extends", "body"], DeclareModule: ["id", "body"], DeclareModuleExports: ["typeAnnotation"], DeclareTypeAlias: ["id", "typeParameters", "right"], DeclareOpaqueType: ["id", "typeParameters", "supertype"], DeclareVariable: ["id"], DeclareExportDeclaration: ["declaration", "specifiers", "source"], DeclareExportAllDeclaration: ["source"], DeclaredPredicate: ["value"], ExistsTypeAnnotation: [], FunctionTypeAnnotation: ["typeParameters", "params", "rest", "returnType", "this"], FunctionTypeParam: ["name", "typeAnnotation"], GenericTypeAnnotation: ["id", "typeParameters"], InferredPredicate: [], InterfaceExtends: ["id", "typeParameters"], InterfaceDeclaration: ["id", "typeParameters", "extends", "body"], InterfaceTypeAnnotation: ["extends", "body"], IntersectionTypeAnnotation: ["types"], MixedTypeAnnotation: [], EmptyTypeAnnotation: [], NullableTypeAnnotation: ["typeAnnotation"], NumberLiteralTypeAnnotation: [], NumberTypeAnnotation: [], ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"], ObjectTypeInternalSlot: ["id", "value"], ObjectTypeCallProperty: ["value"], ObjectTypeIndexer: ["id", "key", "value", "variance"], ObjectTypeProperty: ["key", "value", "variance"], ObjectTypeSpreadProperty: ["argument"], OpaqueType: ["id", "typeParameters", "supertype", "impltype"], QualifiedTypeIdentifier: ["id", "qualification"], StringLiteralTypeAnnotation: [], StringTypeAnnotation: [], SymbolTypeAnnotation: [], ThisTypeAnnotation: [], TupleTypeAnnotation: ["types", "elementTypes"], TypeofTypeAnnotation: ["argument", "typeArguments"], TypeAlias: ["id", "typeParameters", "right"], TypeAnnotation: ["typeAnnotation"], TypeCastExpression: ["expression", "typeAnnotation"], TypeParameter: ["bound", "default", "variance"], TypeParameterDeclaration: ["params"], TypeParameterInstantiation: ["params"], UnionTypeAnnotation: ["types"], Variance: [], VoidTypeAnnotation: [], EnumDeclaration: ["id", "body"], EnumBooleanBody: ["members"], EnumNumberBody: ["members"], EnumStringBody: ["members"], EnumSymbolBody: ["members"], EnumBooleanMember: ["id", "init"], EnumNumberMember: ["id", "init"], EnumStringMember: ["id", "init"], EnumDefaultedMember: ["id"], IndexedAccessType: ["objectType", "indexType"], OptionalIndexedAccessType: ["objectType", "indexType"], JSXAttribute: ["name", "value"], JSXClosingElement: ["name"], JSXElement: ["openingElement", "children", "closingElement"], JSXEmptyExpression: [], JSXExpressionContainer: ["expression"], JSXSpreadChild: ["expression"], JSXIdentifier: [], JSXMemberExpression: ["object", "property"], JSXNamespacedName: ["namespace", "name"], JSXOpeningElement: ["name", "attributes", "typeArguments", "typeParameters"], JSXSpreadAttribute: ["argument"], JSXText: [], JSXFragment: ["openingFragment", "children", "closingFragment"], JSXOpeningFragment: [], JSXClosingFragment: [], Noop: [], Placeholder: [], V8IntrinsicIdentifier: [], ArgumentPlaceholder: [], BindExpression: ["object", "callee"], ImportAttribute: ["key", "value"], Decorator: ["expression"], DoExpression: ["body"], ExportDefaultSpecifier: ["exported"], RecordExpression: ["properties"], TupleExpression: ["elements"], DecimalLiteral: [], ModuleExpression: ["body"], TopicReference: [], PipelineTopicExpression: ["expression"], PipelineBareFunction: ["callee"], PipelinePrimaryTopicReference: [], TSParameterProperty: ["parameter", "decorators"], TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"], TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"], TSQualifiedName: ["left", "right"], TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSPropertySignature: ["key", "typeAnnotation"], TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSIndexSignature: ["parameters", "typeAnnotation"], TSAnyKeyword: [], TSBooleanKeyword: [], TSBigIntKeyword: [], TSIntrinsicKeyword: [], TSNeverKeyword: [], TSNullKeyword: [], TSNumberKeyword: [], TSObjectKeyword: [], TSStringKeyword: [], TSSymbolKeyword: [], TSUndefinedKeyword: [], TSUnknownKeyword: [], TSVoidKeyword: [], TSThisType: [], TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSTypeReference: ["typeName", "typeParameters", "typeArguments"], TSTypePredicate: ["parameterName", "typeAnnotation"], TSTypeQuery: ["exprName", "typeParameters", "typeArguments"], TSTypeLiteral: ["members"], TSArrayType: ["elementType"], TSTupleType: ["elementTypes"], TSOptionalType: ["typeAnnotation"], TSRestType: ["typeAnnotation"], TSNamedTupleMember: ["label", "elementType"], TSUnionType: ["types"], TSIntersectionType: ["types"], TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"], TSInferType: ["typeParameter"], TSParenthesizedType: ["typeAnnotation"], TSTypeOperator: ["typeAnnotation"], TSIndexedAccessType: ["objectType", "indexType"], TSMappedType: ["typeParameter", "typeAnnotation", "nameType"], TSLiteralType: ["literal"], TSExpressionWithTypeArguments: ["expression", "typeParameters"], TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"], TSInterfaceBody: ["body"], TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"], TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"], TSAsExpression: ["expression", "typeAnnotation"], TSSatisfiesExpression: ["expression", "typeAnnotation"], TSTypeAssertion: ["typeAnnotation", "expression"], TSEnumDeclaration: ["id", "members"], TSEnumMember: ["id", "initializer"], TSModuleDeclaration: ["id", "body"], TSModuleBlock: ["body"], TSImportType: ["argument", "qualifier", "typeParameters", "typeArguments"], TSImportEqualsDeclaration: ["id", "moduleReference"], TSExternalModuleReference: ["expression"], TSNonNullExpression: ["expression"], TSExportAssignment: ["expression"], TSNamespaceExportDeclaration: ["id"], TSTypeAnnotation: ["typeAnnotation"], TSTypeParameterInstantiation: ["params"], TSTypeParameterDeclaration: ["params"], TSTypeParameter: ["constraint", "default", "name"], ChainExpression: ["expression"], ExperimentalRestProperty: ["argument"], ExperimentalSpreadProperty: ["argument"], Literal: [], MethodDefinition: ["decorators", "key", "value"], PrivateIdentifier: [], Property: ["key", "value"], PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"], AccessorProperty: ["decorators", "key", "typeAnnotation", "value"], TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"], TSAbstractKeyword: [], TSAbstractMethodDefinition: ["key", "value"], TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"], TSAsyncKeyword: [], TSClassImplements: ["expression", "typeArguments", "typeParameters"], TSDeclareKeyword: [], TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"], TSEnumBody: ["members"], TSExportKeyword: [], TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"], TSPrivateKeyword: [], TSProtectedKeyword: [], TSPublicKeyword: [], TSReadonlyKeyword: [], TSStaticKeyword: [], TSTemplateLiteralType: ["quasis", "types"], AsConstExpression: ["expression"], AsExpression: ["expression", "typeAnnotation"], BigIntLiteralTypeAnnotation: [], BigIntTypeAnnotation: [], ComponentDeclaration: ["id", "params", "body", "typeParameters", "rendersType"], ComponentParameter: ["name", "local"], ComponentTypeAnnotation: ["params", "rest", "typeParameters", "rendersType"], ComponentTypeParameter: ["name", "typeAnnotation"], ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"], DeclareComponent: ["id", "params", "rest", "typeParameters", "rendersType"], DeclareEnum: ["id", "body"], DeclareHook: ["id"], DeclareNamespace: ["id", "body"], EnumBigIntBody: ["members"], EnumBigIntMember: ["id", "init"], HookDeclaration: ["id", "params", "body", "typeParameters", "returnType"], HookTypeAnnotation: ["params", "returnType", "rest", "typeParameters"], InferTypeAnnotation: ["typeParameter"], KeyofTypeAnnotation: ["argument"], ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"], QualifiedTypeofIdentifier: ["qualification", "id"], TupleTypeLabeledElement: ["label", "elementType", "variance"], TupleTypeSpreadElement: ["label", "typeAnnotation"], TypeOperator: ["typeAnnotation"], TypePredicate: ["parameterName", "typeAnnotation", "asserts"], NGRoot: ["node"], NGPipeExpression: ["left", "right", "arguments"], NGChainedExpression: ["expressions"], NGEmptyExpression: [], NGMicrosyntax: ["body"], NGMicrosyntaxKey: [], NGMicrosyntaxExpression: ["expression", "alias"], NGMicrosyntaxKeyedExpression: ["key", "expression"], NGMicrosyntaxLet: ["key", "value"], NGMicrosyntaxAs: ["key", "alias"], JsExpressionRoot: ["node"], JsonRoot: ["node"], TSJSDocAllType: [], TSJSDocUnknownType: [], TSJSDocNullableType: ["typeAnnotation"], TSJSDocNonNullableType: ["typeAnnotation"], NeverTypeAnnotation: [], UndefinedTypeAnnotation: [], UnknownTypeAnnotation: [], SatisfiesExpression: ["expression", "typeAnnotation"] };
      var gs = zt(Qt), Yt = gs;
      function We(e, t) {
        if (!(e !== null && typeof e == "object")) return e;
        if (Array.isArray(e)) {
          for (let s = 0; s < e.length; s++) e[s] = We(e[s], t);
          return e;
        }
        let i = Yt(e);
        for (let s = 0; s < i.length; s++) e[i[s]] = We(e[i[s]], t);
        return t(e) || e;
      }
      var _e = We;
      function vs(e, t) {
        let { parser: i, text: s } = t;
        if (e.type === "File" && e.program.interpreter) {
          let { program: { interpreter: r }, comments: n } = e;
          delete e.program.interpreter, n.unshift(r);
        }
        if (i === "babel") {
          let r = /* @__PURE__ */ new Set();
          e = _e(e, (n) => {
            var o;
            (o = n.leadingComments) != null && o.some(Ht) && r.add(P(n));
          }), e = _e(e, (n) => {
            if (n.type === "ParenthesizedExpression") {
              let { expression: o } = n;
              if (o.type === "TypeCastExpression") return o.range = [...n.range], o;
              let u = P(n);
              if (!r.has(u)) return o.extra = { ...o.extra, parenthesized: true }, o;
            }
          });
        }
        if (e = _e(e, (r) => {
          var n;
          switch (r.type) {
            case "LogicalExpression":
              if ($t(r)) return He(r);
              break;
            case "VariableDeclaration": {
              let o = W(false, r.declarations, -1);
              o != null && o.init && s[j(o)] !== ";" && (r.range = [P(r), j(o)]);
              break;
            }
            case "TSParenthesizedType":
              return r.typeAnnotation;
            case "TSTypeParameter":
              if (typeof r.name == "string") {
                let o = P(r);
                r.name = { type: "Identifier", name: r.name, range: [o, o + r.name.length] };
              }
              break;
            case "TopicReference":
              e.extra = { ...e.extra, __isUsingHackPipeline: true };
              break;
            case "ExportAllDeclaration":
              if (i === "meriyah" && ((n = r.exported) == null ? void 0 : n.type) === "Identifier") {
                let { exported: o } = r, u = s.slice(P(o), j(o));
                (u.startsWith('"') || u.startsWith("'")) && (r.exported = { ...r.exported, type: "Literal", value: r.exported.name, raw: u });
              }
              break;
            case "TSUnionType":
            case "TSIntersectionType":
              if (r.types.length === 1) return r.types[0];
              break;
          }
        }), Xt(e.comments)) {
          let r = W(false, e.comments, -1);
          for (let n = e.comments.length - 2; n >= 0; n--) {
            let o = e.comments[n];
            j(o) === P(r) && oe(o) && oe(r) && Ke(o) && Ke(r) && (e.comments.splice(n + 1, 1), o.value += "*//*" + r.value, o.range = [P(o), j(r)]), r = o;
          }
        }
        return e.type === "Program" && (e.range = [0, s.length]), e;
      }
      function $t(e) {
        return e.type === "LogicalExpression" && e.right.type === "LogicalExpression" && e.operator === e.right.operator;
      }
      function He(e) {
        return $t(e) ? He({ type: "LogicalExpression", operator: e.operator, left: He({ type: "LogicalExpression", operator: e.operator, left: e.left, right: e.right.left, range: [P(e.left), j(e.right.left)] }), right: e.right.right, range: [P(e), j(e)] }) : e;
      }
      var Te = vs;
      var bs = (e, t, i, s) => {
        if (!(e && t == null)) return t.replaceAll ? t.replaceAll(i, s) : i.global ? t.replace(i, s) : t.split(i).join(s);
      }, Z = bs;
      var Ss = /\*\/$/, Cs = /^\/\*\*?/, _s = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, Ts = /(^|\s+)\/\/([^\n\r]*)/g, Zt = /^(\r?\n)+/, ks = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g, ei = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g, Es = /(\r?\n|^) *\* ?/g, ws = [];
      function ti(e) {
        let t = e.match(_s);
        return t ? t[0].trimStart() : "";
      }
      function ii(e) {
        let t = `
`;
        e = Z(false, e.replace(Cs, "").replace(Ss, ""), Es, "$1");
        let i = "";
        for (; i !== e; ) i = e, e = Z(false, e, ks, `${t}$1 $2${t}`);
        e = e.replace(Zt, "").trimEnd();
        let s = /* @__PURE__ */ Object.create(null), r = Z(false, e, ei, "").replace(Zt, "").trimEnd(), n;
        for (; n = ei.exec(e); ) {
          let o = Z(false, n[2], Ts, "");
          if (typeof s[n[1]] == "string" || Array.isArray(s[n[1]])) {
            let u = s[n[1]];
            s[n[1]] = [...ws, ...Array.isArray(u) ? u : [u], o];
          } else s[n[1]] = o;
        }
        return { comments: r, pragmas: s };
      }
      function As(e) {
        if (!e.startsWith("#!")) return "";
        let t = e.indexOf(`
`);
        return t === -1 ? e : e.slice(0, t);
      }
      var si = As;
      function Ps(e) {
        let t = si(e);
        t && (e = e.slice(t.length + 1));
        let i = ti(e), { pragmas: s, comments: r } = ii(i);
        return { shebang: t, text: e, pragmas: s, comments: r };
      }
      function ri(e) {
        let { pragmas: t } = Ps(e);
        return Object.prototype.hasOwnProperty.call(t, "prettier") || Object.prototype.hasOwnProperty.call(t, "format");
      }
      function Is(e) {
        return e = typeof e == "function" ? { parse: e } : e, { astFormat: "estree", hasPragma: ri, locStart: P, locEnd: j, ...e };
      }
      var ke = Is;
      function Ns(e) {
        let { filepath: t } = e;
        if (t) {
          if (t = t.toLowerCase(), t.endsWith(".cjs")) return "script";
          if (t.endsWith(".mjs")) return "module";
        }
      }
      var Ee = Ns;
      var Vs = { ecmaVersion: "latest", allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, locations: true, ranges: true };
      function Ls(e) {
        let { message: t, loc: i } = e;
        if (!i) return e;
        let { line: s, column: r } = i;
        return Se(t.replace(/ \(\d+:\d+\)$/u, ""), { loc: { start: { line: s, column: r + 1 } }, cause: e });
      }
      var ai, Rs = () => (ai ?? (ai = T.extend((0, ni.default)())), ai);
      function Os(e, t) {
        let i = Rs(), s = [], r = [], n = i.parse(e, { ...Vs, sourceType: t, allowImportExportEverywhere: t === "module", onComment: s, onToken: r });
        return n.comments = s, n.tokens = r, n;
      }
      function Bs(e, t = {}) {
        let i = Ee(t), s = (i ? [i] : ["module", "script"]).map((n) => () => Os(e, n)), r;
        try {
          r = Ce(s);
        } catch ({ errors: [n] }) {
          throw Ls(n);
        }
        return Te(r, { text: e });
      }
      var oi = ke(Bs);
      var ci = et(Ge(), 1);
      var E = { Boolean: "Boolean", EOF: "<end>", Identifier: "Identifier", PrivateIdentifier: "PrivateIdentifier", Keyword: "Keyword", Null: "Null", Numeric: "Numeric", Punctuator: "Punctuator", String: "String", RegularExpression: "RegularExpression", Template: "Template", JSXIdentifier: "JSXIdentifier", JSXText: "JSXText" };
      function Ds(e, t) {
        let i = e[0], s = W(false, e, -1), r = { type: E.Template, value: t.slice(i.start, s.end) };
        return i.loc && (r.loc = { start: i.loc.start, end: s.loc.end }), i.range && (r.start = i.range[0], r.end = s.range[1], r.range = [r.start, r.end]), r;
      }
      function ze(e, t) {
        this._acornTokTypes = e, this._tokens = [], this._curlyBrace = null, this._code = t;
      }
      ze.prototype = { constructor: ze, translate(e, t) {
        let i = e.type, s = this._acornTokTypes;
        if (i === s.name) e.type = E.Identifier, e.value === "static" && (e.type = E.Keyword), t.ecmaVersion > 5 && (e.value === "yield" || e.value === "let") && (e.type = E.Keyword);
        else if (i === s.privateId) e.type = E.PrivateIdentifier;
        else if (i === s.semi || i === s.comma || i === s.parenL || i === s.parenR || i === s.braceL || i === s.braceR || i === s.dot || i === s.bracketL || i === s.colon || i === s.question || i === s.bracketR || i === s.ellipsis || i === s.arrow || i === s.jsxTagStart || i === s.incDec || i === s.starstar || i === s.jsxTagEnd || i === s.prefix || i === s.questionDot || i.binop && !i.keyword || i.isAssign) e.type = E.Punctuator, e.value = this._code.slice(e.start, e.end);
        else if (i === s.jsxName) e.type = E.JSXIdentifier;
        else if (i.label === "jsxText" || i === s.jsxAttrValueToken) e.type = E.JSXText;
        else if (i.keyword) i.keyword === "true" || i.keyword === "false" ? e.type = E.Boolean : i.keyword === "null" ? e.type = E.Null : e.type = E.Keyword;
        else if (i === s.num) e.type = E.Numeric, e.value = this._code.slice(e.start, e.end);
        else if (i === s.string) t.jsxAttrValueToken ? (t.jsxAttrValueToken = false, e.type = E.JSXText) : e.type = E.String, e.value = this._code.slice(e.start, e.end);
        else if (i === s.regexp) {
          e.type = E.RegularExpression;
          let r = e.value;
          e.regex = { flags: r.flags, pattern: r.pattern }, e.value = `/${r.pattern}/${r.flags}`;
        }
        return e;
      }, onToken(e, t) {
        let i = this._acornTokTypes, s = t.tokens, r = this._tokens, n = () => {
          s.push(Ds(this._tokens, this._code)), this._tokens = [];
        };
        if (e.type === i.eof) {
          this._curlyBrace && s.push(this.translate(this._curlyBrace, t));
          return;
        }
        if (e.type === i.backQuote) {
          this._curlyBrace && (s.push(this.translate(this._curlyBrace, t)), this._curlyBrace = null), r.push(e), r.length > 1 && n();
          return;
        }
        if (e.type === i.dollarBraceL) {
          r.push(e), n();
          return;
        }
        if (e.type === i.braceR) {
          this._curlyBrace && s.push(this.translate(this._curlyBrace, t)), this._curlyBrace = e;
          return;
        }
        if (e.type === i.template || e.type === i.invalidTemplate) {
          this._curlyBrace && (r.push(this._curlyBrace), this._curlyBrace = null), r.push(e);
          return;
        }
        this._curlyBrace && (s.push(this.translate(this._curlyBrace, t)), this._curlyBrace = null), s.push(this.translate(e, t));
      } };
      var ui = ze;
      var pi = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      function Fs() {
        return W(false, pi, -1);
      }
      function Ms(e = 5) {
        let t = e === "latest" ? Fs() : e;
        if (typeof t != "number") throw new Error(`ecmaVersion must be a number or "latest". Received value of type ${typeof e} instead.`);
        if (t >= 2015 && (t -= 2009), !pi.includes(t)) throw new Error("Invalid ecmaVersion.");
        return t;
      }
      function js(e = "script") {
        if (e === "script" || e === "module") return e;
        if (e === "commonjs") return "script";
        throw new Error("Invalid sourceType.");
      }
      function hi(e) {
        let t = Ms(e.ecmaVersion), i = js(e.sourceType), s = e.range === true, r = e.loc === true;
        if (t !== 3 && e.allowReserved) throw new Error("`allowReserved` is only supported when ecmaVersion is 3");
        if (typeof e.allowReserved < "u" && typeof e.allowReserved != "boolean") throw new Error("`allowReserved`, when present, must be `true` or `false`");
        let n = t === 3 ? e.allowReserved || "never" : false, o = e.ecmaFeatures || {}, u = e.sourceType === "commonjs" || !!o.globalReturn;
        if (i === "module" && t < 6) throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
        return Object.assign({}, e, { ecmaVersion: t, sourceType: i, ranges: s, locations: r, allowReserved: n, allowReturnOutsideFunction: u });
      }
      var H = Symbol("espree's internal state"), Qe = Symbol("espree's esprimaFinishNode");
      function Us(e, t, i, s, r, n, o) {
        let u;
        e ? u = "Block" : o.slice(i, i + 2) === "#!" ? u = "Hashbang" : u = "Line";
        let p = { type: u, value: t };
        return typeof i == "number" && (p.start = i, p.end = s, p.range = [i, s]), typeof r == "object" && (p.loc = { start: r, end: n }), p;
      }
      var Ye = () => (e) => {
        let t = Object.assign({}, e.acorn.tokTypes);
        return e.acornJsx && Object.assign(t, e.acornJsx.tokTypes), class extends e {
          constructor(s, r) {
            (typeof s != "object" || s === null) && (s = {}), typeof r != "string" && !(r instanceof String) && (r = String(r));
            let n = s.sourceType, o = hi(s), u = o.ecmaFeatures || {}, p = o.tokens === true ? new ui(t, r) : null, d = { originalSourceType: n || o.sourceType, tokens: p ? [] : null, comments: o.comment === true ? [] : null, impliedStrict: u.impliedStrict === true && o.ecmaVersion >= 5, ecmaVersion: o.ecmaVersion, jsxAttrValueToken: false, lastToken: null, templateElements: [] };
            super({ ecmaVersion: o.ecmaVersion, sourceType: o.sourceType, ranges: o.ranges, locations: o.locations, allowReserved: o.allowReserved, allowReturnOutsideFunction: o.allowReturnOutsideFunction, onToken(l) {
              p && p.onToken(l, d), l.type !== t.eof && (d.lastToken = l);
            }, onComment(l, C, B, h, m, x) {
              if (d.comments) {
                let g = Us(l, C, B, h, m, x, r);
                d.comments.push(g);
              }
            } }, r), this[H] = d;
          }
          tokenize() {
            do
              this.next();
            while (this.type !== t.eof);
            this.next();
            let s = this[H], r = s.tokens;
            return s.comments && (r.comments = s.comments), r;
          }
          finishNode(...s) {
            let r = super.finishNode(...s);
            return this[Qe](r);
          }
          finishNodeAt(...s) {
            let r = super.finishNodeAt(...s);
            return this[Qe](r);
          }
          parse() {
            let s = this[H], r = super.parse();
            if (r.sourceType = s.originalSourceType, s.comments && (r.comments = s.comments), s.tokens && (r.tokens = s.tokens), r.body.length) {
              let [n] = r.body;
              r.range && (r.range[0] = n.range[0]), r.loc && (r.loc.start = n.loc.start), r.start = n.start;
            }
            return s.lastToken && (r.range && (r.range[1] = s.lastToken.range[1]), r.loc && (r.loc.end = s.lastToken.loc.end), r.end = s.lastToken.end), this[H].templateElements.forEach((n) => {
              let u = n.tail ? 1 : 2;
              n.start += -1, n.end += u, n.range && (n.range[0] += -1, n.range[1] += u), n.loc && (n.loc.start.column += -1, n.loc.end.column += u);
            }), r;
          }
          parseTopLevel(s) {
            return this[H].impliedStrict && (this.strict = true), super.parseTopLevel(s);
          }
          raise(s, r) {
            let n = e.acorn.getLineInfo(this.input, s), o = new SyntaxError(r);
            throw o.index = s, o.lineNumber = n.line, o.column = n.column + 1, o;
          }
          raiseRecoverable(s, r) {
            this.raise(s, r);
          }
          unexpected(s) {
            let r = "Unexpected token";
            if (s != null) {
              if (this.pos = s, this.options.locations) for (; this.pos < this.lineStart; ) this.lineStart = this.input.lastIndexOf(`
`, this.lineStart - 2) + 1, --this.curLine;
              this.nextToken();
            }
            this.end > this.start && (r += ` ${this.input.slice(this.start, this.end)}`), this.raise(this.start, r);
          }
          jsx_readString(s) {
            let r = super.jsx_readString(s);
            return this.type === t.string && (this[H].jsxAttrValueToken = true), r;
          }
          [Qe](s) {
            return s.type === "TemplateElement" && this[H].templateElements.push(s), s.type.includes("Function") && !s.generator && (s.generator = false), s;
          }
        };
      };
      var qs = { _regular: null, _jsx: null, get regular() {
        return this._regular === null && (this._regular = T.extend(Ye())), this._regular;
      }, get jsx() {
        return this._jsx === null && (this._jsx = T.extend((0, ci.default)(), Ye())), this._jsx;
      }, get(e) {
        return !!(e && e.ecmaFeatures && e.ecmaFeatures.jsx) ? this.jsx : this.regular;
      } };
      function li(e, t) {
        let i = qs.get(t);
        return new i(t, e).parse();
      }
      var Js = { ecmaVersion: "latest", range: true, loc: true, comment: true, tokens: true, sourceType: "module", ecmaFeatures: { jsx: true, globalReturn: true, impliedStrict: false } };
      function Gs(e) {
        let { message: t, lineNumber: i, column: s } = e;
        return typeof i != "number" ? e : Se(t, { loc: { start: { line: i, column: s } }, cause: e });
      }
      function Ks(e, t = {}) {
        let i = Ee(t), s = (i ? [i] : ["module", "script"]).map((n) => () => li(e, { ...Js, sourceType: n })), r;
        try {
          r = Ce(s);
        } catch ({ errors: [n] }) {
          throw Gs(n);
        }
        return Te(r, { text: e });
      }
      var fi = ke(Ks);
      var Xs = { acorn: oi, espree: fi };
      return bi(Ws);
    });
  }
});
export default require_acorn();
//# sourceMappingURL=prettier_parser-espree.js.map
