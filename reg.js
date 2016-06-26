const trim = (str) => {
    return (str || '').replace(/^\s+|\s+$/g, '')
}

const pairReg = /([^=&]+)=([^&]*)/g

const unicodAll = /[\w\u0080-\uFFFF_-]+/