import React from 'react';

export const LanChartScatterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v360c0 44.2 35.8 80 80 80h424c4.4 0 8-3.6 8-8s-3.6-8-8-8H80c-35.3 0-64-28.7-64-64zm192 112a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80m104 168a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-40-24a40 40 0 1 0 80 0 40 40 0 1 0-80 0m168 104a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80m24-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-40-24a40 40 0 1 0 80 0 40 40 0 1 0-80 0M184 320a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
);

export default LanChartScatterThin;
