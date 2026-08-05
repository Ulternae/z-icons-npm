import React from 'react';

export function MinaLetterWSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1.8.6l2.95-3.933L14.7 17.6a1 1 0 0 0 1.8-.6V7a1 1 0 1 0-2 0v7l-1.95-2.6a1 1 0 0 0-1.6 0L9 14V7a1 1 0 0 0-1-1"})
  );
}

export default MinaLetterWSolid;
