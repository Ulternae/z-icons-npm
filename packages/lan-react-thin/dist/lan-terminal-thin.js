import React from 'react';

export function LanTerminalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M2.3 77.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l184 184c3.1 3.1 3.1 8.2 0 11.3l-184 184c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L180.7 256zM200 432h304c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanTerminalThin;
