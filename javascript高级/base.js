/* 
*   判断变量是数组还是对象 
*   getDataType
*   ao  Array or Object
*   return Array or Object
*/
function getDataType(ao){
    if(ao instanceof Array){
        return 'Array';
    }else if(ao instanceof Object){
        return 'Object';
    }else{
        return 'Data not is Array or Object';
    }
}

/*
    判断对象是否为空的函数 
    isEmpty
    obj1  null or not null
    return true or false
*/
function isEmpty(obj1){
    for (key in obj1) {
        if(obj1.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}

/* 
    数组去重
    arrayRepeat 
    arr数组
    return result
*/
function arrayRepeat(arr){
    var result = [];
    for(var i = 0; i<arr.length; i++){
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i]);
        }
    }
    return result;
}

/* 判断用户输入的日期是否有误 */