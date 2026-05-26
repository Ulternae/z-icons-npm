import React from 'react';

export const LanCircleFlorin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m23.8-352.1L252.3 224H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h62.6l-35.8 83.5c-3.2 7.6-10.7 12.5-18.9 12.5H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h23.9c21 0 40-12.5 48.3-31.9l41.2-96.1H336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48.9l22.1-51.5c3.2-7.6 10.7-12.5 18.9-12.5H352c8.8 0 16-7.2 16-16s-7.2-16-16-16h-23.9c-21 0-40 12.5-48.3 31.9"})
);

export default LanCircleFlorin;
