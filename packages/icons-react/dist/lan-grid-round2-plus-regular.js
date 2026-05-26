import React from 'react';

export const LanGridRound2PlusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0M96 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0m112-256a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m24 88v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanGridRound2PlusRegular;
