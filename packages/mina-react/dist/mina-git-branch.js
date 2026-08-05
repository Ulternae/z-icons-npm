import React from 'react';

export function MinaGitBranch({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6"}), React.createElement("path", {"d":"M18 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 0a9 9 0 0 1-9 9m-3-3V3"})
  );
}

export default MinaGitBranch;
