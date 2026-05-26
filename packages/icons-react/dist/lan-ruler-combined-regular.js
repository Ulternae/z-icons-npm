import React from 'react';

export const LanRulerCombinedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 80c0-26.5 21.5-48 48-48h112c26.5 0 48 21.5 48 48v192h192c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm160 0H48v352h352V320h-80v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-64v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-64h-40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40z"})
);

export default LanRulerCombinedRegular;
