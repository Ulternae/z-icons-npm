import React from 'react';

export const LanCoffeePotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M72 48c-30.9 0-56 25.1-56 56v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-39.8 32.2-72 72-72h382.1c14.3 0 25.9 11.6 25.9 25.9 0 4-.9 8-2.7 11.6L421.5 181c54.3 33.9 90.5 94.2 90.5 163 0 55.5-34.6 99.4-55.9 121.2-9.9 10.2-23.9 14.8-38.1 14.8H158c-14.2 0-28.1-4.7-38.1-14.8C98.7 443.5 64 399.5 64 344c0-69 36.4-129.5 91-163.3L96 48zm98.4 128h235.7L463 62.3c.7-1.4 1-2.9 1-4.4 0-5.5-4.4-9.9-9.9-9.9H113.5zM81.6 320c-1.1 7.8-1.6 15.9-1.6 24 0 49.1 30.9 89.1 51.3 110 6.3 6.5 15.8 10 26.6 10H418c10.9 0 20.3-3.6 26.6-10 20.4-20.9 51.3-60.9 51.3-110 0-8.1-.6-16.2-1.6-24zm2.9-16h406.9c-11.1-47.7-41.6-87.9-82.7-112H167.1c-41.1 24.1-71.6 64.3-82.7 112z"})
);

export default LanCoffeePotThin;
