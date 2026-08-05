import React from 'react';

export function LanArrowAltToBottomRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 488c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24M175 377c9.4 9.4 24.6 9.4 33.9 0L353 233c6.9-6.9 8.9-17.2 5.2-26.2S345.7 192 336 192h-64V48c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v144H48c-9.7 0-18.5 5.8-22.2 14.8S24.2 226.1 31 233zm-15-249V48h64v168c0 6.4 2.5 12.5 7 17s10.6 7 17 7h30.1L192 326.1 105.9 240H136c13.3 0 24-10.7 24-24z"})
  );
}

export default LanArrowAltToBottomRegular;
