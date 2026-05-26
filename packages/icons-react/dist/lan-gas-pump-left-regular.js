import React from 'react';

export const LanGasPumpLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 48c8.8 0 16 7.2 16 16v128H240V64c0-8.8 7.2-16 16-16zm16 416H240V240h192zM256 0c-35.3 0-64 28.7-64 64v400c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V304h8c13.3 0 24 10.7 24 24v24c0 35.3 28.7 64 64 64s64-28.7 64-64V156.4c0-13.9-5.2-27.4-14.6-37.7l-71.6-78.8c-8.9-9.8-24.1-10.5-33.9-1.6s-10.5 24.1-1.6 33.9l25.8 28.3V160c0 29.8 20.4 54.9 48 62v130c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24c0-39.8-32.2-72-72-72h-8V64c0-35.3-28.7-64-64-64zM99.1 164.2l-93 78.7c-3.9 3.2-6.1 8-6.1 13.1s2.2 9.9 6.1 13.2l93 78.7c3.2 2.7 7.2 4.2 11.3 4.2 9.7 0 17.6-7.9 17.6-17.6V177.6c0-9.7-7.9-17.6-17.6-17.6-4.2 0-8.2 1.5-11.3 4.2"})
);

export default LanGasPumpLeftRegular;
