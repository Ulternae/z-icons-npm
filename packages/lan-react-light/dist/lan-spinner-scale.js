import React from 'react';

export function LanSpinnerScale({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 44a20 20 0 1 1 0 40 20 20 0 1 1 0-40m-52 20a52 52 0 1 0 104 0 52 52 0 1 0-104 0m28 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0m240-192a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-396 0a12 12 0 1 1-24 0 12 12 0 1 1 24 0m-12-44a44 44 0 1 0 0 88 44 44 0 1 0 0-88m344.7-74.8a24 24 0 1 1-33.9-33.9 24 24 0 1 1 33.9 33.9m22.6-56.6a56 56 0 1 0-79.2 79.2 56 56 0 1 0 79.2-79.2M92.2 391.8a28 28 0 1 0 56 0 28 28 0 1 0-56 0M384 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48M131.5 131.5a16 16 0 1 1-22.6-22.6 16 16 0 1 1 22.6 22.6m22.6-45.3a48 48 0 1 0-67.9 67.9 48 48 0 1 0 67.9-67.9"})
  );
}

export default LanSpinnerScale;
