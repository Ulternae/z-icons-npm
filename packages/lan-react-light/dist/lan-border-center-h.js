import React from 'react';

export function LanBorderCenterH({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zM32 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48m96-384a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48m192-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-336a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-96 336a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-336a24 24 0 1 0 0-48 24 24 0 1 0 0 48m192 336a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-384a24 24 0 1 0 0 48 24 24 0 1 0 0-48M224 328a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 328a24 24 0 1 0 0 48 24 24 0 1 0 0-48m384-144a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 136a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
  );
}

export default LanBorderCenterH;
