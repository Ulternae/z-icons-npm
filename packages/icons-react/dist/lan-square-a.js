import React from 'react';

export const LanSquareA = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 64c6.1 0 11.6 3.4 14.3 8.8l80 160c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2L278 319.9H169.8l-11.6 23.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l80-160c2.7-5.4 8.3-8.8 14.3-8.8zm0 51.8L185.9 288h76.2z"})
);

export default LanSquareA;
