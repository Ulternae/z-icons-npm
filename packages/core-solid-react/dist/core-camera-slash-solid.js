import React from 'react';

export function CoreCameraSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.2 640 602.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zm-213-32H128.3c-35.3 0-64-28.7-64-64V160c0-7.3 1.3-14.2 3.5-20.8zm71.8-384h32c35.3 0 64 28.7 64 64v216.2L232.1 32h184.2z"})
  );
}

export default CoreCameraSlashSolid;
