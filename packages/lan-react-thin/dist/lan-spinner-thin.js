import React from 'react';

export function LanSpinnerThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 336a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96M16 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m368-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96M86.3 425.7a32 32 0 1 1 45.3-45.3 32 32 0 1 1-45.3 45.3m56.6-56.6A48 48 0 1 0 75 437a48 48 0 1 0 67.9-67.9M131.5 86.3a32 32 0 1 1-45.3 45.3 32 32 0 1 1 45.3-45.3M75 142.9A48 48 0 1 0 142.9 75 48 48 0 1 0 75 142.9m305.5 237.6a32 32 0 1 1 45.3 45.3 32 32 0 1 1-45.3-45.3M437 437a48 48 0 1 0-67.9-67.9A48 48 0 1 0 437 437"})
  );
}

export default LanSpinnerThin;
