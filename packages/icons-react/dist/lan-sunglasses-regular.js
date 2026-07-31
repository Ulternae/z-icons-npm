import React from 'react';

export const LanSunglassesRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M135.8 80c-17.7 0-33.3 11.7-38.4 28.6L53.8 256H224c17.7 0 32 14.3 32 32h64c0-17.7 14.3-32 32-32h170.2l-43.7-147.4c-5-17-20.6-28.6-38.4-28.6H408c-13.3 0-24-10.7-24-24s10.7-24 24-24h32.2c39 0 73.3 25.6 84.4 63l47.8 161.3c2.4 8.1 3.6 16.5 3.6 25V384c0 53-43 96-96 96h-64c-53 0-96-43-96-96v-48h-64v48c0 53-43 96-96 96H96c-53 0-96-43-96-96V281.3c0-8.5 1.2-16.9 3.6-25L51.4 95c11.1-37.4 45.4-63 84.4-63H168c13.3 0 24 10.7 24 24s-10.7 24-24 24zm350.7 224H368v80c0 5.2.8 10.3 2.4 15zm41.5 28.1-121.1 99c2.9.6 6 .9 9.1.9h64c26.5 0 48-21.5 48-48zM48 304v80c0 5.2.8 10.3 2.4 15l116.1-95zm48 128h64c26.5 0 48-21.5 48-48v-51.9l-121.1 99c2.9.6 6 .9 9.1.9"})
);

export default LanSunglassesRegular;
