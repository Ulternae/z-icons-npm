import React from 'react';

export function MinaLetterP({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 12V7.625C9 7.28 9.28 7 9.625 7h3.75c1.036 0 1.875.84 1.875 1.875v1.25c0 1.036-.84 1.875-1.875 1.875zm0 0v5"})
  );
}

export default MinaLetterP;
