module.exports=function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}({0:function(t,e){t.exports=flarum.core.compat.app},9:function(t,e,r){"use strict";r.r(e);var i=r(0),n=r.n(i),a=["preview-with-link","preview-without-link","full-with-link","full-without-link"];n.a.initializers.add("imgur-upload",(function(){n.a.extensionData.for("matteocontrini-imgur-upload").registerSetting({setting:"imgur-upload.client-id",label:"Imgur Client ID",type:"text"}).registerSetting({setting:"imgur-upload.image-url",label:"Imgur Image url eg: https://i.imgur.com",type:"text",default:"https://i.imgur.com"}).registerSetting({setting:"imgur-upload.api-url",label:"Imgur Api url eg: https://api.imgur.com/3/image",type:"text",default:"https://api.imgur.com/3/image"}).registerSetting({setting:"imgur-upload.hide-markdown-image",label:n.a.translator.trans("imgur-upload.admin.settings.hide-markdown-image"),type:"boolean"}).registerSetting({setting:"imgur-upload.allow-paste",label:n.a.translator.trans("imgur-upload.admin.settings.allow-paste"),type:"boolean"}).registerSetting({setting:"imgur-upload.embed-type",label:n.a.translator.trans("imgur-upload.admin.settings.embed-type.title"),type:"select",options:Object.fromEntries(a.map((function(t){return[t,n.a.translator.trans("imgur-upload.admin.settings.embed-type."+t)]}))),default:"preview-with-link"})}))}});
//# sourceMappingURL=admin.js.map