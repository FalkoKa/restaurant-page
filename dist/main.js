(()=>{"use strict";const t=function(){const t=document.querySelector(".main");t.textContent="",t.append(function(){const t=document.createElement("p");return t.textContent="Order Online Now!",t}())};function e(t,e,n,c,s){const i=document.createElement("div");i.setAttribute("class",t);const a=document.createElement("h2");a.textContent=e;const o=document.createElement("p");o.textContent=n;const u=document.createElement("img");return u.setAttribute("src",c),u.setAttribute("alt",s),u.setAttribute("class",t),i.appendChild(u),i.appendChild(a),i.appendChild(o),i}function n(t){document.querySelectorAll("button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const c=document.querySelector(".content"),s=document.createElement("div"),i=document.createElement("div");s.setAttribute("class","header"),i.setAttribute("class","main");const a=document.createElement("nav");a.setAttribute("class","navigation");const o=document.createElement("h1");o.textContent="Sushi88";const u=document.createElement("button");u.setAttribute("class","btn"),u.setAttribute("class","active"),u.textContent="Home",u.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(u),t())}));const r=document.createElement("button");r.setAttribute("class","btn"),r.textContent="Menu",r.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(r),function(){const t=document.querySelector(".main");t.textContent="",t.append(function(){const t=document.createElement("div");return t.setAttribute("class","menu-div"),t.appendChild(e("sushi-role","Sushi Role","This is a yummy Sushi Role","./images/sushi_role.jpg","Sushi_Role_picture")),t.appendChild(e("nigiri","Nigiri","This is yummy Nigiri","./images/sushi.jpg","Nigiri_picture")),t}())}())}));const d=document.createElement("button");d.setAttribute("class","btn"),d.textContent="Contact",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(d),function(){const t=document.querySelector(".main");t.textContent="",t.append(function(){const t=document.createElement("p"),e=document.createElement("p");t.setAttribute("class","menu-para"),e.setAttribute("class","menu-para"),t.textContent="Phone: +84 (0)919 239 1291",e.textContent="44-46 Đường số 14, Khu đô thị Him Lam, Quận 7, Thành phố Hồ Chí Minh, Vietnam";const n=document.createElement("img");n.setAttribute("src","./images/map.png"),n.setAttribute("alt",".Map Sushi88"),n.setAttribute("class","image-map");const c=document.createElement("div");return c.setAttribute("class","contact-div"),c.appendChild(t),c.appendChild(e),c.appendChild(n),c}())}())})),c.append(s),c.append(i),s.append(o),s.append(a),a.appendChild(u),a.appendChild(r),a.appendChild(d)}(),t()})();