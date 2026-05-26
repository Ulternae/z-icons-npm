import React from 'react';

export const LanCircleYSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-69.7-359.5 69.7 82.3 69.7-82.3c8.6-10.1 23.7-11.4 33.8-2.8s11.4 23.7 2.8 33.8L280 280.8V344c0 13.3-10.7 24-24 24s-24-10.7-24-24v-63.2l-82.3-97.3c-8.6-10.1-7.3-25.3 2.8-33.8s25.3-7.3 33.8 2.8"})
);

export default LanCircleYSolid;
