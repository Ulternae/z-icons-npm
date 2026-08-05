import React from 'react';

export function LanPlusMinusRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M216 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v144H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h144v144c0 13.3 10.7 24 24 24s24-10.7 24-24V216h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H216zM0 488c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"})
  );
}

export default LanPlusMinusRegular;
