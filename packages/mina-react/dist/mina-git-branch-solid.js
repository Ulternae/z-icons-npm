import React from 'react';

export function MinaGitBranchSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6.75 3a.75.75 0 0 0-1.5 0v11.325a3.751 3.751 0 1 0 4.43 4.402 9.75 9.75 0 0 0 9.047-9.047 3.751 3.751 0 1 0-1.504-.01 8.25 8.25 0 0 1-7.554 7.553 3.76 3.76 0 0 0-2.919-2.898z"})
  );
}

export default MinaGitBranchSolid;
