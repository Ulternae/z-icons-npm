import React from 'react';

export function MinaLetterQ({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15.385 16.882V9.471A2.466 2.466 0 0 0 12.923 7h-2.462A2.466 2.466 0 0 0 8 9.47v4.942a2.466 2.466 0 0 0 2.461 2.47zm0 0-2.462-2.47m2.462 2.47L16 17.5"})
  );
}

export default MinaLetterQ;
