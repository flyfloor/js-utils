export const isFunc = (fn) => Object.prototype.toString.call(fn) === "[object Function]"

export const isType = function(obj, typeStr){
    return Object.prototype.toString.call(obj).slice(8, -1) === typeStr
}