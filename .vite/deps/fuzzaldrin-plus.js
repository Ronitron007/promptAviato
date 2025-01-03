import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// ../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/scorer.js
var require_scorer = __commonJS({
  "../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/scorer.js"(exports) {
    (function() {
      var AcronymResult, computeScore, emptyAcronymResult, isAcronymFullWord, isMatch, isSeparator, isWordEnd, isWordStart, miss_coeff, pos_bonus, scoreAcronyms, scoreCharacter, scoreConsecutives, scoreExact, scoreExactMatch, scorePattern, scorePosition, scoreSize, tau_size, wm;
      wm = 150;
      pos_bonus = 20;
      tau_size = 150;
      miss_coeff = 0.75;
      exports.score = function(string, query, options) {
        var allowErrors, preparedQuery, score, string_lw;
        preparedQuery = options.preparedQuery, allowErrors = options.allowErrors;
        if (!(allowErrors || isMatch(string, preparedQuery.core_lw, preparedQuery.core_up))) {
          return 0;
        }
        string_lw = string.toLowerCase();
        score = computeScore(string, string_lw, preparedQuery);
        return Math.ceil(score);
      };
      exports.isMatch = isMatch = function(subject, query_lw, query_up) {
        var i, j, m, n, qj_lw, qj_up, si;
        m = subject.length;
        n = query_lw.length;
        if (!m || n > m) {
          return false;
        }
        i = -1;
        j = -1;
        while (++j < n) {
          qj_lw = query_lw.charCodeAt(j);
          qj_up = query_up.charCodeAt(j);
          while (++i < m) {
            si = subject.charCodeAt(i);
            if (si === qj_lw || si === qj_up) {
              break;
            }
          }
          if (i === m) {
            return false;
          }
        }
        return true;
      };
      exports.computeScore = computeScore = function(subject, subject_lw, preparedQuery) {
        var acro, acro_score, align, csc_diag, csc_row, csc_score, csc_should_rebuild, i, j, m, miss_budget, miss_left, n, pos, query, query_lw, record_miss, score, score_diag, score_row, score_up, si_lw, start, sz;
        query = preparedQuery.query;
        query_lw = preparedQuery.query_lw;
        m = subject.length;
        n = query.length;
        acro = scoreAcronyms(subject, subject_lw, query, query_lw);
        acro_score = acro.score;
        if (acro.count === n) {
          return scoreExact(n, m, acro_score, acro.pos);
        }
        pos = subject_lw.indexOf(query_lw);
        if (pos > -1) {
          return scoreExactMatch(subject, subject_lw, query, query_lw, pos, n, m);
        }
        score_row = new Array(n);
        csc_row = new Array(n);
        sz = scoreSize(n, m);
        miss_budget = Math.ceil(miss_coeff * n) + 5;
        miss_left = miss_budget;
        csc_should_rebuild = true;
        j = -1;
        while (++j < n) {
          score_row[j] = 0;
          csc_row[j] = 0;
        }
        i = -1;
        while (++i < m) {
          si_lw = subject_lw[i];
          if (!si_lw.charCodeAt(0) in preparedQuery.charCodes) {
            if (csc_should_rebuild) {
              j = -1;
              while (++j < n) {
                csc_row[j] = 0;
              }
              csc_should_rebuild = false;
            }
            continue;
          }
          score = 0;
          score_diag = 0;
          csc_diag = 0;
          record_miss = true;
          csc_should_rebuild = true;
          j = -1;
          while (++j < n) {
            score_up = score_row[j];
            if (score_up > score) {
              score = score_up;
            }
            csc_score = 0;
            if (query_lw[j] === si_lw) {
              start = isWordStart(i, subject, subject_lw);
              csc_score = csc_diag > 0 ? csc_diag : scoreConsecutives(subject, subject_lw, query, query_lw, i, j, start);
              align = score_diag + scoreCharacter(i, j, start, acro_score, csc_score);
              if (align > score) {
                score = align;
                miss_left = miss_budget;
              } else {
                if (record_miss && --miss_left <= 0) {
                  return Math.max(score, score_row[n - 1]) * sz;
                }
                record_miss = false;
              }
            }
            score_diag = score_up;
            csc_diag = csc_row[j];
            csc_row[j] = csc_score;
            score_row[j] = score;
          }
        }
        score = score_row[n - 1];
        return score * sz;
      };
      exports.isWordStart = isWordStart = function(pos, subject, subject_lw) {
        var curr_s, prev_s;
        if (pos === 0) {
          return true;
        }
        curr_s = subject[pos];
        prev_s = subject[pos - 1];
        return isSeparator(prev_s) || curr_s !== subject_lw[pos] && prev_s === subject_lw[pos - 1];
      };
      exports.isWordEnd = isWordEnd = function(pos, subject, subject_lw, len) {
        var curr_s, next_s;
        if (pos === len - 1) {
          return true;
        }
        curr_s = subject[pos];
        next_s = subject[pos + 1];
        return isSeparator(next_s) || curr_s === subject_lw[pos] && next_s !== subject_lw[pos + 1];
      };
      isSeparator = function(c) {
        return c === " " || c === "." || c === "-" || c === "_" || c === "/" || c === "\\";
      };
      scorePosition = function(pos) {
        var sc;
        if (pos < pos_bonus) {
          sc = pos_bonus - pos;
          return 100 + sc * sc;
        } else {
          return Math.max(100 + pos_bonus - pos, 0);
        }
      };
      exports.scoreSize = scoreSize = function(n, m) {
        return tau_size / (tau_size + Math.abs(m - n));
      };
      scoreExact = function(n, m, quality, pos) {
        return 2 * n * (wm * quality + scorePosition(pos)) * scoreSize(n, m);
      };
      exports.scorePattern = scorePattern = function(count, len, sameCase, start, end) {
        var bonus, sz;
        sz = count;
        bonus = 6;
        if (sameCase === count) {
          bonus += 2;
        }
        if (start) {
          bonus += 3;
        }
        if (end) {
          bonus += 1;
        }
        if (count === len) {
          if (start) {
            if (sameCase === len) {
              sz += 2;
            } else {
              sz += 1;
            }
          }
          if (end) {
            bonus += 1;
          }
        }
        return sameCase + sz * (sz + bonus);
      };
      exports.scoreCharacter = scoreCharacter = function(i, j, start, acro_score, csc_score) {
        var posBonus;
        posBonus = scorePosition(i);
        if (start) {
          return posBonus + wm * ((acro_score > csc_score ? acro_score : csc_score) + 10);
        }
        return posBonus + wm * csc_score;
      };
      exports.scoreConsecutives = scoreConsecutives = function(subject, subject_lw, query, query_lw, i, j, startOfWord) {
        var k, m, mi, n, nj, sameCase, sz;
        m = subject.length;
        n = query.length;
        mi = m - i;
        nj = n - j;
        k = mi < nj ? mi : nj;
        sameCase = 0;
        sz = 0;
        if (query[j] === subject[i]) {
          sameCase++;
        }
        while (++sz < k && query_lw[++j] === subject_lw[++i]) {
          if (query[j] === subject[i]) {
            sameCase++;
          }
        }
        if (sz < k) {
          i--;
        }
        if (sz === 1) {
          return 1 + 2 * sameCase;
        }
        return scorePattern(sz, n, sameCase, startOfWord, isWordEnd(i, subject, subject_lw, m));
      };
      exports.scoreExactMatch = scoreExactMatch = function(subject, subject_lw, query, query_lw, pos, n, m) {
        var end, i, pos2, sameCase, start;
        start = isWordStart(pos, subject, subject_lw);
        if (!start) {
          pos2 = subject_lw.indexOf(query_lw, pos + 1);
          if (pos2 > -1) {
            start = isWordStart(pos2, subject, subject_lw);
            if (start) {
              pos = pos2;
            }
          }
        }
        i = -1;
        sameCase = 0;
        while (++i < n) {
          if (query[pos + i] === subject[i]) {
            sameCase++;
          }
        }
        end = isWordEnd(pos + n - 1, subject, subject_lw, m);
        return scoreExact(n, m, scorePattern(n, n, sameCase, start, end), pos);
      };
      AcronymResult = /* @__PURE__ */ function() {
        function AcronymResult2(score, pos, count) {
          this.score = score;
          this.pos = pos;
          this.count = count;
        }
        return AcronymResult2;
      }();
      emptyAcronymResult = new AcronymResult(0, 0.1, 0);
      exports.scoreAcronyms = scoreAcronyms = function(subject, subject_lw, query, query_lw) {
        var count, fullWord, i, j, m, n, qj_lw, sameCase, score, sepCount, sumPos;
        m = subject.length;
        n = query.length;
        if (!(m > 1 && n > 1)) {
          return emptyAcronymResult;
        }
        count = 0;
        sepCount = 0;
        sumPos = 0;
        sameCase = 0;
        i = -1;
        j = -1;
        while (++j < n) {
          qj_lw = query_lw[j];
          if (isSeparator(qj_lw)) {
            i = subject_lw.indexOf(qj_lw, i + 1);
            if (i > -1) {
              sepCount++;
              continue;
            } else {
              break;
            }
          }
          while (++i < m) {
            if (qj_lw === subject_lw[i] && isWordStart(i, subject, subject_lw)) {
              if (query[j] === subject[i]) {
                sameCase++;
              }
              sumPos += i;
              count++;
              break;
            }
          }
          if (i === m) {
            break;
          }
        }
        if (count < 2) {
          return emptyAcronymResult;
        }
        fullWord = count === n ? isAcronymFullWord(subject, subject_lw, query, count) : false;
        score = scorePattern(count, n, sameCase, true, fullWord);
        return new AcronymResult(score, sumPos / count, count + sepCount);
      };
      isAcronymFullWord = function(subject, subject_lw, query, nbAcronymInQuery) {
        var count, i, m, n;
        m = subject.length;
        n = query.length;
        count = 0;
        if (m > 12 * n) {
          return false;
        }
        i = -1;
        while (++i < m) {
          if (isWordStart(i, subject, subject_lw) && ++count > nbAcronymInQuery) {
            return false;
          }
        }
        return true;
      };
    }).call(exports);
  }
});

