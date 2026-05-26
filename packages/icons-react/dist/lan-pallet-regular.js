import React from 'react';

export const LanPalletRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v96H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-96h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm432 48v96H312v-96zm-192 96H120v-96h144z"})
);

export default LanPalletRegular;
