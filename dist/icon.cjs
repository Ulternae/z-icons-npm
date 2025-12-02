var i=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var m=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},b=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of h(e))!g.call(t,s)&&s!==r&&i(t,s,{get:()=>e[s],enumerable:!(o=u(e,s))||o.enumerable});return t};var d=t=>b(i({},"__esModule",{value:!0}),t);var A={};m(A,{default:()=>f});module.exports=d(A);var l={},p={core:new URL("./core/core-sprite.svg",l.url).href,neo:new URL("./neo/neo-sprite.svg",l.url).href},n=class extends HTMLElement{static get observedAttributes(){return["name","type","size","color","class"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){let e=this.getAttribute("name"),r=this.getAttribute("type")||"core",o=this.getAttribute("size")||"24",s=this.getAttribute("color")||"currentColor",a=this.getAttribute("class")||"",c=p[r];!c||!e||(this.innerHTML=`
      <svg
        width="${o}"
        height="${o}"
        fill="none"
        color="${s}"
        class="${a}"
      >
        <use href="${c}#${e}"></use>
      </svg>
    `)}};customElements.define("z-icon",n);var f=n;
