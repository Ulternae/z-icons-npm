import React from 'react';

export function LanPlusLargeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v208H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h208v208c0 13.3 10.7 24 24 24s24-10.7 24-24V280h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H280z"})
  );
}

export default LanPlusLargeRegular;
