import React from 'react';

export const LanH2 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h160v160c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v160H64zm288-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h108.3c32.9 0 59.7 26.7 59.7 59.7 0 21.6-11.7 41.5-30.5 52.1l-95.8 53.7C348.2 286.9 320 334.9 320 387v45c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H352v-29c0-40.5 21.9-77.9 57.3-97.7l95.8-53.7c28.9-16.2 46.9-46.8 46.9-80 0-50.6-41-91.7-91.7-91.7z"})
);

export default LanH2;
