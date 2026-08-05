import React from 'react';

export function LanSignPosts({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32v32C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h320v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64V32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32H96V32c0-8.8-7.2-16-16-16s-16 7.2-16 16m384 64c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32z"})
  );
}

export default LanSignPosts;
