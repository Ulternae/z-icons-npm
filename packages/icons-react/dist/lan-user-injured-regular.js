import React from 'react';

export const LanUserInjuredRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 208c38.7 0 71-27.5 78.4-64H145.6c7.4 36.5 39.7 64 78.4 64m-.9-160c-32.4.4-60.2 20-72.4 48h43.6zm40.4 10.4L240.9 96h56.4c-6.9-15.9-18.9-29.1-33.9-37.6zM352 128a128 128 0 1 1-256 0 128 128 0 1 1 256 0M50.4 464h109.7l-44.5-84c-33.1 16.1-57.7 46.9-65.3 84zM24 512c-13.3 0-24-10.7-24-24 0-92.8 75.2-168 168-168h112c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3-53.7-120-120-120H168c-1.5 0-2.9 0-4.3.1l12.7 23.9h83.7c33.1 0 60 26.9 60 60s-26.9 60-60 60zm190.4-48H260c6.6 0 12-5.4 12-12s-5.4-12-12-12h-58.3z"})
);

export default LanUserInjuredRegular;
