import React from 'react';

export const LanRouteHighwaySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240.5 4.6c-10.1-6.1-22.8-6.1-32.9 0l-4.7 2.8c-37.5 22.5-84 24.3-123.1 4.7l-1.4-.7c-15.2-7.6-33.7-2-42.1 12.7l-32 56c-5.3 9.3-5.6 20.6-.8 30.2l16.2 32.5c8.1 16.3 12.4 34.2 12.4 52.5 0 14.9-2.8 29.7-8.4 43.6L9.3 274.5C3.2 289.9 0 306.4 0 323c0 49.5 28 94.8 72.2 116.9l137.4 68.7c9 4.5 19.6 4.5 28.6 0l137.4-68.7c44.3-22.1 72.2-67.4 72.2-116.9 0-16.6-3.2-33.1-9.3-48.5l-14.3-35.7c-5.5-13.9-8.4-28.6-8.4-43.6 0-18.2 4.2-36.2 12.4-52.5l16.2-32.5c4.8-9.6 4.5-20.9-.8-30.2l-32-56c-8.4-14.7-26.9-20.3-42.1-12.7l-1.4.7C329 31.6 282.5 29.8 245 7.3l-4.7-2.8zM96 192h256v3.2c0 23.1 4.4 45.9 13 67.3l14.3 35.7c3.2 7.9 4.8 16.3 4.8 24.8 0 25.3-14.3 48.4-36.9 59.7L224 444.2l-123.1-61.5C78.3 371.4 64 348.3 64 323c0-8.5 1.6-16.9 4.8-24.8L83 262.6c8.6-21.4 13-44.3 13-67.3v-3.2z"})
);

export default LanRouteHighwaySolid;
