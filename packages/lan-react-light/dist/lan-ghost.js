import React from 'react';

export function LanGhost({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M242.7 506c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l29.3-33.4c11.6-13.3 32.1-14 44.5-1.5l2.3 2.3c4.2 4.2 10 6.6 16 6.6 12.5 0 22.6-10.1 22.6-22.6V192C384 86 298 0 192 0S0 86 0 192v265.4C0 469.9 10.1 480 22.6 480c6 0 11.8-2.4 16-6.6l2.3-2.3c12.5-12.5 32.9-11.8 44.5 1.5l29.3 33.4c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l26.6-30.5c12.7-14.6 35.4-14.6 48.2 0zM32 438.1V192c0-88.4 71.6-160 160-160s160 71.6 160 160v246.1c-25.1-14-57.6-9.3-77.6 13.4L256 472.6l-15.8-18.1c-25.5-29.1-70.8-29.1-96.3 0l-15.8 18.1-18.4-21.1C89.6 428.7 57.1 424 32 438.1M152 192a24 24 0 1 0-48 0 24 24 0 1 0 48 0m104 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
  );
}

export default LanGhost;
