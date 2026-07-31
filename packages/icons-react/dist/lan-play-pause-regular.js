import React from 'react';

export const LanPlayPauseRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v336c0 13.3 10.7 24 24 24s24-10.7 24-24zm144 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v336c0 13.3 10.7 24 24 24s24-10.7 24-24zM48 381.8V130.2L199 256zm4.5-310.4C43 63.5 29.7 61.7 18.4 67S0 83.6 0 96v320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6z"})
);

export default LanPlayPauseRegular;
