import React from 'react';

export const LanBandAidSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 416h48c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-48zM416 96H160v320h256zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h48V96zm152 112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M216 304a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanBandAidSolid;
