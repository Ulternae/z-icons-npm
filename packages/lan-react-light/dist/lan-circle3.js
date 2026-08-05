import React from 'react';

export function LanCircle3({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-272h-56c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72c-8.8 0-16 7.2-16 16s7.2 16 16 16h72c30.9 0 56-25.1 56-56 0-15.7-6.4-29.8-16.8-40 10.4-10.2 16.8-24.3 16.8-40 0-30.9-25.1-56-56-56h-72c-8.8 0-16 7.2-16 16s7.2 16 16 16h72c13.3 0 24 10.7 24 24s-10.7 24-24 24"})
  );
}

export default LanCircle3;
