import React from 'react';

export function MinaArrowLongUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m8 6 4-4m0 0 4 4m-4-4v20"})
  );
}

export default MinaArrowLongUp;
