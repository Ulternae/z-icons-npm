import React from 'react';

export const LanTaurusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336-16c4.4 0 8 3.6 8 8 0 65.9-41.9 121.9-100.5 143 81 22.5 140.5 96.8 140.5 185 0 106-86 192-192 192S0 426 0 320c0-88.2 59.5-162.5 140.5-185C81.9 113.9 40 57.9 40-8c0-4.4 3.6-8 8-8s8 3.6 8 8c0 75.1 60.9 136 136 136S328 67.1 328-8c0-4.4 3.6-8 8-8M192 144a176 176 0 1 0 0 352 176 176 0 1 0 0-352"})
);

export default LanTaurusThin;
