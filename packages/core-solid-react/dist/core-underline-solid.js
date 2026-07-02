import React from 'react';

export function CoreUnderlineSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M0 544h448v-64H0zM352 32H32v192c0 106 86 192 192 192s192-86 192-192V32z"})
  );
}

export default CoreUnderlineSolid;
