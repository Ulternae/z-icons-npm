import React from 'react';

export const LanPlaneLandingGear = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M576 336.3c0-17.8-14.5-32.3-32.3-32.3H416c-4.5 0-8.8-1.9-11.8-5.2L233 112h-50.8l57 170.9c1.6 4.9.8 10.2-2.2 14.4s-7.8 6.6-13 6.6h-96c-5.2 0-10.1-2.5-13.1-6.8l-51.2-73.2H51.2l19 104.6c4.1 22.8 24 39.4 47.2 39.4H128l415.6.6c17.9 0 32.3-14.4 32.3-32.3zM543.7 272c35.5 0 64.3 28.8 64.3 64.3s-28.8 64.4-64.4 64.3L128 400h-10.6c-38.7 0-71.8-27.7-78.7-65.7L16.3 210.9c-.8-4.7.4-9.5 3.5-13.1S27.3 192 32 192h40c5.2 0 10.1 2.5 13.1 6.8l51.2 73.2h65.5l-57-170.9c-1.6-4.9-.8-10.2 2.2-14.4s7.8-6.6 13-6.6h80c4.5 0 8.8 1.9 11.8 5.2L423 272zM233.3 480a24 24 0 1 1 48 0 24 24 0 1 1-48 0M384 456a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanPlaneLandingGear;
