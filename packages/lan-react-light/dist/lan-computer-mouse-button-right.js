import React from 'react';

export function LanComputerMouseButtonRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M240 224c-35.3 0-64-28.7-64-64V32h-16C89.3 32 32 89.3 32 160v192c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128V224zM208 32v128c0 17.7 14.3 32 32 32h112v-32c0-70.7-57.3-128-128-128zm16-32c88.4 0 160 71.6 160 160v192c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352V160C0 71.6 71.6 0 160 0z"})
  );
}

export default LanComputerMouseButtonRight;
