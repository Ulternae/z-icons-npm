import React from 'react';

export const LanAnglesUpDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 38.6l148.7 148.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm160 342.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 473.4 43.3 324.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l160 160c6.2 6.2 16.4 6.2 22.6 0z"})
);

export default LanAnglesUpDown;
