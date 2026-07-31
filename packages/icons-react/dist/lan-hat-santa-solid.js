import React from 'react';

export const LanHatSantaSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M519.9 22.2C519 9.8 508.7 0 496 0s-23 9.8-23.9 22.2c-9.4-8.1-23.7-7.7-32.6 1.2s-9.4 23.2-1.2 32.6C425.8 57 416 67.3 416 80s9.8 23 22.2 23.9c-8.1 9.4-7.7 23.7 1.2 32.6s23.2 9.4 32.6 1.2c1 12.5 11.3 22.3 24 22.3s23-9.8 23.9-22.2c9.4 8.1 23.7 7.7 32.6-1.2s9.4-23.2 1.2-32.6c12.5-1 22.3-11.3 22.3-24s-9.8-23-22.2-23.9c8.1-9.4 7.7-23.7-1.2-32.6s-23.2-9.4-32.6-1.2zM496 480c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H80c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32zM416 0H281.6c-25.3 0-48.2 14.9-58.5 38L90.7 336h393.7l-106-233.1c-6.5-14.4-5.6-31 2.5-44.6z"})
);

export default LanHatSantaSolid;
