import React from 'react';

export const LanSignPostsWrenchRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 64V40c0-13.3 10.7-24 24-24s24 10.7 24 24v24h288V40c0-13.3 10.7-24 24-24s24 10.7 24 24v24c35.3 0 64 28.7 64 64v50.9c-10.4-1.9-21.1-2.9-32-2.9-5.4 0-10.7.2-16 .7V128c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h246.6c4.9 17.2 12.3 33.4 21.8 48H143.9v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm352 177.1c7.4-4.3 16 1.5 16 10V336c0 26.5 21.5 48 48 48s48-21.5 48-48v-84.9c0-8.5 8.6-14.3 16-10 38.3 22.1 64 63.5 64 110.9s-25.7 88.7-64 110.9V508c0 19.9-16.1 36-36 36h-56c-19.9 0-36-16.1-36-36v-45.1c-38.3-22.1-64-63.5-64-110.9s25.7-88.8 64-110.9"})
);

export default LanSignPostsWrenchRegular;
