import React from 'react';

export function CoreTrashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M160 0c-35.3 0-64 28.7-64 64v32H0v64h32v288c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160h32V96h-96V64c0-35.3-28.7-64-64-64zm128 96H160V64h128z"})
  );
}

export default CoreTrashSolid;
