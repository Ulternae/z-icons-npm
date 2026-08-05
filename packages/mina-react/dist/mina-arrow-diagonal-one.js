import React from 'react';

export function MinaArrowDiagonalOne({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m4.929 12.707 7.778-7.778m0 0v4.95m0-4.95h-4.95m11.314 6.364-7.778 7.778m0 0h4.95m-4.95 0v-4.95"})
  );
}

export default MinaArrowDiagonalOne;
