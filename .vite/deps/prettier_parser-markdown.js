import {
  __commonJS,
  __publicField
} from "./chunk-EWTE5DHJ.js";

// node_modules/prettier/plugins/markdown.js
var require_markdown = __commonJS({
  "node_modules/prettier/plugins/markdown.js"(exports, module) {
    (function(n) {
      function e() {
        var i = n();
        return i.default || i;
      }
      if (typeof exports == "object" && typeof module == "object") module.exports = e();
      else if (typeof define == "function" && define.amd) define(e);
      else {
        var t = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
        t.prettierPlugins = t.prettierPlugins || {}, t.prettierPlugins.markdown = e();
      }
    })(function() {
      "use strict";
      var el = Object.create;
      var xr = Object.defineProperty;
      var rl = Object.getOwnPropertyDescriptor;
      var tl = Object.getOwnPropertyNames;
      var nl = Object.getPrototypeOf, il = Object.prototype.hasOwnProperty;
      var C = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), Pn = (e, r) => {
        for (var t in r) xr(e, t, { get: r[t], enumerable: true });
      }, Ln = (e, r, t, n) => {
        if (r && typeof r == "object" || typeof r == "function") for (let a of tl(r)) !il.call(e, a) && a !== t && xr(e, a, { get: () => r[a], enumerable: !(n = rl(r, a)) || n.enumerable });
        return e;
      };
      var Ue = (e, r, t) => (t = e != null ? el(nl(e)) : {}, Ln(r || !e || !e.__esModule ? xr(t, "default", { value: e, enumerable: true }) : t, e)), ul = (e) => Ln(xr({}, "__esModule", { value: true }), e);
      var wr = C((Pm, In) => {
        "use strict";
        In.exports = sl;
        function sl(e) {
          return String(e).replace(/\s+/g, " ");
        }
      });
      var Pi = C((ov, Oi) => {
        "use strict";
        Oi.exports = mf;
        var lr = 9, Ur = 10, Ye = 32, Df = 33, pf = 58, Ge = 91, df = 92, xt = 93, fr = 94, zr = 96, Mr = 4, hf = 1024;
        function mf(e) {
          var r = this.Parser, t = this.Compiler;
          Ff(r) && vf(r, e), gf(t) && Ef(t);
        }
        function Ff(e) {
          return !!(e && e.prototype && e.prototype.blockTokenizers);
        }
        function gf(e) {
          return !!(e && e.prototype && e.prototype.visitors);
        }
        function vf(e, r) {
          for (var t = r || {}, n = e.prototype, a = n.blockTokenizers, u = n.inlineTokenizers, i = n.blockMethods, o = n.inlineMethods, s = a.definition, l = u.reference, c = [], f = -1, D = i.length, h; ++f < D; ) h = i[f], !(h === "newline" || h === "indentedCode" || h === "paragraph" || h === "footnoteDefinition") && c.push([h]);
          c.push(["footnoteDefinition"]), t.inlineNotes && (wt(o, "reference", "inlineNote"), u.inlineNote = m), wt(i, "definition", "footnoteDefinition"), wt(o, "reference", "footnoteCall"), a.definition = y, a.footnoteDefinition = p, u.footnoteCall = d, u.reference = F, n.interruptFootnoteDefinition = c, F.locator = l.locator, d.locator = E, m.locator = B;
          function p(b, g, A) {
            for (var x = this, v = x.interruptFootnoteDefinition, w = x.offset, k = g.length + 1, q = 0, T = [], R, O, S, _, P, ke, j, I, Z, Q, me, Fe, z; q < k && (_ = g.charCodeAt(q), !(_ !== lr && _ !== Ye)); ) q++;
            if (g.charCodeAt(q++) === Ge && g.charCodeAt(q++) === fr) {
              for (O = q; q < k; ) {
                if (_ = g.charCodeAt(q), _ !== _ || _ === Ur || _ === lr || _ === Ye) return;
                if (_ === xt) {
                  S = q, q++;
                  break;
                }
                q++;
              }
              if (!(S === void 0 || O === S || g.charCodeAt(q++) !== pf)) {
                if (A) return true;
                for (R = g.slice(O, S), P = b.now(), Z = 0, Q = 0, me = q, Fe = []; q < k; ) {
                  if (_ = g.charCodeAt(q), _ !== _ || _ === Ur) z = { start: Z, contentStart: me || q, contentEnd: q, end: q }, Fe.push(z), _ === Ur && (Z = q + 1, Q = 0, me = void 0, z.end = Z);
                  else if (Q !== void 0) if (_ === Ye || _ === lr) Q += _ === Ye ? 1 : Mr - Q % Mr, Q > Mr && (Q = void 0, me = q);
                  else {
                    if (Q < Mr && z && (z.contentStart === z.contentEnd || Cf(v, a, x, [b, g.slice(q, hf), true]))) break;
                    Q = void 0, me = q;
                  }
                  q++;
                }
                for (q = -1, k = Fe.length; k > 0 && (z = Fe[k - 1], z.contentStart === z.contentEnd); ) k--;
                for (ke = b(g.slice(0, z.contentEnd)); ++q < k; ) z = Fe[q], w[P.line + q] = (w[P.line + q] || 0) + (z.contentStart - z.start), T.push(g.slice(z.contentStart, z.end));
                return j = x.enterBlock(), I = x.tokenizeBlock(T.join(""), P), j(), ke({ type: "footnoteDefinition", identifier: R.toLowerCase(), label: R, children: I });
              }
            }
          }
          function d(b, g, A) {
            var x = g.length + 1, v = 0, w, k, q, T;
            if (g.charCodeAt(v++) === Ge && g.charCodeAt(v++) === fr) {
              for (k = v; v < x; ) {
                if (T = g.charCodeAt(v), T !== T || T === Ur || T === lr || T === Ye) return;
                if (T === xt) {
                  q = v, v++;
                  break;
                }
                v++;
              }
              if (!(q === void 0 || k === q)) return A ? true : (w = g.slice(k, q), b(g.slice(0, v))({ type: "footnoteReference", identifier: w.toLowerCase(), label: w }));
            }
          }
          function m(b, g, A) {
            var x = this, v = g.length + 1, w = 0, k = 0, q, T, R, O, S, _, P;
            if (g.charCodeAt(w++) === fr && g.charCodeAt(w++) === Ge) {
              for (R = w; w < v; ) {
                if (T = g.charCodeAt(w), T !== T) return;
                if (_ === void 0) if (T === df) w += 2;
                else if (T === Ge) k++, w++;
                else if (T === xt) if (k === 0) {
                  O = w, w++;
                  break;
                } else k--, w++;
                else if (T === zr) {
                  for (S = w, _ = 1; g.charCodeAt(S + _) === zr; ) _++;
                  w += _;
                } else w++;
                else if (T === zr) {
                  for (S = w, P = 1; g.charCodeAt(S + P) === zr; ) P++;
                  w += P, _ === P && (_ = void 0), P = void 0;
                } else w++;
              }
              if (O !== void 0) return A ? true : (q = b.now(), q.column += 2, q.offset += 2, b(g.slice(0, w))({ type: "footnote", children: x.tokenizeInline(g.slice(R, O), q) }));
            }
          }
          function F(b, g, A) {
            var x = 0;
            if (g.charCodeAt(x) === Df && x++, g.charCodeAt(x) === Ge && g.charCodeAt(x + 1) !== fr) return l.call(this, b, g, A);
          }
          function y(b, g, A) {
            for (var x = 0, v = g.charCodeAt(x); v === Ye || v === lr; ) v = g.charCodeAt(++x);
            if (v === Ge && g.charCodeAt(x + 1) !== fr) return s.call(this, b, g, A);
          }
          function E(b, g) {
            return b.indexOf("[", g);
          }
          function B(b, g) {
            return b.indexOf("^[", g);
          }
        }
        function Ef(e) {
          var r = e.prototype.visitors, t = "    ";
          r.footnote = n, r.footnoteReference = a, r.footnoteDefinition = u;
          function n(i) {
            return "^[" + this.all(i).join("") + "]";
          }
          function a(i) {
            return "[^" + (i.label || i.identifier) + "]";
          }
          function u(i) {
            for (var o = this.all(i).join(`

`).split(`
`), s = 0, l = o.length, c; ++s < l; ) c = o[s], c !== "" && (o[s] = t + c);
            return "[^" + (i.label || i.identifier) + "]: " + o.join(`
`);
          }
        }
        function wt(e, r, t) {
          e.splice(e.indexOf(r), 0, t);
        }
        function Cf(e, r, t, n) {
          for (var a = e.length, u = -1; ++u < a; ) if (r[e[u][0]].apply(t, n)) return true;
          return false;
        }
      });
      var Bt = C((kt) => {
        kt.isRemarkParser = bf;
        kt.isRemarkCompiler = yf;
        function bf(e) {
          return !!(e && e.prototype && e.prototype.blockTokenizers);
        }
        function yf(e) {
          return !!(e && e.prototype && e.prototype.visitors);
        }
      });
      var Mi = C((cv, zi) => {
        var Li = Bt();
        zi.exports = kf;
        var Ii = 9, Ni = 32, Yr = 36, Af = 48, xf = 57, Ri = 92, wf = ["math", "math-inline"], Ui = "math-display";
        function kf(e) {
          let r = this.Parser, t = this.Compiler;
          Li.isRemarkParser(r) && Bf(r, e), Li.isRemarkCompiler(t) && qf(t, e);
        }
        function Bf(e, r) {
          let t = e.prototype, n = t.inlineMethods;
          u.locator = a, t.inlineTokenizers.math = u, n.splice(n.indexOf("text"), 0, "math");
          function a(i, o) {
            return i.indexOf("$", o);
          }
          function u(i, o, s) {
            let l = o.length, c = false, f = false, D = 0, h, p, d, m, F, y, E;
            if (o.charCodeAt(D) === Ri && (f = true, D++), o.charCodeAt(D) === Yr) {
              if (D++, f) return s ? true : i(o.slice(0, D))({ type: "text", value: "$" });
              if (o.charCodeAt(D) === Yr && (c = true, D++), d = o.charCodeAt(D), !(d === Ni || d === Ii)) {
                for (m = D; D < l; ) {
                  if (p = d, d = o.charCodeAt(D + 1), p === Yr) {
                    if (h = o.charCodeAt(D - 1), h !== Ni && h !== Ii && (d !== d || d < Af || d > xf) && (!c || d === Yr)) {
                      F = D - 1, D++, c && D++, y = D;
                      break;
                    }
                  } else p === Ri && (D++, d = o.charCodeAt(D + 1));
                  D++;
                }
                if (y !== void 0) return s ? true : (E = o.slice(m, F + 1), i(o.slice(0, y))({ type: "inlineMath", value: E, data: { hName: "span", hProperties: { className: wf.concat(c && r.inlineMathDouble ? [Ui] : []) }, hChildren: [{ type: "text", value: E }] } }));
              }
            }
          }
        }
        function qf(e) {
          let r = e.prototype;
          r.visitors.inlineMath = t;
          function t(n) {
            let a = "$";
            return (n.data && n.data.hProperties && n.data.hProperties.className || []).includes(Ui) && (a = "$$"), a + n.value + a;
          }
        }
      });
      var $i = C((lv, ji) => {
        var Yi = Bt();
        ji.exports = Of;
        var Gi = 10, Dr = 32, qt = 36, Vi = `
`, Tf = "$", _f = 2, Sf = ["math", "math-display"];
        function Of() {
          let e = this.Parser, r = this.Compiler;
          Yi.isRemarkParser(e) && Pf(e), Yi.isRemarkCompiler(r) && Lf(r);
        }
        function Pf(e) {
          let r = e.prototype, t = r.blockMethods, n = r.interruptParagraph, a = r.interruptList, u = r.interruptBlockquote;
          r.blockTokenizers.math = i, t.splice(t.indexOf("fencedCode") + 1, 0, "math"), n.splice(n.indexOf("fencedCode") + 1, 0, ["math"]), a.splice(a.indexOf("fencedCode") + 1, 0, ["math"]), u.splice(u.indexOf("fencedCode") + 1, 0, ["math"]);
          function i(o, s, l) {
            var c = s.length, f = 0;
            let D, h, p, d, m, F, y, E, B, b, g;
            for (; f < c && s.charCodeAt(f) === Dr; ) f++;
            for (m = f; f < c && s.charCodeAt(f) === qt; ) f++;
            if (F = f - m, !(F < _f)) {
              for (; f < c && s.charCodeAt(f) === Dr; ) f++;
              for (y = f; f < c; ) {
                if (D = s.charCodeAt(f), D === qt) return;
                if (D === Gi) break;
                f++;
              }
              if (s.charCodeAt(f) === Gi) {
                if (l) return true;
                for (h = [], y !== f && h.push(s.slice(y, f)), f++, p = s.indexOf(Vi, f + 1), p = p === -1 ? c : p; f < c; ) {
                  for (E = false, b = f, g = p, d = p, B = 0; d > b && s.charCodeAt(d - 1) === Dr; ) d--;
                  for (; d > b && s.charCodeAt(d - 1) === qt; ) B++, d--;
                  for (F <= B && s.indexOf(Tf, b) === d && (E = true, g = d); b <= g && b - f < m && s.charCodeAt(b) === Dr; ) b++;
                  if (E) for (; g > b && s.charCodeAt(g - 1) === Dr; ) g--;
                  if ((!E || b !== g) && h.push(s.slice(b, g)), E) break;
                  f = p + 1, p = s.indexOf(Vi, f + 1), p = p === -1 ? c : p;
                }
                return h = h.join(`
`), o(s.slice(0, p))({ type: "math", value: h, data: { hName: "div", hProperties: { className: Sf.concat() }, hChildren: [{ type: "text", value: h }] } });
              }
            }
          }
        }
        function Lf(e) {
          let r = e.prototype;
          r.visitors.math = t;
          function t(n) {
            return `$$
` + n.value + `
$$`;
          }
        }
      });
      var Wi = C((fv, Hi) => {
        var If = Mi(), Nf = $i();
        Hi.exports = Rf;
        function Rf(e) {
          var r = e || {};
          Nf.call(this, r), If.call(this, r);
        }
      });
      var Ie = C((Dv, Ki) => {
        Ki.exports = zf;
        var Uf = Object.prototype.hasOwnProperty;
        function zf() {
          for (var e = {}, r = 0; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Uf.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }
      });
      var Ji = C((pv, Tt) => {
        typeof Object.create == "function" ? Tt.exports = function(r, t) {
          t && (r.super_ = t, r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: false, writable: true, configurable: true } }));
        } : Tt.exports = function(r, t) {
          if (t) {
            r.super_ = t;
            var n = function() {
            };
            n.prototype = t.prototype, r.prototype = new n(), r.prototype.constructor = r;
          }
        };
      });
      var Zi = C((dv, Qi) => {
        "use strict";
        var Mf = Ie(), Xi = Ji();
        Qi.exports = Yf;
        function Yf(e) {
          var r, t, n;
          Xi(u, e), Xi(a, u), r = u.prototype;
          for (t in r) n = r[t], n && typeof n == "object" && (r[t] = "concat" in n ? n.concat() : Mf(n));
          return u;
          function a(i) {
            return e.apply(this, i);
          }
          function u() {
            return this instanceof u ? e.apply(this, arguments) : new a(arguments);
          }
        }
      });
      var ru = C((hv, eu) => {
        "use strict";
        eu.exports = Gf;
        function Gf(e, r, t) {
          return n;
          function n() {
            var a = t || this, u = a[e];
            return a[e] = !r, i;
            function i() {
              a[e] = u;
            }
          }
        }
      });
      var nu = C((mv, tu) => {
        "use strict";
        tu.exports = Vf;
        function Vf(e) {
          for (var r = String(e), t = [], n = /\r?\n|\r/g; n.exec(r); ) t.push(n.lastIndex);
          return t.push(r.length + 1), { toPoint: a, toPosition: a, toOffset: u };
          function a(i) {
            var o = -1;
            if (i > -1 && i < t[t.length - 1]) {
              for (; ++o < t.length; ) if (t[o] > i) return { line: o + 1, column: i - (t[o - 1] || 0) + 1, offset: i };
            }
            return {};
          }
          function u(i) {
            var o = i && i.line, s = i && i.column, l;
            return !isNaN(o) && !isNaN(s) && o - 1 in t && (l = (t[o - 2] || 0) + s - 1 || 0), l > -1 && l < t[t.length - 1] ? l : -1;
          }
        }
      });
      var uu = C((Fv, iu) => {
        "use strict";
        iu.exports = jf;
        var _t = "\\";
        function jf(e, r) {
          return t;
          function t(n) {
            for (var a = 0, u = n.indexOf(_t), i = e[r], o = [], s; u !== -1; ) o.push(n.slice(a, u)), a = u + 1, s = n.charAt(a), (!s || i.indexOf(s) === -1) && o.push(_t), u = n.indexOf(_t, a + 1);
            return o.push(n.slice(a)), o.join("");
          }
        }
      });
      var au = C((gv, $f) => {
        $f.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
      });
      var ou = C((vv, Hf) => {
        Hf.exports = { "0": "�", "128": "€", "130": "‚", "131": "ƒ", "132": "„", "133": "…", "134": "†", "135": "‡", "136": "ˆ", "137": "‰", "138": "Š", "139": "‹", "140": "Œ", "142": "Ž", "145": "‘", "146": "’", "147": "“", "148": "”", "149": "•", "150": "–", "151": "—", "152": "˜", "153": "™", "154": "š", "155": "›", "156": "œ", "158": "ž", "159": "Ÿ" };
      });
      var Ne = C((Ev, su) => {
        "use strict";
        su.exports = Wf;
        function Wf(e) {
          var r = typeof e == "string" ? e.charCodeAt(0) : e;
          return r >= 48 && r <= 57;
        }
      });
      var lu = C((Cv, cu) => {
        "use strict";
        cu.exports = Kf;
        function Kf(e) {
          var r = typeof e == "string" ? e.charCodeAt(0) : e;
          return r >= 97 && r <= 102 || r >= 65 && r <= 70 || r >= 48 && r <= 57;
        }
      });
      var Ve = C((bv, fu) => {
        "use strict";
        fu.exports = Jf;
        function Jf(e) {
          var r = typeof e == "string" ? e.charCodeAt(0) : e;
          return r >= 97 && r <= 122 || r >= 65 && r <= 90;
        }
      });
      var pu = C((yv, Du) => {
        "use strict";
        var Xf = Ve(), Qf = Ne();
        Du.exports = Zf;
        function Zf(e) {
          return Xf(e) || Qf(e);
        }
      });
      var du = C((Av, eD) => {
        eD.exports = { AEli: "Æ", AElig: "Æ", AM: "&", AMP: "&", Aacut: "Á", Aacute: "Á", Abreve: "Ă", Acir: "Â", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrav: "À", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Arin: "Å", Aring: "Å", Ascr: "𝒜", Assign: "≔", Atild: "Ã", Atilde: "Ã", Aum: "Ä", Auml: "Ä", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COP: "©", COPY: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedi: "Ç", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", CenterDot: "·", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "¨", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ET: "Ð", ETH: "Ð", Eacut: "É", Eacute: "É", Ecaron: "Ě", Ecir: "Ê", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrav: "È", Egrave: "È", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Eum: "Ë", Euml: "Ë", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", G: ">", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacut: "Í", Iacute: "Í", Icir: "Î", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrav: "Ì", Igrave: "Ì", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Ium: "Ï", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", L: "<", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntild: "Ñ", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacut: "Ó", Oacute: "Ó", Ocir: "Ô", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograv: "Ò", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslas: "Ø", Oslash: "Ø", Otild: "Õ", Otilde: "Õ", Otimes: "⨷", Oum: "Ö", Ouml: "Ö", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUO: '"', QUOT: '"', Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", RE: "®", REG: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THOR: "Þ", THORN: "Þ", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacut: "Ú", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucir: "Û", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrav: "Ù", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uum: "Ü", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacut: "Ý", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacut: "á", aacute: "á", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acir: "â", acirc: "â", acut: "´", acute: "´", acy: "а", aeli: "æ", aelig: "æ", af: "⁡", afr: "𝔞", agrav: "à", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", am: "&", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", arin: "å", aring: "å", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atild: "ã", atilde: "ã", aum: "ä", auml: "ä", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvba: "¦", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedi: "ç", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedi: "¸", cedil: "¸", cemptyv: "⦲", cen: "¢", cent: "¢", centerdot: "·", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "®", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", cop: "©", copy: "©", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curre: "¤", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", de: "°", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", digamma: "ϝ", disin: "⋲", div: "÷", divid: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacut: "é", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "ê", ecirc: "ê", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrav: "è", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", et: "ð", eth: "ð", eum: "ë", euml: "ë", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac1: "¼", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac3: "¾", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", g: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacut: "í", iacute: "í", ic: "⁣", icir: "î", icirc: "î", icy: "и", iecy: "е", iexc: "¡", iexcl: "¡", iff: "⇔", ifr: "𝔦", igrav: "ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iques: "¿", iquest: "¿", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", ium: "ï", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laqu: "«", laquo: "«", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", l: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", mac: "¯", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micr: "µ", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middo: "·", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbs: " ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", no: "¬", not: "¬", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntild: "ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacut: "ó", oacute: "ó", oast: "⊛", ocir: "ô", ocirc: "ô", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograv: "ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "º", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslas: "ø", oslash: "ø", osol: "⊘", otild: "õ", otilde: "õ", otimes: "⊗", otimesas: "⨶", oum: "ö", ouml: "ö", ovbar: "⌽", par: "¶", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusm: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", pointint: "⨕", popf: "𝕡", poun: "£", pound: "£", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quo: '"', quot: '"', rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raqu: "»", raquo: "»", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", re: "®", reg: "®", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sec: "§", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", sh: "­", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szli: "ß", szlig: "ß", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thor: "þ", thorn: "þ", tilde: "˜", time: "×", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacut: "ú", uacute: "ú", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucir: "û", ucirc: "û", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrav: "ù", ugrave: "ù", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", um: "¨", uml: "¨", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uum: "ü", uuml: "ü", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacut: "ý", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", ye: "¥", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yum: "ÿ", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
      });
      var Fu = C((xv, mu) => {
        "use strict";
        var hu = du();
        mu.exports = tD;
        var rD = {}.hasOwnProperty;
        function tD(e) {
          return rD.call(hu, e) ? hu[e] : false;
        }
      });
      var pr = C((wv, Tu) => {
        "use strict";
        var gu = au(), vu = ou(), nD = Ne(), iD = lu(), yu = pu(), uD = Fu();
        Tu.exports = gD;
        var aD = {}.hasOwnProperty, je = String.fromCharCode, oD = Function.prototype, Eu = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: false, nonTerminated: true }, sD = 9, Cu = 10, cD = 12, lD = 32, bu = 38, fD = 59, DD = 60, pD = 61, dD = 35, hD = 88, mD = 120, FD = 65533, $e = "named", Ot = "hexadecimal", Pt = "decimal", Lt = {};
        Lt[Ot] = 16;
        Lt[Pt] = 10;
        var Gr = {};
        Gr[$e] = yu;
        Gr[Pt] = nD;
        Gr[Ot] = iD;
        var Au = 1, xu = 2, wu = 3, ku = 4, Bu = 5, St = 6, qu = 7, Ae = {};
        Ae[Au] = "Named character references must be terminated by a semicolon";
        Ae[xu] = "Numeric character references must be terminated by a semicolon";
        Ae[wu] = "Named character references cannot be empty";
        Ae[ku] = "Numeric character references cannot be empty";
        Ae[Bu] = "Named character references must be known";
        Ae[St] = "Numeric character references cannot be disallowed";
        Ae[qu] = "Numeric character references cannot be outside the permissible Unicode range";
        function gD(e, r) {
          var t = {}, n, a;
          r || (r = {});
          for (a in Eu) n = r[a], t[a] = n ?? Eu[a];
          return (t.position.indent || t.position.start) && (t.indent = t.position.indent || [], t.position = t.position.start), vD(e, t);
        }
        function vD(e, r) {
          var t = r.additional, n = r.nonTerminated, a = r.text, u = r.reference, i = r.warning, o = r.textContext, s = r.referenceContext, l = r.warningContext, c = r.position, f = r.indent || [], D = e.length, h = 0, p = -1, d = c.column || 1, m = c.line || 1, F = "", y = [], E, B, b, g, A, x, v, w, k, q, T, R, O, S, _, P, ke, j, I;
          for (typeof t == "string" && (t = t.charCodeAt(0)), P = Z(), w = i ? Q : oD, h--, D++; ++h < D; ) if (A === Cu && (d = f[p] || 1), A = e.charCodeAt(h), A === bu) {
            if (v = e.charCodeAt(h + 1), v === sD || v === Cu || v === cD || v === lD || v === bu || v === DD || v !== v || t && v === t) {
              F += je(A), d++;
              continue;
            }
            for (O = h + 1, R = O, I = O, v === dD ? (I = ++R, v = e.charCodeAt(I), v === hD || v === mD ? (S = Ot, I = ++R) : S = Pt) : S = $e, E = "", T = "", g = "", _ = Gr[S], I--; ++I < D && (v = e.charCodeAt(I), !!_(v)); ) g += je(v), S === $e && aD.call(gu, g) && (E = g, T = gu[g]);
            b = e.charCodeAt(I) === fD, b && (I++, B = S === $e ? uD(g) : false, B && (E = g, T = B)), j = 1 + I - O, !b && !n || (g ? S === $e ? (b && !T ? w(Bu, 1) : (E !== g && (I = R + E.length, j = 1 + I - R, b = false), b || (k = E ? Au : wu, r.attribute ? (v = e.charCodeAt(I), v === pD ? (w(k, j), T = null) : yu(v) ? T = null : w(k, j)) : w(k, j))), x = T) : (b || w(xu, j), x = parseInt(g, Lt[S]), ED(x) ? (w(qu, j), x = je(FD)) : x in vu ? (w(St, j), x = vu[x]) : (q = "", CD(x) && w(St, j), x > 65535 && (x -= 65536, q += je(x >>> 10 | 55296), x = 56320 | x & 1023), x = q + je(x))) : S !== $e && w(ku, j)), x ? (me(), P = Z(), h = I - 1, d += I - O + 1, y.push(x), ke = Z(), ke.offset++, u && u.call(s, x, { start: P, end: ke }, e.slice(O - 1, I)), P = ke) : (g = e.slice(O - 1, I), F += g, d += g.length, h = I - 1);
          } else A === 10 && (m++, p++, d = 0), A === A ? (F += je(A), d++) : me();
          return y.join("");
          function Z() {
            return { line: m, column: d, offset: h + (c.offset || 0) };
          }
          function Q(Fe, z) {
            var ft = Z();
            ft.column += z, ft.offset += z, i.call(l, Ae[Fe], ft, Fe);
          }
          function me() {
            F && (y.push(F), a && a.call(o, F, { start: P, end: Z() }), F = "");
          }
        }
        function ED(e) {
          return e >= 55296 && e <= 57343 || e > 1114111;
        }
        function CD(e) {
          return e >= 1 && e <= 8 || e === 11 || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534;
        }
      });
      var Ou = C((kv, Su) => {
        "use strict";
        var bD = Ie(), _u = pr();
        Su.exports = yD;
        function yD(e) {
          return t.raw = n, t;
          function r(u) {
            for (var i = e.offset, o = u.line, s = []; ++o && o in i; ) s.push((i[o] || 0) + 1);
            return { start: u, indent: s };
          }
          function t(u, i, o) {
            _u(u, { position: r(i), warning: a, text: o, reference: o, textContext: e, referenceContext: e });
          }
          function n(u, i, o) {
            return _u(u, bD(o, { position: r(i), warning: a }));
          }
          function a(u, i, o) {
            o !== 3 && e.file.message(u, i);
          }
        }
      });
      var Iu = C((Bv, Lu) => {
        "use strict";
        Lu.exports = AD;
        function AD(e) {
          return r;
          function r(t, n) {
            var a = this, u = a.offset, i = [], o = a[e + "Methods"], s = a[e + "Tokenizers"], l = n.line, c = n.column, f, D, h, p, d, m;
            if (!t) return i;
            for (x.now = E, x.file = a.file, F(""); t; ) {
              for (f = -1, D = o.length, d = false; ++f < D && (p = o[f], h = s[p], !(h && (!h.onlyAtStart || a.atStart) && (!h.notInList || !a.inList) && (!h.notInBlock || !a.inBlock) && (!h.notInLink || !a.inLink) && (m = t.length, h.apply(a, [x, t]), d = m !== t.length, d))); ) ;
              d || a.file.fail(new Error("Infinite loop"), x.now());
            }
            return a.eof = E(), i;
            function F(v) {
              for (var w = -1, k = v.indexOf(`
`); k !== -1; ) l++, w = k, k = v.indexOf(`
`, k + 1);
              w === -1 ? c += v.length : c = v.length - w, l in u && (w !== -1 ? c += u[l] : c <= u[l] && (c = u[l] + 1));
            }
            function y() {
              var v = [], w = l + 1;
              return function() {
                for (var k = l + 1; w < k; ) v.push((u[w] || 0) + 1), w++;
                return v;
              };
            }
            function E() {
              var v = { line: l, column: c };
              return v.offset = a.toOffset(v), v;
            }
            function B(v) {
              this.start = v, this.end = E();
            }
            function b(v) {
              t.slice(0, v.length) !== v && a.file.fail(new Error("Incorrectly eaten value: please report this warning on https://git.io/vg5Ft"), E());
            }
            function g() {
              var v = E();
              return w;
              function w(k, q) {
                var T = k.position, R = T ? T.start : v, O = [], S = T && T.end.line, _ = v.line;
                if (k.position = new B(R), T && q && T.indent) {
                  if (O = T.indent, S < _) {
                    for (; ++S < _; ) O.push((u[S] || 0) + 1);
                    O.push(v.column);
                  }
                  q = O.concat(q);
                }
                return k.position.indent = q || [], k;
              }
            }
            function A(v, w) {
              var k = w ? w.children : i, q = k[k.length - 1], T;
              return q && v.type === q.type && (v.type === "text" || v.type === "blockquote") && Pu(q) && Pu(v) && (T = v.type === "text" ? xD : wD, v = T.call(a, q, v)), v !== q && k.push(v), a.atStart && i.length !== 0 && a.exitStart(), v;
            }
            function x(v) {
              var w = y(), k = g(), q = E();
              return b(v), T.reset = R, R.test = O, T.test = O, t = t.slice(v.length), F(v), w = w(), T;
              function T(S, _) {
                return k(A(k(S), _), w);
              }
              function R() {
                var S = T.apply(null, arguments);
                return l = q.line, c = q.column, t = v + t, S;
              }
              function O() {
                var S = k({});
                return l = q.line, c = q.column, t = v + t, S.position;
              }
            }
          }
        }
        function Pu(e) {
          var r, t;
          return e.type !== "text" || !e.position ? true : (r = e.position.start, t = e.position.end, r.line !== t.line || t.column - r.column === e.value.length);
        }
        function xD(e, r) {
          return e.value += r.value, e;
        }
        function wD(e, r) {
          return this.options.commonmark || this.options.gfm ? r : (e.children = e.children.concat(r.children), e);
        }
      });
      var Uu = C((qv, Ru) => {
        "use strict";
        Ru.exports = Vr;
        var It = ["\\", "`", "*", "{", "}", "[", "]", "(", ")", "#", "+", "-", ".", "!", "_", ">"], Nt = It.concat(["~", "|"]), Nu = Nt.concat([`
`, '"', "$", "%", "&", "'", ",", "/", ":", ";", "<", "=", "?", "@", "^"]);
        Vr.default = It;
        Vr.gfm = Nt;
        Vr.commonmark = Nu;
        function Vr(e) {
          var r = e || {};
          return r.commonmark ? Nu : r.gfm ? Nt : It;
        }
      });
      var Mu = C((Tv, zu) => {
        "use strict";
        zu.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
      });
      var Rt = C((_v, Yu) => {
        "use strict";
        Yu.exports = { position: true, gfm: true, commonmark: false, pedantic: false, blocks: Mu() };
      });
      var Vu = C((Sv, Gu) => {
        "use strict";
        var kD = Ie(), BD = Uu(), qD = Rt();
        Gu.exports = TD;
        function TD(e) {
          var r = this, t = r.options, n, a;
          if (e == null) e = {};
          else if (typeof e == "object") e = kD(e);
          else throw new Error("Invalid value `" + e + "` for setting `options`");
          for (n in qD) {
            if (a = e[n], a == null && (a = t[n]), n !== "blocks" && typeof a != "boolean" || n === "blocks" && typeof a != "object") throw new Error("Invalid value `" + a + "` for setting `options." + n + "`");
            e[n] = a;
          }
          return r.options = e, r.escape = BD(e), r;
        }
      });
      var Hu = C((Ov, $u) => {
        "use strict";
        $u.exports = ju;
        function ju(e) {
          if (e == null) return PD;
          if (typeof e == "string") return OD(e);
          if (typeof e == "object") return "length" in e ? SD(e) : _D(e);
          if (typeof e == "function") return e;
          throw new Error("Expected function, string, or object as test");
        }
        function _D(e) {
          return r;
          function r(t) {
            var n;
            for (n in e) if (t[n] !== e[n]) return false;
            return true;
          }
        }
        function SD(e) {
          for (var r = [], t = -1; ++t < e.length; ) r[t] = ju(e[t]);
          return n;
          function n() {
            for (var a = -1; ++a < r.length; ) if (r[a].apply(this, arguments)) return true;
            return false;
          }
        }
        function OD(e) {
          return r;
          function r(t) {
            return !!(t && t.type === e);
          }
        }
        function PD() {
          return true;
        }
      });
      var Ku = C((Pv, Wu) => {
        Wu.exports = LD;
        function LD(e) {
          return e;
        }
      });
      var Zu = C((Lv, Qu) => {
        "use strict";
        Qu.exports = jr;
        var ID = Hu(), ND = Ku(), Ju = true, Xu = "skip", Ut = false;
        jr.CONTINUE = Ju;
        jr.SKIP = Xu;
        jr.EXIT = Ut;
        function jr(e, r, t, n) {
          var a, u;
          typeof r == "function" && typeof t != "function" && (n = t, t = r, r = null), u = ID(r), a = n ? -1 : 1, i(e, null, [])();
          function i(o, s, l) {
            var c = typeof o == "object" && o !== null ? o : {}, f;
            return typeof c.type == "string" && (f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0, D.displayName = "node (" + ND(c.type + (f ? "<" + f + ">" : "")) + ")"), D;
            function D() {
              var h = l.concat(o), p = [], d, m;
              if ((!r || u(o, s, l[l.length - 1] || null)) && (p = RD(t(o, l)), p[0] === Ut)) return p;
              if (o.children && p[0] !== Xu) for (m = (n ? o.children.length : -1) + a; m > -1 && m < o.children.length; ) {
                if (d = i(o.children[m], m, h)(), d[0] === Ut) return d;
                m = typeof d[1] == "number" ? d[1] : m + a;
              }
              return p;
            }
          }
        }
        function RD(e) {
          return e !== null && typeof e == "object" && "length" in e ? e : typeof e == "number" ? [Ju, e] : [e];
        }
      });
      var ra = C((Iv, ea) => {
        "use strict";
        ea.exports = Hr;
        var $r = Zu(), UD = $r.CONTINUE, zD = $r.SKIP, MD = $r.EXIT;
        Hr.CONTINUE = UD;
        Hr.SKIP = zD;
        Hr.EXIT = MD;
        function Hr(e, r, t, n) {
          typeof r == "function" && typeof t != "function" && (n = t, t = r, r = null), $r(e, r, a, n);
          function a(u, i) {
            var o = i[i.length - 1], s = o ? o.children.indexOf(u) : null;
            return t(u, s, o);
          }
        }
      });
      var na = C((Nv, ta) => {
        "use strict";
        var YD = ra();
        ta.exports = GD;
        function GD(e, r) {
          return YD(e, r ? VD : jD), e;
        }
        function VD(e) {
          delete e.position;
        }
        function jD(e) {
          e.position = void 0;
        }
      });
      var aa = C((Rv, ua) => {
        "use strict";
        var ia = Ie(), $D = na();
        ua.exports = KD;
        var HD = `
`, WD = /\r\n|\r/g;
        function KD() {
          var e = this, r = String(e.file), t = { line: 1, column: 1, offset: 0 }, n = ia(t), a;
          return r = r.replace(WD, HD), r.charCodeAt(0) === 65279 && (r = r.slice(1), n.column++, n.offset++), a = { type: "root", children: e.tokenizeBlock(r, n), position: { start: t, end: e.eof || ia(t) } }, e.options.position || $D(a, true), a;
        }
      });
      var sa = C((Uv, oa) => {
        "use strict";
        var JD = /^[ \t]*(\n|$)/;
        oa.exports = XD;
        function XD(e, r, t) {
          for (var n, a = "", u = 0, i = r.length; u < i && (n = JD.exec(r.slice(u)), n != null); ) u += n[0].length, a += n[0];
          if (a !== "") {
            if (t) return true;
            e(a);
          }
        }
      });
      var Wr = C((zv, ca) => {
        "use strict";
        var pe = "", zt;
        ca.exports = QD;
        function QD(e, r) {
          if (typeof e != "string") throw new TypeError("expected a string");
          if (r === 1) return e;
          if (r === 2) return e + e;
          var t = e.length * r;
          if (zt !== e || typeof zt > "u") zt = e, pe = "";
          else if (pe.length >= t) return pe.substr(0, t);
          for (; t > pe.length && r > 1; ) r & 1 && (pe += e), r >>= 1, e += e;
          return pe += e, pe = pe.substr(0, t), pe;
        }
      });
      var Mt = C((Mv, la) => {
        "use strict";
        la.exports = ZD;
        function ZD(e) {
          return String(e).replace(/\n+$/, "");
        }
      });
      var pa = C((Yv, Da) => {
        "use strict";
        var ep = Wr(), rp = Mt();
        Da.exports = ip;
        var Yt = `
`, fa = "	", Gt = " ", tp = 4, np = ep(Gt, tp);
        function ip(e, r, t) {
          for (var n = -1, a = r.length, u = "", i = "", o = "", s = "", l, c, f; ++n < a; ) if (l = r.charAt(n), f) if (f = false, u += o, i += s, o = "", s = "", l === Yt) o = l, s = l;
          else for (u += l, i += l; ++n < a; ) {
            if (l = r.charAt(n), !l || l === Yt) {
              s = l, o = l;
              break;
            }
            u += l, i += l;
          }
          else if (l === Gt && r.charAt(n + 1) === l && r.charAt(n + 2) === l && r.charAt(n + 3) === l) o += np, n += 3, f = true;
          else if (l === fa) o += l, f = true;
          else {
            for (c = ""; l === fa || l === Gt; ) c += l, l = r.charAt(++n);
            if (l !== Yt) break;
            o += c + l, s += l;
          }
          if (i) return t ? true : e(u)({ type: "code", lang: null, meta: null, value: rp(i) });
        }
      });
      var ma = C((Gv, ha) => {
        "use strict";
        ha.exports = sp;
        var Kr = `
`, dr = "	", He = " ", up = "~", da = "`", ap = 3, op = 4;
        function sp(e, r, t) {
          var n = this, a = n.options.gfm, u = r.length + 1, i = 0, o = "", s, l, c, f, D, h, p, d, m, F, y, E, B;
          if (a) {
            for (; i < u && (c = r.charAt(i), !(c !== He && c !== dr)); ) o += c, i++;
            if (E = i, c = r.charAt(i), !(c !== up && c !== da)) {
              for (i++, l = c, s = 1, o += c; i < u && (c = r.charAt(i), c === l); ) o += c, s++, i++;
              if (!(s < ap)) {
                for (; i < u && (c = r.charAt(i), !(c !== He && c !== dr)); ) o += c, i++;
                for (f = "", p = ""; i < u && (c = r.charAt(i), !(c === Kr || l === da && c === l)); ) c === He || c === dr ? p += c : (f += p + c, p = ""), i++;
                if (c = r.charAt(i), !(c && c !== Kr)) {
                  if (t) return true;
                  B = e.now(), B.column += o.length, B.offset += o.length, o += f, f = n.decode.raw(n.unescape(f), B), p && (o += p), p = "", F = "", y = "", d = "", m = "";
                  for (var b = true; i < u; ) {
                    if (c = r.charAt(i), d += F, m += y, F = "", y = "", c !== Kr) {
                      d += c, y += c, i++;
                      continue;
                    }
                    for (b ? (o += c, b = false) : (F += c, y += c), p = "", i++; i < u && (c = r.charAt(i), c === He); ) p += c, i++;
                    if (F += p, y += p.slice(E), !(p.length >= op)) {
                      for (p = ""; i < u && (c = r.charAt(i), c === l); ) p += c, i++;
                      if (F += p, y += p, !(p.length < s)) {
                        for (p = ""; i < u && (c = r.charAt(i), !(c !== He && c !== dr)); ) F += c, y += c, i++;
                        if (!c || c === Kr) break;
                      }
                    }
                  }
                  for (o += d + F, i = -1, u = f.length; ++i < u; ) if (c = f.charAt(i), c === He || c === dr) D || (D = f.slice(0, i));
                  else if (D) {
                    h = f.slice(i);
                    break;
                  }
                  return e(o)({ type: "code", lang: D || f || null, meta: h || null, value: m });
                }
              }
            }
          }
        }
      });
      var Re = C((We, Fa) => {
        We = Fa.exports = cp;
        function cp(e) {
          return e.trim ? e.trim() : We.right(We.left(e));
        }
        We.left = function(e) {
          return e.trimLeft ? e.trimLeft() : e.replace(/^\s\s*/, "");
        };
        We.right = function(e) {
          if (e.trimRight) return e.trimRight();
          for (var r = /\s/, t = e.length; r.test(e.charAt(--t)); ) ;
          return e.slice(0, t + 1);
        };
      });
      var Jr = C((Vv, ga) => {
        "use strict";
        ga.exports = lp;
        function lp(e, r, t, n) {
          for (var a = e.length, u = -1, i, o; ++u < a; ) if (i = e[u], o = i[1] || {}, !(o.pedantic !== void 0 && o.pedantic !== t.options.pedantic) && !(o.commonmark !== void 0 && o.commonmark !== t.options.commonmark) && r[i[0]].apply(t, n)) return true;
          return false;
        }
      });
      var ba = C((jv, Ca) => {
        "use strict";
        var fp = Re(), Dp = Jr();
        Ca.exports = pp;
        var Vt = `
`, va = "	", jt = " ", Ea = ">";
        function pp(e, r, t) {
          for (var n = this, a = n.offset, u = n.blockTokenizers, i = n.interruptBlockquote, o = e.now(), s = o.line, l = r.length, c = [], f = [], D = [], h, p = 0, d, m, F, y, E, B, b, g; p < l && (d = r.charAt(p), !(d !== jt && d !== va)); ) p++;
          if (r.charAt(p) === Ea) {
            if (t) return true;
            for (p = 0; p < l; ) {
              for (F = r.indexOf(Vt, p), B = p, b = false, F === -1 && (F = l); p < l && (d = r.charAt(p), !(d !== jt && d !== va)); ) p++;
              if (r.charAt(p) === Ea ? (p++, b = true, r.charAt(p) === jt && p++) : p = B, y = r.slice(p, F), !b && !fp(y)) {
                p = B;
                break;
              }
              if (!b && (m = r.slice(p), Dp(i, u, n, [e, m, true]))) break;
              E = B === p ? y : r.slice(B, F), D.push(p - B), c.push(E), f.push(y), p = F + 1;
            }
            for (p = -1, l = D.length, h = e(c.join(Vt)); ++p < l; ) a[s] = (a[s] || 0) + D[p], s++;
            return g = n.enterBlock(), f = n.tokenizeBlock(f.join(Vt), o), g(), h({ type: "blockquote", children: f });
          }
        }
      });
      var xa = C(($v, Aa) => {
        "use strict";
        Aa.exports = hp;
        var ya = `
`, hr = "	", mr = " ", Fr = "#", dp = 6;
        function hp(e, r, t) {
          for (var n = this, a = n.options.pedantic, u = r.length + 1, i = -1, o = e.now(), s = "", l = "", c, f, D; ++i < u; ) {
            if (c = r.charAt(i), c !== mr && c !== hr) {
              i--;
              break;
            }
            s += c;
          }
          for (D = 0; ++i <= u; ) {
            if (c = r.charAt(i), c !== Fr) {
              i--;
              break;
            }
            s += c, D++;
          }
          if (!(D > dp) && !(!D || !a && r.charAt(i + 1) === Fr)) {
            for (u = r.length + 1, f = ""; ++i < u; ) {
              if (c = r.charAt(i), c !== mr && c !== hr) {
                i--;
                break;
              }
              f += c;
            }
            if (!(!a && f.length === 0 && c && c !== ya)) {
              if (t) return true;
              for (s += f, f = "", l = ""; ++i < u && (c = r.charAt(i), !(!c || c === ya)); ) {
                if (c !== mr && c !== hr && c !== Fr) {
                  l += f + c, f = "";
                  continue;
                }
                for (; c === mr || c === hr; ) f += c, c = r.charAt(++i);
                if (!a && l && !f && c === Fr) {
                  l += c;
                  continue;
                }
                for (; c === Fr; ) f += c, c = r.charAt(++i);
                for (; c === mr || c === hr; ) f += c, c = r.charAt(++i);
                i--;
              }
              return o.column += s.length, o.offset += s.length, s += l + f, e(s)({ type: "heading", depth: D, children: n.tokenizeInline(l, o) });
            }
          }
        }
      });
      var Ba = C((Hv, ka) => {
        "use strict";
        ka.exports = bp;
        var mp = "	", Fp = `
`, wa = " ", gp = "*", vp = "-", Ep = "_", Cp = 3;
        function bp(e, r, t) {
          for (var n = -1, a = r.length + 1, u = "", i, o, s, l; ++n < a && (i = r.charAt(n), !(i !== mp && i !== wa)); ) u += i;
          if (!(i !== gp && i !== vp && i !== Ep)) for (o = i, u += i, s = 1, l = ""; ++n < a; ) if (i = r.charAt(n), i === o) s++, u += l + o, l = "";
          else if (i === wa) l += i;
          else return s >= Cp && (!i || i === Fp) ? (u += l, t ? true : e(u)({ type: "thematicBreak" })) : void 0;
        }
      });
      var $t = C((Wv, Ta) => {
        "use strict";
        Ta.exports = wp;
        var qa = "	", yp = " ", Ap = 1, xp = 4;
        function wp(e) {
          for (var r = 0, t = 0, n = e.charAt(r), a = {}, u, i = 0; n === qa || n === yp; ) {
            for (u = n === qa ? xp : Ap, t += u, u > 1 && (t = Math.floor(t / u) * u); i < t; ) a[++i] = r;
            n = e.charAt(++r);
          }
          return { indent: t, stops: a };
        }
      });
      var Oa = C((Kv, Sa) => {
        "use strict";
        var kp = Re(), Bp = Wr(), qp = $t();
        Sa.exports = Sp;
        var _a = `
`, Tp = " ", _p = "!";
        function Sp(e, r) {
          var t = e.split(_a), n = t.length + 1, a = 1 / 0, u = [], i, o, s;
          for (t.unshift(Bp(Tp, r) + _p); n--; ) if (o = qp(t[n]), u[n] = o.stops, kp(t[n]).length !== 0) if (o.indent) o.indent > 0 && o.indent < a && (a = o.indent);
          else {
            a = 1 / 0;
            break;
          }
          if (a !== 1 / 0) for (n = t.length; n--; ) {
            for (s = u[n], i = a; i && !(i in s); ) i--;
            t[n] = t[n].slice(s[i] + 1);
          }
          return t.shift(), t.join(_a);
        }
      });
      var Ua = C((Jv, Ra) => {
        "use strict";
        var Op = Re(), Pp = Wr(), Pa = Ne(), Lp = $t(), Ip = Oa(), Np = Jr();
        Ra.exports = jp;
        var Ht = "*", Rp = "_", La = "+", Wt = "-", Ia = ".", de = " ", ie = `
`, Xr = "	", Na = ")", Up = "x", xe = 4, zp = /\n\n(?!\s*$)/, Mp = /^\[([ X\tx])][ \t]/, Yp = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/, Gp = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/, Vp = /^( {1,4}|\t)?/gm;
        function jp(e, r, t) {
          for (var n = this, a = n.options.commonmark, u = n.options.pedantic, i = n.blockTokenizers, o = n.interruptList, s = 0, l = r.length, c = null, f, D, h, p, d, m, F, y, E, B, b, g, A, x, v, w, k, q, T, R = false, O, S, _, P; s < l && (p = r.charAt(s), !(p !== Xr && p !== de)); ) s++;
          if (p = r.charAt(s), p === Ht || p === La || p === Wt) d = p, h = false;
          else {
            for (h = true, D = ""; s < l && (p = r.charAt(s), !!Pa(p)); ) D += p, s++;
            if (p = r.charAt(s), !D || !(p === Ia || a && p === Na) || t && D !== "1") return;
            c = parseInt(D, 10), d = p;
          }
          if (p = r.charAt(++s), !(p !== de && p !== Xr && (u || p !== ie && p !== ""))) {
            if (t) return true;
            for (s = 0, x = [], v = [], w = []; s < l; ) {
              for (m = r.indexOf(ie, s), F = s, y = false, P = false, m === -1 && (m = l), f = 0; s < l; ) {
                if (p = r.charAt(s), p === Xr) f += xe - f % xe;
                else if (p === de) f++;
                else break;
                s++;
              }
              if (k && f >= k.indent && (P = true), p = r.charAt(s), E = null, !P) {
                if (p === Ht || p === La || p === Wt) E = p, s++, f++;
                else {
                  for (D = ""; s < l && (p = r.charAt(s), !!Pa(p)); ) D += p, s++;
                  p = r.charAt(s), s++, D && (p === Ia || a && p === Na) && (E = p, f += D.length + 1);
                }
                if (E) if (p = r.charAt(s), p === Xr) f += xe - f % xe, s++;
                else if (p === de) {
                  for (_ = s + xe; s < _ && r.charAt(s) === de; ) s++, f++;
                  s === _ && r.charAt(s) === de && (s -= xe - 1, f -= xe - 1);
                } else p !== ie && p !== "" && (E = null);
              }
              if (E) {
                if (!u && d !== E) break;
                y = true;
              } else !a && !P && r.charAt(F) === de ? P = true : a && k && (P = f >= k.indent || f > xe), y = false, s = F;
              if (b = r.slice(F, m), B = F === s ? b : r.slice(s, m), (E === Ht || E === Rp || E === Wt) && i.thematicBreak.call(n, e, b, true)) break;
              if (g = A, A = !y && !Op(B).length, P && k) k.value = k.value.concat(w, b), v = v.concat(w, b), w = [];
              else if (y) w.length !== 0 && (R = true, k.value.push(""), k.trail = w.concat()), k = { value: [b], indent: f, trail: [] }, x.push(k), v = v.concat(w, b), w = [];
              else if (A) {
                if (g && !a) break;
                w.push(b);
              } else {
                if (g || Np(o, i, n, [e, b, true])) break;
                k.value = k.value.concat(w, b), v = v.concat(w, b), w = [];
              }
              s = m + 1;
            }
            for (O = e(v.join(ie)).reset({ type: "list", ordered: h, start: c, spread: R, children: [] }), q = n.enterList(), T = n.enterBlock(), s = -1, l = x.length; ++s < l; ) k = x[s].value.join(ie), S = e.now(), e(k)($p(n, k, S), O), k = x[s].trail.join(ie), s !== l - 1 && (k += ie), e(k);
            return q(), T(), O;
          }
        }
        function $p(e, r, t) {
          var n = e.offset, a = e.options.pedantic ? Hp : Wp, u = null, i, o;
          return r = a.apply(null, arguments), e.options.gfm && (i = r.match(Mp), i && (o = i[0].length, u = i[1].toLowerCase() === Up, n[t.line] += o, r = r.slice(o))), { type: "listItem", spread: zp.test(r), checked: u, children: e.tokenizeBlock(r, t) };
        }
        function Hp(e, r, t) {
          var n = e.offset, a = t.line;
          return r = r.replace(Gp, u), a = t.line, r.replace(Vp, u);
          function u(i) {
            return n[a] = (n[a] || 0) + i.length, a++, "";
          }
        }
        function Wp(e, r, t) {
          var n = e.offset, a = t.line, u, i, o, s, l, c, f;
          for (r = r.replace(Yp, D), s = r.split(ie), l = Ip(r, Lp(u).indent).split(ie), l[0] = o, n[a] = (n[a] || 0) + i.length, a++, c = 0, f = s.length; ++c < f; ) n[a] = (n[a] || 0) + s[c].length - l[c].length, a++;
          return l.join(ie);
          function D(h, p, d, m, F) {
            return i = p + d + m, o = F, Number(d) < 10 && i.length % 2 === 1 && (d = de + d), u = p + Pp(de, d.length) + m, u + o;
          }
        }
      });
      var Ga = C((Xv, Ya) => {
        "use strict";
        Ya.exports = ed;
        var Kt = `
`, Kp = "	", za = " ", Ma = "=", Jp = "-", Xp = 3, Qp = 1, Zp = 2;
        function ed(e, r, t) {
          for (var n = this, a = e.now(), u = r.length, i = -1, o = "", s, l, c, f, D; ++i < u; ) {
            if (c = r.charAt(i), c !== za || i >= Xp) {
              i--;
              break;
            }
            o += c;
          }
          for (s = "", l = ""; ++i < u; ) {
            if (c = r.charAt(i), c === Kt) {
              i--;
              break;
            }
            c === za || c === Kp ? l += c : (s += l + c, l = "");
          }
          if (a.column += o.length, a.offset += o.length, o += s + l, c = r.charAt(++i), f = r.charAt(++i), !(c !== Kt || f !== Ma && f !== Jp)) {
            for (o += c, l = f, D = f === Ma ? Qp : Zp; ++i < u; ) {
              if (c = r.charAt(i), c !== f) {
                if (c !== Kt) return;
                i--;
                break;
              }
              l += c;
            }
            return t ? true : e(o + l)({ type: "heading", depth: D, children: n.tokenizeInline(s, a) });
          }
        }
      });
      var Xt = C((Jt) => {
        "use strict";
        var rd = "[a-zA-Z_:][a-zA-Z0-9:._-]*", td = "[^\"'=<>`\\u0000-\\u0020]+", nd = "'[^']*'", id = '"[^"]*"', ud = "(?:" + td + "|" + nd + "|" + id + ")", ad = "(?:\\s+" + rd + "(?:\\s*=\\s*" + ud + ")?)", Va = "<[A-Za-z][A-Za-z0-9\\-]*" + ad + "*\\s*\\/?>", ja = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", od = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", sd = "<[?].*?[?]>", cd = "<![A-Za-z]+\\s+[^>]*>", ld = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
        Jt.openCloseTag = new RegExp("^(?:" + Va + "|" + ja + ")");
        Jt.tag = new RegExp("^(?:" + Va + "|" + ja + "|" + od + "|" + sd + "|" + cd + "|" + ld + ")");
      });
      var Ka = C((Zv, Wa) => {
        "use strict";
        var fd = Xt().openCloseTag;
        Wa.exports = wd;
        var Dd = "	", pd = " ", $a = `
`, dd = "<", hd = /^<(script|pre|style)(?=(\s|>|$))/i, md = /<\/(script|pre|style)>/i, Fd = /^<!--/, gd = /-->/, vd = /^<\?/, Ed = /\?>/, Cd = /^<![A-Za-z]/, bd = />/, yd = /^<!\[CDATA\[/, Ad = /]]>/, Ha = /^$/, xd = new RegExp(fd.source + "\\s*$");
        function wd(e, r, t) {
          for (var n = this, a = n.options.blocks.join("|"), u = new RegExp("^</?(" + a + ")(?=(\\s|/?>|$))", "i"), i = r.length, o = 0, s, l, c, f, D, h, p, d = [[hd, md, true], [Fd, gd, true], [vd, Ed, true], [Cd, bd, true], [yd, Ad, true], [u, Ha, true], [xd, Ha, false]]; o < i && (f = r.charAt(o), !(f !== Dd && f !== pd)); ) o++;
          if (r.charAt(o) === dd) {
            for (s = r.indexOf($a, o + 1), s = s === -1 ? i : s, l = r.slice(o, s), c = -1, D = d.length; ++c < D; ) if (d[c][0].test(l)) {
              h = d[c];
              break;
            }
            if (h) {
              if (t) return h[2];
              if (o = s, !h[1].test(l)) for (; o < i; ) {
                if (s = r.indexOf($a, o + 1), s = s === -1 ? i : s, l = r.slice(o + 1, s), h[1].test(l)) {
                  l && (o = s);
                  break;
                }
                o = s;
              }
              return p = r.slice(0, o), e(p)({ type: "html", value: p });
            }
          }
        }
      });
      var ue = C((eE, Ja) => {
        "use strict";
        Ja.exports = qd;
        var kd = String.fromCharCode, Bd = /\s/;
        function qd(e) {
          return Bd.test(typeof e == "number" ? kd(e) : e.charAt(0));
        }
      });
      var Qt = C((rE, Xa) => {
        "use strict";
        var Td = wr();
        Xa.exports = _d;
        function _d(e) {
          return Td(e).toLowerCase();
        }
      });
      var io = C((tE, no) => {
        "use strict";
        var Sd = ue(), Od = Qt();
        no.exports = Nd;
        var Qa = '"', Za = "'", Pd = "\\", Ke = `
`, Qr = "	", Zr = " ", en = "[", gr = "]", Ld = "(", Id = ")", eo = ":", ro = "<", to = ">";
        function Nd(e, r, t) {
          for (var n = this, a = n.options.commonmark, u = 0, i = r.length, o = "", s, l, c, f, D, h, p, d; u < i && (f = r.charAt(u), !(f !== Zr && f !== Qr)); ) o += f, u++;
          if (f = r.charAt(u), f === en) {
            for (u++, o += f, c = ""; u < i && (f = r.charAt(u), f !== gr); ) f === Pd && (c += f, u++, f = r.charAt(u)), c += f, u++;
            if (!(!c || r.charAt(u) !== gr || r.charAt(u + 1) !== eo)) {
              for (h = c, o += c + gr + eo, u = o.length, c = ""; u < i && (f = r.charAt(u), !(f !== Qr && f !== Zr && f !== Ke)); ) o += f, u++;
              if (f = r.charAt(u), c = "", s = o, f === ro) {
                for (u++; u < i && (f = r.charAt(u), !!Zt(f)); ) c += f, u++;
                if (f = r.charAt(u), f === Zt.delimiter) o += ro + c + f, u++;
                else {
                  if (a) return;
                  u -= c.length + 1, c = "";
                }
              }
              if (!c) {
                for (; u < i && (f = r.charAt(u), !!Rd(f)); ) c += f, u++;
                o += c;
              }
              if (c) {
                for (p = c, c = ""; u < i && (f = r.charAt(u), !(f !== Qr && f !== Zr && f !== Ke)); ) c += f, u++;
                if (f = r.charAt(u), D = null, f === Qa ? D = Qa : f === Za ? D = Za : f === Ld && (D = Id), !D) c = "", u = o.length;
                else if (c) {
                  for (o += c + f, u = o.length, c = ""; u < i && (f = r.charAt(u), f !== D); ) {
                    if (f === Ke) {
                      if (u++, f = r.charAt(u), f === Ke || f === D) return;
                      c += Ke;
                    }
                    c += f, u++;
                  }
                  if (f = r.charAt(u), f !== D) return;
                  l = o, o += c + f, u++, d = c, c = "";
                } else return;
                for (; u < i && (f = r.charAt(u), !(f !== Qr && f !== Zr)); ) o += f, u++;
                if (f = r.charAt(u), !f || f === Ke) return t ? true : (s = e(s).test().end, p = n.decode.raw(n.unescape(p), s, { nonTerminated: false }), d && (l = e(l).test().end, d = n.decode.raw(n.unescape(d), l)), e(o)({ type: "definition", identifier: Od(h), label: h, title: d || null, url: p }));
              }
            }
          }
        }
        function Zt(e) {
          return e !== to && e !== en && e !== gr;
        }
        Zt.delimiter = to;
        function Rd(e) {
          return e !== en && e !== gr && !Sd(e);
        }
      });
      var oo = C((nE, ao) => {
        "use strict";
        var Ud = ue();
        ao.exports = Kd;
        var zd = "	", et = `
`, Md = " ", Yd = "-", Gd = ":", Vd = "\\", rn = "|", jd = 1, $d = 2, uo = "left", Hd = "center", Wd = "right";
        function Kd(e, r, t) {
          var n = this, a, u, i, o, s, l, c, f, D, h, p, d, m, F, y, E, B, b, g, A, x, v;
          if (n.options.gfm) {
            for (a = 0, E = 0, l = r.length + 1, c = []; a < l; ) {
              if (A = r.indexOf(et, a), x = r.indexOf(rn, a + 1), A === -1 && (A = r.length), x === -1 || x > A) {
                if (E < $d) return;
                break;
              }
              c.push(r.slice(a, A)), E++, a = A + 1;
            }
            for (o = c.join(et), u = c.splice(1, 1)[0] || [], a = 0, l = u.length, E--, i = false, p = []; a < l; ) {
              if (D = u.charAt(a), D === rn) {
                if (h = null, i === false) {
                  if (v === false) return;
                } else p.push(i), i = false;
                v = false;
              } else if (D === Yd) h = true, i = i || null;
              else if (D === Gd) i === uo ? i = Hd : h && i === null ? i = Wd : i = uo;
              else if (!Ud(D)) return;
              a++;
            }
            if (i !== false && p.push(i), !(p.length < jd)) {
              if (t) return true;
              for (y = -1, b = [], g = e(o).reset({ type: "table", align: p, children: b }); ++y < E; ) {
                for (B = c[y], s = { type: "tableRow", children: [] }, y && e(et), e(B).reset(s, g), l = B.length + 1, a = 0, f = "", d = "", m = true; a < l; ) {
                  if (D = B.charAt(a), D === zd || D === Md) {
                    d ? f += D : e(D), a++;
                    continue;
                  }
                  D === "" || D === rn ? m ? e(D) : ((d || D) && !m && (o = d, f.length > 1 && (D ? (o += f.slice(0, -1), f = f.charAt(f.length - 1)) : (o += f, f = "")), F = e.now(), e(o)({ type: "tableCell", children: n.tokenizeInline(d, F) }, s)), e(f + D), f = "", d = "") : (f && (d += f, f = ""), d += D, D === Vd && a !== l - 2 && (d += B.charAt(a + 1), a++)), m = false, a++;
                }
                y || e(et + u);
              }
              return g;
            }
          }
        }
      });
      var lo = C((iE, co) => {
        "use strict";
        var Jd = Re(), Xd = Mt(), Qd = Jr();
        co.exports = rh;
        var Zd = "	", vr = `
`, eh = " ", so = 4;
        function rh(e, r, t) {
          for (var n = this, a = n.options, u = a.commonmark, i = n.blockTokenizers, o = n.interruptParagraph, s = r.indexOf(vr), l = r.length, c, f, D, h, p; s < l; ) {
            if (s === -1) {
              s = l;
              break;
            }
            if (r.charAt(s + 1) === vr) break;
            if (u) {
              for (h = 0, c = s + 1; c < l; ) {
                if (D = r.charAt(c), D === Zd) {
                  h = so;
                  break;
                } else if (D === eh) h++;
                else break;
                c++;
              }
              if (h >= so && D !== vr) {
                s = r.indexOf(vr, s + 1);
                continue;
              }
            }
            if (f = r.slice(s + 1), Qd(o, i, n, [e, f, true])) break;
            if (c = s, s = r.indexOf(vr, s + 1), s !== -1 && Jd(r.slice(c, s)) === "") {
              s = c;
              break;
            }
          }
          return f = r.slice(0, s), t ? true : (p = e.now(), f = Xd(f), e(f)({ type: "paragraph", children: n.tokenizeInline(f, p) }));
        }
      });
      var Do = C((uE, fo) => {
        "use strict";
        fo.exports = th;
        function th(e, r) {
          return e.indexOf("\\", r);
        }
      });
      var Fo = C((aE, mo) => {
        "use strict";
        var nh = Do();
        mo.exports = ho;
        ho.locator = nh;
        var ih = `
`, po = "\\";
        function ho(e, r, t) {
          var n = this, a, u;
          if (r.charAt(0) === po && (a = r.charAt(1), n.escape.indexOf(a) !== -1)) return t ? true : (a === ih ? u = { type: "break" } : u = { type: "text", value: a }, e(po + a)(u));
        }
      });
      var tn = C((oE, go) => {
        "use strict";
        go.exports = uh;
        function uh(e, r) {
          return e.indexOf("<", r);
        }
      });
      var yo = C((sE, bo) => {
        "use strict";
        var vo = ue(), ah = pr(), oh = tn();
        bo.exports = on;
        on.locator = oh;
        on.notInLink = true;
        var Eo = "<", nn = ">", Co = "@", un = "/", an = "mailto:", rt = an.length;
        function on(e, r, t) {
          var n = this, a = "", u = r.length, i = 0, o = "", s = false, l = "", c, f, D, h, p;
          if (r.charAt(0) === Eo) {
            for (i++, a = Eo; i < u && (c = r.charAt(i), !(vo(c) || c === nn || c === Co || c === ":" && r.charAt(i + 1) === un)); ) o += c, i++;
            if (o) {
              if (l += o, o = "", c = r.charAt(i), l += c, i++, c === Co) s = true;
              else {
                if (c !== ":" || r.charAt(i + 1) !== un) return;
                l += un, i++;
              }
              for (; i < u && (c = r.charAt(i), !(vo(c) || c === nn)); ) o += c, i++;
              if (c = r.charAt(i), !(!o || c !== nn)) return t ? true : (l += o, D = l, a += l + c, f = e.now(), f.column++, f.offset++, s && (l.slice(0, rt).toLowerCase() === an ? (D = D.slice(rt), f.column += rt, f.offset += rt) : l = an + l), h = n.inlineTokenizers, n.inlineTokenizers = { text: h.text }, p = n.enterLink(), D = n.tokenizeInline(D, f), n.inlineTokenizers = h, p(), e(a)({ type: "link", title: null, url: ah(l, { nonTerminated: false }), children: D }));
            }
          }
        }
      });
      var xo = C((cE, Ao) => {
        "use strict";
        Ao.exports = sh;
        function sh(e, r) {
          var t = String(e), n = 0, a;
          if (typeof r != "string") throw new Error("Expected character");
          for (a = t.indexOf(r); a !== -1; ) n++, a = t.indexOf(r, a + r.length);
          return n;
        }
      });
      var Bo = C((lE, ko) => {
        "use strict";
        ko.exports = ch;
        var wo = ["www.", "http://", "https://"];
        function ch(e, r) {
          var t = -1, n, a, u;
          if (!this.options.gfm) return t;
          for (a = wo.length, n = -1; ++n < a; ) u = e.indexOf(wo[n], r), u !== -1 && (t === -1 || u < t) && (t = u);
          return t;
        }
      });
      var Oo = C((fE, So) => {
        "use strict";
        var qo = xo(), lh = pr(), fh = Ne(), sn = Ve(), Dh = ue(), ph = Bo();
        So.exports = ln;
        ln.locator = ph;
        ln.notInLink = true;
        var dh = 33, hh = 38, mh = 41, Fh = 42, gh = 44, vh = 45, cn = 46, Eh = 58, Ch = 59, bh = 63, yh = 60, To = 95, Ah = 126, xh = "(", _o = ")";
        function ln(e, r, t) {
          var n = this, a = n.options.gfm, u = n.inlineTokenizers, i = r.length, o = -1, s = false, l, c, f, D, h, p, d, m, F, y, E, B, b, g;
          if (a) {
            if (r.slice(0, 4) === "www.") s = true, D = 4;
            else if (r.slice(0, 7).toLowerCase() === "http://") D = 7;
            else if (r.slice(0, 8).toLowerCase() === "https://") D = 8;
            else return;
            for (o = D - 1, f = D, l = []; D < i; ) {
              if (d = r.charCodeAt(D), d === cn) {
                if (o === D - 1) break;
                l.push(D), o = D, D++;
                continue;
              }
              if (fh(d) || sn(d) || d === vh || d === To) {
                D++;
                continue;
              }
              break;
            }
            if (d === cn && (l.pop(), D--), l[0] !== void 0 && (c = l.length < 2 ? f : l[l.length - 2] + 1, r.slice(c, D).indexOf("_") === -1)) {
              if (t) return true;
              for (m = D, h = D; D < i && (d = r.charCodeAt(D), !(Dh(d) || d === yh)); ) D++, d === dh || d === Fh || d === gh || d === cn || d === Eh || d === bh || d === To || d === Ah || (m = D);
              if (D = m, r.charCodeAt(D - 1) === mh) for (p = r.slice(h, D), F = qo(p, xh), y = qo(p, _o); y > F; ) D = h + p.lastIndexOf(_o), p = r.slice(h, D), y--;
              if (r.charCodeAt(D - 1) === Ch && (D--, sn(r.charCodeAt(D - 1)))) {
                for (m = D - 2; sn(r.charCodeAt(m)); ) m--;
                r.charCodeAt(m) === hh && (D = m);
              }
              return E = r.slice(0, D), b = lh(E, { nonTerminated: false }), s && (b = "http://" + b), g = n.enterLink(), n.inlineTokenizers = { text: u.text }, B = n.tokenizeInline(E, e.now()), n.inlineTokenizers = u, g(), e(E)({ type: "link", title: null, url: b, children: B });
            }
          }
        }
      });
      var No = C((DE, Io) => {
        "use strict";
        var wh = Ne(), kh = Ve(), Bh = 43, qh = 45, Th = 46, _h = 95;
        Io.exports = Lo;
        function Lo(e, r) {
          var t = this, n, a;
          if (!this.options.gfm || (n = e.indexOf("@", r), n === -1)) return -1;
          if (a = n, a === r || !Po(e.charCodeAt(a - 1))) return Lo.call(t, e, n + 1);
          for (; a > r && Po(e.charCodeAt(a - 1)); ) a--;
          return a;
        }
        function Po(e) {
          return wh(e) || kh(e) || e === Bh || e === qh || e === Th || e === _h;
        }
      });
      var Mo = C((pE, zo) => {
        "use strict";
        var Sh = pr(), Ro = Ne(), Uo = Ve(), Oh = No();
        zo.exports = pn;
        pn.locator = Oh;
        pn.notInLink = true;
        var Ph = 43, fn = 45, tt = 46, Lh = 64, Dn = 95;
        function pn(e, r, t) {
          var n = this, a = n.options.gfm, u = n.inlineTokenizers, i = 0, o = r.length, s = -1, l, c, f, D;
          if (a) {
            for (l = r.charCodeAt(i); Ro(l) || Uo(l) || l === Ph || l === fn || l === tt || l === Dn; ) l = r.charCodeAt(++i);
            if (i !== 0 && l === Lh) {
              for (i++; i < o; ) {
                if (l = r.charCodeAt(i), Ro(l) || Uo(l) || l === fn || l === tt || l === Dn) {
                  i++, s === -1 && l === tt && (s = i);
                  continue;
                }
                break;
              }
              if (!(s === -1 || s === i || l === fn || l === Dn)) return l === tt && i--, c = r.slice(0, i), t ? true : (D = n.enterLink(), n.inlineTokenizers = { text: u.text }, f = n.tokenizeInline(c, e.now()), n.inlineTokenizers = u, D(), e(c)({ type: "link", title: null, url: "mailto:" + Sh(c, { nonTerminated: false }), children: f }));
            }
          }
        }
      });
      var Vo = C((dE, Go) => {
        "use strict";
        var Ih = Ve(), Nh = tn(), Rh = Xt().tag;
        Go.exports = Yo;
        Yo.locator = Nh;
        var Uh = "<", zh = "?", Mh = "!", Yh = "/", Gh = /^<a /i, Vh = /^<\/a>/i;
        function Yo(e, r, t) {
          var n = this, a = r.length, u, i;
          if (!(r.charAt(0) !== Uh || a < 3) && (u = r.charAt(1), !(!Ih(u) && u !== zh && u !== Mh && u !== Yh) && (i = r.match(Rh), !!i))) return t ? true : (i = i[0], !n.inLink && Gh.test(i) ? n.inLink = true : n.inLink && Vh.test(i) && (n.inLink = false), e(i)({ type: "html", value: i }));
        }
      });
      var dn = C((hE, jo) => {
        "use strict";
        jo.exports = jh;
        function jh(e, r) {
          var t = e.indexOf("[", r), n = e.indexOf("![", r);
          return n === -1 || t < n ? t : n;
        }
      });
      var Qo = C((mE, Xo) => {
        "use strict";
        var Er = ue(), $h = dn();
        Xo.exports = Jo;
        Jo.locator = $h;
        var Hh = `
`, Wh = "!", $o = '"', Ho = "'", Je = "(", Cr = ")", hn = "<", mn = ">", Wo = "[", br = "\\", Kh = "]", Ko = "`";
        function Jo(e, r, t) {
          var n = this, a = "", u = 0, i = r.charAt(0), o = n.options.pedantic, s = n.options.commonmark, l = n.options.gfm, c, f, D, h, p, d, m, F, y, E, B, b, g, A, x, v, w, k;
          if (i === Wh && (F = true, a = i, i = r.charAt(++u)), i === Wo && !(!F && n.inLink)) {
            for (a += i, A = "", u++, B = r.length, v = e.now(), g = 0, v.column += u, v.offset += u; u < B; ) {
              if (i = r.charAt(u), d = i, i === Ko) {
                for (f = 1; r.charAt(u + 1) === Ko; ) d += i, u++, f++;
                D ? f >= D && (D = 0) : D = f;
              } else if (i === br) u++, d += r.charAt(u);
              else if ((!D || l) && i === Wo) g++;
              else if ((!D || l) && i === Kh) if (g) g--;
              else {
                if (r.charAt(u + 1) !== Je) return;
                d += Je, c = true, u++;
                break;
              }
              A += d, d = "", u++;
            }
            if (c) {
              for (y = A, a += A + d, u++; u < B && (i = r.charAt(u), !!Er(i)); ) a += i, u++;
              if (i = r.charAt(u), A = "", h = a, i === hn) {
                for (u++, h += hn; u < B && (i = r.charAt(u), i !== mn); ) {
                  if (s && i === Hh) return;
                  A += i, u++;
                }
                if (r.charAt(u) !== mn) return;
                a += hn + A + mn, x = A, u++;
              } else {
                for (i = null, d = ""; u < B && (i = r.charAt(u), !(d && (i === $o || i === Ho || s && i === Je))); ) {
                  if (Er(i)) {
                    if (!o) break;
                    d += i;
                  } else {
                    if (i === Je) g++;
                    else if (i === Cr) {
                      if (g === 0) break;
                      g--;
                    }
                    A += d, d = "", i === br && (A += br, i = r.charAt(++u)), A += i;
                  }
                  u++;
                }
                a += A, x = A, u = a.length;
              }
              for (A = ""; u < B && (i = r.charAt(u), !!Er(i)); ) A += i, u++;
              if (i = r.charAt(u), a += A, A && (i === $o || i === Ho || s && i === Je)) if (u++, a += i, A = "", E = i === Je ? Cr : i, p = a, s) {
                for (; u < B && (i = r.charAt(u), i !== E); ) i === br && (A += br, i = r.charAt(++u)), u++, A += i;
                if (i = r.charAt(u), i !== E) return;
                for (b = A, a += A + i, u++; u < B && (i = r.charAt(u), !!Er(i)); ) a += i, u++;
              } else for (d = ""; u < B; ) {
                if (i = r.charAt(u), i === E) m && (A += E + d, d = ""), m = true;
                else if (!m) A += i;
                else if (i === Cr) {
                  a += A + E + d, b = A;
                  break;
                } else Er(i) ? d += i : (A += E + d + i, d = "", m = false);
                u++;
              }
              if (r.charAt(u) === Cr) return t ? true : (a += Cr, x = n.decode.raw(n.unescape(x), e(h).test().end, { nonTerminated: false }), b && (p = e(p).test().end, b = n.decode.raw(n.unescape(b), p)), k = { type: F ? "image" : "link", title: b || null, url: x }, F ? k.alt = n.decode.raw(n.unescape(y), v) || null : (w = n.enterLink(), k.children = n.tokenizeInline(y, v), w()), e(a)(k));
            }
          }
        }
      });
      var rs = C((FE, es) => {
        "use strict";
        var Jh = ue(), Xh = dn(), Qh = Qt();
        es.exports = Zo;
        Zo.locator = Xh;
        var Fn = "link", Zh = "image", e0 = "shortcut", r0 = "collapsed", gn = "full", t0 = "!", nt = "[", it = "\\", ut = "]";
        function Zo(e, r, t) {
          var n = this, a = n.options.commonmark, u = r.charAt(0), i = 0, o = r.length, s = "", l = "", c = Fn, f = e0, D, h, p, d, m, F, y, E;
          if (u === t0 && (c = Zh, l = u, u = r.charAt(++i)), u === nt) {
            for (i++, l += u, F = "", E = 0; i < o; ) {
              if (u = r.charAt(i), u === nt) y = true, E++;
              else if (u === ut) {
                if (!E) break;
                E--;
              }
              u === it && (F += it, u = r.charAt(++i)), F += u, i++;
            }
            if (s = F, D = F, u = r.charAt(i), u === ut) {
              if (i++, s += u, F = "", !a) for (; i < o && (u = r.charAt(i), !!Jh(u)); ) F += u, i++;
              if (u = r.charAt(i), u === nt) {
                for (h = "", F += u, i++; i < o && (u = r.charAt(i), !(u === nt || u === ut)); ) u === it && (h += it, u = r.charAt(++i)), h += u, i++;
                u = r.charAt(i), u === ut ? (f = h ? gn : r0, F += h + u, i++) : h = "", s += F, F = "";
              } else {
                if (!D) return;
                h = D;
              }
              if (!(f !== gn && y)) return s = l + s, c === Fn && n.inLink ? null : t ? true : (p = e.now(), p.column += l.length, p.offset += l.length, h = f === gn ? h : D, d = { type: c + "Reference", identifier: Qh(h), label: h, referenceType: f }, c === Fn ? (m = n.enterLink(), d.children = n.tokenizeInline(D, p), m()) : d.alt = n.decode.raw(n.unescape(D), p) || null, e(s)(d));
            }
          }
        }
      });
      var ns = C((gE, ts) => {
        "use strict";
        ts.exports = n0;
        function n0(e, r) {
          var t = e.indexOf("**", r), n = e.indexOf("__", r);
          return n === -1 ? t : t === -1 || n < t ? n : t;
        }
      });
      var os = C((vE, as) => {
        "use strict";
        var i0 = Re(), is = ue(), u0 = ns();
        as.exports = us;
        us.locator = u0;
        var a0 = "\\", o0 = "*", s0 = "_";
        function us(e, r, t) {
          var n = this, a = 0, u = r.charAt(a), i, o, s, l, c, f, D;
          if (!(u !== o0 && u !== s0 || r.charAt(++a) !== u) && (o = n.options.pedantic, s = u, c = s + s, f = r.length, a++, l = "", u = "", !(o && is(r.charAt(a))))) for (; a < f; ) {
            if (D = u, u = r.charAt(a), u === s && r.charAt(a + 1) === s && (!o || !is(D)) && (u = r.charAt(a + 2), u !== s)) return i0(l) ? t ? true : (i = e.now(), i.column += 2, i.offset += 2, e(c + l + c)({ type: "strong", children: n.tokenizeInline(l, i) })) : void 0;
            !o && u === a0 && (l += u, u = r.charAt(++a)), l += u, a++;
          }
        }
      });
      var cs = C((EE, ss) => {
        "use strict";
        ss.exports = f0;
        var c0 = String.fromCharCode, l0 = /\w/;
        function f0(e) {
          return l0.test(typeof e == "number" ? c0(e) : e.charAt(0));
        }
      });
      var fs = C((CE, ls) => {
        "use strict";
        ls.exports = D0;
        function D0(e, r) {
          var t = e.indexOf("*", r), n = e.indexOf("_", r);
          return n === -1 ? t : t === -1 || n < t ? n : t;
        }
      });
      var ms = C((bE, hs) => {
        "use strict";
        var p0 = Re(), d0 = cs(), Ds = ue(), h0 = fs();
        hs.exports = ds;
        ds.locator = h0;
        var m0 = "*", ps = "_", F0 = "\\";
        function ds(e, r, t) {
          var n = this, a = 0, u = r.charAt(a), i, o, s, l, c, f, D;
          if (!(u !== m0 && u !== ps) && (o = n.options.pedantic, c = u, s = u, f = r.length, a++, l = "", u = "", !(o && Ds(r.charAt(a))))) for (; a < f; ) {
            if (D = u, u = r.charAt(a), u === s && (!o || !Ds(D))) {
              if (u = r.charAt(++a), u !== s) {
                if (!p0(l) || D === s) return;
                if (!o && s === ps && d0(u)) {
                  l += s;
                  continue;
                }
                return t ? true : (i = e.now(), i.column++, i.offset++, e(c + l + s)({ type: "emphasis", children: n.tokenizeInline(l, i) }));
              }
              l += s;
            }
            !o && u === F0 && (l += u, u = r.charAt(++a)), l += u, a++;
          }
        }
      });
      var gs = C((yE, Fs) => {
        "use strict";
        Fs.exports = g0;
        function g0(e, r) {
          return e.indexOf("~~", r);
        }
      });
      var ys = C((AE, bs) => {
        "use strict";
        var vs = ue(), v0 = gs();
        bs.exports = Cs;
        Cs.locator = v0;
        var at = "~", Es = "~~";
        function Cs(e, r, t) {
          var n = this, a = "", u = "", i = "", o = "", s, l, c;
          if (!(!n.options.gfm || r.charAt(0) !== at || r.charAt(1) !== at || vs(r.charAt(2)))) for (s = 1, l = r.length, c = e.now(), c.column += 2, c.offset += 2; ++s < l; ) {
            if (a = r.charAt(s), a === at && u === at && (!i || !vs(i))) return t ? true : e(Es + o + Es)({ type: "delete", children: n.tokenizeInline(o, c) });
            o += u, i = u, u = a;
          }
        }
      });
      var xs = C((xE, As) => {
        "use strict";
        As.exports = E0;
        function E0(e, r) {
          return e.indexOf("`", r);
        }
      });
      var Bs = C((wE, ks) => {
        "use strict";
        var C0 = xs();
        ks.exports = ws;
        ws.locator = C0;
        var vn = 10, En = 32, Cn = 96;
        function ws(e, r, t) {
          for (var n = r.length, a = 0, u, i, o, s, l, c; a < n && r.charCodeAt(a) === Cn; ) a++;
          if (!(a === 0 || a === n)) {
            for (u = a, l = r.charCodeAt(a); a < n; ) {
              if (s = l, l = r.charCodeAt(a + 1), s === Cn) {
                if (i === void 0 && (i = a), o = a + 1, l !== Cn && o - i === u) {
                  c = true;
                  break;
                }
              } else i !== void 0 && (i = void 0, o = void 0);
              a++;
            }
            if (c) {
              if (t) return true;
              if (a = u, n = i, s = r.charCodeAt(a), l = r.charCodeAt(n - 1), c = false, n - a > 2 && (s === En || s === vn) && (l === En || l === vn)) {
                for (a++, n--; a < n; ) {
                  if (s = r.charCodeAt(a), s !== En && s !== vn) {
                    c = true;
                    break;
                  }
                  a++;
                }
                c === true && (u++, i--);
              }
              return e(r.slice(0, o))({ type: "inlineCode", value: r.slice(u, i) });
            }
          }
        }
      });
      var Ts = C((kE, qs) => {
        "use strict";
        qs.exports = b0;
        function b0(e, r) {
          for (var t = e.indexOf(`
`, r); t > r && e.charAt(t - 1) === " "; ) t--;
          return t;
        }
      });
      var Os = C((BE, Ss) => {
        "use strict";
        var y0 = Ts();
        Ss.exports = _s;
        _s.locator = y0;
        var A0 = " ", x0 = `
`, w0 = 2;
        function _s(e, r, t) {
          for (var n = r.length, a = -1, u = "", i; ++a < n; ) {
            if (i = r.charAt(a), i === x0) return a < w0 ? void 0 : t ? true : (u += i, e(u)({ type: "break" }));
            if (i !== A0) return;
            u += i;
          }
        }
      });
      var Ls = C((qE, Ps) => {
        "use strict";
        Ps.exports = k0;
        function k0(e, r, t) {
          var n = this, a, u, i, o, s, l, c, f, D, h;
          if (t) return true;
          for (a = n.inlineMethods, o = a.length, u = n.inlineTokenizers, i = -1, D = r.length; ++i < o; ) f = a[i], !(f === "text" || !u[f]) && (c = u[f].locator, c || e.file.fail("Missing locator: `" + f + "`"), l = c.call(n, r, 1), l !== -1 && l < D && (D = l));
          s = r.slice(0, D), h = e.now(), n.decode(s, h, p);
          function p(d, m, F) {
            e(F || d)({ type: "text", value: d });
          }
        }
      });
      var Us = C((TE, Rs) => {
        "use strict";
        var B0 = Ie(), ot = ru(), q0 = nu(), T0 = uu(), _0 = Ou(), bn = Iu();
        Rs.exports = Is;
        function Is(e, r) {
          this.file = r, this.offset = {}, this.options = B0(this.options), this.setOptions({}), this.inList = false, this.inBlock = false, this.inLink = false, this.atStart = true, this.toOffset = q0(r).toOffset, this.unescape = T0(this, "escape"), this.decode = _0(this);
        }
        var U = Is.prototype;
        U.setOptions = Vu();
        U.parse = aa();
        U.options = Rt();
        U.exitStart = ot("atStart", true);
        U.enterList = ot("inList", false);
        U.enterLink = ot("inLink", false);
        U.enterBlock = ot("inBlock", false);
        U.interruptParagraph = [["thematicBreak"], ["list"], ["atxHeading"], ["fencedCode"], ["blockquote"], ["html"], ["setextHeading", { commonmark: false }], ["definition", { commonmark: false }]];
        U.interruptList = [["atxHeading", { pedantic: false }], ["fencedCode", { pedantic: false }], ["thematicBreak", { pedantic: false }], ["definition", { commonmark: false }]];
        U.interruptBlockquote = [["indentedCode", { commonmark: true }], ["fencedCode", { commonmark: true }], ["atxHeading", { commonmark: true }], ["setextHeading", { commonmark: true }], ["thematicBreak", { commonmark: true }], ["html", { commonmark: true }], ["list", { commonmark: true }], ["definition", { commonmark: false }]];
        U.blockTokenizers = { blankLine: sa(), indentedCode: pa(), fencedCode: ma(), blockquote: ba(), atxHeading: xa(), thematicBreak: Ba(), list: Ua(), setextHeading: Ga(), html: Ka(), definition: io(), table: oo(), paragraph: lo() };
        U.inlineTokenizers = { escape: Fo(), autoLink: yo(), url: Oo(), email: Mo(), html: Vo(), link: Qo(), reference: rs(), strong: os(), emphasis: ms(), deletion: ys(), code: Bs(), break: Os(), text: Ls() };
        U.blockMethods = Ns(U.blockTokenizers);
        U.inlineMethods = Ns(U.inlineTokenizers);
        U.tokenizeBlock = bn("block");
        U.tokenizeInline = bn("inline");
        U.tokenizeFactory = bn;
        function Ns(e) {
          var r = [], t;
          for (t in e) r.push(t);
          return r;
        }
      });
      var Gs = C((_E, Ys) => {
        "use strict";
        var S0 = Zi(), O0 = Ie(), zs = Us();
        Ys.exports = Ms;
        Ms.Parser = zs;
        function Ms(e) {
          var r = this.data("settings"), t = S0(zs);
          t.prototype.options = O0(t.prototype.options, r, e), this.Parser = t;
        }
      });
      var js = C((SE, Vs) => {
        "use strict";
        Vs.exports = P0;
        function P0(e) {
          if (e) throw e;
        }
      });
      var yn = C((OE, $s) => {
        $s.exports = function(r) {
          return r != null && r.constructor != null && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
        };
      });
      var rc = C((PE, ec) => {
        "use strict";
        var st = Object.prototype.hasOwnProperty, Zs = Object.prototype.toString, Hs = Object.defineProperty, Ws = Object.getOwnPropertyDescriptor, Ks = function(r) {
          return typeof Array.isArray == "function" ? Array.isArray(r) : Zs.call(r) === "[object Array]";
        }, Js = function(r) {
          if (!r || Zs.call(r) !== "[object Object]") return false;
          var t = st.call(r, "constructor"), n = r.constructor && r.constructor.prototype && st.call(r.constructor.prototype, "isPrototypeOf");
          if (r.constructor && !t && !n) return false;
          var a;
          for (a in r) ;
          return typeof a > "u" || st.call(r, a);
        }, Xs = function(r, t) {
          Hs && t.name === "__proto__" ? Hs(r, t.name, { enumerable: true, configurable: true, value: t.newValue, writable: true }) : r[t.name] = t.newValue;
        }, Qs = function(r, t) {
          if (t === "__proto__") if (st.call(r, t)) {
            if (Ws) return Ws(r, t).value;
          } else return;
          return r[t];
        };
        ec.exports = function e() {
          var r, t, n, a, u, i, o = arguments[0], s = 1, l = arguments.length, c = false;
          for (typeof o == "boolean" && (c = o, o = arguments[1] || {}, s = 2), (o == null || typeof o != "object" && typeof o != "function") && (o = {}); s < l; ++s) if (r = arguments[s], r != null) for (t in r) n = Qs(o, t), a = Qs(r, t), o !== a && (c && a && (Js(a) || (u = Ks(a))) ? (u ? (u = false, i = n && Ks(n) ? n : []) : i = n && Js(n) ? n : {}, Xs(o, { name: t, newValue: e(c, i, a) })) : typeof a < "u" && Xs(o, { name: t, newValue: a }));
          return o;
        };
      });
      var nc = C((LE, tc) => {
        "use strict";
        tc.exports = (e) => {
          if (Object.prototype.toString.call(e) !== "[object Object]") return false;
          let r = Object.getPrototypeOf(e);
          return r === null || r === Object.prototype;
        };
      });
      var uc = C((IE, ic) => {
        "use strict";
        var L0 = [].slice;
        ic.exports = I0;
        function I0(e, r) {
          var t;
          return n;
          function n() {
            var i = L0.call(arguments, 0), o = e.length > i.length, s;
            o && i.push(a);
            try {
              s = e.apply(null, i);
            } catch (l) {
              if (o && t) throw l;
              return a(l);
            }
            o || (s && typeof s.then == "function" ? s.then(u, a) : s instanceof Error ? a(s) : u(s));
          }
          function a() {
            t || (t = true, r.apply(null, arguments));
          }
          function u(i) {
            a(null, i);
          }
        }
      });
      var lc = C((NE, cc) => {
        "use strict";
        var oc = uc();
        cc.exports = sc;
        sc.wrap = oc;
        var ac = [].slice;
        function sc() {
          var e = [], r = {};
          return r.run = t, r.use = n, r;
          function t() {
            var a = -1, u = ac.call(arguments, 0, -1), i = arguments[arguments.length - 1];
            if (typeof i != "function") throw new Error("Expected function as last argument, not " + i);
            o.apply(null, [null].concat(u));
            function o(s) {
              var l = e[++a], c = ac.call(arguments, 0), f = c.slice(1), D = u.length, h = -1;
              if (s) {
                i(s);
                return;
              }
              for (; ++h < D; ) (f[h] === null || f[h] === void 0) && (f[h] = u[h]);
              u = f, l ? oc(l, o).apply(null, u) : i.apply(null, [null].concat(u));
            }
          }
          function n(a) {
            if (typeof a != "function") throw new Error("Expected `fn` to be a function, not " + a);
            return e.push(a), r;
          }
        }
      });
      var dc = C((RE, pc) => {
        "use strict";
        var Xe = {}.hasOwnProperty;
        pc.exports = N0;
        function N0(e) {
          return !e || typeof e != "object" ? "" : Xe.call(e, "position") || Xe.call(e, "type") ? fc(e.position) : Xe.call(e, "start") || Xe.call(e, "end") ? fc(e) : Xe.call(e, "line") || Xe.call(e, "column") ? An(e) : "";
        }
        function An(e) {
          return (!e || typeof e != "object") && (e = {}), Dc(e.line) + ":" + Dc(e.column);
        }
        function fc(e) {
          return (!e || typeof e != "object") && (e = {}), An(e.start) + "-" + An(e.end);
        }
        function Dc(e) {
          return e && typeof e == "number" ? e : 1;
        }
      });
      var Fc = C((UE, mc) => {
        "use strict";
        var R0 = dc();
        mc.exports = xn;
        function hc() {
        }
        hc.prototype = Error.prototype;
        xn.prototype = new hc();
        var we = xn.prototype;
        we.file = "";
        we.name = "";
        we.reason = "";
        we.message = "";
        we.stack = "";
        we.fatal = null;
        we.column = null;
        we.line = null;
        function xn(e, r, t) {
          var n, a, u;
          typeof r == "string" && (t = r, r = null), n = U0(t), a = R0(r) || "1:1", u = { start: { line: null, column: null }, end: { line: null, column: null } }, r && r.position && (r = r.position), r && (r.start ? (u = r, r = r.start) : u.start = r), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = a, this.reason = e, this.line = r ? r.line : null, this.column = r ? r.column : null, this.location = u, this.source = n[0], this.ruleId = n[1];
        }
        function U0(e) {
          var r = [null, null], t;
          return typeof e == "string" && (t = e.indexOf(":"), t === -1 ? r[1] = e : (r[0] = e.slice(0, t), r[1] = e.slice(t + 1))), r;
        }
      });
      var gc = C((Qe) => {
        "use strict";
        Qe.basename = z0;
        Qe.dirname = M0;
        Qe.extname = Y0;
        Qe.join = G0;
        Qe.sep = "/";
        function z0(e, r) {
          var t = 0, n = -1, a, u, i, o;
          if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
          if (yr(e), a = e.length, r === void 0 || !r.length || r.length > e.length) {
            for (; a--; ) if (e.charCodeAt(a) === 47) {
              if (i) {
                t = a + 1;
                break;
              }
            } else n < 0 && (i = true, n = a + 1);
            return n < 0 ? "" : e.slice(t, n);
          }
          if (r === e) return "";
          for (u = -1, o = r.length - 1; a--; ) if (e.charCodeAt(a) === 47) {
            if (i) {
              t = a + 1;
              break;
            }
          } else u < 0 && (i = true, u = a + 1), o > -1 && (e.charCodeAt(a) === r.charCodeAt(o--) ? o < 0 && (n = a) : (o = -1, n = u));
          return t === n ? n = u : n < 0 && (n = e.length), e.slice(t, n);
        }
        function M0(e) {
          var r, t, n;
          if (yr(e), !e.length) return ".";
          for (r = -1, n = e.length; --n; ) if (e.charCodeAt(n) === 47) {
            if (t) {
              r = n;
              break;
            }
          } else t || (t = true);
          return r < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : r === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, r);
        }
        function Y0(e) {
          var r = -1, t = 0, n = -1, a = 0, u, i, o;
          for (yr(e), o = e.length; o--; ) {
            if (i = e.charCodeAt(o), i === 47) {
              if (u) {
                t = o + 1;
                break;
              }
              continue;
            }
            n < 0 && (u = true, n = o + 1), i === 46 ? r < 0 ? r = o : a !== 1 && (a = 1) : r > -1 && (a = -1);
          }
          return r < 0 || n < 0 || a === 0 || a === 1 && r === n - 1 && r === t + 1 ? "" : e.slice(r, n);
        }
        function G0() {
          for (var e = -1, r; ++e < arguments.length; ) yr(arguments[e]), arguments[e] && (r = r === void 0 ? arguments[e] : r + "/" + arguments[e]);
          return r === void 0 ? "." : V0(r);
        }
        function V0(e) {
          var r, t;
          return yr(e), r = e.charCodeAt(0) === 47, t = j0(e, !r), !t.length && !r && (t = "."), t.length && e.charCodeAt(e.length - 1) === 47 && (t += "/"), r ? "/" + t : t;
        }
        function j0(e, r) {
          for (var t = "", n = 0, a = -1, u = 0, i = -1, o, s; ++i <= e.length; ) {
            if (i < e.length) o = e.charCodeAt(i);
            else {
              if (o === 47) break;
              o = 47;
            }
            if (o === 47) {
              if (!(a === i - 1 || u === 1)) if (a !== i - 1 && u === 2) {
                if (t.length < 2 || n !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                  if (t.length > 2) {
                    if (s = t.lastIndexOf("/"), s !== t.length - 1) {
                      s < 0 ? (t = "", n = 0) : (t = t.slice(0, s), n = t.length - 1 - t.lastIndexOf("/")), a = i, u = 0;
                      continue;
                    }
                  } else if (t.length) {
                    t = "", n = 0, a = i, u = 0;
                    continue;
                  }
                }
                r && (t = t.length ? t + "/.." : "..", n = 2);
              } else t.length ? t += "/" + e.slice(a + 1, i) : t = e.slice(a + 1, i), n = i - a - 1;
              a = i, u = 0;
            } else o === 46 && u > -1 ? u++ : u = -1;
          }
          return t;
        }
        function yr(e) {
          if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
        }
      });
      var Ec = C((vc) => {
        "use strict";
        vc.cwd = $0;
        function $0() {
          return "/";
        }
      });
      var yc = C((YE, bc) => {
        "use strict";
        var ae = gc(), H0 = Ec(), W0 = yn();
        bc.exports = he;
        var K0 = {}.hasOwnProperty, wn = ["history", "path", "basename", "stem", "extname", "dirname"];
        he.prototype.toString = am;
        Object.defineProperty(he.prototype, "path", { get: J0, set: X0 });
        Object.defineProperty(he.prototype, "dirname", { get: Q0, set: Z0 });
        Object.defineProperty(he.prototype, "basename", { get: em, set: rm });
        Object.defineProperty(he.prototype, "extname", { get: tm, set: nm });
        Object.defineProperty(he.prototype, "stem", { get: im, set: um });
        function he(e) {
          var r, t;
          if (!e) e = {};
          else if (typeof e == "string" || W0(e)) e = { contents: e };
          else if ("message" in e && "messages" in e) return e;
          if (!(this instanceof he)) return new he(e);
          for (this.data = {}, this.messages = [], this.history = [], this.cwd = H0.cwd(), t = -1; ++t < wn.length; ) r = wn[t], K0.call(e, r) && (this[r] = e[r]);
          for (r in e) wn.indexOf(r) < 0 && (this[r] = e[r]);
        }
        function J0() {
          return this.history[this.history.length - 1];
        }
        function X0(e) {
          Bn(e, "path"), this.path !== e && this.history.push(e);
        }
        function Q0() {
          return typeof this.path == "string" ? ae.dirname(this.path) : void 0;
        }
        function Z0(e) {
          Cc(this.path, "dirname"), this.path = ae.join(e || "", this.basename);
        }
        function em() {
          return typeof this.path == "string" ? ae.basename(this.path) : void 0;
        }
        function rm(e) {
          Bn(e, "basename"), kn(e, "basename"), this.path = ae.join(this.dirname || "", e);
        }
        function tm() {
          return typeof this.path == "string" ? ae.extname(this.path) : void 0;
        }
        function nm(e) {
          if (kn(e, "extname"), Cc(this.path, "extname"), e) {
            if (e.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots");
          }
          this.path = ae.join(this.dirname, this.stem + (e || ""));
        }
        function im() {
          return typeof this.path == "string" ? ae.basename(this.path, this.extname) : void 0;
        }
        function um(e) {
          Bn(e, "stem"), kn(e, "stem"), this.path = ae.join(this.dirname || "", e + (this.extname || ""));
        }
        function am(e) {
          return (this.contents || "").toString(e);
        }
        function kn(e, r) {
          if (e && e.indexOf(ae.sep) > -1) throw new Error("`" + r + "` cannot be a path: did not expect `" + ae.sep + "`");
        }
        function Bn(e, r) {
          if (!e) throw new Error("`" + r + "` cannot be empty");
        }
        function Cc(e, r) {
          if (!e) throw new Error("Setting `" + r + "` requires `path` to be set too");
        }
      });
      var xc = C((GE, Ac) => {
        "use strict";
        var om = Fc(), ct = yc();
        Ac.exports = ct;
        ct.prototype.message = sm;
        ct.prototype.info = lm;
        ct.prototype.fail = cm;
        function sm(e, r, t) {
          var n = new om(e, r, t);
          return this.path && (n.name = this.path + ":" + n.name, n.file = this.path), n.fatal = false, this.messages.push(n), n;
        }
        function cm() {
          var e = this.message.apply(this, arguments);
          throw e.fatal = true, e;
        }
        function lm() {
          var e = this.message.apply(this, arguments);
          return e.fatal = null, e;
        }
      });
      var kc = C((VE, wc) => {
        "use strict";
        wc.exports = xc();
      });
      var Ic = C((jE, Lc) => {
        "use strict";
        var Bc = js(), fm = yn(), lt = rc(), qc = nc(), Oc = lc(), Ar = kc();
        Lc.exports = Pc().freeze();
        var Dm = [].slice, pm = {}.hasOwnProperty, dm = Oc().use(hm).use(mm).use(Fm);
        function hm(e, r) {
          r.tree = e.parse(r.file);
        }
        function mm(e, r, t) {
          e.run(r.tree, r.file, n);
          function n(a, u, i) {
            a ? t(a) : (r.tree = u, r.file = i, t());
          }
        }
        function Fm(e, r) {
          var t = e.stringify(r.tree, r.file);
          t == null || (typeof t == "string" || fm(t) ? ("value" in r.file && (r.file.value = t), r.file.contents = t) : r.file.result = t);
        }
        function Pc() {
          var e = [], r = Oc(), t = {}, n = -1, a;
          return u.data = o, u.freeze = i, u.attachers = e, u.use = s, u.parse = c, u.stringify = h, u.run = f, u.runSync = D, u.process = p, u.processSync = d, u;
          function u() {
            for (var m = Pc(), F = -1; ++F < e.length; ) m.use.apply(null, e[F]);
            return m.data(lt(true, {}, t)), m;
          }
          function i() {
            var m, F;
            if (a) return u;
            for (; ++n < e.length; ) m = e[n], m[1] !== false && (m[1] === true && (m[1] = void 0), F = m[0].apply(u, m.slice(1)), typeof F == "function" && r.use(F));
            return a = true, n = 1 / 0, u;
          }
          function o(m, F) {
            return typeof m == "string" ? arguments.length === 2 ? (_n("data", a), t[m] = F, u) : pm.call(t, m) && t[m] || null : m ? (_n("data", a), t = m, u) : t;
          }
          function s(m) {
            var F;
            if (_n("use", a), m != null) if (typeof m == "function") b.apply(null, arguments);
            else if (typeof m == "object") "length" in m ? B(m) : y(m);
            else throw new Error("Expected usable value, not `" + m + "`");
            return F && (t.settings = lt(t.settings || {}, F)), u;
            function y(g) {
              B(g.plugins), g.settings && (F = lt(F || {}, g.settings));
            }
            function E(g) {
              if (typeof g == "function") b(g);
              else if (typeof g == "object") "length" in g ? b.apply(null, g) : y(g);
              else throw new Error("Expected usable value, not `" + g + "`");
            }
            function B(g) {
              var A = -1;
              if (g != null) if (typeof g == "object" && "length" in g) for (; ++A < g.length; ) E(g[A]);
              else throw new Error("Expected a list of plugins, not `" + g + "`");
            }
            function b(g, A) {
              var x = l(g);
              x ? (qc(x[1]) && qc(A) && (A = lt(true, x[1], A)), x[1] = A) : e.push(Dm.call(arguments));
            }
          }
          function l(m) {
            for (var F = -1; ++F < e.length; ) if (e[F][0] === m) return e[F];
          }
          function c(m) {
            var F = Ar(m), y;
            return i(), y = u.Parser, qn("parse", y), Tc(y, "parse") ? new y(String(F), F).parse() : y(String(F), F);
          }
          function f(m, F, y) {
            if (_c(m), i(), !y && typeof F == "function" && (y = F, F = null), !y) return new Promise(E);
            E(null, y);
            function E(B, b) {
              r.run(m, Ar(F), g);
              function g(A, x, v) {
                x = x || m, A ? b(A) : B ? B(x) : y(null, x, v);
              }
            }
          }
          function D(m, F) {
            var y, E;
            return f(m, F, B), Sc("runSync", "run", E), y;
            function B(b, g) {
              E = true, y = g, Bc(b);
            }
          }
          function h(m, F) {
            var y = Ar(F), E;
            return i(), E = u.Compiler, Tn("stringify", E), _c(m), Tc(E, "compile") ? new E(m, y).compile() : E(m, y);
          }
          function p(m, F) {
            if (i(), qn("process", u.Parser), Tn("process", u.Compiler), !F) return new Promise(y);
            y(null, F);
            function y(E, B) {
              var b = Ar(m);
              dm.run(u, { file: b }, g);
              function g(A) {
                A ? B(A) : E ? E(b) : F(null, b);
              }
            }
          }
          function d(m) {
            var F, y;
            return i(), qn("processSync", u.Parser), Tn("processSync", u.Compiler), F = Ar(m), p(F, E), Sc("processSync", "process", y), F;
            function E(B) {
              y = true, Bc(B);
            }
          }
        }
        function Tc(e, r) {
          return typeof e == "function" && e.prototype && (gm(e.prototype) || r in e.prototype);
        }
        function gm(e) {
          var r;
          for (r in e) return true;
          return false;
        }
        function qn(e, r) {
          if (typeof r != "function") throw new Error("Cannot `" + e + "` without `Parser`");
        }
        function Tn(e, r) {
          if (typeof r != "function") throw new Error("Cannot `" + e + "` without `Compiler`");
        }
        function _n(e, r) {
          if (r) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.");
        }
        function _c(e) {
          if (!e || typeof e.type != "string") throw new Error("Expected node, got `" + e + "`");
        }
        function Sc(e, r, t) {
          if (!t) throw new Error("`" + e + "` finished async. Use `" + r + "` instead");
        }
      });
      var Tm = {};
      Pn(Tm, { languages: () => _i, options: () => Si, parsers: () => On, printers: () => qm });
      var al = (e, r, t, n) => {
        if (!(e && r == null)) return r.replaceAll ? r.replaceAll(t, n) : t.global ? r.replace(t, n) : r.split(t).join(n);
      }, N = al;
      var ol = (e, r, t) => {
        if (!(e && r == null)) return Array.isArray(r) || typeof r == "string" ? r[t < 0 ? r.length + t : t] : r.at(t);
      }, M = ol;
      var qi = Ue(wr(), 1);
      function Be(e) {
        if (typeof e != "string") throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var $ = "string", H = "array", ge = "cursor", ee = "indent", re = "align", oe = "trim", K = "group", J = "fill", X = "if-break", se = "indent-if-break", ce = "line-suffix", le = "line-suffix-boundary", W = "line", fe = "label", te = "break-parent", kr = /* @__PURE__ */ new Set([ge, ee, re, oe, K, J, X, se, ce, le, W, fe, te]);
      function cl(e) {
        if (typeof e == "string") return $;
        if (Array.isArray(e)) return H;
        if (!e) return;
        let { type: r } = e;
        if (kr.has(r)) return r;
      }
      var Y = cl;
      var ll = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
      function fl(e) {
        let r = e === null ? "null" : typeof e;
        if (r !== "string" && r !== "object") return `Unexpected doc '${r}', 
Expected it to be 'string' or 'object'.`;
        if (Y(e)) throw new Error("doc is valid.");
        let t = Object.prototype.toString.call(e);
        if (t !== "[object Object]") return `Unexpected doc '${t}'.`;
        let n = ll([...kr].map((a) => `'${a}'`));
        return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
      }
      var Dt = class extends Error {
        constructor(r) {
          super(fl(r));
          __publicField(this, "name", "InvalidDocError");
          this.doc = r;
        }
      }, qe = Dt;
      var Nn = {};
      function Dl(e, r, t, n) {
        let a = [e];
        for (; a.length > 0; ) {
          let u = a.pop();
          if (u === Nn) {
            t(a.pop());
            continue;
          }
          t && a.push(u, Nn);
          let i = Y(u);
          if (!i) throw new qe(u);
          if ((r == null ? void 0 : r(u)) !== false) switch (i) {
            case H:
            case J: {
              let o = i === H ? u : u.parts;
              for (let s = o.length, l = s - 1; l >= 0; --l) a.push(o[l]);
              break;
            }
            case X:
              a.push(u.flatContents, u.breakContents);
              break;
            case K:
              if (n && u.expandedStates) for (let o = u.expandedStates.length, s = o - 1; s >= 0; --s) a.push(u.expandedStates[s]);
              else a.push(u.contents);
              break;
            case re:
            case ee:
            case se:
            case fe:
            case ce:
              a.push(u.contents);
              break;
            case $:
            case ge:
            case oe:
            case le:
            case W:
            case te:
              break;
            default:
              throw new qe(u);
          }
        }
      }
      var Rn = Dl;
      var Un = () => {
      }, Te = Un, Br = Un;
      function Ze(e) {
        return Te(e), { type: ee, contents: e };
      }
      function ve(e, r) {
        return Te(r), { type: re, contents: r, n: e };
      }
      function ze(e, r = {}) {
        return Te(e), Br(r.expandedStates, true), { type: K, id: r.id, contents: e, break: !!r.shouldBreak, expandedStates: r.expandedStates };
      }
      function _e(e) {
        return ve({ type: "root" }, e);
      }
      function Ee(e) {
        return Br(e), { type: J, parts: e };
      }
      function zn(e, r = "", t = {}) {
        return Te(e), r !== "" && Te(r), { type: X, breakContents: e, flatContents: r, groupId: t.groupId };
      }
      var er = { type: te };
      var rr = { type: W, hard: true }, pl = { type: W, hard: true, literal: true }, qr = { type: W }, Tr = { type: W, soft: true }, L = [rr, er], tr = [pl, er];
      function _r(e, r) {
        Te(e), Br(r);
        let t = [];
        for (let n = 0; n < r.length; n++) n !== 0 && t.push(e), t.push(r[n]);
        return t;
      }
      function dl(e, r) {
        if (typeof e == "string") return r(e);
        let t = /* @__PURE__ */ new Map();
        return n(e);
        function n(u) {
          if (t.has(u)) return t.get(u);
          let i = a(u);
          return t.set(u, i), i;
        }
        function a(u) {
          switch (Y(u)) {
            case H:
              return r(u.map(n));
            case J:
              return r({ ...u, parts: u.parts.map(n) });
            case X:
              return r({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
            case K: {
              let { expandedStates: i, contents: o } = u;
              return i ? (i = i.map(n), o = i[0]) : o = n(o), r({ ...u, contents: o, expandedStates: i });
            }
            case re:
            case ee:
            case se:
            case fe:
            case ce:
              return r({ ...u, contents: n(u.contents) });
            case $:
            case ge:
            case oe:
            case le:
            case W:
            case te:
              return r(u);
            default:
              throw new qe(u);
          }
        }
      }
      function Mn(e) {
        if (e.length > 0) {
          let r = M(false, e, -1);
          !r.expandedStates && !r.break && (r.break = "propagated");
        }
        return null;
      }
      function Yn(e) {
        let r = /* @__PURE__ */ new Set(), t = [];
        function n(u) {
          if (u.type === te && Mn(t), u.type === K) {
            if (t.push(u), r.has(u)) return false;
            r.add(u);
          }
        }
        function a(u) {
          u.type === K && t.pop().break && Mn(t);
        }
        Rn(e, n, a, true);
      }
      function Ce(e, r = tr) {
        return dl(e, (t) => typeof t == "string" ? _r(r, t.split(`
`)) : t);
      }
      function hl(e, r) {
        let t = e.match(new RegExp(`(${Be(r)})+`, "gu"));
        return t === null ? 0 : t.reduce((n, a) => Math.max(n, a.length / r.length), 0);
      }
      var Sr = hl;
      function ml(e, r) {
        let t = e.match(new RegExp(`(${Be(r)})+`, "gu"));
        if (t === null) return 0;
        let n = /* @__PURE__ */ new Map(), a = 0;
        for (let u of t) {
          let i = u.length / r.length;
          n.set(i, true), i > a && (a = i);
        }
        for (let u = 1; u < a; u++) if (!n.get(u)) return u;
        return a + 1;
      }
      var Gn = ml;
      var Or = "'", Vn = '"';
      function Fl(e, r) {
        let t = r === true || r === Or ? Or : Vn, n = t === Or ? Vn : Or, a = 0, u = 0;
        for (let i of e) i === t ? a++ : i === n && u++;
        return a > u ? n : t;
      }
      var jn = Fl;
      var pt = class extends Error {
        constructor(r, t, n = "type") {
          super(`Unexpected ${t} node ${n}: ${JSON.stringify(r[n])}.`);
          __publicField(this, "name", "UnexpectedNodeError");
          this.node = r;
        }
      }, $n = pt;
      var Xn = Ue(wr(), 1);
      function gl(e) {
        return (e == null ? void 0 : e.type) === "front-matter";
      }
      var Hn = gl;
      var nr = 3;
      function vl(e) {
        let r = e.slice(0, nr);
        if (r !== "---" && r !== "+++") return;
        let t = e.indexOf(`
`, nr);
        if (t === -1) return;
        let n = e.slice(nr, t).trim(), a = e.indexOf(`
${r}`, t), u = n;
        if (u || (u = r === "+++" ? "toml" : "yaml"), a === -1 && r === "---" && u === "yaml" && (a = e.indexOf(`
...`, t)), a === -1) return;
        let i = a + 1 + nr, o = e.charAt(i + 1);
        if (!/\s?/u.test(o)) return;
        let s = e.slice(0, i);
        return { type: "front-matter", language: u, explicitLanguage: n, value: e.slice(t + 1, a), startDelimiter: r, endDelimiter: s.slice(-nr), raw: s };
      }
      function El(e) {
        let r = vl(e);
        if (!r) return { content: e };
        let { raw: t } = r;
        return { frontMatter: r, content: N(false, t, /[^\n]/gu, " ") + e.slice(t.length) };
      }
      var ir = El;
      var Wn = ["format", "prettier"];
      function dt(e) {
        let r = `@(${Wn.join("|")})`, t = new RegExp([`<!--\\s*${r}\\s*-->`, `\\{\\s*\\/\\*\\s*${r}\\s*\\*\\/\\s*\\}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${r}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "mu"), n = e.match(t);
        return (n == null ? void 0 : n.index) === 0;
      }
      var Kn = (e) => dt(ir(e).content.trimStart()), Jn = (e) => {
        let r = ir(e), t = `<!-- @${Wn[0]} -->`;
        return r.frontMatter ? `${r.frontMatter.raw}

${t}

${r.content}` : `${t}

${r.content}`;
      };
      var Cl = /* @__PURE__ */ new Set(["position", "raw"]);
      function Qn(e, r, t) {
        if ((e.type === "front-matter" || e.type === "code" || e.type === "yaml" || e.type === "import" || e.type === "export" || e.type === "jsx") && delete r.value, e.type === "list" && delete r.isAligned, (e.type === "list" || e.type === "listItem") && delete r.spread, e.type === "text") return null;
        if (e.type === "inlineCode" && (r.value = N(false, e.value, `
`, " ")), e.type === "wikiLink" && (r.value = N(false, e.value.trim(), /[\t\n]+/gu, " ")), (e.type === "definition" || e.type === "linkReference" || e.type === "imageReference") && (r.label = (0, Xn.default)(e.label)), (e.type === "link" || e.type === "image") && e.url && e.url.includes("(")) for (let n of "<>") r.url = N(false, e.url, n, encodeURIComponent(n));
        if ((e.type === "definition" || e.type === "link" || e.type === "image") && e.title && (r.title = N(false, e.title, /\\(?=["')])/gu, "")), (t == null ? void 0 : t.type) === "root" && t.children.length > 0 && (t.children[0] === e || Hn(t.children[0]) && t.children[1] === e) && e.type === "html" && dt(e.value)) return null;
      }
      Qn.ignoredProperties = Cl;
      var Zn = Qn;
      var ei = /(?:[\u02ea-\u02eb\u1100-\u11ff\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u303f\u3041-\u3096\u3099-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u3190-\u4dbf\u4e00-\u9fff\ua700-\ua707\ua960-\ua97c\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufe10-\ufe1f\ufe30-\ufe6f\uff00-\uffef]|[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883\ud885-\ud887][\udc00-\udfff]|\ud81b[\udfe3]|\ud82b[\udff0-\udff3\udff5-\udffb\udffd-\udffe]|\ud82c[\udc00-\udd22\udd32\udd50-\udd52\udd55\udd64-\udd67]|\ud83c[\ude00\ude50-\ude51]|\ud869[\udc00-\udedf\udf00-\udfff]|\ud86d[\udc00-\udf39\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a\udf50-\udfff]|\ud888[\udc00-\udfaf])(?:[\ufe00-\ufe0f]|\udb40[\udd00-\uddef])?/u, Se = new RegExp("(?:[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e]|\\p{General_Category=Connector_Punctuation}|\\p{General_Category=Dash_Punctuation}|\\p{General_Category=Close_Punctuation}|\\p{General_Category=Final_Punctuation}|\\p{General_Category=Initial_Punctuation}|\\p{General_Category=Other_Punctuation}|\\p{General_Category=Open_Punctuation})", "u");
      async function bl(e, r) {
        if (e.language === "yaml") {
          let t = e.value.trim(), n = t ? await r(t, { parser: "yaml" }) : "";
          return _e([e.startDelimiter, e.explicitLanguage, L, n, n ? L : "", e.endDelimiter]);
        }
      }
      var ri = bl;
      var yl = (e) => String(e).split(/[/\\]/u).pop();
      function ti(e, r) {
        if (!r) return;
        let t = yl(r).toLowerCase();
        return e.find(({ filenames: n }) => n == null ? void 0 : n.some((a) => a.toLowerCase() === t)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((a) => t.endsWith(a)));
      }
      function Al(e, r) {
        if (r) return e.find(({ name: t }) => t.toLowerCase() === r) ?? e.find(({ aliases: t }) => t == null ? void 0 : t.includes(r)) ?? e.find(({ extensions: t }) => t == null ? void 0 : t.includes(`.${r}`));
      }
      function xl(e, r) {
        let t = e.plugins.flatMap((a) => a.languages ?? []), n = Al(t, r.language) ?? ti(t, r.physicalFile) ?? ti(t, r.file) ?? (r.physicalFile, void 0);
        return n == null ? void 0 : n.parsers[0];
      }
      var ni = xl;
      var wl = new Proxy(() => {
      }, { get: () => wl });
      function Oe(e) {
        return e.position.start.offset;
      }
      function Pe(e) {
        return e.position.end.offset;
      }
      var ht = /* @__PURE__ */ new Set(["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"]), Pr = /* @__PURE__ */ new Set([...ht, "tableCell", "paragraph", "heading"]), Le = "non-cjk", De = "cj-letter", be = "k-letter", ur = "cjk-punctuation", kl = new RegExp("\\p{Script_Extensions=Hangul}", "u");
      function Lr(e) {
        let r = [], t = e.split(/([\t\n ]+)/u);
        for (let [a, u] of t.entries()) {
          if (a % 2 === 1) {
            r.push({ type: "whitespace", value: /\n/u.test(u) ? `
` : " " });
            continue;
          }
          if ((a === 0 || a === t.length - 1) && u === "") continue;
          let i = u.split(new RegExp(`(${ei.source})`, "u"));
          for (let [o, s] of i.entries()) if (!((o === 0 || o === i.length - 1) && s === "")) {
            if (o % 2 === 0) {
              s !== "" && n({ type: "word", value: s, kind: Le, hasLeadingPunctuation: Se.test(s[0]), hasTrailingPunctuation: Se.test(M(false, s, -1)) });
              continue;
            }
            n(Se.test(s) ? { type: "word", value: s, kind: ur, hasLeadingPunctuation: true, hasTrailingPunctuation: true } : { type: "word", value: s, kind: kl.test(s) ? be : De, hasLeadingPunctuation: false, hasTrailingPunctuation: false });
          }
        }
        return r;
        function n(a) {
          let u = M(false, r, -1);
          (u == null ? void 0 : u.type) === "word" && !i(Le, ur) && ![u.value, a.value].some((o) => /\u3000/u.test(o)) && r.push({ type: "whitespace", value: "" }), r.push(a);
          function i(o, s) {
            return u.kind === o && a.kind === s || u.kind === s && a.kind === o;
          }
        }
      }
      function Me(e, r) {
        let t = r.originalText.slice(e.position.start.offset, e.position.end.offset), { numberText: n, leadingSpaces: a } = t.match(/^\s*(?<numberText>\d+)(\.|\))(?<leadingSpaces>\s*)/u).groups;
        return { number: Number(n), leadingSpaces: a };
      }
      function ii(e, r) {
        return !e.ordered || e.children.length < 2 || Me(e.children[1], r).number !== 1 ? false : Me(e.children[0], r).number !== 0 ? true : e.children.length > 2 && Me(e.children[2], r).number === 1;
      }
      function Ir(e, r) {
        let { value: t } = e;
        return e.position.end.offset === r.length && t.endsWith(`
`) && r.endsWith(`
`) ? t.slice(0, -1) : t;
      }
      function ye(e, r) {
        return function t(n, a, u) {
          let i = { ...r(n, a, u) };
          return i.children && (i.children = i.children.map((o, s) => t(o, s, [i, ...u]))), i;
        }(e, null, []);
      }
      function mt(e) {
        if ((e == null ? void 0 : e.type) !== "link" || e.children.length !== 1) return false;
        let [r] = e.children;
        return Oe(e) === Oe(r) && Pe(e) === Pe(r);
      }
      function Bl(e, r) {
        let { node: t } = e;
        if (t.type === "code" && t.lang !== null) {
          let n = ni(r, { language: t.lang });
          if (n) return async (a) => {
            let u = r.__inJsTemplate ? "~" : "`", i = u.repeat(Math.max(3, Sr(t.value, u) + 1)), o = { parser: n };
            t.lang === "ts" || t.lang === "typescript" ? o.filepath = "dummy.ts" : t.lang === "tsx" && (o.filepath = "dummy.tsx");
            let s = await a(Ir(t, r.originalText), o);
            return _e([i, t.lang, t.meta ? " " + t.meta : "", L, Ce(s), L, i]);
          };
        }
        switch (t.type) {
          case "front-matter":
            return (n) => ri(t, n);
          case "import":
          case "export":
            return (n) => n(t.value, { parser: "babel" });
          case "jsx":
            return (n) => n(`<$>${t.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" });
        }
        return null;
      }
      var ui = Bl;
      var ar = null;
      function or(e) {
        if (ar !== null && typeof ar.property) {
          let r = ar;
          return ar = or.prototype = null, r;
        }
        return ar = or.prototype = e ?? /* @__PURE__ */ Object.create(null), new or();
      }
      var ql = 10;
      for (let e = 0; e <= ql; e++) or();
      function Ft(e) {
        return or(e);
      }
      function Tl(e, r = "type") {
        Ft(e);
        function t(n) {
          let a = n[r], u = e[a];
          if (!Array.isArray(u)) throw Object.assign(new Error(`Missing visitor keys for '${a}'.`), { node: n });
          return u;
        }
        return t;
      }
      var ai = Tl;
      var _l = { "front-matter": [], root: ["children"], paragraph: ["children"], sentence: ["children"], word: [], whitespace: [], emphasis: ["children"], strong: ["children"], delete: ["children"], inlineCode: [], wikiLink: [], link: ["children"], image: [], blockquote: ["children"], heading: ["children"], code: [], html: [], list: ["children"], thematicBreak: [], linkReference: ["children"], imageReference: [], definition: [], footnote: ["children"], footnoteReference: [], footnoteDefinition: ["children"], table: ["children"], tableCell: ["children"], break: [], liquidNode: [], import: [], export: [], esComment: [], jsx: [], math: [], inlineMath: [], tableRow: ["children"], listItem: ["children"], text: [] }, oi = _l;
      var Sl = ai(oi), si = Sl;
      function ci(e) {
        switch (e) {
          case "cr":
            return "\r";
          case "crlf":
            return `\r
`;
          default:
            return `
`;
        }
      }
      var li = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
      function fi(e) {
        return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
      }
      function Di(e) {
        return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
      }
      var pi = (e) => !(fi(e) || Di(e));
      var Ol = /[^\x20-\x7F]/u;
      function Pl(e) {
        if (!e) return 0;
        if (!Ol.test(e)) return e.length;
        e = e.replace(li(), "  ");
        let r = 0;
        for (let t of e) {
          let n = t.codePointAt(0);
          n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (r += pi(n) ? 1 : 2);
        }
        return r;
      }
      var sr = Pl;
      var G = Symbol("MODE_BREAK"), ne = Symbol("MODE_FLAT"), cr = Symbol("cursor");
      function di() {
        return { value: "", length: 0, queue: [] };
      }
      function Ll(e, r) {
        return gt(e, { type: "indent" }, r);
      }
      function Il(e, r, t) {
        return r === Number.NEGATIVE_INFINITY ? e.root || di() : r < 0 ? gt(e, { type: "dedent" }, t) : r ? r.type === "root" ? { ...e, root: e } : gt(e, { type: typeof r == "string" ? "stringAlign" : "numberAlign", n: r }, t) : e;
      }
      function gt(e, r, t) {
        let n = r.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, r], a = "", u = 0, i = 0, o = 0;
        for (let p of n) switch (p.type) {
          case "indent":
            c(), t.useTabs ? s(1) : l(t.tabWidth);
            break;
          case "stringAlign":
            c(), a += p.n, u += p.n.length;
            break;
          case "numberAlign":
            i += 1, o += p.n;
            break;
          default:
            throw new Error(`Unexpected type '${p.type}'`);
        }
        return D(), { ...e, value: a, length: u, queue: n };
        function s(p) {
          a += "	".repeat(p), u += t.tabWidth * p;
        }
        function l(p) {
          a += " ".repeat(p), u += p;
        }
        function c() {
          t.useTabs ? f() : D();
        }
        function f() {
          i > 0 && s(i), h();
        }
        function D() {
          o > 0 && l(o), h();
        }
        function h() {
          i = 0, o = 0;
        }
      }
      function vt(e) {
        let r = 0, t = 0, n = e.length;
        e: for (; n--; ) {
          let a = e[n];
          if (a === cr) {
            t++;
            continue;
          }
          for (let u = a.length - 1; u >= 0; u--) {
            let i = a[u];
            if (i === " " || i === "	") r++;
            else {
              e[n] = a.slice(0, u + 1);
              break e;
            }
          }
        }
        if (r > 0 || t > 0) for (e.length = n + 1; t-- > 0; ) e.push(cr);
        return r;
      }
      function Nr(e, r, t, n, a, u) {
        if (t === Number.POSITIVE_INFINITY) return true;
        let i = r.length, o = [e], s = [];
        for (; t >= 0; ) {
          if (o.length === 0) {
            if (i === 0) return true;
            o.push(r[--i]);
            continue;
          }
          let { mode: l, doc: c } = o.pop(), f = Y(c);
          switch (f) {
            case $:
              s.push(c), t -= sr(c);
              break;
            case H:
            case J: {
              let D = f === H ? c : c.parts;
              for (let h = D.length - 1; h >= 0; h--) o.push({ mode: l, doc: D[h] });
              break;
            }
            case ee:
            case re:
            case se:
            case fe:
              o.push({ mode: l, doc: c.contents });
              break;
            case oe:
              t += vt(s);
              break;
            case K: {
              if (u && c.break) return false;
              let D = c.break ? G : l, h = c.expandedStates && D === G ? M(false, c.expandedStates, -1) : c.contents;
              o.push({ mode: D, doc: h });
              break;
            }
            case X: {
              let h = (c.groupId ? a[c.groupId] || ne : l) === G ? c.breakContents : c.flatContents;
              h && o.push({ mode: l, doc: h });
              break;
            }
            case W:
              if (l === G || c.hard) return true;
              c.soft || (s.push(" "), t--);
              break;
            case ce:
              n = true;
              break;
            case le:
              if (n) return false;
              break;
          }
        }
        return false;
      }
      function hi(e, r) {
        let t = {}, n = r.printWidth, a = ci(r.endOfLine), u = 0, i = [{ ind: di(), mode: G, doc: e }], o = [], s = false, l = [], c = 0;
        for (Yn(e); i.length > 0; ) {
          let { ind: D, mode: h, doc: p } = i.pop();
          switch (Y(p)) {
            case $: {
              let d = a !== `
` ? N(false, p, `
`, a) : p;
              o.push(d), i.length > 0 && (u += sr(d));
              break;
            }
            case H:
              for (let d = p.length - 1; d >= 0; d--) i.push({ ind: D, mode: h, doc: p[d] });
              break;
            case ge:
              if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
              o.push(cr), c++;
              break;
            case ee:
              i.push({ ind: Ll(D, r), mode: h, doc: p.contents });
              break;
            case re:
              i.push({ ind: Il(D, p.n, r), mode: h, doc: p.contents });
              break;
            case oe:
              u -= vt(o);
              break;
            case K:
              switch (h) {
                case ne:
                  if (!s) {
                    i.push({ ind: D, mode: p.break ? G : ne, doc: p.contents });
                    break;
                  }
                case G: {
                  s = false;
                  let d = { ind: D, mode: ne, doc: p.contents }, m = n - u, F = l.length > 0;
                  if (!p.break && Nr(d, i, m, F, t)) i.push(d);
                  else if (p.expandedStates) {
                    let y = M(false, p.expandedStates, -1);
                    if (p.break) {
                      i.push({ ind: D, mode: G, doc: y });
                      break;
                    } else for (let E = 1; E < p.expandedStates.length + 1; E++) if (E >= p.expandedStates.length) {
                      i.push({ ind: D, mode: G, doc: y });
                      break;
                    } else {
                      let B = p.expandedStates[E], b = { ind: D, mode: ne, doc: B };
                      if (Nr(b, i, m, F, t)) {
                        i.push(b);
                        break;
                      }
                    }
                  } else i.push({ ind: D, mode: G, doc: p.contents });
                  break;
                }
              }
              p.id && (t[p.id] = M(false, i, -1).mode);
              break;
            case J: {
              let d = n - u, { parts: m } = p;
              if (m.length === 0) break;
              let [F, y] = m, E = { ind: D, mode: ne, doc: F }, B = { ind: D, mode: G, doc: F }, b = Nr(E, [], d, l.length > 0, t, true);
              if (m.length === 1) {
                b ? i.push(E) : i.push(B);
                break;
              }
              let g = { ind: D, mode: ne, doc: y }, A = { ind: D, mode: G, doc: y };
              if (m.length === 2) {
                b ? i.push(g, E) : i.push(A, B);
                break;
              }
              m.splice(0, 2);
              let x = { ind: D, mode: h, doc: Ee(m) }, v = m[0];
              Nr({ ind: D, mode: ne, doc: [F, y, v] }, [], d, l.length > 0, t, true) ? i.push(x, g, E) : b ? i.push(x, A, E) : i.push(x, A, B);
              break;
            }
            case X:
            case se: {
              let d = p.groupId ? t[p.groupId] : h;
              if (d === G) {
                let m = p.type === X ? p.breakContents : p.negate ? p.contents : Ze(p.contents);
                m && i.push({ ind: D, mode: h, doc: m });
              }
              if (d === ne) {
                let m = p.type === X ? p.flatContents : p.negate ? Ze(p.contents) : p.contents;
                m && i.push({ ind: D, mode: h, doc: m });
              }
              break;
            }
            case ce:
              l.push({ ind: D, mode: h, doc: p.contents });
              break;
            case le:
              l.length > 0 && i.push({ ind: D, mode: h, doc: rr });
              break;
            case W:
              switch (h) {
                case ne:
                  if (p.hard) s = true;
                  else {
                    p.soft || (o.push(" "), u += 1);
                    break;
                  }
                case G:
                  if (l.length > 0) {
                    i.push({ ind: D, mode: h, doc: p }, ...l.reverse()), l.length = 0;
                    break;
                  }
                  p.literal ? D.root ? (o.push(a, D.root.value), u = D.root.length) : (o.push(a), u = 0) : (u -= vt(o), o.push(a + D.value), u = D.length);
                  break;
              }
              break;
            case fe:
              i.push({ ind: D, mode: h, doc: p.contents });
              break;
            case te:
              break;
            default:
              throw new qe(p);
          }
          i.length === 0 && l.length > 0 && (i.push(...l.reverse()), l.length = 0);
        }
        let f = o.indexOf(cr);
        if (f !== -1) {
          let D = o.indexOf(cr, f + 1), h = o.slice(0, f).join(""), p = o.slice(f + 1, D).join(""), d = o.slice(D + 1).join("");
          return { formatted: h + p + d, cursorNodeStart: h.length, cursorNodeText: p };
        }
        return { formatted: o.join("") };
      }
      function mi(e, r, t) {
        let { node: n } = e, a = [], u = e.map(() => e.map(({ index: f }) => {
          let D = hi(t(), r).formatted, h = sr(D);
          return a[f] = Math.max(a[f] ?? 3, h), { text: D, width: h };
        }, "children"), "children"), i = s(false);
        if (r.proseWrap !== "never") return [er, i];
        let o = s(true);
        return [er, ze(zn(o, i))];
        function s(f) {
          return _r(rr, [c(u[0], f), l(f), ...u.slice(1).map((D) => c(D, f))].map((D) => `| ${D.join(" | ")} |`));
        }
        function l(f) {
          return a.map((D, h) => {
            let p = n.align[h], d = p === "center" || p === "left" ? ":" : "-", m = p === "center" || p === "right" ? ":" : "-", F = f ? "-" : "-".repeat(D - 2);
            return `${d}${F}${m}`;
          });
        }
        function c(f, D) {
          return f.map(({ text: h, width: p }, d) => {
            if (D) return h;
            let m = a[d] - p, F = n.align[d], y = 0;
            F === "right" ? y = m : F === "center" && (y = Math.floor(m / 2));
            let E = m - y;
            return `${" ".repeat(y)}${h}${" ".repeat(E)}`;
          });
        }
      }
      function Fi(e, r, t) {
        let n = e.map(t, "children");
        return Nl(n);
      }
      function Nl(e) {
        let r = [""];
        return function t(n) {
          for (let a of n) {
            let u = Y(a);
            if (u === H) {
              t(a);
              continue;
            }
            let i = a, o = [];
            u === J && ([i, ...o] = a.parts), r.push([r.pop(), i], ...o);
          }
        }(e), Ee(r);
      }
      var Rl = /^.$/su;
      function Ul(e, r) {
        return e = zl(e, r), e = Yl(e), e = Vl(e, r), e = jl(e, r), e = Gl(e), e;
      }
      function zl(e, r) {
        return ye(e, (t) => t.type !== "text" || t.value === "*" || t.value === "_" || !Rl.test(t.value) || t.position.end.offset - t.position.start.offset === t.value.length ? t : { ...t, value: r.originalText.slice(t.position.start.offset, t.position.end.offset) });
      }
      function Ml(e, r, t) {
        return ye(e, (n) => {
          if (!n.children) return n;
          let a = n.children.reduce((u, i) => {
            let o = M(false, u, -1);
            return o && r(o, i) ? u.splice(-1, 1, t(o, i)) : u.push(i), u;
          }, []);
          return { ...n, children: a };
        });
      }
      function Yl(e) {
        return Ml(e, (r, t) => r.type === "text" && t.type === "text", (r, t) => ({ type: "text", value: r.value + t.value, position: { start: r.position.start, end: t.position.end } }));
      }
      function Gl(e) {
        return ye(e, (r, t, [n]) => {
          if (r.type !== "text") return r;
          let { value: a } = r;
          return n.type === "paragraph" && (t === 0 && (a = a.trimStart()), t === n.children.length - 1 && (a = a.trimEnd())), { type: "sentence", position: r.position, children: Lr(a) };
        });
      }
      function Vl(e, r) {
        return ye(e, (t, n, a) => {
          if (t.type === "code") {
            let u = /^\n?(?: {4,}|\t)/u.test(r.originalText.slice(t.position.start.offset, t.position.end.offset));
            if (t.isIndented = u, u) for (let i = 0; i < a.length; i++) {
              let o = a[i];
              if (o.hasIndentedCodeblock) break;
              o.type === "list" && (o.hasIndentedCodeblock = true);
            }
          }
          return t;
        });
      }
      function jl(e, r) {
        return ye(e, (a, u, i) => {
          if (a.type === "list" && a.children.length > 0) {
            for (let o = 0; o < i.length; o++) {
              let s = i[o];
              if (s.type === "list" && !s.isAligned) return a.isAligned = false, a;
            }
            a.isAligned = n(a);
          }
          return a;
        });
        function t(a) {
          return a.children.length === 0 ? -1 : a.children[0].position.start.column - 1;
        }
        function n(a) {
          if (!a.ordered) return true;
          let [u, i] = a.children;
          if (Me(u, r).leadingSpaces.length > 1) return true;
          let s = t(u);
          if (s === -1) return false;
          if (a.children.length === 1) return s % r.tabWidth === 0;
          let l = t(i);
          return s !== l ? false : s % r.tabWidth === 0 ? true : Me(i, r).leadingSpaces.length > 1;
        }
      }
      var gi = Ul;
      function vi(e, r) {
        let t = [""];
        return e.each(() => {
          let { node: n } = e, a = r();
          switch (n.type) {
            case "whitespace":
              if (Y(a) !== $) {
                t.push(a, "");
                break;
              }
            default:
              t.push([t.pop(), a]);
          }
        }, "children"), Ee(t);
      }
      var $l = /* @__PURE__ */ new Set(["heading", "tableCell", "link", "wikiLink"]), Hl = new Set(`$(£¥·'"〈《「『【〔〖〝﹙﹛＄（［｛￡￥[{‵︴︵︷︹︻︽︿﹁﹃﹏〘｟«`), Wl = new Set(`!%),.:;?]}¢°·'"†‡›℃∶、。〃〆〕〗〞﹚﹜！＂％＇），．：；？］｝～–—•〉》」︰︱︲︳﹐﹑﹒﹓﹔﹕﹖﹘︶︸︺︼︾﹀﹂﹗｜､』】〙〟｠»ヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻‐゠〜～‼⁇⁈⁉・゙゚`), Ei = new Set("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
      function Kl({ parent: e }) {
        if (e.usesCJSpaces === void 0) {
          let r = { " ": 0, "": 0 }, { children: t } = e;
          for (let n = 1; n < t.length - 1; ++n) {
            let a = t[n];
            if (a.type === "whitespace" && (a.value === " " || a.value === "")) {
              let u = t[n - 1].kind, i = t[n + 1].kind;
              (u === De && i === Le || u === Le && i === De) && ++r[a.value];
            }
          }
          e.usesCJSpaces = r[" "] > r[""];
        }
        return e.usesCJSpaces;
      }
      function Jl(e, r) {
        if (r) return true;
        let { previous: t, next: n } = e;
        if (!t || !n) return true;
        let a = t.kind, u = n.kind;
        return bi(a) && bi(u) || a === be && u === De || u === be && a === De ? true : a === ur || u === ur || a === De && u === De ? false : Ei.has(n.value[0]) || Ei.has(M(false, t.value, -1)) ? true : t.hasTrailingPunctuation || n.hasLeadingPunctuation ? false : Kl(e);
      }
      function Ci(e) {
        return e === Le || e === De || e === be;
      }
      function bi(e) {
        return e === Le || e === be;
      }
      function Xl(e, r, t, n, a) {
        if (t !== "always" || e.hasAncestor((s) => $l.has(s.type))) return false;
        if (n) return r !== "";
        if (r === " ") return true;
        let { previous: u, next: i } = e;
        return !(r === "" && ((u == null ? void 0 : u.kind) === be && Ci(i == null ? void 0 : i.kind) || (i == null ? void 0 : i.kind) === be && Ci(u == null ? void 0 : u.kind)) || !a && (i && Wl.has(i.value[0]) || u && Hl.has(M(false, u.value, -1))));
      }
      function Et(e, r, t, n) {
        if (t === "preserve" && r === `
`) return L;
        let a = r === " " || r === `
` && Jl(e, n);
        return Xl(e, r, t, n, a) ? a ? qr : Tr : a ? " " : "";
      }
      var Ql = /* @__PURE__ */ new Set(["listItem", "definition"]);
      function Zl(e, r, t) {
        var a, u;
        let { node: n } = e;
        if (af(e)) {
          let i = [""], o = Lr(r.originalText.slice(n.position.start.offset, n.position.end.offset));
          for (let s of o) {
            if (s.type === "word") {
              i.push([i.pop(), s.value]);
              continue;
            }
            let l = Et(e, s.value, r.proseWrap, true);
            if (Y(l) === $) {
              i.push([i.pop(), l]);
              continue;
            }
            i.push(l);
          }
          return Ee(i);
        }
        switch (n.type) {
          case "front-matter":
            return r.originalText.slice(n.position.start.offset, n.position.end.offset);
          case "root":
            return n.children.length === 0 ? "" : [tf(e, r, t), L];
          case "paragraph":
            return Fi(e, r, t);
          case "sentence":
            return vi(e, t);
          case "word": {
            let i = N(false, N(false, n.value, "*", String.raw`\*`), new RegExp([`(^|${Se.source})(_+)`, `(_+)(${Se.source}|$)`].join("|"), "gu"), (l, c, f, D, h) => N(false, f ? `${c}${f}` : `${D}${h}`, "_", String.raw`\_`)), o = (l, c, f) => l.type === "sentence" && f === 0, s = (l, c, f) => mt(l.children[f - 1]);
            return i !== n.value && (e.match(void 0, o, s) || e.match(void 0, o, (l, c, f) => l.type === "emphasis" && f === 0, s)) && (i = i.replace(/^(\\?[*_])+/u, (l) => N(false, l, "\\", ""))), i;
          }
          case "whitespace": {
            let { next: i } = e, o = i && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/u.test(i.value) ? "never" : r.proseWrap;
            return Et(e, n.value, o);
          }
          case "emphasis": {
            let i;
            if (mt(n.children[0])) i = r.originalText[n.position.start.offset];
            else {
              let { previous: o, next: s } = e;
              i = (o == null ? void 0 : o.type) === "sentence" && ((a = M(false, o.children, -1)) == null ? void 0 : a.type) === "word" && !M(false, o.children, -1).hasTrailingPunctuation || (s == null ? void 0 : s.type) === "sentence" && ((u = s.children[0]) == null ? void 0 : u.type) === "word" && !s.children[0].hasLeadingPunctuation || e.hasAncestor((c) => c.type === "emphasis") ? "*" : "_";
            }
            return [i, V(e, r, t), i];
          }
          case "strong":
            return ["**", V(e, r, t), "**"];
          case "delete":
            return ["~~", V(e, r, t), "~~"];
          case "inlineCode": {
            let i = r.proseWrap === "preserve" ? n.value : N(false, n.value, `
`, " "), o = Gn(i, "`"), s = "`".repeat(o || 1), l = i.startsWith("`") || i.endsWith("`") || /^[\n ]/u.test(i) && /[\n ]$/u.test(i) && /[^\n ]/u.test(i) ? " " : "";
            return [s, l, i, l, s];
          }
          case "wikiLink": {
            let i = "";
            return r.proseWrap === "preserve" ? i = n.value : i = N(false, n.value, /[\t\n]+/gu, " "), ["[[", i, "]]"];
          }
          case "link":
            switch (r.originalText[n.position.start.offset]) {
              case "<": {
                let i = "mailto:";
                return ["<", n.url.startsWith(i) && r.originalText.slice(n.position.start.offset + 1, n.position.start.offset + 1 + i.length) !== i ? n.url.slice(i.length) : n.url, ">"];
              }
              case "[":
                return ["[", V(e, r, t), "](", Ct(n.url, ")"), Rr(n.title, r), ")"];
              default:
                return r.originalText.slice(n.position.start.offset, n.position.end.offset);
            }
          case "image":
            return ["![", n.alt || "", "](", Ct(n.url, ")"), Rr(n.title, r), ")"];
          case "blockquote":
            return ["> ", ve("> ", V(e, r, t))];
          case "heading":
            return ["#".repeat(n.depth) + " ", V(e, r, t)];
          case "code": {
            if (n.isIndented) {
              let s = " ".repeat(4);
              return ve(s, [s, Ce(n.value, L)]);
            }
            let i = r.__inJsTemplate ? "~" : "`", o = i.repeat(Math.max(3, Sr(n.value, i) + 1));
            return [o, n.lang || "", n.meta ? " " + n.meta : "", L, Ce(Ir(n, r.originalText), L), L, o];
          }
          case "html": {
            let { parent: i, isLast: o } = e, s = i.type === "root" && o ? n.value.trimEnd() : n.value, l = /^<!--.*-->$/su.test(s);
            return Ce(s, l ? L : _e(tr));
          }
          case "list": {
            let i = Ai(n, e.parent), o = ii(n, r);
            return V(e, r, t, { processor(s) {
              let l = f(), c = s.node;
              if (c.children.length === 2 && c.children[1].type === "html" && c.children[0].position.start.column !== c.children[1].position.start.column) return [l, yi(s, r, t, l)];
              return [l, ve(" ".repeat(l.length), yi(s, r, t, l))];
              function f() {
                let D = n.ordered ? (s.isFirst ? n.start : o ? 1 : n.start + s.index) + (i % 2 === 0 ? ". " : ") ") : i % 2 === 0 ? "- " : "* ";
                return n.isAligned || n.hasIndentedCodeblock ? ef(D, r) : D;
              }
            } });
          }
          case "thematicBreak": {
            let { ancestors: i } = e, o = i.findIndex((l) => l.type === "list");
            return o === -1 ? "---" : Ai(i[o], i[o + 1]) % 2 === 0 ? "***" : "---";
          }
          case "linkReference":
            return ["[", V(e, r, t), "]", n.referenceType === "full" ? bt(n) : n.referenceType === "collapsed" ? "[]" : ""];
          case "imageReference":
            switch (n.referenceType) {
              case "full":
                return ["![", n.alt || "", "]", bt(n)];
              default:
                return ["![", n.alt, "]", n.referenceType === "collapsed" ? "[]" : ""];
            }
          case "definition": {
            let i = r.proseWrap === "always" ? qr : " ";
            return ze([bt(n), ":", Ze([i, Ct(n.url), n.title === null ? "" : [i, Rr(n.title, r, false)]])]);
          }
          case "footnote":
            return ["[^", V(e, r, t), "]"];
          case "footnoteReference":
            return Bi(n);
          case "footnoteDefinition": {
            let i = n.children.length === 1 && n.children[0].type === "paragraph" && (r.proseWrap === "never" || r.proseWrap === "preserve" && n.children[0].position.start.line === n.children[0].position.end.line);
            return [Bi(n), ": ", i ? V(e, r, t) : ze([ve(" ".repeat(4), V(e, r, t, { processor: ({ isFirst: o }) => o ? ze([Tr, t()]) : t() }))])];
          }
          case "table":
            return mi(e, r, t);
          case "tableCell":
            return V(e, r, t);
          case "break":
            return /\s/u.test(r.originalText[n.position.start.offset]) ? ["  ", _e(tr)] : ["\\", L];
          case "liquidNode":
            return Ce(n.value, L);
          case "import":
          case "export":
          case "jsx":
            return n.value;
          case "esComment":
            return ["{/* ", n.value, " */}"];
          case "math":
            return ["$$", L, n.value ? [Ce(n.value, L), L] : "", "$$"];
          case "inlineMath":
            return r.originalText.slice(Oe(n), Pe(n));
          case "tableRow":
          case "listItem":
          case "text":
          default:
            throw new $n(n, "Markdown");
        }
      }
      function yi(e, r, t, n) {
        let { node: a } = e, u = a.checked === null ? "" : a.checked ? "[x] " : "[ ] ";
        return [u, V(e, r, t, { processor({ node: i, isFirst: o }) {
          if (o && i.type !== "list") return ve(" ".repeat(u.length), t());
          let s = " ".repeat(sf(r.tabWidth - n.length, 0, 3));
          return [s, ve(s, t())];
        } })];
      }
      function ef(e, r) {
        let t = n();
        return e + " ".repeat(t >= 4 ? 0 : t);
        function n() {
          let a = e.length % r.tabWidth;
          return a === 0 ? 0 : r.tabWidth - a;
        }
      }
      function Ai(e, r) {
        return rf(e, r, (t) => t.ordered === e.ordered);
      }
      function rf(e, r, t) {
        let n = -1;
        for (let a of r.children) if (a.type === e.type && t(a) ? n++ : n = -1, a === e) return n;
      }
      function tf(e, r, t) {
        let n = [], a = null, { children: u } = e.node;
        for (let [i, o] of u.entries()) switch (yt(o)) {
          case "start":
            a === null && (a = { index: i, offset: o.position.end.offset });
            break;
          case "end":
            a !== null && (n.push({ start: a, end: { index: i, offset: o.position.start.offset } }), a = null);
            break;
          default:
            break;
        }
        return V(e, r, t, { processor({ index: i }) {
          if (n.length > 0) {
            let o = n[0];
            if (i === o.start.index) return [xi(u[o.start.index]), r.originalText.slice(o.start.offset, o.end.offset), xi(u[o.end.index])];
            if (o.start.index < i && i < o.end.index) return false;
            if (i === o.end.index) return n.shift(), false;
          }
          return t();
        } });
      }
      function V(e, r, t, n = {}) {
        let { processor: a = t } = n, u = [];
        return e.each(() => {
          let i = a(e);
          i !== false && (u.length > 0 && nf(e) && (u.push(L), (uf(e, r) || ki(e)) && u.push(L), ki(e) && u.push(L)), u.push(i));
        }, "children"), u;
      }
      function xi(e) {
        if (e.type === "html") return e.value;
        if (e.type === "paragraph" && Array.isArray(e.children) && e.children.length === 1 && e.children[0].type === "esComment") return ["{/* ", e.children[0].value, " */}"];
      }
      function yt(e) {
        let r;
        if (e.type === "html") r = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/u);
        else {
          let t;
          e.type === "esComment" ? t = e : e.type === "paragraph" && e.children.length === 1 && e.children[0].type === "esComment" && (t = e.children[0]), t && (r = t.value.match(/^prettier-ignore(?:-(start|end))?$/u));
        }
        return r ? r[1] || "next" : false;
      }
      function nf({ node: e, parent: r }) {
        let t = ht.has(e.type), n = e.type === "html" && Pr.has(r.type);
        return !t && !n;
      }
      function wi(e, r) {
        return e.type === "listItem" && (e.spread || r.originalText.charAt(e.position.end.offset - 1) === `
`);
      }
      function uf({ node: e, previous: r, parent: t }, n) {
        if (wi(r, n)) return true;
        let i = r.type === e.type && Ql.has(e.type), o = t.type === "listItem" && !wi(t, n), s = yt(r) === "next", l = e.type === "html" && r.type === "html" && r.position.end.line + 1 === e.position.start.line, c = e.type === "html" && t.type === "listItem" && r.type === "paragraph" && r.position.end.line + 1 === e.position.start.line;
        return !(i || o || s || l || c);
      }
      function ki({ node: e, previous: r }) {
        let t = r.type === "list", n = e.type === "code" && e.isIndented;
        return t && n;
      }
      function af(e) {
        let r = e.findAncestor((t) => t.type === "linkReference" || t.type === "imageReference");
        return r && (r.type !== "linkReference" || r.referenceType !== "full");
      }
      var of = (e, r) => {
        for (let t of r) e = N(false, e, t, encodeURIComponent(t));
        return e;
      };
      function Ct(e, r = []) {
        let t = [" ", ...Array.isArray(r) ? r : [r]];
        return new RegExp(t.map((n) => Be(n)).join("|"), "u").test(e) ? `<${of(e, "<>")}>` : e;
      }
      function Rr(e, r, t = true) {
        if (!e) return "";
        if (t) return " " + Rr(e, r, false);
        if (e = N(false, e, /\\(?=["')])/gu, ""), e.includes('"') && e.includes("'") && !e.includes(")")) return `(${e})`;
        let n = jn(e, r.singleQuote);
        return e = N(false, e, "\\", "\\\\"), e = N(false, e, n, `\\${n}`), `${n}${e}${n}`;
      }
      function sf(e, r, t) {
        return e < r ? r : e > t ? t : e;
      }
      function cf(e) {
        return e.index > 0 && yt(e.previous) === "next";
      }
      function bt(e) {
        return `[${(0, qi.default)(e.label)}]`;
      }
      function Bi(e) {
        return `[^${e.label}]`;
      }
      var lf = { preprocess: gi, print: Zl, embed: ui, massageAstNode: Zn, hasPrettierIgnore: cf, insertPragma: Jn, getVisitorKeys: si }, Ti = lf;
      var _i = [{ linguistLanguageId: 222, name: "Markdown", type: "prose", color: "#083fa1", aliases: ["md", "pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr", "README"], tmScope: "text.md", parsers: ["markdown"], vscodeLanguageIds: ["markdown"] }, { linguistLanguageId: 222, name: "MDX", type: "prose", color: "#083fa1", aliases: ["md", "pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".mdx"], filenames: [], tmScope: "text.md", parsers: ["mdx"], vscodeLanguageIds: ["mdx"] }];
      var At = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
      var ff = { proseWrap: At.proseWrap, singleQuote: At.singleQuote }, Si = ff;
      var On = {};
      Pn(On, { markdown: () => km, mdx: () => Bm, remark: () => km });
      var Wc = Ue(Pi(), 1), Kc = Ue(Wi(), 1), Jc = Ue(Gs(), 1), Xc = Ue(Ic(), 1);
      var vm = /^import\s/u, Em = /^export\s/u, Nc = String.raw`[a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*|`, Rc = /<!---->|<!---?[^>-](?:-?[^-])*-->/u, Cm = /^\{\s*\/\*(.*)\*\/\s*\}/u, bm = `

`, Uc = (e) => vm.test(e), Sn = (e) => Em.test(e), zc = (e, r) => {
        let t = r.indexOf(bm), n = r.slice(0, t);
        if (Sn(n) || Uc(n)) return e(n)({ type: Sn(n) ? "export" : "import", value: n });
      }, Mc = (e, r) => {
        let t = Cm.exec(r);
        if (t) return e(t[0])({ type: "esComment", value: t[1].trim() });
      };
      zc.locator = (e) => Sn(e) || Uc(e) ? -1 : 1;
      Mc.locator = (e, r) => e.indexOf("{", r);
      var Yc = function() {
        let { Parser: e } = this, { blockTokenizers: r, blockMethods: t, inlineTokenizers: n, inlineMethods: a } = e.prototype;
        r.esSyntax = zc, n.esComment = Mc, t.splice(t.indexOf("paragraph"), 0, "esSyntax"), a.splice(a.indexOf("text"), 0, "esComment");
      };
      var ym = function() {
        let e = this.Parser.prototype;
        e.blockMethods = ["frontMatter", ...e.blockMethods], e.blockTokenizers.frontMatter = r;
        function r(t, n) {
          let a = ir(n);
          if (a.frontMatter) return t(a.frontMatter.raw)(a.frontMatter);
        }
        r.onlyAtStart = true;
      }, Gc = ym;
      function Am() {
        return (e) => ye(e, (r, t, [n]) => r.type !== "html" || Rc.test(r.value) || Pr.has(n.type) ? r : { ...r, type: "jsx" });
      }
      var Vc = Am;
      var xm = function() {
        let e = this.Parser.prototype, r = e.inlineMethods;
        r.splice(r.indexOf("text"), 0, "liquid"), e.inlineTokenizers.liquid = t;
        function t(n, a) {
          let u = a.match(/^(\{%.*?%\}|\{\{.*?\}\})/su);
          if (u) return n(u[0])({ type: "liquidNode", value: u[0] });
        }
        t.locator = function(n, a) {
          return n.indexOf("{", a);
        };
      }, jc = xm;
      var wm = function() {
        let e = "wikiLink", r = /^\[\[(?<linkContents>.+?)\]\]/su, t = this.Parser.prototype, n = t.inlineMethods;
        n.splice(n.indexOf("link"), 0, e), t.inlineTokenizers.wikiLink = a;
        function a(u, i) {
          let o = r.exec(i);
          if (o) {
            let s = o.groups.linkContents.trim();
            return u(o[0])({ type: e, value: s });
          }
        }
        a.locator = function(u, i) {
          return u.indexOf("[", i);
        };
      }, $c = wm;
      function Qc({ isMDX: e }) {
        return (r) => {
          let t = (0, Xc.default)().use(Jc.default, { commonmark: true, ...e && { blocks: [Nc] } }).use(Wc.default).use(Gc).use(Kc.default).use(e ? Yc : Hc).use(jc).use(e ? Vc : Hc).use($c);
          return t.run(t.parse(r));
        };
      }
      function Hc() {
      }
      var Zc = { astFormat: "mdast", hasPragma: Kn, locStart: Oe, locEnd: Pe }, km = { ...Zc, parse: Qc({ isMDX: false }) }, Bm = { ...Zc, parse: Qc({ isMDX: true }) };
      var qm = { mdast: Ti };
      return ul(Tm);
    });
  }
});
export default require_markdown();
//# sourceMappingURL=prettier_parser-markdown.js.map
