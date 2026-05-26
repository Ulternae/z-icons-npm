import React from 'react';

export const LanCircleZRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-368c-13.3 0-24 10.7-24 24s10.7 24 24 24h93.4L165.5 328.8c-5.9 7.2-7.1 17.1-3.1 25.5S174.7 368 184 368h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-93.4l111.9-136.8c5.9-7.2 7.1-17.1 3.1-25.5S337.3 144 328 144z"})
);

export default LanCircleZRegular;
