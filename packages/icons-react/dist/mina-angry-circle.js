import React from 'react';

export const MinaAngryCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M9 16c.85-.63 1.885-1 3-1s2.15.37 3 1M8 8l3 1.5m2 0L16 8m-6.5 2.5V10m5 .5V10"})
);

export default MinaAngryCircle;
