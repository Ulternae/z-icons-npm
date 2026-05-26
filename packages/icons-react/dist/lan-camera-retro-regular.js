import React from 'react';

export const LanCameraRetroRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 112H64c-8.8 0-16 7.2-16 16v64h108.1c23.5-29.3 59.5-48 99.9-48s76.5 18.7 99.9 48H464V96c0-8.8-7.2-16-16-16H271.1c-2.5 0-4.9.6-7.2 1.7l-50.5 25.2c-6.7 3.3-14 5.1-21.5 5.1zM48 240v176c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V240h-84c2.6 10.2 4 21 4 32 0 70.7-57.3 128-128 128s-128-57.3-128-128c0-11 1.4-21.8 4-32zM0 416V128c0-35.3 28.7-64 64-64 0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32h32l50.5-25.2c8.9-4.4 18.7-6.8 28.6-6.8H448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m336-144a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanCameraRetroRegular;
