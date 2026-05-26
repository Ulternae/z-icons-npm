import React from 'react';

export const LanPhoneOfficeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H160V176c0-44.2-35.8-80-80-80zm248 224a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48m112-120a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48m112-120a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48M256 96c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zM32 144h48c17.7 0 32 14.3 32 32v272c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32"})
);

export default LanPhoneOfficeSolid;
