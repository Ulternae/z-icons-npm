import React from 'react';

export const LanTablets = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 256c-25.2 0-48.4-8.3-67.1-22.3L457.7 76.9c14 18.7 22.3 41.9 22.3 67.1 0 61.9-50.1 112-112 112M256 144c0-61.9 50.1-112 112-112 25.2 0 48.4 8.3 67.1 22.3L278.3 211.1c-14-18.7-22.3-41.9-22.3-67.1m112 144a144 144 0 1 0 0-288 144 144 0 1 0 0 288M144 480c-56.4 0-103.1-41.7-110.9-96h221.7c-7.8 54.3-54.4 96-110.9 96zM33.1 352c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96zM144 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288"})
);

export default LanTablets;
