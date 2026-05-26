import React from 'react';

export const LanDialMed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m16 232V161c63.1 7.9 112 61.7 112 127 0 70.7-57.3 128-128 128s-128-57.3-128-128c0-65.3 48.9-119.1 112-127v127c0 8.8 7.2 16 16 16s16-7.2 16-16m-16-160a160 160 0 1 0 0 320 160 160 0 1 0 0-320m280 160a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-216a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M120 480a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanDialMed;
