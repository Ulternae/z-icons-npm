import React from 'react';

export function LanLockSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 96v64h128V96c0-35.3-28.7-64-64-64s-64 28.7-64 64m-64 64V96c0-70.7 57.3-128 128-128S320 25.3 320 96v64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64"})
  );
}

export default LanLockSolid;
