import React from 'react';

export const LanFileJsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 400c4.4 0 8 3.6 8 8v96c0 22.1-17.9 40-40 40s-40-17.9-40-40v-16c0-4.4 3.6-8 8-8s8 3.6 8 8v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-4.4 3.6-8 8-8m120 0c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24c-13.3 0-24 10.7-24 24s10.7 24 24 24c22.1 0 40 17.9 40 40s-17.9 40-40 40h-32c-4.4 0-8-3.6-8-8s3.6-8 8-8h32c13.3 0 24-10.7 24-24s-10.7-24-24-24c-22.1 0-40-17.9-40-40s17.9-40 40-40zM235.8.3c14.7 1.5 28.4 7.9 38.9 18.4l122.6 122.5c12 12 18.7 28.3 18.7 45.2v149.5h-16V186.4q0-5.4-1.2-10.5L296 176c-30.9 0-56-25.1-56-56V17.2q-5.1-1.2-10.5-1.2H96c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h144v16H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5zM256 120c0 22.1 17.9 40 40 40h96c-1.8-2.7-3.8-5.2-6.1-7.4L263.4 30.1c-2.3-2.3-4.8-4.3-7.4-6.1z"})
);

export default LanFileJsThin;
