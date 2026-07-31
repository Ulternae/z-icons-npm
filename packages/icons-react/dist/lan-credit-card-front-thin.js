import React from 'react';

export const LanCreditCardFrontThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm16 296c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8H88c-4.4 0-8 3.6-8 8m128 0c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m128 0c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8M120 176h80c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m-24 8v48c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24"})
);

export default LanCreditCardFrontThin;
