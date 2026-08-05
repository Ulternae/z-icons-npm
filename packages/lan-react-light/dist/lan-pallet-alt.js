import React from 'react';

export function LanPalletAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M240 32c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM80 0C53.5 0 32 21.5 32 48v160c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM16 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v128H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V352h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm448 160H304V352h160zm-192 0H112V352h160zM400 96h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m-48 16v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48"})
  );
}

export default LanPalletAlt;
