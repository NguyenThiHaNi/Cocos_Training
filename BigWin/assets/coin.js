// const Emitter = require("Emitter");
cc.Class({
    extends: cc.Component,

    properties: {
        label : cc.Label,
        _nextValueEditBox :1000000,
        _value : 0,
    },

  
    onLoad () {
    },
    
    start () {
        
        this.moneyAnim();
    },
    
    moneyAnim(){
        cc.tween(this)
        .to(5,{_value : this._nextValueEditBox})
        .start();
    },
    
    
    update (dt) {
        cc.log(this._value)
        this.label.string = Math.round(this._value);
    },
});