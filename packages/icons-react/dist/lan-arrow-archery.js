import React from 'react';

export const LanArrowArchery = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M556.6-31.5c5.4-1.4 11.2.2 15.2 4.2s5.6 9.7 4.2 15.2l-32 128c-1.4 5.6-5.7 10-11.3 11.5s-11.5 0-15.6-4.1l-36.6-36.7-310.3 310.3 13.8 55.2c1.4 5.4-.2 11.2-4.2 15.2l-64 64c-4.1 4.1-10 5.6-15.6 4.1s-9.9-5.9-11.3-11.5l-13.7-54.7-54.7-13.7c-5.6-1.4-10-5.7-11.5-11.2s0-11.5 4.1-15.6l64-64 1.6-1.4c3.8-3 8.9-4 13.6-2.8l55.3 13.8L457.8 64l-36.6-36.7c-4.1-4.1-5.6-10-4.1-15.6S423 1.9 428.6.5zM55.8 431.3l36.6 9.2c5.7 1.4 10.2 5.9 11.7 11.7l9.1 36.6 37.6-37.6-11.5-45.9-45.9-11.5-37.6 37.6zm408-406.7 56 56 18.7-74.7z"})
);

export default LanArrowArchery;
