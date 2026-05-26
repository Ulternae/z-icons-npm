import React from 'react';

export const LanAngleDoubleLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M20.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l160 160c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 256l148.7-148.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0zm352-160-160 160c-6.2 6.2-6.2 16.4 0 22.6l160 160c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L246.6 256l148.7-148.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"})
);

export default LanAngleDoubleLeft;
