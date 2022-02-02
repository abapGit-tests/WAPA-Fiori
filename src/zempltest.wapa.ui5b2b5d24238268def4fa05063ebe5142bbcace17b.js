//@ui5-bundle de/dergutewolf/empltest/Component-preload.js                                                                                                                                                                                                     
jQuery.sap.registerPreloadedModules({                                                                                                                                                                                                                          
"version":"2.0",                                                                                                                                                                                                                                               
"modules":{                                                                                                                                                                                                                                                    
	"de/dergutewolf/empltest/Component.js":function(){sap.ui.define(["sap/suite/ui/generic/template/lib/AppComponent"],function(e){return e.extend("de.dergutewolf.empltest.Component",{metadata:{manifest:"json"}})});                                           
},                                                                                                                                                                                                                                                             
	"de/dergutewolf/empltest/i18n/i18n.properties":'# This is the resource bundle for empltest\r\n\r\n#Texts for manifest.json\r\n\r\n#XTIT: Application name\r\nappTitle=Employee Test\r\n\r\n#YDES: Application description\r\nappDescription=Employee Test App+
lication\r\n\r\nflpTitle=Employee Test\r\n\r\nflpSubtitle=\r\n',                                                                                                                                                                                               
	"de/dergutewolf/empltest/localService/mockserver.js":function(){sap.ui.define(["sap/ui/core/util/MockServer"],function(e){"use strict";var t,a="de/dergutewolf/empltest/",r=a+"localService/mockdata";return{init:function(){var n=jQuery.sap.getUriParameter+
s(),i=jQuery.sap.getModulePath(r),o=jQuery.sap.getModulePath(a+"manifest",".json"),s="EmployeeDetailSet",u=n.get("errorType"),p=u==="badRequest"?400:500,c=jQuery.sap.syncGetJSON(o).data,l=c["sap.app"].dataSources,f=l.mainService,d=jQuery.sap.getModulePat+
h(a+f.settings.localUri.replace(".xml",""),".xml"),g=/.*\/$/.test(f.uri)?f.uri:f.uri+"/",m=f.settings.annotations;t=new e({rootUri:g});e.config({autoRespond:true,autoRespondAfter:n.get("serverDelay")||1e3});t.simulate(d,{sMockdataBaseUrl:i,bGenerateMissi+
ngMockData:true});var y=t.getRequests(),h=function(e,t,a){a.response=function(a){a.respond(e,{"Content-Type":"text/plain;charset=utf-8"},t)}};if(n.get("metadataError")){y.forEach(function(e){if(e.path.toString().indexOf("$metadata")>-1){h(500,"metadata E+
rror",e)}})}if(u){y.forEach(function(e){if(e.path.toString().indexOf(s)>-1){h(p,u,e)}})}t.start();jQuery.sap.log.info("Running the app with mock data");if(m&&m.length>0){m.forEach(function(t){var r=l[t],n=r.uri,i=jQuery.sap.getModulePath(a+r.settings.loc+
alUri.replace(".xml",""),".xml");new e({rootUri:n,requests:[{method:"GET",path:new RegExp("([?#].*)?"),response:function(e){jQuery.sap.require("jquery.sap.xml");var t=jQuery.sap.sjax({url:i,dataType:"xml"}).data;e.respondXML(200,{},jQuery.sap.serializeXM+
L(t));return true}}]}).start()})}},getMockServer:function(){return t}}});                                                                                                                                                                                      
},                                                                                                                                                                                                                                                             
	"de/dergutewolf/empltest/manifest.json":'{"_version":"1.28.0","sap.app":{"id":"de.dergutewolf.empltest","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}"+
,"tags":{"keywords":[]},"resources":"resources.json","dataSources":{"mainService":{"uri":"/sap/opu/odata/sap/HCMFAB_COMMON_SRV/","type":"OData","settings":{"annotations":["annotation"],"localUri":"localService/metadata.xml"}},"annotation":{"type":"ODataA+
nnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}},"offline":false,"sourceTemplate":{"id":"ui5template.smartTemplate","version":"1.40.12"},"crossNavigation":{"inbounds":{"de-dergutewolf-empltest-inbound":+
{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"EmployeeTest","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","icon":""}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","+
phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_belize","sap_fiori_3"]},"sap.ui5":{"resources":{"js":[],"css":[]},"dependencies":{"minUI5Version":"1.84.22","libs":{"sap.ui+
.core":{"lazy":false},"sap.ui.generic.app":{"lazy":false},"sap.suite.ui.generic.template":{"lazy":false}},"components":{}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"@i18n":{"type":"sap.ui.model.resource+
.ResourceModel","uri":"i18n/i18n.properties"},"i18n|sap.suite.ui.generic.template.ListReport|EmployeeDetailSet":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/ListReport/EmployeeDetailSet/i18n.properties"},"i18n|sap.suite.ui.generic.template.O+
bjectPage|EmployeeDetailSet":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/ObjectPage/EmployeeDetailSet/i18n.properties"},"":{"dataSource":"mainService","preload":true,"settings":{"defaultBindingMode":"TwoWay","defaultCountMode":"Inline","ref+
reshAfterChange":false,"metadataUrlParams":{"sap-value-list":"none"}}}},"extends":{"extensions":{}},"contentDensities":{"compact":true,"cozy":true}},"sap.ui.generic.app":{"_version":"1.3.0","settings":{"forceGlobalRefresh":false,"objectPageHeaderType":"D+
ynamic","considerAnalyticalParameters":true,"showDraftToggle":false},"pages":{"ListReport|EmployeeDetailSet":{"entitySet":"EmployeeDetailSet","component":{"name":"sap.suite.ui.generic.template.ListReport","list":true,"settings":{"condensedTableLayout":tr+
ue,"smartVariantManagement":true,"enableTableFilterInPageVariant":true,"filterSettings":{"dateSettings":{"useDateRange":true}}}},"pages":{"ObjectPage|EmployeeDetailSet":{"entitySet":"EmployeeDetailSet","defaultLayoutTypeIfExternalNavigation":"MidColumnFu+
llScreen","component":{"name":"sap.suite.ui.generic.template.ObjectPage"}}}}}},"sap.platform.abap":{"uri":""},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.platform.hcp":{"uri":""}}',                                                  
	"de/dergutewolf/empltest/utils/locate-reuse-libs.js":'(function(e){var t=function(e){var t=e;var n="";var r=["sap.apf","sap.base","sap.chart","sap.collaboration","sap.f","sap.fe","sap.fileviewer","sap.gantt","sap.landvisz","sap.m","sap.ndc","sap.ovp","s+
ap.rules","sap.suite","sap.tnt","sap.ui","sap.uiext","sap.ushell","sap.uxap","sap.viz","sap.webanalytics","sap.zen"];function a(e,t){Object.keys(e).forEach(function(e){if(!r.some(function(t){return e===t||e.startsWith(t+".")})){if(t.length>0){t=t+","+e}e+
lse{t=e}}});return t}return new Promise(function(r,i){$.ajax(t).done(function(e){if(e){if(e["sap.ui5"]&&e["sap.ui5"].dependencies){if(e["sap.ui5"].dependencies.libs){n=a(e["sap.ui5"].dependencies.libs,n)}if(e["sap.ui5"].dependencies.components){n=a(e["sa+
p.ui5"].dependencies.components,n)}}if(e["sap.ui5"]&&e["sap.ui5"].componentUsages){n=a(e["sap.ui5"].componentUsages,n)}}r(n)}).fail(function(t){i(new Error("Could not fetch manifest at \'"+e))})})};e.registerComponentDependencyPaths=function(e){return t(+
e).then(function(e){if(e&&e.length>0){var t="/sap/bc/ui2/app_index/ui5_app_info?id="+e;var n=jQuery.sap.getUriParameters().get("sap-client");if(n&&n.length===3){t=t+"&sap-client="+n}return $.ajax(t).done(function(e){if(e){Object.keys(e).forEach(function(+
t){var n=e[t];if(n&&n.dependencies){n.dependencies.forEach(function(e){if(e.url&&e.url.length>0&&e.type==="UI5LIB"){jQuery.sap.log.info("Registering Library "+e.componentId+" from server "+e.url);jQuery.sap.registerModulePath(e.componentId,e.url)}})}})}}+
)}})}})(sap);var scripts=document.getElementsByTagName("script");var currentScript=document.getElementById("locate-reuse-libs");if(!currentScript){currentScript=document.currentScript}var manifestUri=currentScript.getAttribute("data-sap-ui-manifest-uri")+
;var componentName=currentScript.getAttribute("data-sap-ui-componentName");var useMockserver=currentScript.getAttribute("data-sap-ui-use-mockserver");sap.registerComponentDependencyPaths(manifestUri).catch(function(e){jQuery.sap.log.error(e)}).finally(fu+
nction(){sap.ui.getCore().attachInit(function(){jQuery.sap.require("jquery.sap.resources");var e=sap.ui.getCore().getConfiguration().getLanguage();var t=jQuery.sap.resources({url:"i18n/i18n.properties",locale:e});document.title=t.getText("appTitle")});if+
(componentName&&componentName.length>0){if(useMockserver&&useMockserver==="true"){sap.ui.getCore().attachInit(function(){sap.ui.require([componentName.replace(/\\./g,"/")+"/localService/mockserver"],function(e){e.init();sap.ushell.Container.createRendere+
r().placeAt("content")})})}else{sap.ui.require(["sap/ui/core/ComponentSupport"]);sap.ui.getCore().attachInit(function(){jQuery.sap.require("jquery.sap.resources");var e=sap.ui.getCore().getConfiguration().getLanguage();var t=jQuery.sap.resources({url:"i1+
8n/i18n.properties",locale:e});document.title=t.getText("appTitle")})}}else{sap.ui.getCore().attachInit(function(){sap.ushell.Container.createRenderer().placeAt("content")})}});sap.registerComponentDependencyPaths(manifestUri);'                           
}});                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                               