import React from 'react';

export function LanLightbulbExclamationRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 0c106 0 192 86 192 192 0 51.2-20 97.7-52.7 132.1-23.6 24.9-43.3 55.3-43.3 89.6V432c0 44.2-35.8 80-80 80h-32c-44.2 0-80-35.8-80-80v-18.3c0-34.3-19.7-64.7-43.3-89.6C20 289.7 0 243.2 0 192 0 86 86 0 192 0m0 48c-79.5 0-144 64.5-144 144 0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9h102.4c8.4-39 32-70.5 53.3-92.9C321 265.2 336 230.4 336 192c0-79.5-64.5-144-144-144m0 264a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-208c18.6 0 33 16.1 31 34.6l-7.1 64.1c-1.4 12.1-11.7 21.3-23.9 21.3s-22.5-9.2-23.8-21.3l-7.2-64.1c-2-18.5 12.4-34.6 31-34.6"})
  );
}

export default LanLightbulbExclamationRegular;
