import React from 'react';

export function LanDiagramNestedThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 48c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zM48 32C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h40v96c0 39.8 32.2 72 72 72h96v40c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v40h-96c-30.9 0-56-25.1-56-56v-96h40c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm352 272c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32z"})
  );
}

export default LanDiagramNestedThin;