// ../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/pathScorer.js
var require_pathScorer = __commonJS({
  "../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/pathScorer.js"(exports) {
    (function() {
      var computeScore, countDir, file_coeff, getExtension, getExtensionScore, isMatch, scorePath, scoreSize, tau_depth, _ref;
      _ref = require_scorer(), isMatch = _ref.isMatch, computeScore = _ref.computeScore, scoreSize = _ref.scoreSize;
      tau_depth = 20;
      file_coeff = 2.5;
      exports.score = function(string, query, options) {
        var allowErrors, preparedQuery, score, string_lw;
        preparedQuery = options.preparedQuery, allowErrors = options.allowErrors;
        if (!(allowErrors || isMatch(string, preparedQuery.core_lw, preparedQuery.core_up))) {
          return 0;
        }
        string_lw = string.toLowerCase();
        score = computeScore(string, string_lw, preparedQuery);
        score = scorePath(string, string_lw, score, options);
        return Math.ceil(score);
      };
      scorePath = function(subject, subject_lw, fullPathScore, options) {
        var alpha, basePathScore, basePos, depth, end, extAdjust, fileLength, pathSeparator, preparedQuery, useExtensionBonus;
        if (fullPathScore === 0) {
          return 0;
        }
        preparedQuery = options.preparedQuery, useExtensionBonus = options.useExtensionBonus, pathSeparator = options.pathSeparator;
        end = subject.length - 1;
        while (subject[end] === pathSeparator) {
          end--;
        }
        basePos = subject.lastIndexOf(pathSeparator, end);
        fileLength = end - basePos;
        extAdjust = 1;
        if (useExtensionBonus) {
          extAdjust += getExtensionScore(subject_lw, preparedQuery.ext, basePos, end, 2);
          fullPathScore *= extAdjust;
        }
        if (basePos === -1) {
          return fullPathScore;
        }
        depth = preparedQuery.depth;
        while (basePos > -1 && depth-- > 0) {
          basePos = subject.lastIndexOf(pathSeparator, basePos - 1);
        }
        basePathScore = basePos === -1 ? fullPathScore : extAdjust * computeScore(subject.slice(basePos + 1, end + 1), subject_lw.slice(basePos + 1, end + 1), preparedQuery);
        alpha = 0.5 * tau_depth / (tau_depth + countDir(subject, end + 1, pathSeparator));
        return alpha * basePathScore + (1 - alpha) * fullPathScore * scoreSize(0, file_coeff * fileLength);
      };
      exports.countDir = countDir = function(path, end, pathSeparator) {
        var count, i;
        if (end < 1) {
          return 0;
        }
        count = 0;
        i = -1;
        while (++i < end && path[i] === pathSeparator) {
          continue;
        }
        while (++i < end) {
          if (path[i] === pathSeparator) {
            count++;
            while (++i < end && path[i] === pathSeparator) {
              continue;
            }
          }
        }
        return count;
      };
      exports.getExtension = getExtension = function(str) {
        var pos;
        pos = str.lastIndexOf(".");
        if (pos < 0) {
          return "";
        } else {
          return str.substr(pos + 1);
        }
      };
      getExtensionScore = function(candidate, ext, startPos, endPos, maxDepth) {
        var m, matched, n, pos;
        if (!ext.length) {
          return 0;
        }
        pos = candidate.lastIndexOf(".", endPos);
        if (!(pos > startPos)) {
          return 0;
        }
        n = ext.length;
        m = endPos - pos;
        if (m < n) {
          n = m;
          m = ext.length;
        }
        pos++;
        matched = -1;
        while (++matched < n) {
          if (candidate[pos + matched] !== ext[matched]) {
            break;
          }
        }
        if (matched === 0 && maxDepth > 0) {
          return 0.9 * getExtensionScore(candidate, ext, startPos, pos - 2, maxDepth - 1);
        }
        return matched / m;
      };
    }).call(exports);
  }
});

