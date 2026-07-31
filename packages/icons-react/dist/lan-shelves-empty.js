import React from 'react';

export const LanShelvesEmpty = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 16c0-8.8-7.2-16-16-16S0 7.2 0 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h448v48c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v144H32zm0 176h448v224H32z"})
);

export default LanShelvesEmpty;
