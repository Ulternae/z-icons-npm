import React from 'react';

export function MinaLetterF({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15.5 7H9.25v5m0 0v5m0-5h5"})
  );
}

export default MinaLetterF;
