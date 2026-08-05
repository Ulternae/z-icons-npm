import React from 'react';

export function CoreBurgerSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 0c106 0 192 86 192 192H0C0 86 86 0 192 0zM0 256h512v64H0zm0 128h512c0 70.7-57.3 128-128 128H128C57.3 512 0 454.7 0 384"})
  );
}

export default CoreBurgerSolid;
