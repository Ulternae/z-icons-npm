import React from 'react';

export const LanMoneyBillTransferThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8.025 576.025 528.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m2.3 66.3 72-72c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L27.3 64H480c35.3 0 64 28.7 64 64v208.8l-8.4-8.4c-2.4-2.4-4.9-4.5-7.6-6.4V168c-48.6 0-88-39.4-88-88H27.3l58.4 58.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-72-72c-3.1-3.1-3.1-8.2 0-11.3zM528 152v-24c0-26.5-21.5-48-48-48h-24c0 39.8 32.2 72 72 72M288 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192M136 432h412.7l-58.3-58.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l72 72c3.1 3.1 3.1 8.2 0 11.3l-72 72c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l58.3-58.4H96c-35.3 0-64-28.7-64-64V175.2l8.4 8.4c2.4 2.4 4.9 4.5 7.6 6.4v154c48.6 0 88 39.4 88 88m-88-72v24c0 26.5 21.5 48 48 48h24c0-39.8-32.2-72-72-72"})
);

export default LanMoneyBillTransferThin;
