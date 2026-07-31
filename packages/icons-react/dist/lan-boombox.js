import React from 'react';

export const LanBoombox = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 88v72h96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h80v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h80v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h96V88c0-30.9-25.1-56-56-56H120c-30.9 0-56 25.1-56 56m-32 80.6V88c0-48.6 39.4-88 88-88h336c48.6 0 88 39.4 88 88v80.6c19.1 11.1 32 31.7 32 55.4v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-23.7 12.9-44.4 32-55.4M176 192H64c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zm0 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160m272 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"})
);

export default LanBoombox;
