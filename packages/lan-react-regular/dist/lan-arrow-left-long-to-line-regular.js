import React from 'react';

export function LanArrowLeftLongToLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 120v272c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24S0 106.7 0 120m135 119c-9.4 9.4-9.4 24.6 0 33.9L271 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-95-95H616c13.3 0 24-10.7 24-24s-10.7-24-24-24H209.9l95-95c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"})
  );
}

export default LanArrowLeftLongToLineRegular;
