import React from 'react';

export const LanObjectSubtractThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 16h16V0H64C28.7 0 0 28.7 0 64v16h16V64c0-26.5 21.5-48 48-48m160 0V0h-96v16zM16 128H0v96h16zm0 144H0v16c0 35.3 28.7 64 64 64h16v-16H64c-26.5 0-48-21.5-48-48zm112 80h96v-16h-96zm32 48v48c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-48v16h48c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48v-48zm192-224v-48h-16v96h16zm-80 160v16h16c35.3 0 64-28.7 64-64v-16h-16v16c0 26.5-21.5 48-48 48zm80-256V64c0-35.3-28.7-64-64-64h-16v16h16c26.5 0 48 21.5 48 48v16z"})
);

export default LanObjectSubtractThin;
