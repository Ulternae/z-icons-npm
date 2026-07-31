import React from 'react';

export const LanTableCellsLockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 48h80c26.5 0 48 21.5 48 48v52.6c5.2-1.5 10.5-2.7 16-3.5V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h241.3c-.9-5.2-1.3-10.5-1.3-16V336h5.4c2-5.6 4.4-10.9 7.4-16H368V192h68.1c4-5.8 8.6-11.1 13.5-16H368zm-16 0v128H224V48zm-144 0v128H80V96c0-26.5 21.5-48 48-48zM80 192h128v128H80zm0 144h128v128h-80c-26.5 0-48-21.5-48-48zm144 128V336h128v128zm0-144V192h128v128zm352-63.9V320h-96v-63.9c0-26.5 21.5-48 48-48s48 21.5 48 48M432 368c0-17.7 14.3-32 32-32v.1h128v-.1c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H464c-17.7 0-32-14.3-32-32zm160-111.9c0-35.3-28.7-64-64-64s-64 28.7-64 64V320c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48z"})
);

export default LanTableCellsLockThin;
