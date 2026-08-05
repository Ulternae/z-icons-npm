import React from 'react';

export function Lan5Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 40c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v176h176c70.7 0 128 57.3 128 128s-57.3 128-128 128H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h184c61.9 0 112-50.1 112-112s-50.1-112-112-112H8c-4.4 0-8-3.6-8-8z"})
  );
}

export default Lan5Thin;
