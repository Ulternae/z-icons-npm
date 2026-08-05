import React from 'react';

export function MinaQuestion({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 21v-.5m0-3c0-5.1 5-3.825 5-8.924 0-6.768-10-6.768-10 0"})
  );
}

export default MinaQuestion;
