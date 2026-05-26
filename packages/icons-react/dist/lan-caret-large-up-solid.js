import React from 'react';

export const LanCaretLargeUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M169.9 137.4c12.5-12.5 32.8-12.5 45.2 0l160 160c9.2 9.2 11.9 22.9 6.9 34.9S365.4 352 352.5 352h-320c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 7-34.8z"})
);

export default LanCaretLargeUpSolid;
