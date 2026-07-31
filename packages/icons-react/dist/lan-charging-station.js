import React from 'react';

export const LanChargingStation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 32c17.7 0 32 14.3 32 32v416H96V64c0-17.7 14.3-32 32-32zM64 64v416c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16V320c26.5 0 48 21.5 48 48v24c0 30.9 25.1 56 56 56s56-25.1 56-56V254.4c36.5-7.4 64-39.7 64-78.4v-32c0-8.8-7.2-16-16-16h-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-32V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-16c-8.8 0-16 7.2-16 16v32c0 38.7 27.5 71 64 78.4V392c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24c0-44.2-35.8-80-80-80V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64m400 96h80v16c0 26.5-21.5 48-48 48s-48-21.5-48-48v-16zm-217.3-55c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-82.3 82.3c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h71.1l-55 55c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l82.3-82.3c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9h-71.1z"})
);

export default LanChargingStation;
