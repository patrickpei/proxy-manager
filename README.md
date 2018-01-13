# Proxy Manager

[![NPM version](https://img.shields.io/npm/v/proxy-manager.svg)](https://www.npmjs.com/package/proxy-manager)

> Proxy Manager is a simple Node library to handle proxies. Currently, the API is completely synchronous.

## Getting Started

### Installation

```sh
pnpm i proxy-manager
# or "yarn add proxy-manager"
# or "npm i proxy-manager"
```

### Usage

**Example** - initialization
```js
const ProxyManager = require('proxy-manager');
const proxyManager = new ProxyManager('proxies.txt');

const randomProxy = proxyManager.getRandomProxy();
```

**Example** - usage with requests-promise-native
```js
const ProxyManager = require('proxy-manager');
const request = require('request-promise-native');

const proxyManager = new ProxyManager('proxies.txt');
const options = {
    method: 'get',
    proxy: proxyManager.getRandomProxy().toString()
    uri: `<example.url>`
};

```

### License

[MIT](LICENSE)
