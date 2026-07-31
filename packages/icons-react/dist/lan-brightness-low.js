import React from 'react';

export const LanBrightnessLow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M248 80a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m176-176a24 24 0 1 0 0-48 24 24 0 1 0 0 48M24 256a24 24 0 1 0 48 0 24 24 0 1 0-48 0m96-128a24 24 0 1 0-48 0 24 24 0 1 0 48 0m256 256a24 24 0 1 0-48 0 24 24 0 1 0 48 0m0-256a24 24 0 1 0-48 0 24 24 0 1 0 48 0M72 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0"})
);

export default LanBrightnessLow;
