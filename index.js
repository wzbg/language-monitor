var LanguageDetect = require('languagedetect');
var lngDetector = new LanguageDetect();

var unicode = {
  chinese: [
    /[\u4E00-\u9FBF]/g, // CJK 统一表意符号 (CJK Unified Ideographs)
    /[\u4DC0-\u4DFF]/g, // 易经六十四卦符号 (Yijing Hexagrams Symbols)
  ],
  japanese: [
    /[\u3040-\u309F]/g, // 日文平假名 (Hiragana)
    /[\u30A0-\u30FF]/g, // 日文片假名 (Katakana)
    /[\u31F0-\u31FF]/g, // 日文片假名语音扩展 (Katakana Phonetic Extensions)
  ],
  korean: [
    /[\u1100-\u11FF]/g, // 朝鲜文 (Hangul Jamo)
    /[\u3130-\u318F]/g, // 朝鲜文兼容字母 (Hangul Compatibility Jamo)
    /[\uAC00-\uD7AF]/g, // 朝鲜文音节 (Hangul Syllables)
  ],
};

module.exports = function (sample, limit) {
  if (!sample) return [];
  var languages = lngDetector.detect(sample, limit);
  for (var langcode in unicode) {
    var count = 0;
    for (var regex of unicode[langcode]) {
      var matcher = sample.match(regex);
      if (matcher) count += matcher.length;
    }
    if (count) languages.push([langcode, count/sample.length]);
  }
  languages.sort((a, b) => { return b[1] - a[1] });
  var result = [];
  for (var language of languages) {
    if (result.length == limit) break;
    result.push({ code: language[0], rate: language[1] });
  }
  return result;
};