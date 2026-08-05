import React from 'react';

export function LanForwardRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 421.3V90.7L284.4 256zm19.7-378.2C120.1 32 103 28.9 88.3 35.2S64 56 64 72v368c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9L304 303.7V440c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9l192-184c7.9-7.5 12.3-18 12.3-28.9s-4.5-21.3-12.3-28.9l-192-184C360.1 32 343 28.9 328.3 35.2S304 56 304 72v136.3L131.7 43.2zM524.4 256 352 421.3V90.7z"})
  );
}

export default LanForwardRegular;
