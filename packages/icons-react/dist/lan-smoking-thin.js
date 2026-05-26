import React from 'react';

export const LanSmokingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M408 0c4.4 0 8 3.6 8 8v35c0 40.3 16 79 44.5 107.5l21 21C501 191 512 217.4 512 245v35c0 4.4-3.6 8-8 8s-8-3.6-8-8v-35c0-23.3-9.3-45.7-25.8-62.2l-21-21C417.7 130.3 400 87.5 400 43V8c0-4.4 3.6-8 8-8m160 288c-4.4 0-8-3.6-8-8v-35c0-40.3-16-79-44.5-107.5l-21-21C475 97 464 70.6 464 43V8c0-4.4 3.6-8 8-8s8 3.6 8 8v35c0 23.3 9.3 45.7 25.8 62.2l21 21C558.3 157.7 576 200.5 576 245v35c0 4.4-3.6 8-8 8M64 368c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h240V368zm256 128h160c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16H320zM0 416c0-35.3 28.7-64 64-64h416c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm576-56v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V360c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanSmokingThin;
