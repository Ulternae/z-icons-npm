import React from 'react';

export function LanHeatThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 32c4.4 0 8 3.6 8 8v104c0 39.8 12.9 78.6 36.8 110.4L240 280c26 34.6 40 76.7 40 120v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72c0-39.8-12.9-78.6-36.8-110.4L208 264c-26-34.6-40-76.7-40-120V40c0-4.4 3.6-8 8-8M8 96c4.4 0 8 3.6 8 8v53.9c0 36.3 10.8 71.8 30.9 102.1l31.5 47.3C100.3 340 112 378.6 112 418.1V472c0 4.4-3.6 8-8 8s-8-3.6-8-8v-53.9c0-36.3-10.8-71.8-30.9-102.1l-31.5-47.2C11.7 236 0 197.4 0 157.9V104c0-4.4 3.6-8 8-8m344 8v53.9c0 36.3 10.8 71.8 30.9 102.1l31.5 47.3C436.3 340 448 378.6 448 418.1V472c0 4.4-3.6 8-8 8s-8-3.6-8-8v-53.9c0-36.3-10.8-71.8-30.9-102.1l-31.5-47.3C347.7 236 336 197.4 336 157.9V104c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanHeatThin;
