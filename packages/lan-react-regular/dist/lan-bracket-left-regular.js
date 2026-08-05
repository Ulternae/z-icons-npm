import React from 'react';

export function LanBracketLeftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 88c0-30.9 25.1-56 56-56h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-4.4 0-8 3.6-8 8v336c0 4.4 3.6 8 8 8h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-30.9 0-56-25.1-56-56z"})
  );
}

export default LanBracketLeftRegular;
