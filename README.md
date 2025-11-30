# Z-Icons - Icon Component

Componente de iconos agnóstico a la tecnología basado en Web Components.

## 🚀 Instalación

```bash
npm install z-icons
```

## 📦 Generar Sprites

Antes de usar los iconos, genera los sprites SVG:

```bash
node scripts/build-svg-sprites.js
```

Esto generará:
- `dist/core/core-sprite.svg`
- `dist/neo/neo-sprite.svg`

## 🎯 Uso

### En HTML (Vanilla JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mi App</title>
</head>
<body>
  <!-- Usar el componente -->
  <z-icon name="sun" type="core" size="24"></z-icon>
  <z-icon name="moon" type="neo" size="32" color="blue"></z-icon>

  <!-- Cargar el componente -->
  <script>
    class ZIcon extends HTMLElement {
      static get observedAttributes() {
        return ["name", "type", "size", "class", "color"];
      }

      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }

      connectedCallback() {
        this.render();
      }

      attributeChangedCallback() {
        this.render();
      }

      render() {
        const name = this.getAttribute("name");
        const type = this.getAttribute("type") || "core";
        const size = this.getAttribute("size") || "24";
        const className = this.getAttribute("class") || "";
        const color = this.getAttribute("color") || "currentColor";

        if (!name) {
          console.warn("z-icon: 'name' attribute is required");
          return;
        }

        if (type !== "core" && type !== "neo") {
          console.warn(`z-icon: 'type' must be 'core' or 'neo', got '${type}'`);
          return;
        }

        const href = `./dist/${type}/${type}-sprite.svg#${name}`;

        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }
            svg {
              fill: ${color};
              width: ${size}px;
              height: ${size}px;
            }
          </style>
          <svg
            width="${size}"
            height="${size}"
            class="${className}"
            part="svg"
            aria-hidden="true"
          >
            <use href="${href}"></use>
          </svg>
        `;
      }
    }

    if (!customElements.get("z-icon")) {
      customElements.define("z-icon", ZIcon);
    }
  </script>
</body>
</html>
```

### En React

```jsx
import { useEffect } from 'react';

// Importar el componente una vez en tu app
useEffect(() => {
  if (!customElements.get('z-icon')) {
    class ZIcon extends HTMLElement {
      // ... mismo código del componente
    }
    customElements.define('z-icon', ZIcon);
  }
}, []);

// Usar en JSX
function App() {
  return (
    <div>
      <z-icon name="sun" type="core" size="24"></z-icon>
      <z-icon name="moon" type="neo" size="32"></z-icon>
    </div>
  );
}
```

### En Vue

```vue
<template>
  <div>
    <z-icon name="sun" type="core" size="24"></z-icon>
    <z-icon name="moon" type="neo" size="32"></z-icon>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (!customElements.get('z-icon')) {
    class ZIcon extends HTMLElement {
      // ... mismo código del componente
    }
    customElements.define('z-icon', ZIcon);
  }
});
</script>
```

### En Angular

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <z-icon name="sun" type="core" size="24"></z-icon>
    <z-icon name="moon" type="neo" size="32"></z-icon>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (!customElements.get('z-icon')) {
      class ZIcon extends HTMLElement {
        // ... mismo código del componente
      }
      customElements.define('z-icon', ZIcon);
    }
  }
}
```

## 🎨 Propiedades (Atributos)

| Atributo | Tipo | Default | Descripción |
|----------|------|---------|-------------|
| `name` | `string` | **requerido** | Nombre del icono (sun, moon) |
| `type` | `'core' \| 'neo'` | `'core'` | Tipo de sprite a usar |
| `size` | `string \| number` | `'24'` | Tamaño en píxeles |
| `color` | `string` | `'currentColor'` | Color del icono (CSS color) |
| `class` | `string` | `''` | Clases CSS adicionales |

## 📋 Iconos Disponibles

### Core
- `sun` - Icono de sol
- `moon` - Icono de luna

### Neo
- `sun` - Icono de sol (estilo neo)
- `moon` - Icono de luna (estilo neo)

## 🎯 Ejemplos

### Básico
```html
<z-icon name="sun" type="core"></z-icon>
```

### Con tamaño personalizado
```html
<z-icon name="moon" type="neo" size="48"></z-icon>
```

### Con color personalizado
```html
<z-icon name="sun" type="core" size="32" color="orange"></z-icon>
```

### Toggle de tema
```html
<button id="theme-toggle">
  <z-icon name="sun" type="core" size="20"></z-icon>
  Toggle Theme
</button>

<script>
  document.getElementById('theme-toggle').addEventListener('click', function() {
    const icon = this.querySelector('z-icon');
    const current = icon.getAttribute('name');
    icon.setAttribute('name', current === 'sun' ? 'moon' : 'sun');
  });
</script>
```

## 🛠️ Desarrollo

### Agregar nuevos iconos

1. Coloca archivos SVG en `src/core/icons/` o `src/neo/icons/`
2. Ejecuta el script de build:
   ```bash
   node scripts/build-svg-sprites.js
   ```
3. Los sprites se actualizarán automáticamente

### Ver ejemplo
Abre `example.html` en tu navegador para ver todos los ejemplos funcionando.

## 📝 Notas

- El componente usa Shadow DOM para encapsulación de estilos
- Compatible con todos los navegadores modernos que soportan Web Components
- No requiere transpilación ni build para uso básico
- Funciona con cualquier framework o vanilla JavaScript
