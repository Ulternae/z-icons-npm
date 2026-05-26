import React from 'react';

export const LanPalletAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 48v160H80V48zM80 0C53.5 0 32 21.5 32 48v160c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM24 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v96H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-96h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm432 48v96H312v-96zm-192 96H120v-96h144zm136-352h96v96h-96zm-48 0v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48"})
);

export default LanPalletAltRegular;
