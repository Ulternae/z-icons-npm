import React from 'react';

export const LanLockASolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 32c35.3 0 64 28.7 64 64v64H128V96c0-35.3 28.7-64 64-64M64 96v64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64V96c0-70.7-57.3-128-128-128S64 25.3 64 96m128 128c9.4 0 18 5.5 21.9 14.1l80 176c5.5 12.1.1 26.3-11.9 31.8s-26.3.1-31.8-11.9l-15.4-33.9h-85.5L133.9 434c-5.5 12.1-19.7 17.4-31.8 11.9s-17.4-19.7-11.9-31.8l80-176c3.8-8.6 12.4-14.1 21.8-14.1m0 82-20.9 46h41.8z"})
);

export default LanLockASolid;
