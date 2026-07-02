import React from 'react';

export function CoreLocationArrowSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M468.3 2.2c11.8-4.6 25.3-1.8 34.3 7.2s11.8 22.5 7.2 34.3l-176 448-8 20.3H224V288H0V186.2l20.3-8z"})
  );
}

export default CoreLocationArrowSolid;
