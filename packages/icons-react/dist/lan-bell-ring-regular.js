import React from 'react';

export const LanBellRingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112.6 41.4C72.8 79.3 48 132.7 48 192c0 13.3-10.7 24-24 24S0 205.3 0 192C0 119.1 30.5 53.2 79.4 6.6c9.6-9.1 24.8-8.8 34 .8s8.8 24.8-.8 33.9zm320-34.8C481.5 53.2 512 119 512 192c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-59.3-24.8-112.7-64.6-150.6-9.6-9.1-10-24.3-.8-33.9s24.3-10 33.9-.8zM232 24c0-13.3 10.7-24 24-24s24 10.7 24 24v9.7c81.4 11.6 144 81.7 144 166.3v14.5c0 37.7 10 74.7 29 107.3l21.9 37.5c3.4 5.8 5.1 12.3 5.1 19 0 20.9-16.9 37.8-37.8 37.8L69.8 416C48.9 416 32 399.1 32 378.2c0-6.7 1.8-13.3 5.1-19L59 321.7c19-32.6 29-69.6 29-107.3V200c0-84.6 62.6-154.7 144-166.3zm179.5 321.9C388.3 306 376 260.6 376 214.5V200c0-66.3-53.7-120-120-120s-120 53.7-120 120v14.5c0 46.2-12.3 91.5-35.5 131.4L87.6 368h336.9l-12.9-22.1zM256 512c-31.3 0-58-20-67.9-48h135.8c-9.9 28-36.6 48-67.9 48"})
);

export default LanBellRingRegular;
