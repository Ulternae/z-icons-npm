import React from 'react';

export function LanLambdaSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h108.2l16.4 32.7L18.8 434.8c-7.3 16.1-.1 35.1 16 42.3s35.1.1 42.3-16l116.3-258.5 121 242c10.8 21.7 33 35.4 57.2 35.4h44.2c17.7 0 32-14.3 32-32s-14.3-32-32-32h-44.2L197.3 67.4C186.6 45.7 164.5 32 140.2 32z"})
  );
}

export default LanLambdaSolid;
