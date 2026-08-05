import React from 'react';

export function LanSquarePesoRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm136 48c0-13.3 10.7-24 24-24h64c43.3 0 80.4 26.4 96 64h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8.3c.4 5.3.4 10.7 0 16h8.3c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-15.7 37.6-52.8 64-96 64h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V264h-8c-8.8 0-16-7.2-16-16s7.2-16 16-16h8v-16h-8c-8.8 0-16-7.2-16-16s7.2-16 16-16h8zm88 24h-40v16h79.2c-10.1-9.9-23.9-16-39.2-16m-40 64h95.4c.4-2.6.6-5.3.6-8s-.2-5.4-.6-8H184zm0 32v16h40c15.3 0 29.1-6.1 39.2-16z"})
  );
}

export default LanSquarePesoRegular;
