import React from 'react';

export const LanCartShoppingFastRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88-16C74.7-16 64-5.3 64 8s10.7 24 24 24h45.3c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H264.1c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3h279.8c42.2 0 78.4-29.9 86.4-71.4l26.3-137c4.8-24.7-14.1-47.6-39.3-47.6H188.7l-.4-2c-4.8-26.6-28-46-55.1-46zm427.1 256H226.5L197.4 80h381.5l-24.5 127.6c-3.6 18.8-20.1 32.4-39.3 32.4M320 464a48 48 0 1 0-96 0 48 48 0 1 0 96 0m224 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M24 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h96c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCartShoppingFastRegular;
