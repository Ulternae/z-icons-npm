import React from 'react';

export const CoreCircleHalfStrokeRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 256c0 71.3 38.9 133.6 96.7 166.7 19.3 11 40.6 18.8 63.3 22.6V66.7C133.2 81.9 64 160.9 64 256","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512M224 66.7C133.2 81.9 64 160.9 64 256s69.2 174 160 189.3zm64 378.6C378.8 430 448 351.1 448 256S378.8 81.9 288 66.7z"})
);

export default CoreCircleHalfStrokeRegular-duo;
