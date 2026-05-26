import React from 'react';

export const LanVan = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 96h288v80c0 35.3 28.7 64 64 64h128v96c0 16.1-11.9 29.4-27.4 31.7C530 330.9 496.2 304 456 304c-40.3 0-74.2 27.1-84.7 64H260.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H88c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32m455.7 303.5c31.7-3.8 56.3-30.8 56.3-63.5v-95.5c0-14.2-4.7-28.1-13.5-39.3L499 88.7C486.9 73.1 468.3 64 448.5 64H88c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h.4c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80h104.7c4 44.9 41.7 80 87.6 80 46.1 0 83.9-35.4 87.7-80.5zM408 96h40.5c9.9 0 19.2 4.6 25.3 12.4l77.5 99.6H440c-17.7 0-32-14.3-32-32zm-8 296a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanVan;
