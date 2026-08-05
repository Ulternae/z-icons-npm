import React from 'react';

export function MinaLetterJ({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15.25 7v7.5a2.5 2.5 0 0 1-2.5 2.5H11.5A2.5 2.5 0 0 1 9 14.5"})
  );
}

export default MinaLetterJ;
