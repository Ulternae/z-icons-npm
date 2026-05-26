import React from 'react';

export const LanKeyboardBrightnessLowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64M96 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m352-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64M64 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m88-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanKeyboardBrightnessLowRegular;
