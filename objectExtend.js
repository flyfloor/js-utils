const extend = (ChildClass, ParentClass) => {
    // copy properties, constructor to ChildClass
    ChildClass.prototype = new ParentClass()
    
    // restore constructor
    ChildClass.prototype.constructor = ChildClass
}