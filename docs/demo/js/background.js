var get=function(e,n){return new Promise(function(s,r){var t=new XMLHttpRequest;"json"===n&&(t.responseType=n),t.open("GET",e),t.onload=function(){200===t.status?s("json"===n?t.response:t.responseText):r(Error(t.statusText+" ("+t.status+")"))},t.onerror=function(){r(Error("Network Error"))},t.send()})};chrome.runtime.onMessage.addListener(function(e,n,s){if("msg.opentab"===e.action)return chrome.tabs.create({url:e.url}),!0;var r=null;return r="msg.jsonrequest"===e.action?"json":"xml",get(e.url,r).then(function(e){s({success:!0,message:e})}).catch(function(e){s({success:!1,message:e.message})}),!0});