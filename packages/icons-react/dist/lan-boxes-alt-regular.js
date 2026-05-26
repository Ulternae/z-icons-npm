import React from 'react';

export const LanBoxesAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 48c8.8 0 16 7.2 16 16v112h48V64c0-35.3-28.7-64-64-64H176c-35.3 0-64 28.7-64 64v112h48V64c0-8.8 7.2-16 16-16h32v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V48zm-20.1 464H448c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64H315.9c12.7 18.1 20.1 40.2 20.1 64v62.6c2.5.9 5.2 1.4 8 1.4h48c13.3 0 24-10.7 24-24v-56h32c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H334.9c-2.5 17.7-9.2 34-18.9 48zM240 288v160.1c0 8.8-7.2 15.9-16 15.9H64c-8.8 0-16-7.2-16-16V288c0-8.8 7.2-16 16-16h32v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56h32c8.8 0 15.9 7.1 16 15.9zM64 224c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64z"})
);

export default LanBoxesAltRegular;
