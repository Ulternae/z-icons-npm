import React from 'react';

export function LanS({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 147.6C0 83.8 51.8 32 115.6 32H288c8.8 0 16 7.2 16 16s-7.2 16-16 16H115.6C69.4 64 32 101.4 32 147.6c0 40.9 29.6 75.8 69.9 82.5l121.5 20.3c55.7 9.3 96.6 57.5 96.6 114 0 63.8-51.8 115.6-115.6 115.6H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h172.4c46.2 0 83.6-37.4 83.6-83.6 0-40.9-29.5-75.8-69.9-82.5L96.6 261.7C40.9 252.4 0 204.1 0 147.6"})
  );
}

export default LanS;
