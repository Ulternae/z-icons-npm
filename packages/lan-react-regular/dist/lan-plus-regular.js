import React from 'react';

export function LanPlusRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v176H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h176v176c0 13.3 10.7 24 24 24s24-10.7 24-24V280h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"})
  );
}

export default LanPlusRegular;
