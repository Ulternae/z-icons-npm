import React from 'react';

export const LanChartLineUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32m329.4 169.4L329 169c-15.1-15.1-4.4-41 17-41h110c13.3 0 24 10.7 24 24v110.1c0 21.4-25.9 32.1-41 17l-32.4-32.4-80 80c-12.5 12.5-32.8 12.5-45.3 0l-73.4-73.4-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c12.5-12.5 32.8-12.5 45.3 0l73.4 73.4 57.4-57.4z"})
);

export default LanChartLineUpSolid;
