import React from 'react';

export const LanWaveTriangleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M153.2 64c7.9.4 15.1 4.6 19.2 11.3L362 381.7l106.9-140.2c8-10.5 23.1-12.6 33.6-4.5s12.6 23.1 4.5 33.6l-128 168c-4.8 6.3-12.4 9.8-20.2 9.4s-15.1-4.6-19.2-11.3L150 130.3 43.1 270.5C35.1 281 20 283.1 9.5 275s-12.6-23-4.6-33.5l128-168c4.8-6.3 12.4-9.8 20.3-9.4z"})
);

export default LanWaveTriangleRegular;
