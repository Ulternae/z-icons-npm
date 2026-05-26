import React from 'react';

export const LanHandHoldingSkullRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 104c0 35.5-18.5 67.5-48 89.4V208c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-14.6c-29.5-22-48-53.9-48-89.4 0-66.3 64.5-120 144-120s144 53.7 144 120m-192 40a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0M187.4 336c-7.9 0-15.6 2.3-22.2 6.7L85.3 396c-3.9 2.6-8.6 4-13.3 4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40.7l73.8-49.2C153 293.1 170 288 187.4 288H320c35.3 0 64 28.7 64 64 0 5.5-.7 10.9-2 16h10.6l69.9-47.9c33.5-23 79.4-12.9 100.3 21.9 19.2 32 10.1 73.5-20.7 94.5L462 491.1c-19.9 13.6-43.5 20.9-67.6 20.9H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h370.4c14.5 0 28.6-4.4 40.6-12.5l80-54.6c9.9-6.7 12.8-20 6.6-30.2-6.7-11.1-21.3-14.3-32-7l-76 52.1c-4 2.7-8.7 4.2-13.6 4.2H256c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanHandHoldingSkullRegular;
