import React from 'react';

export const LanR = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48v416c0 8.8 7.2 16 16 16s16-7.2 16-16V288h135.4l123.3 184.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2L205.4 287.3C269.8 280.6 320 226.2 320 160c0-70.7-57.3-128-128-128zm160 224H32V64h160c53 0 96 43 96 96s-43 96-96 96z"})
);

export default LanR;
