import React from 'react';

export function LanButterSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 128h64v144h64V128c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v144h384zM64 320c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32h8c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
  );
}

export default LanButterSolid;
