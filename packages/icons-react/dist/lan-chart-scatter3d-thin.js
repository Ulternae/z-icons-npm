import React from 'react';

export const LanChartScatter3dThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 64a16 16 0 1 1-32 0 16 16 0 1 1 32 0M32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m232 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v244.3L34.8 465.9c-3.4 2.9-3.8 7.9-.9 11.3s7.9 3.8 11.3.9L256 298.5l210.8 179.6c3.4 2.9 8.4 2.5 11.3-.9s2.5-8.4-.9-11.3L264 284.3zm136 24a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 240a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m144-96a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-352 48a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0M32 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32M0 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m272 192a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanChartScatter3dThin;
