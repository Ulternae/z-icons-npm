import React from 'react';

export const CoreStoreSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 224h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32zm-64 0v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32zM64 256v-32h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32m160 96c24.6 0 47-9.2 64-24.4 17 15.2 39.4 24.4 64 24.4s47-9.2 64-24.4c17 15.2 39.4 24.4 64 24.4v96H96v-96c24.6 0 47-9.2 64-24.4 17 15.2 39.4 24.4 64 24.4m320-24.4c19.6-17.6 32-43.1 32-71.6v-96L480 0H96L0 160v96c0 28.4 12.4 54 32 71.6V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64zM448 224h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32z"})
);

export default CoreStoreSolid;
