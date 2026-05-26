import React from 'react';

export const LanExternalLinkSquareAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM168 160c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l35 35-67 67c-9.4 9.4-9.4 24.6 0 33.9l24 24c9.4 9.4 24.6 9.4 33.9 0l67-67 35 35c6.9 6.9 17.2 8.9 26.2 5.2S320 321.7 320 312V184c0-13.3-10.7-24-24-24z"})
);

export default LanExternalLinkSquareAltSolid;
