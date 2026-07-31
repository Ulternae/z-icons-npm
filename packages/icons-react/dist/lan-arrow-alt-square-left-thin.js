import React from 'react';

export const LanArrowAltSquareLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48zm48 64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm42.3-218.3 88 88c2.3 2.3 5.7 3 8.7 1.7s4.9-4.2 4.9-7.4v-48c0-4.4 3.6-8 8-8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-112c-4.4 0-8-3.6-8-8v-48c0-3.2-1.9-6.2-4.9-7.4s-6.4-.6-8.7 1.7l-88 88c-3.1 3.1-3.1 8.2 0 11.3zM95 239l88-88c6.9-6.9 17.2-8.9 26.2-5.2S224 158.3 224 168v40h104c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H224v40c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-88-88c-9.4-9.4-9.4-24.6 0-33.9z"})
);

export default LanArrowAltSquareLeftThin;
