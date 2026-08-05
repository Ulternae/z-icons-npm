import React from 'react';

export function MinaLetterASolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M11.75 6a1 1 0 0 0-.936.649l-3.75 10a1 1 0 1 0 1.872.702l1.007-2.684h3.614l1.007 2.684a1 1 0 0 0 1.872-.702l-3.75-10A1 1 0 0 0 11.75 6m0 3.848 1.057 2.819h-2.114z"})
  );
}

export default MinaLetterASolid;
