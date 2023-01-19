"use strict";(self.webpackChunkbalena_labs_docs=self.webpackChunkbalena_labs_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/starter-interface/","docId":"Introduction"},{"type":"link","label":"Developing Locally","href":"/starter-interface/Developing Locally","docId":"Developing Locally"},{"type":"link","label":"Continuous Integration","href":"/starter-interface/Continuous Integration","docId":"Continuous Integration"},{"type":"category","label":"Built-in components","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Backend Endpoints","href":"/starter-interface/Built-in components/Backend Endpoints","docId":"Built-in components/Backend Endpoints"},{"type":"link","label":"Cache Timeouts and Queuing","href":"/starter-interface/Built-in components/Cache Timeouts and Queuing","docId":"Built-in components/Cache Timeouts and Queuing"},{"type":"link","label":"CloudLink Check","href":"/starter-interface/Built-in components/CloudLink Check","docId":"Built-in components/CloudLink Check"},{"type":"link","label":"File Manager","href":"/starter-interface/Built-in components/File Manager","docId":"Built-in components/File Manager"},{"type":"link","label":"I18n","href":"/starter-interface/Built-in components/I18n","docId":"Built-in components/I18n"},{"type":"link","label":"Supervisor and SDK","href":"/starter-interface/Built-in components/Supervisor and SDK","docId":"Built-in components/Supervisor and SDK"},{"type":"link","label":"System Info","href":"/starter-interface/Built-in components/System Info","docId":"Built-in components/System Info"}]},{"type":"category","label":"Customising the Environment","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/starter-interface/Customising the Environment/Architecture","docId":"Customising the Environment/Architecture"},{"type":"link","label":"Customising Page Content","href":"/starter-interface/Customising the Environment/Customising Page Content","docId":"Customising the Environment/Customising Page Content"},{"type":"link","label":"Device Configuration","href":"/starter-interface/Customising the Environment/Device Configuration","docId":"Customising the Environment/Device Configuration"},{"type":"link","label":"Styles","href":"/starter-interface/Customising the Environment/Styles","docId":"Customising the Environment/Styles"}]},{"type":"link","label":"Useful Extensions","href":"/starter-interface/Useful Extensions","docId":"Useful Extensions"}]},"docs":{"Built-in components/Backend Endpoints":{"id":"Built-in components/Backend Endpoints","title":"Backend Endpoints","description":"A backend for performing functions on the device is included. This is used to interact with the Balena Supervisor, SDK and other endpoints. You can however, also add your own backend endpoints to interact with other peripherals or software. An example can be found in expressjs/src/routes/v1/Examples.ts","sidebar":"tutorialSidebar"},"Built-in components/Cache Timeouts and Queuing":{"id":"Built-in components/Cache Timeouts and Queuing","title":"Cache Timeouts and Queuing","description":"In the ExpressJS backend there is middleware available for caching and queueing requests. This prevents unnecessary calls to the Supervisor or SDK and also prevents multiple requests to the same endpoint from being made at the same time to speed up responses and reduce traffic. It follows a number of general rules:","sidebar":"tutorialSidebar"},"Built-in components/CloudLink Check":{"id":"Built-in components/CloudLink Check","title":"CloudLink Check","description":"On first load of the app the ExpressJS backend will check to see if you have a connection to balena CloudLink. You can get the results of this check with the following code:","sidebar":"tutorialSidebar"},"Built-in components/File Manager":{"id":"Built-in components/File Manager","title":"File Manager","description":"A file manager is built into the UI. It can be used for any purpose you deem fit, but by default is pointed at an empty directory in a volume where you can upload, access and delete files and folders.","sidebar":"tutorialSidebar"},"Built-in components/I18n":{"id":"Built-in components/I18n","title":"I18n","description":"Add or edit languages","sidebar":"tutorialSidebar"},"Built-in components/Supervisor and SDK":{"id":"Built-in components/Supervisor and SDK","title":"Supervisor and SDK","description":"A number of endpoints are already included for communicating with the SDK and Supervisor.","sidebar":"tutorialSidebar"},"Built-in components/System Info":{"id":"Built-in components/System Info","title":"System Info","description":"Accessing System Info","sidebar":"tutorialSidebar"},"Continuous Integration":{"id":"Continuous Integration","title":"Continuous Integration","description":"GitHub Workflows","sidebar":"tutorialSidebar"},"Customising the Environment/Architecture":{"id":"Customising the Environment/Architecture","title":"Architecture","description":"This project is a monorepo, built around a front and backend. Both are compiled together at build time, serving the frontend from the Express backend. The below outlines the structure of the project, highlighting only the key areas where interaction tends to be needed:","sidebar":"tutorialSidebar"},"Customising the Environment/Customising Page Content":{"id":"Customising the Environment/Customising Page Content","title":"Customising Page Content","description":"The method for configuring what is shown where is a WIP. This page will be updated when it\'s done.","sidebar":"tutorialSidebar"},"Customising the Environment/Device Configuration":{"id":"Customising the Environment/Device Configuration","title":"Device Configuration","description":"USB Mounting","sidebar":"tutorialSidebar"},"Customising the Environment/Styles":{"id":"Customising the Environment/Styles","title":"Styles","description":"All style configuration can be done from ui/src/config/qStyles.ts:","sidebar":"tutorialSidebar"},"Developing Locally":{"id":"Developing Locally","title":"Developing Locally","description":"Requisites","sidebar":"tutorialSidebar"},"Introduction":{"id":"Introduction","title":"Introduction","description":"A community-built device interface for using balena devices. It can be used to interact with your device, or as a starter project to create your own interface.","sidebar":"tutorialSidebar"},"Useful Extensions":{"id":"Useful Extensions","title":"Useful Extensions","description":"Here is a list of useful extensions that can be easily integrated in to the project. Balena Hub has an array of useful blocks, these are just a few projects we felt are worth highlighting:","sidebar":"tutorialSidebar"}}}')}}]);