"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[9103],{"../web-components/dist/esm/ic-navigation-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_menu:()=>NavigationMenu});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../web-components/dist/esm/index-90721b3c.js"),_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/helpers-bc1ff11c.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var NavigationMenu=function(){function NavigationMenu(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,NavigationMenu),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.icNavigationMenuClose=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"icNavigationMenuClose",7),this.hasButtons=!1,this.hasNavigation=!1,this.navItemAboveButtons=!1,this.navGroupFirst=!1,this.lastTabStop=null,this.closeButton=null,this.closeMenu=function(){_this.icNavigationMenuClose.emit()},this.focusCloseButton=function(){_this.closeButton.focus&&_this.closeButton.focus()},this.focusLastTabStop=function(){if(null!==_this.lastTabStop)switch(_this.lastTabStop.tagName){case"IC-NAVIGATION-BUTTON":case"IC-NAVIGATION-ITEM":case"IC-NAVIGATION-GROUP":_this.lastTabStop.focus();break;case"A":_this.lastTabStop.focus()}},this.version="",this.status=""}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(NavigationMenu,[{key:"navItemClickHandler",value:function navItemClickHandler(){this.closeMenu()}},{key:"handleKeyDown",value:function handleKeyDown(ev){"Tab"===ev.key?ev.shiftKey?document.activeElement===this.navBarEl&&(ev.preventDefault(),this.focusLastTabStop()):document.activeElement!==this.lastTabStop&&null!==this.lastTabStop||(ev.preventDefault(),this.focusCloseButton()):"Escape"===ev.key&&this.closeMenu()}},{key:"componentWillLoad",value:function componentWillLoad(){this.navBarEl=document.querySelector("ic-top-navigation");var navigationEls=(0,_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__.u)(this.el,"navigation");navigationEls&&(this.hasNavigation=!0,"IC-NAVIGATION-ITEM"===navigationEls[navigationEls.length-1].tagName&&(this.navItemAboveButtons=!0),"IC-NAVIGATION-GROUP"===navigationEls[0].tagName&&(this.navGroupFirst=!0));var buttonContent=(0,_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__.u)(this.el,"buttons");if(null!==buttonContent)this.hasButtons=!0,this.lastTabStop=buttonContent[buttonContent.length-1];else if(this.hasNavigation){var _lastEl=navigationEls[navigationEls.length-1],slotContent=(0,_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__.F)(_lastEl,"navigation-item");this.lastTabStop=null!==slotContent?slotContent:_lastEl}}},{key:"componentDidLoad",value:function componentDidLoad(){this.focusCloseButton()}},{key:"componentWillRender",value:function componentWillRender(){this.hasNavigation=(0,_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"navigation"),this.hasButtons=(0,_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"buttons")}},{key:"render",value:function render(){var _class,_class2,_this2=this;return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.H,null,(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"popout-modal",onClick:this.closeMenu}),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"popout-menu",role:"dialog","aria-modal":"true","aria-label":(this.hasNavigation?"Navigation":"App")+" menu"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{"aria-hidden":"true",id:"navigation-landmark-text",class:"navigation-landmark-text"},"Main navigation"),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("nav",{"aria-labelledby":"navigation-landmark-text","aria-hidden":this.hasNavigation?"false":"true"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:(_class={},_class["menu-close-button-container"]=!0,_class["nav-group-first"]=this.navGroupFirst,_class)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-button",{ref:function ref(el){return _this2.closeButton=el},id:"menu-close-button",class:"menu-close-button",variant:"icon",size:"large","aria-label":"Close "+(this.hasNavigation?"navigation":"app")+" menu",onClick:this.closeMenu},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("svg",{slot:"icon",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"#1759BC"})))),this.hasNavigation&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"navigation"})),this.hasButtons&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:(_class2={},_class2["menu-buttons-container"]=!0,_class2["menu-buttons-container-nav-item-above"]=this.navItemAboveButtons,_class2)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"buttons"})),(""!==this.status||""!==this.version)&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"menu-status-version-container"},""!==this.status&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"menu-status"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"label-uppercase","aria-label":"app tag",class:"menu-status-text"},this.status)),""!==this.version&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"menu-version"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"label",class:"menu-version-text","aria-label":"app version"},this.version)))))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),NavigationMenu}();NavigationMenu.style=":host{display:block}.popout-modal{position:absolute;top:0;right:0;bottom:0;left:0}.popout-menu{position:fixed;top:0;right:0;width:16rem;bottom:0;background-color:var(--ic-architectural-20);color:var(--ic-color-primary-text);box-shadow:var(--ic-elevation-overlay);overflow-y:auto;overflow-x:hidden;z-index:var(--ic-z-index-navigation-menu)}:host(.inline) .popout-menu{position:absolute}.menu-close-button-container{position:relative;left:11.875rem;padding:var(--ic-space-md) 0}.nav-group-first{padding-bottom:0}.menu-buttons-container{padding:var(--ic-space-sm) 0;border-bottom:0.063rem solid var(--ic-architectural-200)}.menu-buttons-container-nav-item-above{margin-top:var(--ic-space-md);border-top:0.063rem solid var(--ic-architectural-200)}.menu-status-version-container{display:inline-flex;margin:var(--ic-space-md) var(--ic-space-md) var(--ic-space-xl)}.menu-status{background-color:var(--ic-architectural-500);color:var(--ic-color-white-text);border-radius:5rem;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) var(--ic-space-sm);margin-right:var(--ic-space-xs)}.menu-version{border-radius:1rem;background-color:var(--ic-architectural-100);padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-status-text,.menu-version-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:5.625rem}.navigation-landmark-text{position:absolute;width:0.063rem;height:0.063rem;padding:0;margin:-0.063rem;overflow:hidden}"}}]);