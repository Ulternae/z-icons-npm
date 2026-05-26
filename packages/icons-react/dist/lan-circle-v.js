import React from 'react';

export const LanCircleV = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-65.7-343.2c-4-7.9-13.6-11.1-21.5-7.2s-11.1 13.6-7.2 21.5l80 160c2.7 5.4 8.3 8.8 14.3 8.8s11.6-3.4 14.3-8.8l80-160c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2L256 300.2z"})
);

export default LanCircleV;
