// Autolink Phone Numbers v2.4
!function(){function e(){for(var e=document.evaluate('/html/body//text()[string-length(normalize-space(self::text())) >= 10 and not(../../parent::A|../parent::A|parent::A|parent::SCRIPT) and not(parent::span[@itemprop="faxNumber"]|parent::span[@class="tel-ignore"])]',document.body,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),t=0,n=e.snapshotLength;n>t;t++){var a=e.snapshotItem(t),r=a.parentNode,o=a.data.split(/((?:\+?\b1[ -\.]?)?\(?\b[2-9]\d\d(?:\) ?|[-\.])[2-9]\d\d[-\.]\d{4}\b)/);if(o.length>2){for(var i=1,l=o.length;l>i;i+=2){var d=document.createElement("span");1===i&&(d.innerHTML=o[0]),/\bfax:/i.test(o[i-1])===!0?d.innerHTML+=o[i]+o[i+1]:d.innerHTML+='<a href="tel:+1'+o[i].replace(/^\+?1[ -\.]?/,"").replace(/\D+/g,"")+'">'+o[i]+"</a>"+o[i+1],3===o.length&&""===o[0]&&""===o[2]&&(d=d.childNodes[0]),r.insertBefore(d,a)}r.removeChild(a)}}}location.href.indexOf("previewsite.do")<0&&location.href.indexOf("JSPeditPageContent.do")<0&&(void 0===document.evaluate?$.getScript("/design/scripts/wgxpath.install.js",e):e())}();