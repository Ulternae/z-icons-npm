import React from 'react';

export const LanPictureInPictureThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 32c35.3 0 64 28.7 64 64v112h-16V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h144v16H64l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-33.1 25.2-60.4 57.5-63.7L64 32zm16 224c26.5 0 48 21.5 48 48v128l-.2 4.9c-2.5 24.2-22.9 43.1-47.8 43.1H304l-4.9-.2c-22.6-2.3-40.6-20.3-42.8-42.8l-.2-4.9v-128c0-26.5 21.5-48 48-48h160zm-160 16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V304c0-17.7-14.3-32-32-32z"})
);

export default LanPictureInPictureThin;
