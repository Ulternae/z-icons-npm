import React from 'react';

export function LanArrowRightToArcSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 256c0 106-86 192-192 192-17.7 0-32 14.3-32 32s14.3 32 32 32c141.4 0 256-114.6 256-256S397.4 0 256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c106 0 192 86 192 192m-105.4 22.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l41.4 41.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h210.7l-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96z"})
  );
}

export default LanArrowRightToArcSolid;
