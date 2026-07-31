import React from 'react';

export const LanPhoneAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M363.6 32.3C368.7 20 382.1 13.5 395 17l6.9 1.9c58.1 15.9 105.5 71.3 91.8 137-35.2 169.3-168.5 302.6-337.8 337.8-65.7 13.7-121.1-33.7-137-91.8l-1.9-7c-3.5-12.8 3.1-26.3 15.3-31.4l96.4-40.2c10.8-4.5 23.2-1.4 30.6 7.7l44.8 54.7c2.3 2.8 6.3 3.7 9.6 2.2 76.5-36 137.7-99.2 171.1-177.1 1.4-3.3.5-7.1-2.3-9.3L331 159.3c-9-7.4-12.2-19.9-7.7-30.6l40.2-96.4zm35.5-30.8c-20.6-5.6-42.1 4.9-50.3 24.6l-40.2 96.4c-7.2 17.3-2.2 37.3 12.3 49.2l46.8 38.3c-31.5 69.9-86.6 126.9-155.2 160.7l-40.8-49.9c-11.9-14.5-31.9-19.5-49.2-12.3l-96.3 40.3C6.5 357-4.1 378.5 1.5 399.1l1.9 6.9C20.9 470 83 525.1 159.1 509.3c175.5-36.5 313.7-174.7 350.2-350.2C525.1 82.9 470 20.8 406 3.4z"})
);

export default LanPhoneAltThin;
