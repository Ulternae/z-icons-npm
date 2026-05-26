import React from 'react';

export const LanTentArrowLeftRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m507.3 84.7-72-72c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 80H54.6l44.7-44.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-72 72c-6.2 6.2-6.2 16.4 0 22.6l72 72c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 112h402.8l-44.7 44.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6M68.3 480l23.2-183.3L240 206.5V480zM272 286v-78.4l148.5 89.2L443.7 480h-66.2zm0 194V353l69.1 127zm203.4-4-23.2-183.3c-1.2-9.7-6.9-18.4-15.3-23.4l-165.5-99.4c-10.2-6.1-22.9-6.1-33.1.1L74.9 269.3c-8.3 5.1-13.9 13.7-15.1 23.3L36.6 476c-2.4 19.1 12.5 36 31.7 36h375.4c19.3 0 34.2-16.9 31.7-36"})
);

export default LanTentArrowLeftRight;
