import React from 'react';

export const LanArrowsToDottedLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m283.3 107.3-80 80c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l52.7 52.7V-16c0-8.8 7.2-16 16-16s16 7.2 16 16v153.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6m0 297.4c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L208 374.6V528c0 8.8-7.2 16-16 16s-16-7.2-16-16V374.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l80-80c6.2-6.2 16.4-6.2 22.6 0zM48 256a24 24 0 1 1-48 0 24 24 0 1 1 48 0m88 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m136-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m88 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanArrowsToDottedLine;
