import React from 'react';

export const LanCakeSliceSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M276.2 38.9c5.6-4.4 12.6-6.9 19.8-6.9 44.3 0 97.6 19.2 139.9 55.8C479.1 125.2 512 181.7 512 256v160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V272c0-9.8 4.5-19.1 12.2-25.1zM448 288H64v40h384zM64 416h384v-40H64z"})
);

export default LanCakeSliceSolid;
