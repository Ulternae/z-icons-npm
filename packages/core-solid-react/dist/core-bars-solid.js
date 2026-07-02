import React from 'react';

export function CoreBarsSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M512 128H0V64h512zm0 320H0v-64h512zm-32-160H0v-64h512v64z"})
  );
}

export default CoreBarsSolid;