// ../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/query.js
var require_query = __commonJS({
  "../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/query.js"(exports, module) {
    (function() {
      var Query, coreChars, countDir, getCharCodes, getExtension, opt_char_re, truncatedUpperCase, _ref;
      _ref = require_pathScorer(), countDir = _ref.countDir, getExtension = _ref.getExtension;
      module.exports = Query = /* @__PURE__ */ function() {
        function Query2(query, _arg) {
          var optCharRegEx, pathSeparator, _ref1;
          _ref1 = _arg != null ? _arg : {}, optCharRegEx = _ref1.optCharRegEx, pathSeparator = _ref1.pathSeparator;
          if (!(query && query.length)) {
            return null;
          }
          this.query = query;
          this.query_lw = query.toLowerCase();
          this.core = coreChars(query, optCharRegEx);
          this.core_lw = this.core.toLowerCase();
          this.core_up = truncatedUpperCase(this.core);
          this.depth = countDir(query, query.length, pathSeparator);
          this.ext = getExtension(this.query_lw);
          this.charCodes = getCharCodes(this.query_lw);
        }
        return Query2;
      }();
      opt_char_re = /[ _\-:\/\\]/g;
      coreChars = function(query, optCharRegEx) {
        if (optCharRegEx == null) {
          optCharRegEx = opt_char_re;
        }
        return query.replace(optCharRegEx, "");
      };
      truncatedUpperCase = function(str) {
        var char, upper, _i, _len;
        upper = "";
        for (_i = 0, _len = str.length; _i < _len; _i++) {
          char = str[_i];
          upper += char.toUpperCase()[0];
        }
        return upper;
      };
      getCharCodes = function(str) {
        var charCodes, i, len;
        len = str.length;
        i = -1;
        charCodes = [];
        while (++i < len) {
          charCodes[str.charCodeAt(i)] = true;
        }
        return charCodes;
      };
    }).call(exports);
  }
});

