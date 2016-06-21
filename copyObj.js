import {isType} from './typeCheck'

// shallow
const copyClone = (dist, source) => {
    Object.getOwnPropertyNames(source).forEach(name => {
        Object.defineProperty(dist, name, Object.getOwnPropertyDescriptor(source, name))
    })
    return dist;
}

// copy json obj, only simple type attribute, like Array, String, Boolean
const jsonClone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

// deep
const deepClone = (dist, source) => {
    for(let key in source){
        let value = source[key]
        if (value === source) continue
        if (isType(value, 'Object')) {
            dist[type] = deepClone(dist[type] || {}, value)
            continue
        }
        if (isType(value, 'Array')) {
            dist[type] = deepClone(dist[type] || [], value)
            continue
        }
        dist[key] = value
    }
    return dist
}