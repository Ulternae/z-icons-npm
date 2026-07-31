import React from 'react';

export const LanGridDividers = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 64 0 56.8 0 48m32 96v48h48v-48zm-32 0c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm32 256v48h48v-48zm-32 0c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm200 0v48h48v-48zm-32 0c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32zm248 0h-48v48h48zm-48-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32M248 144h-48v48h48zm-48-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m168 32v48h48v-48zm-32 0c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32zM16 288h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanGridDividers;
