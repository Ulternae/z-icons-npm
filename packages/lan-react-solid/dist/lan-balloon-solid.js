import React from 'react';

export function LanBalloonSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 192C0 86 86 0 192 0s192 86 192 192c0 128-160 240-160 240l27.9 41.8c2.7 4 4.1 8.8 4.1 13.6 0 13.6-11 24.6-24.6 24.6h-78.9c-13.6 0-24.6-11-24.6-24.6 0-4.8 1.4-9.6 4.1-13.6l28-41.8S0 320 0 192m104-16c0-39.8 32.2-72 72-72 13.3 0 24-10.7 24-24s-10.7-24-24-24c-66.3 0-120 53.7-120 120 0 13.3 10.7 24 24 24s24-10.7 24-24"})
  );
}

export default LanBalloonSolid;
