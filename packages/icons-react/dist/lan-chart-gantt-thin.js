import React from 'react';

export const LanChartGanttThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v360c0 44.2 35.8 80 80 80h424c4.4 0 8-3.6 8-8s-3.6-8-8-8H80c-35.3 0-64-28.7-64-64zm128 56c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16m64 128c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H224c-8.8 0-16-7.2-16-16m160 128c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16M128 96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32m64 128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H224c-17.7 0-32 14.3-32 32m160 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32"})
);

export default LanChartGanttThin;