// ../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/filter.js
var require_filter = __commonJS({
  "../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/filter.js"(exports, module) {
    (function() {
      var Query, pathScorer, pluckCandidates, scorer, sortCandidates;
      scorer = require_scorer();
      pathScorer = require_pathScorer();
      Query = require_query();
      pluckCandidates = function(a) {
        return a.candidate;
      };
      sortCandidates = function(a, b) {
        return b.score - a.score;
      };
      module.exports = function(candidates, query, options) {
        var bKey, candidate, key, maxInners, maxResults, score, scoreProvider, scoredCandidates, spotLeft, string, usePathScoring, _i, _len;
        scoredCandidates = [];
        key = options.key, maxResults = options.maxResults, maxInners = options.maxInners, usePathScoring = options.usePathScoring;
        spotLeft = maxInners != null && maxInners > 0 ? maxInners : candidates.length + 1;
        bKey = key != null;
        scoreProvider = usePathScoring ? pathScorer : scorer;
        for (_i = 0, _len = candidates.length; _i < _len; _i++) {
          candidate = candidates[_i];
          string = bKey ? candidate[key] : candidate;
          if (!string) {
            continue;
          }
          score = scoreProvider.score(string, query, options);
          if (score > 0) {
            scoredCandidates.push({
              candidate,
              score
            });
            if (!--spotLeft) {
              break;
            }
          }
        }
        scoredCandidates.sort(sortCandidates);
        candidates = scoredCandidates.map(pluckCandidates);
        if (maxResults != null) {
          candidates = candidates.slice(0, maxResults);
        }
        return candidates;
      };
    }).call(exports);
  }
});

