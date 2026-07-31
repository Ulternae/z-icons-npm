import React from 'react';

export const LanArrowAltSquareUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm139.3 144H176c8.8 0 16 7.2 16 16v88c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-88c0-8.8 7.2-16 16-16h36.7L224 155.3zm205.7-9c6.9 6.9 8.9 17.2 5.2 26.2S337.7 272 328 272h-40v72c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-72h-40c-9.7 0-18.5-5.8-22.2-14.8s-1.6-19.3 5.2-26.2l104-104c9.4-9.4 24.6-9.4 33.9 0z"})
);

export default LanArrowAltSquareUp;
