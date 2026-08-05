import React from 'react';

export function LanExternalLinkSquareAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm64 16c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-280 64c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l35 35-67 67c-9.4 9.4-9.4 24.6 0 33.9l24 24c9.4 9.4 24.6 9.4 33.9 0l67-67 35 35c6.9 6.9 17.2 8.9 26.2 5.2S320 321.7 320 312V184c0-13.3-10.7-24-24-24z"})
  );
}

export default LanExternalLinkSquareAltRegular;
