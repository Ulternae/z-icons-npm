import React from 'react';

export const LanChessBoardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M390.5 32.3C422.8 35.6 448 62.9 448 96v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-33.1 25.2-60.4 57.5-63.7L64 32h320zM16 397.7V416c0 26.5 21.5 48 48 48h18.3v-66.3zm82.3 0V464h73.2v-66.3zm89.2 0V464h73.1v-66.3zm89.1 0V464h73.2v-66.3zm89.2 0V464h18.3c26.5 0 48-21.5 48-48v-18.3zM16 381.7h66.3v-73.2H16zm82.3 0h73.2v-73.2H98.3zm89.2 0h73.1v-73.2h-73.1zm89.1 0h73.2v-73.2h-73.2zm89.2 0h66.3v-73.2h-66.3zM16 292.6h66.3v-73.1H16zm82.3 0h73.2v-73.1H98.3zm89.2 0h73.1v-73.1h-73.1zm89.1 0h73.2v-73.1h-73.2zm89.2 0h66.3v-73.1h-66.3zM16 203.4h66.3v-73.2H16zm82.3 0h73.2v-73.2H98.3zm89.2 0h73.1v-73.2h-73.1zm89.1 0h73.2v-73.2h-73.2zm89.2 0h66.3v-73.2h-66.3zM64 48c-26.5 0-48 21.5-48 48v18.3h66.3V48zm34.3 66.3h73.2V48H98.3zm89.2 0h73.1V48h-73.1zm89.1 0h73.2V48h-73.2zm89.2 0h66.3V96c0-26.5-21.5-48-48-48h-18.3z"})
);

export default LanChessBoardThin;
