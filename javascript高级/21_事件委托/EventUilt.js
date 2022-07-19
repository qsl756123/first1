var EventUtil = {
    //兼容IE和谷歌的Dom2级的方法
    addEventHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler);
        }else{
            return 'error';
        }
    },
    removeEventHandler:function(element,type,handler){
        if(element.addEventListener){
            element.removeEventListener(type,handler);
        }else if(element.attachEvent){
            element.detachEvent('on'+type,handler);
        }else{
            return 'error';
        }
    },
    //获取事件对象
    getEvent:function(event){
        return event || window.event;
    },
    //获取事件的目标元素
    getTarget:function(event){
        return event.target || event.srcElement;
    }
}