import React from 'react';

export const LanClipboardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 80H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32m0 16c26.5 0 48-21.5 48-48h16c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h16c0 26.5 21.5 48 48 48zm45.3-64C294.7 13.4 276.9 0 256 0H128c-20.9 0-38.7 13.4-45.3 32H64C28.7 32 0 60.7 0 96v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"})
);

export default LanClipboardThin;
