import React from 'react';

export function LanArrowRightToLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v336c0 13.3 10.7 24 24 24s24-10.7 24-24zM377 273c9.4-9.4 9.4-24.6 0-33.9L241 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h278.1l-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
  );
}

export default LanArrowRightToLineRegular;
