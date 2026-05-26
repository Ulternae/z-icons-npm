import React from 'react';

export const LanJar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64-32h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 112c-17.7 0-32 14.3-32 32v80h256v-80c0-17.7-14.3-32-32-32zM32 224v128h256V224zm0 160v64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-64zM0 112c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v336c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanJar;
