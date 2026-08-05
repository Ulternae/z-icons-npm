import React from 'react';

export function LanMoneyBillTransfer({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -7.95 576 527.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M4.7 91.3c-6.2-6.2-6.2-16.4 0-22.6l72-72c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 64H480c35.3 0 64 28.7 64 64v197.5l-10.7-10.7c-6.3-6.3-13.5-11-21.3-14.1V192c-53 0-96-43-96-96H54.6l44.7 44.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zM32 384V186.5l10.7 10.7c6.3 6.3 13.5 11 21.3 14.1V320c53 0 96 43 96 96h361.4l-44.7-44.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l72 72c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l44.7-44.7H96c-35.3 0-64-28.7-64-64m32-32v32c0 17.7 14.3 32 32 32h32c0-35.3-28.7-64-64-64m448-192v-32c0-17.7-14.3-32-32-32h-32c0 35.3 28.7 64 64 64m-160 96a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
  );
}

export default LanMoneyBillTransfer;
