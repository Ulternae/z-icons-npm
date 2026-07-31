import React from 'react';

export const LanCheckDouble = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M244.9 49.4c5.2-7.1 3.6-17.1-3.5-22.4s-17.1-3.6-22.4 3.5L90 207.4l-54.8-54.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l68 68c3.3 3.3 7.9 5 12.6 4.6s8.9-2.7 11.7-6.5l140-192zm132 132c5.2-7.1 3.6-17.1-3.5-22.4s-17.1-3.6-22.4 3.5L152 435.4l-88.8-88.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l102 102c3.3 3.3 7.9 5 12.6 4.6s8.9-2.7 11.7-6.5l210-288z"})
);

export default LanCheckDouble;
