/**
 * SVG Sprite - Generado automáticamente
 * No editar manualmente - usar build-sprites.js
 */

/**
 * Sprite SVG completo con todos los iconos como símbolos
 */
export const neoSprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="moon" viewBox="0 0 49 50">
    <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.92 16.11a10.54 10.54 0 0 0-2.552 4.925c-.42 1.94-.288 3.963.378 5.831a10.47 10.47 0 0 0 3.387 4.72 10.11 10.11 0 0 0 10.982 1.008 10.3 10.3 0 0 0 3.136-2.55c-.278 1.552-1.156 3.647-3.594 4.93a10.79 10.79 0 0 1-11.73-1.077 11.2 11.2 0 0 1-3.628-5.055 11.45 11.45 0 0 1-.406-6.26 11.3 11.3 0 0 1 2.945-5.501q.511-.525 1.082-.972"/>
  </symbol>

  <symbol id="sun" viewBox="0 0 50 50">
    <path fill="currentColor" d="M26.228 31.961a7.1 7.1 0 0 1-2.475 0l1.256 7.177zm-7.196-3.157-4.02 6.193 6.195-4.025a7.1 7.1 0 0 1-2.175-2.168m-1.003-2.572a7.1 7.1 0 0 1 0-2.464L10.853 25zm-3.017-11.229 4.046 6.152a7.1 7.1 0 0 1 2.016-2.04zm8.742 3.036a7.1 7.1 0 0 1 2.474 0l-1.219-7.177zM35.3 15.003l-6.526 4.025a7.1 7.1 0 0 1 2.276 2.33zM32.06 25q0 .631-.108 1.232L39.147 25l-7.179-1.137q.09.556.091 1.137m2.929 9.997-3.938-6.355a7.1 7.1 0 0 1-2.276 2.33z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.754 18.039a7.1 7.1 0 0 1 2.474 0m-2.475 0 1.256-7.177 1.219 7.177m-2.475 0a7 7 0 0 0-2.68 1.075m5.155-1.075a7 7 0 0 1 2.546.989m0 0 6.526-4.025-4.25 6.355m-2.276-2.33a7.1 7.1 0 0 1 2.276 2.33m0 0c.455.755.772 1.601.918 2.505m-.016 2.369a7.1 7.1 0 0 0 .016-2.37m-.016 2.37L39.147 25l-7.179-1.137m-.016 2.369a7 7 0 0 1-.902 2.41m0 0 3.938 6.355-6.214-4.025m2.276-2.33a7.1 7.1 0 0 1-2.276 2.33m0 0a7 7 0 0 1-2.546.989m0 0a7.1 7.1 0 0 1-2.475 0m2.475 0-1.219 7.177-1.256-7.177m0 0a7 7 0 0 1-2.546-.989m-2.175-2.168-4.02 6.193 6.195-4.025m-2.175-2.168a7.1 7.1 0 0 0 2.175 2.168m-2.175-2.168a7 7 0 0 1-1.003-2.572m0 0a7.1 7.1 0 0 1 0-2.464m0 2.464L10.853 25l7.176-1.232m0 0a7 7 0 0 1 1.029-2.613m0 0-4.046-6.152 6.062 4.111m-2.016 2.041a7.1 7.1 0 0 1 2.016-2.04"/>
  </symbol>
</svg>`;

/**
 * IDs de iconos disponibles
 */
export const iconIds = ['moon', 'sun'] as const;

export type IconId = typeof iconIds[number];

/**
 * Verifica si un ID de icono existe
 */
export function hasIcon(id: string): id is IconId {
  return iconIds.includes(id as IconId);
}

/**
 * Obtiene todos los IDs de iconos disponibles
 */
export function getIconIds(): readonly string[] {
  return iconIds;
}

/**
 * Renderiza un icono usando SVG <use>
 * Este es el método más eficiente para usar sprites
 */
export function renderIcon(
  id: IconId | string,
  options: {
    class?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
  } = {}
): string {
  if (!hasIcon(id)) {
    console.warn(`Icon "${id}" not found`);
    return '';
  }

  const { class: className = '', width = '24', height = '24', color } = options;
  const style = color ? ` style="color: ${color}"` : '';
  const classAttr = className ? ` class="${className}"` : '';

  return `<svg${classAttr} width="${width}" height="${height}"${style}><use href="#${id}"/></svg>`;
}

/**
 * Inyecta el sprite en el DOM (para uso en navegador)
 * Llama esta función una vez al inicio de tu aplicación
 */
export function injectSprite(): void {
  if (typeof document === 'undefined') return;
  
  const existingSprite = document.getElementById('icon-sprite-neoSprite');
  if (existingSprite) return;

  const div = document.createElement('div');
  div.id = 'icon-sprite-neoSprite';
  div.innerHTML = neoSprite;
  document.body.insertBefore(div, document.body.firstChild);
}
