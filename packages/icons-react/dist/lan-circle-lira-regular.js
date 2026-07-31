import React from 'react';

export const LanCircleLiraRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-73.8-278.5 1.4 3.5c2.5 6.1 4 12.6 4.3 19H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h4.4c-1.4 2.4-2.9 4.7-4.7 7L149 329.3c-5.6 7.2-6.6 17-2.6 25.3S158.8 368 168 368h160c13.3 0 24-10.7 24-24s-10.7-24-24-24H216.9c6.9-9.9 12-20.7 15.1-32h72c8.8 0 16-7.2 16-16s-7.2-16-16-16h-68c-.2-8-1.4-16.1-3.5-24H304c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80.5c0-21.1 17-40 40-40h2.1c9.3 0 18.3 3 25.7 8.6l14.2 10.6c10.6 8 25.6 5.8 33.6-4.8s5.8-25.6-4.8-33.6l-14.2-10.6a90.9 90.9 0 0 0-54.5-18.2h-2.1c-50.6 0-88.1 41.5-88.1 88-8.6.3-15.5 7.3-15.5 16 0 8.8 7.2 16 16 16h5.6l.6 1.5z"})
);

export default LanCircleLiraRegular;
