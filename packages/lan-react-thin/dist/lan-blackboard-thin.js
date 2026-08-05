import React from 'react';

export function LanBlackboardThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 80h416c17.7 0 32 14.3 32 32v320h-80v-40c0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40v40H48V112c0-17.7 14.3-32 32-32m352 352H304v-40c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24zM32 112v320H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V112c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48"})
  );
}

export default LanBlackboardThin;
