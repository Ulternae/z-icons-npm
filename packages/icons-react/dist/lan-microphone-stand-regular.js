import React from 'react';

export const LanMicrophoneStandRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m229.8 218.1 64.2 64.2-172.1 157.2c-6.3 5.8-16.1 5.5-22.1-.5l-26.7-26.7c-6-6.1-6.3-15.8-.5-22.1zM331.6 252l-71.5-71.5-.1-14.5c-.1-16.6 6.1-33.1 18.7-45.8l5.8-5.8 113.1 113.1-5.8 5.8c-12.6 12.6-29.1 18.9-45.8 18.7l-14.5-.1zM318.7 80.8c31.4-25.6 77.8-23.8 107.1 5.5s31.1 75.6 5.5 107.1zm141-28.4c-50-50-131-50-181 0l-33.9 33.9c-22.1 22.1-33 51.1-32.8 80.1L37.2 357.8C14.1 383 15 422 39.2 446.2l26.6 26.7c24.2 24.2 63.2 25.2 88.5 2.1l77.9-71.1v116.2c0 13.3 10.7 24 24 24s24-10.7 24-24v-160l65.6-59.9c29 .2 58-10.7 80.1-32.8l33.9-33.9c50-50 50-131 0-181z"})
);

export default LanMicrophoneStandRegular;
