import React from 'react';

export function LanPianoKeyboardSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm448 160v160h-76v-71c7.3-5.9 12-14.9 12-25v-64zM396 384h-88v-71c7.3-5.9 12-14.9 12-25v-64h64v64c0 10.1 4.7 19.1 12 25zm-128 0h-88v-71c7.3-5.9 12-14.9 12-25v-64h64v64c0 10.1 4.7 19.1 12 25zm-128 0H64V224h64v64c0 10.1 4.7 19.1 12 25z"})
  );
}

export default LanPianoKeyboardSolid;
