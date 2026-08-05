import React from 'react';

export function LanSnowmobileBlank({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M318.3 72.8c-4-7.9-13.6-11.1-21.5-7.2s-11.1 13.6-7.2 21.5l27.4 54.7-68.5 82.2H80c-26.5 0-48 21.5-48 48v64c-19.4 14.6-32 37.8-32 64 0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80 0-18-6-34.6-16-48h54.1l48 96H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h104c22.1 0 40-17.9 40-40v-8c0-8.8-7.2-16-16-16s-16 7.2-16 16v8c0 4.4-3.6 8-8 8h-30.1l-48-96H408c57.4 0 104-46.6 104-104v-8c0-5.6-2.9-10.8-7.8-13.7l-156-93.6-29.9-59.8zM200 320H80c-5.5 0-10.8.6-16 1.6V272c0-8.8 7.2-16 16-16h176c4.7 0 9.3-2.1 12.3-5.8l71.2-85.5L480 249c-.6 39.3-32.6 70.9-72 70.9H200zM80 352h160c26.5 0 48 21.5 48 48s-21.5 48-48 48H80c-26.5 0-48-21.5-48-48s21.5-48 48-48"})
  );
}

export default LanSnowmobileBlank;
