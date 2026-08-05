import React from 'react';

export function LanEar({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 192c0 53.5-26.2 100.9-66.7 130-15.2 11-30.4 26.5-38.8 47.5l-20.1 50.2c-14.6 36.4-49.9 60.3-89.1 60.3H128c-53 0-96-43-96-96V192c0-88.4 71.6-160 160-160s160 71.6 160 160m-75.7 189.4c5.5-13.7 15.8-24.8 27.8-33.4 48.4-34.9 80-91.7 80-156 0-106-86-192-192-192S0 86 0 192v192c0 70.7 57.3 128 128 128h9.3c52.3 0 99.4-31.9 118.8-80.5l20.1-50.2zM112 192c0-44.2 35.8-80 80-80s80 35.8 80 80v8c0 8.8 7.2 16 16 16s16-7.2 16-16v-8c0-61.9-50.1-112-112-112S80 130.1 80 192v32c0 8.8 7.2 16 16 16h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c35.3 0 64-28.7 64-64s-28.7-64-64-64z"})
  );
}

export default LanEar;
