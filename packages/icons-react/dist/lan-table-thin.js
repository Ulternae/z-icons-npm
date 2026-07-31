import React from 'react';

export const LanTableThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 160h416V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48zm0 16v128h200V176zm216 0v128h200V176zm-16 144H16v96c0 26.5 21.5 48 48 48h152zm16 144h152c26.5 0 48-21.5 48-48v-96H232zM64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64z"})
);

export default LanTableThin;
