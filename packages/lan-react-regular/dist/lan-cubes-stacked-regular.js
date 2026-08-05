import React from 'react';

export function LanCubesStackedRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M232 48h48v48h-48zM216 0c-17.7 0-32 14.3-32 32v80c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm16 464v-48h48v48zm-48-64v80c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32v-80c0-17.7-14.3-32-32-32h-80c-17.7 0-32 14.3-32 32m232 64v-48h48v48zm-48-64v80c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32v-80c0-17.7-14.3-32-32-32h-80c-17.7 0-32 14.3-32 32m-40-120v-48h48v48zm-48-64v80c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32v-80c0-17.7-14.3-32-32-32h-80c-17.7 0-32 14.3-32 32m-120 6.1 33.9 33.9-33.9 33.9-33.9-33.9zm22.6-45.3c-12.5-12.5-32.8-12.5-45.3 0l-56.5 56.6c-12.5 12.5-12.5 32.8 0 45.3l56.6 56.6c12.5 12.5 32.8 12.5 45.3 0l56.6-56.6c12.5-12.5 12.5-32.8 0-45.3l-56.6-56.6zM48 464v-48h48v48zM0 400v80c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32v-80c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"})
  );
}

export default LanCubesStackedRegular;
