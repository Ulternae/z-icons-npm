import React from 'react';

export function LanCircleSmall({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 256a128 128 0 1 0-256 0 128 128 0 1 0 256 0M0 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0"})
  );
}

export default LanCircleSmall;
