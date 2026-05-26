import React from 'react';

export const LanBlackboardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 120v280h176v-40c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56v40h48V120c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8M32 400V120c0-30.9 25.1-56 56-56h400c30.9 0 56 25.1 56 56v280h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm368-40c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v40h96z"})
);

export default LanBlackboardRegular;
