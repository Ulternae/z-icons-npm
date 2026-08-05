import React from 'react';

export function LanMarsAndVenusThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -48 512 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M376-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h92.7l-110 110C327.4 49.4 285.8 32 240 32c-97.2 0-176 78.8-176 176 0 94.5 74.5 171.6 168 175.8V448h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-64.2c93.5-4.2 168-81.3 168-175.8 0-45.7-17.4-87.4-46-118.7l110-110V72c0 4.4 3.6 8 8 8s8-3.6 8-8V-40c0-4.4-3.6-8-8-8zM240 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320"})
  );
}

export default LanMarsAndVenusThin;
