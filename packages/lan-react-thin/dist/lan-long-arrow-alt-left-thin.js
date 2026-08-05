import React from 'react';

export function LanLongArrowAltLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M20.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l128 128c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8v-72c0-4.4 3.6-8 8-8h344c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H184c-4.4 0-8-3.6-8-8v-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5zM9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v64h336c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48h-336v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"})
  );
}

export default LanLongArrowAltLeftThin;
