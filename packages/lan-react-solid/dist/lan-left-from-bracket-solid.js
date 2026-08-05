import React from 'react';

export function LanLeftFromBracketSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32zM7 239c-9.4 9.4-9.4 24.6 0 33.9L151 417c6.9 6.9 17.2 8.9 26.2 5.2S192 409.7 192 400v-80h112c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H192v-80c0-9.7-5.8-18.5-14.8-22.2S157.9 88.2 151 95z"})
  );
}

export default LanLeftFromBracketSolid;
