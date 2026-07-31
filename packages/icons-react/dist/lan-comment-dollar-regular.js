import React from 'react';

export const LanCommentDollarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 240c0 54.4 19.3 104.6 51.9 144.9L3.1 474.3c-2 3.7-3.1 7.9-3.1 12.2C0 500.6 11.4 512 25.5 512c4 0 7.8-.6 11.5-2.1L153.4 460c31.4 12.9 66.1 20 102.6 20 141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240m94 167.9c9.3-17.1 7.4-38.1-4.8-53.2C63.1 322.4 48 282.8 48 240c0-103.2 90.2-192 208-192s208 88.8 208 192-90.2 192-208 192c-30.2 0-58.7-5.9-84.3-16.4-11.9-4.9-25.3-4.8-37.1.3l-58.6 25zM260 128c-11 0-20 9-20 20v4c-28.8.3-52 23.7-52 52.5 0 25.7 18.5 47.6 43.9 51.8l41.7 7c6 1 10.4 6.2 10.4 12.3 0 6.9-5.6 12.5-12.5 12.5L216 288c-11 0-20 9-20 20s9 20 20 20h24v4c0 11 9 20 20 20s20-9 20-20v-4.7c25-4.1 44-25.7 44-51.8 0-25.7-18.5-47.6-43.9-51.8l-41.7-7c-6-1-10.4-6.2-10.4-12.3 0-6.9 5.6-12.5 12.5-12.5H288c11 0 20-9 20-20s-9-20-20-20h-8v-4c0-11-9-20-20-20z"})
);

export default LanCommentDollarRegular;
