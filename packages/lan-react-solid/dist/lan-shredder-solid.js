import React from 'react';

export function LanShredderSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 0C92.7 0 64 28.7 64 64v80h384v-37.5c0-17-6.7-33.3-18.7-45.3l-42.6-42.5C374.7 6.7 358.5 0 341.5 0zM64 192c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h64v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h64v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h64v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h32c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64zm344 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
  );
}

export default LanShredderSolid;
