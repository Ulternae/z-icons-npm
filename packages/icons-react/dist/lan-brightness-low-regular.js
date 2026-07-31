import React from 'react';

export const LanBrightnessLowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m176-176a32 32 0 1 0 0-64 32 32 0 1 0 0 64M16 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m112-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M64 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
);

export default LanBrightnessLowRegular;
