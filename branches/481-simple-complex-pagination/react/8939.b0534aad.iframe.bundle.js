"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8939],{"../web-components/dist/esm/ic-pagination.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination:()=>Pagination});__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/index-90721b3c.js"),_helpers_c332acf8_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../web-components/dist/esm/helpers-c332acf8.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Pagination=function(){function Pagination(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Pagination),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.icPageChange=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"icPageChange",7),this.handleClickFirst=function(){_this.currentPage=1,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickPrevious=function(){_this.currentPage--,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickNext=function(){_this.currentPage++,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickLast=function(){_this.currentPage=_this.pages,_this.icPageChange.emit({value:_this.currentPage})},this.firstButton=function(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-button",{id:"first-page-button","aria-label":"Go to first page",size:"small",disableTooltip:!0,appearance:_this.appearance,onClick:_this.handleClickFirst,class:"page-button first-last",disabled:1===_this.currentPage,variant:"icon",innerHTML:'<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.1709 8.825L7.34589 5L11.1709 1.175L9.99589 0L4.99589 5L9.99589 10L11.1709 8.825ZM0.829224 0H2.49589V10H0.829224V0Z" fill="currentColour"/>\n</svg>'})},this.previousButton=function(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-button",{id:"previous-page-button","aria-label":"Go to previous page",size:"small",disableTooltip:!0,appearance:_this.appearance,onClick:_this.handleClickPrevious,class:"page-button next-previous",disabled:1===_this.currentPage,variant:"icon",innerHTML:'<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.08748 1.175L5.91248 0L0.912476 5L5.91248 10L7.08748 8.825L3.27081 5L7.08748 1.175Z" fill="currentColour"/>\n</svg>'})},this.nextButton=function(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-button",{id:"next-page-button","aria-label":"Go to next page",size:"small",disableTooltip:!0,appearance:_this.appearance,onClick:_this.handleClickNext,class:"page-button next-previous",disabled:_this.currentPage===_this.pages,variant:"icon",innerHTML:'<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.08748 0L0.912476 1.175L4.72914 5L0.912476 8.825L2.08748 10L7.08748 5L2.08748 0Z" fill="currentColor"/>\n</svg>\n'})},this.lastButton=function(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-button",{id:"last-page-button","aria-label":"Go to last page",size:"small",disableTooltip:!0,appearance:_this.appearance,onClick:_this.handleClickLast,class:"page-button first-last",disabled:_this.currentPage===_this.pages,variant:"icon",innerHTML:'<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0.829224 1.175L4.65422 5L0.829224 8.825L2.00422 10L7.00422 5L2.00422 0L0.829224 1.175ZM9.50422 0H11.1709V10H9.50422V0Z" fill="currentColor"/>\n</svg>\n'})},this.renderStartEllipsis=function(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-pagination-item",{appearance:_this.appearance,type:"ellipsis",id:"start-ellipsis"})},this.renderEndEllipsis=function(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-pagination-item",{appearance:_this.appearance,type:"ellipsis",id:"end-ellipsis"})},this.renderStartItems=function(){return _this.startItems.map((function(page){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-"+page,type:"page",page})}))},this.renderEndItems=function(){return _this.endItems.map((function(page){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-"+page,type:"page",page})}))},this.renderMiddleItems=function(){return _this.midItems.map((function(page){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-"+page,type:"page",page})}))},this.type="simple",this.defaultPage=1,this.adjacentCount=1,this.boundaryCount=1,this.hideFirstPageButton=!1,this.hideLastPageButton=!1,this.hideCurrentPage=!1,this.loading=!1,this.pages=void 0,this.appearance="default",this.currentPage=this.defaultPage,this.startEllipsis=!1,this.endEllipsis=!1,this.startItems=[],this.endItems=[],this.midItems=[]}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Pagination,[{key:"paginationItemClickHandler",value:function paginationItemClickHandler(ev){var page=ev.detail.page;this.currentPage=page,this.icPageChange.emit({value:this.currentPage})}},{key:"watchPageChangeHandler",value:function watchPageChangeHandler(){if("simple"!==this.type){var startItemCount,midStart,midEnd,startItems=[],endItems=[],endStart=this.pages,midItems=[],startEllipsis=!1,endEllipsis=!1;if(this.pages<=2*this.boundaryCount+2*this.adjacentCount+3){this.startEllipsis=!1,this.endEllipsis=!1;for(var i=1;i<=this.pages;i++)startItems.push(i);this.startItems=startItems}else{if(startItemCount=0===this.boundaryCount?1:this.boundaryCount,endStart=0===this.boundaryCount?this.pages:this.pages-this.boundaryCount+1,this.currentPage<=this.adjacentCount+this.boundaryCount+2){startEllipsis=!1,endEllipsis=!0;var numItems=2*this.adjacentCount+1;0===this.boundaryCount&&numItems--,midEnd=(midStart=startItemCount+1)+numItems}else if(startEllipsis=!0,this.currentPage>this.pages-(this.adjacentCount+this.boundaryCount+2)){var _numItems=2*this.adjacentCount+1;0===this.boundaryCount&&_numItems--,midStart=(midEnd=0===this.boundaryCount?this.pages-1:this.pages-this.boundaryCount)-_numItems}else endEllipsis=!0,midStart=this.currentPage-this.adjacentCount,midEnd=this.currentPage+this.adjacentCount;if(this.boundaryCount>0||0===this.boundaryCount&&!1===startEllipsis)for(var _i2=1;_i2<=startItemCount;_i2++)startItems.push(_i2);if(this.boundaryCount>0||0===this.boundaryCount&&!1===endEllipsis)for(var _i4=endStart;_i4<=this.pages;_i4++)endItems.push(_i4);for(var _i6=midStart;_i6<=midEnd;_i6++)midItems.push(_i6);this.startEllipsis=startEllipsis,this.endEllipsis=endEllipsis,this.startItems=startItems,this.endItems=endItems,this.midItems=midItems}}}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_c332acf8_js__WEBPACK_IMPORTED_MODULE_9__.a)([{prop:this.pages,propName:"pages"}],"Pagination")}},{key:"componentWillLoad",value:function componentWillLoad(){this.watchPageChangeHandler()}},{key:"render",value:function render(){var _class,_class2,type=this.type,pages=this.pages,currentPage=this.currentPage,hideCurrentPage=this.hideCurrentPage,loading=this.loading,hideFirstPageButton=this.hideFirstPageButton,hideLastPageButton=this.hideLastPageButton;return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.H,null,"simple"===type&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("nav",{class:(_class={},_class.loading=loading,_class)},hideFirstPageButton?null:this.firstButton(),this.previousButton(),hideCurrentPage?null:(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-pagination-item",{pages,appearance:this.appearance,type:"simple-current",page:currentPage}),this.nextButton(),hideLastPageButton?null:this.lastButton()),"complex"===type&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("nav",{class:(_class2={},_class2.loading=loading,_class2)},this.hideFirstPageButton?null:this.firstButton(),this.previousButton(),this.renderStartItems(),this.startEllipsis&&this.renderStartEllipsis(),this.renderMiddleItems(),this.endEllipsis&&this.renderEndEllipsis(),this.renderEndItems(),this.nextButton(),this.hideLastPageButton?null:this.lastButton()))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}],[{key:"watchers",get:function get(){return{currentPage:["watchPageChangeHandler"]}}}]),Pagination}();Pagination.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{box-sizing:border-box;height:var(--ic-space-xxl);width:100%;display:flex;justify-content:center}.loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}nav{width:100%;height:var(--ic-space-xl);display:flex;flex-flow:row wrap;justify-content:center;align-content:center;align-items:center}ic-button{cursor:pointer;margin:0 var(--ic-space-xs)}ic-button.next-previous{--icon-width:var(--ic-space-xs);--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs))}ic-button.first-last{--icon-width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs))}.disabled{color:var(--ic-architectural-200);pointer-events:none;cursor:none}'}}]);