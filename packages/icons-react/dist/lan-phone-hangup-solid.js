import React from 'react';

export const LanPhoneHangupSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M602 366.2c-10.1 17.7-31.8 25.1-50.6 17.4l-97.5-40.1c-16.6-6.8-26.7-23.7-24.9-41.5l5.7-56.7c-73.6-27.7-154.9-29-229.2-3.9l6.1 60.7c1.8 17.8-8.3 34.7-24.9 41.5l-97.6 40c-18.8 7.8-40.5.3-50.6-17.4l-2.9-5C2.4 303 7.6 219.8 72.9 177.3c149.9-97.5 344.7-97.5 494.6 0 65.4 42.5 70.5 125.8 37.3 183.9l-2.9 5z"})
);

export default LanPhoneHangupSolid;
