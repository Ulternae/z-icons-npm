import React from 'react';

export function LanArrowDownLeftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 448c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24v182.1L343 71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L81.9 400H264c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
  );
}

export default LanArrowDownLeftRegular;
