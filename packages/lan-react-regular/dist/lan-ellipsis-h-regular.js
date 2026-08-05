import React from 'react';

export function LanEllipsisHRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 256a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-176 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0M48 304a48 48 0 1 1 0-96 48 48 0 1 1 0 96"})
  );
}

export default LanEllipsisHRegular;
