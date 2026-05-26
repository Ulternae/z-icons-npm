import React from 'react';

export const LanAcornThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M250.3 2.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-9.3 9.4c-11.1 11.1-18 25.6-19.8 41H352c53 0 96 43 96 96v16c0 17.7-14.3 32-32 32h-16v16c0 78.1-30.5 201.9-165.9 252.4l-5 1.4c-3.4.6-6.9.6-10.3 0l-5-1.4C78.5 425.9 48 302.1 48 224v-16H32l-3.3-.2C12.6 206.2 0 192.6 0 176v-16c0-53 43-96 96-96h120.4c1.9-19.7 10.5-38.2 24.6-52.3l9.4-9.4zM64 224c0 75 29.1 190.3 155.5 237.4l2.2.6c2.3.4 4.6.2 6.8-.6l11.6-4.6C356.7 407.2 384 296.6 384 224v-16H64zM96 80c-44.2 0-80 35.8-80 80v16c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-16c0-44.2-35.8-80-80-80z"})
);

export default LanAcornThin;
