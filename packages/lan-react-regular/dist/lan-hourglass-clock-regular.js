import React from 'react';

export function LanHourglassClockRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56 0C42.7 0 32 10.7 32 24s10.7 24 24 24h8v19c0 40.3 16 79 44.5 107.5L190 256l-81.5 81.5C80 366 64 404.7 64 445v19h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h220c-10.5-14.6-19-30.7-25.1-48H112v-19c0-27.6 11-54 30.5-73.5L224 290l32.4 32.4c6.7-15.2 15.4-29.4 25.7-42.2L258 256.1l81.5-81.5C368 146 384 107.3 384 67V48h8c13.3 0 24-10.7 24-24S405.3 0 392 0zm168 222.1-81.5-81.5C123 121 112 94.6 112 67V48h224v19c0 27.6-11 54-30.5 73.5zM576 400a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
  );
}

export default LanHourglassClockRegular;
