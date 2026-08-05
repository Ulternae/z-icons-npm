import React from 'react';

export function LanSquareBitcoinThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm184 0c4.4 0 8 3.6 8 8v24h48v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24h1.3c37.6 0 68 30.4 68 68 0 23-11.4 43.4-28.9 55.7 26.7 9.2 45.9 34.5 45.9 64.3 0 37.6-30.4 68-68 68h-18.2v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-48v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-30.8c-8.5 0-15.5-6.9-15.5-15.5V142.2c0-7.9 6.4-14.2 14.2-14.2h32v-24c0-4.4 3.6-8 8-8m90.2 272c28.7 0 52-23.3 52-52s-23.3-52-52-52H145.7v104zM184 144h-38.2v104h111.5c28.7 0 52-23.3 52-52s-23.3-52-52-52z"})
  );
}

export default LanSquareBitcoinThin;
