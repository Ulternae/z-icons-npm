import React from 'react';

export function LanSlidersHSquareRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zm48 320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-96-80c0 13.3-10.7 24-24 24h-40v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h120v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v16h40c13.3 0 24 10.7 24 24m-24-184c13.3 0 24 10.7 24 24s-10.7 24-24 24H208v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v16z"})
  );
}

export default LanSlidersHSquareRegular;
