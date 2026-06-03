import React from 'react';

export const LanBraille = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0 64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160m48 112c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48m32 0c0-44.2-35.8-80-80-80S0 403.8 0 448s35.8 80 80 80 80-35.8 80-80m144 48c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48m0 32c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80m-48-272a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M304 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160M80 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 176a16 16 0 1 0-32 0 16 16 0 1 0 32 0M304 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanBraille;
