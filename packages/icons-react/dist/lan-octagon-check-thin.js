import React from 'react';

export const LanOctagonCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M330.9.1c12.7 0 25 5.1 34 14.1l133.4 133.4c9 9 14.1 21.2 14.1 33.9v148.8c0 12.7-5.1 25-14.1 34L364.8 497.9c-9 9-21.2 14.1-34 14.1H182c-12.7 0-24.9-5.1-33.9-14.1L14.6 364.4c-9-9-14.1-21.2-14.1-34V181.6c0-12.7 5.1-24.9 14.1-33.9L148.1 14.1c9-9 21.2-14.1 33.9-14.1h148.8zM182 16.1c-8.5 0-16.6 3.4-22.6 9.4L25.9 158.9c-6 6-9.4 14.1-9.4 22.6v148.8c0 8.5 3.4 16.6 9.4 22.6l133.5 133.7c6 6 14.1 9.4 22.6 9.4h148.8c8.5 0 16.6-3.4 22.6-9.4L487 353c6-6 9.4-14.1 9.4-22.6V181.6c0-8.5-3.4-16.6-9.4-22.6L353.5 25.4c-6-6-14.1-9.4-22.6-9.4zm171.9 144.3c2.6-3.6 7.6-4.3 11.2-1.7s4.4 7.6 1.8 11.2l-136 186.8c-1.4 1.9-3.5 3.1-5.8 3.3s-4.6-.7-6.3-2.3l-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l65.4 65.4 130.4-179.3z"})
);

export default LanOctagonCheckThin;
