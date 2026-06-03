import React from 'react';

export const LanCartShoppingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 640 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 8C0-5.3 10.7-16 24-16h45.3c27.1 0 50.3 19.4 55.1 46l.4 2h399.9c25.1 0 44 22.9 39.3 47.6l-26.4 137c-8 41.4-44.2 71.4-86.4 71.4H171.4l5.1 28.3c2.1 11.4 12 19.7 23.6 19.7H456c13.3 0 24 10.7 24 24s-10.7 24-24 24H200.1c-34.8 0-64.6-24.9-70.8-59.1L77.2 38.6c-.7-3.8-4-6.6-7.9-6.6H24C10.7 32 0 21.3 0 8m162.6 232h288.6c19.2 0 35.7-13.6 39.3-32.4L514.9 80H133.5zM208 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96m224 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanCartShoppingRegular;
