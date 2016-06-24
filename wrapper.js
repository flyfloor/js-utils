// function wrapper
const wrap = function(obj, method, wrapper){
    let fn = obj[method]
    return obj[method] = function(){
        // bind old method to obj
        return wrapper.apply(this, [fn.bind(this)].concat(Array.prototype.slice.call(arguments)))
    }
}