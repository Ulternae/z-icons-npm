import React from 'react';

export function LanCirclesOverlapSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 304c0 14.1 1.4 27.9 4.1 41.2C106.1 326.6 64 272.2 64 208c0-79.5 64.5-144 144-144 39 0 74.4 15.5 100.3 40.7C222.5 130.4 160 209.9 160 304M383.7 96.6C346.8 38.5 281.9 0 208 0 93.1 0 0 93.1 0 208c0 109.6 84.8 199.4 192.3 207.4C229.2 473.5 294.1 512 368 512c114.9 0 208-93.1 208-208 0-109.6-84.8-199.4-192.3-207.4m28.2 70.2c58 18.6 100.1 73 100.1 137.2 0 79.5-64.5 144-144 144-39 0-74.4-15.5-100.3-40.7C353.5 381.6 416 302.1 416 208c0-14.1-1.4-27.9-4.1-41.2"})
  );
}

export default LanCirclesOverlapSolid;
