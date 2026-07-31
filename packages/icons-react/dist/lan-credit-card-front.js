import React from 'react';

export const LanCreditCardFront = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm16 272c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16m128 0c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m128 0c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16M120 144c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40zm-8 40c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8z"})
);

export default LanCreditCardFront;
