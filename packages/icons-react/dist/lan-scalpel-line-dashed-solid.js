import React from 'react';

export const LanScalpelLineDashedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m0 480 112-112h193.2l-37 37c-48 48-113.1 75-181 75zm363.6-160H160L453.5 26.5c17-17 40-26.5 64-26.5 50 0 90.5 40.5 90.5 90.5 0 24-9.5 47-26.5 64l-128 128c-23.8 23.8-56.1 37.3-89.8 37.5zM344 432h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24m176 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanScalpelLineDashedSolid;
