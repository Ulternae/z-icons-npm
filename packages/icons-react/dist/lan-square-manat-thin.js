import React from 'react';

export const LanSquareManatThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm216 32c0-4.4 3.6-8 8-8s8 3.6 8 8v16.3c58.1 4.1 104 52.6 104 111.7v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V256c0-50.3-38.7-91.6-88-95.7V376c0 4.4-3.6 8-8 8s-8-3.6-8-8V160.3c-49.3 4.1-88 45.3-88 95.7v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V256c0-59.2 45.9-107.6 104-111.7z"})
);

export default LanSquareManatThin;
