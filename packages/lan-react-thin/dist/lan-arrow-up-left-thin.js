import React from 'react';

export function LanArrowUpLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 64c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8s8-3.6 8-8V91.3l354.3 354.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 80H280c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
  );
}

export default LanArrowUpLeftThin;
