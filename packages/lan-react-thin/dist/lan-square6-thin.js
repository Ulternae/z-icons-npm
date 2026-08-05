import React from 'react';

export function LanSquare6Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 72c0 4.4-3.6 8-8 8h-40c-22.1 0-40 17.9-40 40v35.2c11-11.8 26.6-19.2 44-19.2h24c33.1 0 60 26.9 60 60s-26.9 60-60 60h-24c-31 0-56.6-23.5-59.7-53.7-.2-.7-.3-1.5-.3-2.3v-80c0-30.9 25.1-56 56-56h40c4.4 0 8 3.6 8 8m-44 168h24c24.3 0 44-19.7 44-44s-19.7-44-44-44h-24c-24.3 0-44 19.7-44 44s19.7 44 44 44"})
  );
}

export default LanSquare6Thin;
