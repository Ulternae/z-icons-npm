import React from 'react';

export const LanTireRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m336 .9 39.2 12.8c.5-4.5.8-9 .8-13.6 0-31.2-11.9-59.6-31.4-80.9l-24.2 33.4c9.8 13.3 15.6 29.7 15.6 47.5v.9zm-14.9 45.6c-10 14-24.4 24.6-41.2 29.9v41.3c34.4-7 63.5-28.7 80.4-58.3L321 302.6zM232 373.6v-41.3c-16.7-5.3-31.1-15.9-41.1-29.8l-39.3 12.8c16.8 29.6 45.9 51.3 80.3 58.3zm-95.2-104 39.2-12.7v-.9c0-17.8 5.8-34.2 15.6-47.5l-1.7-2.3-22.6-31.1c-19.5 21.3-31.4 49.7-31.4 80.9 0 4.6.3 9.2.8 13.6zm93.6-89.5c8-2.7 16.6-4.2 25.6-4.2s17.6 1.5 25.6 4.2l24.2-33.4c-15.2-6.9-32-10.8-49.8-10.8s-34.6 3.9-49.8 10.8l22.6 31.2zM288 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M256 88a168 168 0 1 1 0 336 168 168 0 1 1 0-336"})
);

export default LanTireRegular;
