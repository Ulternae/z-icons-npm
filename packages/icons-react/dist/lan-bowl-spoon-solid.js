import React from 'react';

export const LanBowlSpoonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 176C50.1 176 0 133 0 80s50.1-96 112-96c48.8 0 90.3 26.7 105.6 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H217.6c-15.4 37.3-56.9 64-105.6 64M2 257.5C.9 239.3 15.4 224 33.6 224h444.8c18.2 0 32.7 15.3 31.6 33.5-5.4 91.7-59.7 169.7-136.4 209.7l-1.2 9.7c-2.5 20-19.5 35-39.7 35H179.3c-20.2 0-37.2-15-39.7-35l-1.2-9.7C61.6 427.2 7.4 349.3 2 257.5"})
);

export default LanBowlSpoonSolid;
