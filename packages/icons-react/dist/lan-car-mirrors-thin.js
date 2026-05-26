import React from 'react';

export const LanCarMirrorsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m131.3 93.3-39.5 98.8c1.4-.1 2.8-.1 4.2-.1h384c1.4 0 2.8 0 4.2.1l-39.5-98.8C433.8 65.9 407.3 48 377.8 48H198.2c-29.4 0-55.9 17.9-66.9 45.3M93.8 144l22.7-56.7C129.8 53.9 162.2 32 198.2 32h179.7c36 0 68.3 21.9 81.7 55.3l22.7 56.7h61.8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-21.7c13.3 11.7 21.7 28.9 21.7 48v192c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32v-48h-352v48c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32V256c0-19.1 8.4-36.3 21.7-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-6.4 16H32c-8.8 0-16 7.2-16 16s7.2 16 16 16h42.6zM544 192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-55.4l12.8 32zM96 208c-26.5 0-48 21.5-48 48v128h480V256c0-26.5-21.5-48-48-48zm384 192v48c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-48zm-432 0v48c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-48zm96-112a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m352 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanCarMirrorsThin;
