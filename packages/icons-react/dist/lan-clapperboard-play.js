import React from 'react';

export const LanClapperboardPlay = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 96H366.6l-96 96h84.5c-18.4 8-35.3 18.9-50.1 32H64v160c0 17.7 14.3 32 32 32h150c2.9 11.1 6.7 21.8 11.4 32H96c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v84c-10.9-7.9-22.7-14.6-35.1-20h3.1v-64c0-5.1-1.2-9.8-3.3-14.1l-62.6 62.6c-4.7-.3-9.4-.5-14.1-.5-11.4 0-22.7 1-33.5 2.9L481.3 96zM65.4 192l96-96H96c-17.7 0-32 14.3-32 32v64zm45.3 0h114.7l96-96H206.7zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m-39.9 74.1c5-2.8 11.2-2.8 16.1.2l93.3 56c4.8 2.9 7.8 8.1 7.8 13.7s-3 10.8-7.8 13.7l-93.3 56c-4.9 3-11.1 3-16.1.2s-8.1-8.1-8.1-13.9V312c0-5.8 3.1-11.1 8.1-13.9m23.9 97.6 46.2-27.7-46.2-27.7v55.5z"})
);

export default LanClapperboardPlay;
