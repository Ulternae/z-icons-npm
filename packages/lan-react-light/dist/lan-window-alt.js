import React from 'react';

export function LanWindowAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v96h448v-96c0-17.7-14.3-32-32-32zM32 256v128c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V256zM448 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm-8 96a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-72 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0"})
  );
}

export default LanWindowAlt;
