import React from 'react';

export const LanBarnSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m1 252.4 40.6-149c4-14.7 14.8-26.7 29.1-32.2L238.8 6.6c11.1-4.3 23.4-4.3 34.5 0l168 64.7c14.3 5.5 25.1 17.4 29.1 32.2L511 252.4c.7 2.4 1 4.9 1 7.4 0 15.6-12.6 28.2-28.2 28.2H480v160c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V288h-3.8C12.6 288 0 275.4 0 259.8c0-2.5.3-5 1-7.4M208 136v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24m-48 296c0 17.7 14.3 32 32 32h124.5L160 320.6zm35.5-144L352 431.4V320c0-17.7-14.3-32-32-32z"})
);

export default LanBarnSolid;
