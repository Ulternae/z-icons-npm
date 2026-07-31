import React from 'react';

export const LanPeapodRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 48C212.8 48 48 212.8 48 416v48h48c203.2 0 368-164.8 368-368V48zm0-48h48c26.5 0 48 21.5 48 48v48c0 229.8-186.2 416-416 416H48c-26.5 0-48-21.5-48-48v-48C0 186.2 186.2 0 416 0M256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112M88 368a56 56 0 1 1 112 0 56 56 0 1 1-112 0M368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanPeapodRegular;
