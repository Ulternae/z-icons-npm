import React from 'react';

export function LanAngleLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 256 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M18.3 261.7c-3.1-3.1-3.1-8.2 0-11.3l176-176c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L35.3 256l170.4 170.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-176-176z"})
  );
}

export default LanAngleLeftThin;
