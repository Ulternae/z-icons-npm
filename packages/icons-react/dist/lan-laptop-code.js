import React from 'react';

export const LanLaptopCode = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 64h384c17.7 0 32 14.3 32 32v224h32V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v224h32V96c0-17.7 14.3-32 32-32M32.5 400h575.1c-3.5 27.1-26.6 48-54.7 48H87.1c-28 0-51.2-20.9-54.7-48zm-7.6-32C11.1 368 0 379.1 0 392.9 0 441 39 480 87.1 480h465.8c48.1 0 87.1-39 87.1-87.1 0-13.7-11.1-24.9-24.9-24.9zm258.4-212.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L230.6 208zm96-22.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l52.7 52.7-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c6.2-6.2 6.2-16.4 0-22.6z"})
);

export default LanLaptopCode;
