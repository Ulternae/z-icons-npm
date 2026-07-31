import React from 'react';

export const LanWallBrickSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 32v80h192V32zm-32 80V32H64C28.7 32 0 60.7 0 96v16zM0 144v96h208v-96zm0 224h96v-96H0zm0 32v16c0 35.3 28.7 64 64 64h144v-80zm240 0v80h144c35.3 0 64-28.7 64-64v-16zm208-32v-96h-96v96zm-128 0v-96H128v96zm128-224H240v96h208zm0-32V96c0-35.3-28.7-64-64-64h-32v80z"})
);

export default LanWallBrickSolid;
