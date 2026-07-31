import React from 'react';

export const LanObjectSubtract = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32h16V0H64C28.7 0 0 28.7 0 64v16h32V64c0-17.7 14.3-32 32-32m160 0V0h-96v32zM32 128H0v96h32zm0 144H0v16c0 35.3 28.7 64 64 64h16v-32H64c-17.7 0-32-14.3-32-32zm96 80h96v-32h-96zm32 48v48c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-48v32h48c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-48zm192-208v-64h-32v96h32zm-80 128v32h16c35.3 0 64-28.7 64-64v-16h-32v16c0 17.7-14.3 32-32 32zm80-240V64c0-35.3-28.7-64-64-64h-16v32h16c17.7 0 32 14.3 32 32v16z"})
);

export default LanObjectSubtract;
