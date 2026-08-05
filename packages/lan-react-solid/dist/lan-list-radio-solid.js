import React from 'react';

export function LanListRadioSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m160-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zM40 416a24 24 0 1 1 48 0 24 24 0 1 1-48 0m88 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M64 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
  );
}

export default LanListRadioSolid;
