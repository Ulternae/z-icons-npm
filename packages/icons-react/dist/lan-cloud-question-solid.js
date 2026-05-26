import React from 'react';

export const LanCloudQuestionSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 480C64.5 480 0 415.5 0 336c0-63.4 41-117.2 97.9-136.5C96.6 191.8 96 184 96 176c0-79.5 64.5-144 144-144 55.4 0 103.5 31.3 127.6 77.1C381.8 100.8 398.4 96 416 96c53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7C545.5 256 576 300.4 576 352c0 70.7-57.3 128-128 128zm144-264c16.1 0 29.2 13.1 29.2 29.2 0 8.7-3.1 13.9-6.9 17.7-4.5 4.4-10.7 7.5-16.8 9.5-14.9 5-29.5 19.3-29.5 39.5 0 13.3 10.7 24 24 24 11.5 0 21.2-8.1 23.5-19 19.2-7.1 53.7-26.3 53.7-71.8 0-42.6-34.6-77.2-77.2-77.2s-77.2 34.6-77.2 77.2c0 13.3 10.7 24 24 24s24-10.7 24-24c0-16.1 13.1-29.2 29.2-29.2zm28 168a28 28 0 1 0-56 0 28 28 0 1 0 56 0"})
);

export default LanCloudQuestionSolid;