// ../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/matcher.js
var require_matcher = __commonJS({
  "../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/matcher.js"(exports) {
    (function() {
      var basenameMatch, computeMatch, isMatch, isWordStart, match, mergeMatches, scoreAcronyms, scoreCharacter, scoreConsecutives, _ref;
      _ref = require_scorer(), isMatch = _ref.isMatch, isWordStart = _ref.isWordStart, scoreConsecutives = _ref.scoreConsecutives, scoreCharacter = _ref.scoreCharacter, scoreAcronyms = _ref.scoreAcronyms;
      exports.match = match = function(string, query, options) {
        var allowErrors, baseMatches, matches, pathSeparator, preparedQuery, string_lw;
        allowErrors = options.allowErrors, preparedQuery = options.preparedQuery, pathSeparator = options.pathSeparator;
        if (!(allowErrors || isMatch(string, preparedQuery.core_lw, preparedQuery.core_up))) {
          return [];
        }
        string_lw = string.toLowerCase();
        matches = computeMatch(string, string_lw, preparedQuery);
        if (matches.length === 0) {
          return matches;
        }
        if (string.indexOf(pathSeparator) > -1) {
          baseMatches = basenameMatch(string, string_lw, preparedQuery, pathSeparator);
          matches = mergeMatches(matches, baseMatches);
        }
        return matches;
      };
      exports.wrap = function(string, query, options) {
        var matchIndex, matchPos, matchPositions, output, strPos, tagClass, tagClose, tagOpen, _ref1;
        if (options.wrap != null) {
          _ref1 = options.wrap, tagClass = _ref1.tagClass, tagOpen = _ref1.tagOpen, tagClose = _ref1.tagClose;
        }
        if (tagClass == null) {
          tagClass = "highlight";
        }
        if (tagOpen == null) {
          tagOpen = '<strong class="' + tagClass + '">';
        }
        if (tagClose == null) {
          tagClose = "</strong>";
        }
        if (string === query) {
          return tagOpen + string + tagClose;
        }
        matchPositions = match(string, query, options);
        if (matchPositions.length === 0) {
          return string;
        }
        output = "";
        matchIndex = -1;
        strPos = 0;
        while (++matchIndex < matchPositions.length) {
          matchPos = matchPositions[matchIndex];
          if (matchPos > strPos) {
            output += string.substring(strPos, matchPos);
            strPos = matchPos;
          }
          while (++matchIndex < matchPositions.length) {
            if (matchPositions[matchIndex] === matchPos + 1) {
              matchPos++;
            } else {
              matchIndex--;
              break;
            }
          }
          matchPos++;
          if (matchPos > strPos) {
            output += tagOpen;
            output += string.substring(strPos, matchPos);
            output += tagClose;
            strPos = matchPos;
          }
        }
        if (strPos <= string.length - 1) {
          output += string.substring(strPos);
        }
        return output;
      };
      basenameMatch = function(subject, subject_lw, preparedQuery, pathSeparator) {
        var basePos, depth, end;
        end = subject.length - 1;
        while (subject[end] === pathSeparator) {
          end--;
        }
        basePos = subject.lastIndexOf(pathSeparator, end);
        if (basePos === -1) {
          return [];
        }
        depth = preparedQuery.depth;
        while (depth-- > 0) {
          basePos = subject.lastIndexOf(pathSeparator, basePos - 1);
          if (basePos === -1) {
            return [];
          }
        }
        basePos++;
        end++;
        return computeMatch(subject.slice(basePos, end), subject_lw.slice(basePos, end), preparedQuery, basePos);
      };
      mergeMatches = function(a, b) {
        var ai, bj, i, j, m, n, out;
        m = a.length;
        n = b.length;
        if (n === 0) {
          return a.slice();
        }
        if (m === 0) {
          return b.slice();
        }
        i = -1;
        j = 0;
        bj = b[j];
        out = [];
        while (++i < m) {
          ai = a[i];
          while (bj <= ai && ++j < n) {
            if (bj < ai) {
              out.push(bj);
            }
            bj = b[j];
          }
          out.push(ai);
        }
        while (j < n) {
          out.push(b[j++]);
        }
        return out;
      };
      computeMatch = function(subject, subject_lw, preparedQuery, offset) {
        var DIAGONAL, LEFT, STOP, UP, acro_score, align, backtrack, csc_diag, csc_row, csc_score, i, j, m, matches, move, n, pos, query, query_lw, score, score_diag, score_row, score_up, si_lw, start, trace;
        if (offset == null) {
          offset = 0;
        }
        query = preparedQuery.query;
        query_lw = preparedQuery.query_lw;
        m = subject.length;
        n = query.length;
        acro_score = scoreAcronyms(subject, subject_lw, query, query_lw).score;
        score_row = new Array(n);
        csc_row = new Array(n);
        STOP = 0;
        UP = 1;
        LEFT = 2;
        DIAGONAL = 3;
        trace = new Array(m * n);
        pos = -1;
        j = -1;
        while (++j < n) {
          score_row[j] = 0;
          csc_row[j] = 0;
        }
        i = -1;
        while (++i < m) {
          score = 0;
          score_up = 0;
          csc_diag = 0;
          si_lw = subject_lw[i];
          j = -1;
          while (++j < n) {
            csc_score = 0;
            align = 0;
            score_diag = score_up;
            if (query_lw[j] === si_lw) {
              start = isWordStart(i, subject, subject_lw);
              csc_score = csc_diag > 0 ? csc_diag : scoreConsecutives(subject, subject_lw, query, query_lw, i, j, start);
              align = score_diag + scoreCharacter(i, j, start, acro_score, csc_score);
            }
            score_up = score_row[j];
            csc_diag = csc_row[j];
            if (score > score_up) {
              move = LEFT;
            } else {
              score = score_up;
              move = UP;
            }
            if (align > score) {
              score = align;
              move = DIAGONAL;
            } else {
              csc_score = 0;
            }
            score_row[j] = score;
            csc_row[j] = csc_score;
            trace[++pos] = score > 0 ? move : STOP;
          }
        }
        i = m - 1;
        j = n - 1;
        pos = i * n + j;
        backtrack = true;
        matches = [];
        while (backtrack && i >= 0 && j >= 0) {
          switch (trace[pos]) {
            case UP:
              i--;
              pos -= n;
              break;
            case LEFT:
              j--;
              pos--;
              break;
            case DIAGONAL:
              matches.push(i + offset);
              j--;
              i--;
              pos -= n + 1;
              break;
            default:
              backtrack = false;
          }
        }
        matches.reverse();
        return matches;
      };
    }).call(exports);
  }
});

