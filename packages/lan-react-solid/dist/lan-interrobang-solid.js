import React from 'react';

export function LanInterrobangSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 64c-53 0-96 43-96 96 0 17.7-14.3 32-32 32S0 177.7 0 160C0 71.6 71.6 0 160 0s160 71.6 160 160c0 71.2-46.5 131.5-110.8 152.3-5.8 1.9-10.7 5.1-13.7 8.4-2.9 3.2-3.5 5.6-3.5 7.3v24c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32v90.5c37.3-13.2 64-48.8 64-90.5 0-53-43-96-96-96m40 408c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40"})
  );
}

export default LanInterrobangSolid;
