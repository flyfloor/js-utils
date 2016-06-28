(function(){
    let cache = {},
        guidCounter = 1,
        expando = 'data' + (new Date).getTime()

    this.getData = (elem) => {
        let guid = elem[expando]
        if (!guid) {
            guid = elem[expando] = guidCounter++
            cache[guid] = {}
        }
        return cache[guid]
    }

    this.removeData = (elem) => {
        let guid = elem[expando]
        if (!guid) return
        delete cache[expando]
        try{
            delete elem[expando]
        } catch(e){
            if (elem.removeAttribute) {
                elem.removeAttribute(expando)
            }
        }
    }
})()
