import React from 'react';

export function LanWaveSineSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24.5 153c20.1-53.5 71.2-89 128.4-89 56.1 0 106.5 34.1 127.3 86.2L355.3 338c11.1 27.8 38 46 67.9 46 30.5 0 57.8-18.9 68.5-47.4l22.3-59.8c6.2-16.5 24.6-24.9 41.2-18.7s24.9 24.6 18.7 41.2L551.5 359c-20.1 53.5-71.2 89-128.4 89-56.1 0-106.5-34.1-127.3-86.2L220.7 174c-11.1-27.8-38-46-67.9-46-30.5 0-57.8 18.9-68.5 47.4L62 235.2c-6.2 16.5-24.7 24.9-41.2 18.7s-25-24.6-18.8-41.1z"})
  );
}

export default LanWaveSineSolid;
