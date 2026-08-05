import React from 'react';

export function CoreTicketSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M456 256c0-30.9 25.1-56 56-56V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v104c30.9 0 56 25.1 56 56s-25.1 56-56 56v104c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V312c-30.9 0-56-25.1-56-56m-200-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m32 160a32 32 0 1 1-64 0 32 32 0 1 1 64 0M256 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default CoreTicketSolid;
