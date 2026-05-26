import React from 'react';

export const LanVentDamperRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM128 64c-35.3 0-64 28.7-64 64v32H32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h32v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32h-32v-32c0-35.3-28.7-64-64-64zm56 80c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 88c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 88c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanVentDamperRegular;
