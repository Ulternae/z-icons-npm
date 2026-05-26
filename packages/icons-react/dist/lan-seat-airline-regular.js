import React from 'react';

export const LanSeatAirlineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 0c13.3 0 24 10.7 24 24v122c0 6.5 1.1 12.9 3.3 19l15.5 43H288c13.3 0 24 10.7 24 24s-10.7 24-24 24H84.1l19.3 53.5c5.7 15.9 20.8 26.5 37.6 26.5h219c13.3 0 24 10.7 24 24s-10.7 24-24 24H141c-37.1 0-70.2-23.3-82.8-58.2L6.1 181.3C2.1 170 0 158 0 146V24C0 10.7 10.7 0 24 0m8 488c0-13.3 10.7-24 24-24h304c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24"})
);

export default LanSeatAirlineRegular;
