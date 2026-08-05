import React from 'react';

export function MinaLetterFSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9.25 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V8h5.25a1 1 0 1 0 0-2z"})
  );
}

export default MinaLetterFSolid;
