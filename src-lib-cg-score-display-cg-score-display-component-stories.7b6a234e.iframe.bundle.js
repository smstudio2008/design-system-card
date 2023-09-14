(self.webpackChunk_card_game_source=self.webpackChunk_card_game_source||[]).push([[72],{"./ui/src/lib/cg-score-display/cg-score-display.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>cg_score_display_component_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var cg_score_display_componentngResource=__webpack_require__("./ui/src/lib/cg-score-display/cg-score-display.component.scss?ngResource"),cg_score_display_componentngResource_default=__webpack_require__.n(cg_score_display_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),Action=function(_super){function Action(scheduler,work){return _super.call(this)||this}return(0,tslib_es6.ZT)(Action,_super),Action.prototype.schedule=function(state,delay){return void 0===delay&&(delay=0),this},Action}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js").w0),intervalProvider={setInterval:function(handler,timeout){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];var delegate=intervalProvider.delegate;return(null==delegate?void 0:delegate.setInterval)?delegate.setInterval.apply(delegate,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args))):setInterval.apply(void 0,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args)))},clearInterval:function(handle){var delegate=intervalProvider.delegate;return((null==delegate?void 0:delegate.clearInterval)||clearInterval)(handle)},delegate:void 0},arrRemove=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"),AsyncAction=function(_super){function AsyncAction(scheduler,work){var _this=_super.call(this,scheduler,work)||this;return _this.scheduler=scheduler,_this.work=work,_this.pending=!1,_this}return(0,tslib_es6.ZT)(AsyncAction,_super),AsyncAction.prototype.schedule=function(state,delay){var _a;if(void 0===delay&&(delay=0),this.closed)return this;this.state=state;var id=this.id,scheduler=this.scheduler;return null!=id&&(this.id=this.recycleAsyncId(scheduler,id,delay)),this.pending=!0,this.delay=delay,this.id=null!==(_a=this.id)&&void 0!==_a?_a:this.requestAsyncId(scheduler,this.id,delay),this},AsyncAction.prototype.requestAsyncId=function(scheduler,_id,delay){return void 0===delay&&(delay=0),intervalProvider.setInterval(scheduler.flush.bind(scheduler,this),delay)},AsyncAction.prototype.recycleAsyncId=function(_scheduler,id,delay){if(void 0===delay&&(delay=0),null!=delay&&this.delay===delay&&!1===this.pending)return id;null!=id&&intervalProvider.clearInterval(id)},AsyncAction.prototype.execute=function(state,delay){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var error=this._execute(state,delay);if(error)return error;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},AsyncAction.prototype._execute=function(state,_delay){var errorValue,errored=!1;try{this.work(state)}catch(e){errored=!0,errorValue=e||new Error("Scheduled action threw falsy error")}if(errored)return this.unsubscribe(),errorValue},AsyncAction.prototype.unsubscribe=function(){if(!this.closed){var id=this.id,scheduler=this.scheduler,actions=scheduler.actions;this.work=this.state=this.scheduler=null,this.pending=!1,(0,arrRemove.P)(actions,this),null!=id&&(this.id=this.recycleAsyncId(scheduler,id,null)),this.delay=null,_super.prototype.unsubscribe.call(this)}},AsyncAction}(Action),dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0},Scheduler=function(){function Scheduler(schedulerActionCtor,now){void 0===now&&(now=Scheduler.now),this.schedulerActionCtor=schedulerActionCtor,this.now=now}return Scheduler.prototype.schedule=function(work,delay,state){return void 0===delay&&(delay=0),new this.schedulerActionCtor(this,work).schedule(state,delay)},Scheduler.now=dateTimestampProvider.now,Scheduler}(),asyncScheduler=new(function(_super){function AsyncScheduler(SchedulerAction,now){void 0===now&&(now=Scheduler.now);var _this=_super.call(this,SchedulerAction,now)||this;return _this.actions=[],_this._active=!1,_this}return(0,tslib_es6.ZT)(AsyncScheduler,_super),AsyncScheduler.prototype.flush=function(action){var actions=this.actions;if(this._active)actions.push(action);else{var error;this._active=!0;do{if(error=action.execute(action.state,action.delay))break}while(action=actions.shift());if(this._active=!1,error){for(;action=actions.shift();)action.unsubscribe();throw error}}},AsyncScheduler}(Scheduler))(AsyncAction),async_async=asyncScheduler,Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),isScheduler=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");function timer(dueTime,intervalOrScheduler,scheduler){void 0===dueTime&&(dueTime=0),void 0===scheduler&&(scheduler=async_async);var intervalDuration=-1;return null!=intervalOrScheduler&&((0,isScheduler.K)(intervalOrScheduler)?scheduler=intervalOrScheduler:intervalDuration=intervalOrScheduler),new Observable.y((function(subscriber){var due=function isValidDate(value){return value instanceof Date&&!isNaN(value)}(dueTime)?+dueTime-scheduler.now():dueTime;due<0&&(due=0);var n=0;return scheduler.schedule((function(){subscriber.closed||(subscriber.next(n++),0<=intervalDuration?this.schedule(void 0,intervalDuration):subscriber.complete())}),due)}))}var _class,map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");let CgScoreDisplayComponent=((_class=class CgScoreDisplayComponent{constructor(){this.countTo=0,this.currentCountSource=new BehaviorSubject.X(0),this.currentCount$=this.currentCountSource.asObservable()}ngOnChanges(){this.animateCount()}animateCount(){const step=this.countTo>this.currentCountSource.value?1:-1;(function interval(period,scheduler){return void 0===period&&(period=0),void 0===scheduler&&(scheduler=asyncScheduler),period<0&&(period=0),timer(period,period,scheduler)})(10).pipe((0,map.U)((()=>this.currentCountSource.value+step)),function takeWhile(predicate,inclusive){return void 0===inclusive&&(inclusive=!1),(0,lift.e)((function(source,subscriber){var index=0;source.subscribe((0,OperatorSubscriber.x)(subscriber,(function(value){var result=predicate(value,index++);(result||inclusive)&&subscriber.next(value),!result&&subscriber.complete()})))}))}((val=>step>0?val<=this.countTo:val>=this.countTo))).subscribe((val=>{this.currentCountSource.next(val)}))}}).propDecorators={countTo:[{type:core.Input}]},_class);CgScoreDisplayComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"card-game-temp-display",template:'<div class="score">\n    <p>{{ currentCount$ | async }}</p>\n</div>\n',styles:[cg_score_display_componentngResource_default()]})],CgScoreDisplayComponent);const cg_score_display_component_stories={component:CgScoreDisplayComponent,title:"Score Display"},Primary={args:{countTo:100}}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./ui/src/lib/cg-score-display/cg-score-display.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".score {\n  border: 2px solid #000;\n  border-radius: 70px;\n  box-shadow: 3px 3px 0 0 #000;\n  width: 116px;\n  text-align: center;\n  background-color: #0cff8d;\n}\n.score p {\n  font-size: 2.2rem;\n  letter-spacing: 2px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);