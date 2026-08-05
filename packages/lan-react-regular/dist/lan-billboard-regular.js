import React from 'react';

export function LanBillboardRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 32c13.3 0 24 10.7 24 24v8h72c35.3 0 64 28.7 64 64v240h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H312v72c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V128c0-35.3 28.7-64 64-64h72v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h144v-8c0-13.3 10.7-24 24-24m112 96c0-8.8-7.2-16-16-16h-72v32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-32H216v32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-32H96c-8.8 0-16 7.2-16 16v240h416z"})
  );
}

export default LanBillboardRegular;
