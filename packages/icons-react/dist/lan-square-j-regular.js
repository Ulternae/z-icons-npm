import React from 'react';

export const LanSquareJRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm304 72v112c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-13.3 10.7-24 24-24s24 10.7 24 24c0 22.1 17.9 40 40 40s40-17.9 40-40V168c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanSquareJRegular;
