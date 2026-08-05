import React from 'react';

export function LanTickSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 128 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 98.3V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8C98.3 274.7 82.5 288 64 288s-34.3-13.3-37.5-31.5L1 109.6c-.7-3.8-1-7.5-1-11.4z"})
  );
}

export default LanTickSolid;
