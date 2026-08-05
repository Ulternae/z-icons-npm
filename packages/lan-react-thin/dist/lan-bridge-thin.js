import React from 'react';

export function LanBridgeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v96H8c-4.4 0-8 3.6-8 8v104c0 3.3 2.1 6.3 5.2 7.5l12.1 4.5C45.4 278.6 64 305.4 64 335.4V456c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-88c0-44.2 35.8-80 80-80s80 35.8 80 80v88c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24V335.4c0-30 18.6-56.9 46.7-67.4l12.1-4.5c3.1-1.2 5.2-4.2 5.2-7.5V152c0-4.4-3.6-8-8-8h-48V48h48c4.4 0 8-3.6 8-8s-3.6-8-8-8zm432 16v96H328V48zm8 112h48v90.5l-6.9 2.6C454.8 266 432 298.8 432 335.5V456c0 4.4-3.6 8-8 8h-64c-4.4 0-8-3.6-8-8v-88c0-53-43-96-96-96s-96 43-96 96v88c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V335.4c0-36.7-22.8-69.5-57.1-82.4l-6.9-2.6v-90.5h432zM312 48v96H200V48zm-128 0v96H72V48z"})
  );
}

export default LanBridgeThin;
