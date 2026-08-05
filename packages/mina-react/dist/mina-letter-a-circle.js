import React from 'react';

export function MinaLetterACircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M14 12.833 12 7.5l-2 5.333m4 0 1 2.667m-1-2.667h-4M9 15.5l1-2.667"})
  );
}

export default MinaLetterACircle;
