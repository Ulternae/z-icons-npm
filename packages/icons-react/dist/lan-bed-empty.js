import React from 'react';

export const LanBedEmpty = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32c8.8 0 16 7.2 16 16v112h432c61.9 0 112 50.1 112 112v192c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16m16 160v160h512v-80c0-44.2-35.8-80-80-80z"})
);

export default LanBedEmpty;
