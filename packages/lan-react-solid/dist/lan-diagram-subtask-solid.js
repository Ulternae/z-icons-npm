import React from 'react';

export function LanDiagramSubtaskSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H128v96c0 17.7 14.3 32 32 32h32c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64h-32c-53 0-96-43-96-96v-96c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanDiagramSubtaskSolid;
