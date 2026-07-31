import React from 'react';

export const LanTentRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232.2 432V103.6L82 199.7c-4.1 2.6-6.8 7-7.3 11.9L53.1 432zm48-176 95.3 176h83.7l-21.5-220.2c-.5-4.9-3.2-9.3-7.4-12l-150.2-95.1V256zM3.7 444.9l23.2-238c1.9-19.5 12.7-37.1 29.2-47.7L229.3 48.5c15.7-10 35.8-10.1 51.5-.1l175.3 110.9c16.7 10.6 27.5 28.2 29.5 47.8l23.2 237.8c1.8 18.8-12.9 35.1-31.8 35.1H35.5c-18.9 0-33.7-16.3-31.8-35.1"})
);

export default LanTentRegular;
