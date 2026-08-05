import React from 'react';

export function LanRulerCombined({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 64h96c8.8 0 16 7.2 16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16m144 80V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H192z"})
  );
}

export default LanRulerCombined;
