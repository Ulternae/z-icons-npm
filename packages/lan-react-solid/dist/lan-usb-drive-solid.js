import React from 'react';

export function LanUsbDriveSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h272c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm480 32H416v256h128c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32m-48 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m24 72a24 24 0 1 1-48 0 24 24 0 1 1 48 0"})
  );
}

export default LanUsbDriveSolid;
