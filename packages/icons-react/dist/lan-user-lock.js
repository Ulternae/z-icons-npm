import React from 'react';

export const LanUserLock = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 128a96 96 0 1 1 192 0 96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M32 480c0-79.5 64.5-144 144-144h96c17.4 0 34 3.1 49.4 8.7 4.2-6 9.1-11.5 14.6-16.4v-12.4c-19.8-7.7-41.4-12-64-12h-96C78.8 304 0 382.8 0 480v16c0 8.8 7.2 16 16 16s16-7.2 16-16zm352-127.9v2.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 47.9c0-8.2 6.2-15 14.3-15.9h131.5c8 .9 14.3 7.7 14.3 15.9v96c0 8.8-7.2 16-16 16h-128c-8.8 0-16-7.2-16-16v-96zm128-95.9V352h-96v-47.9c0-26.5 21.5-48 48-48s48 21.5 48 48"})
);

export default LanUserLock;
