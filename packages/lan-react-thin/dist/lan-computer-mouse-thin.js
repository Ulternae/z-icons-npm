import React from 'react';

export function LanComputerMouseThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 192h168V16h-24C80.5 16 16 80.5 16 160zM184 0h40c88.4 0 160 71.6 160 160v192c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352V160C0 71.6 71.6 0 160 0zM16 208v144c0 79.5 64.5 144 144 144h64c79.5 0 144-64.5 144-144V208zm352-16v-32c0-79.5-64.5-144-144-144h-24v176z"})
  );
}

export default LanComputerMouseThin;
