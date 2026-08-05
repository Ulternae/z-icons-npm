import React from 'react';

export function LanRoadBridge({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h32v64H16c-8.8 0-16 7.2-16 16v112c0 7.3 5 13.7 12.1 15.5l3.4.9C44 279.5 64 305.1 64 334.5V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-29.8 20.4-54.9 48-62v-32.7c-45.4 7.6-80 47.1-80 94.7v96H96V334.5c0-41-26-77.1-64-90.5v-83.9h208v-32h-32v-64h32v-32H16zm160 32v64H80V64zm352 0c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16h-80v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-80c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h80v48c0 8.8 7.2 16 16 16s16-7.2 16-16V64zm0-32H336c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48m-96 168c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"})
  );
}

export default LanRoadBridge;
