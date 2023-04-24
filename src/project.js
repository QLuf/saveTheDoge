window.__require=function e(t,o,n){function c(r,s){if(!o[r]){if(!t[r]){var a=r.split("/");if(a=a[a.length-1],!t[a]){var p="function"==typeof __require&&__require;if(!s&&p)return p(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+r+"'")}r=a}var l=o[r]={exports:{}};t[r][0].call(l.exports,function(e){return c(t[r][1][e]||e)},l,l.exports,e,t,o,n)}return o[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<n.length;r++)c(n[r]);return c}({AdManager:[function(e,t,o){"use strict";cc._RF.push(t,"7802f1WRpxA5IDN+MDju5zs","AdManager"),cc.Class({extends:cc.Component,properties:{androidLink:{default:""},iosLink:{default:""},defaultLink:{default:""}},openAdUrl:function(){window.androidLink=this.androidLink,window.iosLink=this.iosLink,window.defaultLink=this.defaultLink,window.openAdUrl?window.openAdUrl():window.open()}}),cc._RF.pop()},{}],BearListener:[function(e,t,o){"use strict";cc._RF.push(t,"b622fT8MK9DqKqdJaPoD8Uk","BearListener");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,s=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.start=function(){},t.prototype.onCollisionEnter=function(e,t){"be"==e.node.name&&cc.Canvas.instance.node.getComponent("Game").endGame(!1)},t=c([r],t)}(cc.Component));o.default=s,cc._RF.pop()},{}],Game:[function(e,t,o){"use strict";cc._RF.push(t,"e1b90/rohdEk4SdmmEZANaD","Game");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,s=i.property,a=0,p=0,l=0,d=0,u=0,f=0,y=0,h=0,g=!1,v=!1,_=0,m=8e3,C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isDrawing=!0,t.arrPoints=[],t.ground=null,t.beeGroup=null,t.bear=null,t.uiNode=null,t.beePreafb=null,t.endGameNode=null,t.tickWinNode=null,t.tickLoseNode=null,t.clockNode=null,t.guidNode=null,t.number=null,t.barLine=null,t.bgSound=null,t.dogWin=null,t.dogLose=null,t.dogHurt=null,t.beeSound=null,t.bearSkeleton=null,t.bossSkeleton=null,t.laserPreafb=null,t.lineWidth=5,t.listBee=[],t.posBee=[cc.v3(-240,280),cc.v3(-150,280),cc.v3(-95,230),cc.v3(-90,185),cc.v3(-90,132),cc.v3(-116,90)],t.isEndGame=!1,t.beeSoundId=null,t.ironsource=!1,t.mindworks=!0,t.checkInteraction=!1,t}return n(t,e),t.prototype.onTouchStart=function(e){this.ironsource&&!this.checkInteraction&&(this.checkInteraction=!0,window.NUC.trigger.interaction())},t.prototype.start=function(){this.ironsource&&window.NUC.trigger.ready("ready")},t.prototype.onLoad=function(){cc.audioEngine.play(this.bgSound,!0,.8),this.uiNode.zIndex=20,cc.director.getPhysicsManager().debugDrawFlags=0,cc.director.getCollisionManager().enabled=!0;var e=cc.director.getPhysicsManager();e.enabled=!0,e.debugDrawFlags=0;var t=this,o=!0,n=null,c=200;this.createBee(),this.bear.getComponent(cc.PhysicsCircleCollider).enabled=!1,this.bear.getComponent(cc.RigidBody).gravityScale=0,this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){if(t.checkDraw(e.getLocation())?n&&(o=t.checkLine(n,e.getLocation())):(o=t.checkDraw(e.getLocation()),n=t.getPoint(e.getLocation())),!g&&!v){v=!0,_=e.getID(),g=!1;var i=this.convertToNodeSpaceAR(e.getLocation());if(a=i.x,p=i.y,u=e.getLocationX(),f=e.getLocationY(),t.testrect(u,f)){y=0,h++,g=!0,l=a,d=p,u,f;var r=(C=new cc.Node("newLine"+h)).addComponent(cc.Graphics),s=C.addComponent(cc.RigidBody);s.gravityScale=0,s.type=cc.RigidBodyType.Static,this.addChild(C),r.lineWidth=12,r.lineCap=cc.Graphics.LineCap.ROUND,r.moveTo(a,p)}else v=!1}if(g&&_===e.getID()&&0<m&&o){--c>0&&(t.barLine.scaleX=c/200*1);i=this.convertToNodeSpaceAR(e.getLocation());if(a=i.x,p=i.y,u=e.getLocationX(),f=e.getLocationY(),0!==this.childrenCount){!1;var C,b=t.testrect(u,f),w=Math.sqrt(Math.pow(p-d,2)+Math.pow(a-l,2));if(b)if((C=this.getChildByName("newLine"+h)).getComponent(cc.Graphics).lineTo(a,p),C.getComponent(cc.Graphics).stroke(),C.getComponent(cc.Graphics).moveTo(a,p),10<w){var P=null;if(w<13)(P=C.addComponent(cc.PhysicsCircleCollider)).offset=cc.v2(a,p),P.radius=6,P.density=5,P.apply();else{for(var O=w/13,N=1;N<O;N++)(P=C.addComponent(cc.PhysicsCircleCollider)).offset=cc.v2(l+12*N*(a-l)/w,d+12*N*(p-d)/w),P.radius=6,P.density=5,P.apply();(P=C.addComponent(cc.PhysicsCircleCollider)).offset=cc.v2(a,p),P.radius=6,P.density=5,P.apply()}l=a,d=p,u,f;try{y+=w,m-=w}catch(e){console.log(e)}}}}},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(e){var o;if(t.endEvent(),t.summonBee(),g&&_===e.getID()){var n=this.convertToNodeSpaceAR(e.getLocation());if(a=n.x,p=n.y,0==y&&(null!==(o=this.getChildByName("newLine"+h))&&o.getComponent(cc.Graphics).clear(),v=g=!1),0<y&&0!==this.childrenCount){var c=void 0;(c=this.getChildByName("newLine"+h)).getComponent(cc.RigidBody).type=cc.RigidBodyType.Dynamic,c.getComponent(cc.RigidBody).gravityScale=3,0,v=g=!1}}},this.node),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(e){if(t.endEvent(),t.summonBee(),g&&_===e.getID()&&0!==this.childrenCount){var o=this.getChildByName("newLine"+h);o.getComponent(cc.RigidBody).type=cc.RigidBodyType.Dynamic,o.getComponent(cc.RigidBody).gravityScale=3,0,v=g=!1}},this.node),this.node.on(cc.Node.EventType.TOUCH_START,function(o){if(t.guidNode.active=!1,!v){v=!0,_=o.getID(),g=!1,y=0,h++;var n=this.convertToNodeSpaceAR(o.getLocation());a=n.x,p=n.y,u=o.getLocationX(),f=o.getLocationY(),e.testAABB(cc.rect(u,f,6,6)).length<1?g=!0:v=!1,l=a,d=p,u,f;var c=new cc.Node("newLine"+h),i=c.addComponent(cc.Graphics),r=c.addComponent(cc.RigidBody);r.gravityScale=0,r.type=cc.RigidBodyType.Static,this.addChild(c),i.lineWidth=12,i.lineCap=cc.Graphics.LineCap.ROUND,i.moveTo(a,p)}},this.node)},t.prototype.endEvent=function(){this.bear.getComponent(cc.PhysicsCircleCollider).enabled=!0,this.bear.getComponent(cc.RigidBody).gravityScale=1,this.node.off(cc.Node.EventType.TOUCH_START),this.node.off(cc.Node.EventType.TOUCH_MOVE),this.node.off(cc.Node.EventType.TOUCH_CANCEL),this.node.off(cc.Node.EventType.TOUCH_END)},t.prototype.testrect=function(e,t){var o=cc.director.getPhysicsManager();return null==o.testPoint(cc.v2(e-6,t-6))&&null==o.testPoint(cc.v2(e-6,t+6))&&null==o.testPoint(cc.v2(e+6,t-6))&&null==o.testPoint(cc.v2(e+6,t+6))},t.prototype.checkDraw=function(e){return!(cc.Intersection.pointInPolygon(e,this.ground.getComponent(cc.PolygonCollider).world.points)||cc.Intersection.pointInPolygon(e,this.beeGroup.getComponent(cc.PolygonCollider).world.points)||cc.Intersection.pointInPolygon(e,this.bear.getComponent(cc.PolygonCollider).world.points))},t.prototype.getPoint=function(e){if(cc.Intersection.pointInPolygon(e,this.ground.getComponent(cc.PolygonCollider).world.points)||cc.Intersection.pointInPolygon(e,this.beeGroup.getComponent(cc.PolygonCollider).world.points)||cc.Intersection.pointInPolygon(e,this.bear.getComponent(cc.PolygonCollider).world.points))return e},t.prototype.checkLine=function(e,t){return!!(cc.Intersection.linePolygon(e,t,this.ground.getComponent(cc.PolygonCollider).world.points)||cc.Intersection.linePolygon(e,t,this.beeGroup.getComponent(cc.PolygonCollider).world.points)||cc.Intersection.linePolygon(e,t,this.bear.getComponent(cc.PolygonCollider).world.points))},t.prototype.changeAnim=function(e){var t=this;e.setCompleteListener(function(e){"surprise"==(e.animation?e.animation.name:"")&&t.bearSkeleton.setAnimation(0,"scare",!0)})},t.prototype.createBee=function(){this.beeSoundId=cc.audioEngine.play(this.beeSound,!0,.8);for(var e=0;e<6;e++){var t=cc.instantiate(this.beePreafb);this.node.addChild(t),this.listBee.push(t),t.position=this.posBee[5-e],t.getComponent(cc.PhysicsBoxCollider).enabled=!1,t.getComponent(cc.RigidBody).type=cc.RigidBodyType.Static}},t.prototype.summonBee=function(){var e=this;this.bearSkeleton.setAnimation(0,"surprise",!0),this.scheduleOnce(function(){e.changeAnim(e.bearSkeleton)},.55),this.schedule(function(){e.bossSkeleton.setAnimation(0,"fly",!0),e.bossAttack()},1,8,1.5),this.listBee.forEach(function(t,o){t.getComponent(cc.PhysicsBoxCollider).enabled=!0,t.getComponent(cc.RigidBody).type=cc.RigidBodyType.Dynamic,e.scheduleOnce(function(){cc.tween(t).to(.35,{position:cc.v3(50+20*o,160)}).to(.2,{angle:125}).delay(.1).call(function(){t.getComponent(cc.RigidBody).applyForceToCenter(cc.v2(2e3*o,-5e4),!1)}).delay(.5).repeat(20,cc.tween(t).delay(.5).call(function(){t.scaleX=(o<6?-.8:-1.5)*e.checkDirection(t.position,e.bear.position),t.scaleY=o<6?.8:1.5,t.angle=t.scaleX>0?-150:150,t.getComponent(cc.RigidBody).applyForceToCenter(cc.v2((5e4+1e4*o)*e.checkDirection(t.position,e.bear.position),1e3*o-5e4),!1)})).start()},.2*o)}),this.scheduleOnce(function(){0==e.isEndGame&&e.endGame(!0)},10),this.clockNode.active=!0;var t=10;this.schedule(function(){t--,e.clockNode.children[1].active=!1,e.clockNode.children[0].x=0,e.clockNode.children[0].getComponent(cc.Sprite).spriteFrame=e.number.getSpriteFrames()[t]},1,10,1)},t.prototype.bossAttack=function(){for(var e=0;e<2;e++){var t=cc.instantiate(this.laserPreafb);this.bossSkeleton.node.addChild(t),t.scale=6,t.setPosition(0==e?cc.v3(350,290):cc.v3(85,320)),t.getComponent(cc.RigidBody).applyForceToCenter(cc.v2(5e5,-5e5),!0)}},t.prototype.endGame=function(e){var t=this;this.ironsource&&window.NUC.trigger.endGame("win"),this.mindworks&&window.gameEnd&&window.gameEnd(),this.clockNode.active=!1,cc.audioEngine.pause(this.beeSoundId),e?(this.bearSkeleton.setAnimation(0,"grin",!0),cc.audioEngine.play(this.dogWin,!1,.8),this.tickWinNode.active=!0,this.tickWinNode.position=this.bear.position.add(cc.v3(120,0)),this.scheduleOnce(function(){t.endGameNode.active=!0,t.endGameNode.children[1].active=!0,cc.tween(t.endGameNode).to(.5,{scale:1}).call(function(){}).start()},.75)):this.isEndGame||(this.bearSkeleton.setAnimation(0,"cry",!0),cc.audioEngine.play(this.dogHurt,!1,.8),this.scheduleOnce(function(){cc.audioEngine.play(t.dogLose,!1,.8),t.tickLoseNode.active=!0,t.tickLoseNode.position=t.bear.position.add(cc.v3(120,0)),t.endGameNode.children[2].active=!0,t.scheduleOnce(function(){cc.tween(t.endGameNode).to(.5,{scale:1}).call(function(){}).start()},.75)},.5)),this.isEndGame=!0},t.prototype.checkDirection=function(e,t){return e.x>=t.x?-1:1},t.prototype.update=function(e){},c([s(cc.Node)],t.prototype,"ground",void 0),c([s(cc.Node)],t.prototype,"beeGroup",void 0),c([s(cc.Node)],t.prototype,"bear",void 0),c([s(cc.Node)],t.prototype,"uiNode",void 0),c([s(cc.Prefab)],t.prototype,"beePreafb",void 0),c([s(cc.Node)],t.prototype,"endGameNode",void 0),c([s(cc.Node)],t.prototype,"tickWinNode",void 0),c([s(cc.Node)],t.prototype,"tickLoseNode",void 0),c([s(cc.Node)],t.prototype,"clockNode",void 0),c([s(cc.Node)],t.prototype,"guidNode",void 0),c([s(cc.SpriteAtlas)],t.prototype,"number",void 0),c([s(cc.Node)],t.prototype,"barLine",void 0),c([s(cc.AudioClip)],t.prototype,"bgSound",void 0),c([s(cc.AudioClip)],t.prototype,"dogWin",void 0),c([s(cc.AudioClip)],t.prototype,"dogLose",void 0),c([s(cc.AudioClip)],t.prototype,"dogHurt",void 0),c([s(cc.AudioClip)],t.prototype,"beeSound",void 0),c([s(sp.Skeleton)],t.prototype,"bearSkeleton",void 0),c([s(sp.Skeleton)],t.prototype,"bossSkeleton",void 0),c([s(cc.Prefab)],t.prototype,"laserPreafb",void 0),t=c([r],t)}(cc.Component);o.default=C,cc._RF.pop()},{}],NewScript:[function(e,t,o){"use strict";cc._RF.push(t,"67800JNCqRG2JsuGx31z6yp","NewScript");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,s=i.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.label=null,t.text="hello",t}return n(t,e),t.prototype.start=function(){},c([s(cc.Label)],t.prototype,"label",void 0),c([s],t.prototype,"text",void 0),t=c([r],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],PlatformBtn:[function(e,t,o){"use strict";cc._RF.push(t,"51c17873eFC35WAPFA/V2HZ","PlatformBtn");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,s=i.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.androidSprites=null,t.iosSprites=null,t}return n(t,e),t.prototype.start=function(){cc.sys.os==cc.sys.OS_ANDROID?this.getComponent(cc.Sprite).spriteFrame=this.androidSprites:cc.sys.os==cc.sys.OS_IOS&&(this.getComponent(cc.Sprite).spriteFrame=this.iosSprites)},c([s(cc.SpriteFrame)],t.prototype,"androidSprites",void 0),c([s(cc.SpriteFrame)],t.prototype,"iosSprites",void 0),t=c([r],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],RigidBody:[function(e,t,o){"use strict";cc._RF.push(t,"3ca3eavzvhC5ZNUll08SRUB","RigidBody");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,s=(i.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.graphics=null,t}return n(t,e),t.prototype.onLoad=function(){this.graphics=this.node.addComponent(cc.Graphics),this.graphics.fillColor=cc.Color.BLUE,this.graphics.lineCap=cc.Graphics.LineCap.ROUND},t.prototype.start=function(){this.fill()},t.prototype.fill=function(){this.graphics.clear();try{var e=this.node.getComponent(cc.PhysicsPolygonCollider).points;this.graphics.moveTo(e[0].x,e[0].y);for(var t=1;t<e.length;t++)this.graphics.lineTo(e[t].x,e[t].y);this.graphics.close(),this.graphics.fill()}catch(e){console.log("polygon fill error,errMsg:"+e)}},t=c([r],t)}(cc.Component));o.default=s,cc._RF.pop()},{}],laserLisenter:[function(e,t,o){"use strict";cc._RF.push(t,"c06efF0VUdHQZb9jE0yiRuW","laserLisenter");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,s=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.start=function(){},t.prototype.onBeginContact=function(e,t,o){"newLine1"!=o.node.name&&"bear"!=o.node.name&&"boxStatic"!=o.node.name&&"block"!=o.node.name||"laser"!=t.node.name||(t.node.active=!1,"bear"==o.node.name&&cc.Canvas.instance.node.getComponent("Game").endGame(!1))},t=c([r],t)}(cc.Component));o.default=s,cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,t,o){"use strict";cc._RF.push(t,"fad14QYRhBOBImPSww2Skin","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["AdManager","BearListener","Game","NewScript","PlatformBtn","RigidBody","laserLisenter","use_v2.1-2.2.1_cc.Toggle_event"]);