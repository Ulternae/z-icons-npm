import React from 'react';

export const LanSortDescThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 489.4c4.2 4.2 10 6.6 16 6.6s11.8-2.4 16-6.6l154.7-154.8c3.4-3.4 5.3-7.9 5.3-12.7 0-9.9-8-17.9-17.9-17.9H33.9C24 304 16 312 16 321.9c0 4.8 1.9 9.3 5.3 12.7zm-11.3 11.3L9.9 345.9c-6.4-6.4-9.9-15-9.9-24C0 303.2 15.2 288 33.9 288H350c18.7 0 33.9 15.2 33.9 33.9 0 9-3.6 17.6-9.9 24L219.3 500.7c-7.2 7.2-17.1 11.3-27.3 11.3s-20.1-4.1-27.3-11.3"})
);

export default LanSortDescThin;
