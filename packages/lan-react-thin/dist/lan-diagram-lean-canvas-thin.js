import React from 'react';

export function LanDiagramLeanCanvasThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 48v256h112V96c0-26.5-21.5-48-48-48zm-16 0h-80v128h80zm-96 0h-96v256h96zm-112 0h-80v128h80zm-96 0H64c-26.5 0-48 21.5-48 48v208h112zM16 320v96c0 26.5 21.5 48 48 48h216V320zm280 144h216c26.5 0 48-21.5 48-48v-96H296zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 208V192h-80v112zm208-112h-80v112h80z"})
  );
}

export default LanDiagramLeanCanvasThin;
