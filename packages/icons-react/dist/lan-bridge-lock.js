import React from 'react';

export const LanBridgeLock = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h32v64H16c-8.8 0-16 7.2-16 16v112c0 7.3 5 13.7 12.1 15.5l3.4.9C44 279.5 64 305.1 64 334.5V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-35.3 28.7-64 64-64 33.7 0 61.3 26 63.8 59.1 4.6-6.9 10-13.2 16.2-18.7V304c0-1.7 0-3.3.1-4.9-17.2-25.9-46.6-43.1-80.1-43.1-53 0-96 43-96 96v96H96V334.5c0-41-26-77.1-64-90.5v-83.9h448v17c11.2 1.4 21.9 4.2 32 8.3v-41.3c0-8.8-7.2-16-16-16h-32v-64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm416 32v64h-96V64zm-128 0v64h-96V64zm-128 0v64H80V64zm208 288.1v2.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 47.9c0-8.2 6.2-15 14.3-15.9h131.5c8 .9 14.3 7.7 14.3 15.9v96c0 8.8-7.2 16-16 16h-128c-8.8 0-16-7.2-16-16v-96zm128-95.9V352h-96v-47.9c0-26.5 21.5-48 48-48s48 21.5 48 48"})
);

export default LanBridgeLock;
