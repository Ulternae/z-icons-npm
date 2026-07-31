import React from 'react';

export const LanTentCircusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M242.4 4.2c8.2-5.7 19-5.7 27.3 0l225 155.3c10.8 7.5 17.3 19.8 17.3 32.9V224c0 35.1-22.6 65-54.1 75.7l32.9 145.7c6.8 30-16 58.6-46.8 58.6h-43.5l-.8-4.4-38.6-208.7c-13 8.3-28.4 13-45 13h-1.4l37 200H160.5l37-200H196c-16.5 0-32-4.8-45-13l-38.6 208.7-.8 4.4H68.1c-30.8 0-53.6-28.6-46.8-58.6l32.8-145.7C22.6 289 0 259.1 0 224v-31.6c0-13.2 6.5-25.5 17.3-32.9zM352 220v-12h-72v12c0 19.9 16.1 36 36 36s36-16.1 36-36m-120 0v-12h-72v12c0 19.9 16.1 36 36 36s36-16.1 36-36m0-60h24V53.2L101.1 160zM48 208v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16zm416 0h-64v16c0 17.7 14.3 32 32 32s32-14.3 32-32z"})
);

export default LanTentCircusSolid;
