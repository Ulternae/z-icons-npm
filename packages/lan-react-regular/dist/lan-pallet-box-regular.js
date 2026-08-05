import React from 'react';

export function LanPalletBoxRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 48v160h224V48zm-48 0c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48zM0 344c0-13.3 10.7-24 24-24h528c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v96h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-96H24c-13.3 0-24-10.7-24-24m312 24v96h144v-96zm-48 0H120v96h144z"})
  );
}

export default LanPalletBoxRegular;
