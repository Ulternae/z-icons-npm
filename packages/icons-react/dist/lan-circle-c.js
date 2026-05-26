import React from 'react';

export const LanCircleC = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-50.9-205.1c-28.1-28.1-28.1-73.7 0-101.8s73.7-28.1 101.8 0c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6c-40.6-40.6-106.5-40.6-147.1 0s-40.6 106.5 0 147.1 106.5 40.6 147.1 0c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0c-28.1 28.1-73.7 28.1-101.8 0z"})
);

export default LanCircleC;
