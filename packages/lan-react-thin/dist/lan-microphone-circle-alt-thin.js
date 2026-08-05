import React from 'react';

export function LanMicrophoneCircleAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-352v96c0 35.3 28.7 64 64 64s64-28.7 64-64v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64m112 64h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v16c0 26.5-21.5 48-48 48s-48-21.5-48-48v-96c0-26.5 21.5-48 48-48s48 21.5 48 48h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40zm-160 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v24c0 68 53 123.6 120 127.8V408c0 4.4 3.6 8 8 8s8-3.6 8-8v-24.2c67-4.2 120-59.8 120-127.8v-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v24c0 61.9-50.1 112-112 112s-112-50.1-112-112z"})
  );
}

export default LanMicrophoneCircleAltThin;
