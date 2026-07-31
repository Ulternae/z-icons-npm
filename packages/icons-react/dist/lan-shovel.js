import React from 'react';

export const LanShovel = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.95 576 559.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M436.7-11.3c6.2-6.2 16.4-6.2 22.6 0l96 96c6.2 6.2 6.2 16.4 0 22.6l-44.1 44.1c-15.7 15.7-37.1 24.6-59.3 24.6-17.4 0-33.5-5.3-46.9-14.3L267.3 299.4l50.7 50.7c18.7 18.7 18.7 49.1 0 67.9l-84.8 84.8C206.8 529.2 171 544 133.7 544 59.9 544 0 484.1 0 410.3c0-37.3 14.8-73.1 41.2-99.5L126 226c18.7-18.7 49.1-18.7 67.9 0l50.8 50.7L382.3 139c-9.1-13.4-14.3-29.5-14.3-46.9 0-22.2 8.8-43.6 24.6-59.3zM448 22.6l-32.8 32.8c-9.7 9.7-15.2 22.9-15.2 36.7 0 28.7 23.2 51.9 51.9 51.9 13.8 0 27-5.5 36.7-15.2L521.4 96zM63.8 333.4C43.4 353.8 32 381.5 32 410.3 32 466.5 77.5 512 133.7 512c28.8 0 56.5-11.5 76.9-31.8l84.8-84.8c6.2-6.2 6.2-16.4 0-22.6L171.3 248.6c-6.2-6.2-16.4-6.2-22.6 0z"})
);

export default LanShovel;
