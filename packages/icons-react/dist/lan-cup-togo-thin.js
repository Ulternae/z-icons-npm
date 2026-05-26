import React from 'react';

export const LanCupTogoThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 80c5.5 0 10.6-2.8 13.6-7.5l30.6-49c2.9-4.7 8.1-7.5 13.6-7.5h268.5c5.5 0 10.6 2.8 13.6 7.5l30.6 49c2.9 4.7 8.1 7.5 13.6 7.5 8.8 0 16 7.2 16 16s-7.2 16-16 16H32c-8.8 0-16-7.2-16-16s7.2-16 16-16m353.4-65c-5.8-9.4-16.1-15-27.1-15H89.7c-11 0-21.3 5.7-27.1 15L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zM48.9 176l25.7 277.9c3 32.9 30.7 58.1 63.7 58.1h171.3c33.1 0 60.7-25.2 63.7-58.1L399 176h-16.1l-5.9 64H70.8l-5.9-64H48.8zm23.5 80h303.3l-11.9 128H84.2L72.3 256zm13.3 144h276.6l-4.9 52.4c-2.3 24.7-23 43.6-47.8 43.6H138.3c-24.8 0-45.5-18.9-47.8-43.6z"})
);

export default LanCupTogoThin;
