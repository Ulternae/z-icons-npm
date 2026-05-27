import React from 'react';

export const NeoFaceMehSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 0C197 0 126.4 26.5 76.5 76.5S0 197 0 280s26.5 153.6 76.5 203.5S197 560 280 560s153.6-26.5 203.5-76.5S560 363 560 280s-26.5-153.6-76.5-203.5S363 0 280 0M140 196c0-15.5 12.5-28 28-28h28c15.5 0 28 12.5 28 28s-12.5 28-28 28v28c0 15.5-12.5 28-28 28s-28-12.5-28-28zm140 0c0-15.5 12.5-28 28-28h28c15.5 0 28 12.5 28 28s-12.5 28-28 28v28c0 15.5-12.5 28-28 28s-28-12.5-28-28zm-56 140h140c15.5 0 28 12.5 28 28s-12.5 28-28 28H224c-15.5 0-28-12.5-28-28s12.5-28 28-28"})
);

export default NeoFaceMehSolid;
