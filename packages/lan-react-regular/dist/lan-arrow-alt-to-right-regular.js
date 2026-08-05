import React from 'react';

export function LanArrowAltToRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M488 64c-13.3 0-24 10.7-24 24v336c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24M377 273c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17L233 95c-6.9-6.9-17.2-8.9-26.2-5.2S192 102.3 192 112v64H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h144v64c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2zm-249 15H48v-64h168c6.4 0 12.5-2.5 17-7s7-10.6 7-17v-30.1l86.1 86.1-86.1 86.1V312c0-13.3-10.7-24-24-24z"})
  );
}

export default LanArrowAltToRightRegular;
