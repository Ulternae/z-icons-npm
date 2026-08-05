import React from 'react';

export function LanBillboardSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M168 64H96c-35.3 0-64 28.7-64 64v224c-17.7 0-32 14.3-32 32s14.3 32 32 32h224v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h224c17.7 0 32-14.3 32-32s-14.3-32-32-32V128c0-35.3-28.7-64-64-64h-72v80h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h16V64H216v80h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h16z"})
  );
}

export default LanBillboardSolid;
