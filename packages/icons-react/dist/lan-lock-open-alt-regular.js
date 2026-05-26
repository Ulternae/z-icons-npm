import React from 'react';

export const LanLockOpenAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 16c-44.2 0-80 35.8-80 80v64h48c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h160V96c0-70.7 57.3-128 128-128S576 25.3 576 96v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V96c0-44.2-35.8-80-80-80M320 208H160c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16zm8 152h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24"})
);

export default LanLockOpenAltRegular;
