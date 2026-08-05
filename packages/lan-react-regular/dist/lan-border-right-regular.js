import React from 'react';

export function LanBorderRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64m136-64c13.3 0 24 10.7 24 24v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-13.3 10.7-24 24-24M288 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m0-256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanBorderRightRegular;
