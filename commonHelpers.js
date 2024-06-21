import{S as d,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(s){const r="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44431015-10991196da62062e34a604eda",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}${o}?${i}`;return fetch(e).then(t=>t.json())}function p({webformatURL:s,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:a}){return`<li class="gallery-item"><a href="${r}" class="gallery-link"><img src="${s}" alt="${o}" class="gallery-img"/></a>
  <ul class="descr">
      <li class="descr-item">
        <p><b>Likes</b></p>
        <p>${i}</p>
      </li>
      <li class="descr-item">
        <p><b>Views</b></p>
        <p>${e}</p>
      </li>
      <li class="descr-item">
        <p><b>Comments</b></p>
        <p>${t}</p>
      </li>
      <li class="descr-item">
        <p><b>Downloads</b></p>
        <p>${a}</p>
      </li>
    </ul>
    </li>`}function h(s){return s.map(p).join("")}const c=document.querySelector(".form"),n=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new d(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});c.addEventListener("submit",y);function y(s){s.preventDefault();const r=c.elements.search.value;if(r===""){n.innerHTML="",l("Please enter data for search","#ffa000");return}b(),m(r).then(o=>{if(o.hits.length===0)n.innerHTML="",l("Sorry, there are no images matching your search query. Please try again!","#ef4040");else{const i=h(o.hits);n.innerHTML=i,g.refresh()}}).catch(o=>l("An error occurred while fetching photos. Please try again later.","#EF4040")).finally(()=>{L()}),c.reset()}function l(s,r){f.show({message:s,position:"topRight",backgroundColor:r,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}function b(){u.classList.remove("visually-hidden")}function L(){u.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
