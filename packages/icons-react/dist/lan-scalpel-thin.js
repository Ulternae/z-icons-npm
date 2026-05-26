import React from 'react';

export const LanScalpelThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m297.4 352-41.7 41.7c-45 45-106.1 70.3-169.7 70.3H38.6l111.7-112zm-131.1-16L463.5 38.1C477.6 24 496.9 16 516.8 16c41.2 0 74.8 33.3 75 74.3.1 19.9-7.8 39-21.9 53.1L410.2 303.2c-20.8 20.8-48.9 32.6-78.3 32.8zM336 351.9c32.1-1.3 62.7-14.6 85.5-37.4l159.8-159.8c17.1-17.1 26.6-40.3 26.5-64.5-.2-49.9-41.1-90.2-91-90.2-24.2 0-47.6 9.6-64.7 26.8L16 464 0 480h86c67.9 0 133-27 181-75l53-53h16z"})
);

export default LanScalpelThin;
