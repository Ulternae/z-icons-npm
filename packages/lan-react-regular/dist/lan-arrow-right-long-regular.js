import React from 'react';

export function LanArrowRightLongRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M569 273c9.4-9.4 9.4-24.6 0-33.9L433 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h470.1l-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
  );
}

export default LanArrowRightLongRegular;
