import React from 'react';

export const LanSwapRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M28.4 158.2H72V360c0 66.3 53.7 120 120 120s120-53.7 120-120V152c0-39.8 32.2-72 72-72s72 32.2 72 72v200h-43.6c-15.7 0-28.4 12.7-28.4 28.4 0 7.5 3 14.8 8.3 20.1l70.7 70.7c9.4 9.4 24.6 9.4 33.9 0l70.7-70.7c5.3-5.3 8.3-12.6 8.3-20.1 0-15.7-12.7-28.4-28.4-28.4h-43.6V152c0-66.3-53.7-120-120-120S264 85.7 264 152v208c0 39.8-32.2 72-72 72s-72-32.2-72-72V158.2h43.6c15.7 0 28.4-12.7 28.4-28.4 0-7.5-3-14.8-8.3-20.1L113 39c-9.4-9.4-24.6-9.4-33.9 0L8.3 109.7C3 115.1 0 122.3 0 129.8c0 15.7 12.7 28.4 28.4 28.4"})
);

export default LanSwapRegular;
