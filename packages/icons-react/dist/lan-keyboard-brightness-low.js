import React from 'react';

export const LanKeyboardBrightnessLow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48M144 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-24-160a24 24 0 1 0-48 0 24 24 0 1 0 48 0m296 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88 136a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanKeyboardBrightnessLow;
