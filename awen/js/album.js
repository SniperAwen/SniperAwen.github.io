window.onload=()=>{const e=window.albumData;const t=window.albumBaseUrl;const n=["#7bd0c1","#7ecaf6","#f2849e","#8499e7","#ae85ca"];const c=3;const o=4;const s=window.innerWidth>580?false:true;const l=document.getElementById("album-back-box");const a=document.getElementById("album-all-text");const i=document.getElementById("album-current-text");const d=document.getElementById("awen-album-cover-box");const m=document.getElementById("domestic-box");const u=document.getElementById("foreign-box");const r=document.getElementById("awen-album-detail-box");const y=document.getElementById("album-we-box");const f=document.getElementById("album-picture-box");const p=document.getElementById("showimg-content");let h=false;let g=null,E=1,x,b,v,$=0,w=0,N,I,B;let L=null,k,M,X;e.forEach((e=>{const c=document.createElement("div");c.className="city-item";const o=document.createElement("img");o.className="city-img";o.src=`${t}/${e.city}/${e.coverURL}`;c.append(o);const s=document.createElement("div");s.className="city-mask";s.style.backgroundColor=n[Math.floor(Math.random()*5)];c.append(s);const l=document.createElement("div");l.className="city-name";l.innerText=e.city;c.append(l);c.addEventListener("click",(function(){i.innerText="/ "+e.city;T(e.city);Y(true)}));m.append(c)}));if(!s){const G=c-e.length%c;for(let H=0;H<G;H++){const U=document.createElement("div");U.className="city-item";m.append(U)}}a.addEventListener("click",(function(){y.innerHTML="";f.innerHTML="";Y(false)}));function Y(e){if(e){r.style.display="block";l.style.display="block";d.style.display="none"}else{d.style.display="block";r.style.display="none";l.style.display="none"}}function T(n){const{we:c,picture:l}=e.find((e=>e.city===n));if(c&&c.length){c.forEach((e=>{const c=document.createElement("div");c.className="detail-item";const o=document.createElement("img");o.className="detail-img";o.src=`${t}/${n}/${e}`;c.append(o);y.append(c)}));if(!s){const e=o-c.length%o;for(let t=0;t<e;t++){const e=document.createElement("div");e.className="detail-item";y.append(e)}}y.style.display="flex"}else{y.style.display="none"}if(l&&l.length){l.forEach((e=>{const c=document.createElement("div");c.className="detail-item";const o=document.createElement("img");o.className="detail-img";o.src=`${t}/${n}/${e.url}`;if(e.info){const t=document.createElement("div");t.className="detail-item-tip";t.innerText=e.info;c.append(t)}c.append(o);f.append(c)}));if(!s){const e=o-l.length%o;for(let t=0;t<e;t++){const e=document.createElement("div");e.className="detail-item";f.append(e)}}f.style.display="flex"}else{f.style.display="none"}q()}function q(){let e=document.querySelectorAll(".article .content img");let t=document.getElementById("showimg");function n(e){p.alt=e.alt;p.src=e.src;t.style.opacity=1;t.style.visibility="visible";if(h){g=null;E=1;x;b;v;$=0;w=0;N;I;B;L=null;k;M;X}p.style.transform="none"}function c(){t.style.opacity=0;t.style.visibility="hidden"}for(let t of e)t.addEventListener("click",(function(){n(this)}));t.addEventListener("click",c);window.addEventListener("resize",c)}if(h){function D(e){if(e.touches.length==2){const t={x:(e.touches[0].pageX-2*$+e.touches[1].pageX)/2,y:(e.touches[0].pageY-2*w+e.touches[1].pageY)/2,distance:Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))};return t}else if(e.touches.length==1){return{x:e.touches[0].pageX,y:e.touches[0].pageY}}}p.addEventListener("touchstart",(e=>{if(e.touches.length==2){let t=true;for(let n=0;n<e.touches.length;n++){if(e.touches[n].target.nodeName!="IMG"){t=false}}if(t){v=true;g=D(e);x=D(e).x;b=D(e).y}}else if(e.touches.length==1){X=true;L=D(e)}}));p.addEventListener("touchmove",(e=>{e.preventDefault();if(e.touches.length==2){if(v){let t=true;for(let n=0;n<e.touches.length;n++){if(e.touches[n].target.nodeName!="IMG"){t=false}}if(t){const t=D(e);const n=t.distance/g.distance;if(n*E<1)return false;const c={x:g.x*n,y:g.y*n};p.style.transform=`matrix(${n*E}, 0, 0, ${n*E}, ${t.x+$-c.x}, ${t.y+w-c.y})`;N=t.x+$-c.x;I=t.y+w-c.y;B=n*E}}}else if(e.touches.length==1){if(X){const t={x:e.touches[0].pageX,y:e.touches[0].pageY};p.style.transform=`matrix(${B}, 0, 0, ${B}, ${t.x-L.x+$}, ${t.y-L.y+w})`;N=t.x-L.x+$;I=t.y-L.y+w}}}));p.addEventListener("touchend",(e=>{p.style.transform=`matrix(${B}, 0, 0, ${B}, ${N}, ${I})`;$=N;w=I;E=B}))}};