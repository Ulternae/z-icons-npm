import React from 'react';

export function LanComputerMouse({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 224H32v128c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128V224zm192-32v160c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352V160C0 71.6 71.6 0 160 0h64c88.4 0 160 71.6 160 160zM208 32v160h144v-32c0-70.7-57.3-128-128-128zm-32 0h-16C89.3 32 32 89.3 32 160v32h144z"})
  );
}

export default LanComputerMouse;
