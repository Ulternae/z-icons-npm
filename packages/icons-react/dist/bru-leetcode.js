import React from 'react';

export const BruLeetcode = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M235.404 9.3c11.1-11.8 29.7-12.5 41.6-1.4s12.5 29.8 1.4 41.6l-43 46c21.5 3.3 42.1 11.8 59.1 25.6l74.6 60.3c12.6 10.2 14.6 28.8 4.4 41.4s-28.7 14.6-41.4 4.4l-74.6-60.3c-26.2-21.1-71.9-18.2-94.5 5.9l-82 88.2c-21.5 23-19.1 60 5.6 84.2l91.2 89.4c24.9 24 65.6 24 90.1-.4l51.1-51c11.5-11.5 30.1-11.5 41.6.1s11.4 30.2-.1 41.7l-51.1 51c-47.1 47.1-124 47.7-171.9 1.6l-92-90.2c-46.9-46.1-51.5-119.5-7.5-166.7zm176.3 263.9c16.2 0 29.4 13.2 29.4 29.5s-13.2 29.5-29.4 29.5h-216.9c-16.2 0-29.4-13.2-29.4-29.5s13.2-29.5 29.4-29.5z"}), React.createElement('path', {"fill":"currentColor","d":"M0 0h448v512H0z"})
);

export default BruLeetcode;
