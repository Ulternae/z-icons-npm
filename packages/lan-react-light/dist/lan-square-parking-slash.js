import React from 'react';

export function LanSquareParkingSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.85 576 575.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-68.2-68.2c5.7-9.5 8.9-20.7 8.9-32.6V96c0-35.3-28.7-64-64-64H128c-11.9 0-23 3.2-32.6 8.9zm92.3 92.3c2.7-.7 5.5-1.1 8.4-1.1h320c17.7 0 32 14.3 32 32v320c0 2.9-.4 5.7-1.1 8.4L358 303.4c25.4-17.3 42-46.4 42-79.4 0-53-43-96-96-96h-88c-9.1 0-16.9 5-21 12.4zm215.1 215.1L224 169.5V160h80c35.3 0 64 28.7 64 64 0 24.2-13.5 45.3-33.3 56.2M64 416c0 35.3 28.7 64 64 64h293.5l-32-32H128c-17.7 0-32-14.3-32-32V154.5l-32-32zm128-112v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h37.5l-32-32H224v-5.5l-32-32z"})
  );
}

export default LanSquareParkingSlash;
