import React from 'react';

export const LanBowArchery = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M70.8 134.3c93.7-93.7 245.7-93.7 339.4 0s93.7 245.7 0 339.4l-4.7 4.7 22.3 22.3c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-384-384c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L66.1 139zm316.8 22.6c-81.2-81.2-212.9-81.2-294.2 0l-4.7 4.7 294.2 294.2 4.7-4.7c81.2-81.2 81.2-212.9 0-294.2"})
);

export default LanBowArchery;
