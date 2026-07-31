import React from 'react';

export const LanArrowAltSquareDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 464c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm218.3-42.3-88-88c-2.3-2.3-3-5.7-1.7-8.7s4.2-4.9 7.4-4.9h48c4.4 0 8-3.6 8-8v-112c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v112c0 4.4 3.6 8 8 8h48c3.2 0 6.2 1.9 7.4 4.9s.6 6.4-1.7 8.7l-88 88c-3.1 3.1-8.2 3.1-11.3 0zM241 385l88-88c6.9-6.9 8.9-17.2 5.2-26.2S321.7 256 312 256h-40V152c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v104h-40c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l88 88c9.4 9.4 24.6 9.4 33.9 0z"})
);

export default LanArrowAltSquareDownThin;
