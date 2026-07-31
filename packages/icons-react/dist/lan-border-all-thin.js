import React from 'react';

export const LanBorderAllThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v144H224V48zm48 208v160c0 26.5-21.5 48-48 48H224V256zm-224-16H16V96c0-26.5 21.5-48 48-48h144zM16 256h192v208H64c-26.5 0-48-21.5-48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"})
);

export default LanBorderAllThin;
