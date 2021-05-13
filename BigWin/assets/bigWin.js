

cc.Class({
    extends: cc.Component,

    properties: {
       
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.scale = 0;
    },

    start () {
        
        var show = cc.tween(this.node)
            .to(1, { scale: 1.5 });
        cc.tween(this.node).then(show).start();
        var zoomIn = cc.tween(this.node).to(2 , {scale : 1.5}, {easing : "sineIn"});
        var zoomOut = cc.tween(this.node).to(2 , {scale : 1}, {easing : "sineOut"}); 
        var zoom = cc.tween(this.node).sequence(zoomIn,zoomOut);
        cc.tween(this.node).repeatForever(zoom).start();
    },

    // update (dt) {},
});
