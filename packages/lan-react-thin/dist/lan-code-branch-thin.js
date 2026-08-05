import React from 'react';

export function LanCodeBranchThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M72 128a56 56 0 1 0 0-112 56 56 0 1 0 0 112m72-56c0 37.1-28 67.6-64 71.6V256h216c39.8 0 72-32.2 72-72v-40.4c-36-4-64-34.5-64-71.6 0-39.8 32.2-72 72-72s72 32.2 72 72c0 37.1-28 67.6-64 71.6V184c0 48.6-39.4 88-88 88H80v96.4c36 4 64 34.5 64 71.6 0 39.8-32.2 72-72 72S0 479.8 0 440c0-37.1 28-67.6 64-71.6V143.5C28 139.6 0 109.1 0 72 0 32.2 32.2 0 72 0s72 32.2 72 72m232 56a56 56 0 1 0 0-112 56 56 0 1 0 0 112M16 440a56 56 0 1 0 112 0 56 56 0 1 0-112 0"})
  );
}

export default LanCodeBranchThin;
