import React from 'react';

export function LanInbox({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M65.8 91.3C68.1 75.6 81.6 64 97.5 64h317.1c15.9 0 29.3 11.6 31.7 27.3L477.6 304H376.7c-10.7 0-20.7 5.3-26.6 14.2L327.6 352H184.7l-22.5-33.8c-5.9-8.9-15.9-14.2-26.6-14.2H34.5zM32 336h103.4l22.5 33.8c5.9 8.9 15.9 14.2 26.6 14.2h142.9c10.7 0 20.7-5.3 26.6-14.2l22.5-33.8h103.4v80c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zM97.5 32c-31.8 0-58.7 23.3-63.4 54.7L.7 314.2c-.5 3.1-.7 6.2-.7 9.3V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-92.5c0-3.1-.2-6.2-.7-9.3L477.9 86.7C473.2 55.3 446.3 32 414.5 32z"})
  );
}

export default LanInbox;
