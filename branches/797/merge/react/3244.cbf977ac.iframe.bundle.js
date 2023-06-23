"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3244],{"../web-components/dist/esm/ic-date-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_date_input:()=>DateInput});__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var IcDateInputMonths,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../web-components/dist/esm/index-a77644e1.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../web-components/dist/esm/types-dd515332.js"),_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../web-components/dist/esm/helpers-3f819970.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}!function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={}));var inputIds=0,DateInput=function(){function DateInput(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DateInput),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.r)(this,hostRef),this.icChange=(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.c)(this,"icChange",7),this.icBlur=(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.c)(this,"icBlur",7),this.icFocus=(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.c)(this,"icFocus",7),this.previousSelectedDate=null,this.selectedDate=null,this.inputsInOrder=[],this.isDateSetFromKeyboardEvent=!1,this.initialValue=this.value,this.FIT_TO_VALUE="fit-to-value",this.EVENT_OBJECT_STRING="[object Event]",this.KEYBOARD_EVENT_OBJECT_STRING="[object KeyboardEvent]",this.INPUT_EVENT_OBJECT_STRING="[object InputEvent]",this.ARIA_INVALID="aria-invalid",this.ARIA_LABEL="aria-label",this.isValidDay=!0,this.isValidMonth=!0,this.isValidDate=!0,this.isDisabledDate=!1,this.isKeyboardOrEvent=function(event){return Object.prototype.toString.call(event)===_this.EVENT_OBJECT_STRING||Object.prototype.toString.call(event)===_this.KEYBOARD_EVENT_OBJECT_STRING},this.setDateValidity=function(){(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(_this.day)?_this.isValidDay=!0:+_this.day>31?_this.isValidDay=!1:_this.isValidDay=!0,(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(_this.month)?_this.isValidMonth=!0:+_this.month>12?_this.isValidMonth=!1:_this.isValidMonth=!0},this.handleInput=function(event){var inputEvent=event,input=event.target;input!==_this.yearInputEl?("deleteContentBackward"===inputEvent.inputType||_this.preventAutoFormatting?_this.preventAutoFormatting&&(2!==input.value.length||_this.isKeyboardOrEvent(event)?_this.setInputValue(input):(_this.setInputValue(input),_this.setPreventInput(input,!0),_this.moveToNextInput(input))):(1===input.value.length&&(input===_this.dayInputEl&&+input.value>=4||input===_this.monthInputEl&&+input.value>=2)&&+input.value<=9&&(_this.setInputValue(input),_this.notifyScreenReader(input,event),_this.moveToNextInput(input)),2===input.value.length?(0==+input.value&&(input.value="01"),_this.setInputValue(input),_this.setPreventInput(input,!0),_this.notifyScreenReader(input,event),_this.moveToNextInput(input)):_this.setPreventInput(input,!1)),2!==input.value.length&&_this.setPreventInput(input,!1)):4===input.value.length?(_this.setInputValue(input),Object.prototype.toString.call(event)!==_this.EVENT_OBJECT_STRING&&_this.moveToNextInput(input),_this.setPreventInput(input,!0)):(_this.setInputValue(input,!0),_this.setPreventInput(input,!1)),_this.setFitToValueStyling(input),0===input.value.length&&(_this.setInputValue(input,!0),_this.setValidationMessage()),_this.notifyScreenReader(input,event)},this.handleKeyDown=function(event,isInputPrevented){var input=event.target,eventKey=event.key;!/-?\d*\.?\d+(e[-+]?\d+)?|[/-]|ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Shift|Tab|Backspace/.test(eventKey)&&(!event.ctrlKey&&"Meta"!==eventKey||"v"!==eventKey&&"V"!==eventKey&&"c"!==eventKey&&"C"!==eventKey)&&event.preventDefault(),"/"===eventKey||"-"===eventKey||"."===eventKey?(event.preventDefault(),_this.moveToNextInput(input)):"ArrowRight"===eventKey||"ArrowLeft"===eventKey?(event.preventDefault(),_this.handleLeftRightArrowKeyPress(input,eventKey)):"ArrowUp"!==eventKey&&"ArrowDown"!==eventKey||(_this.preventAutoFormatting=!0,_this.handleUpDownArrowKeyPress(input,event)),_this.preventInput(event,isInputPrevented),_this.isDateSetFromKeyboardEvent=!0},this.handleFocus=function(event){event.target.select(),_this.isDateSetFromKeyboardEvent=!0},this.handleBlur=function(event){var input=event.target;_this.autocompleteInput(input)},this.handleLeftRightArrowKeyPress=function(input,key){"ArrowRight"===key?_this.moveToNextInput(input):_this.moveToPreviousInput(input)},this.setScreenReaderSelectedDate=function(){_this.selectedDateInfoEl.textContent=_this.selectedDate.toDateString()},this.handleUpDownArrowKeyPress=function(input,event){var maxValue,minValue=input===_this.yearInputEl?0:1;switch(input){case _this.dayInputEl:maxValue=31;break;case _this.monthInputEl:maxValue=12;break;case _this.yearInputEl:maxValue=9999}(null==input?void 0:input.value)?("ArrowUp"===event.key&&(+input.value===maxValue?(event.preventDefault(),input.value=minValue.toString()):input.value=(+input.value+1).toString(),_this.notifyScreenReader(input,event)),"ArrowDown"===event.key&&(+input.value===minValue?(event.preventDefault(),input.value=maxValue.toString()):input.value=(+input.value-1).toString(),_this.notifyScreenReader(input,event))):"ArrowDown"===event.key?(event.preventDefault(),input===_this.yearInputEl?input.value=(new Date).getFullYear().toString():input.value=maxValue.toString(),_this.notifyScreenReader(input,event)):"ArrowUp"===event.key&&(event.preventDefault(),input===_this.yearInputEl?input.value=(new Date).getFullYear().toString():input.value=minValue.toString(),_this.notifyScreenReader(input,event)),_this.setFitToValueStyling(input)},this.handleDateChange=function(){_this.selectedDate!==_this.previousSelectedDate&&(_this.day&&_this.month&&_this.year&&""===_this.invalidDateText?(_this.icChange.emit({value:_this.selectedDate}),_this.value=_this.selectedDate,_this.selectedDateInfoEl.textContent=" "+_this.selectedDate.toDateString()):(_this.icChange.emit({value:null}),_this.value=null,_this.selectedDateInfoEl.textContent=""),_this.previousSelectedDate=_this.selectedDate,_this.isDateSetFromKeyboardEvent||_this.updateInputValues(_this.day,_this.month,_this.year))},this.handlePaste=function(event){event.preventDefault();var pastedValue=event.clipboardData.getData("Text");if(/\d+-\d+-\d+/.test(pastedValue)||/\d+\/\d+\/\d+/.test(pastedValue)){var dateParts=pastedValue.split(/-|\//);_this.inputsInOrder.forEach((function(input,index){input.classList.add(_this.FIT_TO_VALUE),input.value=dateParts[index],_this.setInputValue(input),_this.autocompleteInput(input)}))}else _this.inputsInOrder.forEach((function(input){input.classList.remove(_this.FIT_TO_VALUE)}))},this.setDayMonthValue=function(datePart,value){switch(datePart){case"D":_this.day=value;break;case"M":_this.month=value}},this.splitStringDate=function(date){return date.split("/").length>1?date.split("/"):date.split("-").length>1?date.split("-"):[]},this.convertToDoubleDigits=function(value){return+value<10?"0"+value:value.toString()},this.isDateOrEpoch=function(date){return date instanceof Date||!isNaN(+new Date(+date))},this.setDate=function(date){var newDate,dateParts=_this.dateFormat.split("/");if(_this.isDateOrEpoch(date))newDate="string"==typeof date?new Date(+date):date,_this.day=_this.convertToDoubleDigits(newDate.getDate()),_this.month=_this.convertToDoubleDigits(newDate.getMonth()+1),_this.year=newDate.getFullYear().toString();else if("string"==typeof date){_this.splitStringDate(date).forEach((function(d,i){4===d.length?_this.year=d:_this.setDayMonthValue(dateParts[i].substring(0,1),d)}))}_this.setValidationMessage()},this.updateInputValues=function(day,month,year){_this.dayInputEl.value=day,_this.monthInputEl.value=month,_this.yearInputEl.value=year},this.setInputValue=function(input){var clear=arguments.length>1&&void 0!==arguments[1]&&arguments[1],newValue=clear?"":input.value;switch(input){case _this.dayInputEl:_this.day=newValue;break;case _this.monthInputEl:_this.month=newValue;break;case _this.yearInputEl:_this.year!==newValue&&(_this.year=newValue)}_this.setValidationMessage()},this.setValidationMessage=function(){_this.setDateValidity(),(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(_this.day)||(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(_this.month)||(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(_this.year)?_this.selectedDate=null:(_this.selectedDate=_this.convertToDate(_this.year,_this.month,_this.day),_this.isValidDate=0!=+_this.selectedDate&&_this.selectedDate.getDate()==+_this.day,_this.isDisabledDate=_this.isSelectedDateDisabled(),!_this.isValidDate||_this.isDisabledDate?_this.inputsInOrder.forEach((function(input){return input.setAttribute(_this.ARIA_INVALID,"true")})):_this.inputsInOrder.forEach((function(input){return input.removeAttribute(_this.ARIA_INVALID)}))),_this.isValidDay&&_this.isValidMonth&&_this.isValidDate?_this.isDisabledDate?"until-now"===_this.disabledDates?_this.invalidDateText=_this.dateUntilNowMessage:_this.invalidDateText=_this.dateFromNowMessage:_this.invalidDateText="":_this.invalidDateText="Please enter a valid date."},this.setInputsInOrder=function(){_this.el.shadowRoot.querySelectorAll("input").forEach((function(input){return _this.inputsInOrder.push(input)}))},this.setAriaLabelledBy=function(){var labelEl=_this.el.shadowRoot.querySelector("label"),labelId=_this.inputId+"-label";if(null!=labelEl){labelEl.id=labelId;var hasValidation=!(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(_this.validationStatus)&&!(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(_this.validationText)||!(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(_this.invalidDateText),labelledBy=labelId+" "+_this.screenReaderInfoId+" "+(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.h)(_this.inputId,""!==_this.helperText&&_this.helperText!==_this.dateFormat,hasValidation)+" "+(_this.selectedDate?_this.selectedDateInfoId:"")+" "+_this.assistiveHintId;_this.inputCompContainerEl.setAttribute("aria-labelledby",labelledBy)}},this.setPreventInput=function(input,isPrevented){switch(input){case _this.dayInputEl:_this.preventDayInput=isPrevented;break;case _this.monthInputEl:_this.preventMonthInput=isPrevented;break;case _this.yearInputEl:_this.preventYearInput=isPrevented}},this.getInputFromDatePart=function(datePart){var input,dayInput=(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("input",{class:"day-input",ref:function ref(el){return _this.dayInputEl=el},"aria-label":"day",placeholder:"DD",disabled:_this.disabled,onPaste:_this.handlePaste,inputmode:"number",pattern:"[0-9]*",onKeyDown:function onKeyDown(event){return _this.handleKeyDown(event,_this.preventDayInput)}}),monthInput=(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("input",{class:"month-input",ref:function ref(el){return _this.monthInputEl=el},"aria-label":"month",placeholder:"MM",disabled:_this.disabled,onPaste:_this.handlePaste,inputmode:"number",pattern:"[0-9]*",onKeyDown:function onKeyDown(event){return _this.handleKeyDown(event,_this.preventMonthInput)}}),yearInput=(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("input",{class:"year-input",ref:function ref(el){return _this.yearInputEl=el},"aria-label":"year",placeholder:"YYYY",maxLength:4,disabled:_this.disabled,onPaste:_this.handlePaste,inputmode:"number",pattern:"[0-9]*",onKeyDown:function onKeyDown(event){return _this.handleKeyDown(event,_this.preventYearInput)}});switch(datePart){case"D":input=dayInput;break;case"M":input=monthInput;break;case"Y":input=yearInput}return input},this.getInputsInOrder=function(){var dateParts=_this.dateFormat.split("/"),inputsInOrder=[];return dateParts.forEach((function(part){inputsInOrder.push(_this.getInputFromDatePart(part.substring(0,1)))})),inputsInOrder},this.getDescOfInputsOrder=function(){var description;switch(_this.dateFormat){case"DD/MM/YYYY":description="day, month, and year";break;case"MM/DD/YYYY":description="month, day, and year";break;case"YYYY/MM/DD":description="year, month, and day"}return description},this.getScreenReaderInfo=function(validationStatus){var inputDescriptors="";return _this.required&&(inputDescriptors+="required"),validationStatus===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_16__.a.Error&&(inputDescriptors+=" invalid data"),""===inputDescriptors?"":inputDescriptors+", "},this.preventInput=function(event,isInputPrevented){var selectedString,key=event.key,input=event.target;input&&(selectedString=input.value.substring(input.selectionStart,input.selectionEnd)),("e"===key||"."===key||"-"===key||event.key>="0"&&event.key<="9"&&isInputPrevented&&!selectedString)&&event.preventDefault()},this.isSelectedDateDisabled=function(){var currentDate=new Date,disabled=!1;return _this.disabledDates&&("until-now"===_this.disabledDates&&_this.selectedDate<currentDate||"from-now"===_this.disabledDates&&_this.selectedDate>currentDate)&&_this.selectedDate.getDate()!==currentDate.getDate()&&(disabled=!0),disabled},this.moveToNextInput=function(currentInput){var currentInputPos=_this.inputsInOrder.findIndex((function(input){return input===currentInput})),nextInput=_this.inputsInOrder[currentInputPos+1];_this.preventAutoFormatting=!1,nextInput&&nextInput.focus()},this.moveToPreviousInput=function(currentInput){var currentInputPos=_this.inputsInOrder.findIndex((function(input){return input===currentInput}));_this.preventAutoFormatting=!1,_this.inputsInOrder[currentInputPos-1]&&_this.inputsInOrder[currentInputPos-1].focus()},this.autocompleteInput=function(input){if(input===_this.yearInputEl)_this.autocompleteYear();else{var inputValue=input.value;1===inputValue.length&&(input.value=0==+inputValue?"01":"0"+inputValue,_this.setInputValue(input))}},this.autocompleteYear=function(){var inputValue=_this.yearInputEl.value,autocompletedInput="";inputValue&&(["2","0","0"].forEach((function(number,index){inputValue.length+index<=3&&(autocompletedInput+=number)})),_this.yearInputEl.value=""+autocompletedInput+inputValue,_this.setInputValue(_this.yearInputEl))},this.convertToDate=function(year,month,day){return(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(year)||(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(month)||(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(day)?null:new Date(+year,+month-1,+day)},this.handleHostBlur=function(){_this.icBlur.emit({value:_this.selectedDate})},this.handleHostFocus=function(){_this.icFocus.emit({value:_this.selectedDate})},this.handleFormReset=function(){_this.setDate(_this.initialValue),_this.setValidationMessage(),_this.handleDateChange()},this.getAriaLabel=function(input){return input.getAttribute(_this.ARIA_LABEL)},this.notifyScreenReaderArrowKeys=function(input){var liveRegion=_this.el.shadowRoot.querySelector("#live-region"),announcement="",ariaLabel=_this.getAriaLabel(input),value=+(null==input?void 0:input.value)<10?"0"+(null==input?void 0:input.value):input.value;liveRegion&&input.value&&(input===_this.monthInputEl&&IcDateInputMonths[+input.value-1]&&(announcement=value+" - "+IcDateInputMonths[+input.value-1]+", "+ariaLabel),input!==_this.dayInputEl&&input!==_this.yearInputEl||(announcement=value+", "+ariaLabel),liveRegion.textContent=announcement)},this.notifyScreenReaderInput=function(input,liveRegion){var announcement="",ariaLabel=_this.getAriaLabel(input);input===_this.dayInputEl||input===_this.monthInputEl?2===input.value.length?(input===_this.monthInputEl&&IcDateInputMonths[+input.value-1]&&_this.isValidMonth&&(announcement=input.value+" - "+IcDateInputMonths[+input.value-1]+", "+ariaLabel),input===_this.dayInputEl&&_this.isValidDay&&(announcement=input.value+", "+ariaLabel)):announcement="":announcement=4===input.value.length?input.value+", "+ariaLabel:"",liveRegion.textContent=announcement},this.setFitToValueStyling=function(input){input.value?input.classList.add(_this.FIT_TO_VALUE):input.classList.remove(_this.FIT_TO_VALUE)},this.setAriaInvalid=function(validDay,validMonth,validDate,disabledDate){_this.inputsInOrder.length&&(_this.inputsInOrder.forEach((function(input){input.removeAttribute(_this.ARIA_INVALID)})),validDay||_this.dayInputEl.setAttribute(_this.ARIA_INVALID,"true"),validMonth||_this.monthInputEl.setAttribute(_this.ARIA_INVALID,"true"),validDate&&!disabledDate||_this.inputsInOrder.forEach((function(input){input.setAttribute(_this.ARIA_INVALID,"true")})))},this.inputId="ic-date-input-"+inputIds++,this.label=void 0,this.required=!1,this.disabled=!1,this.value="",this.helperText=void 0,this.dateFormat="DD/MM/YYYY",this.validationStatus="",this.validationText="",this.disabledDates=void 0,this.dateUntilNowMessage="Dates in the past are not allowed. Please select a date in the future.",this.dateFromNowMessage="Dates in the future are not allowed. Please select a date in the past.",this.name=this.inputId,this.day="",this.month="",this.year=""}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DateInput,[{key:"notifyScreenReader",value:function notifyScreenReader(input,event){var liveRegion=this.el.shadowRoot.querySelector("#live-region");liveRegion&&(this.isKeyboardOrEvent(event)?this.notifyScreenReaderArrowKeys(input):Object.prototype.toString.call(event)===this.INPUT_EVENT_OBJECT_STRING&&this.notifyScreenReaderInput(input,liveRegion))}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(this.helperText)&&(this.helperText=this.dateFormat),this.value&&this.setDate(this.value),this.screenReaderInfoId=this.inputId+"-screen-reader-info",this.assistiveHintId=this.inputId+"-assistive-hint",this.selectedDateInfoId=this.inputId+"-selected-date-info",(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.d)(this.el,this.handleFormReset)}},{key:"componentWillUpdate",value:function componentWillUpdate(){this.isDateSetFromKeyboardEvent||this.setDate(this.value),this.setAriaInvalid(this.isValidDay,this.isValidMonth,this.isValidDate,this.isDisabledDate),this.handleDateChange(),this.isDateSetFromKeyboardEvent=!1}},{key:"componentDidRender",value:function componentDidRender(){this.setAriaLabelledBy()}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;this.setInputsInOrder(),this.value&&(this.updateInputValues(this.day,this.month,this.year),this.inputsInOrder.forEach((function(input){input.classList.add(_this2.FIT_TO_VALUE)}))),this.setAriaInvalid(this.isValidDay,this.isValidMonth,this.isValidDate,this.isDisabledDate),this.value&&this.setScreenReaderSelectedDate(),this.inputsInOrder.forEach((function(input){input.addEventListener("input",_this2.handleInput),input.addEventListener("focus",_this2.handleFocus),input.addEventListener("blur",_this2.handleBlur)}));var labelEl=this.el.shadowRoot.querySelector("label");if(this.required){var asteriskSpan=document.createElement("span");asteriskSpan.setAttribute("aria-hidden","true"),asteriskSpan.textContent=" *",null==labelEl||labelEl.appendChild(asteriskSpan)}}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.r)(this.el,this.handleFormReset)}},{key:"render",value:function render(){var _this3=this,inputId=this.inputId,label=this.label,disabled=this.disabled,helperText=this.helperText,hasCustomValidation=!(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(this.validationStatus)&&!(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(this.validationText),validationStatus=hasCustomValidation?this.validationStatus:(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(this.invalidDateText)?"":_types_dd515332_js__WEBPACK_IMPORTED_MODULE_16__.a.Error,assistiveHint="Type or use the up and down arrow keys to change the values for the "+this.getDescOfInputsOrder()+".";return(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.e)(!0,this.el,this.name,this.convertToDate(this.year,this.month,this.day),this.disabled),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)(_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.H,{onBlur:this.handleHostBlur,onFocus:this.handleHostFocus},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-input-container",{disabled},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-input-label",{for:inputId,label,helperText,disabled}),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("span",{id:this.screenReaderInfoId,class:"sr-only","aria-hidden":"true"},this.getScreenReaderInfo(validationStatus),"Date format: "+this.dateFormat+"."),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("span",{id:this.assistiveHintId,class:"sr-only","aria-hidden":"true"},assistiveHint),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("span",{id:"live-region","aria-live":"assertive",class:"sr-only"}),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-input-component-container",{id:inputId,ref:function ref(el){return _this3.inputCompContainerEl=el},disabled,validationStatus},this.getInputsInOrder()[0],"/",this.getInputsInOrder()[1],"/",this.getInputsInOrder()[2]),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("span",{id:this.selectedDateInfoId,class:"sr-only"},"Selected date:",(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("span",{ref:function ref(el){return _this3.selectedDateInfoEl=el},role:"status"})),(hasCustomValidation||!(0,_helpers_3f819970_js__WEBPACK_IMPORTED_MODULE_17__.k)(this.invalidDateText))&&(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-input-validation",{status:validationStatus,message:hasCustomValidation?this.validationText:this.invalidDateText,for:inputId})))}},{key:"el",get:function get(){return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_15__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),DateInput}();DateInput.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}input{border:0;height:100%;padding:0;outline:none;background:none;-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none}ic-input-component-container,ic-input-component-container:hover{color:var(--ic-color-tertiary-text)}.focus-indicator{padding:var(--ic-space-xxxs) var(--ic-space-xs);align-items:center}.day-input{width:1.438rem}.month-input{width:1.813rem}.year-input,.year-input.fit-to-value{width:2.313rem}.fit-to-value{width:1.25rem}.sr-only{position:absolute;left:-9999px}'}}]);