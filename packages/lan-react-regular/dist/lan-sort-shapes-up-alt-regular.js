import React from 'react';

export function LanSortShapesUpAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 454.9c0-4.5-1.2-9-3.6-12.9l-84.2-140.3c-5.1-8.5-14.3-13.7-24.2-13.7s-19.1 5.2-24.2 13.7L275.6 442c-2.3 3.9-3.6 8.4-3.6 12.9 0 13.8 11.2 25.1 25.1 25.1H471c13.8 0 25.1-11.2 25.1-25.1zM336 80h96v96h-96zm94.4 352h-92.8l46.4-77.4zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48M145 39c-9.4-9.4-24.6-9.4-33.9 0L23 127c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
  );
}

export default LanSortShapesUpAltRegular;
