import React from 'react';

export const LanFileBan = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h161.4c5.2 11.3 11.4 22 18.6 32H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v22.1c-11 .9-21.6 2.7-32 5.4v-22h-96c-35.3 0-64-28.7-64-64v-96zm146.7 128L256 45.3V128c0 17.7 14.3 32 32 32zM432 512c25.2 0 48.4-8.3 67.1-22.3L342.3 332.9c-14 18.7-22.3 41.9-22.3 67.1 0 61.9 50.1 112 112 112m-67.1-201.7 156.8 156.8c14-18.7 22.3-41.9 22.3-67.1 0-61.9-50.1-112-112-112-25.2 0-48.4 8.3-67.1 22.3M432 256a144 144 0 1 1 0 288 144 144 0 1 1 0-288"})
);

export default LanFileBan;
