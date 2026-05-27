import React from 'react';

export const CoreGrid2 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 512H64c-35.3 0-64-28.7-64-64V288h224zm288-64c0 35.3-28.7 64-64 64H288V288h224zm-448 0h96v-96H64zm288 0h96v-96h-96zM224 224H0V64C0 28.7 28.7 0 64 0h160zM448 0c35.3 0 64 28.7 64 64v160H288V0zM64 160h96V64H64zm288 0h96V64h-96z"})
);

export default CoreGrid2;
