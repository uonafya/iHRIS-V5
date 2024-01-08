"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[8857],{121:function(e,i,t){t.r(i),t.d(i,{default:function(){return m}});var n,r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ihris-template",{key:e.$route.path},[e._v(" Loading... ")])},o=[],a=t(538),s={name:"fhir-page-add",data:function(){return{}},created:function(){this.getTemplate()},methods:{getTemplate:function(){fetch("/config/page/"+n).then((e=>{e.json().then((e=>{"OperationOutcome"===e.resourceType?a["default"].component("ihris-template",{name:"ihris-template",data:function(){return{issues:e.issue}},components:{"ihris-outcome":()=>t.e(2269).then(t.bind(t,5532))},template:'<div><ihris-outcome :issues="issues"></ihris-outcome></div>'}):a["default"].component("ihris-template",{name:"ihris-template",data:function(){return{isEdit:!0,fhirId:void 0,sectionMenu:e.data.sectionMenu,subFields:e.data.subFields,columns:e.data.columns,actions:e.data.actions,links:e.data.links,constraints:e.data.constraints}},components:{"ihris-practitioner-intro":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,4581)),"ihris-resource":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,9871)),"ihris-codesystem":()=>t.e(902).then(t.bind(t,6462)),"ihris-section":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,6713)),"ihris-secondary":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,9255)),"ihris-array":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,9486)),"fhir-extension":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,7631)),"fhir-reference":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,8297)),"fhir-backbone-element":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,5447)),"fhir-string":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,6832)),"fhir-attachment":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,7028)),"fhir-human-name":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,8667)),"fhir-code":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,6693)),"fhir-date":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,7814)),"fhir-date-time":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,115)),"fhir-period":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,5481)),"fhir-identifier":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,3858)),"fhir-contact-point":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,6010)),"fhir-address":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,5537)),"fhir-codeable-concept":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,5334)),"fhir-uri":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,776)),"fhir-boolean":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,338)),"fhir-positive-int":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,3541)),"fhir-unsigned-int":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,2112)),"fhir-integer":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,7727)),"fhir-coding":()=>Promise.all([t.e(3986),t.e(9765),t.e(7709),t.e(2657)]).then(t.bind(t,1251)),"fhir-money":()=>Promise.all([t.e(3986),t.e(591),t.e(1360),t.e(8384)]).then(t.bind(t,6830)),"fhir-decimal":()=>t.e(7305).then(t.bind(t,4834))},template:e.template}),this.$forceUpdate()})).catch((e=>{console.log(e),a["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),this.$forceUpdate()}))})).catch((e=>{console.log(e),a["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),this.$forceUpdate()}))}},components:{},beforeCreate:function(){n=this.$route.params.page,a["default"].component("ihris-template",{template:"<div>Loading...</div>"})}},l=s,h=t(3736),d=(0,h.Z)(l,r,o,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=resource-add.17fa39eb.js.map