// ../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/fuzzaldrin.js
var require_fuzzaldrin = __commonJS({
  "../../../../../aviato-ui/node_modules/fuzzaldrin-plus/lib/fuzzaldrin.js"(exports, module) {
    (function() {
      var Query, defaultPathSeparator, filter, matcher, parseOptions, pathScorer, preparedQueryCache, scorer;
      filter = require_filter();
      matcher = require_matcher();
      scorer = require_scorer();
      pathScorer = require_pathScorer();
      Query = require_query();
      preparedQueryCache = null;
      defaultPathSeparator = (typeof process !== "undefined" && process !== null ? process.platform : void 0) === "win32" ? "\\" : "/";
      module.exports = {
        filter: function(candidates, query, options) {
          if (options == null) {
            options = {};
          }
          if (!((query != null ? query.length : void 0) && (candidates != null ? candidates.length : void 0))) {
            return [];
          }
          options = parseOptions(options, query);
          return filter(candidates, query, options);
        },
        score: function(string, query, options) {
          if (options == null) {
            options = {};
          }
          if (!((string != null ? string.length : void 0) && (query != null ? query.length : void 0))) {
            return 0;
          }
          options = parseOptions(options, query);
          if (options.usePathScoring) {
            return pathScorer.score(string, query, options);
          } else {
            return scorer.score(string, query, options);
          }
        },
        match: function(string, query, options) {
          var _i, _ref, _results;
          if (options == null) {
            options = {};
          }
          if (!string) {
            return [];
          }
          if (!query) {
            return [];
          }
          if (string === query) {
            return (function() {
              _results = [];
              for (var _i2 = 0, _ref2 = string.length; 0 <= _ref2 ? _i2 < _ref2 : _i2 > _ref2; 0 <= _ref2 ? _i2++ : _i2--) {
                _results.push(_i2);
              }
              return _results;
            }).apply(this);
          }
          options = parseOptions(options, query);
          return matcher.match(string, query, options);
        },
        wrap: function(string, query, options) {
          if (options == null) {
            options = {};
          }
          if (!string) {
            return [];
          }
          if (!query) {
            return [];
          }
          options = parseOptions(options, query);
          return matcher.wrap(string, query, options);
        },
        prepareQuery: function(query, options) {
          if (options == null) {
            options = {};
          }
          options = parseOptions(options, query);
          return options.preparedQuery;
        }
      };
      parseOptions = function(options, query) {
        if (options.allowErrors == null) {
          options.allowErrors = false;
        }
        if (options.usePathScoring == null) {
          options.usePathScoring = true;
        }
        if (options.useExtensionBonus == null) {
          options.useExtensionBonus = false;
        }
        if (options.pathSeparator == null) {
          options.pathSeparator = defaultPathSeparator;
        }
        if (options.optCharRegEx == null) {
          options.optCharRegEx = null;
        }
        if (options.wrap == null) {
          options.wrap = null;
        }
        if (options.preparedQuery == null) {
          options.preparedQuery = preparedQueryCache && preparedQueryCache.query === query ? preparedQueryCache : preparedQueryCache = new Query(query, options);
        }
        return options;
      };
    }).call(exports);
  }
});
export default require_fuzzaldrin();
//# sourceMappingURL=fuzzaldrin-plus.js.map
