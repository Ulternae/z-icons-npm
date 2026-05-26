import React from 'react';

export const LanStarfighterTwinIonEngineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V298.7l42.4 14.1C129.3 373.1 187.6 416 256 416s126.7-42.9 149.6-103.2l42.4-14.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v149.3l-42.4-14.1C382.7 138.9 324.4 96 256 96s-126.7 42.9-149.6 103.2L64 213.3zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 152a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanStarfighterTwinIonEngineSolid;
