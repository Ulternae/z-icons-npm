import React from 'react';

export function CoreGamepadModernSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M400 480h48c70.7 0 128-57.3 128-128V224c0-106-86-192-192-192H192C86 32 0 118 0 224v128c0 70.7 57.3 128 128 128h48l64-96h96zm0-344a40 40 0 1 1 0 80 40 40 0 1 1 0-80m24 136a40 40 0 1 1 80 0 40 40 0 1 1-80 0M184 144v56h56v48h-56v56h-48v-56H80v-48h56v-56z"})
  );
}

export default CoreGamepadModernSolid;
