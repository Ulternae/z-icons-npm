import React from 'react';

export const MinaSixCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M13.5 8h-1a3 3 0 0 0-3 3v2.5m0 0a2.5 2.5 0 0 0 5 0c0-1.38-1.12-2-2.5-2s-2.5.62-2.5 2"})
);

export default MinaSixCircle;
