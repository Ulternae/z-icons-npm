import React from 'react';

export function LanDoorClosedRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 48c8.8 0 16 7.2 16 16v400H80V64c0-8.8 7.2-16 16-16zm64 416V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v400h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24zM304 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
  );
}

export default LanDoorClosedRegular;
