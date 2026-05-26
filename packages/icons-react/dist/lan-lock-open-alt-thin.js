import React from 'react';

export const LanLockOpenAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448-16c-61.9 0-112 50.2-112 112v64h80c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h160V96c0-70.7 57.3-128 128-128S576 25.3 576 96v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V96c0-61.9-50.1-112-112-112M320 176H160c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48zm0 176c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0-48c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z"})
);

export default LanLockOpenAltThin;
