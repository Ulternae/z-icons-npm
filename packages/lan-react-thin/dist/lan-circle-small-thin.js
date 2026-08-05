import React from 'react';

export function LanCircleSmallThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 304a160 160 0 1 0 0-320 160 160 0 1 0 0 320"})
  );
}

export default LanCircleSmallThin;
