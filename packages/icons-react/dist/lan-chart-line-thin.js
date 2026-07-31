import React from 'react';

export const LanChartLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v360c0 44.2 35.8 80 80 80h424c4.4 0 8-3.6 8-8s-3.6-8-8-8H80c-35.3 0-64-28.7-64-64zm461.7 101.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L320 276.7l-90.3-90.4c-3.1-3.1-8.2-3.1-11.3 0l-128 128c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L224 203.3l90.3 90.4c3.1 3.1 8.2 3.1 11.3 0l152-152z"})
);

export default LanChartLineThin;
