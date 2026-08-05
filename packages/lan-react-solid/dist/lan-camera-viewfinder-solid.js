import React from 'react';

export function LanCameraViewfinderSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 0h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-8.8 0-16 7.2-16 16v72c0 13.3-10.7 24-24 24S0 149.3 0 136V64C0 28.7 28.7 0 64 0m312 0h72c35.3 0 64 28.7 64 64v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V64c0-8.8-7.2-16-16-16h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24M48 376v72c0 8.8 7.2 16 16 16h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64v-72c0-13.3 10.7-24 24-24s24 10.7 24 24m464 0v72c0 35.3-28.7 64-64 64h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c8.8 0 16-7.2 16-16v-72c0-13.3 10.7-24 24-24s24 10.7 24 24M180 128l6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6h94.7c10 0 19 6.2 22.5 15.6l6.2 16.4h36c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-224c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h36zm140 128a64 64 0 1 0-128 0 64 64 0 1 0 128 0"})
  );
}

export default LanCameraViewfinderSolid;
