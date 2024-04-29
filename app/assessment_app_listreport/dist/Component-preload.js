//@ui5-bundle com/mindset/assessmentapplistreport/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/mindset/assessmentapplistreport/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.mindset.assessmentapplistreport.Component",{metadata:{manifest:"json"}})});
},
	"com/mindset/assessmentapplistreport/i18n/i18n.properties":'# This is the resource bundle for com.mindset.assessmentapplistreport\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,78\nflpTitle=Assessment List Report app\n',
	"com/mindset/assessmentapplistreport/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.mindset.assessmentapplistreport","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.1","toolsId":"931b3432-7ae2-4ea4-819c-d21435955b0f"},"dataSources":{"mainService":{"uri":"odata/v4/quiz/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"assessment_listreport-display":{"semanticObject":"assessment_listreport","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.mindset.assessmentapplistreport.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"QuizList","target":"QuizList"},{"pattern":"Quiz({key}):?query:","name":"QuizObjectPage","target":"QuizObjectPage"}],"targets":{"QuizList":{"type":"Component","id":"QuizList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Quiz","variantManagement":"Page","navigation":{"Quiz":{"detail":{"route":"QuizObjectPage"}}}}}},"QuizObjectPage":{"type":"Component","id":"QuizObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Quiz"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"assessment_router"}}'
}});