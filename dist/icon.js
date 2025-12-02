var a={core:new URL("./core/core-sprite.svg",import.meta.url).toString(),neo:new URL("./neo/neo-sprite.svg",import.meta.url).toString()},e=class extends HTMLElement{constructor(){super();this.lastRenderedKey="";this.shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["name","type","size","color"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){let t=this.getAttribute("name"),s=this.getAttribute("type")||"core",r=this.getAttribute("size")||"24",o=this.getAttribute("color")||"currentColor",n=`${t}-${s}-${r}-${o}`;if(n===this.lastRenderedKey)return;this.lastRenderedKey=n;let i=a[s];if(!i||!t){this.shadow.innerHTML="";return}this.shadow.innerHTML=`
      <svg 
        width="${r}" 
        height="${r}" 
        fill="none" 
        style="color: ${o}; display: block;"
      >
        <use href="${i}#${t}"></use>
      </svg>
    `}};typeof window<"u"&&!customElements.get("z-icon")&&customElements.define("z-icon",e);var l=e;export{l as default};
