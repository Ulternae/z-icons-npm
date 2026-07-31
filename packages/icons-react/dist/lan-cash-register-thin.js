import React from 'react';

export const LanCashRegisterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 16c-26.5 0-48 21.5-48 48s21.5 48 48 48h160c26.5 0 48-21.5 48-48s-21.5-48-48-48zm160 112h-72v32h240.5c31.8 0 58.9 23.4 63.4 54.9l23.5 164.5q.6 4.5.6 9v59.5c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64v-59.5c0-3 .2-6.1.6-9l23.6-164.6c4.5-31.5 31.5-54.9 63.3-54.9H168v-32H96c-35.3 0-64-28.7-64-64S60.7 0 96 0h160c35.3 0 64 28.7 64 64s-28.7 64-64 64m-88 48H87.5c-23.9 0-44.1 17.6-47.5 41.2L16.5 381.8c-.1.7-.2 1.5-.3 2.2h479.6c-.1-.7-.2-1.5-.3-2.2L472 217.2c-3.4-23.6-23.6-41.2-47.5-41.2zM16 400v48c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-48zm112-160a16 16 0 1 1-32 0 16 16 0 1 1 32 0m80 16a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32 64a16 16 0 1 1-32 0 16 16 0 1 1 32 0m128-64a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32 64a16 16 0 1 1-32 0 16 16 0 1 1 32 0m128-64a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32 64a16 16 0 1 1-32 0 16 16 0 1 1 32 0M96 56h160c4.4 0 8 3.6 8 8s-3.6 8-8 8H96c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanCashRegisterThin;
