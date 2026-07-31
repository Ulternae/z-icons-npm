import React from 'react';

export const LanTacoRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m237.2 22.4-44.1 34.2c-5.6 4.4-12.6 6.6-19.7 6.4l-55.8-1.7c-14-.4-26.5 8.6-30.4 22.1l-15.5 53.5c-2 6.8-6.3 12.8-12.2 16.8L13.4 185c-11.5 7.9-16.3 22.6-11.6 35.7L16.3 261C71.9 189.8 158.6 144 256 144s184.1 45.8 239.7 117l14.5-40.3c4.7-13.1 0-27.8-11.6-35.7l-46.1-31.4c-5.9-4-10.2-9.9-12.2-16.8l-15.6-53.5c-3.9-13.4-16.4-22.5-30.4-22.1L338.6 63c-7.1.2-14.1-2-19.7-6.4l-44.1-34.2c-11-8.6-26.5-8.6-37.5 0zM256 240c109.5 0 199.2 84.6 207.4 192H48.6c8.2-107.4 97.9-192 207.4-192M32 480h448c17.7 0 32-14.3 32-32 0-141.4-114.6-256-256-256S0 306.6 0 448c0 17.7 14.3 32 32 32m96-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-88a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanTacoRegular;
