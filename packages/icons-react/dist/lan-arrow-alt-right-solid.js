import React from 'react';

export const LanArrowAltRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M438.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-9.2 9.2-22.9 11.9-34.9 6.9S224 428.9 224 416v-96H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h176V96c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l160 160z"})
);

export default LanArrowAltRightSolid;
