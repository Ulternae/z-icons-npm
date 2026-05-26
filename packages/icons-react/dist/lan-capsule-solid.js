import React from 'react';

export const LanCapsuleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m189.3 189.3 101.4 101.4 72.3-72.2c13.5-13.5 21-31.7 21-50.7 0-39.6-32.1-71.8-71.8-71.8-19 0-37.3 7.6-50.7 21l-72.2 72.2zm219 74.5L231.8 440.2c-25.5 25.5-60 39.8-96 39.8C60.8 480 0 419.2 0 344.2c0-36 14.3-70.5 39.8-96L216.2 71.8c25.5-25.5 60-39.8 96-39.8 75 0 135.8 60.8 135.8 135.8 0 36-14.3 70.5-39.8 96z"})
);

export default LanCapsuleSolid;
