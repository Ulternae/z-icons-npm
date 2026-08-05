import React from 'react';

export function LanTally5Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 32c17.7 0 32 14.3 32 32v199l64-16V64c0-17.7 14.3-32 32-32s32 14.3 32 32v167l64-16V64c0-17.7 14.3-32 32-32s32 14.3 32 32v135l64-16V64c0-17.7 14.3-32 32-32s32 14.3 32 32v103l24.2-6.1c17.1-4.3 34.5 6.1 38.8 23.3s-6.1 34.5-23.3 38.8L512 233v215c0 17.7-14.3 32-32 32s-32-14.3-32-32V249l-64 16v183c0 17.7-14.3 32-32 32s-32-14.3-32-32V281l-64 16v151c0 17.7-14.3 32-32 32s-32-14.3-32-32V313l-64 16v119c0 17.7-14.3 32-32 32s-32-14.3-32-32V345l-24.2 6.1c-17.2 4.2-34.5-6.2-38.8-23.3s6.1-34.6 23.2-38.8L64 279V64c0-17.7 14.3-32 32-32"})
  );
}

export default LanTally5Solid;
