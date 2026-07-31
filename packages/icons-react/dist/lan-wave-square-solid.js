import React from 'react';

export const LanWaveSquareSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v288h96V256c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v128c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V128h-96v128c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32z"})
);

export default LanWaveSquareSolid;
