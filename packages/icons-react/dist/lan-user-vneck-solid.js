import React from 'react';

export const LanUserVneckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 8a120 120 0 1 0 0 240 120 120 0 1 0 0-240m-81.4 315c-6.5-4.9-15.2-6.2-22.6-2.8-61.4 28.2-104.1 90.2-104.1 162.1 0 16.4 13.3 29.7 29.7 29.7h356.6c16.4 0 29.7-13.3 29.7-29.7 0-72-42.7-134-104.1-162.1-7.4-3.4-16.1-2.1-22.6 2.8l-67 50.2c-8.5 6.4-20.3 6.4-28.8 0l-67-50.2z"})
);

export default LanUserVneckSolid;
