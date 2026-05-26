import React from 'react';

export const LanGridDividersRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 40c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 64 0 53.3 0 40m40 144h32v-32H40zM0 144c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm40 296h32v-32H40zM0 400c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm208 8v32h32v-32zm-8-40h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m8-184h32v-32h-32zm-40-40c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32zm208 264v32h32v-32zm-8-40h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m8-184h32v-32h-32zm-40-40c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32zM24 272h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanGridDividersRegular;
