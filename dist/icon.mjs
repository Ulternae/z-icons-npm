var c={core:new URL("./core/core-sprite.svg",import.meta.url).href,neo:new URL("./neo/neo-sprite.svg",import.meta.url).href},e=class extends HTMLElement{static get observedAttributes(){return["name","type","size","color","class"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){let t=this.getAttribute("name"),o=this.getAttribute("type")||"core",s=this.getAttribute("size")||"24",n=this.getAttribute("color")||"currentColor",i=this.getAttribute("class")||"",r=c[o];!r||!t||(this.innerHTML=`
      <svg
        width="${s}"
        height="${s}"
        fill="none"
        color="${n}"
        class="${i}"
      >
        <use href="${r}#${t}"></use>
      </svg>
    `)}};customElements.define("z-icon",e);var a=e;export{a as default};
