import React from 'react';

export function CoreUmbrella({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256.1 64c95.1 0 174.1 69.2 189.4 160H66.7c15.2-90.8 94.2-160 189.4-160m0-64C127 0 20.3 95.4 2.6 219.6-3 259.4 30.2 288 64.1 288h160v128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h-64v32c0 53 43 96 96 96s96-43 96-96V288h160c33.9 0 67.1-28.6 61.4-68.4C491.8 95.4 385.1 0 256.1 0"})
  );
}

export default CoreUmbrella;
