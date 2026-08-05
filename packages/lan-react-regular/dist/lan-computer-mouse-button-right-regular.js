import React from 'react';

export function LanComputerMouseButtonRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 224v128c0 61.9-50.1 112-112 112h-64c-61.9 0-112-50.1-112-112V160C48 98.1 98.1 48 160 48h32v120c0 30.9 25.1 56 56 56zm48-64C384 71.6 312.4 0 224 0h-64C71.6 0 0 71.6 0 160v192c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160z"})
  );
}

export default LanComputerMouseButtonRightRegular;
