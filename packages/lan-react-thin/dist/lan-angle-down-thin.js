import React from 'react';

export function LanAngleDownThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M186.3 365.7c3.1 3.1 8.2 3.1 11.3 0l176-176c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 348.7 21.7 178.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l176 176z"})
  );
}

export default LanAngleDownThin;
