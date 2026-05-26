import React from 'react';

export const LanGaugeCircleMinusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 496c13.6 0 26.9-1.1 39.8-3.3 2.8 5 5.8 9.9 9 14.6-15.8 3-32.1 4.6-48.8 4.6-141.4 0-256-114.6-256-256S146.6 0 288 0c126.8 0 232.1 92.2 252.4 213.2-5.5-1.3-11.1-2.4-16.8-3.2C502.1 99.5 404.8 16 288 16 155.5 16 48 123.5 48 256s107.5 240 240 240m8-207.5c12.9 1.6 24.6 7 33.9 15.1-2.8 4.8-5.3 9.7-7.7 14.7-8.7-8.8-20.8-14.3-34.2-14.3-26.5 0-48 21.5-48 48s21.5 48 48 48c5.6 0 11-1 16-2.7v2.7c0 4.7.2 9.3.5 13.9q-7.95 2.1-16.5 2.1c-35.3 0-64-28.7-64-64 0-32.6 24.4-59.6 56-63.5V80c0-4.4 3.6-8 8-8s8 3.6 8 8zM176 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 128a16 16 0 1 1 32 0 16 16 0 1 1-32 0m272-112a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112 400a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m72 144c0 4.4-3.6 8-8 8H432c-4.4 0-8-3.6-8-8s3.6-8 8-8h128c4.4 0 8 3.6 8 8"})
);

export default LanGaugeCircleMinusThin;
