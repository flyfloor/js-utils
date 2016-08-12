function getCookie(key) {
    var name = key + "=",
        pair = document.cookie.split(';');

    for (var i = 0; i < pair.length; i++) {
        var item = pair[i];
        while (item.charAt(0) == ' ') {
            item = item.substring(1);
        }if (item.indexOf(name) === 0) return item.substring(name.length, item.length);
    }
    return '';
}

function setCookie(key, value, expire) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expire);
    document.cookie = key + "=" + escape(value) + (expire == null ? "" : ";expires=" + exdate.toGMTString());
}

function setCookies(pair, expire) {
    var keys = Object.keys(pair);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (i === keys.length) {
            this.setCookie.call(util, key, pair[key], expire);
        } else {
            this.setCookie.call(util, key, pair[key]);
        }
    }
}

function removeCookie() {
    var names = Array.prototype.slice.call(arguments);
    for (var i = 0; i < names.length; i++) {
        document.cookie = names[i] + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
    });
    return uuid;
}
