import React from 'react';

export function LanColumns3({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 64v384h64c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 0H160v384h128zM128 448V64H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanColumns3;
