# language-monitor

> Nodejs language monitor library using languagedetect and unicode

## Install

```
$ npm install --save language-monitor
```


## Usage

```js
const languageMonitor = require('language-monitor');

console.log(languageMonitor('为languagedetect添加中にほん한语言检测'));

/*
[ { code: 'chinese', rate: 0.3076923076923077 },
  { code: 'danish', rate: 0.11846153846153851 },
  { code: 'norwegian', rate: 0.11576923076923074 },
  { code: 'japanese', rate: 0.11538461538461539 },
  { code: 'dutch', rate: 0.09307692307692306 },
  { code: 'swedish', rate: 0.0823076923076923 },
  { code: 'cebuano', rate: 0.07346153846153847 },
  { code: 'tagalog', rate: 0.07282051282051294 },
  { code: 'german', rate: 0.062051282051282186 },
  { code: 'indonesian', rate: 0.05858974358974367 },
  { code: 'turkish', rate: 0.051794871794871855 },
  { code: 'korean', rate: 0.038461538461538464 },
  { code: 'portuguese', rate: 0.03384615384615375 },
  { code: 'azeri', rate: 0.030641025641025554 },
  { code: 'english', rate: 0.029230769230769282 },
  { code: 'estonian', rate: 0.028461538461538538 },
  { code: 'latin', rate: 0.022179487179487145 },
  { code: 'slovene', rate: 0.019230769230769273 },
  { code: 'swahili', rate: 0.016538461538461502 },
  { code: 'hungarian', rate: 0.016410256410256396 },
  { code: 'spanish', rate: 0.015000000000000013 },
  { code: 'lithuanian', rate: 0.01358974358974363 },
  { code: 'finnish', rate: 0.01358974358974363 },
  { code: 'hawaiian', rate: 0.008589743589743626 },
  { code: 'icelandic', rate: 0.007692307692307776 },
  { code: 'italian', rate: 0.0016666666666667052 } ]
*/
```


## Related

- [`languagedetect`](https://www.npmjs.com/package/languagedetect) - Nodejs language detection library using n-gram

## License

The MIT License (MIT)

Copyright (c) 2015 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.