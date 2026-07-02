import React from 'react';

export function CoreFileCheckSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M384 128v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h192zM160 318.1l-48-48L78.1 304l65 65c9.4 9.4 24.6 9.4 33.9 0l129-129-33.9-33.9-112 112z"})
  );
}

export default CoreFileCheckSolid;
