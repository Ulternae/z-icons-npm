import React from 'react';

export function LanSkiBootSkiSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M616 392c13.3 0 24 10.7 24 24v8c0 48.6-39.4 88-88 88H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h528c22.1 0 40-17.9 40-40v-8c0-13.3 10.7-24 24-24M393.5 0c19.9 0 34.7 18.3 30.7 37.7L412 96h-68c-13.2 0-24 10.8-24 24s10.8 24 24 24h58l-10 48h-64c-13.2 0-24 10.8-24 24s10.8 24 24 24h54l88.2 32.6c25.1 9.3 41.8 33.2 41.8 60V352c0 35.3-28.7 64-64 64H155c-30.4 0-53.2-28-47-57.8l27.3-131.3c4.1-.7 9.6-1.8 16-3.6 14.1-4.1 32.9-11.9 52.6-26.3 37-27.2 75-76.7 92.2-165h65.2l1.5-7.1c3-14.5 15.8-24.9 30.7-24.9M255.3 32c-16.1 74.6-48 112.9-75 132.7-13.3 9.8-26 15.4-35.8 18.7L165.4 83c6.2-29.7 32.3-51 62.7-51z"})
  );
}

export default LanSkiBootSkiSolid;
