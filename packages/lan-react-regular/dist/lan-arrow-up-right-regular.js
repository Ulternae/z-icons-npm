import React from 'react';

export function LanArrowUpRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M360 64c13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24s-24-10.7-24-24V145.9l-295 295c-9.4 9.4-24.6 9.4-33.9 0S-2.3 416.4 7 407l295-295H119.9c-13.3 0-24-10.7-24-24s10.7-24 24-24h240z"})
  );
}

export default LanArrowUpRightRegular;
