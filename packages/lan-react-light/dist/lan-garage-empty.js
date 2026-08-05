import React from 'react';

export function LanGarageEmpty({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 192h32v304c0 8.8 7.2 16 16 16s16-7.2 16-16V155.8c0-26.4-16.2-50.1-40.8-59.6L305.4 6.8c-11.2-4.4-23.6-4.4-34.8 0L40.8 96.1C16.2 105.7 0 129.4 0 155.8V496c0 8.8 7.2 16 16 16s16-7.2 16-16V192zM32 160v-4.2c0-13.2 8.1-25 20.4-29.8l229.8-89.4c3.7-1.5 7.9-1.5 11.6 0L523.6 126c12.3 4.8 20.4 16.6 20.4 29.8v4.2z"})
  );
}

export default LanGarageEmpty;
