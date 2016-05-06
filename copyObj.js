const copyObj = (dist, source) => {
    Object.getOwnPropertyNames(source).forEach(name => {
        Object.defineProperty(dist, name, Object.getOwnPropertyDescriptor(source, name))
    })
    return dist;
}