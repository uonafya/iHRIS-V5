"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[4209],{3205:function(e,t,i){i.d(t,{Z:function(){return n}});var r=i(8085),a=i(3325),n=(0,a.Z)(r.Z).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},8655:function(e,t,i){i.r(t),i.d(t,{default:function(){return Z}});var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{"grid-list-xs":""}},[i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"Picker in menu","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",a,!1),r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}}),i("v-overlay",{attrs:{value:e.overlay}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}}),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.overlay=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",clipped:"",permanent:"",right:""}},[i("v-list",{staticClass:"white--text"},[i("v-list-item",[i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(t){return e.$router.push("/resource/view/student/"+e.queries.practitioner)}}},[i("v-icon",{attrs:{light:"",left:""}},[e._v("mdi-eye")]),i("span",[e._v("View Student")])],1)],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px",transition:"dialog-transition"},model:{value:e.confirmDialog,callback:function(t){e.confirmDialog=t},expression:"confirmDialog"}},[i("v-card",[i("v-toolbar",{staticClass:"darken-1 white--text text-uppercase font-weight-bold",attrs:{color:"primary",dark:""}},[e._v(" Confirm "),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(t){e.confirmDialog=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-card-text",[e._v(" Are you sure you want to add "),i("b",[e._v(e._s(e.practitionername)+" ")]),i("br"),e._v(" as a family member of "),i("b",[e._v(e._s(e.familyHead["Practitioner.name.where(use='official').given"])+" "+e._s(e.familyHead["Practitioner.name.where(use='official').family"]))])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"success"},on:{click:e.addMember}},[e._v("Yes, Proceed")])],1)],1)],1),i("b",[e._v("Student: "+e._s(e.practitionername)+" - "+e._s(e.practitionerregnum))]),i("v-card",[i("v-card-title",[e._v(" Current Family Head ")]),i("v-card-text",[i("v-row",[i("v-col",[e._v(" Name: "),i("b",[e._v(e._s(e.currentHead.name))])]),i("v-col",[e._v(" Registration Number: "),i("b",[e._v(e._s(e.currentHead.regNum))])])],1)],1)],1),i("v-card",[i("v-card-title",[e._v("Select Family Head Name")]),i("v-card-text",[i("v-row",[i("v-col",[i("v-text-field",{attrs:{label:"Search Name",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("v-col",[i("v-text-field",{attrs:{label:"Search Registration Number",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.regNum,callback:function(t){e.regNum=t},expression:"regNum"}})],1),i("v-col",{attrs:{cols:"2"}},[i("v-btn",{attrs:{color:"success"},on:{click:e.search}},[e._v("Search")])],1)],1),i("v-data-table",{staticClass:"elevation-1",staticStyle:{cursor:"pointer"},attrs:{headers:e.headers,items:e.results,"item-key":"id",options:e.options,"server-items-length":e.total,"footer-props":{"items-per-page-text":e.$t("App.hardcoded-texts.tableText"),"items-per-page-options":[5,10,20,50]},loading:e.loading},on:{"update:options":function(t){e.options=t},"click:row":e.selected}})],1)],1)],1)},a=[],n={props:["queries"],data(){return{date:"",menu:!1,overlay:!1,confirmDialog:!1,practitionername:"",practitionerregnum:"",familyHead:{},total:0,name:"",regNum:"",headers:[{text:"Surname",value:"Practitioner.name.where(use='official').family"},{text:"First Name(s)",value:"Practitioner.name.where(use='official').given"},{text:"Date of Birth",value:"Practitioner.birthDate"},{text:"Gender",value:"Practitioner.gender"},{text:"Registration Number",value:"Practitioner.extension.where(url='http://ihris.org/fhir/StructureDefinition/registration-number').valueString"}],fields:[["Surname","Practitioner.name.where(use='official').family",null],["First Name(s)","Practitioner.name.where(use='official').given",null],["Date of Birth","Practitioner.birthDate",null],["Gender","Practitioner.gender","http://ihris.org/fhir/CodeSystem/itsf-gender-codesystem"],["Registration Number","Practitioner.extension.where(url='http://ihris.org/fhir/StructureDefinition/registration-number').valueString",null]],results:[],loading:!1,update_again:{rerun:!1,restart:!1},options:{itemsPerPage:10},currentHead:{name:"",regNum:""}}},watch:{options:{handler(){this.search()},deep:!0}},methods:{selected:function(e){this.familyHead=e,this.confirmDialog=!0},addMember(){this.overlay=!0,this.confirmDialog=!1,fetch("/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/itsf-family-head-profile&practitioner=Practitioner/"+this.queries.practitioner).then((e=>{e.json().then((e=>{let t={},i=[{url:"http://ihris.org/fhir/StructureDefinition/ihris-practitioner-reference",valueReference:{reference:"Practitioner/"+this.queries.practitioner}},{url:"http://ihris.org/fhir/StructureDefinition/family-head",valueReference:{reference:"Practitioner/"+this.familyHead.id}},{url:"http://ihris.org/fhir/StructureDefinition/full-name",valueString:this.familyHead["Practitioner.name.where(use='official').given"]+" "+this.familyHead["Practitioner.name.where(use='official').family"]},{url:"http://ihris.org/fhir/StructureDefinition/registration-number",valueString:this.familyHead["Practitioner.extension.where(url='http://ihris.org/fhir/StructureDefinition/registration-number').valueString"]}],r="",a="";e&&e.entry&&e.entry.length>0?(r="PUT",t=e.entry[0].resource,t.extension=i,a="/"+t.id):(r="POST",t={resourceType:"Basic",meta:{profile:["http://ihris.org/fhir/StructureDefinition/itsf-family-head-profile"]},extension:i});let n={method:r,headers:{"Content-Type":"application/fhir+json"},redirect:"manual",body:JSON.stringify(t)};fetch("/fhir/Basic"+a,n).then((e=>{this.overlay=!1,201==e.status||200==e.status?(this.getFamilyHead(),this.$store.commit("setMessage",{type:"success",text:"Family member added"})):this.$store.commit("setMessage",{type:"error",text:"Failed to add family member."})})).catch((()=>{this.overlay=!1,this.$store.commit("setMessage",{type:"error",text:"Failed to add family member."})}))})).catch((()=>{this.$store.commit("setMessage",{type:"error",text:"An error has occured."})}))})).catch((()=>{this.$store.commit("setMessage",{type:"error",text:"An error has occured."})}))},getFamilyHead(){fetch("/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/itsf-family-head-profile&practitioner=Practitioner/"+this.queries.practitioner).then((e=>{e.json().then((e=>{if(e&&e.entry&&e.entry.length>0){let t=e.entry[0].resource;console.error(JSON.stringify(t,0,2)),this.currentHead.name=t.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/full-name"===e.url)).valueString,this.currentHead.regNum=t.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/registration-number"===e.url))?.valueString}}))}))},checkRerun(){!this.loading&&this.update_again.rerun&&(this.search(this.update_again.restart),this.update_again={rerun:!1,restart:!1})},search(e){let t="";if(this.name&&(t+="&name:contains="+this.name),this.regNum&&(t+="&regnum:contains="+this.regNum),this.loading)return this.update_again.rerun=!0,void(this.update_again.restart=this.update_again.restart||e);this.loading=!0,this.error_message=null;let i="";if(e&&(this.options.page=1),this.options.page>1&&(this.options.page===this.prevPage-1?i=this.link.find((e=>"previous"===e.relation)).url:this.options.page===this.prevPage+1&&(i=this.link.find((e=>"next"===e.relation)).url),i=i.replace(/_getpages=[^&]*&*/,"").replace("/fhir?","/fhir/Practitioner?"),i=i.substring(i.indexOf("/fhir/")),-1===i.indexOf("_total=accurate")&&(i+="&_total=accurate")),""===i){let e=this.options.itemsPerPage||10,r="";for(let t in this.options.sortBy)r&&(r+=","),this.options.sortDesc[t]&&(r+="-"),r+=this.options.sortBy[t];i="/fhir/Practitioner?_count="+e+"&_total=accurate",i+=t}this.prevPage=this.options.page,fetch(i).then((e=>{e.json().then((async e=>{if(this.results=[],e.total>0){this.link=e.link;for(let t of e.entry){let e={id:t.resource.id},i=!1;for(let r of this.fields){let a=this.$fhirpath.evaluate(t.resource,r[1]);if(e[r[1]]=await this.$fhirutils.lookup(a[0],r[2]),"Practitioner.extension.where(url='http://ihris.org/fhir/StructureDefinition/registration-number').valueString"===r[1]&&e[r[1]]===this.practitionerregnum){i=!0;break}}i||this.results.push(e)}}this.total=e.total,this.loading=!1,this.checkRerun()})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))}},created(){this.getFamilyHead(),fetch("/fhir/Practitioner/"+this.queries.practitioner).then((e=>{e.json().then((e=>{this.practitionername="",this.practitionerregnum=e.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/registration-number"===e.url))?.valueString;let t=e.name.find((e=>{e.use}));!t&&e.name&&e.name.length>0&&(t=e.name[0]),t&&(t.given&&(this.practitionername&&(this.practitionername+=" "),this.practitionername+=t.given.join(" ")),t.family&&(this.practitionername&&(this.practitionername+=" "),this.practitionername+=t.family))}))}))}},s=n,o=i(3736),l=i(3453),c=i.n(l),u=i(3150),h=i(2371),d=i(7118),f=i(2102),m=i(4228),p=i(4998),g=i(4497),v=i(6428),y=i(6816),b=i(7620),x=i(1152),_=i(5132),k=i(1058),S=i(624),P=i(2877),w=i(9762),D=i(5978),C=i(6656),V=(0,o.Z)(s,r,a,!1,null,null,null),Z=V.exports;c()(V,{VBtn:u.Z,VCard:h.Z,VCardActions:d.h7,VCardText:d.ZB,VCardTitle:d.EB,VCol:f.Z,VContainer:m.Z,VDataTable:p.Z,VDialog:g.Z,VIcon:v.Z,VList:y.Z,VListItem:b.Z,VMenu:x.Z,VNavigationDrawer:_.Z,VOverlay:k.Z,VProgressCircular:S.Z,VRow:P.Z,VSpacer:w.Z,VTextField:D.Z,VToolbar:C.Z})}}]);
//# sourceMappingURL=4209.9ca2d948.js.map