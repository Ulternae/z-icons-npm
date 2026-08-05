import React from 'react';

export function MinaLetterW({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8 7v10l3.75-5 3.75 5V7"})
  );
}

export default MinaLetterW;
