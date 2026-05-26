import React from 'react';

export const LanCirclePeruvianSolesRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416m80.9 89.4c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-64 224c-3.6 12.7-16.9 20.1-29.7 16.5s-20.1-16.9-16.5-29.7zM216 152c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24.4c-8.6 0-15.6 7-15.6 15.6 0 7.4 5.2 13.8 12.5 15.2l16.4 3.3c29.7 5.9 51.1 32 51.1 62.3 0 35.1-28.5 63.6-63.6 63.6H160c-13.3 0-24-10.7-24-24s10.7-24 24-24h32.4c8.6 0 15.6-7 15.6-15.6 0-7.4-5.2-13.8-12.5-15.3l-16.4-3.3c-29.7-5.9-51.1-32-51.1-62.3 0-35.1 28.5-63.6 63.6-63.6H216z"})
);

export default LanCirclePeruvianSolesRegular;
