import React from 'react';

export function LanBillboard({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 32c8.8 0 16 7.2 16 16v16h80c35.3 0 64 28.7 64 64v256h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V128c0-35.3 28.7-64 64-64h80V48c0-8.8 7.2-16 16-16s16 7.2 16 16v16h160V48c0-8.8 7.2-16 16-16m-96 352h224V128c0-17.7-14.3-32-32-32h-80v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V96H208v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V96H96c-17.7 0-32 14.3-32 32v256z"})
  );
}

export default LanBillboard;
