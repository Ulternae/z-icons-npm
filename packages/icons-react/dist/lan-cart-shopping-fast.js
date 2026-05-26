import React from 'react';

export const LanCartShoppingFast = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 16c0-8.8 7.2-16 16-16h45.3c20.6 0 38.6 13.1 45.3 32h423.8c25.5 0 44.4 23.5 39.1 48.4l-32.4 150.7c-7.1 33.2-36.4 56.9-70.4 56.9h-313l5.7 31.2c3.5 19 20 32.8 39.4 32.8H528c8.8 0 16 7.2 16 16s-7.2 16-16 16H262.7c-34.8 0-64.6-24.9-70.8-59.1L141 45.1c-1.4-7.6-8-13.1-15.7-13.1H80c-8.8 0-16-7.2-16-16m147.9 240h318.8c18.9 0 35.2-13.2 39.1-31.6l32.3-150.7c1.1-5-2.7-9.7-7.8-9.7H177zM272 480a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-72a52 52 0 1 1 0 104 52 52 0 1 1 0-104m244 52a20 20 0 1 0-40 0 20 20 0 1 0 40 0m-72 0a52 52 0 1 1 104 0 52 52 0 1 1-104 0M16 96h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 96h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 96h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanCartShoppingFast;
