"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1737],{"./dist/esm/ic-divider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_divider:()=>Divider});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-fd30b77e.js"),_helpers_fc860b56_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-fc860b56.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Divider=function(){function Divider(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Divider),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.foregroundColor=(0,_helpers_fc860b56_js__WEBPACK_IMPORTED_MODULE_8__.l)()}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Divider,[{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.foregroundColor=theme.mode}},{key:"render",value:function render(){var _class;return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_7__.H,{"aria-hidden":"true"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_7__.h)("hr",{class:(_class={},_class.light=this.foregroundColor===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.I.Light,_class)}))}}]),Divider}();Divider.style="hr.sc-ic-divider{padding:0;margin:0;border:none;height:var(--ic-space-1px);background-color:var(--ic-keyline-darken-rgb)}hr.light.sc-ic-divider{background-color:var(--ic-keyline-lighten-rgb)}"}}]);