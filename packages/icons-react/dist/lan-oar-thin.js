import React from 'react';

export const LanOarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M474.8-5.6c3.1-3.1 8.2-3.1 11.3 0l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-26.4-26.4L320 235.7l-14.3 122.2c-1.1 8.9-5.1 17.2-11.4 23.6L148.1 527.7c-19.7 19.7-51.6 19.7-71.3 0l-60-60c-19.7-19.7-19.7-51.7 0-71.3l146.1-146.2c6.4-6.3 14.7-10.4 23.6-11.4l122.2-14.4L501.1 32 474.8 5.7c-3.1-3.1-3.1-8.2 0-11.3M188.4 254.7c-5.3.6-10.3 3-14.2 6.8L28.1 407.7c-13.4 13.4-13.4 35.2 0 48.7l60 60c13.4 13.4 35.2 13.4 48.7 0l146.1-146.2c3.8-3.8 6.2-8.8 6.8-14.2l13.5-114.9-114.9 13.6z"})
);

export default LanOarThin;
