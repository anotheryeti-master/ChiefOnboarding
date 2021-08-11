(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{715:function(t,e,o){"use strict";o(15),o(12),o(13);var r=o(1),n=(o(44),o(10),o(11),o(7),o(151),o(32),o(41),o(8)),l=o(88),c=o(112);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},o={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?o.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(o.valid=e(input)))})):o.valid=e(input),o},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},761:function(t,e,o){var content=o(863);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("9ce219aa",content,!0,{sourceMap:!1})},862:function(t,e,o){"use strict";o(761)},863:function(t,e,o){var r=o(16)(!1);r.push([t.i,".first_part[data-v-f9d39c58]{margin-top:-4px;display:inline-block}.button_class[data-v-f9d39c58]{display:block}.second_part[data-v-f9d39c58]{display:inline-block;position:relative;width:82%;text-align:center;top:-14px}.google_image[data-v-f9d39c58]{width:30px;margin-top:10px;margin-left:5px;margin-right:5px}.google_text[data-v-f9d39c58]{top:0}",""]),t.exports=r},926:function(t,e,o){"use strict";o.r(e);o(7);var r={data:function(){return{username:"",loading:!1,password:"",totp:"",showTOTPForm:!1}},computed:{google_url:function(){return"https://accounts.google.com/o/oauth2/auth?protocol=oauth2&response_type=code&client_id="+this.$store.state.org.google_login_client_id+"&redirect_uri="+encodeURIComponent(this.$store.state.org.base_url+"/api/auth/google_login")+"&scope=email"}},methods:{login:function(){var t=this;this.loading=!0,this.$user.login({username:this.username,password:this.password,totp:this.totp}).then((function(data){1===data.role||2===data.role?t.$router.push({name:"admin"}):t.$router.push({name:"portal"})})).catch((function(e){"totp"in e&&(t.showTOTPForm=!0)})).finally((function(){t.loading=!1}))}}},n=(o(862),o(23)),l=o(24),c=o.n(l),d=o(140),h=o(644),f=o(715),m=o(65),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-form",[o("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.showTOTPForm,expression:"!showTOTPForm"}],staticClass:"pb-0",attrs:{sm:"12"}},[o("v-text-field",{staticClass:"my-0",attrs:{label:t.$t("forms.email"),color:t.$store.state.org.accent_color,"prepend-icon":"person",name:"Email",type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.showTOTPForm,expression:"!showTOTPForm"}],staticClass:"py-0",attrs:{sm:"12"}},[o("v-text-field",{staticClass:"my-0",attrs:{id:"password",label:t.$t("forms.password"),color:t.$store.state.org.accent_color,type:"password","prepend-icon":"lock",name:"password"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:t.showTOTPForm,expression:"showTOTPForm"}],staticClass:"py-0",attrs:{sm:"12"}},[o("v-text-field",{staticClass:"my-0",attrs:{id:"totp",color:t.$store.state.org.accent_color,label:"2FA - TOTP","prepend-icon":"lock"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.totp,callback:function(e){t.totp=e},expression:"totp"}})],1),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.showTOTPForm,expression:"!showTOTPForm"}],staticClass:"py-0",attrs:{sm:"12"}},[o("nuxt-link",{style:"color: "+t.$store.state.org.accent_color,attrs:{to:"pass/reset"}},[t._v("\n        "+t._s(t.$t("admin.forgotPass"))+"\n      ")])],1)],1),t._v(" "),o("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[o("v-btn",{staticStyle:{width:"100%",color:"white",margin:"5px 0"},attrs:{loading:t.loading,color:t.$store.state.org.base_color},on:{click:t.login}},[t._v("\n      "+t._s(t.$t("buttons.login"))+"\n    ")])],1),t._v(" "),o("v-col",{staticClass:"pt-0",attrs:{sm:"12"}},[t.$store.state.org.google_login_key&&t.$store.state.org.google_login?o("v-btn",{staticStyle:{width:"100%",margin:"5px 0",border:"1px solid #dedede !important"},attrs:{href:t.google_url,color:"white"}},[o("div",{staticClass:"first_part google"},[o("img",{staticClass:"google_image",staticStyle:{width:"30px"},attrs:{src:"https://d2c76c1p4pk74e.cloudfront.net/static/google.png"}})]),t._v(" "),o("div",{staticClass:"second_part google_text"},[t._v("\n        "+t._s(t.$t("admin.loginWithGoogle"))+"\n      ")])]):t._e()],1)],1)}),[],!1,null,"f9d39c58",null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:h.a,VForm:f.a,VTextField:m.a})}}]);