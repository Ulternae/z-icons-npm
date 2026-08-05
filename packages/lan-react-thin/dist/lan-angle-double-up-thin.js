import React from 'react';

export function LanAngleDoubleUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M197.7 50.3c-3.1-3.1-8.2-3.1-11.3 0l-176 176c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 67.3l170.3 170.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-176-176zm176 368-176-176c-3.1-3.1-8.2-3.1-11.3 0l-176 176c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 259.3l170.3 170.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"})
  );
}

export default LanAngleDoubleUpThin;
