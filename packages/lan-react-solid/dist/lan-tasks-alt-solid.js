import React from 'react';

export function LanTasksAltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 160h96V96h-96zM0 160V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm160 256h224v-64H160zM0 416v-80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanTasksAltSolid;
