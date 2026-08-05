import React from 'react';

export function MinaGitCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M14 12a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h3m-7 0H7"})
  );
}

export default MinaGitCircle;
