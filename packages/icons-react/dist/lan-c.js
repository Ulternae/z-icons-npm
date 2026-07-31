import React from 'react';

export const LanC = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M356.9 120.3c-74.4-75-194.9-75-269.3 0s-74.4 196.5 0 271.4 194.9 75 269.3 0c6.2-6.3 16.3-6.3 22.5 0s6.2 16.4 0 22.7c-86.8 87.5-227.5 87.5-314.4 0S-21.8 185 65 97.5s227.5-87.5 314.4 0c6.2 6.3 6.2 16.4 0 22.7s-16.3 6.3-22.5 0z"})
);

export default LanC;
