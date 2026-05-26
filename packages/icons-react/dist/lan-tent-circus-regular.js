import React from 'react';

export const LanTentCircusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M301.8 12.3c-8.3-5.8-19.3-5.8-27.5 0l-240 168C27.8 184.8 24 192.2 24 200v40c0 30.8 17.4 57.5 42.9 70.9L40.1 445c-6.9 34.7 19.6 67 54.9 67h386c35.3 0 61.8-32.3 54.9-67l-26.8-134.1c25.5-13.3 42.9-40.1 42.9-70.9v-40c0-7.8-3.8-15.2-10.2-19.7zm160 307 27 135.1c1 5-2.8 9.6-7.8 9.6h-62.7L389 311.9c9.2-4.3 17.5-10.1 24.7-17.1 12.4 13.2 29.2 22.2 48.1 24.6zM369.4 464H206.6l27.8-144.6c21-2.5 39.8-12.4 53.6-27 13.8 14.6 32.6 24.5 53.6 27zM162.3 294.8c7.1 7 15.5 12.8 24.7 17.1L157.7 464H95c-5 0-8.8-4.6-7.8-9.6l27-135.1c18.9-2.4 35.7-11.4 48.1-24.6zM288 176H124.1L288 61.3 451.9 176zM72 240v-16h64v16c0 17.7-14.3 32-32 32s-32-14.3-32-32m368-16h64v16c0 17.7-14.3 32-32 32s-32-14.3-32-32zm-256 8v-8h80v8c0 22.1-17.9 40-40 40s-40-17.9-40-40m128-8h80v8c0 22.1-17.9 40-40 40s-40-17.9-40-40z"})
);

export default LanTentCircusRegular;
