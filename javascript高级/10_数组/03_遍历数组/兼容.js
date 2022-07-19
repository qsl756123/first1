Array.prototype.forEach = Array.prototype.forEach||
    function(fn,context){
        for (let k = 0; length = this.length; k++) {
            if(typeof fn === 'function' && Object.prototype.hasOwnProperty.call(this.k)){
                fn.call(context.this[k],k,this)
            }
        }
    };