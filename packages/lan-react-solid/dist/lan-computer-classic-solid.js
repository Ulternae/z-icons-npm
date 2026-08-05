import React from 'react';

export function LanComputerClassicSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm32 432v-16h384v16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32M96 64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-8 288a24 24 0 1 0 0-48 24 24 0 1 0 0 48m136-24c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H248c-13.3 0-24 10.7-24 24"})
  );
}

export default LanComputerClassicSolid;
