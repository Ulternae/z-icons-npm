import React from 'react';

export function MinaArrowLongDownLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M11 19H5m0 0v-6m0 6L19 5"})
  );
}

export default MinaArrowLongDownLeft;
