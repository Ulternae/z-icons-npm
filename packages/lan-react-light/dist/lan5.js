import React from 'react';

export function Lan5({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v160h160c70.7 0 128 57.3 128 128s-57.3 128-128 128H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h176c53 0 96-43 96-96s-43-96-96-96H16c-8.8 0-16-7.2-16-16z"})
  );
}

export default Lan5;
