import React from 'react';

export const LanKeyboardBrightnessLowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32M136 400c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8zM96 240a16 16 0 1 0-32 0 16 16 0 1 0 32 0m336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m80 144a16 16 0 1 0-32 0 16 16 0 1 0 32 0M16 416a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanKeyboardBrightnessLowThin;
