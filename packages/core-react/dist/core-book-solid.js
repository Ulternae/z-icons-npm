import React from 'react';

export function CoreBookSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 336v80c0 53 43 96 96 96h352V64h-64v384H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h224V0H96C43 0 0 43 0 96z"})
  );
}

export default CoreBookSolid;
