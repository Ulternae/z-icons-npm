import React from 'react';

export const LanTableCellsHeaderUnlockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 224v90.8c-10.1 15.2-16 33.4-16 53.1v96c0 5.5.5 10.9 1.3 16.1H128c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v49c-46.7 5.8-85.6 36.8-102.7 79zm-64 64v-64h-64v64zm-128 0v-64h-64v64zm64 64v64h64v-64zm-128 0v64h64v-64zm432-80c-.1-17.6-14.4-31.9-32-31.9-17.7 0-32 14.3-32 32V320h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48v-96c0-20.9 13.4-38.7 32-45.3v-50.6c0-44.2 35.8-80 80-80s79.9 35.8 80 79.9z"})
);

export default LanTableCellsHeaderUnlockSolid;
