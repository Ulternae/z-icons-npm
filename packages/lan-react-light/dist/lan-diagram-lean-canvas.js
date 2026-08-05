import React from 'react';

export function LanDiagramLeanCanvas({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 64v224h96V96c0-17.7-14.3-32-32-32zm-32 0h-64v104h64zm-96 0h-64v224h64zm-96 0h-64v104h64zm-96 0H64c-17.7 0-32 14.3-32 32v192h96zM32 320v96c0 17.7 14.3 32 32 32h208V320zm272 128h208c17.7 0 32-14.3 32-32v-96H304zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 192v-88h-64v88zm192-88h-64v88h64z"})
  );
}

export default LanDiagramLeanCanvas;
