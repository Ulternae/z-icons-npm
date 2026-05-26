import React from 'react';

export const LanLThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M40 32c4.4 0 8 3.6 8 8v424h264c4.4 0 8 3.6 8 8s-3.6 8-8 8H48c-8.8 0-16-7.2-16-16V40c0-4.4 3.6-8 8-8"})
);

export default LanLThin;
