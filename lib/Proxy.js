class Proxy {
    constructor(ip, port, username, password) {
        this.ip = ip;
        this.port = port;
        this.username = username;
        this.password = password;
    }

    static getProxyFromString(str) {
        if (!str) {
            return null;
        }

        const data = str.split(/[:@]/);
        return new Proxy(...data);
    }

    toString() {
        if (!this.username || !this.password) {
            return `http://${this.ip}:${this.port}`;
        }
        return `http://${this.ip}:${this.port}@${this.username}:${this.password}`;
    }
}

module.exports = Proxy;
