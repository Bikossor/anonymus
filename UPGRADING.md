# Upgrading guide

## Upgrading from version 2.x.x to 3.x.x

### Version 2.x.x

#### CommonJS

```js
const anonymus = require("anonymus");

anonymus.create(10);

console.log(anonymus.version); // => "2.x.x"
```

### Version 3.x.x

#### CommonJS

```js
const { create, version } = require("anonymus");

create(10);

console.log(version); // => "3.x.x"
```

#### ✨ New ES-Module

```js
import { create, version } from "anonymus";

create(10);

console.log(version); // => "3.x.x"
```
