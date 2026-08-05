import React from 'react';

export function LanStairsRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 56c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H432v120c0 13.3-10.7 24-24 24H304v104c0 13.3-10.7 24-24 24H176v104c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h104V328c0-13.3 10.7-24 24-24h104V200c0-13.3 10.7-24 24-24h104z"})
  );
}

export default LanStairsRegular;
