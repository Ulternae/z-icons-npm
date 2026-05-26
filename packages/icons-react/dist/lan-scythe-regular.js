import React from 'react';

export const LanScytheRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m496 176 26.5-128H310.6c-97.8 0-188.7 48.2-243.7 128zm-23.1 112 13.2-64H24c-8.6 0-16.6-4.6-20.8-12.1s-4.2-16.7.2-24.1l11-18.8C76.3 64.3 188.9 0 310.6 0H552c7.2 0 14.1 3.2 18.6 8.8s6.4 12.9 4.9 20l-96 464c-2.7 13-15.4 21.3-28.4 18.6S429.8 496 432.5 483l30.4-147H344c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanScytheRegular;
