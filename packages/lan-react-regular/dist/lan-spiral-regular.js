import React from 'react';

export function LanSpiralRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M127.3 4.5C138-3.3 153-1 160.8 9.7s5.5 25.7-5.1 33.6C90.3 91.3 48 168.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-83.9-68.1-152-152-152s-152 68.1-152 152c0 53 43 96 96 96s96-43 96-96c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88s88 39.4 88 88c0 79.5-64.5 144-144 144s-144-64.5-144-144c0-110.5 89.5-200 200-200s200 89.5 200 200c0 141.4-114.6 256-256 256S0 397.4 0 256C0 152.8 50.1 61.3 127.3 4.5"})
  );
}

export default LanSpiralRegular;
