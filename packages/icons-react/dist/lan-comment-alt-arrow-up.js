import React from 'react';

export const LanCommentAltArrowUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m179.2 533.6 112-84c1.4-1 3.1-1.6 4.8-1.6h120c53 0 96-43 96-96V128c0-53-43-96-96-96H96C43 32 0 75 0 128v224c0 53 43 96 96 96h32v68c0 15.5 12.5 28 28 28 6.1 0 12-2 16.8-5.6zM160 448v-8c0-13.3-10.7-24-24-24H96c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H296c-8.7 0-17.1 2.8-24 8l-112 84zm84.7-299.3-72 72c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l44.7-44.7V320c0 8.8 7.2 16 16 16s16-7.2 16-16V198.6l44.7 44.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-72-72c-6.2-6.2-16.4-6.2-22.6 0"})
);

export default LanCommentAltArrowUp;
