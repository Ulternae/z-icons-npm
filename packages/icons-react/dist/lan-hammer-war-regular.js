import React from 'react';

export const LanHammerWarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 0c13.3 0 24 10.7 24 24v36.6l163.5-23.4c19.3-2.7 36.5 12.2 36.5 31.7v198.2c0 19.5-17.2 34.4-36.5 31.7L248 275.4V520c0 13.3-10.7 24-24 24s-24-10.7-24-24V275.4L36.5 298.8C17.2 301.5 0 286.6 0 267.1V68.9c0-19.5 17.2-34.4 36.5-31.7L200 60.6V24c0-13.3 10.7-24 24-24m176 248.7V87.4l-169.2 24.2c-4.5.6-9.1.6-13.6 0L48 87.3v161.4l169.2-24.2c4.5-.6 9.1-.6 13.6 0z"})
);

export default LanHammerWarRegular;
