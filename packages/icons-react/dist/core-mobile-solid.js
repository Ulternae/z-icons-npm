import React from 'react';

export const CoreMobileSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 0c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 448V64l.3-6.5C3.4 27.3 27.3 3.4 57.5.3L64 0zM128 392v48h128v-48z"})
);

export default CoreMobileSolid;
