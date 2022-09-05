    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #7 Min Stack
    
var MinStack = function() {
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.arr.length === 0)
        {
            this.arr.push([val, val]);
            return;
        }
    let min = Math.min(this.arr[this.arr.length-1][1],val);
    this.arr.push([val, min]);
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.arr.length === 0)
        return "Underflow";
    let val = this.arr.pop();
    return val[1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.arr.length === 0)
        return "Underflow";
    return this.arr[this.arr.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.arr.length === 0)
        return "Underflow";
    return this.arr[this.arr.length-1][1];
};