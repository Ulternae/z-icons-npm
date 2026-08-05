import React from 'react';

export function LanSignalAlt4Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32zm-160 64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-17.7-14.3-32-32-32m-96 160c0-17.7-14.3-32-32-32s-32 14.3-32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32zM64 416c0-17.7-14.3-32-32-32S0 398.3 0 416v32c0 17.7 14.3 32 32 32s32-14.3 32-32z"})
  );
}

export default LanSignalAlt4Solid;
