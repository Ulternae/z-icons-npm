import React from 'react';

export const LanStaffRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M238.8 57.5C256.4 22.3 292.4 0 331.8 0H408c57.4 0 104 46.6 104 104v103.9c0 42.8-26.1 80.8-65.1 96.5l-17.3 30.7c-4.3 7.7-14.1 10.4-21.8 6.1l-29.4-16.6-124.6 35.6L123 491c-28.2 28-73.8 28-101.9-.1s-28.1-73.7 0-101.8L96 314.2V288c0-8.8 7.2-16 16-16h26.2l21-21c12.5-12.5 28-21.6 45-26.5L368 177.7V144h-12.1c-19.8 29.8-59.2 40.8-92.1 24.4-35.6-17.8-50-61-32.2-96.6zm93-9.5c-21.2 0-40.6 12-50.1 31l-7.2 14.3c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l2.7-5.5c4.1-8.1 12.4-13.3 21.5-13.3H392c13.3 0 24 10.7 24 24v75.8c0 10.7-7.1 20.1-17.4 23.1l-181.2 51.7c-9.2 2.6-17.5 7.5-24.2 14.2L55 423c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135.3-135.1c2.9-2.9 6.5-5 10.4-6.1l188.8-54c24-6.9 40.6-28.8 40.6-53.8V104c0-30.9-25.1-56-56-56z"})
);

export default LanStaffRegular;
