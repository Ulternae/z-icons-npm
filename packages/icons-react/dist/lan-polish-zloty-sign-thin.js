import React from 'react';

export const LanPolishZlotySignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 32c4.4 0 8 3.6 8 8v180.5l53.2-19.9c4.1-1.6 8.7.5 10.3 4.7s-.5 8.7-4.7 10.3L360 237.5V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V243.5l-53.2 19.9c-4.1 1.6-8.7-.5-10.3-4.7s.5-8.7 4.7-10.3l58.8-21.9V40c0-4.4 3.6-8 8-8M16 192h192c3 0 5.7 1.7 7.1 4.3s1.2 5.9-.6 8.3L31.4 464H208c4.4 0 8 3.6 8 8s-3.6 8-8 8H16c-3 0-5.7-1.7-7.1-4.3s-1.2-5.9.6-8.3L192.6 208H16c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanPolishZlotySignThin;
