import React from 'react';

export function LanRulerHorizontalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M528 368H48c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32h48v104c0 4.4 3.6 8 8 8s8-3.6 8-8V144h80v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h72v104c0 4.4 3.6 8 8 8s8-3.6 8-8V144h72v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h80v104c0 4.4 3.6 8 8 8s8-3.6 8-8V144h48c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32M104 128H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"})
  );
}

export default LanRulerHorizontalThin;
