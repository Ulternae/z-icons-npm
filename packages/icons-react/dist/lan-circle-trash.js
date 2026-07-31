import React from 'react';

export const LanCircleTrash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40-384c-6.1 0-11.6 3.4-14.3 8.8L190.1 160H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16h-46.1l-11.6-23.2c-2.7-5.4-8.2-8.8-14.3-8.8zm-58 112 14.5 116c2 16 15.6 28 31.8 28h103.5c16.1 0 29.8-12 31.8-28l14.5-116h-32.2l-14 112H204.4l-14-112h-32.2z"})
);

export default LanCircleTrash;
