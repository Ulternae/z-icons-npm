import React from 'react';

export const LanUserHeadsetSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 160c0-79.5 64.5-144 144-144s144 64.5 144 144v112h-80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48s21.5 48 48 48h184c13.3 0 24-10.7 24-24V160c0-106-86-192-192-192S32 54 32 160c0 13.3 10.7 24 24 24s24-10.7 24-24m256 0c0-61.9-50.1-112-112-112S112 98.1 112 160c0 24.5 7.9 47.2 21.2 65.6 15.5-25 43.2-41.6 74.8-41.6h32c30.9 0 58.1 15.9 73.8 40h2.2c12.7-18.1 20.1-40.2 20.1-64zM153.1 352C77.4 352 16 413.4 16 489.1c0 12.7 10.2 22.9 22.9 22.9h370.3c12.6 0 22.9-10.2 22.9-22.9 0-75.7-61.4-137.1-137.1-137.1H153.3z"})
);

export default LanUserHeadsetSolid;
