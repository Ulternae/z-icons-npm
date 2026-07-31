import React from 'react';

export const LanPlaceOfWorshipThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8.75 512 520.75',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m169.6 172.8-44.8 33.6c-8.1 6-12.8 15.5-12.8 25.6v264h80V384c0-35.3 28.7-64 64-64s64 28.7 64 64v112h80V232c0-10.1-4.7-19.6-12.8-25.6l-44.8-33.6-6.4-4.8V79c0-4.7-2.1-9.3-5.8-12.3L261.1 9.1c-3-2.5-7.3-2.5-10.2 0l-69.1 57.6c-3.6 3-5.8 7.5-5.8 12.3v89zM416 496h32c26.5 0 48-21.5 48-48V343.6c0-18.2-10.3-34.8-26.5-42.9L416 273.9zM96 273.9l-53.5 26.7c-16.2 8.2-26.5 24.8-26.5 43V448c0 26.5 21.5 48 48 48h32zM304 496V384c0-26.5-21.5-48-48-48s-48 21.5-48 48v112zm-112 16H64c-35.3 0-64-28.7-64-64V343.6c0-24.2 13.7-46.4 35.4-57.2L96 256v-24c0-15.1 7.1-29.3 19.2-38.4L160 160V79c0-9.5 4.2-18.5 11.5-24.6l69.1-57.6c8.9-7.4 21.8-7.4 30.7 0l69.1 57.6C347.8 60.5 352 69.5 352 79v81l44.8 33.6c12.1 9.1 19.2 23.3 19.2 38.4v24l60.6 30.3c21.7 10.8 35.4 33 35.4 57.2V448c0 35.3-28.7 64-64 64z"})
);

export default LanPlaceOfWorshipThin;
