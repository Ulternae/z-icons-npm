import React from 'react';

export const LanCubes = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8.85 513 520.85',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280.5-2.4c-14.9-8.6-33.1-8.6-48 0l-88.3 50.9c-14.9 8.6-24 24.4-24 41.6v111.1L24 256.8c-14.9 8.6-24 24.4-24 41.5v101.9c0 17.1 9.1 33 24 41.6l88.2 50.9c14.9 8.6 33.1 8.6 48 0l96.2-55.6 96.2 55.6c14.9 8.6 33.1 8.6 48 0l88.4-50.9c14.9-8.6 24-24.4 24-41.6V298.3c0-17.1-9.1-33-24-41.6l-96.2-55.6V90c0-17.1-9.1-33-24-41.6zM48 279.9l88.2-50.9 88.2 50.9-88.2 50.9zm-16 27.7 88.2 50.9v101.9L40 414.1c-5-2.9-8-8.1-8-13.9v-92.7zm120.2 152.8V358.5l88.2-50.9v101.9zm120.3-152.8 88.2 50.9v101.9l-88.2-50.9zm120.2 152.8V358.5l88.2-50.9v92.7c0 5.7-3 11-8 13.9l-80.2 46.3zM465 279.9l-88.2 50.9-88.2-50.9 88.2-50.9zm-192.5-27.7V150.3l88.2-50.9v101.9zm72.2-180.6-88.2 50.9-88.2-50.9 80.2-46.3c5-2.9 11-2.9 16 0zM152.2 99.3l88.2 50.9v101.9l-88.2-50.9z"})
);

export default LanCubes;
