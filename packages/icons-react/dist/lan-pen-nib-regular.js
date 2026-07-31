import React from 'react';

export const LanPenNibRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368.5 18.3c21.9-21.9 57.3-21.9 79.2 0l46.1 46.1c21.9 21.9 21.9 57.3 0 79.2l-71 71-10.4 10.4-40.7 149.1c-4.8 17.8-18.1 32-35.5 38.1L72 505c-18.5 6.5-39.1 1.8-52.9-12S.5 458.5 7 440l92.8-264.1c6.1-17.4 20.3-30.6 38.1-35.5L287 99.7l10.4-10.4 71-71zm-71.6 128.5-146.3 39.9c-2.5.7-4.6 2.6-5.4 5.1L65.6 418.2l97.4-97.5c-1.9-5.2-3-10.8-3-16.7 0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48c-5.9 0-11.5-1.1-16.7-3l-97.5 97.5L320.2 367c2.5-.9 4.4-2.9 5.1-5.4l39.9-146.4-68.3-68.3z"})
);

export default LanPenNibRegular;
