import React from 'react';

export function Lan2Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 40c0-4.4 3.6-8 8-8h203.3C314.9 32 360 77.1 360 132.7c0 39.3-22.8 75-58.5 91.4l-183.8 84.8C75.2 328.6 48 371.1 48 417.9V464h296c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8v-54.1c0-53 30.8-101.3 79-123.5l183.8-84.8c30-13.8 49.2-43.9 49.2-76.9 0-46.8-37.9-84.7-84.7-84.7H56c-4.4 0-8-3.6-8-8"})
  );
}

export default Lan2Thin;
