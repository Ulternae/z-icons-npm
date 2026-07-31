import React from 'react';

export const LanChestDrawers = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 0c26.5 0 48 21.5 48 48v448c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V48C0 21.5 21.5 0 48 0zM32 288v160h384V288zm224 64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zM32 256h176v-96H32zm208 0h176v-96H240zM48 32c-8.8 0-16 7.2-16 16v80h176V32zm192 96h176V48c0-8.8-7.2-16-16-16H240z"})
);

export default LanChestDrawers;
