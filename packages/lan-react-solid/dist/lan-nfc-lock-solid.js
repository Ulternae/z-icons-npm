import React from 'react';

export function LanNfcLockSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v81c-5.2-.7-10.6-1-16-1-17 0-33.2 3.3-48 9.3V136c0-22.1-17.9-40-40-40H272c-22.1 0-40 17.9-40 40v78.4c-14.3 8.3-24 23.8-24 41.6 0 26.5 21.5 48 48 48s48-21.5 48-48c0-17.8-9.7-33.3-24-41.6V144h88v75.3c-19.9 22.6-32 52.2-32 84.7v24.4c-11.9 10.7-21.1 24.2-26.6 39.6H144V144h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32c-22.1 0-40 17.9-40 40v240c0 22.1 17.9 40 40 40h168v64H96c-35.3 0-64-28.7-64-64zm464 208.1c0-17.7-14.3-32-32-32s-32 14.3-32 32V352h64zM352 400c0-20.9 13.4-38.7 32-45.3v-50.6c0-44.2 35.8-80 80-80s80 35.8 80 80v50.6c18.6 6.6 32 24.4 32 45.3v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanNfcLockSolid;
