window.onload=()=>{const{baseURL:e,miniURL:n,personURL:t,imgType:s,darling:i}=window.albumConfig;const{loadImgURL:o}=window.sysConfig;const c=new Date;const a=c.getFullYear();console.log("Awen Birthday: 10-18");console.log("Darling Birthday: 11-10");const l=document.querySelector("#shangshang-box");const d=e=>{const n=new Date(e).getTime();const t=c.getTime()-n;const s=Math.floor(t/(24*3600*1e3));return s};const m=()=>{const e=document.getElementById("showimg-content");let n=document.querySelectorAll(".article .content img");let t=document.getElementById("showimg");function s(n){e.src="";e.alt=n.alt;e.src=n.src.replace(/\/mini/,"");t.style.opacity=1;t.style.visibility="visible";e.style.transform="none"}function i(){t.style.opacity=0;t.style.visibility="hidden"}for(let e of n)e.addEventListener("click",(function(){s(this)}));t.addEventListener("click",i);window.addEventListener("resize",i)};i.info.forEach(((t,c)=>{const a=document.createElement("div");a.className="shangshang-item";const m=document.createElement("div");m.className="shangshang-imgBox";const r=document.createElement("img");r.className="load-img";r.src=o;const g=document.createElement("img");g.className="shangshang-img";g.src=`${e}/${i.baseURL}/${n}/${i.info.length-c}.${s}`;const h=document.createElement("p");h.className="shangshang-time";h.innerText=t.time+(t.city?" - "+t.city:"");const u=document.createElement("div");u.className="shangshang-countdown";u.innerText="已经过去了 "+d(t.time)+" 天";m.appendChild(r);m.appendChild(g);a.appendChild(m);a.appendChild(h);a.appendChild(u);l.appendChild(a)}));m()};