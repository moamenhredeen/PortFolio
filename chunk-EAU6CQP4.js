import{e as Ve,g as De,j as be}from"./chunk-O5LRT74A.js";import{a as J,i as Ce}from"./chunk-ZYBEHOZY.js";import{$ as f,A as se,Bb as _e,G as oe,Lb as R,Mb as p,Ra as u,Sa as o,U as ae,Wa as Z,X as q,Z as S,Za as k,_a as D,a,b as l,cb as ce,ea as x,eb as b,fa as P,fb as de,ga as g,gb as he,hb as fe,ib as pe,jb as c,kb as d,lb as j,m as O,ma as le,nb as ge,ob as me,p as ne,ra as ue,u as re,ub as m,va as N,vb as M,wb as K,xb as T,ya as z,yb as ve,zb as ye}from"./chunk-F3RCTPZY.js";var Se=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(o(Z),o(z))},e.\u0275dir=g({type:e});let t=e;return t})(),Xe=(()=>{let e=class e extends Se{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=ue(e)))(s||e)}})(),e.\u0275dir=g({type:e,features:[D]});let t=e;return t})(),xe=new f("");var Ye={provide:xe,useExisting:q(()=>L),multi:!0};function Qe(){let t=J()?J().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var et=new f(""),L=(()=>{let e=class e extends Se{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Qe())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(o(Z),o(z),o(et,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&ge("input",function(V){return s._handleInput(V.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(V){return s._compositionEnd(V.target.value)})},features:[K([Ye]),D]});let t=e;return t})();var tt=new f(""),it=new f("");function Pe(t){return t!=null}function Ne(t){return _e(t)?ne(t):t}function ke(t){let e={};return t.forEach(i=>{e=i!=null?a(a({},e),i):e}),Object.keys(e).length===0?null:e}function je(t,e){return e.map(i=>i(t))}function nt(t){return!t.validate}function Te(t){return t.map(e=>nt(e)?e:i=>e.validate(i))}function rt(t){if(!t)return null;let e=t.filter(Pe);return e.length==0?null:function(i){return ke(je(i,e))}}function Re(t){return t!=null?rt(Te(t)):null}function st(t){if(!t)return null;let e=t.filter(Pe);return e.length==0?null:function(i){let n=je(i,e).map(Ne);return se(n).pipe(re(ke))}}function Ge(t){return t!=null?st(Te(t)):null}function Me(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Be(t){return t._rawValidators}function Ue(t){return t._rawAsyncValidators}function X(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ae(t,e){let i=X(e);return X(t).forEach(r=>{B(i,r)||i.push(r)}),i}function Ee(t,e){return X(e).filter(i=>!B(t,i))}var Y=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ge(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}};var I=class extends Y{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Q=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Xt=l(a({},ot),{"[class.ng-submitted]":"isSubmitted"}),He=(()=>{let e=class e extends Q{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(o(I,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&de("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[D]});let t=e;return t})();var A="VALID",G="INVALID",v="PENDING",E="DISABLED",_=class{},U=class extends _{constructor(e,i){super(),this.value=e,this.source=i}},w=class extends _{constructor(e,i){super(),this.pristine=e,this.source=i}},F=class extends _{constructor(e,i){super(),this.touched=e,this.source=i}},y=class extends _{constructor(e,i){super(),this.status=e,this.source=i}};function at(t){return($(t)?t.validators:t)||null}function lt(t){return Array.isArray(t)?Re(t):t||null}function ut(t,e){return($(e)?e.asyncValidators:t)||null}function ct(t){return Array.isArray(t)?Ge(t):t||null}function $(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ee=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=R(()=>this.statusReactive()),this.statusReactive=k(void 0),this._pristine=R(()=>this.pristineReactive()),this.pristineReactive=k(!0),this._touched=R(()=>this.touchedReactive()),this.touchedReactive=k(!1),this._events=new O,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return p(this.statusReactive)}set status(e){p(()=>this.statusReactive.set(e))}get valid(){return this.status===A}get invalid(){return this.status===G}get pending(){return this.status==v}get disabled(){return this.status===E}get enabled(){return this.status!==E}get pristine(){return p(this.pristineReactive)}set pristine(e){p(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return p(this.touchedReactive)}set touched(e){p(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ae(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ee(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new F(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new F(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new w(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new w(!0,n))}markAsPending(e={}){this.status=v;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,n)),this._events.next(new y(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(n=>{n.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===v)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,i)),this._events.next(new y(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=Ne(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new y(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(G)?G:A}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new w(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new F(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){$(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=lt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ct(this._rawAsyncValidators)}};var te=new f("CallSetDisabledState",{providedIn:"root",factory:()=>W}),W="always";function dt(t,e,i=W){ft(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),gt(t,e),vt(t,e),mt(t,e),ht(t,e)}function we(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),pt(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function H(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function ht(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ft(t,e){let i=Be(t);e.validator!==null?t.setValidators(Me(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Ue(t);e.asyncValidator!==null?t.setAsyncValidators(Me(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();H(e._rawValidators,r),H(e._rawAsyncValidators,r)}function pt(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=Be(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(h=>h!==e.validator);s.length!==r.length&&(i=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Ue(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(h=>h!==e.asyncValidator);s.length!==r.length&&(i=!0,t.setAsyncValidators(s))}}}let n=()=>{};return H(e._rawValidators,n),H(e._rawAsyncValidators,n),i}function gt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Le(t,e)})}function mt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Le(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Le(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function vt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function yt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function _t(t){return Object.getPrototypeOf(t.constructor)===Xe}function Ct(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===L?i=s:_t(s)?n=s:r=s}),r||n||i||null}function Fe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ie(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var $e=class extends ee{constructor(e=null,i,n){super(at(i),ut(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var We=new f(""),Vt={provide:I,useExisting:q(()=>ie)},ie=(()=>{let e=class e extends I{set isDisabled(n){}constructor(n,r,s,h,V){super(),this._ngModelWarningConfig=h,this.callSetDisabledState=V,this.update=new N,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Ct(this,s)}ngOnChanges(n){if(this._isControlChanged(n)){let r=n.form.previousValue;r&&we(r,this,!1),dt(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}yt(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&we(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(tt,10),o(it,10),o(xe,10),o(We,8),o(te,8))},e.\u0275dir=g({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[K([Vt]),D,le]});let t=e;return t})();var qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=S({});let t=e;return t})();var ze=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:te,useValue:n.callSetDisabledState??W}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=S({imports:[qe]});let t=e;return t})(),Ze=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:We,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:te,useValue:n.callSetDisabledState??W}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=S({imports:[qe]});let t=e;return t})();var C=[{id:0,title:"Angular Change Detection",description:"brief introduction to angular change detection and zone.js",date:"20 12 2024",status:"in progress",url:"angular-change-detection.md",author:"moamen hredeen"},{id:1,title:"Angular Signals",description:"what are they what advantages do they offer more than current change detection mechanism",date:"20 12 2024",status:"in progress",url:"angular-signals.md",author:"moamen hredeen"},{id:2,title:"Intro",description:"who i'm i and what do i do",date:"20 12 2024",status:"in progress",url:"intro.md",author:"moamen hredeen"},{id:3,title:"Java Performance",description:"Jvm jit is fascinating piece of software. in this post we are going to take a look at the jvm internals and the jit",date:"20 12 2024",status:"in progress",url:"java-performance.md",author:"moamen hredeen"}];var Mt=(t,e)=>e.id;function At(t,e){if(t&1&&(c(0,"li",3)(1,"div")(2,"small"),m(3),d(),c(4,"p"),m(5),ve(6,"uppercase"),d()(),c(7,"h2"),m(8),d(),c(9,"p"),m(10),d()()),t&2){let i=e.$implicit;b("routerLink",i.id+""),u(3),M(i.date),u(2),M(ye(6,5,i.status)),u(3),M(i.title),u(2),M(i.description)}}function Et(t,e){if(t&1&&(c(0,"ul"),fe(1,At,11,7,"li",3,Mt),d()),t&2){let i=me();u(),pe(i.filteredPosts)}}function wt(t,e){t&1&&(c(0,"div",2)(1,"h1"),m(2,"no posts were found"),d()())}var Ke=(()=>{let e=class e{constructor(){this.searchKeyword=new $e(""),this.filteredPosts=[...C],this.destroy$=new O}ngOnInit(){this.searchKeyword.valueChanges.pipe(oe(100),ae(this.destroy$)).subscribe({next:n=>{console.log(n),(n===void 0||n==="")&&(this.filteredPosts=[...C]),this.filteredPosts=C.filter(r=>r.title.toLowerCase().includes(n.toLowerCase()))}})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=x({type:e,selectors:[["ng-component"]],standalone:!0,features:[T],decls:4,vars:2,consts:[[1,"blog","page-container"],["type","text","placeholder","Search for blog post",3,"formControl"],[1,"empty"],[3,"routerLink"]],template:function(r,s){r&1&&(c(0,"div",0),j(1,"input",1),ce(2,Et,3,0,"ul")(3,wt,3,0,"div",2),d()),r&2&&(u(),b("formControl",s.searchKeyword),u(),he(s.filteredPosts.length>0?2:3))},dependencies:[De,ze,L,He,Ze,ie,Ce],styles:[".blog[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;background:var(--surface-container);padding:1.2rem;width:100%;font-size:1rem;border-radius:.2rem;margin:2rem 0}.blog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.blog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2rem;border-bottom:1px solid var(--on-surface);cursor:pointer}.blog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.blog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--on-surface-variant)}.blog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:var(--surface-container-low)}.blog[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:var(--on-surface-variant)}.blog[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:4rem 0;font-weight:400}@media screen and (max-width: 1000px){.blog[_ngcontent-%COMP%]{width:75%}}@media screen and (max-width: 800px){.blog[_ngcontent-%COMP%]{width:90%}}"]});let t=e;return t})();var Je=(()=>{let e=class e{constructor(n){this.activeRoute=n}ngOnInit(){let n=this.activeRoute.snapshot.params.id,r=C.find(s=>s.id===+n);console.log(r),this.url=r?.url}};e.\u0275fac=function(r){return new(r||e)(o(Ve))},e.\u0275cmp=x({type:e,selectors:[["app-post"]],standalone:!0,features:[T],decls:2,vars:1,consts:[[1,"blog-post","page-container"],["clipboard","","lineNumbers","",3,"src"]],template:function(r,s){r&1&&(c(0,"div",0),j(1,"markdown",1),d()),r&2&&(u(),b("src","posts/"+s.url))},dependencies:[be]});let t=e;return t})();var fi=[{path:"",component:Ke},{path:":id",component:Je}];export{fi as routes};
