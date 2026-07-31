import React from 'react';

export const LanThumbtackAngle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m484.7 231.4-28.1-28.1-102.7 119.2c6.2 43.1-2.8 88.3-28 126.9l-3.2 4.9c-13.9 21.3-43.8 24.4-61.8 6.4L51.3 251c-18-18-14.8-47.9 6.4-61.8l4.8-3.2c38.6-25.2 83.8-34.2 126.9-28L308.6 55.4l-28-28.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l204.1 204.1c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0M331.1 78.3 204.9 187.1c-3.5 3-8.2 4.4-12.7 3.7l-7.2-1c-35.6-5.2-72.9 2.3-104.9 23.1l-4.9 3.1c-4.3 2.8-4.9 8.8-1.3 12.4l209.7 209.7c3.6 3.6 9.6 3 12.4-1.3l3.2-4.9C320 400 327.5 362.7 322.3 327l-1-7.2c-.7-4.6.7-9.2 3.7-12.7l108.7-126.2zM110.9 378.5l22.6 22.6L27.3 507.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"})
);

export default LanThumbtackAngle;
