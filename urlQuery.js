const getQuery = (url = '', name = '') => {
    let reg = new RegExp("[\\?&]" + name + "=([^&#]*)", "gi"), 
        results = reg.exec(url)
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

const setQuery = (url = '', querys = {}) => {
    let _url = ''
    for (let name in querys){
        if (querys.hasOwnProperty(name)) {
            let spliter = url.indexOf('?') !== -1 ? '&' : '?', 
                reg = new RegExp(`([?&])${name}=.*?(&|$)`, "gi")

            _url = getQuery(url, name) ? url.replace(reg, `$1${name}=${querys[name]}$2`) : `${url}${spliter}${name}=${querys[name]}`;
        }
    }
    return _url
}

