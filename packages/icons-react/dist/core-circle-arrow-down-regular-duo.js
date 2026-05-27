import React from 'react';

export const CoreCircleArrowDownRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m60.2 3.8 39.6-39.6 64.2 64.2V128h56v156.4l64.2-64.2 39.6 39.6-112 112c-10.9 10.9-28.7 10.9-39.6 0z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m28 220.4 64.2-64.2 39.6 39.6-112 112c-10.9 10.9-28.7 10.9-39.6 0l-112-112 39.6-39.6 64.2 64.2V128h56z"})
);

export default CoreCircleArrowDownRegular-duo;
