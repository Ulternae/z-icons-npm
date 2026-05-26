import React from 'react';

export const LanExclamationSquareThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm160 336a16 16 0 1 1 0-32 16 16 0 1 1 0 32m2.9-255.7c6.6 1.4 11.5 7.4 11.3 14.4L232 304.3c-.2 4.3-3.7 7.7-8 7.7s-7.8-3.4-8-7.7l-6.2-161.6c-.3-8 6.1-14.7 14.2-14.7z"})
);

export default LanExclamationSquareThin;
