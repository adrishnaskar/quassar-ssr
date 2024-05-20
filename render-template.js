module.exports=function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html><html ' +
((__t = ( _meta.htmlAttrs )) == null ? '' : __t) +
'><head>' +
((__t = ( _meta.headTags )) == null ? '' : __t) +
' <title>FoodApp</title><meta charset=utf-8><meta name=description content="A food app description"><meta name=format-detection content="telephone=no"><meta name=msapplication-tap-highlight content=no><meta name=viewport content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width"><link rel=icon type=image/ico href=/favicon.ico><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\r\n        new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\r\n      j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\r\n    })(window,document,\'script\',\'dataLayer\',\'GTM-KCK958F\');</script><script type=module crossorigin src=/assets/index.1edd4ed6.js></script><link rel=stylesheet href=/assets/index.64f7064a.css> ' +
((__t = ( _meta.endingHeadTags || '' )) == null ? '' : __t) +
'</head><body class="' +
((__t = ( _meta.bodyClasses )) == null ? '' : __t) +
'" ' +
((__t = ( _meta.bodyAttrs )) == null ? '' : __t) +
'>' +
((__t = ( _meta.bodyTags )) == null ? '' : __t) +
' <div id=q-app>' +
((__t = ( _meta.runtimePageContent )) == null ? '' : __t) +
'</div></body></html>';

}
return __p
}