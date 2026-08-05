import React from 'react';

export function LanSpinnerScaleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 28a36 36 0 1 1 0 72 36 36 0 1 1 0-72m-52 36a52 52 0 1 0 104 0 52 52 0 1 0-104 0m52 368a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-32 16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m224-176a16 16 0 1 1 0-32 16 16 0 1 1 0 32m32-16a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-392 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80m356-67.5A40 40 0 1 1 363.5 92a40 40 0 1 1 56.5 56.5m11.3-67.9a56 56 0 1 0-79.2 79.2 56 56 0 1 0 79.2-79.2M131.5 380.5a16 16 0 1 1-22.6 22.6 16 16 0 1 1 22.6-22.6m-33.9-11.4a32 32 0 1 0 45.3 45.3 32 32 0 1 0-45.3-45.3M380.4 403a16 16 0 1 1 22.6-22.6 16 16 0 1 1-22.6 22.6m33.9 11.3A32 32 0 1 0 369 369a32 32 0 1 0 45.3 45.3M142.9 142.9a32 32 0 1 1-45.3-45.3 32 32 0 1 1 45.3 45.3m11.3-56.6a48 48 0 1 0-67.9 67.9 48 48 0 1 0 67.9-67.9"})
  );
}

export default LanSpinnerScaleThin;
