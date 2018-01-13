const assert = require('assert');
const fs = require('fs-extra');

const ProxyManager = require('../lib/ProxyManager');

describe('main', () => {
    const pathToProxies = `./test/proxies.txt`;
    const proxies = [
        '127.0.0.1:8080@user:pass',
        '127.0.0.1:8081@user:pass',
        '127.0.0.1:8082@user:pass',
    ];
    let proxyManager;

    beforeEach(async () => {
        await fs.outputFile(pathToProxies, proxies.join('\n'));
        proxyManager = new ProxyManager(pathToProxies);
    });

    afterEach(async () => {
        await fs.remove(pathToProxies);
    });

    it('#getRandomProxy', () => {
        const randomProxy = proxyManager.getRandomProxy();
        const randomProxyStr = randomProxy.toString();
        assert(proxies.some(proxyStr => randomProxyStr.includes(proxyStr)), 'random proxy is in file');
    });
});
