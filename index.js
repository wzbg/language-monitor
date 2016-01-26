/* 
* @Author: zyc
* @Date:   2015-12-06 03:17:09
* @Last Modified by:   zyc
* @Last Modified time: 2016-01-26 14:22:14
*/
'use strict'

const LanguageDetect = require('languagedetect')
const lngDetector = new LanguageDetect()

const unicode = {
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
}

module.exports = (sample, limit) => {
  if (!sample) return []
  const languages = detectLanguage(sample, limit)
  for (let langcode in unicode) {
    let count = 0
    for (let regex of unicode[langcode]) {
      const matcher = sample.match(regex)
      if (matcher) count += matcher.length
    }
    if (count) languages.push([langcode, count / sample.length])
  }
  languages.sort((a, b) => { return b[1] - a[1] })
  const result = []
  for (let language of languages) {
    if (result.length == limit) break
    result.push({ code: language[0], rate: language[1] })
  }
  return result
}

const detectLanguage = (sample, limit) => {
  let languages = lngDetector.detect(sample, limit)
  let length = sample.length, count = 1
  while (!languages.length) {
    count *= 2
    const size = length / count
    if (size < 1) break
    let start = 0
    while (start < length) {
      const text = sample.substring(start, start += size)
      languages = lngDetector.detect(text, limit)
      if (languages.length) break
    }
  }
  return languages
}