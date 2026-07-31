import React from 'react';

export const LanChessBoardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 480h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5v-320c0-33.1-25.2-60.4-57.5-63.7l-6.5-.3h-320l-6.5.3C25.2 35.6 0 62.9 0 96v320l.3 6.5c3.1 30.1 27 54.1 57.1 57.1zm54.4-48H64c-8.8 0-16-7.2-16-16v-54.4h70.4v-70.4H48v-70.4h70.4v-70.4H48V96c0-8.8 7.2-16 16-16h54.4v70.4h70.4V80h70.4v70.4h70.4V80H384c8.8 0 16 7.2 16 16v54.4h-70.4v70.4H400v70.4h-70.4v70.4H400V416c0 8.8-7.2 16-16 16h-54.4v-70.4h-70.4V432h-70.4v-70.4h-70.4zm0-140.8h70.4v70.4h70.4v-70.4h70.4v-70.4h-70.4v-70.4h-70.4v70.4h-70.4zm140.8-70.4v70.4h-70.4v-70.4zM64 480h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5v-320c0-33.1-25.2-60.4-57.5-63.7l-6.5-.3h-320l-6.5.3C25.2 35.6 0 62.9 0 96v320l.3 6.5c3.1 30.1 27 54.1 57.1 57.1zm54.4-48H64c-8.8 0-16-7.2-16-16v-54.4h70.4v-70.4H48v-70.4h70.4v-70.4H48V96c0-8.8 7.2-16 16-16h54.4v70.4h70.4V80h70.4v70.4h70.4V80H384c8.8 0 16 7.2 16 16v54.4h-70.4v70.4H400v70.4h-70.4v70.4H400V416c0 8.8-7.2 16-16 16h-54.4v-70.4h-70.4V432h-70.4v-70.4h-70.4zm0-140.8h70.4v70.4h70.4v-70.4h70.4v-70.4h-70.4v-70.4h-70.4v70.4h-70.4zm140.8-70.4v70.4h-70.4v-70.4z"})
);

export default LanChessBoardRegular;
