import React from 'react';

export function LanArrowLeftFromLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24s-24-10.7-24-24zM7 273c-9.4-9.4-9.4-24.6 0-33.9L143 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-95 95H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9l95 95c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"})
  );
}

export default LanArrowLeftFromLineRegular;
