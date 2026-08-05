import React from 'react';

export function LanArrowLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M2.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l176 176c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 264H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H27.3L189.7 85.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-176 176z"})
  );
}

export default LanArrowLeftThin;
