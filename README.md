@YoanDo/repetition-counter

# Repetition-counter
a short package to check words repetition in a sentence

## Install

```
$ npm install @yoando/repetition-counter
```

## Usage
const freqCount = require("@yoando/repetition-counter");

repCounter(string, caseInsensitive)
*caseInsensitive is true by default*

repCounter("Pump up the jam, pump it up", true);
//=> { pump: 2, up: 2, the: 1, jam: 1, it: 1 }

repCounter("Pump up the jam, pump it up", false);
//=> { Pump: 1, up: 2, the: 1, jam: 1, pump: 1, it: 1 }
