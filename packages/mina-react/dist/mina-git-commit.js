import React from 'react';

export function MinaGitCommit({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-9-3h6m6 0h6"})
  );
}

export default MinaGitCommit;
