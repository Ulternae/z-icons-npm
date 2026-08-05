import React from 'react';

export function LanPianoKeyboardRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M528 224v160c0 8.8-7.2 16-16 16h-76v-87c7.3-5.9 12-14.9 12-25v-64zM396 400h-88v-87c7.3-5.9 12-14.9 12-25v-64h64v64c0 10.1 4.7 19.1 12 25zm-128 0h-88v-87c7.3-5.9 12-14.9 12-25v-64h64v64c0 10.1 4.7 19.1 12 25zm-128 0H64c-8.8 0-16-7.2-16-16V224h80v64c0 10.1 4.7 19.1 12 25zm388-224H48v-48c0-8.8 7.2-16 16-16h448c8.8 0 16 7.2 16 16zm48 0v-48c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64z"})
  );
}

export default LanPianoKeyboardRegular;
