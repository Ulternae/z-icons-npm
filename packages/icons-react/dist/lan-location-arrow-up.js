import React from 'react';

export const LanLocationArrowUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M210.7 366.1c8.5-3.9 18.2-3.9 26.7 0L416 448 224 32 32 448zM224 0c12.5 0 23.8 7.3 29.1 18.6l192 416c5.6 12.2 3.1 26.5-6.4 36s-23.8 12.1-36 6.5L224 395.2 45.3 477.1c-12.2 5.6-26.5 3-36-6.5s-12-23.8-6.4-36l192-416C200.2 7.3 211.5 0 224 0"})
);

export default LanLocationArrowUp;
