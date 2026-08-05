import React from 'react';

export function LanDiamondHalfStrokeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M28.3 226.3C20.4 234.2 16 244.9 16 256s4.4 21.8 12.3 29.7l198 198c6 6 13.5 9.9 21.7 11.5V16.7c-8.1 1.6-15.7 5.6-21.7 11.5zM264 495.2c8.1-1.6 15.7-5.6 21.7-11.5l198-198c7.9-7.9 12.3-18.5 12.3-29.7s-4.4-21.8-12.3-29.7l-198-198c-6-6-13.5-9.9-21.7-11.5v478.5zM17 215 215 17c10.9-10.9 25.6-17 41-17s30.1 6.1 41 17l198 198c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41"})
  );
}

export default LanDiamondHalfStrokeThin;
