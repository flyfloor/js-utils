const getItems = (field) => {
    try {
        let value = localStorage.getItem(field)
        if ([undefined, null, ''].indexOf(value) !== -1) return []
        return value.split(',')
    } catch(e){
        console.log(e)
    }
}

const updateItems = (field, value) => {
    try {
        if ([undefined, null, ''].indexOf(value) === -1) {
            localStorage.setItem(field, getItems(field).concat(value).join(','))
        }
    } catch(e){
        console.log(e)
    }
}

const extractItems = (field, value) => {
    try {
        localStorage.setItem(field, getItems(field).fliter(v => v !== value))
    } catch(e){
        console.log(e)
    }
}