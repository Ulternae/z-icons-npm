import React from 'react';

export function LanDrawSquare({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m48 62c22.5-5.8 40.2-23.5 46-46h260c5.8 22.5 23.5 40.2 46 46v260c-22.5 5.8-40.2 23.5-46 46H126c-5.8-22.5-23.5-40.2-46-46zm46-78C118.9 20.4 93.8 0 64 0 28.7 0 0 28.7 0 64c0 29.8 20.4 54.9 48 62v260c-27.6 7.1-48 32.2-48 62 0 35.3 28.7 64 64 64 29.8 0 54.9-20.4 62-48h260c7.1 27.6 32.2 48 62 48 35.3 0 64-28.7 64-64 0-29.8-20.4-54.9-48-62V126c27.6-7.1 48-32.2 48-62 0-35.3-28.7-64-64-64-29.8 0-54.9 20.4-62 48zM64 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64m384 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanDrawSquare;
