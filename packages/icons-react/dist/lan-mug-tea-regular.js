import React from 'react';

export const LanMugTeaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 112h88v20.4c0 7.5-2.6 14.7-7.4 20.5l-25.2 30.2c-4.8 5.8-7.4 13-7.4 20.5V256c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-52.4c0-7.5-2.6-14.7-7.4-20.5l-25.2-30.2c-4.8-5.8-7.4-13-7.4-20.5V112h152v240c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48zM96 64c-17.7 0-32 14.3-32 32v256c0 53 43 96 96 96h192c53 0 96-43 96-96v-48h8c66.3 0 120-53.7 120-120S522.3 64 456 64zm360 192h-8V112h8c39.8 0 72 32.2 72 72s-32.2 72-72 72"})
);

export default LanMugTeaRegular;
