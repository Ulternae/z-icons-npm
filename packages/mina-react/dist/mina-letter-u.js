import React from 'react';

export function MinaLetterU({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8 7v7.5a2.5 2.5 0 0 0 2.5 2.5H13a2.5 2.5 0 0 0 2.5-2.5V7"})
  );
}

export default MinaLetterU;
