/* 사법개혁포털 공용 메뉴. build_pages.py MENU에서 만든다. 직접 고치지 않는다. */
(function(){var M=[["judgment", "판결문 점검기"], ["mycase", "내 사건 안내"], ["judge-map", "판사맵"], ["verify", "판결 검증"]],CSS="",B='https://newtamsa.org/p/';
function run(){if(CSS&&!document.getElementById('portal-css')){var st=document.createElement('style');st.id='portal-css';st.textContent=CSS;document.head.appendChild(st)}
document.querySelectorAll('nav.pmenu').forEach(function(nav){var cur=nav.querySelector('a[aria-current="page"]'),cs=cur?(cur.getAttribute('href')||'').split('/p/')[1]:'',old={};
nav.querySelectorAll('a').forEach(function(a){old[a.getAttribute('href')]=a});
var keep=[];M.forEach(function(m){var h=B+m[0],a=old[h];if(!a){a=document.createElement('a');a.setAttribute('href',h)}
var t=a.firstChild;if(t&&t.nodeType===3){if(t.nodeValue!==m[1])t.nodeValue=m[1]}else a.insertBefore(document.createTextNode(m[1]),t);
if(m[0]===cs)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');keep.push(a)});
Array.prototype.slice.call(nav.children).forEach(function(c){if(keep.indexOf(c)<0)nav.removeChild(c)});
keep.forEach(function(a,i){if(nav.children[i]!==a)nav.insertBefore(a,nav.children[i]||null)})})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run()})();
