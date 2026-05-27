import React from 'react';

export const CoreBookmarkSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 512c32-18.7 96-56 192-112 96 56 160 93.3 192 112V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64z"})
);

export default CoreBookmarkSolid;
