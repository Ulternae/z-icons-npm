import React from 'react';

export function LanScannerTouchscreenSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224-32c17.7 0 32 14.3 32 32v48h-64V0c0-17.7 14.3-32 32-32m168 256c-13.3 0-24-10.7-24-24V-8c0-13.3 10.7-24 24-24s24 10.7 24 24v208c0 13.3-10.7 24-24 24M320-16v84.1c-9.7-6.7-20.4-12-32-15.4V-16c0-8.8 7.2-16 16-16s16 7.2 16 16M448 0c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32zM64 160v288h192V160zm-64 0c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanScannerTouchscreenSolid;
