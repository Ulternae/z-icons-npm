import React from 'react';

export const LanThumbtackAngleSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L381.8 327.3l106.8-123.9 28.1 28.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L335.2 4.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l28 28.1-123.9 106.8zm212.1 212.1L363.1 78.3l102.6 102.6-106.6 123.7zm-144.8 1.2-4.8 3.2c-21.3 13.9-24.4 43.8-6.4 61.8L293 460.7c18 18 47.9 14.8 61.8-6.4l3.2-4.9c4.5-6.9 8.4-13.9 11.9-21.1L345.5 404c-3.8 9.6-8.5 19-14.4 28l-3.2 4.9c-2.8 4.3-8.8 4.9-12.4 1.3L105.9 228.4c-3.6-3.6-3-9.6 1.3-12.4l4.8-3.2c9-5.8 18.3-10.6 28-14.4l-24.3-24.3c-7.2 3.5-14.3 7.4-21.1 11.9zm70.9 215.1-22.6-22.7L36.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l106.2-106.2z"})
);

export default LanThumbtackAngleSlash;
