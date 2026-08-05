import React from 'react';

export function LanArrowTurnLeftDownRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M360 48c13.3 0 24-10.7 24-24S373.3 0 360 0h-96c-53 0-96 43-96 96v334.1l-95-95c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L175 505c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l136-136c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95V96c0-26.5 21.5-48 48-48h96z"})
  );
}

export default LanArrowTurnLeftDownRegular;
