import React from 'react';

export const LanArrowRightFromFile = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-48h32v48c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v85.5h-32v-80h-96c-35.3 0-64-28.7-64-64v-96zm48 288h241.4l-44.7-44.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l72 72c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l44.7-44.7H272c-8.8 0-16-7.2-16-16s7.2-16 16-16m98.7-160L256 45.3V128c0 17.7 14.3 32 32 32z"})
);

export default LanArrowRightFromFile;
