import React from 'react';

export function MinaLetterH({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 7v5m0 0v5m0-5h6.25m0-5v5m0 0v5"})
  );
}

export default MinaLetterH;
