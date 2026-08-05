import React from 'react';

export function LanCircleLariThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-8-400c0-4.4-3.6-8-8-8s-8 3.6-8 8v19.1c-57.1 12.8-99.8 63.9-99.8 124.9 0 48.2 26.6 90.2 66 112H152c-4.4 0-8 3.6-8 8s3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8h-99.8c-61.9 0-112-50.1-112-112 0-52.1 35.6-95.9 83.8-108.4V224c0 4.4 3.6 8 8 8s8-3.6 8-8v-79.3c4-.4 8.1-.7 12.2-.7 6.8 0 13.4.6 19.8 1.7V224c0 4.4 3.6 8 8 8s8-3.6 8-8v-74.2c37.4 12.6 66 44.4 74 83.7.9 4.3 5.1 7.1 9.4 6.2s7.1-5.1 6.2-9.4c-9.5-46.7-44.4-84.2-89.6-97.3v-21.1c0-4.4-3.6-8-8-8s-8 3.6-8 8v17.5q-9.75-1.5-19.8-1.5c-4.1 0-8.2.2-12.2.6v-16.6z"})
  );
}

export default LanCircleLariThin;
