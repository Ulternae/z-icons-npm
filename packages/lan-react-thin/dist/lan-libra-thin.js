import React from 'react';

export function LanLibraThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M504 432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zM256 32c97.2 0 176 78.8 176 176 0 22.6-4.3 44.2-12.1 64H504c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96.2c-2.7 0-5.3-1.4-6.8-3.7s-1.6-5.2-.5-7.7c9.9-20.8 15.4-44 15.4-68.6 0-88.4-71.6-160-160-160S96 119.6 96 208c0 24.6 5.5 47.8 15.4 68.6 1.2 2.5 1 5.4-.5 7.7s-4 3.7-6.8 3.7H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h84.1C84.3 252.2 80 230.6 80 208c0-97.2 78.8-176 176-176"})
  );
}

export default LanLibraThin;
