# anonymus
Generates random, unidentifiable names for any purpose

[![Build Status](https://travis-ci.org/Bikossor/anonymus.svg?branch=develop)](https://travis-ci.org/Bikossor/anonymus)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/171758d1c7924f199f0f9b0b5f3d0dfe)](https://www.codacy.com/app/Bikossor/anonymus?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Bikossor/anonymus&amp;utm_campaign=Badge_Grade)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/anonymus.svg)
![npm](https://img.shields.io/npm/dm/anonymus.svg)
![GitHub issues](https://img.shields.io/github/issues/bikossor/anonymus.svg)
![GitHub closed issues](https://img.shields.io/github/issues-closed/bikossor/anonymus.svg)
![GitHub](https://img.shields.io/github/license/bikossor/anonymus.svg)

## Installation
### Node.js environment
```
npm i anonymus --save
```

### Browser environment
Include this line in your HTML (preferably in the body; [here's why](https://www.w3schools.com/js/js_whereto.asp)) and you can obtain anonymus via the jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/anonymus@1"></script>
```
or the unpkg CDN:
```html
<script src="https://unpkg.com/anonymus@1"></script>
```
or you can download the latest version of anonymus [here](https://github.com/Bikossor/anonymus/releases/latest).

## Usage
### Node.js environment

```javascript
const anonymus = require("anonymus");
```

### Node.js environment + Browser environment
```javascript
console.log(anonymus.create());
//=> ['Orange panda']

console.log(anonymus.create());
//=> ['Green hawk']

console.log(anonymus.create());
//=> ['Blue sheep']

console.log(anonymus.create(5));
//=> ['Red hummingbird',
//    'White frog',
//    'Pink jellyfish',
//    'Sapphire kangaroo',
//    'Black dog']

console.log(anonymus.create(anonymus.sizeMax));
//=> Creates all unique possibilities.
```

## Upgrading
You can read the upgrade guide [here](UPGRADING.md).

## Changelog
You can read the changelog [here](CHANGELOG.md).

## Contributing
- [Installation of Node.js](https://www.scaler.com/topics/javascript/install-node-js/)

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/bikossor/anonymus/tags) on this repository. 

## Authors
- [Bikossor](https://github.com/Bikossor)

See also the list of [contributors](https://github.com/bikossor/anonymus/contributors) who participated in this project.

## License
This project is licensed under the GPL-3.0 License - see [here](LICENSE) for more details.
