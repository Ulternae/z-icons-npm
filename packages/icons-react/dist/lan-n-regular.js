import React from 'react';

export const LanNRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M15.8 33.5c9.5-3.5 20.1-.6 26.6 7.1L336 390.1V56c0-13.3 10.7-24 24-24s24 10.7 24 24v400c0 10.1-6.3 19.1-15.8 22.6s-20.1.6-26.6-7.1L48 121.9V456c0 13.3-10.7 24-24 24S0 469.3 0 456V56c0-10.1 6.3-19.1 15.8-22.5"})
);

export default LanNRegular;
