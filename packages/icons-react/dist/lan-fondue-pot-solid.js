import React from 'react';

export const LanFonduePotSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m319 39.8-24 96c-2.9 11.5-11.6 20-22.2 23l-8.3 33.2h-33l10.2-41c-7.9-7.7-11.7-19.3-8.8-30.8l24-96C261.2 7.1 278.6-3.3 295.8 1s27.5 21.6 23.2 38.8M381.9 160l-21.4 32.1H322l33.2-49.8c-4.9-9.9-4.5-22.1 2.1-31.9l64-96c9.9-14.9 29.7-18.8 44.5-9s18.7 29.7 8.9 44.4l-64 96c-6.6 9.9-17.7 14.9-28.7 14.2zM32 224h32v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16 7.2 16 16 16 16-7.2 16-16v-48h320c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 52.3-25.1 98.8-64 128v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-3.2c-10.3 2.1-21 3.2-32 3.2H160c-11 0-21.7-1.1-32-3.2v3.2c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32C25.1 418.8 0 372.3 0 320v-64c0-17.7 14.3-32 32-32"})
);

export default LanFonduePotSolid;
