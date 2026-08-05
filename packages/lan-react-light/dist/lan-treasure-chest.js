import React from 'react';

export function LanTreasureChest({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 64v192h-80v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48v32h-80V64zm32 5.5c37.3 13.2 64 48.7 64 90.5v96h-64zM480 288v128c0 17.7-14.3 32-32 32h-32V288zm-96 160H128V288h80v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32h80zm-288 0H64c-17.7 0-32-14.3-32-32V288h64zM32 256v-96c0-41.8 26.7-77.4 64-90.5V256zm96-224C57.3 32 0 89.3 0 160v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-70.7-57.3-128-128-128zm144 288c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"})
  );
}

export default LanTreasureChest;
