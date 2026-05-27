import React from 'react';

export const NeoSignalBarsWeakSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 364c0-30.9 25.1-56 56-56s56 25.1 56 56v84c0 30.9-25.1 56-56 56S0 478.9 0 448z"})
);

export default NeoSignalBarsWeakSolid;
