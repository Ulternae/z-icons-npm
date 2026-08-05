import React from 'react';

export function LanArrowTurnDownRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 48C10.7 48 0 37.3 0 24S10.7 0 24 0h96c53 0 96 43 96 96v334.1l95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L209 505c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7L39 369c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l95 95V96c0-26.5-21.5-48-48-48z"})
  );
}

export default LanArrowTurnDownRegular;
