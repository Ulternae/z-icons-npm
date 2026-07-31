import React from 'react';

export const LanTimelineArrowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 96c0 32.8-19.7 61-48 73.3V224h192v-54.7c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V224h80v-32c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2S464 329.7 464 320v-32H256v54.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-54.7C35.7 157 16 128.8 16 96c0-44.2 35.8-80 80-80s80 35.8 80 80"})
);

export default LanTimelineArrowSolid;
