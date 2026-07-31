import React from 'react';

export const LanPersonSeatReclinedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136 72a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-68.8 88.5c13-2.7 25.7 5.7 28.3 18.7l40.2 195.4c6.9 33.5 36.4 57.5 70.5 57.5H296c13.3 0 24 10.7 24 24s-10.7 24-24 24h-89.8c-56.9 0-106.1-40-117.5-95.8L48.5 188.8c-2.7-13 5.7-25.7 18.7-28.3m143.1 65.8 20.7 91c2.5 10.9 12.2 18.7 23.4 18.7H266l-26.4-116.3C238 212.9 232 208 225 208c-9.6 0-16.8 8.9-14.6 18.3zm76-17.3 28.9 127h37.4c28.6 0 54.5 16.9 66 43.1l34.6 79.2 27.2-9.1c12.6-4.2 26.2 2.6 30.4 15.2s-2.6 26.2-15.2 30.4l-48 16c-11.8 3.9-24.6-1.8-29.6-13.1l-43.4-99.2c-3.8-8.7-12.5-14.4-22-14.4h-98.3c-33.6 0-62.8-23.3-70.2-56l-20.7-91c-9-39.4 21-77 61.4-77 29.4 0 54.9 20.4 61.4 49z"})
);

export default LanPersonSeatReclinedRegular;
