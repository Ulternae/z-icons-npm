import React from 'react';

export const LanSpinnerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0 448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160-224a32 32 0 1 0 64 0 32 32 0 1 0-64 0M32 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m43 149a32 32 0 1 0 45.2-45.2A32 32 0 1 0 75 437m316.8 0a32 32 0 1 0 45.2-45.2 32 32 0 1 0-45.2 45.2M75 75a32 32 0 1 0 45.2 45.2A32 32 0 1 0 75 75"})
);

export default LanSpinnerRegular;
