import React from 'react';

export const LanChestnut = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M328.7 163.3C297 131.6 261 102.2 224 72.8c-37 29.4-73 58.8-104.7 90.5C72.8 209.8 32 270 32 352h384c0-82-40.8-142.2-87.3-188.7M37.5 384c13.2 37.3 48.7 64 90.5 64h192c41.8 0 77.4-26.7 90.5-64zm313.8-243.3C400.8 190.2 448 258 448 352c0 70.7-57.3 128-128 128H128C57.3 480 0 422.7 0 352c0-94 47.2-161.8 96.7-211.3 33.2-33.2 70.4-63.5 107.5-93 11.6-9.2 28.1-9.2 39.7 0 37 29.4 74.3 59.8 107.5 93z"})
);

export default LanChestnut;
