import React from 'react';

export function LanLightSwitchOnRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 288V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64m48-16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-80h-96z"})
  );
}

export default LanLightSwitchOnRegular;
