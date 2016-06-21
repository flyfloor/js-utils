Function.prototype.curry = function(){
    let fn = this,
        args = Array.prototype.slice.call(arguments)  
    return function(){
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)))
    }
}