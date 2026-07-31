import React from 'react';

export const LanMugTeaSaucerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M168 32v52.4c0 7.5-2.6 14.7-7.4 20.5l-25.2 30.2c-4.8 5.8-7.4 13-7.4 20.5V224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-68.4c0-7.5-2.6-14.7-7.4-20.5l-25.2-30.2c-4.8-5.8-7.4-13-7.4-20.5V32h232c70.7 0 128 57.3 128 128s-57.3 128-128 128c0 53-43 96-96 96H160c-53 0-96-43-96-96V64c0-17.7 14.3-32 32-32zm280 192c35.3 0 64-28.7 64-64s-28.7-64-64-64zM32 480c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32"})
);

export default LanMugTeaSaucerSolid;
