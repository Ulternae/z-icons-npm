import React from 'react';

export const LanArrowLeftFromArcSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 256c0-106-86-192-192-192-17.7 0-32-14.3-32-32s14.3-32 32-32c141.4 0 256 114.6 256 256S397.4 512 256 512c-17.7 0-32-14.3-32-32s14.3-32 32-32c106 0 192-86 192-192M121.4 121.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 224H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H109.3l57.4 57.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-112-112c-12.5-12.5-12.5-32.8 0-45.3z"})
);

export default LanArrowLeftFromArcSolid;
