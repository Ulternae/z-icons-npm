import React from 'react';

export function CoreFilterSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M448 32c35.3 0 64 28.7 64 64v16c0 40.3-19 78.2-51.2 102.4L320 320v179.8l-128-64V320L51.2 214.4C19 190.2 0 152.3 0 112V96c0-35.3 28.7-64 64-64z"})
  );
}

export default CoreFilterSolid;
