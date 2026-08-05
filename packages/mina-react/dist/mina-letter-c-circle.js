import React from 'react';

export function MinaLetterCCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M15 10v-.25A1.75 1.75 0 0 0 13.25 8H11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.25A1.75 1.75 0 0 0 15 14.25V14"})
  );
}

export default MinaLetterCCircle;
