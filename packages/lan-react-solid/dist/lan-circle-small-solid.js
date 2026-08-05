import React from 'react';

export function LanCircleSmallSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0"})
  );
}

export default LanCircleSmallSolid;
