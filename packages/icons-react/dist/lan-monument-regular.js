import React from 'react';

export const LanMonumentRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M175-33c9.4-9.4 24.6-9.4 33.9 0l80 80c4.1 4.1 6.5 9.4 7 15.1L326.8 464H344c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h17.2L88.1 62.2c.4-5.7 2.9-11.1 7-15.1l80-80zm73.8 107.7L192 17.9l-56.8 56.8L105.3 464h173.4zM168 288h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanMonumentRegular;
