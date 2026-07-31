import React from 'react';

export const LanPepperHotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M545 65c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-32.2 32.1C452.3 43.6 419.5 32 384 32c-35.1 0-67.5 11.3-93.9 30.4-16 11.7-5.9 33.6 13.9 33.6h24c13.3 0 24 10.7 24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24 10.7 24 24v24c0 19.8 21.9 29.9 33.6 13.9 19.1-26.4 30.4-58.8 30.4-93.9 0-35.5-11.6-68.3-31.2-94.9zm-275 70.5-159.6 228C101.3 376.4 86.7 384 71 384h-7c-26.5 0-48 21.5-48 48s21.5 48 48 48h27.1c65.7 0 129.7-20.2 183.5-57.8l165.9-116.1c-5.5-10.2-8.5-21.9-8.5-34.1h-26.6L247.1 382.8c-45.7 32-100.2 49.2-156 49.2H71c31.3 0 60.7-15.3 78.6-40.9L304 170.6V144c-12.2 0-23.9-3-34-8.5"})
);

export default LanPepperHotRegular;
