import React from 'react';

export function MinaChevronUpLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M7.879 7.129a.75.75 0 0 0-.75.75v8.485c0 .414.335.75.75.75l9.235-9.235a.75.75 0 0 0-.75-.75z"})
  );
}

export default MinaChevronUpLeftSolid;
