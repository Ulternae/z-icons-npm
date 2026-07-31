import React from 'react';

export const MinaWinds = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M16.5 7c3.485 0 3.485 5 0 5H3m15.411 8c3.452 0 3.452-5 0-5H3"}), React.createElement("path", {"d":"M11.411 19c3.452 0 3.452-4 0-4H3m7.872-11c3.506 0 3.506 5 0 5H3"}), React.createElement("path", {"d":"M4.872 5c3.506 0 3.506 4 0 4H3"})
);

export default MinaWinds;
