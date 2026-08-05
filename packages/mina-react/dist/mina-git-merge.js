import React from 'react';

export function MinaGitMerge({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m9 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0a9 9 0 0 1-9-9m0 0v12"})
  );
}

export default MinaGitMerge;
