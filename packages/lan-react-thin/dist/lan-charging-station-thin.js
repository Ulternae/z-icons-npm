import React from 'react';

export function LanChargingStationThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 16c26.5 0 48 21.5 48 48v432H80V64c0-26.5 21.5-48 48-48zM64 64v432h-8c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8V288c30.9 0 56 25.1 56 56v56c0 26.5 21.5 48 48 48s48-21.5 48-48V255.6c40.4-4 72-38.1 72-79.6v-32c0-8.8-7.2-16-16-16h-24V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-48V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-24c-8.8 0-16 7.2-16 16v32c0 41.5 31.6 75.6 72 79.6V400c0 17.7-14.3 32-32 32s-32-14.3-32-32v-56c0-39.8-32.2-72-72-72V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64m400 80h96v32c0 35.3-28.7 64-64 64s-64-28.7-64-64v-32zM240.3 98.6c2.7-2.7 2.7-7 0-9.7s-7-2.7-9.7 0l-82.3 82.3c-2 2-2.5 4.9-1.5 7.5s3.6 4.2 6.3 4.2h93.2l-70.6 70.6c-2.7 2.7-2.7 7 0 9.7s7 2.7 9.7 0l82.3-82.3c2-2 2.5-4.9 1.5-7.5s-3.6-4.2-6.3-4.2h-93.2z"})
  );
}

export default LanChargingStationThin;
