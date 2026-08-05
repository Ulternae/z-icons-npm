import React from 'react';

export function LanHouseTurret({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 32h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V32h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16V32h48c8.8 0 16 7.2 16 16v400c0 17.7-14.3 32-32 32h-84.6c-3.4 11.6-8.7 22.3-15.4 32h100c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48v21l32 28V48c0-8.8 7.2-16 16-16m-85.5 68c-6-5.3-15-5.3-21.1 0L5.5 268c-6.7 5.8-7.3 15.9-1.5 22.6s15.9 7.3 22.6 1.5l5.4-4.8V448c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V287.3l5.5 4.8c6.6 5.8 16.8 5.1 22.6-1.5s5.1-16.8-1.5-22.6l-192-168zM352 259.3V448c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V259.3l144-126zM152 296v48c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32m32 0h48v48h-48z"})
  );
}

export default LanHouseTurret;
