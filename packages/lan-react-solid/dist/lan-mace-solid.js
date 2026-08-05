import React from 'react';

export function LanMaceSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -40.625 640 552.625',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m338.5 38.6 31-69.7c5.6-12.7 23.6-12.7 29.2 0l31 69.7c51.7 15.3 92.5 56.1 107.8 107.8l69.7 31c12.7 5.6 12.7 23.6 0 29.2l-69.7 31c-15.3 51.7-56.1 92.5-107.8 107.8l-31 69.7c-5.6 12.7-23.6 12.7-29.2 0l-31-69.7c-51.7-15.3-92.5-56.1-107.8-107.8l-69.7-31c-12.7-5.6-12.7-23.6 0-29.2l69.7-31C246 94.7 286.8 53.9 338.5 38.6M261.4 360 118.7 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l142.7-142.6c12.7 17.3 27.9 32.6 45.3 45.3m122.7-136a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanMaceSolid;
