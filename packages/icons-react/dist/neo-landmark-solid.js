import React from 'react';

export const NeoLandmarkSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M254.1 6.1c8.1-4 17-6.1 25.9-6.1s17.8 2.1 25.9 6.1C396 51.7 497.2 113.3 533.1 135.6c16.9 10.5 26.9 28.9 26.9 48.5 0 28.8-21.5 53.6-50.9 56.5-41.5 4.1-128 11.3-229.1 11.3s-187.7-7.1-229.1-11.2C21.5 237.8 0 213 0 184.2c0-19.6 10-38 26.9-48.5 36-22.3 137.1-84 227.2-129.5zM84 329v142.7c-18.1-.8-36.2-1.6-54.4-2.6C14.2 468.2.9 480 0 495.4S10.9 524 26.4 525c84.4 4.8 169.1 7 253.6 7s169.2-2.2 253.6-7c15.4-.9 27.2-14.2 26.3-29.6s-14.2-27.2-29.6-26.3c-18.1 1-36.2 1.9-54.4 2.6L476 329c0-15.5-12.5-28-28-28s-28 12.5-28 28v144.7c-17.4.5-36.2 1-56 1.4V336c0-15.5-12.5-28-28-28s-28 12.5-28 28v139.9c-18.4.1-37.6.1-56 0V336c0-15.5-12.5-28-28-28s-28 12.5-28 28v139.1c-19.8-.4-38.6-.9-56-1.4V329c0-15.5-12.5-28-28-28s-28 12.5-28 28"})
);

export default NeoLandmarkSolid;
