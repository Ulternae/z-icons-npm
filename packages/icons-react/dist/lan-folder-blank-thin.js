import React from 'react';

export const LanFolderBlankThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 432h384c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H298.7c-10.4 0-20.5-3.4-28.8-9.6l-38.4-28.8c-8.3-6.2-18.4-9.6-28.8-9.6H64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48m384 16H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h138.7c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64"})
);

export default LanFolderBlankThin;
