import React from 'react';

export function LanBusAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 32c-35.3 0-64 28.7-64 64h384c0-35.3-28.7-64-64-64zm-64 96v128h384V128zm384 160H32v96c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32zM0 256V96C0 43 43 0 96 0h256c53 0 96 43 96 96v288c0 23.7-12.9 44.4-32 55.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-56.6c-19.1-11-32-31.7-32-55.4zm72 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanBusAlt;
