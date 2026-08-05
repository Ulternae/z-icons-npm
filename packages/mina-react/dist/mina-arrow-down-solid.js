import React from 'react';

export function MinaArrowDownSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M5.487 14.422a.75.75 0 0 1-.034-1.06h5.797V4.5a.75.75 0 0 1 1.5 0v8.862h5.797a.75.75 0 0 1-.034 1.06l-6 5.625a.75.75 0 0 1-1.026 0z"})
  );
}

export default MinaArrowDownSolid;
