import React from 'react';

export const LanMagnet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 64c-8.8 0-16 7.2-16 16v80h80V80c0-8.8-7.2-16-16-16zM32 288c0 106 86 192 192 192s192-86 192-192v-96h-80v96c0 61.9-50.1 112-112 112s-112-50.1-112-112v-96H32zm384-128V80c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v80zM0 80c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v208c0 44.2 35.8 80 80 80s80-35.8 80-80V80c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v208c0 123.7-100.3 224-224 224S0 411.7 0 288z"})
);

export default LanMagnet;
