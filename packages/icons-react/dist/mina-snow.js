import React from 'react';

export const MinaSnow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 19V5M9.953 3 12 5l2.047-2M9.953 21 12 19l2.047 2m-8.251-5.5 12.408-7m.749-2.732L18.204 8.5 21 9.232M3 14.768l2.796.732-.75 2.732M21 14.768l-2.796.732.75 2.732M5.047 5.768 5.796 8.5 3 9.232M5.796 8.5l12.408 7"})
);

export default MinaSnow;
