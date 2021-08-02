(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28a3bb55"],{"152d":function(e,t,i){},1742:function(e,t,i){},"2bbe":function(e,t,i){"use strict";i("7f52")},"7f52":function(e,t,i){},9751:function(e,t,i){"use strict";i("152d")},a7ca:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"player-wrap"},[i("div",{ref:"container",attrs:{id:"container"}})])},r=[],a=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),s=i("2f62"),c=i("4ec3");i("ed08");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){Object(a["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var u={name:"JessicaPlayer",jessibuca:null,data:function(){return{}},props:{streamPath:{type:String,default:""}},computed:l({},Object(s["b"])({plugins:function(e){return e.plugins}})),mounted:function(){this.create()},methods:{create:function(){var e=this,t=new window.Jessibuca({container:this.$refs.container,forceNoOffscreen:!0,videoBuffer:.2,loadingText:"加载中"});t.onLog=function(e){return console.error(e)},t.hasLoaded()?(this.play(),this.$emit("doPlayed")):t.onLoad=function(){e.play(),e.$emit("doPlayed")},t.on("timeout",(function(){console.log("timeout"),e.$message({type:"error",message:"播放超时"})})),this.$options.jessibuca=t},play:function(){if(this.streamPath){var e=this.getJessibucaHref(),t=e+this.streamPath;this.$options.jessibuca&&this.$options.jessibuca.play(t),this.$options.jessibuca.cancelMute()}},getJessibucaHref:function(){var e=c["a"].jessibucaHref,t=this.getJessibucaConfig();return t&&(t.ListenAddrTLS&&"https:"===location.protocol?e="wss://"+location.hostname+t.ListenAddrTLS+"/jessica/":t.ListenAddr&&(e="ws://"+location.hostname+t.ListenAddr+"/jessica/")),e},getJessibucaConfig:function(){return this.$store.getters.getConfig("Jessica")}},destroyed:function(){this.$options.jessibuca&&this.$options.jessibuca.destroy()}},h=u,d=(i("f42d"),i("2877")),p=Object(d["a"])(h,n,r,!1,null,"08c674f2",null);t["a"]=p.exports},caae:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:6}},[i("el-tree",{staticClass:"tree-block",attrs:{"default-expand-all":"","highlight-current":"","expand-on-click-node":!1,"node-key":"uuid",data:e.treeList,props:{children:"children",label:"label"}},on:{"node-click":e.onTreeNodeSelect}})],1),e._v(" "),i("el-col",{attrs:{span:18}},[i("el-input",{staticStyle:{"margin-bottom":"10px",display:"inline-block",width:"300px"},attrs:{size:"mini",placeholder:"搜索关键词"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),e._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.gb28181ChannelShowPageList,fit:"",border:""}},[i("el-table-column",{attrs:{prop:"DeviceID",label:"通道编号",width:"180"}}),e._v(" "),i("el-table-column",{attrs:{prop:"Name",label:"名称",width:"180"}}),e._v(" "),i("el-table-column",{attrs:{prop:"Manufacturer",label:"厂商"}}),e._v(" "),i("el-table-column",{attrs:{prop:"Address",label:"地址"}}),e._v(" "),i("el-table-column",{attrs:{prop:"Status",label:"状态"}}),e._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){return e.onPlay(t.row)}}},[e._v("播放")])]}}])})],1),e._v(" "),i("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":e.currentPage,total:e.gb28181ChannelShowList.length},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1),e._v(" "),i("el-dialog",{attrs:{title:e.dialogTitle,"show-close":!1,"before-close":e.onCloseRecordsDialog,visible:e.dialogVisible,width:"1500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible&&e.tempRecordSearch.id?[i("records",{attrs:{"record-search":e.tempRecordSearch}})]:e._e(),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.onCloseRecordsDialog}},[e._v("关 闭")])],1)],2)],1)},r=[],a=(i("8e6e"),i("456d"),i("bd86")),s=(i("ac6a"),i("2f62")),c=i("ed08"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"record-wrap"},[i("div",{staticClass:"record-player"},[i("div",{staticClass:"record-time-select"},[i("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"small",clearable:!1,"value-format":"timestamp","picker-options":e.pickerOptions,placeholder:"选择日期"},on:{change:e.onSearchTimeChange},model:{value:e.searchTime,callback:function(t){e.searchTime=t},expression:"searchTime"}})],1),e._v(" "),e.recordList.length>0&&e.hasInitMinute?[e.recordSP?i("jessibuca-player",{key:e.recordSP,attrs:{"stream-path":e.recordSP},on:{doPlayed:e.handlePlayed}}):i("p",{staticStyle:{"text-align":"center"}},[e._v("初始化...")])]:e._e()],2),e._v(" "),i("div",{staticClass:"record-time"},[i("div",{ref:"timeDay",staticClass:"time-day"},[e._l(e.minuteList,(function(t){return i("div",{staticClass:"time-minute",class:{active:t.hasRecord},attrs:{title:t.title},on:{click:function(i){return e.onMinuteClick(t)}}})})),e._v(" "),e._l(e.hourList,(function(t){return i("div",{staticClass:"time-text"},[e._v("\n        "+e._s(t.title)+"\n      ")])}))],2),e._v(" "),e.playTime.now?i("div",{staticClass:"time-cursor",style:e.playTimeStyle,on:{mousedown:e.onStartMove,mousemove:e.onDoingMove,mouseup:e.onStopMove}},[i("div",{staticClass:"time-cursor-text"},[e.isPlayTimeMoving?[e._v("\n          "+e._s(e.playMoveTime)+"\n        ")]:[e._v("\n          "+e._s(e._f("parseTimeFilter")(e.playTime.now,"{h}:{i}:{s}"))+"\n        ")]],2)]):e._e()])])},l=[],u=(i("6b54"),i("a481"),i("96cf"),i("3b8d")),h=(i("7514"),i("a7ca")),d=i("4ec3");function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){Object(a["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var f=(new Date).getTime();function b(){for(var e=[],t=1;t<1440;t++)e.push({title:Object(c["b"])(t),timestamp:t,endTimestamp:"",hasRecord:!1});return e}function v(){for(var e=[],t=0;t<24;t++){var i=t+":00";i<10&&(i="0"+i),e.push({title:i,timestamp:t+1})}return e}var y={name:"Record",props:{recordSearch:{type:Object,default:function(){return{}}}},data:function(){return{id:"",channel:"",hasInitMinute:!1,hasQuery:!1,searchTime:f,minuteList:b(),hourList:v(),playTime:{start:"",end:"",now:""},isPlaying:!1,pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},recordSP:null,isPlayTimeMoving:!1,playTimeOffset:0,loading:!1}},created:function(){this.channel=this.recordSearch.deviceId,this.id=this.recordSearch,this.init()},timeInterval:null,components:{JessibucaPlayer:h["a"]},watch:{recordList:function(){!this.hasInitMinute&&this.hasQuery&&(this.hasInitMinute=!0,this.updateMinuteList())}},computed:m(m({},Object(s["b"])({gb28181List:function(e){return e.Gb28181List},gb28181ChannelList:function(e){var t=[];return e.Gb28181List.forEach((function(e){var i=e.Channels||[];i.length>0&&(t=t.concat(i.map((function(t){return t.id=e.ID,t.deviceId=t.DeviceID,t}))))})),t}})),{},{gb28181Channel:function(){var e=this;return this.gb28181ChannelList.find((function(t){return t.deviceId===e.recordSearch.deviceId&&t.id===e.recordSearch.id}))},recordList:function(){var e=[];if(this.gb28181Channel){var t=this.gb28181Channel.Records||[];e=t.map((function(e){var t=new Date(e.StartTime).getTime(),i=new Date(e.EndTime).getTime(),n=i-t,r=Object(c["j"])(t),a=Object(c["j"])(i);return e._startTime=t/1e3>>0,e._endTime=i/1e3>>0,e.timeLength=Math.floor(n/1e3/60%60),e.startTime=r,e.endTime=a,e.startTimestamp=t,e.endTimestamp=i,e}))}return e},playTimeStyle:function(){var e=0;if(this.isPlayTimeMoving)e=this.playTimeOffset;else if(this.playTime.now){var t=new Date(this.playTime.now),i=t.getHours(),n=t.getMinutes();e=60*i+n}var r={left:e+"px"};return r},playMoveTime:function(){return Object(c["b"])(this.playTimeOffset)}}),methods:{init:function(){if(this.gb28181Channel){var e=this.gb28181Channel.RecordStartTime,t=this.gb28181Channel.RecordEndTime;if(e&&t){var i=this.getSearchTimeRange();i.start===e&&i.end===t?(this.hasQuery=!0,this.hasInitMinute||(this.hasInitMinute=!0,this.updateMinuteList())):this.fetchList()}else this.fetchList()}else this.fetchList()},fetchList:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.hasQuery=!1,this.hasInitMinute=!1,this.playTime.now="",t=this.getSearchTimeRange(),i={id:this.recordSearch.id,channel:this.recordSearch.deviceId,startTime:t.start,endTime:t.end},e.next=7,Object(d["s"])(i);case 7:this.hasQuery=!0;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getSearchTimeRange:function(){var e=Object(c["f"])(this.searchTime),t=e.start,i=e.end,n=new Date(t+288e5).toISOString(),r=new Date(i+288e5).toISOString();return{start:n.replace(".000Z",""),end:r.replace(".000Z","")}},onSearchTimeChange:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.minuteList=b(),e.prev=1,e.next=4,this.stop();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](1);case 8:return e.next=10,this.fetchList();case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}(),updateMinuteList:function(){var e=this;this.playTime.start="",this.playTime.now="",this.playTime.endTime="",this.minuteList.forEach((function(t){var i=e.formatMinuteItemTimestamp(t);e.recordList.forEach((function(n){n.startTimestamp<=i&&n.endTimestamp>i&&(t.hasRecord=!0,t.endTimestamp=n.endTimestamp,e.playTime.start||(Object(c["i"])(n.startTimestamp,e.searchTime)?e.playTime.start=n.startTimestamp:e.playTime.start=Object(c["f"])(e.searchTime).start,e.playTime.end=n.endTimestamp))}))})),this.playTime.start&&this.play()},formatMinuteItemTimestamp:function(e){var t=Math.floor(e.timestamp/60)%60,i=Math.floor(e.timestamp%60),n=new Date(this.searchTime).setHours(t,i,0,0);return n},onStartMove:function(e){this.isPlayTimeMoving=!0,this.updatePlayTimeOffset(e)},onDoingMove:function(e){this.isPlayTimeMoving&&this.updatePlayTimeOffset(e)},onStopMove:function(e){if(this.isPlayTimeMoving){var t=this.minuteList[this.playTimeOffset];t&&this.onMinuteClick(t),this.isPlayTimeMoving=!1,this.playTimeOffset=0}},updatePlayTimeOffset:function(e){var t=this.getTimeRect(),i=e.clientX-t.left;this.playTimeOffset=parseInt(i,10)},getTimeRect:function(){var e=this.$refs.timeDay;return e.getBoundingClientRect()},onMinuteClick:function(e){if(e.hasRecord){var t=this.formatMinuteItemTimestamp(e);this.playTime.start=t,this.playTime.end=e.endTimestamp,this.play()}},play:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.stop();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e["catch"](0);case 7:return t={id:this.recordSearch.id,channel:this.recordSearch.deviceId,startTime:this.playTime.start/1e3>>0,endTime:this.playTime.end/1e3>>0},e.prev=8,e.next=11,Object(d["q"])(t);case 11:this.recordSP="".concat(t.id,"/").concat(this.recordSearch.deviceId,"/").concat(t.startTime,"-").concat(t.endTime),e.next=17;break;case 14:e.prev=14,e.t1=e["catch"](8),console.error(e.t1);case 17:this.playTime.now=this.playTime.start;case 18:case"end":return e.stop()}}),e,this,[[0,5],[8,14]])})));function t(){return e.apply(this,arguments)}return t}(),handlePlayed:function(){this.clearInterval(),this.intervalPlayTime()},stop:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.clearInterval(),this.isPlaying=!1,e.abrupt("return",Object(d["c"])({id:this.recordSearch.id,channel:this.recordSearch.deviceId}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),intervalPlayTime:function(){var e=this;this.isPlaying=!0,this.$options.timeInterval=setInterval((function(){e.playTime.now+=1e3,e.checkPlayNext()}),1e3)},checkPlayNext:function(){var e=this;if(this.playTime.now===this.playTime.end){var t=this.minuteList.find((function(t){var i=e.formatMinuteItemTimestamp(t);return t.hasRecord&&e.playTime.end<=i}));t&&(this.playTime.start=this.formatMinuteItemTimestamp(t),this.playTime.end=t.endTimestamp,this.playTime.now=this.playTime.start,this.play())}},clearInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){this.$options.timeInterval&&(clearInterval(this.$options.timeInterval),this.$options.timeInterval=null)}))},destroyed:function(){try{this.stop()}catch(e){}}},g=y,T=(i("9751"),i("2877")),O=Object(T["a"])(g,o,l,!1,null,"b8c42c88",null),w=O.exports;function j(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function S(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?j(Object(i),!0).forEach((function(t){Object(a["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var P={name:"recordIndex",data:function(){return{dialogVisible:!1,searchKey:"",treeList:[],gb28181ChannelList:[],selectId:"",tempRecordSearch:{id:null,deviceId:null,title:""},currentPage:1}},components:{Records:w},watch:{gb28181List:{handler:function(e){if(e&&e.length>0&&0===this.treeList.length){var t={uuid:Object(c["m"])(),label:"设置列表",id:"",children:e.map((function(e){return{uuid:Object(c["m"])(),id:e.id,label:e.label}}))};this.treeList=[t];var i=[];e.forEach((function(e){i=i.concat(e.children)})),this.gb28181ChannelList=i}},immediate:!0}},computed:S(S({},Object(s["b"])({gb28181List:function(e){return e.Gb28181List.map((function(e){var t={uuid:Object(c["m"])(),id:e.ID,label:e.ID,children:[]};return t.children=(e.Channels||[]).map((function(t,i){var n=S({uuid:Object(c["m"])(),id:e.ID,deviceId:t.DeviceID,label:t.Name,isChannel:!0},t);return n})),t}))}})),{},{gb28181ChannelShowList:function(){var e=this;return this.gb28181ChannelList.filter((function(t){return(e.selectId&&t.id===e.selectId||""===e.selectId)&&(""===e.searchKey.trim()||t.Name&&-1!==t.Name.indexOf(e.searchKey))}))},gb28181ChannelShowPageList:function(){return this.gb28181ChannelShowList.slice(10*(this.currentPage-1),10*this.currentPage)},dialogTitle:function(){return"查看录像-"+this.tempRecordSearch.title}}),methods:{onTreeNodeSelect:function(e){this.selectId=e.id||"",this.searchKey=""},onPlay:function(e){this.tempRecordSearch.id=e.id,this.tempRecordSearch.deviceId=e.deviceId,this.tempRecordSearch.title=e.Name+"("+e.deviceId+")",this.dialogVisible=!0},onCloseRecordsDialog:function(){var e=this;this.dialogVisible=!1,this.$nextTick((function(){e.tempRecordSearch.id=null,e.tempRecordSearch.deviceId=null,e.tempRecordSearch.title=""}))}}},I=P,L=(i("2bbe"),Object(T["a"])(I,n,r,!1,null,"22b5f9d6",null));t["default"]=L.exports},f42d:function(e,t,i){"use strict";i("1742")}}]);