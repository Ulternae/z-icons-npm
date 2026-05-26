import React from 'react';

export const LanCorner = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 176c0-8.8 7.2-16 16-16h432c35.3 0 64 28.7 64 64v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V224c0-17.7-14.3-32-32-32H16c-8.8 0-16-7.2-16-16"})
);

export default LanCorner;
