import React from 'react';

export function LanComputerMouseButtonLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M216 168V0h8c88.4 0 160 71.6 160 160v192c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352V240h144c39.8 0 72-32.2 72-72M0 192v-32C0 71.6 71.6 0 160 0h8v168c0 13.3-10.7 24-24 24z"})
  );
}

export default LanComputerMouseButtonLeftSolid;
