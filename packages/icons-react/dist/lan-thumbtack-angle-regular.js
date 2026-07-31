import React from 'react';

export const LanThumbtackAngleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M303.1 6.9c9.4-9.4 24.6-9.4 33.9 0l140.6 140.6 27.6 27.5c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-9.2-9.2-92 106.8c6.2 43.1-2.8 88.3-28 126.9l-3.2 4.9q-30.15-19.65 0 0c-13.9 21.3-43.8 24.4-61.8 6.4L67.4 235c-18-18-14.8-47.9 6.4-61.8l4.8-3.2c38.6-25.2 83.8-34.2 126.9-28l106.8-92-9.2-9.2c-9.4-9.4-9.4-24.6 0-33.9m43.2 77.2-118 101.8c-5.7 4.9-13.3 6.9-20.7 5.3-33.2-7.1-68.8-1.7-99.3 16.9L304 403.8c18.6-30.5 24-66 16.9-99.3-1.6-7.3.4-15 5.3-20.7L428 165.7l-81.6-81.6zm-225 272.8 33.9 33.9L41.1 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9z"})
);

export default LanThumbtackAngleRegular;
