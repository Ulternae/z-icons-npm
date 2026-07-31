import React from 'react';

export const LanFilterCircleDollarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 93.7C0 77.3 13.3 64 29.7 64h452.7c16.4 0 29.7 13.3 29.7 29.7 0 7.9-3.1 15.4-8.7 21l-94.8 94.8c-47.8 5.8-90.2 29.2-120.5 63.6v-1c0-6.4 2.5-12.5 7-17l143-143H74l143 143c4.5 4.5 7 10.6 7 17v102.1l16.2 16.2c-.2 3.2-.2 6.4-.2 9.7 0 25.4 4.9 49.6 13.9 71.8L183 401c-4.5-4.5-7-10.6-7-17V281.9L8.7 114.6C3.1 109.1 0 101.5 0 93.7M288 400a144 144 0 1 1 288 0 144 144 0 1 1-288 0m128-80v8.1c-22.3 1.1-40 19.5-40 42.1 0 20.4 14.6 37.8 34.6 41.5l45 8.2c4.8.9 8.3 5.1 8.3 10 0 5.6-4.6 10.2-10.2 10.2L400 440c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v8c0 8.8 7.2 16 16 16s16-7.2 16-16v-8h5.8c23.3 0 42.2-18.9 42.2-42.2 0-20.4-14.6-37.8-34.6-41.5l-45-8.2c-4.8-.9-8.3-5.1-8.3-10 0-5.6 4.6-10.2 10.2-10.2h45.8c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-8c0-8.8-7.2-16-16-16s-16 7.2-16 16z"})
);

export default LanFilterCircleDollarRegular;
