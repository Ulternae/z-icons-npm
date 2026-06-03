import React from 'react';

export const LanCalendarCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 0c13.3 0 24 10.7 24 24v40h160V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h32c35.3 0 64 28.7 64 64v86c-15.3-3.9-31.4-6-48-6-27.3 0-53.3 5.7-76.9 16H80v192c0 8.8 7.2 16 16 16h146.7c2.8 16.8 7.8 32.9 14.8 48H96c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V24c0-13.3 10.7-24 24-24m0 112H96c-8.8 0-16 7.2-16 16v48h352v-48c0-8.8-7.2-16-16-16zm280 144a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 228a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-180c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"})
);

export default LanCalendarCircleExclamationRegular;
