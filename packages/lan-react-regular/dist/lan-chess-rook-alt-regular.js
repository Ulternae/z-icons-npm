import React from 'react';

export function LanChessRookAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M282.5 32.1C294.6 33.4 304 43.6 304 56v120c0 13.6-3.9 26.9-11.1 38.4l-3.3 4.8-22.7 30.2c3.1 4.1 5.1 9.1 5.1 14.6 0 10.4-6.7 19.2-16 22.5V368l57.8 86.7c4 6.1 6.2 13.2 6.2 20.4l-.2 3.8c-1.9 18.6-17.6 33.1-36.7 33.1H36.8l-3.8-.2C14.4 509.9-.1 494.2-.1 475.1c0-7.3 2.2-14.4 6.2-20.4L64 368v-81.5c-9.3-3.3-16-12.1-16-22.5 0-5.5 1.9-10.6 5.1-14.6l-22.7-30.2C21.1 206.7 16 191.6 16 176V56l.1-2.5C17.4 41.4 27.6 32 40 32h240zM57.7 464h204.6l-32-48H89.7zM112 288v80h96v-80zM64 176c0 5.2 1.7 10.3 4.8 14.4L106 240h108l37.2-49.6 2.1-3.3c1.8-3.4 2.7-7.2 2.7-11.1V80h-32v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80h-32v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80H64z"})
  );
}

export default LanChessRookAltRegular;
