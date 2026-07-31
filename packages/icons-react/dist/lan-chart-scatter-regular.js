import React from 'react';

export const LanChartScatterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v344c0 44.2 35.8 80 80 80h408c13.3 0 24-10.7 24-24s-10.7-24-24-24H80c-17.7 0-32-14.3-32-32zm144 136a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0M160 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanChartScatterRegular;
