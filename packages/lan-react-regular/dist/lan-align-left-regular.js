import React from 'react';

export function LanAlignLeftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 40C10.7 40 0 50.7 0 64s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24zM0 320c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24m24 104c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanAlignLeftRegular;
