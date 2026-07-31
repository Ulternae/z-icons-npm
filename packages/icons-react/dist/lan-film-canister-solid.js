import React from 'react';

export const LanFilmCanisterSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32v352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V96C14.3 96 0 81.7 0 64s14.3-32 32-32zm448 80c17.7 0 32 14.3 32 32v144c0 17.7-14.3 32-32 32s-32 14.3-32 32v48c0 17.7-14.3 32-32 32H368v-48h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32v-96h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32v-48zM96 136v272c0 13.3 10.7 24 24 24s24-10.7 24-24V136c0-13.3-10.7-24-24-24s-24 10.7-24 24m384 24c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"})
);

export default LanFilmCanisterSolid;
