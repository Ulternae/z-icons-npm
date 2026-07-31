import React from 'react';

export function CoreArrowRotateLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 192c-17.7 0-32-14.3-32-32V0h64v86.7C110.9 33.5 179.5 0 256 0c141.4 0 256 114.6 256 256S397.4 512 256 512c-102.2 0-190.3-59.9-231.3-146.3l57.8-27.5c30.9 64.9 97 109.7 173.5 109.7 106 0 192-86 192-192S362 64 256 64c-56.8 0-107.9 24.7-143.1 64H192v64z"})
  );
}

export default CoreArrowRotateLeft;
