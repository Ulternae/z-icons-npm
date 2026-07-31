import React from 'react';

export const LanDistributeSpacingVerticalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24C10.7 32 0 42.7 0 56m368 152v96H144v-96zm-224-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zM24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanDistributeSpacingVerticalRegular;
