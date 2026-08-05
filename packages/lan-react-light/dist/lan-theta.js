import React from 'react';

export function LanTheta({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 256c0-64.4-19.6-121.5-49.8-161.8S232.7 32 192 32 112 53.9 81.8 94.2 32 191.6 32 256s19.6 121.5 49.8 161.8S151.3 480 192 480s80-21.9 110.2-62.2S352 320.4 352 256m32 0c0 141.4-86 256-192 256S0 397.4 0 256 86 0 192 0s192 114.6 192 256m-272-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanTheta;
