import React from 'react';

export const LanY = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M28.9 38.5c-5.2-7.1-15.2-8.7-22.4-3.4s-8.6 15.2-3.4 22.4L176 293.2V464c0 8.8 7.2 16 16 16s16-7.2 16-16V293.2L380.9 57.4c5.2-7.1 3.7-17.1-3.4-22.4s-17.1-3.7-22.4 3.4L192 260.9z"})
);

export default LanY;
