import React from 'react';

export const LanRoadCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m201 91.6-88.2 312c-.6 2-.8 4-.8 6.1 0 12.3 10 22.3 22.3 22.3h172.4c2.8 16.8 7.8 32.9 14.8 48H134.4c-38.8 0-70.3-31.5-70.3-70.3 0-6.5.9-12.9 2.6-19.1l88.2-312C162.6 51 187.8 32 216.4 32h207.2c28.6 0 53.8 19 61.6 46.6l37.1 131.2c-8.6-1.2-17.3-1.8-26.2-1.8-8 0-16 .5-23.7 1.5L439 91.6c-2-6.8-8.3-11.6-15.4-11.6H344v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V80h-79.6c-7.2 0-13.4 4.8-15.4 11.6M321.4 320H320c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v66.7c-8.9 11.5-16.5 24-22.6 37.3M496 256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 228a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-180c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"})
);

export default LanRoadCircleExclamationRegular;
