// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        coin_prefab: cc.Prefab,
    },

    

    // onLoad () {},
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    },
    start () {
        let create = cc.tween(this)
                    .call(this.createCoin.bind(this))
        cc.tween(this)
          .repeat(80, create)
          .start()
    },

    createCoin() {
        var xShootUp = this.getRandomArbitrary(-480, 480);
        var yShootUp = this.getRandomArbitrary(-320, 320);
        var coin = cc.instantiate(this.coin_prefab);
        this.node.addChild(coin);
        var Shoot = cc.moveTo(3, cc.v2(xShootUp, yShootUp)).easing(cc.easeIn(2.0));
        var Drop = cc.moveBy(10, cc.v2(0, -800)).easing(cc.easeIn(2.0));
        var destruction = cc.callFunc( () => {
             coin.destroy();
         })
        var action = cc.sequence(Shoot, Drop, destruction)
        coin.runAction(action);
    },
    // update (dt) {},
});