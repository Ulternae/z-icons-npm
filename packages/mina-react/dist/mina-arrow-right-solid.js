import React from 'react';

export function MinaArrowRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14.422 5.487a.75.75 0 0 0-1.06-.034v5.797H4.5a.75.75 0 0 0 0 1.5h8.862v5.797a.75.75 0 0 0 1.06-.034l5.625-6a.75.75 0 0 0 0-1.026z"})
  );
}

export default MinaArrowRightSolid;
