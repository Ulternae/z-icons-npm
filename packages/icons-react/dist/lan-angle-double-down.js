import React from 'react';

export const LanAngleDoubleDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M203.3 459.3c-6.2 6.2-16.4 6.2-22.6 0l-160-160c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L192 425.4l148.7-148.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm160-352-160 160c-6.2 6.2-16.4 6.2-22.6 0l-160-160c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L192 233.4 340.7 84.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"})
);

export default LanAngleDoubleDown;
