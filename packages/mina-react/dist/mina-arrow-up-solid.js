import React from 'react';

export function MinaArrowUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M18.513 9.578a.75.75 0 0 1 .034 1.06H12.75V19.5a.75.75 0 0 1-1.5 0v-8.862H5.453a.75.75 0 0 1 .034-1.06l6-5.625a.75.75 0 0 1 1.026 0z"})
  );
}

export default MinaArrowUpSolid;
