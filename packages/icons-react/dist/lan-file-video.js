import React from 'react';

export const LanFileVideo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m160 13.3L338.7 160H256c-17.7 0-32-14.3-32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm144 288v96h-96v-96zm0 128c16.6 0 30.2-12.6 31.8-28.7l16 13.7c5.3 4.5 12 7 19 7 16.1 0 29.2-13.1 29.2-29.2v-85.6c0-16.1-13.1-29.2-29.2-29.2-7 0-13.7 2.5-19 7l-16 13.7c-1.6-16.1-15.2-28.7-31.8-28.7h-96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32zm64-116.7v73.4l-32-27.4v-18.6z"})
);

export default LanFileVideo;
