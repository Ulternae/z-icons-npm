import React from 'react';

export const LanHoseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 104c0 13.3 10.7 24 24 24s24-10.7 24-24v-2.3l67.3-9.6c4.2 7.1 11.9 11.9 20.7 11.9 13.3 0 24-10.7 24-24V48c0-13.3-10.7-24-24-24-8.8 0-16.6 4.8-20.7 11.9L336 26.3V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H128C57.3 32 0 89.3 0 160s57.3 128 128 128h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h160zM32 336c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 112c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanHoseSolid;
