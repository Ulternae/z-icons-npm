import React from 'react';

export const LanStarShootingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m313 41-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L279 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM129.5 388.7 120 444l49.6-26.1c14-7.4 30.7-7.4 44.7 0l49.5 26.1-9.5-55.4c-2.7-15.6 2.5-31.4 13.8-42.4l40.2-39.2-55.5-8.1c-15.6-2.3-29.2-12.1-36.1-26.3l-24.8-50.3-24.8 50.3c-7 14.2-20.5 24-36.1 26.3L75.5 307l40.2 39.2c11.3 11 16.4 26.9 13.8 42.4zm-5.4-137.3 46.3-94c8.8-17.9 34.3-17.9 43.1 0l46.3 94 103.5 15.1c19.7 2.9 27.5 27 13.3 40.9l-74.9 73.2 17.7 103.3c3.4 19.6-17.2 34.6-34.8 25.3L192 460.4l-92.6 48.8c-17.6 9.3-38.2-5.7-34.8-25.3l17.6-103.3-74.9-73.2C-7 293.5.9 269.3 20.6 266.5zM505 199c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0m0-158L361 185c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})
);

export default LanStarShootingRegular;
