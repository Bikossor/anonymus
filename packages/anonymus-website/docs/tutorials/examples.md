---
sidebar_position: 1
---

# Examples

## Using ESM

```javascript
import anonymus from "anonymus";

console.log(anonymus.create());
//=> ['Orange panda']

console.log(anonymus.create(5));
//=> ['Red hummingbird',
//    'White frog',
//    'Pink jellyfish',
//    'Sapphire kangaroo',
//    'Black dog']

console.log(anonymus.create(anonymus.sizeMax));
//=> Creates all unique possibilities.
```

## Using CommonJS

```javascript
const anonymus = require("anonymus");

console.log(anonymus.create());
//=> ['Orange panda']

console.log(anonymus.create(5));
//=> ['Red hummingbird',
//    'White frog',
//    'Pink jellyfish',
//    'Sapphire kangaroo',
//    'Black dog']

console.log(anonymus.create(anonymus.sizeMax));
//=> Creates all unique possibilities.
```
