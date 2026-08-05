import React from 'react';

export function LanVentDamperSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v32h32c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-32v32c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64v-32H32c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h32zm120 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 104c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 104c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanVentDamperSolid;
