import React from 'react';

export const NeoArrowDownWideShortSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M302 372.1c5.3-9.3 7.6-19.3 7.6-28.8 0-23.5-14.5-48.1-42.2-54-17.3-3.7-44.4-7.6-84.6-8.8V84.1c0-15.5-12.5-28-28-28s-28 12.5-28 28v196.4c-40.3 1.3-67.3 5.1-84.6 8.8-27.7 5.9-42.2 30.6-42.2 54 0 9.5 2.2 19.6 7.6 28.8 12.4 21.5 55.1 89.5 123.4 126 7.7 4.1 15.9 5.9 23.8 5.9s16.1-1.8 23.8-5.9c68.3-36.5 111-104.5 123.4-126M364 84c-15.5 0-28 12.5-28 28s12.5 28 28 28h224c15.5 0 28-12.5 28-28s-12.5-28-28-28zm-28 364c0-15.5 12.5-28 28-28h112c15.5 0 28 12.5 28 28s-12.5 28-28 28H364c-15.5 0-28-12.5-28-28m28-196c-15.5 0-28 12.5-28 28s12.5 28 28 28h168c15.5 0 28-12.5 28-28s-12.5-28-28-28z"})
);

export default NeoArrowDownWideShortSolid;
