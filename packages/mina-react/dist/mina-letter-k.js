import React from 'react';

export function MinaLetterK({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 7v5m0 0v5m0-5h.625m0 0 5.625 5m-5.625-5 5.625-5"})
  );
}

export default MinaLetterK;
