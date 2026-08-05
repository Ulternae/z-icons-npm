import React from 'react';

export function LanCircleMillThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m58.8-415.5c-4.1-1.5-8.7.6-10.3 4.7l-24.1 65.5c-9.7 5-17.8 12.6-23.5 21.9C247.3 171.5 229 160 208 160c-15.7 0-29.8 6.4-40 16.8V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8V216c0-22.1 17.9-40 40-40s40 17.9 40 40v38.6l-55.5 150.7c-1.5 4.1.6 8.7 4.7 10.3s8.7-.6 10.3-4.7L248 301v43.1c0 4.4 3.6 8 8 8s8-3.6 8-8v-86.6l29-78.8c4.7-1.7 9.7-2.6 15-2.6 24.3 0 44 19.7 44 44v124c0 4.4 3.6 8 8 8s8-3.6 8-8v-124c0-33.1-26.9-60-60-60-2.8 0-5.6.2-8.3.6l19.8-53.8c1.5-4.1-.6-8.7-4.7-10.3z"})
  );
}

export default LanCircleMillThin;
