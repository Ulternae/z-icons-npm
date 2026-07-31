import React from 'react';

export const LanSortShapesUpAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M139.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L112 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM320 176V80c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16m64 147.5L458.7 448H309.3zM288 176c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48zm-12.4 266c-2.3 3.9-3.6 8.4-3.6 12.9 0 13.8 11.2 25.1 25.1 25.1H471c13.8 0 25.1-11.2 25.1-25.1 0-4.5-1.2-9-3.6-12.9l-84.3-140.3c-5.1-8.5-14.3-13.7-24.2-13.7s-19.1 5.2-24.2 13.7z"})
);

export default LanSortShapesUpAlt;
