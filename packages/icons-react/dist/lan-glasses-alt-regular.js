import React from 'react';

export const LanGlassesAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M132.2 80c-19 0-35.4 13.3-39.2 31.9L69.7 225.3C89.3 214.3 112 208 136 208c55.1 0 102.6 32.8 124 80h56.1c21.3-47.2 68.8-80 124-80 24.1 0 46.7 6.3 66.3 17.3L483 111.9C479.2 93.3 462.8 80 443.8 80H408c-13.3 0-24-10.7-24-24s10.7-24 24-24h35.8c41.8 0 77.8 29.4 86.2 70.3l42.3 205.2c2.5 12 3.7 24.2 3.7 36.5 0 75.1-60.9 136-136 136s-136-60.9-136-136c0-2.7.1-5.4.2-8h-32.5c.2 2.6.2 5.3.2 8 0 75.1-60.9 136-136 136S0 419.1 0 344c0-12.3 1.2-24.5 3.7-36.5L46 102.3C54.4 61.4 90.4 32 132.2 32H168c13.3 0 24 10.7 24 24s-10.7 24-24 24zM48 344a88 88 0 1 0 176 0 88 88 0 1 0-176 0m392 88a88 88 0 1 0 0-176 88 88 0 1 0 0 176"})
);

export default LanGlassesAltRegular;
