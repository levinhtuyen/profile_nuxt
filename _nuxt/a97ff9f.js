(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{215:function(e,t,o){var content=o(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(37).default)("2c4c0938",content,!0,{sourceMap:!1})},227:function(e,t,o){e.exports=o.p+"img/contact.8597e02.jpg"},228:function(e,t,o){"use strict";o(215)},229:function(e,t,o){var n=o(36)(!1);n.push([e.i,".container[data-v-58bff712]{margin-top:120px}form[data-v-58bff712]{margin-top:40px;text-align:left}",""]),e.exports=n},242:function(e,t,o){"use strict";o.r(t);var n=o(18),r=(o(56),o(12),{data:function(){return{showAlert:!1,formData:{name:"",email:"",message:""}}},methods:{sendMessage:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t,(data=new FormData).append("Name",o.formData.name),data.append("Email",o.formData.email),data.append("Message",o.formData.message),fetch("https://formspree.io/f/mvodbwva",{method:"POST",body:data,headers:{Accept:"application/json"}}).then((function(e){e.ok?(t.showAlert=!0,form.reset()):alert("Sending message failed, please try again")}));case 6:case"end":return e.stop()}}),e)})))()}},head:{title:"Contact 📧 - Tuyến",meta:[{hid:"description",name:"description",content:"Profile"},{hid:"og:title",name:"og:title",content:"Contact 📧 - Tuyến"},{property:"og:description",content:"Profile"},{hid:"og:image",name:"og:image",content:o(227)}]}}),l=(o(228),o(27)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{staticClass:"page animate__animated animate__fadeIn"},[o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{cols:"md-6"}},[o("h2",[e._v("Get in touch 💌")]),e._v(" "),o("p",{staticClass:"text-left"},[e._v("\n        If you have any question or just want to say hi, i'll try my best to\n        get back to you.\n      ")]),e._v(" "),e.showAlert?o("b-alert",{attrs:{show:"",variant:"success"}},[o("strong",[e._v("All done 🎉")]),o("br"),e._v("\n        Thanks for reaching out "+e._s(this.formData.name)+", I'll reply as soon\n        as i can.\n      ")]):e._e(),e._v(" "),o("b-form",{staticClass:"mb-5",on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[o("b-form-group",{attrs:{id:"input-group-1",label:"Your Name:"}},[o("b-form-input",{attrs:{placeholder:"Tuyến Lê",required:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-2",label:"Your Email:"}},[o("b-form-input",{attrs:{type:"email",placeholder:"tuyen@go2joy.com",required:""},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-3",label:"Your Message"}},[o("b-form-textarea",{attrs:{"no-resize":"",rows:"3",placeholder:"Tuyen Le, are you available for..",required:""},model:{value:e.formData.message,callback:function(t){e.$set(e.formData,"message",t)},expression:"formData.message"}})],1),e._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)],1)],1)}),[],!1,null,"58bff712",null);t.default=component.exports}}]);