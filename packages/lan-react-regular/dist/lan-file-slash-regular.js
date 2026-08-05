import React from 'react';

export function LanFileSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-89-89V186.6c0-17-6.7-33.3-18.7-45.3L338.7 18.7C326.7 6.7 310.5 0 293.5 0H160c-25.5 0-47.4 14.9-57.8 36.4zm103 103V64c0-8.8 7.2-16 16-16h112v88c0 39.8 32.2 72 72 72h88v158.2l-288-288zm0 369.9V213.8l-48-48V448c0 35.3 28.7 64 64 64h256c7.8 0 15.3-1.4 22.2-4l-44-44H160c-8.8 0-16-7.2-16-16m268.1-288H344c-13.3 0-24-10.7-24-24V67.9z"})
  );
}

export default LanFileSlashRegular;
