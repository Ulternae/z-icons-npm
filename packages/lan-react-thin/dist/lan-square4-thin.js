import React from 'react';

export function LanSquare4Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm152 64c4.4 0 8 3.6 8 8v80c0 13.3 10.7 24 24 24h88V168c0-4.4 3.6-8 8-8s8 3.6 8 8v104h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-88c-22.1 0-40-17.9-40-40v-80c0-4.4 3.6-8 8-8"})
  );
}

export default LanSquare4Thin;
