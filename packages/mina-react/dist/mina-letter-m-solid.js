import React from 'react';

export function MinaLetterMSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8.8 6.4A1 1 0 0 0 7 7v10a1 1 0 1 0 2 0v-7l1.95 2.6a1 1 0 0 0 1.6 0L14.5 10v7a1 1 0 1 0 2 0V7a1 1 0 0 0-1.8-.6l-2.95 3.933z"})
  );
}

export default MinaLetterMSolid;
