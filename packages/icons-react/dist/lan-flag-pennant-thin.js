import React from 'react';

export const LanFlagPennantThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8V349.7l426.7-150.1c3.2-1.1 5.3-4.2 5.3-7.5s-2.1-6.4-5.3-7.5L16 34.3zm0 43.3L415.9 192 16 332.7z"})
);

export default LanFlagPennantThin;
