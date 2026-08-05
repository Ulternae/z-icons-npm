import React from 'react';

export function LanTombstoneAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 192c0-97.2-78.8-176-176-176S48 94.8 48 192v304h352zM32 496V192C32 86 118 0 224 0s192 86 192 192v304h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
  );
}

export default LanTombstoneAltThin;
