import React from 'react';

export function MinaLetterB({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 12V7h4.589c2.74 0 3.124 4.072.57 5M9 12v5h4.589c2.74 0 3.124-4.072.57-5M9 12h5.158"})
  );
}

export default MinaLetterB;
