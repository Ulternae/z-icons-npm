import React from 'react';

export const LanFaceShakingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -53.911 576 619.822',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M217.9-6.7C150.6 11.3 90.3 55 52.7 120c-6.6 11.5-21.3 15.4-32.8 8.8S4.6 107.5 11.2 96C55.4 19.5 126.4-31.9 205.5-53.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4M565.5 416c-44.2 76.5-115.2 127.9-194.3 149.1-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4C426.1 500.7 486.4 457 524 392c6.6-11.5 21.3-15.4 32.8-8.8s15.4 21.3 8.8 32.8zM93.7 144a224.3 224.3 0 1 1 388.6 224A224.3 224.3 0 1 1 93.7 144m177.1 46.4a32 32 0 1 0-55.4-32 32 32 0 1 0 55.4 32m94.9 91.7a32 32 0 1 0 32-55.4 32 32 0 1 0-32 55.4m-69.9 89a64 64 0 1 0-110.9-64 64 64 0 1 0 110.9 64"})
);

export default LanFaceShakingSolid;
