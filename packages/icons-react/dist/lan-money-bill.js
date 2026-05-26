import React from 'react';

export const LanMoneyBill = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v32c35.3 0 64-28.7 64-64zm-32 96v128c53 0 96 43 96 96h256c0-53 43-96 96-96V192c-53 0-96-43-96-96H128c0 53-43 96-96 96m384 224h32c17.7 0 32-14.3 32-32v-32c-35.3 0-64 28.7-64 64M32 352v32c0 17.7 14.3 32 32 32h32c0-35.3-28.7-64-64-64m448-192v-32c0-17.7-14.3-32-32-32h-32c0 35.3 28.7 64 64 64M0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm320 128a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
);

export default LanMoneyBill;
