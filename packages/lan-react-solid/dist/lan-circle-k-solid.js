import React from 'react';

export function LanCircleKSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m87.4-325.6-67.3 56.1 70.6 86.2c8.4 10.3 6.9 25.4-3.4 33.8s-25.4 6.9-33.8-3.4l-70.3-85.9-31.1 25.9v44.8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-176c0-13.3 10.7-24 24-24s24 10.7 24 24v68.8l104.6-87.2c10.2-8.5 25.3-7.1 33.8 3.1s7.1 25.3-3.1 33.8"})
  );
}

export default LanCircleKSolid;
