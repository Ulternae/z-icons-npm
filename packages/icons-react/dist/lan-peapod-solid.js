import React from 'react';

export const LanPeapodSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 0h-48C186.2 0 0 186.2 0 416v48c0 26.5 21.5 48 48 48h48c229.8 0 416-186.2 416-416V48c0-26.5-21.5-48-48-48M256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112M88 368a56 56 0 1 1 112 0 56 56 0 1 1-112 0M368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanPeapodSolid;
