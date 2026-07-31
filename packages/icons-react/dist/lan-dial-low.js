import React from 'react';

export const LanDialLow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 360c-65.3 0-119.1-48.9-127-112h127c8.8 0 16-7.2 16-16s-7.2-16-16-16H161c7.9-63.1 61.7-112 127-112 70.7 0 128 57.3 128 128s-57.3 128-128 128M128 288a160 160 0 1 0 320 0 160 160 0 1 0-320 0m440 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-216a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M120 480a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanDialLow;
