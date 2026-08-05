import React from 'react';

export function LanCircleB({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-336v160c0 8.8 7.2 16 16 16h72c30.9 0 56-25.1 56-56 0-20-10.5-37.6-26.4-47.5 6.5-9.2 10.4-20.4 10.4-32.5 0-30.9-25.1-56-56-56h-56c-8.8 0-16 7.2-16 16m96 40c0 13.3-10.7 24-24 24h-40v-48h40c13.3 0 24 10.7 24 24m-64 104v-48h56c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
  );
}

export default LanCircleB;
