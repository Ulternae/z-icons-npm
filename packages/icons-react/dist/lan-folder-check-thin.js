import React from 'react';

export const LanFolderCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M202.7 32c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H298.7c-10.4 0-20.5-3.4-28.8-9.6l-38.4-28.8c-8.3-6.2-18.5-9.6-28.8-9.6zm273.7 131.7c2.6-3.6 7.6-4.3 11.2-1.7s4.3 7.6 1.8 11.2L236.9 345.5c-1.4 1.9-3.6 3.1-5.9 3.3s-4.7-.7-6.3-2.4l-62.3-64.5c-3.1-3.2-3-8.2.2-11.3s8.2-3 11.3.2l55.7 57.6z"})
);

export default LanFolderCheckThin;
