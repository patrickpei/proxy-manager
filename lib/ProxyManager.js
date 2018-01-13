const fs = require('fs');
const path = require('path');

const Proxy = require('./Proxy');

class ProxyManager {
    constructor(pathToProxies = `${path.join(__dirname, 'proxies.txt')}`) {
        const proxiesText = fs.readFileSync(pathToProxies, 'utf8');
        const proxies = proxiesText
            .split('\n')
            .filter(l => l)
            .map(Proxy.getProxyFromString);

        this.proxies = proxies;
    }

    getRandomProxy() {
        return this.proxies[Math.floor(Math.random() * this.proxies.length)];
    }
}

module.exports = ProxyManager;
