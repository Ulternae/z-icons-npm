import React from 'react';

export function CoreXmarkSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m365.5 128-128 128 128 128-45.2 45.2-128-128-128 128L19 384l128-128L19 128l45.3-45.2 128 128 128-128z"})
  );
}

export default CoreXmarkSolid;
