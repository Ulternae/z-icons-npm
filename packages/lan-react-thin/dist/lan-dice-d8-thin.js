import React from 'react';

export function LanDiceD8Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -17.475 576 549.35',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M265-7.5c12.6-13.3 33.8-13.3 46.4 0l242.8 256.2c12.2 12.8 11.6 33.1-1.3 45.3L310.2 523.2l-2.4 2c-11.5 8.9-27.7 8.9-39.2 0l-2.4-2L23.5 294c-12.1-11.4-13.3-29.9-3.4-42.8l2.2-2.5zM34.5 282.4l242.7 229.2 2.5 1.9c.2.1.4.2.5.2V326.6L34.1 281.8c.1.1.3.3.4.5zm261.7 44.3v187.1c1-.6 2.1-1.3 3-2.1l242.7-229.2.4-.5-246.1 44.8zm-17-325.3-2.6 2.1L33.9 259.8c-1.5 1.6-2.6 3.3-3.3 5.2l249.7 45.4V.7c-.4.2-.7.4-1.1.6zm17.1 309.1L545.9 265c-.4-.9-.8-1.8-1.3-2.7l-2-2.6L299.9 3.5c-1.1-1.2-2.3-2.1-3.6-2.8v309.7z"})
  );
}

export default LanDiceD8Thin;
