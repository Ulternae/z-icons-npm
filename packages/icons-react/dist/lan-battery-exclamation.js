import React from 'react';

export const LanBatteryExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M236.3 64c-2.9 8.1-4.3 16.9-4.1 26l.2 6H111.9c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h120.5c-.3 2.6-.5 5.3-.5 8 0 8.4 1.5 16.5 4.2 24H112c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80zM304 448a24 24 0 1 1 0-48 24 24 0 1 1 0 48M496 64c44.2 0 80 35.8 80 80v32h32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32v32c0 44.2-35.8 80-80 80H371.8c2.7-7.5 4.2-15.6 4.2-24 0-2.7-.2-5.4-.5-8H496c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H375.5l.2-6c.3-9.1-1.2-17.9-4.1-26zm-192 0c13.4 0 24.2 11.1 23.8 24.5l-7.8 248c-.3 8.6-7.4 15.5-16 15.5s-15.7-6.9-16-15.5l-7.8-248C279.8 75.1 290.6 64 304 64m272 240h32v-96h-32z"})
);

export default LanBatteryExclamation;
