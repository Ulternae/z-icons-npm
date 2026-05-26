import React from 'react';

export const LanArrowAltDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 425.4 313.4 304H248c-13.3 0-24-10.7-24-24V80h-64v200c0 13.3-10.7 24-24 24H70.6zm22.6 45.3c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-9.2-9.2-11.9-22.9-6.9-34.9S19 256 32 256h80V80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v176h80c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-160 160z"})
);

export default LanArrowAltDownRegular;
