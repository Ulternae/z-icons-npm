import React from 'react';

export function LanInboxArrowDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M97.5 64c-15.9 0-29.4 11.6-31.7 27.3L34.5 304h100.9c10.7 0 20.7 5.3 26.6 14.2l22.5 33.8h142.9l22.5-33.8c5.9-8.9 15.9-14.2 26.6-14.2h100.9L446.1 91.3C443.9 75.6 430.4 64 414.5 64zM32 416c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-80H376.6l-22.5 33.8c-5.9 8.9-15.9 14.2-26.6 14.2H184.6c-10.7 0-20.7-5.3-26.6-14.2L135.4 336H32zm2.1-329.3C38.8 55.3 65.7 32 97.5 32h317.1c31.7 0 58.7 23.3 63.3 54.7l33.5 227.5c.5 3.1.7 6.2.7 9.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-92.5c0-3.1.2-6.2.7-9.3zm305.2 140.6-72 72c-6.2 6.2-16.4 6.2-22.6 0l-72-72c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l44.7 44.7V128c0-8.8 7.2-16 16-16s16 7.2 16 16v121.4l44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"})
  );
}

export default LanInboxArrowDown;
