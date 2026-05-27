import React from 'react';

export const CoreSortSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 288v77.3l9.4 9.4 160 160c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4L384 365.3V288zm0-64h384v-77.3l-9.4-9.4-160-160c-6-6-14.1-9.4-22.6-9.4s-16.6 3.4-22.6 9.4L9.4 137.4 0 146.7z"})
);

export default CoreSortSolid;
