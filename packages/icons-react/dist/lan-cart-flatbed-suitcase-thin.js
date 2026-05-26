import React from 'react';

export const LanCartFlatbedSuitcaseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 8c0-4.4 3.6-8 8-8h48c22.1 0 40 17.9 40 40v336c0 22.1 17.9 40 40 40h432c4.4 0 8 3.6 8 8s-3.6 8-8 8h-52.2c7.6 8.5 12.2 19.7 12.2 32 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32H227.8c7.6 8.5 12.2 19.7 12.2 32 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32H136c-30.9 0-56-25.1-56-56V40c0-13.3-10.7-24-24-24H8c-4.4 0-8-3.6-8-8m480 424a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-320 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m312-320H200c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V168c0-13.3-10.7-24-24-24m-272-16h56V88c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v40h56c22.1 0 40 17.9 40 40v144c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V168c0-22.1 17.9-40 40-40m72 0h128V88c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24z"})
);

export default LanCartFlatbedSuitcaseThin;
