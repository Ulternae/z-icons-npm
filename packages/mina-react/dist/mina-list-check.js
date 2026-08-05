import React from 'react';

export function MinaListCheck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M7.5 16.039 4.688 19.5 3 18.346m4.5-8.077-2.812 3.462L3 12.577M7.5 4.5 4.688 7.962 3 6.808M11 17.5h10M11 12h10M11 6.5h10"})
  );
}

export default MinaListCheck;
