import React from 'react';

export function MinaLetterICircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9.5 8H12m0 0h2.5M12 8v8m2.5 0H12m0 0H9.5"})
  );
}

export default MinaLetterICircle;
