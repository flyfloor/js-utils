const getCookie = (key) => {
    let name = `${key}=`,
        pair = document.cookie.split(';')
    
    for (let i = 0; i < pair.length; i++) {
        let item = pair[i]
        while(item.charAt(0) == ' ') item = item.substring(1)
        if (item.indexOf(name) === 0) return item.substring(name.length, item.length)
    }
    return ''
}