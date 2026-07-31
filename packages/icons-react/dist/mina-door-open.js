import React from 'react';

export const MinaDoorOpen = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M6.167 20.28V5.668m0 14.612H3.5m2.667 0H7m10.833 0V5.665c0-1.076-.895-1.945-2-1.945H14m3.833 16.56H14m3.833 0H20.5M11 12.974v-1.948M6.17 3.963l6.612-1.44c.625-.135 1.218.328 1.218.952v17.05c0 .624-.593 1.087-1.218.951l-6.612-1.44z"})
);

export default MinaDoorOpen;
