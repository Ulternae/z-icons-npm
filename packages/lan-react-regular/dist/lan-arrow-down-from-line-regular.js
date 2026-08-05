import React from 'react';

export function LanArrowDownFromLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 48C10.7 48 0 37.3 0 24S10.7 0 24 0h336c13.3 0 24 10.7 24 24s-10.7 24-24 24zm321 321L209 505c-9.4 9.4-24.6 9.4-33.9 0L39 369c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l95 95V152c0-13.3 10.7-24 24-24s24 10.7 24 24v278.1l95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})
  );
}

export default LanArrowDownFromLineRegular;
