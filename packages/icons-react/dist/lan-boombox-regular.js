import React from 'react';

export const LanBoomboxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 88v72h80c0-17.7 14.3-32 32-32s32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h80V88c0-22.1-17.9-40-40-40H120c-22.1 0-40 17.9-40 40m-48 80.6V88c0-48.6 39.4-88 88-88h336c48.6 0 88 39.4 88 88v80.6c19.1 11.1 32 31.7 32 55.4v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-23.7 12.9-44.4 32-55.4M192 208H64c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16zm-16 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-112a80 80 0 1 1 0 160 80 80 0 1 1 0-160m256 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"})
);

export default LanBoomboxRegular;
