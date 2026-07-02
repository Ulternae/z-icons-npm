import React from 'react';

export function CoreGrid2Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M224 512H64c-35.3 0-64-28.7-64-64V288h224zm288-64c0 35.3-28.7 64-64 64H288V288h224zM224 224H0V64C0 28.7 28.7 0 64 0h160zM448 0c35.3 0 64 28.7 64 64v160H288V0z"})
  );
}

export default CoreGrid2Solid;
