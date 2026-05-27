import React from 'react';

export const CoreHeadphonesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 64C150 64 64 150 64 256h64c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256C0 114.6 114.6 0 256 0h32v2c126.3 15.7 224 123.5 224 254v160c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64v-96c0-35.3 28.7-64 64-64h64c0-106-86-192-192-192"})
);

export default CoreHeadphonesSolid;
