import React from 'react';

export function MinaChevronDownRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16.871 7.636a.75.75 0 0 0-.75-.75l-9.235 9.235c0 .415.336.75.75.75h8.485a.75.75 0 0 0 .75-.75z"})
  );
}

export default MinaChevronDownRightSolid;
