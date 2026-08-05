import React from 'react';

export function NeoDropletSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M155.9 26.9C174.6 8.6 199.5 0 224 0s49.4 8.6 68.1 26.9c23.4 22.8 61.9 64 94.8 117C419.6 196.7 448 263.2 448 336c0 65.9-21.1 122.5-61.3 162.7S289.9 560 224 560s-122.5-21.1-162.7-61.3S0 401.9 0 336c0-72.8 28.3-139.3 61.1-192.1 32.9-53 71.4-94.3 94.8-117M152 260.6c4.7-14.7-3.4-30.5-18.1-35.2s-30.5 3.4-35.2 18.1c-9.3 29.2-14.6 58.4-14.6 86.9 0 55.7 16.3 89.2 34.8 108.5C137.5 458.4 170 476 224.1 476c15.5 0 28-12.5 28-28s-12.5-28-28-28c-41.1 0-58.1-12.8-64.7-19.7-6.7-7-19.3-25.6-19.3-69.9 0-21.7 4-45.1 11.9-69.9z"})
  );
}

export default NeoDropletSolid;
