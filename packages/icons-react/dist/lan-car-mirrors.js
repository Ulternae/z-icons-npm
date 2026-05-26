import React from 'react';

export const LanCarMirrors = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M201.7 64c-27.5 0-52 17.6-60.7 43.8L112.9 192h350.3l-28.1-84.2C426.3 81.6 401.9 64 374.3 64zM40.6 224H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h63.1l31.5-94.4C123.7 58.4 160.3 32 201.7 32h172.7c41.3 0 78 26.4 91.1 65.6l31.4 94.4H560c8.8 0 16 7.2 16 16s-7.2 16-16 16h-24.6c5.4 9.4 8.6 20.3 8.6 32v208c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-11.7 3.1-22.6 8.6-32m55.4 0c-17.7 0-32 14.3-32 32v128h448V256c0-17.7-14.3-32-32-32zm16 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanCarMirrors;
