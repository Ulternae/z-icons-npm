import React from 'react';

export const LanObjectsAlignTopRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24S501.3 0 488 0zm152 176v288h-64V176zm-64-48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zm288 48v160h-64V176zm-64-48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"})
);

export default LanObjectsAlignTopRegular;
