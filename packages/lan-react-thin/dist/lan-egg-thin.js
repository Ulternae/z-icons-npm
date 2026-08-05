import React from 'react';

export function LanEggThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 480c-95.6 0-176-93.1-176-192 0-53.4 15.4-118.6 45.8-169.8C92.1 66.9 135.7 32 192 32s99.9 34.9 130.2 86.2C352.6 169.5 368 234.6 368 288c0 98.9-80.4 192-176 192M0 288c0 106 86 208 192 208s192-102 192-208c0-112-64-272-192-272S0 176 0 288m141.4-167.9c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5c-22.6 20.6-39.2 50.2-50.1 80.9C69.5 220 64 252.6 64 280c0 4.4 3.6 8 8 8s8-3.6 8-8c0-25.4 5.2-56.3 15.5-85.4 10.4-29.2 25.8-56.2 45.9-74.5"})
  );
}

export default LanEggThin;
