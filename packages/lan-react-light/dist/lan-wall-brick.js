import React from 'react';

export function LanWallBrick({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M136 64v64h176V64zm-32 0H64c-17.7 0-32 14.3-32 32v32h72zm-72 96v80h176v-80zm0 192h72v-80H32zm0 32v32c0 17.7 14.3 32 32 32h144v-64zm104-32h176v-80H136zm208 0h72v-80h-72zm72 32H240v64h144c17.7 0 32-14.3 32-32zm0-224H240v80h176zm0-32V96c0-17.7-14.3-32-32-32h-40v64zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanWallBrick;
