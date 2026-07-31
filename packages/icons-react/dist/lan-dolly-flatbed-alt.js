import React from 'react';

export const LanDollyFlatbedAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 16C0 7.2 7.2 0 16 0h32c26.5 0 48 21.5 48 48v304c0 17.7 14.3 32 32 32h432c8.8 0 16 7.2 16 16s-7.2 16-16 16h-56.6c5.4 9.4 8.6 20.3 8.6 32 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32H247.5c5.4 9.4 8.6 20.3 8.6 32 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32h-8.6c-35.3 0-64-28.7-64-64L64 48c0-8.8-7.2-16-16-16H16C7.2 32 0 24.8 0 16m448 400a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-288 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0M304 96h-96c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16m48 34.7c5-1.8 10.4-2.7 16-2.7h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-12.3 0-23.5-4.6-32-12.2-8.5 7.6-19.7 12.2-32 12.2h-96c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm0 45.3v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16"})
);

export default LanDollyFlatbedAlt;
