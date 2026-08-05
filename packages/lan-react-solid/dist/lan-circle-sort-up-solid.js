import React from 'react';

export function LanCircleSortUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m273-153c-9.4-9.4-24.6-9.4-33.9 0l-80 80c-6.9 6.9-8.9 17.2-5.2 26.2S166.3 224 176 224h160c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2zm80 226c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-63 63-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80z"})
  );
}

export default LanCircleSortUpSolid;
