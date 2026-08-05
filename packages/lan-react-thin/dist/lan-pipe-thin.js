import React from 'react';

export function LanPipeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 64 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 0c4.4 0 8 3.6 8 8v496c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8"})
  );
}

export default LanPipeThin;
