(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{870:function(e,t,n){"use strict";n.r(t);n(7);var o={name:"ResetPasswordForm",data:function(){return{passwords:{old_password:"",new_password1:"",new_password2:""},oldPasswordError:"",newPassword1:"",newPassword1Error:"",newPassword2:"",newPassword2Error:"",loading:!1}},methods:{changePassword:function(e){var t=this;this.loading=!0,this.$user.changePassword(this.passwords).then((function(e){t.$store.dispatch("showSnackbar",t.$t("settings.personal.changed")),t.passwords={old_password:"",new_password1:"",new_password2:""}})).catch((function(e){"old_password"in e&&(t.oldPasswordError=e.old_password[0]),"new_password1"in e&&(t.newPassword1Error=e.new_password1[0]),"new_password2"in e&&(t.newPassword2Error=e.new_password2[0])})).finally((function(){t.loading=!1}))}}},r=n(23),l=n(24),c=n.n(l),d=n(140),v=n(208),w=n(43),_=n(715),h=n(649),m=n(65),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mb-4"},[n("v-card-text",[n("h3",[e._v(e._s(e.$t("settings.personal.changePassword")))]),e._v(" "),n("v-form",{staticClass:"mt-3"},[n("v-text-field",{attrs:{label:e.$t("settings.personal.oldPass"),"error-messages":e.oldPasswordError,type:"password","prepend-icon":"lock"},on:{keyup:function(t){e.oldPasswordError=""}},model:{value:e.passwords.old_password,callback:function(t){e.$set(e.passwords,"old_password",t)},expression:"passwords.old_password"}}),e._v(" "),n("v-text-field",{staticClass:"mt-2",attrs:{label:e.$t("settings.personal.newPass"),"error-messages":e.newPassword1Error,type:"password","prepend-icon":"lock"},on:{keyup:function(t){e.newPassword1Error=""}},model:{value:e.passwords.new_password1,callback:function(t){e.$set(e.passwords,"new_password1",t)},expression:"passwords.new_password1"}}),e._v(" "),n("v-text-field",{staticClass:"mt-2",attrs:{label:e.$t("settings.personal.confirmPass"),"error-messages":e.newPassword2Error,type:"password","prepend-icon":"lock"},on:{keyup:function(t){e.newPassword2Error=""}},model:{value:e.passwords.new_password2,callback:function(t){e.$set(e.passwords,"new_password2",t)},expression:"passwords.new_password2"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{loading:e.loading,color:"success"},on:{click:function(t){return e.changePassword()}}},[e._v("\n      "+e._s(e.$t("buttons.update"))+"\n    ")])],1)],1)}),[],!1,null,null,null),f=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:w.a,VCardText:w.b,VForm:_.a,VSpacer:h.a,VTextField:m.a});n(33);var P={name:"ChangeLanguage",data:function(){return{loading:!1,selectedLanguage:""}},mounted:function(){this.selectedLanguage=(" "+this.$store.state.admin.language).slice(1)},methods:{changeLanguage:function(){var e=this;this.loading=!0,this.$user.changeLanguage(this.selectedLanguage).then((function(t){e.$i18n.locale=e.selectedLanguage,e.$store.dispatch("showSnackbar",e.$t("settings.personal.languageChanged"))})).finally((function(){e.loading=!1}))}}},T=n(34),$=Object(r.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mb-4"},[n("v-card-text",[n("h3",[e._v(e._s(e.$t("settings.personal.language")))]),e._v(" "),n("v-form",{staticClass:"mt-3"},[n("v-select",{attrs:{items:e.$store.state.languages,label:e.$t("settings.global.selectLanguage"),"item-value":"id","item-text":"language"},model:{value:e.selectedLanguage,callback:function(t){e.selectedLanguage=t},expression:"selectedLanguage"}})],1),e._v(" "),n("p",[e._v(" "+e._s(e.$t("settings.personal.refreshPage"))+" ")])],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{loading:e.loading,color:"success"},on:{click:function(t){return e.changeLanguage()}}},[e._v("\n      "+e._s(e.$t("buttons.update"))+"\n    ")])],1)],1)}),[],!1,null,null,null),y=$.exports;c()($,{VBtn:d.a,VCard:v.a,VCardActions:w.a,VCardText:w.b,VForm:_.a,VSelect:T.a,VSpacer:h.a});var x=n(803),C=n.n(x),k={name:"TOTPSetup",data:function(){return{loading:!1,otpURL:"",dialog:!1,dialogLoading:!1,otp:"",holdTimer:!1,showRecoveryKey:!1,recoveryKeys:"",qrImage:""}},methods:{getTOTPQR:function(){var e=this;this.loading=!0,this.$user.getTOTPQR().then((function(t){e.otpURL=t.otp_url,C.a.toDataURL(e.otpURL).then((function(t){e.qrImage=t})).catch((function(e){console.error(e)})).finally((function(){e.loading=!1})),e.dialog=!0}))},validateTOTP:function(){var e=this;this.dialogLoading=!0,this.$user.validateTOTP(this.otp).then((function(t){e.holdTimer=!0,e.recoveryKeys=t,e.showRecoveryKey=!0,setTimeout((function(){e.holdTimer=!1}),1e4),e.$store.commit("enabledOTP")})).catch((function(t){e.$store.dispatch("showSnackbar",e.$t("admin.TOTPNotMatch"))})).finally((function(){e.dialogLoading=!1}))}}},V=n(646),L=Object(r.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mb-4"},[n("v-card-text",[n("h3",[e._v(e._s(e.$t("settings.personal.TOTPSetup")))]),e._v(" "),e.$store.state.admin.requires_otp?n("p",{staticClass:"mt-2"},[e._v("\n      "+e._s(e.$t("settings.personal.TOTPOK"))+"\n    ")]):e._e()]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),e.$store.state.admin.requires_otp?e._e():n("v-btn",{attrs:{loading:e.loading,color:"success"},on:{click:e.getTOTPQR}},[e._v("\n      "+e._s(e.$t("buttons.enable"))+"\n    ")])],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"690"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        TOTP QR\n      ")]),e._v(" "),n("v-card-text",[e.showRecoveryKey?n("div",[e._v("\n          "+e._s(e.$t("settings.personal.recoveryKeyMessage"))+"\n          "),n("p"),e._v(" "),e._l(e.recoveryKeys,(function(i){return n("p",{key:i.key},[n("b",[e._v(" "+e._s(i.key)+" ")])])}))],2):n("div",[n("img",{attrs:{src:e.qrImage}}),e._v(" "),n("v-text-field",{attrs:{label:"OTP code"},model:{value:e.otp,callback:function(t){e.otp=t},expression:"otp"}})],1)]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),e.showRecoveryKey?n("v-btn",{attrs:{disabled:e.holdTimer,text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          "+e._s(e.$t("buttons.complete"))+"\n        ")]):e._e(),e._v(" "),e.showRecoveryKey?e._e():n("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          Cancel\n        ")]),e._v(" "),e.showRecoveryKey?e._e():n("v-btn",{attrs:{loading:e.dialogLoading,color:"primary",text:""},on:{click:e.validateTOTP}},[e._v("\n          "+e._s(e.$t("buttons.enable"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null),O=L.exports;c()(L,{VBtn:d.a,VCard:v.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VDialog:V.a,VSpacer:h.a,VTextField:m.a});var R={layout:"admin",components:{ResetPasswordForm:f,ChangeLanguage:y,TOTPSetup:O}},E=n(644),S=n(648),K=Object(r.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{attrs:{sm:"12",mb:"6","offset-mb":"3",md:"6","offset-sm":"3"}},[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"6"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"5px"}},[e._v("\n        "+e._s(e.$t("settings.personal.personal"))+"\n      ")])])],1),e._v(" "),n("ResetPasswordForm"),e._v(" "),n("TOTPSetup"),e._v(" "),n("ChangeLanguage")],1)}),[],!1,null,null,null);t.default=K.exports;c()(K,{VCol:E.a,VRow:S.a})}}]);