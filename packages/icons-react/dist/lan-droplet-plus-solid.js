import React from 'react';

export const LanDropletPlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192.2-16c10 0 19.3 4.5 25.2 12.5C253.8 45.9 384 228.8 384 320c0 106-86 192-192 192S0 426 0 320C0 228.8 130.2 45.9 166.6-3.5c5.9-8 15.2-12.5 25.2-12.5zm-.2 240c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48l.1 2.5c1.2 12.1 11.5 21.5 23.9 21.5s22.6-9.4 23.9-21.5l.1-2.5v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24"})
);

export default LanDropletPlusSolid;
