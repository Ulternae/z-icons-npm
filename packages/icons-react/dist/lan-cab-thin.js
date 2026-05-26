import React from 'react';

export const LanCabThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 16c-8.8 0-16 7.2-16 16v32h160V32c0-8.8-7.2-16-16-16zm-32 48V32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v32h3.2c39.5 0 74.2 26.4 84.8 64.4l22.6 81.2c28.3 6.6 49.5 32 49.5 62.3v176c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32v-32h-352v32c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32L0 272c0-30.3 21.1-55.8 49.5-62.3L72 128.4c10.6-38 45.3-64.4 84.8-64.4zm192 16H156.8c-32.3 0-60.7 21.6-69.4 52.7L66.5 208h379l-20.9-75.3c-8.7-31.2-37-52.7-69.4-52.7zm96 144H64c-26.5 0-48 21.5-48 48v128h480V272c0-26.5-21.5-48-48-48m48 192h-48v32c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16zM16 448c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-32H16zm80-128a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m336 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanCabThin;
