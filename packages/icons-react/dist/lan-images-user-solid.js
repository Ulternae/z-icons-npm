import React from 'react';

export const LanImagesUserSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 32c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM48 152c0-13.3-10.7-24-24-24S0 138.7 0 152v296c0 35.3 28.7 64 64 64h360c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16zm160 184c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16m112-232a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanImagesUserSolid;
