import React from 'react';

export const LanFileCirclePlus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h161.4c5.2 11.3 11.4 22 18.6 32H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v22.1c-11 .9-21.6 2.7-32 5.4v-22h-96c-35.3 0-64-28.7-64-64v-96zm146.7 128L256 45.3V128c0 17.7 14.3 32 32 32zM544 400a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m160-64v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanFileCirclePlus;
