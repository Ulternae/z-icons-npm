import React from 'react';

export function LanBattery0Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 80c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h400c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64zm480 256v32c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80h400c44.2 0 80 35.8 80 80v32h16c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32zm0-144v128h16c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16z"})
  );
}

export default LanBattery0Thin;
