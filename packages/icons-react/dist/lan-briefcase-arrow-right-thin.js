import React from 'react';

export const LanBriefcaseArrowRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M200 16h112c13.3 0 24 10.7 24 24v56H176V40c0-13.3 10.7-24 24-24m-40 24v56H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-96V40c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40m8 72h280c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48zm109.7 253.7 72-72c3.1-3.1 3.1-8.2 0-11.3l-72-72c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l58.3 58.3H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h156.7l-58.3 58.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z"})
);

export default LanBriefcaseArrowRightThin;
