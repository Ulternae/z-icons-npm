import React from 'react';

export const LanUtilityCanThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M248 0c22.1 0 40 17.9 40 40v56h5.5l6.3.3c14.7 1.5 28.4 7.9 38.9 18.4l58.5 58.5c12 12 18.7 28.3 18.7 45.2L416 448c0 33.1-25.2 60.4-57.5 63.7l-6.5.3H96c-33.1 0-60.4-25.2-63.7-57.5L32 448V160c0-35.3 28.7-64 64-64V40c0-22.1 17.9-40 40-40zM96 112c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V218.5c0-12.7-5.1-24.9-14.1-33.9l-58.5-58.5c-9-9-21.2-14.1-33.9-14.1zm226.3 114.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-29.7 29.7v105.4l29.7 29.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L292.6 384H155.2l-29.7 29.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l29.7-29.7V267.3l-29.7-29.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l29.7 29.7h137.4zM160 368h128v-96H160zM362.3 74.3c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-64-64c-3.1-3.1-3.1-8.2 0-11.3M136 16c-13.3 0-24 10.7-24 24v56h160V40c0-13.3-10.7-24-24-24z"})
);

export default LanUtilityCanThin;
