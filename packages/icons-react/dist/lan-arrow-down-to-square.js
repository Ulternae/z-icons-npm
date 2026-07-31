import React from 'react';

export const LanArrowDownToSquare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v313.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L240 297.4zM32 160c0-17.7 14.3-32 32-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"})
);

export default LanArrowDownToSquare;
