import React from 'react';

export function CoreStore({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m443.8 64 57.6 96H74.7l57.6-96zM96 0 0 160v96c0 28.4 12.4 54 32 71.6V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V327.6c19.6-17.6 32-43.1 32-71.6v-96L480 0zm384 352v96H96v-96c24.6 0 47-9.2 64-24.4 17 15.2 39.4 24.4 64 24.4s47-9.2 64-24.4c17 15.2 39.4 24.4 64 24.4s47-9.2 64-24.4c17 15.2 39.4 24.4 64 24.4M64 256v-32h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32m128 0v-32h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32m128 0v-32h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32m128-32h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32z"})
  );
}

export default CoreStore;
