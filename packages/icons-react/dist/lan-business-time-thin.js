import React from 'react';

export const LanBusinessTimeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M264 16h112c13.3 0 24 10.7 24 24v56H240V40c0-13.3 10.7-24 24-24m-40 24v56h-96c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h193.4c-2.4-5.2-4.6-10.6-6.5-16H128c-26.5 0-48-21.5-48-48V272h176v32c0 17.7 14.3 32 32 32h26.9c1.9-5.4 4.1-10.8 6.5-16H288c-8.8 0-16-7.2-16-16v-32h80.9c5-5.6 10.4-11 16.1-16H80v-96c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v58.9c5.4 1.9 10.8 4.1 16 6.5V160c0-35.3-28.7-64-64-64h-96V40c0-22.1-17.9-40-40-40H264c-22.1 0-40 17.9-40 40m272 232a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48v-64c0-4.4-3.6-8-8-8"})
);

export default LanBusinessTimeThin;
