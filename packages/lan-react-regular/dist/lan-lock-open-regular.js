import React from 'react';

export function LanLockOpenRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M368 96c0-44.2 35.8-80 80-80s80 35.8 80 80v40c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0-70.7-57.3-128-128-128S320 25.3 320 96v64H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-48zm-48 112h96c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16z"})
  );
}

export default LanLockOpenRegular;
