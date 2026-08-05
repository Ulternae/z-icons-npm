import React from 'react';

export function LanMapSigns({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M240 16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h168.3c4.9 0 9.5 2.2 12.5 6l51.2 64c4.7 5.8 4.7 14.1 0 20l-51.2 64c-3 3.8-7.6 6-12.5 6H272v32h168c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40H272v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H71.7c-4.9 0-9.5-2.2-12.5-6L8 346c-4.7-5.8-4.7-14.1 0-20l51.2-64c3-3.8 7.6-6 12.5-6H240v-32H72c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40h168zm192.6 80H72c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h360.6l38.4-48zM79.4 288 41 336l38.4 48H440c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z"})
  );
}

export default LanMapSigns;
